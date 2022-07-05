<template>
  <div id="app" style="width:95%; text-align: center; margin: auto">
    <h1>KAS OSS Viewer</h1>
    <el-tabs>
    <el-tab-pane label="Search">
      <el-row>
        <el-col :span="22">
          <el-input v-model="searchPrefix" placeholder="Please input file prefix" clearable @keyup.enter="search" />
        </el-col>
        <el-col :span="2">
          <el-button type="primary" @click="search" style="width:90%;"> Search </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="searchResults" style="width: 100%">
          <el-table-column fixed prop="path" label="Path" min-width="80%"></el-table-column>
          <el-table-column fixed="right" label="Actions" min-width="20%">
            <template #default="scope">
              <el-button type="text" @click="() => show(scope.row.path)"> Show </el-button>
              <el-button type="text" @click="() => download(scope.row.path)"> Download </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="Files">
      <el-tree :load="loadNode" :props="props" node-key="path" lazy>
        <template #default="{ node }">
      <span class="custom-tree-node">
        <span> {{node.label}} </span>
        <span v-if="node.isLeaf">
          <el-button type="text" @click="() => show(node.key)"> Show </el-button>
          <el-button type="text" @click="() => download(node.key)"> Download </el-button>
        </span>
        <span v-else> {{node.info}} </span>
      </span>
        </template>
      </el-tree>
    </el-tab-pane>
    <el-dialog v-model="dialogVisible" :title="dialogFileName" center width="90%">
      <div class="code-style"> <span v-html="dialogCode"/> </div>
    </el-dialog>
  </el-tabs>
  </div>
</template>

<script>

import OSS from 'ali-oss'
import hljs from 'highlight.js'
import { ElMessage } from 'element-plus'

const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI5tCx79brCnGXxKGTsAst',
  accessKeySecret: 'F0IVmA99YzX2x8LWkGrp8WBjVH9qsa',
  bucket: 'canvas-imagenet',
  secure: true
})

export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      dialogFileName: 'filename',
      dialogCode: 'code',
      props: {
        label: 'name',
        isLeaf: 'leaf'
      },
      searchPrefix: '',
      searchResults: [],
    }
  },
  methods: {
    async search() {
      if (this.searchPrefix.length === 0)
        return
      this.searchResults = await this.listImpl(this.searchPrefix, '', false, true, false)
      ElMessage({
        message: 'Search done.',
        grouping: true,
        type: 'success',
      })
    },
    async show(path) {
      fetch(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${path}`)
          .then( response => response.text() )
          .then( text => {
            console.log(text)
            let highlighted = hljs.highlightAuto(text)
            this.dialogFileName = path
            this.dialogCode = `${highlighted.value}`
            this.dialogVisible = true
          })
    },
    async download(path) {
      window.open(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${path}`)
    },
    async loadNode(node, resolve) {
      return resolve(await this.listDir(node))
    },
    async listImpl(prefix, delimiter, allow_dir, allow_objs, allow_exact_dir_match) {
      const files = await client.list({
        prefix: prefix,
        delimiter: delimiter,
        'max-keys': 100
      })
      let data = []
      if (files.prefixes && allow_dir) {
        files.prefixes.forEach(subDir => {
          if (subDir !== prefix || allow_exact_dir_match) {
            data.push({
              name: subDir,
              leaf: false,
              path: subDir
            })
          }
        })
      }
      if (files.objects && allow_objs) {
        files.objects.forEach(obj => {
          data.push({
            name: obj.name.split('/').pop(),
            leaf: true,
            path: obj.name
          })
        })
      }
      return data
    },
    async listDir(node) {
      const data = await this.listImpl(node.key, '/', true, true, false)
      node.info = `[${data.length} files]`
      return data
    }
  }
}

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.code-style {
  width: auto;
  height: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-family: Consolas, Monaco, monospace;
}

</style>

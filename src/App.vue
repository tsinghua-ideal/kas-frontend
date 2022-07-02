<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <h1>KAS OSS Viewer</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-tree :load="loadNode" :props="props" node-key="path" @node-click="handleClick" lazy>
          <template #default="{ node }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              {{node.info}}
              <span v-if="node.isLeaf">
                <el-button type="text" @click="() => show(node)"> Show </el-button>
                <el-button type="text" @click="() => download(node)"> Download </el-button>
              </span>
            </span>
          </template>
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { ElMessageBox } from 'element-plus'
import OSS from 'ali-oss'

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
      props: {
        label: 'name',
        isLeaf: 'leaf'
      }
    }
  },
  methods: {
    async show(node) {
      fetch('https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/' + node.key)
          .then( response => response.text() )
          .then( text => ElMessageBox.alert(text, node.name, {confirmButtonText: 'OK'}))
    },
    async download(node) {
      window.open('https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/' + node.key)
    },
    async loadNode(node, resolve) {
      return resolve(await this.listDir(node))
    },
    async listDir(node) {
      const dir = node.key
      const files = await client.list({
        prefix: dir,
        delimiter: '/',
        'max-keys': 1000
      })
      let data = []
      if (files.prefixes) {
        files.prefixes.forEach(subDir => {
          if (subDir !== dir) {
            data.push({
              name: subDir,
              leaf: false,
              path: subDir
            })
          }
        })
      }
      if (files.objects) {
        files.objects.forEach(obj => {
          if (obj.name !== dir) {
            data.push({
              name: obj.name.split('/').pop(),
              leaf: true,
              path: obj.name
            })
          }
        })
      }
      node.info = '[' + data.length + ' files]'
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

</style>

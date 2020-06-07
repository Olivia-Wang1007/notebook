<template>
<div id="di">
  <!-- 整个表格 -->
  <!-- 选择框 -->
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
<!-- 第一列 -->
    <el-table-column
      label="事件列表"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>序号: {{ scope.row.name }}</p>
          <p>内容: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <!-- <input type="text"> -->
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <!-- 第二列 -->
        <el-table-column
      label="日期"
      width="180"
      >
      <template slot-scope="scope" show-header="false">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <!-- 第三列 -->
    <!-- 查看按钮 -->
    <el-table-column label="操作">
      <template slot-scope="scope">

  <el-button type="text" @click="dialogVisible = true"  size="mini"  plain style="margin-right: 10px">查  看    
          </el-button>

<el-dialog
  title="查看"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>{{ scope.row.address }}</span>
            <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" plain>确 定</el-button>
  </span>
</el-dialog>

<!-- 编辑按钮 -->

        <el-button type="text" @click="open" plain>编辑</el-button>

          



<!-- 删除按钮 -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          
      </template>
      
    </el-table-column>
  </el-table>
  <!-- 输入内容 -->

  </div>
</template>

  

<script>
// //对象
// const info = {name: "huo", age: 18,id: "1"}
// //字符串
// const str = "haha";

// localStorage.setItem('huo',JSON.stringify(info));

// localStorage.setItem('zheng',str)

  export default {
    data() {
      return {
        textarea: '',
        dialogVisible: false,
        modal1: false,
        tableData: [{
          date: '2016-05-02',
          name: '第一件事',
          address: '今天记录了第一件事'
        }, {
          date: '2016-05-04',
          name: '第二件事',
          address: '这是记事本的第二件事'
        }, {
          date: '2016-05-01',
          name: '第三件事',
          address: '已经连续记录三件事了'
        }, {
          date: '2016-05-03',
          name: '第四件事',
          address: '这是第四件事，第四件事'
        }],
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      ok () {
                this.$Message.info('点击了确定');
            },
      cancel () {
                this.$Message.info('点击了取消');
            },
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>
<style scoped>
#wbk{
  float: left;
}
#di{
  width:800px;
  
}
</style>
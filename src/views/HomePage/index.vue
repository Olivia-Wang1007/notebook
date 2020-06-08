<template>
  <div class="HomePage">
  
        <!-- 上面导航栏 -->
        <div id="tabbar">
            <p class="txt">我的记事本</p>
            <div >
           <router-link to="/User/User" id="cltxt">
<at-dropdown placement="bottom-right" @on-dropdown-command="handleCommand">
  <at-button size="small" ><i class="el-icon-user"></i>admin <i class="icon icon-chevron-down"></i></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">个人信息</at-dropdown-item>
    <router-link to="/Home"><at-dropdown-item name="guangzhou">退出</at-dropdown-item></router-link>
  </at-dropdown-menu>
</at-dropdown>

</router-link>
            </div>
 
      </div>
<!-- 中间按钮部分 -->
<!-- <div class="row" > -->

<!-- <el-button type="text" @click="open" class="btns" title="创建"><i class="el-icon-plus"></i>创建</el-button> -->
<!-- <el-button type="text" @click="open" class="btns" title="修改"><i class="el-icon-edit"></i>修改</el-button> -->
<!-- <el-button type="text" @click="open" class="btns"><i class="el-icon-delete"></i>删除</el-button> -->
<!-- <el-button type="text" @click="open1" class="btns">删除</el-button> -->

<!-- </div> -->
  <!-- <div id="mediumbox"> -->
   <!-- 下面的事件列表  -->
 <!-- <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column type="selection"  width="55">
    </el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->


<!-- <Create></Create> -->
<!-- <save></Save> -->
        
    <!-- </div> -->
    <!-- 测试代码 -->
    <!-- <Modify></Modify> -->
    	<div>
      <!-- <input type="text" name="" id="" v-model="todo">
      <button @click="add()">增加</button>

    </div> -->
 </div>
 <Test></Test>
 <Modal>我是一个弹窗</Modal>
  </div>
</template>
<script>
 import Modal from "@/components/User/modal.vue";
//import admin from '@/components/HomePage/admin.vue';
//import Create from "@/components/HomePage/create.vue";
 //import Save from "@/components/HomePage/save.vue";
  import Test from "@/components/User/test.vue";
//  import storage from './storage.js'
    export default {
       components: {
   // Modify,
    //Create,
    //Save,
    Test,
    Modal 
  },

          data() {
      return {
        return:{
      todo:'',
      list:[
        {title:'进行中',checked:true},
        {title:'已完成',checked:false}
      ]
    },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: ' 1518 '
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: ' 1518 '
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: ' 1518 '
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: ' 1518 '
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: ' 1518 '
        }],
        multipleSelection: []
      }
    },
    methods: {
      open() {
        this.$prompt('创建', '创建', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          //inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
       toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
  open1() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }

    }  
    }

</script>
<style scoped>
#bigbox{
width:800px;
height:500px;
border:2px solid black;
position:absolute;
margin:auto;
top:190px;
left:0;
right:0;
bottom:0;
border-radius: 5px;
}
.home{position: relative;}
#title{
  height: 80px;
  width: 200px;
  font-size: 30px;
  font-weight: bold; 
  color:black;
  right: 300px;
  left:300px;
    display: inline-block;
  margin: 0 50px;
  margin-top: 30px;
  
  
}
#mediumbox{
  height:200px;
  width:350px;

  margin:0 auto;
}
.s1{
  width:80px;
  height:20px;
  border:1px solid black;
  margin:0 auto;
  display:inline-block
}
.s2{
  display: inline;
}
.txt{

  float: left;
  margin-top: 15px;
  margin-left:30px;
  font-size: 20px;;
}
#tabbar{
    border-bottom:1px solid black;
    height:50px;
    width:100%;
}
#admin{
    float:right;
}
.btns{
    margin:0 auto;
    color:blue;
}
#cltxt{
    float: right;
    margin-top:15px;
    margin-right: 30px;
}
</style>
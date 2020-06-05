<template>
  <div class="HomePage">
    <div id="bigbox">
        <!-- 上面导航栏 -->
        <div id="tabbar">
            <p class="txt">我的记事本</p>
            <div id="cltxt">
           <router-link to="/User/User">
<at-dropdown placement="bottom-right" @on-dropdown-command="handleCommand">
  <at-button size="small" ><i class="el-icon-user"></i>admin <i class="icon icon-chevron-down"></i></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">个人信息</at-dropdown-item>
    <at-dropdown-item name="guangzhou">退出</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>

</router-link>
            </div>
 
      </div>
<!-- 中间按钮部分 -->
<div class="row" >
<el-button type="text" @click="open" class="btns"><i class="el-icon-plus"></i>创建</el-button>
<el-button type="text" @click="open" class="btns"><i class="el-icon-edit"></i>修改</el-button>
<el-button type="text" @click="open" class="btns"><i class="el-icon-delete"></i>删除</el-button>


</div>
  <div id="mediumbox">
   <!-- 下面的事件列表  -->
<at-table :columns="columns1" :data="data1"></at-table>





        
    </div>

  </div>
  </div>
</template>
<script>
//import admin from '@/components/HomePage/admin.vue';

 
    export default {
          data () {
      return {
             
                value: '',
            
        columns1: [
          {
            title: '选择',
            key: 'choose'
          },
          {
            title: '事件标题',
            key: 'title'
          },
          {
            title: '事件内容',
            key: 'content'
          }
        ],
        data1: [
          {
            choose: '库里',
            title: 18,
            address: '深圳市宝安区创业一路'
          },
          {
            choose: '詹姆斯',
            title: 25,
            address: '广州市天河区岗顶'
          },
          {
            choose: '詹姆斯',
            title: 25,
            address: '广州市天河区岗顶'
          },
          {
            choose: '詹姆斯',
            title: 25,
            address: '广州市天河区岗顶'
          }
        ]
      }
    },
    methods: {
      open() {
        this.$prompt('创建', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
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
  border:1px solid black;
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
  margin-top: 9px;;
}
#tabbar{
    border-bottom:2px solid black;
    height:50px;
    width:100%;
}
#admin{
    float:right;
}
.btns{
    margin:0 auto;
}
#cltxt{
    float: right;
    margin-top:15px;
}
</style>
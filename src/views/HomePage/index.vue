<template>
  <div class="HomePage"> 
<!-- 上面导航栏 -->
<div id="tabbar">
<p class="txt">我的记事本</p>
<router-link to="/User/User" id="cltxt">
<div>个人信息</div>
<router-link to="/Home"><div>退出</div></router-link>
</router-link>
</div>
    <!-- 表格 -->
 <NewTable></NewTable>
 
  </div>
</template>
<script>
//  import Modal from "@/components/User/modal.vue";

  import NewTable from "@/components/User/newTable.vue";

    export default {
       components: {
    NewTable,
   
  },

         
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
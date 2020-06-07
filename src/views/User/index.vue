<template>
  <div class="HomePage">
    



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
  <div id="mediumbox">
    <div class="srk">用户名: <input type="text" name="fname" /></div>
    <div class="srk"> 密 &#8195; 码: <input type="text" name="lname" /></div>
        
        <at-button type="primary">登陆</at-button>
        

    </div>

  
</div>
        
  

 
</template>

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

#mediumbox{
  height:200px;
  width:350px;
  border:1px solid black;
  margin-top:100px;
  margin-left:100px;
}
#tl{
float:left;
margin-top: 10px;
}，
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
.srk{
  margin:30px 30px 30px 30px;
}
.txt{

  float: left;
  margin-top: 9px;;
}
#tabbar{
    border-bottom:1px solid black;
    height:50px;
    width:100%;
}
#cltxt{
    float: right;
    margin-top:15px;
}
</style>
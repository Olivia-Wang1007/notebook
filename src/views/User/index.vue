<template>
  <div class="HomePage">
    


<div id="bigbox">
  <p id="title">我的记事本</p>
  <div id="mediumbox">
    <div>用户名: <input type="text" name="fname" /></div>
    <div> 密码: <input type="text" name="lname" /></div>
        
        <button>登陆</button>
    </div>

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
</style>
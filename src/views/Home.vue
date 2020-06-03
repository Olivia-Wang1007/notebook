<template>
  <div class="home">
    <HelloWorld msg=" " />
<div id="bigbox">
  <p id="title">个人记事本</p>
  <div id="mediumbox">
    <div>用户名: <input type="text" name="fname" /></div>
    <div> 密码: <input type="text" name="lname" /></div>
     
    
    </div>
  </div>
</div>
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style>
#bigbox{
width:800px;
height:500px;
border:2px solid black;
position:absolute;
margin:auto;
top:550px;
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
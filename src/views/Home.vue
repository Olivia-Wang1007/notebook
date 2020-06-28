<template>
  <div class="home">
    <p id="title">个人记事本</p>
    <div id="mediumbox">
      <div class="srk">用户名: <input type="text" name="fname" /></div>
      <div class="srk">
        密 &#8195; &#8195; 码: <input type="password" name="lname" />
      </div>

      <router-link to="/HomePage/HomePage"
        ><Button type="primary" class="bbtn">V1.0</Button></router-link
      >
      <router-link to="/newPage"
        ><Button type="error" class="bbtn">Vuex</Button></router-link
      >
      <router-link to="/Page2"
        ><Button type="warning" class="bbtn">compute</Button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
#bigbox {
  width: 800px;
  height: 500px;
  border: 2px solid black;
  position: absolute;
  margin: auto;
  top: 550px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
}
.home {
  position: relative;
}
#title {
  height: 80px;
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  color: black;
  right: 300px;
  left: 300px;
  display: inline-block;
  margin: 0 50px;
  margin-top: 30px;
}
#mediumbox {
  height: 200px;
  width: 350px;
  border: 1px solid black;
  margin: 0 auto;
}
.s1 {
  width: 80px;
  height: 20px;
  border: 1px solid black;
  margin: 0 auto;
  display: inline-block;
}
.s2 {
  display: inline;
}
.srk {
  margin: 30px 30px 30px 30px;
}
#btn {
  margin-right: 50px;
}
.bbtn {
  margin: 10px 10px 10px 10px;
}
</style>

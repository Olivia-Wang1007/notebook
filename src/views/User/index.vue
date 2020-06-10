<template>
  <div class="HomePage">
    <div id="tabbar">
      <p class="txt">我的记事本</p>
      <router-link to="/User/User" id="cltxt">
        <Dropdown>
          <a href="javascript:void(0)">
            admin
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem>个人信息</DropdownItem>
            <router-link to="/Home">
              <DropdownItem>退出</DropdownItem>
            </router-link>
          </DropdownMenu>
        </Dropdown>
      </router-link>
    </div>
    <div id="mediumbox">
      <div class="srk">
        用户名:
        <input type="text" name="fname" />
      </div>
      <div class="srk">
        密 &#8195; 码:
        <input type="password" name="lname" />
      </div>

      <Button type="primary">登陆</Button>
    </div>

  </div>
</template>
<script>

export default {

};
</script>
<style scoped>
#bigbox {
  width: 800px;
  height: 500px;
  border: 2px solid black;
  position: absolute;
  margin: auto;
  top: 190px;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
}
.home {
  position: relative;
}

#mediumbox {
  height: 200px;
  width: 350px;
  border: 1px solid black;
  margin-top: 100px;
  margin-left: 100px;
}
#tl {
  float: left;
  margin-top: 10px;
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
.txt {
  float: left;
  margin-top: 15px;
  margin-left: 50px;
  font-size: 20px;
   margin-bottom:15px;
}
#tabbar {
  border-bottom: 1px solid black;
  height: 50px;
  width: 100%;
}
#cltxt {
  float: right;
  margin-top: 15px;
  margin-right:50px;
}
</style>
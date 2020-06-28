<template>
  <div class="HomePage">
    <!-- 上面导航栏 -->
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
            <router-link to="/Home"
              ><DropdownItem>退出</DropdownItem></router-link
            >
          </DropdownMenu>
        </Dropdown>
      </router-link>
    </div>
    <!-- 表格 -->
    <Table2></Table2>
  </div>
</template>
<script>
import Table2 from "@/components/compute/Table2.vue";

export default {
  components: {
    Table2
  }
};
</script>
<style scoped>
#mediumbox {
  height: 200px;
  width: 350px;

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
.txt {
  float: left;
  margin-top: 15px;
  margin-left: 50px;
  font-size: 20px;
  margin-bottom: 15px;
}
#tabbar {
  border-bottom: 1px solid black;
  height: 50px;
  width: 100%;
}
#admin {
  float: right;
}
.btns {
  margin: 0 auto;
  color: blue;
}
#cltxt {
  float: right;
  margin-top: 15px;
  margin-right: 50px;
}
</style>


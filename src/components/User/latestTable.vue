<template>
  <div>
    <!-- 新建按钮和弹窗 -->
    <Button type="success" @click="createModal = true" class="btns"
      >新建</Button
    >
    <Modal
      v-model="createModal"
      title="新建"
      @on-ok="addUser"
      @on-cancel="cancel"
    >
      <Input
        v-model="obj.name"
        type="textarea"
        :rows="4"
        placeholder="请输入想要记录的内容..."
      />
      <input type="text" v-model="obj.time" /><br />
    </Modal>
    <!-- 修改按钮和弹窗 -->
    <Button type="warning" @click="modifyModal = true" class="btns"
      >修改</Button
    >
    <Modal v-model="modifyModal" title="修改" @on-ok="ok" @on-cancel="cancel">
      <p>Content of dialog</p>
    </Modal>
    <!-- 删除按钮 -->
    <Button type="error" class="btns">删除</Button>
    <!-- 表格区域 -->
    <!-- <div>
      <Table
        border
        ref="selection"
        :columns="columns4"
        :data="users"
        class="tab"
      ></Table>
      <Button @click="handleSelectAll(true)">全选</Button>
      <Button @click="handleSelectAll(false)">取消全选</Button>
    </div> -->
    <!-- 自制表格== -->
    <table class="tab" border="1" rules="all" bordercolor="#708090">
      <caption>
        个人记事本
      </caption>
      <thead>
        <th><Checkbox></Checkbox></th>
        <th>事件</th>
        <th>时间</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <td><Checkbox></Checkbox></td>
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 以下是vuex测试，复制来的代码 -->
    <div>
      <div style="margin:10px;">
        <input type="text" v-model="obj.name" /><br />
        <input type="text" v-model="obj.time" /><br />
        <button @click="addUser">新增用户</button>
      </div>
      <button @click="getAll">获取所有用户</button>
      <div>
        <li v-for="(item, index) in users" :key="index">
          <a href="javascript:;">{{ item.name }}</a>
          <a href="javascript:;">{{ item.time }}</a>
          <a href="javascript:;" @click="del(index)">删除用户</a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value6: "",
      obj: {},
      createModal: false,
      modifyModal: false,
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "事件",
          key: "content",
        },
        {
          title: "时间",
          key: "time",
        },
      ],

      allList: [],
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    getAll() {
      console.log(this.$store.getters.allUsers);
    },
    addUser() {
      this.$store.dispatch("addUser", {
        name: this.obj.name,
        time: new Date().toLocaleString(),
      });
    },
    del(i) {
      this.$store.dispatch("delUser", i);
    }
  },
  created() {},
  computed: {
    users() {
      return this.$store.getters.allUsers;
    },
  },
  //   watch: {
  //     time: function() {
  //       return (time = new Date().toLocaleString());
  //     },
  //   },
};
</script>

<style>
.btns {
  margin: 10px 50px;
}
.tab {
  width: 600px;
  margin: 0 auto;
}
caption {
  font-size: 24px;
  margin: 12px;
  color: black;
}
th,
td {
  border: solid 1px gray;
  padding: 8px;
  height: 40px;
}
td {
  text-align: center;
  color: black;
}
th {
  background-color: lightgray;
}
</style>

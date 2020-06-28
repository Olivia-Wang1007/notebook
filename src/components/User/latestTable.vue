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
        v-model="obj.content"
        type="textarea"
        :rows="4"
        placeholder="请输入想要记录的内容..."
      />
    </Modal>
    <!-- 修改按钮和弹窗 -->
    <Button type="warning" @click="modifyModal = true" class="btns"
      >修改</Button
    >
    <Modal
      v-model="modifyModal"
      title="修改"
      @on-ok="modifyOk"
      @on-cancel="cancel"
    >
      <!-- <p>Content of dialog</p> -->
      <Input v-model="nowContent" type="textarea" :rows="4" />
    </Modal>
    <!-- 删除按钮 -->
    <Button type="error" class="btns" @click="del">删除</Button>
    <!-- 表格区域 -->

    <Table
      border
      ref="selection"
      :columns="columns4"
      :data="allList"
      class="tab"
      @on-select="getRow"
      @on-select-cancel="cancelSelect"
      @on-row-click="checkContent"
    ></Table>
    <!-- 
    <div>
      <button @click="getAll">获取所有用户</button>
      <div>
        <li v-for="(item, index) in allList" :key="index">
          <a href="javascript:;">{{ item.content }}</a>
          <a href="javascript:;">{{ item.time }}</a>
          <a href="javascript:;" @click="del(index)">删除用户</a>
        </li>
      </div>
    </div> -->
    <!-- 查看的弹窗 -->
    <Modal v-model="checkModal" title="查看" @on-ok="ok" @on-cancel="cancel">
      <Input v-model="nowContent" :rows="4" type="textarea" />
    </Modal>

    <button @click="addtion">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkModal: false,
      nowContent: "",
      selectedItems: "",
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
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
      console.log(this.now);
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    getAll() {
      console.log(this.$store.getters.allUsers);
    },
    addUser() {
      this.$store.dispatch("addUser", {
        content: this.obj.content,
        time: new Date().toLocaleString(),
        id: Date.now().toString(36),
      });
    },
    del(i) {
      this.$store.dispatch("delUser", i);
    },
    addtion() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      console.log("怎么肥四啊addtion")
    },
    getRow(selection, row) {
      this.nowId = row.id;
      this.nowContent = row.content;
      this.content = "";
      this.selectedItems = selection;
    },
    cancelSelect(selection) {
      this.selectedItems = selection;
    },
    checkContent(content1) {
      this.checkModal = true;
      this.nowContent = content1.content;
    },
    findContent(con) {
      return con.id === this.nowId;
    },
    modifyOk() {
      this.old = this.allList.find(this.findContent);
      this.old.content = this.nowContent;
      this.old.time = new Date().toLocaleString();

      this.nowContent = null;
      this.nowId = null;
    },
    deleteConfirm() {
      console.log(this.now);
    },

    // deleteConfirm() {
    //   if (this.selectedItems.length == 0) {
    //     alert("请勾选想要删除的事件！");
    //   } else {
    //     this.$Modal.confirm({
    //       title: "确认删除选中内容吗？",
    //       onOk: () => {
    //         this.$Message.info("已删除");
    //         let selectedIds = this.selectedItems.map((item) => item.id);
    //         this.allList = this.allList.filter(
    //           (item) => !selectedIds.includes(item.id)
    //         );
    //       },
    //       onCancel: () => {
    //         this.$Message.info("取消操作");
    //       },
    //     });
    //   }
    // },
  },
  created() {},
  computed: {
    allList() {
      return this.$store.getters.delContent;
    },
    now() {
      return this.$store.getters.getTodoById(this.nowId);
    },
    count:function(){
        return this.$store.state.count;
    }
  },
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
#di {
  border: 2px solid hotpink;
  height: 50px;
  width: 100px;
}
</style>

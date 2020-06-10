<template>
  <div>
    <!-- 新建的弹窗-->
    <Button type="primary" @click="createModal = true" class="btns">新建</Button>
    <Modal v-model="createModal" title="新建" @on-ok="createOk" @on-cancel="cancel">
      <Input v-model="content" type="textarea" :rows="4" placeholder="输入你想记录的事..." />
    </Modal>

    <!-- 修改的弹窗 -->
    <Button @click="modal8 = true" type="primary" class="btns">修改</Button>
    <Modal title="修改" v-model="modal8" :mask-closable="false" @on-ok="modifyOk">
      <Input v-model="nowContent" :rows="4" type="textarea" />
    </Modal>

    <!-- 删除按钮 -->
    <Button @click="confirm" type="primary" class="btns">删除</Button>

    <!-- 表格区域 -->
    <Table
      border
      ref="selection"
      :columns="columns4"
      :data="allList"
      onselect
      @on-select="getRow"
      @on-row-click="checkModal = true"
    ></Table>

    <Button @click="handleSelectAll(true)">全选</Button>
    <Button @click="handleSelectAll(false)">取消全选</Button>

    <!-- 查看的弹窗 -->

    <Modal
      v-model="checkModal"
      title="查看"
      @on-ok="ok"
      @on-cancel="cancel"      
    >
     <Input v-model="allList.content" :rows="4" type="textarea" /> 
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkModal: false,
      nowContent: "",
      createModal: false,
      content: "",
      modal7: false,
      modal8: false,
      value17: "",
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "事件",
          key: "content"
        },
        {
          title: "时间",
          key: "time"
        }
      ],
      allList: []
    };
  },
  methods: {
    createOk() {
      // 把新项添加到allList里
      const list = {
        id: Date.now().toString(36),
        content: this.content,
        time: new Date().toLocaleString()
      };
      this.allList = [...this.allList, list];
      this.content = "";
      this.saveContent();
    },
    ok() {
      this.$Message.info("Clicked ok");
    },

    cancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    getRow(selection, row) {
      this.nowId = row.id;
      this.nowContent = row.content;
      this.content = "";
      this.saveContent();
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
      this.content = "";

      this.saveContent();
    },

    confirm() {
      this.$Modal.confirm({
        title: "确认删除选中内容吗？",

        onOk: () => {
          this.$Message.info("Clicked ok");

          console.log(this.allList.findIndex(this.findContent));
          this.index = this.allList.findIndex(this.findContent);
          this.allList.splice(this.index, 1);

          this.saveContent();
        },
        onCancel: () => {
          this.$Message.info("Clicked cancel");
        }
      });
    },
    saveContent() {
      const parsed = JSON.stringify(this.allList);
      localStorage.setItem("allList", parsed);
    },
    checkContent() {}
  },
  mounted() {
    if (localStorage.getItem("allList")) {
      try {
        this.allList = JSON.parse(localStorage.getItem("allList"));
      } catch (e) {
        localStorage.removeItem("allList");
      }
    }
  }
};
</script>
<style scoped>
.btns {
  margin: 10px 90px;
}
</style>
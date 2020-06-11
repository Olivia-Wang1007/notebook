<template>
  <div>
    <!-- 新建的弹窗-->
    <Button type="primary" @click="createModal = true" class="btns"
      >新建</Button
    >
    <Modal
      v-model="createModal"
      title="新建"
      @on-ok="createOk"
      @on-cancel="cancel"
    >
      <Input
        v-model="content"
        type="textarea"
        :rows="4"
        placeholder="输入你想记录的事..."
      />
    </Modal>

    <!-- 修改的弹窗 -->
    <Button @click="modifyBtn" type="primary" class="btns">修改</Button>
    <Modal
      title="修改"
      v-model="modifyModal"
      :mask-closable="false"
      @on-ok="modifyOk"
    >
      <Input v-model="nowContent" :rows="4" type="textarea" />
    </Modal>

    <!-- 删除按钮 -->
    <Button @click="confirm" type="primary" class="btns">删除</Button>

    <!-- 表格区域 -->
    <Table
      border
      stripe
      ref="selection"
      :columns="columns4"
      :data="allList"
      onselect
      @on-select="getRow"
      @on-row-click="checkContent"
      @on-select-cancel="cancelSelect"
    ></Table>

    <!-- 查看的弹窗 -->

    <Modal v-model="checkModal" title="查看" @on-ok="ok" @on-cancel="cancel">
      <Input v-model="nowContent" :rows="4" type="textarea" />
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cacelId:'',
      checkModal: false,
      nowContent: "",
      createModal: false,
      content: "",
      modal7: false,
      modifyModal: false,
      value17: "",
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
    createOk() {
      // 把新项添加到allList里
      const list = {
        id: Date.now().toString(36),
        content: this.content,
        time: new Date().toLocaleString(),
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
    getRow(selection, row) {
      this.nowId = row.id;
      this.nowContent = row.content;
      this.content = "";
      this.saveContent();
      this.selectedItems = selection;
    },
    cancelSelect(selection,row) {
      this.cancelId=row.id;
      //console.log(this.cancelId);//
      //console.log(selection) //[]
     // console.log(selection.id)//undefined
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
      //this.content = "";
      this.nowContent = "";

      this.saveContent();
    },

    confirm() {
      this.nowIndex = this.allList.findIndex(this.findContent);

      if (this.nowIndex < 0) {
        this.modifyModal = false;
        alert("请勾选想要删除的事件！");
      } else {
        this.$Modal.confirm({
          title: "确认删除选中内容吗？",
          onOk: () => {
            this.$Message.info("已删除");
            for (var i = 0; i < this.selectedItems.length; i++) {
              this.nowIndex = this.allList.findIndex(this.findContent);
              this.allList.splice(this.nowIndex, 1);
            }

            this.saveContent();
          },
          onCancel: () => {
            this.$Message.info("取消操作");
          },
        });
      }
    },
    saveContent() {
      const parsed = JSON.stringify(this.allList);
      localStorage.setItem("allList", parsed);
    },

    checkContent(content1) {
      this.checkModal = true;
      this.nowContent = content1.content;
    },
    modifyBtn() {
      //this.modifyModal = true;
      this.nowIndex = this.allList.findIndex(this.findContent);
      //consoleconsole.log(this.nowIndex);
      if (this.nowIndex < 0) {
        this.modifyModal = false;
        alert("请勾选想要修改的记录！");
      } else if (this.selectedItems.length > 1) {
        this.modifyModal = false;
        alert("一次只能修改一条记录！");
      } else {
        this.modifyModal = true;
      }
    },
  },
  mounted() {
    if (localStorage.getItem("allList")) {
      try {
        this.allList = JSON.parse(localStorage.getItem("allList"));
      } catch (e) {
        localStorage.removeItem("allList");
      }
    }
  },
};
</script>
<style scoped>
.btns {
  margin: 10px 90px;
}
</style>

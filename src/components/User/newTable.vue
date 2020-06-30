<template>
  <div>
    <!-- 按钮 -->
    <Button type="primary" @click="onCreateBtn" class="btns">新建</Button>
    <Button @click="onModifyBtn" type="primary" class="btns">修改</Button>
    <Button @click="onDeleteConfirm" type="primary" class="btns">删除</Button>
    <!-- 弹窗-->
    <Modal
      v-model="modal"
      :title="nowTitle"
      @on-ok="onModalOk"
      @on-cancel="cancel"
    >
      <!-- 新建输入框 -->
      <Input
        v-model="content"
        type="textarea"
        :rows="4"
        v-if="this.operation === 'create'"
        placeholder="输入你想记录的事..."
      />
      <!--修改的输入框 -->
      <Input
        ref="modifyRef"
        :value="selectedContent"
        :rows="4"
        type="textarea"
        @on-change="onModifyChange"
        v-else-if="this.operation === 'modify'"
      />
      <!-- 查看的输入框 -->
      <Input :value="cContent" :rows="4" type="textarea" v-else />
    </Modal>
    <!-- 表格区域 -->
    <Table
      border
      stripe
      ref="selection"
      :columns="columns"
      :data="allList"
      onselect
      @on-select="getRow"
      @on-select-cancel="onCancelSelect"
      @on-row-click="onCheckContent"
      @on-select-all="onSelectAll"
      class="tab"
    ></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      operation: "",
      selectedItems: null,
      modal: false,
      content: "",
      cContent: "",
      columns: [
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
  computed: {
    nowTitle: function() {
      return this.operation === "create"
        ? "新建"
        : this.operation === "modify"
        ? "修改"
        : "查看";
    },
    selectedContent: function() {
      return this.selectedItems && this.selectedItems[0].content;
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
  methods: {
    onModifyChange() {
      // const newValue = event.target.value;
    },
    onModalOk() {
      if (this.operation === "create") {
        const list = {
          id: Date.now().toString(36),
          content: this.content,
          time: new Date().toLocaleString(),
        };
        this.allList = [...this.allList, list];
        this.content = "";
        this.saveContent();
      } else if (this.operation === "modify") {
        const newValue = this.$refs["modifyRef"].$refs.textarea.value;
        this.old = this.allList.find(this.findContent);
        this.old.content = newValue;
        this.old.time = new Date().toLocaleString();
        this.nowId = null;

        this.saveContent();
      }
    },
    onCreateBtn() {
      this.operation = "create";
      this.modal = true;
    },
    ok() {},
    cancel() {},
    getRow(selection, row) {
      this.nowId = row.id;
      this.content = "";
      this.saveContent();
      this.selectedItems = selection;
    },
    onCancelSelect(selection) {
      this.selectedItems = selection;
    },
    onSelectAll(selection) {
      this.selectedItems = selection;
    },
    findContent(con) {
      return con.id === this.nowId;
    },
    onDeleteConfirm() {
      if (this.selectedItems.length == 0) {
        alert("请勾选想要删除的事件！");
      } else {
        this.$Modal.confirm({
          title: "确认删除选中内容吗？",
          onOk: () => {
            this.$Message.info("已删除");
            let selectedIds = this.selectedItems.map((item) => item.id);
            this.allList = this.allList.filter(
              (item) => !selectedIds.includes(item.id)
            );

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
    onCheckContent(content1) {
      this.modal = true;
      this.cContent = content1.content;
      this.operation = "check";
    },
    onModifyBtn() {
      this.operation = "modify";
      this.nowIndex = this.allList.findIndex(this.findContent);
      if (this.selectedItems.length == 0) {
        this.modal = false;
        alert("请勾选想要修改的记录！");
      } else if (this.selectedItems.length > 1) {
        this.modal = false;
        alert("一次只能修改一条记录！");
      } else {
        this.modal = true;
      }
    },
  },
};
</script>
<style scoped>
.btns {
  margin: 10px 50px;
}
.tab {
  width: 800px;
  margin: 0 auto;
}
</style>

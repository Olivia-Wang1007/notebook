<template>
  <div>
    <!-- 新建的弹窗-->
    <Button type="primary" @click="createModal = true" class="btns">新建</Button>
    <Modal v-model="createModal" title="新建" @on-ok="ok" @on-cancel="cancel">
      <Input v-model="content" type="textarea" :rows="4" placeholder="输入你想记录的事..." />
    </Modal>

    <!-- 修改的弹窗 -->
    <Button @click="modal8 = true" type="primary" class="btns">修改</Button>
    <Modal title="Title" v-model="modal8" :mask-closable="false">
      <Input v-model="value17" :rows="4" type="textarea" />
    </Modal>

    <!-- 删除按钮 -->
    <Button type="primary" class="btns">删除</Button>

    <!-- 表格区域 -->
    <Table border ref="selection" :columns="columns4" :data="allList"></Table>

    <Button @click="handleSelectAll(true)">Set all selected</Button>
    <Button @click="handleSelectAll(false)">Cancel all selected</Button>

    <!-- test -->
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      allList: [
        {
          content: "第一件事",
          time: "2020-06-09"
        }
      ]
    };
  },
  methods: {
    ok() {
      console.log(this.content);

      // 把新项添加到allList里
      const list = {content: this.content, time: new Date().toLocaleString()}
      this.allList = [...this.allList, list];
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    addItem: function() {
      this.inputList.push(this.inputItem);
      this.inputItem = {
        content: "",
        finished: false,
        deleted: false
      };
    }
  }
};
</script>
<style scoped>
.btns {
  margin: 10px 90px;
}
</style>
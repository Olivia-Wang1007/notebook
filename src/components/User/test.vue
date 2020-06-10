<template>
  <div class="ex1">
    <div class="row">
      <p>{{gettime}}</p>
      <el-button @click="showCont" class="btns">新建</el-button>
      <el-button @click="showCont1" class="btns">修改</el-button>
      <el-button @click="showCont1" class="btns">删除</el-button>
    </div>
    <div class="input-text">
      <!--列表内容-->
      <table border="1" class="task">
        <tr v-for="(item, index) in inputList" :key="item.id" class="biao">
          <!--单选框绑定了item.finished，还添加了点击事件-->
          <td>
            <input type="checkbox" :checked="item.finished" @click="changeState(index)" />
          </td>
          <!-- 输入内容列 -->
          <td>
            <span :class="{'finish':item.finished}">{{item.content}}</span>
          </td>

          <!-- 时间列 -->

          <td>{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</td>

          <!-- 删除按钮列 -->

          <td>
            <el-button
              @click="deleteItem(index)"
              class="del"
              :class="{'native':item.finished === true}"
              type="primary"
              plain
            >删除</el-button>
          </td>

          <!--通过item.finished值来动态绑定class-->

          <!--按钮的颜色通过动态添加class来实现，然后按钮的文本通过改变isDel来实现，isDel的改变也是通过changeState方法来操作的-->
        </tr>
      </table>
      <p class="empty" v-if="!inputList.length">暂无内容</p>

      <!--创建的 弹窗 -->

      <div class="mod" v-if="show">
        <div class="tab">
          <p>新建</p>
        </div>

        <label for="inputNum">请输入：</label>
        <input
          type="text"
          id="inputNum"
          name="inputNum"
          placeholder="请输入新建内容"
          @keydown.13="addItem"
          v-model="inputItem.content"
          class="edit"
        />
        <el-button type="primary" @click="addItem">确定</el-button>
        <el-button type="danger" @click="showCont">取消</el-button>
      </div>
      <!-- 查看的弹窗 -->
      <div class="mod" v-if="show1">
        <div class="tab">
          <p>查看</p>
          <div class="ck"></div>
        </div>
        <div></div>

        <el-button type="primary" @click="showCont1">确定</el-button>
        <el-button type="danger" @click="showCont1">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
//  import Modal from "@/components/User/modal.vue";
export default {
  data() {
    return {
      time: " ",
      show: false,
      show1: false,
      gettime: "",
      inputList: [],
      inputItem: {
        content: "",
        finished: false,
        deleted: false,
        isDel: false
      }
    };
  },
  methods: {
    addItem: function() {
      this.inputList.push(this.inputItem);
      this.inputItem = {
        content: "",
        finished: false,
        deleted: false
      };
      this.saveThin();
    },
    //改变选中状态
    changeState: function(index) {
      this.inputList[index].finished = !this.inputList[index].finished;
      // 根据finished的值来对应的修改isDel的值，isDel的值就是按钮的文本
      if (this.inputList[index].finished) {
        this.isDel = "删除";
      } else {
        this.isDel = "操作";
      }
      this.saveThin();
    },

    //删除列表元素
    deleteItem: function(index) {
      if (this.inputList[index].finished) {
        this.inputList.splice(index, 1);
      }
      this.saveThin();
    },
    //   弹窗
    showCont: function() {
      this.show = !this.show;
      //console.log("被点击了")
    },
    showCont1: function() {
      // this.inputList.push(this.inputItem);
      this.show1 = !this.show1;
      //console.log("被点击了")
    },
    saveThin() {
      const parsed = JSON.stringify(this.inputList);
      localStorage.setItem("inputList", parsed);
    }
  },
  mounted() {
    if (localStorage.getItem("inputList")) {
      try {
        this.inputList = JSON.parse(localStorage.getItem("inputList"));
      } catch (e) {
        localStorage.removeItem("inputList");
      }
    }
  }
};
</script>
<style scoped>
.ex1 {
  height: 400px;
  width: 500px;
  top: 50px;

  margin: 50px auto;
}
.input-text {
  margin-top: 40px;
}
.btns {
  margin: 0 auto;
  color: blue;
}
.edit {
  width: 200px;
  height: 130px;
  border: 1px solid black;
  border-radius: 3px;
}
.task {
  margin: 30px auto;
  width: 350px;
}
.mod {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  float: left;
  border: 1px solid black;
}
.ck {
  width: 130px;
  height: 130px;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
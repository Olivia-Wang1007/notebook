<template>
<div class="ex1">
    <div class="row" >

<el-button type="text" @click="open" class="btns" title="创建"><i class="el-icon-plus"></i>创建</el-button>
<el-button type="text" @click="open" class="btns" title="修改"><i class="el-icon-edit"></i>修改</el-button>
<!-- <el-button type="text" @click="open" class="btns"><i class="el-icon-delete"></i>删除</el-button> -->
<el-button type="text" @click="open1" class="btns" >删除</el-button>

</div>
   <div class="input-text">
	<label for="inputNum">请输入：</label>
	
	  <!--@keydow.13表示回车的事件-->
	  <!--v-model是为了让输入的数据和inputItem.content同步-->
	  
	  <input type="text" id="inputNum" name="inputNum" placeholder="请输入新建内容"
	    @keydown.13="addItem" v-model="inputItem.content" class="edit"
	  >

  <!--列表内容-->
  <ul class="task">
 <li v-for="(item, index) in inputList" :key="item.id" class="biao">
  <!--单选框绑定了item.finished，还添加了点击事件-->
  <input type="checkbox"
  :checked="item.finished"
  @click="changeState(index)"
  >
  <!--通过item.finished值来动态绑定class-->
  <span :class="{'finish':item.finished}">{{item.content}}</span>
  <!--按钮的颜色通过动态添加class来实现，然后按钮的文本通过改变isDel来实现，isDel的改变也是通过changeState方法来操作的-->
  <el-button @click="deleteItem(index)"
   class="del"
   :class="{'native':item.finished === true}"
  type="primary" plain
  >删除</el-button>
 </li>
</ul>
<p class="empty" v-if="!inputList.length">暂无内容</p>
  </div>
  <table border="1">
<tr>
<td>Row 1, cell 1</td>
<td>Row 1, cell 2</td>
<td>Row 1, cell 3</td>
</tr>
</table>
  <!-- 表格 -->
    <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="选择"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="事件"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
 export default {
data () {
      return {
        inputList: [],
        inputItem: {
          content: '',
	  finished: false,
      deleted: false,
      isDel:false,
          
    
       },
           tableData: [{
          date: ' ',
          name: ' ',
          address: ' '
        }]
      }
    },
  methods: {
   addItem: function() {
    this.inputList.push(this.inputItem);
  
  this.inputItem = {
      content: '',
      finished: false,
      deleted: false
  };
   },
   //改变选中状态
     changeState: function (index) {
       
        this.inputList[index].finished = !this.inputList[index].finished;
       
        // 根据finished的值来对应的修改isDel的值，isDel的值就是按钮的文本
        if (this.inputList[index].finished) {
  	  this.isDel = '删除'
        }else {
          this.isDel = '操作'
	}
      },

//删除列表元素
      deleteItem: function (index) {
	     if (this.inputList[index].finished) {
             this.inputList.splice(index,1);
	     }
      },
      open() {
        this.$prompt('创建', '创建', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你输入的内容是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
       toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
  open1() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }

 }
 }
</script>
<style scoped>
.ex1{
    height:400px;
    width:500px;
    top:50px;
    border:1px solid black;
    margin: 50px auto;
   
}
.input-text{
    margin-top:40px;

}
.btns{
    margin:0 auto;
    color:blue;
}
.edit{
    width:200px;
    height:60px;
    border: 1px solid black;
    border-radius: 3px;
    
}
.task{
    margin:30px auto;
    width: 250px;
    
}
.biao{
    border-bottom:1px dashed blue;
}


</style>
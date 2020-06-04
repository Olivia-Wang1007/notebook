<template>
  <div class="HomePage">
    <div id="bigbox">
        <!-- 上面导航栏 -->
        <div id="tabbar">
            <p id="txt">我的记事本</p>
            <router-link to="/User/User">
                <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            admin
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>个人信息</DropdownItem>
            <DropdownItem>退出</DropdownItem>
    

        </DropdownMenu>
    </Dropdown>
            </router-link>
            <div>


</div>
           
        </div>
<!-- 中间按钮部分 -->
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
        <Button type="primary">创建</Button>
    <Button type="primary">修改</Button>
    <Button type="primary">删除</Button>    
  <div id="mediumbox">
   <!-- 下面的事件列表  -->
    <div>
        <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
        <Button @click="handleClearCurrentRow">Clear</Button>
    </div>


        
    </div>

  </div>
  </div>
</template>
<script>
//import admin from '@/components/HomePage/admin.vue';
    export default {
        
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '这是啥',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '第一件事',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: '第二件事',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: '第三件事',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    }
                ]
            }
        },
        methods: {
            handleClearCurrentRow () {
                this.$refs.currentRowTable.clearCurrentRow();
            }
        }
    }

</script>
<style scoped>
#bigbox{
width:800px;
height:500px;
border:2px solid black;
position:absolute;
margin:auto;
top:190px;
left:0;
right:0;
bottom:0;
border-radius: 5px;
}
.home{position: relative;}
#title{
  height: 80px;
  width: 200px;
  font-size: 30px;
  font-weight: bold; 
  color:black;
  right: 300px;
  left:300px;
    display: inline-block;
  margin: 0 50px;
  margin-top: 30px;
  
  
}
#mediumbox{
  height:200px;
  width:350px;
  border:1px solid black;
  margin:0 auto;
}
.s1{
  width:80px;
  height:20px;
  border:1px solid black;
  margin:0 auto;
  display:inline-block
}
.s2{
  display: inline;
}
#txt{

  float: left;
}
#tabbar{
    border-bottom:2px solid black;
    height:50px;
    width:100%;
}
#admin{
    float:right;
}
</style>
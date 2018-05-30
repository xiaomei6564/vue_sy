<template>
   <div>
     <p id="app">
        <el-table :data="tableData" class="tb-edit" border style="width: 100%" highlight-current-row @row-click="handleCurrentChange" max-height="150" stripe>
            <el-table-column label="日期" width="100" fixed>
                <template slot-scope="scope">
                    <el-input size="small" v-model="scope.row.date" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.date}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-input size="small" v-model="scope.row.name" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址" min-width="200">
                <template slot-scope="scope">
                    <el-input size="small" v-model="scope.row.address" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.address}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                    <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br>数据:{{tableData}}</p>
   </div>
</template>
<script>

 export default {
  name: 'Helloworld',
  data () {
    return {
      tableData: [{                date: '2016-05-02',                name: '王小虎',                address: '上海市普陀区金沙江路 1518 弄'
            }, {                date: '2016-05-04',                name: '王小虎',                address: '上海市普陀区金沙江路 1517 弄'
            }, {                date: '2016-05-01',                name: '王小虎',                address: '上海市普陀区金沙江路 1519 弄'
            }, {                date: '2016-05-03',                name: '王小虎',                address: '上海市普陀区金沙江路 1516 弄'
            }],
      screenWidth: document.body.clientWidth // 这里是给到了一个默认值 （这个很重要）
      };
  },
 watch:{
            screenWidth: function(a, b) {  
                if (!this.timer) {
                    this.screenWidth = b
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        console.log(that.screenWidth)
                        // that.init()
                        that.timer = false
                    }, 400)
                }    
            }  
    },
  mounted() {
    const that = this;

     window.onresize = function() { 

                return (function(){ 

                     window.screenWidth = document.body.clientWidth;

                     that.screenWidth = window.screenWidth

                      })()

                  }
},
  methods:{
            handleCurrentChange(row, event, column) {                console.log(row, event, column, event.currentTarget)
            },
            handleEdit(index, row) {                console.log(index, row);
            },
            handleDelete(index, row) {                console.log(index, row);
             this.tableData.splice(index, 1);
            }
  }
};
</script>
<style lang="less" >

* {    margin: 0;    padding: 0}
body {    
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;    
  overflow: auto;    
  font-weight: 400;    
  -webkit-font-smoothing: antialiased;
}
.tb-edit .el-input {    
  display: none
}
.tb-edit .current-row .el-input {    
  display: block
}
.tb-edit .current-row .el-input+span {    
  display: none
}
/* .el-table td{
  height: 40px;
}
.el-table th{
      padding: 5px 0;
}*/
/* .el-table__fixed-right,.el-table__fixed{bottom: 12px !important;}  */
</style>

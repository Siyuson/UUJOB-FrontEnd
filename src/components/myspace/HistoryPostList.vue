<template>
    <el-row :gutter="20">
        <el-col :span="15" > 

          <div style="margin-bottom:10px">
            <span style="font-size:large"><el-icon style="margin-top:10px;"><Document /></el-icon>历史招聘发布栏</span>
          </div>

          <div v-for="recruitObj in recruitObjs">
            <el-card class="card" shadow="hover" @click="select(recruitObj.id)">    
              <template #header>
                <div class="card-header">
                  <span style="font-size:larger">{{recruitObj.title}}</span>
                  <el-button  type="danger" :icon="Delete" @click="deleteTable(recruitObj.id)" >撤销</el-button>
                </div>
                
              </template>
              <div class="salary">
                {{recruitObj.salary}}
              </div>          
              <div class="position">
                {{recruitObj.position}}
              </div>
              
              <div class="description">
                {{recruitObj.description}}
              </div>              
              
          </el-card> 
          </div>
          </el-col>

        <el-divider direction="vertical" style="height:50px;width:5px;solid"/>

        <el-col :span="8" >
          <div style="margin-bottom:10px">
            <span style="font-size:large"><el-icon style="margin-top:10px;"><Document /></el-icon>投递简历栏</span>
          </div>

          <el-card v-if="rightAsideVisible">
            <el-collapse >
              <el-collapse-item v-for="profile in profileList" title="简介">
                <el-descriptions
                  class="margin-top"
                  :column="1"
                  :size="size"
                  :style="blockMargin"
                >
                  <el-descriptions-item label="name">{{profile.name}}</el-descriptions-item>
                  <el-descriptions-item label="sex">{{profile.sex}}</el-descriptions-item>
                  <el-descriptions-item label="email">{{profile.email}}</el-descriptions-item>
                  <el-descriptions-item label="edu">{{profile.edu}}</el-descriptions-item>
                  <el-descriptions-item label="description">{{profile.description}}</el-descriptions-item>
                </el-descriptions>
              </el-collapse-item>
            </el-collapse>
          </el-card>
            
        </el-col>
    </el-row>


  </template>
  

<script>
import {Delete,Document} from '@element-plus/icons-vue';
import axios from "axios";
import {useStore } from "vuex";
import { ElMessage, ElMessageBox } from 'element-plus';

export default{

  data(){
    return {
      userId: useStore().state.userId,
      Document,Delete,
      select_id:"",
      rightAsideVisible: false,
      recruitObjs :[
        {
          id:"1",
          title:"蔚蓝求职",
          position:"算法工程师",
          salary:"1.5w-2w",
          description:"快来家人们",
        },
        {
          id:"2",
          title:"性感腾讯在线招人",
          position:"游戏架构师",
          salary:"5w-8w",
          description:"爱来来不来滚",
        },

      ],
      profileList:[
        {
          name:"张三",
          sex:"男",
          phone:"11451478910",
          email:"11@qq.com",
          edu:"学历",
          description:"描述",
        },
        {
          name:"张三",
          sex:"男",
          phone:"11451478910",
          email:"11@qq.com",
          edu:"学历",
          description:"描述",
        },
      ]
    }
  },
  methods:{

    async select(id){
      this.rightAsideVisible=true;
      this.select_id=id;

      this.updateRightCard();
    },

    async updateRightCard(){
      let that =this;
      //获取对应招聘表下的简历
      axios({
        method: "get",
        url: "http://localhost:9090/profile/tableProfile",
        params:{
            id:that.select_id,
        }
      }).then(function (response) {
        if(response.data.code == "200"){
          that.profileList=[];
          response.data.data.forEach(element => {
            that.profileList.push(
              {
                  name:element.name,
                  sex:element.sex,
                  email:element.email,
                  edu:element.edu,
                  description:element.description,
              }
            )
          });
        }else{
          alert("error");
        }
      })
    },

    async init(){
      let that =this;

      //获取对应用户id发布的招聘表
      axios({
        method: "get",
        url: "http://localhost:9090/recruitTable/myPost",
        params:{
            id:that.userId,
        }
      }).then(function (response) {
        if(response.data.code == "200"){
        that.recruitObjs=[];
        response.data.data.forEach(element => {
          that.recruitObjs.push(
            {
              id:element.id,
              title:element.title,
              position:element.position,
              salary:element.salary,
              description:element.description,
            }
          )
        });
      }else{
        alert("获取发布信息失败");
      }
      })

    },

    async deleteTable(id){
      let that =this;
      //that.select_id=id;

      ElMessageBox.confirm(
        '你确定要撤销该招聘信息吗?',
        'Warning',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).then(() => {
          ElMessage({
            type: 'success',
            message: '撤销成功',
          });

          //删除数据库中对应的招聘表
          axios({
            method: "post",
            url: "http://localhost:9090/recruitTable/delete",
            params:{
              tableId:id,
            }
          }).then(function (response) {
            if(response.data.code == "200"){
              alert("删除成功");
            }else{
              alert("error");
            }
            });
            that.init();
              
        }).catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消',
          })
        })
    }
  },
  mounted(){
    this.init()
  }
}
</script>


  <style>
  .position{
    font-size: large;
    margin-bottom: 10px;
  }

  .salary{
    font-size: medium;
    float: right;
    color: rgb(107, 171, 240);
  }

  .description{
    font-size: small;
    color: rgb(137, 137, 137);
  }
  .card {
    width: 550px;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    color: aliceblue;
  }
  
  .line{
    width: 1px;
    height: 100%;
    border-right: 1px solid rgb(0, 0, 0);
  }
  </style>
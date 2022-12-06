<template>
    
    <div class="box-card-up">
      <span style="font-size:large;">招聘栏信息</span>
      <div style="float:right"><el-button type="primary" plain>全部</el-button></div>  
    </div>
      <div class="demo-collapse">
          <div v-for="recruitObj in recruitObjs">
            <el-card class="box-card">    
              <template #header>
                <div class="card-header">
                  <span style="font-size:larger">{{recruitObj.title}}</span>
                  <el-button class="button" type="success">Apply</el-button>
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
      </div>
  </template>
  
<script>
import { ref } from 'vue';
import axios from "axios";

export default{
  data(){
   
    return {
      recruitObjs :[
        {
          index:"1",
          title:"蔚蓝求职",
          position:"算法工程师",
          salary:"1.5w-2w",
          description:"快来家人们",
        },
        {
          index:"2",
          title:"性感腾讯在线招人",
          position:"游戏架构师",
          salary:"5w-8w",
          description:"爱来来不来滚",
        },

      ]
    }
  },
  methods:{

    handleChange(val){
      console.log(val)
    },

    async getRecruitList(){
      let that = this ;
      axios({
        method: "get",
        url: "localhost:9090/recruitTable/allTable",
      }).then(function (response) {
        that.recruitObjs=[];
        response.data.forEach(element => {
          that.recruitObjs.push(
            {
              title:element.title,
              position:element.position,
              salary:element.salary,
              description:element.description,
            }
          )
        });
      })

    },
  },
  mounted(){
    this.getRecruitList();
  },
}

</script>\

  <style>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .text {
    font-size: 14px;
  }
  
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    width: 800px;
    margin-bottom: 10px;
  }
  .box-card-up {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

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
  </style>
  
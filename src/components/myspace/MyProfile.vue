<template>  
    <el-card class="box-card">
        <el-descriptions
        class="margin-top"
        title="我的简历"
        :column="3"
        border
        >
            <template #extra>
                <el-button type="primary" @click="init">Operation</el-button>
            </template>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <user />
                    </el-icon>
                    Username
                </div>
                </template>
                {{Profile.name}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <user />
                    </el-icon>
                    Sex
                </div>
                </template>
                {{Profile.sex}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <iphone />
                    </el-icon>
                    Telephone
                </div>
                </template>
                {{Profile.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <location />
                    </el-icon>
                    Email
                </div>
                </template>
                {{Profile.email}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <tickets />
                    </el-icon>
                    EDU
                </div>
                </template>
                {{Profile.edu}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <office-building />
                    </el-icon>
                    Company
                </div>
                </template>
                {{Profile.company}}
            </el-descriptions-item>
            <el-descriptions-item>
                <template #label>
                <div class="cell-item">
                    <el-icon>
                    <office-building />
                    </el-icon>
                    Position
                </div>
                </template>
                {{Profile.position}}
            </el-descriptions-item>
            
            </el-descriptions>

            <el-descriptions
                class="margin-top"
                direction="vertical"
                :column="1"
                border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                           详细描述
                        </div>
                        </template>
                        {{Profile.description}}
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    
  
   
  </template>
  
  <script>
  import { computed, ref } from 'vue'
  import {
    Iphone,
    Location,
    OfficeBuilding,
    Tickets,
    User,
  } from '@element-plus/icons-vue';
  import {useStore} from "vuex";
  import axios from "axios";
  
  export default{
    data(){
        return {
            Profile:{
                name:"张三",
                sex:"男",
                phone:"11451478910",
                email:"11@qq.com",
                edu:"学历",
                company:"公司",
                position:"职位",
                description:"描述",
            }

        }
    },
    methods: {
        async getProfile(){
            let that=this; 
            //首先从user表里面获取部分信息
            axios({
                method: "get",
                url: "http://localhost:9090/user/info",
                params: {
                    id: useStore().state.userId
                }
                // data: {
                //     //参数自己接
                //     id: that.useStore().state.userId,
                // },
            }).then(function (response) {
                if(response.data.code === "200"){
                    that.Profile = [];
                    that.Profile.name = response.data.data.name;
                    that.Profile.phone = response.data.data.phone;
                    that.Profile.company = response.data.data.company;
                    that.Profile.position = response.data.data.position;
                }
                else{
                    alert(response.data.msg);
                }
            });

            //然后从profile表里面获取部分信息
            axios({
                method: "get",
                url: "http://localhost:9090/profile",
                params: {
                    id: useStore().state.userId
                }
            }).then(function (response) {
                if(response.data.code==="200"){
                    
                    that.Profile.sex = response.data.data.sex;
                    that.Profile.edu = response.data.data.edu;
                    that.Profile.email = response.data.data.email;
                    that.Profile.description = response.data.data.description;
                }
                else{
                    alert(response.data.msg);
                }
            });

        },

    },
    mounted() {
        this.getProfile();
    },
  }
  
  </script>
  
  <style scoped>
  .el-descriptions {
    margin-top: 20px;
  }
  .cell-item {
    display: flex;
    align-items: center;
  }
  .margin-top {
    margin-top: 20px;
  }
  </style>
  
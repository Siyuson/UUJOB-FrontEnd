<template>
    <div>  
        <el-form :model="form" label-width="80px">
            <el-form-item label="投递用户">
              <span>{{form.userId}}</span>
            </el-form-item>

           
            <el-form-item label="年龄/岁">
                <el-col :span="5">
                    <el-input v-model="form.age" />
                </el-col>
                
                <el-col :span="3">
                    <span style="margin-left: 20px;">性别</span>
                  </el-col>

                <el-col :span="4">
                    <el-select v-model="form.sex" placeholder="性别">
                        <el-option label="男" value="男" />
                        <el-option label="女" value="女" />
                      </el-select>
                </el-col>
            </el-form-item>
            

            <el-col :span="10">
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" />
                </el-form-item>
            </el-col>

            
            <el-form-item label="学历">
                <el-col :span="4">
                    <el-select v-model="form.edu" placeholder="学历" >
                        <el-option label="博士" value="博士" />
                        <el-option label="硕士" value="硕士" />
                        <el-option label="本科" value="本科" />
                        <el-option label="大专" value="大专" />
                        <el-option label="其他" value="其他" />
                    </el-select>
                </el-col>
            </el-form-item>
            
            <el-form-item label="自我介绍">
                <el-input v-model="form.description" type="textarea" />
            </el-form-item>

            <el-form-item >
                <el-button type="primary" :icon="Check" @click="submit()" >确认投递</el-button>
              </el-form-item>
        </el-form>
        
        
    </div>
</template>

<script>
import {useStore } from "vuex";
import { Check} from '@element-plus/icons-vue'
import axios from "axios";

export default{
    props:{
        //从父组件获取的参数
        tableId:{
            type:Object,
            required:true,
        },
    },
    data(){

        return {
            Check,
            form:{
                userId: useStore().state.userId,
                age:"",
                sex:"",
                email:"",
                edu:"",
                description:"",
            }
        }
    },
    methods:{
        async submit(){
            let that = this;
            //post表单进个人简历,但是哄，简历那边还只是一个对象，需要进行修改，现就这样
            axios({
                method: "post",
                url: "http://localhost:9090/profile",
                params:{
                    recruitTable_id: that.tableId,
                },
                data:{
                    seeker_id:that.form.userId,
                    age:that.form.age,
                    sex:that.form.sex,
                    email:that.form.email,
                    edu:that.form.edu,
                    description:that.form.description,

                    
                },
            }).then(function (response) {
                alert(response.data.msg);
                if(response.data.code == "200"){
                   alert("提交成功");
                }else{
                    alert("error");
                }
            });

        }
    },
    mounted(){
        // alert(this.profileId);
    }
}

</script>
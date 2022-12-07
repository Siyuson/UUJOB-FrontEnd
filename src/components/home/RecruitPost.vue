<template>
    <div>  
        <el-form :model="Form" label-width="80px">
            <el-form-item label="发布用户">
              <span>{{Form.userId}}</span>
            </el-form-item>

            <el-col :span="11">
                <el-form-item label="标题">
                    <el-input v-model="Form.title" />
                </el-form-item>
            </el-col>

            <el-col :span="5">
                <el-form-item label="招聘岗位">
                    <el-input v-model="Form.position" />
                </el-form-item>
            </el-col>

            <el-col :span="8">
                <el-form-item label="招聘工资">
                    <el-input v-model="Form.salary" />
                </el-form-item>
            </el-col>
            
            <el-form-item label="详细描述">
                <el-input v-model="Form.description" type="textarea" />
            </el-form-item>

            <el-form-item >
                <el-button type="primary" :icon="Check" @click="submit()" >确认投递</el-button>
                <el-button type="danger" :icon="Delete"  @click="dialogVisible = true" >
                    取消投递
                </el-button>
              </el-form-item>
        </el-form>

        
        <el-dialog
            v-model="dialogVisible"
            title="Tips"
            width="30%"
            :before-close = true>
            <span>
                是否确定取消投递？
            </span>
            <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">不，点错了!</el-button>
                <el-button type="warning" @click="dialogVisible = false; handlecancel()">是，就要撤！</el-button>
            </span>
            </template>
        </el-dialog>
        
    </div>
</template>

<script lang="ts">
import { computed, ref ,reactive} from 'vue'
import { ElMessageBox } from 'element-plus'
import { ElNotification } from 'element-plus'
import { Delete,Check} from '@element-plus/icons-vue'
import {useStore} from "vuex"
import axios from 'axios'


export default{
    data(){
        const dialogVisible = ref(false);
        const size = ref('');
        const Form = reactive({
            userId: useStore().state.userId,
            title:"标题",
            position:"",
            salary:"",
            description:"",
        });

        return {
            Delete,Check,
            dialogVisible,
            size,
            Form,
        }
    },
    methods:{
        handlecancel (){
            ElNotification({
                title: '已取消',
                message: '已取消！',
                type: 'success',
            })
        },
        async submit(){
            let that=this;
            //首先从user表里面获取部分信息
            alert(this.dialogVisible);
            axios({
                method: "post",
                url: "http://localhost:9090/",
                data: {
                    //参数自己接
                    
                },
            }).then(function (response) {
                if(response.data.code==="200"){

                    alert("操作成功");
                }
                else{
                    alert(response.data.msg);
                }
            });

        },

    },
    mounted() {

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
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
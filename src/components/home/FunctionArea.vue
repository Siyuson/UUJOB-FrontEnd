<template>
    <el-card class="box-card2">
      <template #header>
        <div class="card-header">
          <span style="font-size: large;">功能面板</span>
        </div>
      </template>
      <el-button @click="dialogFormVisible = true" type="info" plain>发布岗位</el-button>
    </el-card>

    <el-dialog v-model="dialogFormVisible" title="请填写表单信息">
      <RecruitPost></RecruitPost>
    </el-dialog>
  </template>
  
<script>
import {reactive, ref} from 'vue';
import RecruitPost from "@/components/home/RecruitPost.vue";
export default{
  components:{
    RecruitPost,
  },
  data(){
    const dialogFormVisible  =ref(false);
    return {
      dialogFormVisible,
    }
  },
  methods: {
    
  },
}

</script>
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
  
  .box-card2 {
    width: 250px;
  }
  </style>
  
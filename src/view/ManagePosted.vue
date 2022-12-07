<template>
    <div>
        <div class="header">
            <el-row>
            <el-icon size="30px"> <Compass style="margin-right: 5px;" /> </el-icon>
            <div>我已投递的</div>
            </el-row>
        </div>
        
        <el-descriptions
        title="Vertical list with border"
        direction="vertical"
        :column="4"
        :size="size"
        border>
    <template #extra>
        <el-button type="danger" :icon="Delete"  @click="dialogVisible = true" >
            Withdraw!
        </el-button>
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
    </template>
    
    <el-descriptions-item label="Username">test</el-descriptions-item>
    <el-descriptions-item label="Telephone">test</el-descriptions-item>
    <el-descriptions-item label="Place" :span="2">test</el-descriptions-item>
    <el-descriptions-item label="Remarks">test</el-descriptions-item>
    <el-descriptions-item label="Address">
        test
    </el-descriptions-item>
</el-descriptions>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { ElNotification } from 'element-plus'
import { Delete} from '@element-plus/icons-vue'
import {
    Iphone,
    Location,
    OfficeBuilding,
    Tickets,
    User,
} from '@element-plus/icons-vue'
const dialogVisible = ref(false)
const size = ref('')

const handlecancel = () => {
    ElNotification({
    title: '操作成功',
    message: '操作成功！',
    type: 'success',
})
}
</script>

<style scoped>
.header{
    margin-top: 30px;
    font-family: "微软雅黑";
    font-size: large;
    color: #409EFF;
    vertical-align: middle;
}
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
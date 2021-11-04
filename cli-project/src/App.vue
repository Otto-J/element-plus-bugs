<template>
  <el-config-provider :locale="locale">
    <header></header>

    <main>
      {{ formModel }}
      <el-form
        ref="formRef"
        :model="formModel"
        :rules="formRules"
        v-loading="formLoading"
      >
        <el-form-item prop="name">
          <el-input
            v-model="formModel.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formModel.age" placeholder="age" />
        </el-form-item>
        <el-form-item>
          <!-- 这个有bug -->
          <!--  Component is missing template or render function.  -->
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="formSubmit">提交</el-button>
    </main>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
import { ref } from "vue";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";

const value1 = ref("");

const defaultModel = () => ({
  name: "",
  age: 0,
});
const formModel = ref(defaultModel());
const formRules: InstanceType<typeof ElForm>["rules"] = {
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      message: "请输入年龄",
    },
    {
      validator: (rule, value, callback) => {
        if (value < 0) {
          callback(new Error("年龄不能小于0"));
        } else {
          callback();
        }
      },
    },
  ],
};
const formRef = ref<InstanceType<typeof ElForm>>();
const formLoading = ref(false);
const formSubmit = () => {
  console.log(3);
  formLoading.value = true;

  formRef.value?.validate((valid) => {
    console.log(valid);
    ElMessage.success("3");

    setTimeout(() => {
      formLoading.value = false;
    }, 3000);
  });
};
</script>

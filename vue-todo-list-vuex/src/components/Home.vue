<template>
  <div>
    <h1>欢迎{{userName}}</h1>

    <button @click="handleReturnBox">返回</button>

    <router-link to="/">Hello</router-link>
    <br />
    <router-link :to="'/Home/'+userName+'/TodoList'">ToDoList列表</router-link>
    <br />
    <router-link :to="'/Home/'+userName+'/My'">我的</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "create-form",
  props: ["userName"],
  methods: {
    handleReturnBox: function() {
      if (confirm("确认返回欢迎页面？")) {
        this.$router.push("/");
      }
    }
  }
};
</script>
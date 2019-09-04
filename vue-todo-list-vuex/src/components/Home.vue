<template>
  <div>
    <h1>欢迎{{userName}}</h1>

    <button @click="handleReturnBox">返回</button>
    <br />
    <router-link :to="'/Home/'+userName+'/TodoList'">TodoList列表</router-link>
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

<style scoped>

.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>




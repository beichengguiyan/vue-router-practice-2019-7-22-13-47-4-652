<template>
  <div>
    <h1>欢迎{{userName}}</h1>

    <button id="para1" @click="handleReturnBox">返回</button>
    
    <p id="para2">用户：{{userName}}</p>
    <br />
    <router-link :to="'/Home/'+userName+'/TodoList'" id="para3">TodoList列表</router-link>
    <br />
    <router-link :to="'/Home/'+userName+'/My'" id="para4">我的</router-link>

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
#para1
{
  position:fixed;
  top:30px;
  left:10px;
	text-align:center;
	color:red;
} 

#para2
{
  position:fixed;
  top:30px;
  right:10px;
} 

#para3
{
  position:fixed;
  left:10px;
} 

#para4
{
  position:fixed;
  left:10px;
} 

</style>




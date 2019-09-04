<template>
  <div class="input-form">
    <div>
      <h1>您好!</h1>
    </div>
    <input type="input" v-model="inputtingItem" placeholder="请输入姓名" />
    <button @click="handleJump" >确定</button>
  </div>
</template>

<script>
export default {
  name: "create-form",
  data: function() {
    return {
      inputtingItem: ""
    };
  },
  methods: {
    handleJump: function() {
      this.$router.push({path:"/Home/"+this.inputtingItem});
    }
  }
};
</script>
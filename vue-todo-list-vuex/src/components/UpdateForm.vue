<template>
    <div class="update-form">
        <input type="input" v-model="inputtingItem">
        <input type="input" v-model="id">
        <button @click="handleUpdateTodo">upadate</button>
    </div>
</template>

<script>
    export default {
        name: "update-form",
        data: function () {
            return {
                inputtingItem: "",
                id:""
            }
        },
        methods: {
            handleUpdateTodo: function () {
                let obj ={};
                obj.inputtingItem= this.inputtingItem;
                obj.id = this.id;
                this.$store.dispatch("updateTodos",obj);
            }
        }
    }
</script>

<style scoped>

</style>

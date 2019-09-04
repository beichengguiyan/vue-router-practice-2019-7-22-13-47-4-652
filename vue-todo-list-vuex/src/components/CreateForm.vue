<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="handleCreateTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
            handleCreateTodo: function () {
                // this.$store.state.todoList.push({
                //     status: 'active',
                //     content:this.inputtingItem
                // })
                // this.$store.commit("createTodo", this.inputtingItem);
                this.$store.dispatch("createTodos",this.inputtingItem);
            }
        }
    }
</script>

<style scoped>

</style>

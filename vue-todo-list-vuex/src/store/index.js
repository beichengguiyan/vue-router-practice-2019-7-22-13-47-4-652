
import axios from "axios";
export default {
    strict: true,

    state: {
        todoList: [
            { status: 'completed', content: '吃饭' },
            { status: 'completed', content: '睡觉' },
            { status: 'completed', content: '打豆豆' }
        ],
        currentFilter: 'all'
    },

    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },

    mutations: {
        createTodo(state, inputtingItem) {
            state.todoList.push({
                status: 'active',
                content: inputtingItem
            })
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        changeFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },

        initTodos: function (state, todods) {
            state.todoList = todods;
        }

    },

    actions: {
        updateTodos(context, obj) {
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            //put
            console.log(53, obj)
            axios
                .put(url + "/" + obj.id, {
                    content: obj.inputtingItem,
                    status: "active"
                })
                .then(function (response) {
                    context.dispath("fetchTodos");
                })
                .catch(function (error) {
                    console.log(error.response);
                });
        },

        createTodos(context, inputtingItem) {
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            //post
            axios
                .post(url, {
                    content: inputtingItem,
                    status: "active"
                })
                .then(function (response) {
                    context.dispath("fetchTodos");
                })
                .catch(function (error) {
                    console.log(error.response);
                });
        },

        fetchTodos(context) {
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios
                .get(url)
                .then(function (response) {
                    console.log(context);
                    context.commit("initTodos", response.data);
                })
                .catch(function (error) {
                    console.log(error, response);
                });
        }
    }


}

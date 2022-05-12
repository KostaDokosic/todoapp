import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        todos: []
    },
    getters: {
        doesTitleExists: (state) => (title) => {
            return state.todos.find(t => t.title === title) !== undefined;
        }
    },
    actions: {
        async fetchTodos({commit}) {
            await axios.get("http://127.0.0.1:8000/todos")
                .then(response => commit.setTodos(response))
                .catch(e => console.error(e))
        }
    },
    mutations: {
        addNewTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, title) {
            const todo = this.state.todos.find(t => t.title === title);
            if(!todo) return;
            this.state.todos.splice(this.state.todos.indexOf(todo), 1);
        },
        setTodos(state, todos) {
            state.todos = todos;
        }
    },
    modules: {}
})

export default store

<template>
  <div class="todos">
    <Todo v-for="todo in $store.state.todos" :title="todo.title" :description="todo.description" />
  </div>
</template>

<script>
import Todo from './Todo.vue';
import {onMounted} from "vue";
import {useStore} from 'vuex'

export default {
    name: "Todos",
    components: {
        Todo
    },
    setup() {
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchTodos')
        })
    }
}
</script>

<style lang="scss" scoped>
.todos {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;

    .todo {
        background: gray;
        border-radius: 5px;
    }
}
</style>

<template>
    <form class="input" @submit.prevent="submit">
        <input type="text" placeholder="Create a new todo..." v-model="inputData.title" required />
    </form>
</template>

<script>

export default {
    data() {
        return {
            inputData: {title: '', description: ''},
        }
    },
    methods: {
        submit() {
            if(this.$store.getters.doesTitleExists(this.inputData.title)) return alert('This title already exist!')
            this.$store.commit('addNewTodo', {...this.inputData})
        }
    }
}
</script>

<style lang="scss" scoped>
    .input {
        border: 1px solid gray;
        background: gray;
        padding: 1rem;
        margin: 0;
        border-radius: 5px;

        input {
            border: 0;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            outline: none;
            background: transparent;
            color: white;

            &::placeholder {
                color: white;
            }
        }
    }
</style>

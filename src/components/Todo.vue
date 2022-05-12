<template>
    <div class="todo">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button type="button" @click="remove">Remove</button>
    </div>
</template>

<script>
export default {
    name: "Todo",
    props: {
        title: String,
        description: String
    },
    methods: {
        remove() {
            this.$store.commit('removeTodo', this.title);
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    padding: 0.65rem 1.5rem;
    margin: 1rem;
    border-radius: 5px;
    box-shadow: none;
    outline: none;
    border: 0;

    &:hover {
        background: lightgray;
    }
}
</style>

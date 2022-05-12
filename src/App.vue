<script setup>
import Input from './components/Input.vue'
import Todos from "./components/Todos.vue";
</script>

<template>
    <div class="container">
        <Input />
        <Todos />
    </div>
</template>

<style>
.container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 40vw;
    margin: 0 auto;
    margin-top: 5rem;
}
</style>

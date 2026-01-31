<script setup>
  import NavBar from "@/components/NavBar.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <NavBar v-if="!$route.meta.hideNavbar" />
  </header>

  <RouterView />
</template>

<style scoped></style>

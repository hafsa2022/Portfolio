<template>
  <v-container class="containerMax mb-4 mt-10"
    ><div class="mt-4 pt-8 ml-12 pl-11 text-center">
      <v-row justify="center">
        <Card v-for="project in projects" :key="project.id" :project="project"
      /></v-row></div
  ></v-container>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "MyProjectsView",
  data() {
    return {};
  },
  components: { Card },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

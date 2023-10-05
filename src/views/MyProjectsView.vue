<template>
  <v-container class="containerMax mt-12"
    ><div class="containt">
      <v-row
        ><v-col
          ><v-card-title
            style="font-size: 35px; color: #f7ce2de1"
            class="span-decoration"
            >My Projects</v-card-title
          >
          <v-card-text class="text-grey"
            >My portfolio is a series of stairs to expertise, with each project
            a step that has brought me closer to mastery</v-card-text
          ></v-col
        ></v-row
      >
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
  background-color: #2b2b2c;
}
.containt {
  position: relative;
  text-align: center;
  padding: 10px 300px;
  margin-bottom: 12px;
  height: 100%;
  width: 100%;
  color: #fff;
  margin-top: 20px;
}
.span-decoration {
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}
.span-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
</style>

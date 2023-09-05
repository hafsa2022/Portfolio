<template>
  <v-col lg="4" md="6" sm="12" xs="12" class="pl-2">
    <div class="">
      <v-card class="rounded-lg" elevation="3" width="500" height="450">
        <img
          :src="project.projectImg"
          width="500"
          height="300"
          class="img-decoration"
        />
        <v-card-title class="text-wrap">{{ project.projectName }}</v-card-title>
        <v-card-actions class="mx-auto">
          <v-row class="mt-4"
            ><v-col>
              <a :href="project.projectUrl" target="_blank">
                <v-btn variant="text" color="teal-accent-4" size="x-large">
                  See Demo
                </v-btn>
              </a></v-col
            ><v-col>
              <a :href="project.projectGithub" target="_blank">
                <v-btn variant="text" size="x-large" color="teal-accent-4">
                  <v-icon
                    color="teal-accent-4"
                    size="x-large"
                    class="icon-decoration"
                    >mdi-github
                  </v-icon></v-btn
                >
              </a>
            </v-col></v-row
          >
        </v-card-actions></v-card
      >
    </div></v-col
  >
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style>
.text-wrap {
  white-space: pre-wrap;
}
.img-decoration {
  transition: transform 1s ease-in-out;
}
.img-decoration:hover {
  transform: scale(1.1);
}
.icon-decoration:hover {
  background-color: black;
}
</style>

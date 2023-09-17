<template>
  <v-col lg="4" md="6" sm="12" xs="12" class="">
    <div class="">
      <v-card class="rounded-lg" elevation="3" width="400" height="430">
        <img
          :src="project.projectImg"
          width="400"
          height="250"
          class="img-decoration"
        />
        <v-card-title class="text-wrap">{{ project.projectName }}</v-card-title>
        <v-card-actions class="mx-auto">
          <v-row class="mt-4"
            ><v-col cols="6">
              <a :href="project.projectUrl" target="_blank">
                <v-btn variant="text" color="#f7ce2de1" size="large">
                  See Demo
                </v-btn>
              </a></v-col
            ><v-col cols="6">
              <a :href="project.projectGithub" target="_blank">
                <v-btn
                  variant="text"
                  size="large"
                  prepend-icon="mdi-github"
                  color="#f7ce2de1"
                >
                  <!-- <v-icon color="#09ee90" size="large" class=""
                    >mdi-github
                  </v-icon> -->
                </v-btn>
              </a>
            </v-col></v-row
          >
        </v-card-actions>
        <v-row justify="center"
          ><v-col
            cols="2"
            height="40"
            v-for="(i, index) in project.projectTechnologies"
            :key="index"
            ><v-card class="rounded-lg" elevation="0" width="40" height="30">
              <v-img
                :src="i.technology"
                width="40"
                height="30"
                class="img-decoration"
              ></v-img></v-card></v-col
        ></v-row>
      </v-card></div
  ></v-col>
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
</style>

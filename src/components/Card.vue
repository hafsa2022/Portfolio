<template>
  <v-col lg="4" md="12" sm="12" xs="12" class="">
    <div class="" style="margin: auto">
      <v-card class="rounded-lg" elevation="3" width="100%" height="480">
        <img
          :src="project.projectImg"
          width="400"
          height="250"
          class="img-decoration"
        />
        <v-card-title class="text-wrap">{{ project.projectName }}</v-card-title>
        <v-card-text class="text-gray">{{
          project.projectDesciption
        }}</v-card-text>
        <v-card-actions class="mx-auto" height="50">
          <v-row class=""
            ><v-col cols="6" v-if="project.projectUrl != ''">
              <a :href="project.projectUrl" target="_blank">
                <v-btn variant="text" color="#f7ce2de1" size="large">
                  See Demo
                </v-btn>
              </a></v-col
            ><v-col :cols="project.projectUrl == '' ? 12 : 6">
              <a :href="project.projectGithub" target="_blank">
                <v-btn variant="text" size="large" icon color="">
                  <v-icon color="#f7ce2de1" size="large" class=""
                    >mdi-github
                  </v-icon>
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

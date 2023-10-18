<template>
  <v-col lg="5" md="7" sm="7" xs="7" class="">
    <div class="" style="margin: auto">
      <v-card class="rounded-lg" elevation="3" width="100%">
        <img :src="project.projectImg" height="250" class="img-decoration" />
        <v-card-title class="text-wrap">{{ project.projectName }}</v-card-title>
        <v-card-text class="text-gray">{{
          project.projectDesciption
        }}</v-card-text>
        <v-card-actions class="mx-auto" height="50">
          <v-row class=""
            ><v-col lg="6" md="12" v-if="project.projectUrl != ''">
              <a :href="project.projectUrl" target="_blank">
                <v-btn variant="text" color="#f7ce2de1" size="large">
                  See Demo
                </v-btn>
              </a></v-col
            ><v-col :lg="project.projectUrl == '' ? 12 : 6" md="12">
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
        <v-card-actions class="">
          <v-row justify="center"
            ><v-col
              lg="2"
              md="2"
              sm="1"
              xsm="1"
              height="40"
              v-for="(i, index) in project.projectTechnologies"
              :key="index"
              ><v-card
                class="rounded-lg mx-auto"
                elevation="0"
                width="40"
                height="30"
              >
                <v-img
                  :src="i.technology"
                  width="40"
                  height="40"
                  class="img-decoration"
                ></v-img></v-card></v-col
          ></v-row>
        </v-card-actions>
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
  width: 440px;
}
.img-decoration:hover {
  transform: scale(1.1);
}
.card-decoration {
  height: 480px;
}
@media (max-width: 1500px) {
  .img-decoration {
    width: 340px;
  }
  .card-decoration {
    height: 500px;
  }
}
</style>

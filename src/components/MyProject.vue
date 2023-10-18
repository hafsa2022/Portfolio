<template>
  <v-row>
    <v-col cols="3" v-for="project in Projects">
      <div>
        <v-card>hloo</v-card>
      </div></v-col
    ></v-row
  >
</template>
<script>
export default {
  data() {
    return {
      projects: [
        { project1_url: "" },
        { project2_url: "" },
        { project3_url: "" },
      ],
    };
  },
};
</script>

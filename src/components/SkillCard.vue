<template>
  <v-col lg="2" md="4" sm="12" xs="12">
    <div class="text-center">
      <v-card
        class="rounded-lg card-decoration"
        elevation="3"
        width="200"
        height="95"
      >
        <v-card-title>
          <v-row
            ><v-col cols="4" class="mt-2"
              ><img left :src="skill.skillIcon" width="60" height="60" /></v-col
            ><v-col cols="8" class="mt-5">{{ skill.skillName }}</v-col></v-row
          ></v-card-title
        ></v-card
      >
    </div></v-col
  >
</template>
<script>
export default {
  name: "SkillCard",
  props: {
    skill: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style>
.card-decoration:hover {
  background-color: black;
  color: white;
  transform: translate3d(2px);
}
</style>

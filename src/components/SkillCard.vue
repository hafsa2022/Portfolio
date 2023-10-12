<template>
  <v-col lg="2" md="9" sm="9" xs="9">
    <div class="text-center">
      <v-card class="rounded-lg card-decoration" elevation="3" width="100%">
        <v-card-title>
          <v-row
            ><v-col cols="2" class="mt-2 mr-7"
              ><img left :src="skill.skillIcon" width="55" height="55" /></v-col
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
  background-color: #f7ce2de1;
  color: white;
  transform: translate3d(2px);
}
</style>

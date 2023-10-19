<template>
  <v-col lg="4" md="10" sm="10" xs="10">
    <div class="text-center">
      <v-card
        class="rounded-lg card-decoration"
        elevation="3"
        width="100%"
        height="30%"
      >
        <v-card-title>
          <v-row
            ><v-col cols="12" class="mt-2"
              ><img
                left
                :src="skill.skillIcon"
                width="70"
                height="70"
                class="mx-auto px-0 center-content"
                contain /></v-col
            ><v-col cols="12" class="mt-1" width="">{{
              skill.skillName
            }}</v-col></v-row
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
@media (max-width: 1400px) {
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

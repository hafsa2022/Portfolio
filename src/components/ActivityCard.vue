<template>
  <v-col lg="3" md="6" sm="12" xs="12" class="">
    <div>
      <v-card class="rounded" elevation="3" width="450" height="400">
        <img
          width="450"
          height="300"
          :src="activity.activityImg"
          class="img-decoration"
        /><v-card-title class="text-center mt-4">{{
          activity.activityName
        }}</v-card-title></v-card
      >
    </div></v-col
  >
</template>
<script>
export default {
  name: "ActivityCard",
  props: {
    activity: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style>
.img-decoration {
  transition: transform 1s ease-in-out;
}
.img-decoration:hover {
  transform: scale(1.1);
}
</style>

<template>
  <v-col lg="3" md="6" sm="12" xs="12" class="">
    <div>
      <v-card class="rounded-lg" elevation="3" width="300" height="350">
        <img
          width="300"
          height="350"
          :src="activity.activityImg"
          class="img-decoration"
        />
      </v-card></div
  ></v-col>
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

<template>
  <v-container class="containerMax mb-4 mt-12">
    <div>
      <v-row>
        <v-card elevation="0" class="mt-16">
          <template v-slot:title>
            <span style="font-size: 35px" class="text-green"
              >My Activities :
            </span></template
          >
          <v-card-text class="text-h5">
            <v-list lines="two">
              <v-list-item title=""
                >Member of the Together We Can Club .</v-list-item
              >
              <v-list-item title=""
                >Member of the Geoinformation Club .</v-list-item
              >
              <v-list-item title="">Member of a basketball team .</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-card elevation="0" class="mt-12 pb-2" width="100%">
          <template v-slot:title>
            <span style="font-size: 35px" class="text-green"
              >Some Pictures :
            </span></template
          ><v-row class="mt-2" justify="center">
            <br />
            <ActivityCard
              v-for="activity in activities"
              :key="activity.id"
              :activity="activity"
          /></v-row>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ActivityCard from "../components/ActivityCard.vue";
export default {
  name: "MyActivitiesView",
  data() {
    return {};
  },
  components: {
    ActivityCard,
  },
  computed: {
    activities() {
      return this.$store.state.activities;
    },
  },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

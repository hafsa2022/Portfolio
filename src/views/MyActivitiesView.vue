<template>
  <v-container class="containerMax mb-4 mt-4">
    <div>
      <v-row>
        <v-card elevation="0" class="mt-12">
          <template v-slot:title>
            <span style="font-size: 35px" class="text-green"
              >My Activities :
            </span></template
          >
          <v-card-text class="text-h4">
            <v-list lines="two">
              <v-list-item
                title="Member of the Together We Can Club ."
              ></v-list-item>
              <v-list-item
                title="Member of the Geoinformation Club ."
              ></v-list-item>
              <v-list-item title="Member of a basketball team ."></v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
        <v-card elevation="0" class="mt-12" width="100%">
          <template v-slot:title>
            <span style="font-size: 35px" class="text-green"
              >Pictures :
            </span></template
          ><v-row>
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

<template>
  <v-container class="containerMax mb-4 mt-12">
    <div>
      <v-row>
        <v-card elevation="0" class="mt-4 mx-auto" width="1200px">
          <v-card-text class="text-h5">
            <v-list lines="three">
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of the Together We Can Club
                </h5>
                <v-slide-group
                  v-model="model"
                  class="pa-4"
                  mandatory
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="(activity, i) in activitiesOfTwc"
                    :key="i"
                  >
                    <ActivityCard :activity="activity" />
                  </v-slide-group-item> </v-slide-group
              ></v-list-item>
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of the Geoinformation Club
                </h5>
                <v-slide-group
                  v-model="model"
                  class="pa-4"
                  mandatory
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="(activity, i) in activitiesOfGeo"
                    :key="i"
                  >
                    <ActivityCard :activity="activity" />
                  </v-slide-group-item> </v-slide-group
              ></v-list-item>
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of a basketball team
                </h5>
                <v-slide-group
                  v-model="model"
                  class="pa-4"
                  mandatory
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="(activity, i) in activitiesOfBasket"
                    :key="i"
                  >
                    <ActivityCard :activity="activity" />
                  </v-slide-group-item> </v-slide-group
              ></v-list-item>
            </v-list>
          </v-card-text>
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
    activitiesOfTwc() {
      return this.$store.state.activitiesOfTwc;
    },
    activitiesOfGeo() {
      return this.$store.state.activitiesOfGeo;
    },
    activitiesOfBasket() {
      return this.$store.state.activitiesOfBasket;
    },
  },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
.text-decoration {
  color: #09ee90;
  text-decoration: none;
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}

.text-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
</style>

<template>
  <v-container class="containerMax mt-14">
    <div style="background-color: #2b2b2c" class="containt mt-6">
      <v-row style="background-color: #2b2b2c">
        <v-card
          elevation="0"
          class="mt-4"
          width=""
          style="background-color: #2b2b2c"
        >
          <v-card-title
            style="font-size: 35px; color: #f7ce2de1"
            class="span-decoration text-center"
            >My Activities</v-card-title
          >
          <v-card-text class="">
            <span class="text-grey"
              >It is important in our lives to develop our skills through
              associative activities for this reason i integrated into the
              clubs</span
            >
            <v-template>
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of the Together We Can Club
                </h5>
                <span class="text-left text-white" style="font-size: 16px"
                  ><span style="color: #f7ce2de1">The T.W.C club</span> is a
                  humanitarian club which brings together a circle of young
                  students from different Moroccan higher education
                  <span v-if="readMore1">
                    establishments, with the common objective: The development
                    of the spirit of volunteerism. I learned several things by
                    communicating with the team and organizing the events.</span
                  >
                  <v-btn
                    class="ml-1"
                    style="background-color: #2b2b2c; color: white"
                    @click="readMore1 = !readMore1"
                    icon
                    size="x-small"
                    ><v-icon>
                      {{
                        readMore1 ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon
                    >
                  </v-btn>
                </span>

                <v-slide-group
                  v-model="model1"
                  class="pa-4"
                  center-active
                  show-arrows
                >
                  <v-slide-group-item
                    width="350"
                    v-for="(activity, i) in activitiesOfTwc"
                    :key="i"
                    v-slot="{ isSelected, toggle }"
                  >
                    <v-card
                      :color="isSelected ? 'grey-lighten-1' : 'grey-lighten-1'"
                      class="ma-4"
                      height="300"
                      width="350"
                      @click="toggle"
                    >
                      <div
                        class="d-flex fill-height align-center justify-center"
                      >
                        <v-scale-transition>
                          <img
                            v-if="!isSelected"
                            width="350"
                            height="300"
                            :src="activity.activityImg"
                            class="img-decoration"
                          />
                          <v-card-text v-if="isSelected" class="text-white">{{
                            activity.activityName
                          }}</v-card-text>
                        </v-scale-transition>
                      </div>
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group></v-list-item
              >
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of the Geoinformation Club
                </h5>
                <span class="text-left text-white" style="font-size: 16px">
                  <span style="color: #f7ce2de1">The geoinformation club</span>,
                  founded by engineering students in the geoinformation sector,
                  aims to promote knowledge and skills related to
                  <span v-if="readMore2">
                    geoinformation. It helps me to The club also aims to
                    strengthen links with other engineering students in the
                    sector and professionals in the field.</span
                  >
                  <v-btn
                    class="ml-1"
                    style="background-color: #2b2b2c; color: white"
                    @click="readMore2 = !readMore2"
                    icon
                    size="x-small"
                    ><v-icon>
                      {{
                        readMore2 ? "mdi-chevron-up" : "mdi-chevron-down"
                      }}</v-icon
                    >
                  </v-btn>
                </span>
                <v-slide-group
                  v-model="model2"
                  class="pa-4"
                  center-active
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="(activity, i) in activitiesOfGeo"
                    :key="i"
                    v-slot="{ isSelected, toggle }"
                    width="350"
                  >
                    <v-card
                      :color="isSelected ? 'grey-lighten-1' : 'grey-lighten-1'"
                      class="ma-4"
                      height="300"
                      width="350"
                      @click="toggle"
                    >
                      <div
                        class="d-flex fill-height align-center justify-center"
                      >
                        <v-scale-transition>
                          <img
                            v-if="!isSelected"
                            width="350"
                            height="300"
                            :src="activity.activityImg"
                            class="img-decoration"
                          />
                          <v-card-text v-if="isSelected" class="text-white">{{
                            activity.activityName
                          }}</v-card-text>
                        </v-scale-transition>
                      </div>
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group></v-list-item
              >
              <v-list-item title="" class="mb-10 mt-10">
                <h5 class="mb-10 text-decoration">
                  Member of a basketball team
                </h5>
                <span class="text-left text-white" style="font-size: 16px">
                  I like basketball, so I joined the university
                  <span style="color: #f7ce2de1">campus basketball team</span>.
                  It allows me to meet new people and participate in basketball
                  competitions.</span
                >
                <v-slide-group
                  v-model="model3"
                  class="pa-4"
                  center-active
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="(activity, i) in activitiesOfBasket"
                    :key="i"
                    v-slot="{ isSelected, toggle }"
                    width="350"
                  >
                    <v-card
                      :color="isSelected ? 'grey-lighten-1' : 'grey-lighten-1'"
                      class="ma-4"
                      height="300"
                      width="350"
                      @click="toggle"
                    >
                      <div
                        class="d-flex fill-height align-center justify-center"
                      >
                        <v-scale-transition>
                          <img
                            v-if="!isSelected"
                            width="350"
                            height="300"
                            :src="activity.activityImg"
                            class="img-decoration"
                          />
                          <v-card-text v-if="isSelected" class="text-white">{{
                            activity.activityName
                          }}</v-card-text>
                        </v-scale-transition>
                      </div>
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group></v-list-item
              >
            </v-template>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyActivitiesView",
  data() {
    return {
      readMore1: false,
      readMore2: false,
      model1: null,
      model2: null,
      model3: null,
    };
  },
  components: {},
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
  background-color: #2b2b2c;
}
.containt {
  position: relative;
  text-align: center;
  padding: 0px 300px;
  height: 100%;
  width: 100%;
  margin-top: -5px;
}
.text-decoration {
  color: #f7ce2de1;
  text-decoration: none;
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}
.text-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
.span-decoration {
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}
.span-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
.v-list {
  background-color: #2b2b2c;
}
.img-decoration {
  transition: transform 1s ease-in-out;
}
.img-decoration:hover {
  transform: scale(1.1);
}
@media (max-width: 980px) {
  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: content-box;
  }
  .containt {
    padding: 0px 0px;
    margin-bottom: 0px;
  }
}
</style>

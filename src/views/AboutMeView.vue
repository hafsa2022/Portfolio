<template>
  <v-container class="containerMax mb-4 mt-10"
    ><div class="mt-4">
      <v-row>
        <v-col lg="5" md="6" sm="6" xs="12" class="">
          <div class="mt-16 pt-16 image-container text-center">
            <v-img
              class="animated-image mx-auto"
              max-width="450"
              max-height="450"
              src="../assets/CP_hafsa.png"
            >
            </v-img>
          </div>
          <div class="mt-4 ml-4">
            <h2><v-icon color="green">mdi-account</v-icon> Hafsa El Akhdar</h2>
            <h2><v-icon color="green">mdi-calendar</v-icon> June 24, 2000</h2>
            <h2>
              <v-icon color="green">mdi-gmail</v-icon> h.hafsaelakhdar@gmail.com
            </h2>
            <h2>
              <v-icon color="green">mdi-map-marker</v-icon> Tangier,Morocco
            </h2>
          </div>
        </v-col>
        <v-col lg="7" md="12" sm="12" xs="12">
          <div class="mt-16">
            <!-- <h1 style="font-weight: 600"></h1> -->
            <v-card elevation="0" class="mt-4 ml-2 my-card-decoration">
              <template v-slot:title
                ><span style="font-size: 35px" class="text-green">
                  Who I am ?
                </span></template
              >
              <v-card-text class="text-h5 my-card-text">
                <strong>Hello there</strong> ,<br />
                My name is <strong>Hafsa El Akhdar</strong>, I'm a 6-month
                experienced <strong>Software Engineer</strong> who enjoys
                learning new technologies.<br />
                In this duration, I have learned a lot of technologies for
                example collecting data using Python, creating user interfaces
                using Vue.js and Vuetify, connecting to database PostgreSQL and
                SQLserver, and developing the apis using Laravel. <br />
                So I'm always seeking to have an opportunity that matches my
                skills, to make the best use of all that I have learned.
              </v-card-text>
            </v-card>
            <v-card elevation="0" class="mt-12 ml-2 my-card-decoration">
              <template v-slot:title>
                <span style="font-size: 35px" class="text-green"
                  >Education ?
                </span></template
              >
              <v-card-text class="text-h5 my-card-text">
                I am a freshly graduated engineer from the Faculty of Science
                and Technology of Tangier in
                <strong>Geoinormation</strong>.</v-card-text
              >
            </v-card>
            <v-card elevation="0" class="mt-12 ml-2 my-card-decoration">
              <template v-slot:title>
                <span style="font-size: 35px" class="text-green"
                  >Certificates ?
                </span></template
              >
              <v-card-text class="text-h5 my-card-text">
                <v-list lines="two">
                  <v-list-item title=""> Certified first aid .</v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
            <v-card elevation="0" class="mt-12 ml-2">
              <template v-slot:title>
                <span style="font-size: 35px" class="text-green"
                  >My Skills ?
                </span></template
              >
              <v-card-text class="text-h6"
                ><v-row
                  ><SkillCard
                    v-for="skill in skills"
                    :key="skill.id"
                    :skill="skill"
                /></v-row>
              </v-card-text>
            </v-card></div></v-col
      ></v-row>
    </div>
  </v-container>
</template>

<script>
import SkillCard from "../components/SkillCard.vue";
export default {
  name: "AboutView",
  data() {
    return {
      skills: [
        {
          id: 1,
          skillName: "HTML",
          skillIcon: require("../assets/html.png"),
        },
        {
          id: 2,
          skillName: "CSS",
          skillIcon: require("../assets/css.png"),
        },
        {
          id: 3,
          skillName: "Bootstrap",
          skillIcon: require("../assets/bootstrap.png"),
        },
        {
          id: 3,
          skillName: "JS",
          skillIcon: require("../assets/js.png"),
        },
        {
          id: 4,
          skillName: "Vuejs",
          skillIcon: require("../assets/vuejs.png"),
        },
        {
          id: 5,
          skillName: "Vuex",
          skillIcon: require("../assets/vuex.png"),
        },
        {
          id: 6,
          skillName: "Vuetify",
          skillIcon: require("../assets/vuetify.png"),
        },
        {
          id: 7,
          skillName: "Php",
          skillIcon: require("../assets/php.png"),
        },
        {
          id: 8,
          skillName: "PostgreSQL",
          skillIcon: require("../assets/postgresql.png"),
        },
        {
          id: 9,
          skillName: "Python",
          skillIcon: require("../assets/python.png"),
        },
        {
          id: 10,
          skillName: "C",
          skillIcon: require("../assets/c.png"),
        },
        {
          id: 11,
          skillName: "Laravel",
          skillIcon: require("../assets/laravel.png"),
        },
        {
          id: 12,
          skillName: "Google Maps",
          skillIcon: require("../assets/google maps.png"),
        },
      ],
    };
  },
  components: { SkillCard },
};
</script>

<style scoped>
.containerMax {
  max-width: 1900px !important;
  transform: translateX(-20px);
  transition: transform 3s;
}
.my-card-text {
  line-height: 1.5;
}
.animated-image {
  transition: transform 1s ease-in-out;
}

.image-container:hover .animated-image {
  transform: scale(1.1);
}
.my-card-decoration:hover {
  /* background-color: black;
  color: white; */
  box-shadow: 5px 5px 10px #888888;
}
</style>

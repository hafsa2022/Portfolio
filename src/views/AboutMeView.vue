<template>
  <v-container class="containerMax mt-2"
    ><div class="mt-4 containt">
      <v-row>
        <v-col lg="5" md="6" sm="6" xs="12" class="">
          <div class="mt-8 pt-10 image-container text-center">
            <v-img
              class="animated-image mx-auto"
              max-width="350"
              max-height="350"
              src="../assets/CP_hafsa.png"
            >
            </v-img>
          </div>
          <!-- <div class="mt-4 ml-4">
            <h2><v-icon color="green">mdi-account</v-icon> Hafsa El Akhdar</h2>
            <h2><v-icon color="green">mdi-calendar</v-icon> June 24, 2000</h2>
            <h2>
              <v-icon color="green">mdi-gmail</v-icon> h.hafsaelakhdar@gmail.com
            </h2>
            <h2>
              <v-icon color="green">mdi-map-marker</v-icon> Tangier,Morocco
            </h2>
          </div> -->
        </v-col>
        <v-col>
          <div class="mt-4 pt-4">
            <v-card elevation="0" class="mt-16 ml-2 my-card-decoration">
              <template v-slot:title
                ><span
                  style="font-size: 35px; color: #f7ce2de1"
                  class="span-decoration text-left"
                >
                  Who I am ?
                </span></template
              >
              <v-card-text class="text-h6 my-card-text text-left text-white">
                <strong>Hello there</strong> ,<br />
                My name is <strong>Hafsa El Akhdar</strong>, I'm a 6-month
                experienced <strong>Software Engineer</strong> who enjoys
                learning new technologies ...<br />
                <v-btn class="mt-1" style="background-color: #2b2b2c"
                  >read more</v-btn
                ><br />
                <!-- In this duration, I have learned a lot of technologies for
                example collecting data using Python, creating user interfaces
                using Vue.js and Vuetify, connecting to database PostgreSQL and
                SQLserver, and developing the apis using Laravel. <br />
                So I'm always seeking to have an opportunity that matches my
                skills, to make the best use of all that I have learned. -->
              </v-card-text>
            </v-card>
            <v-card elevation="0" class="ml-2 my-card-decoration">
              <template v-slot:title>
                <span
                  style="font-size: 35px; color: #f7ce2de1"
                  class="span-decoration text-left"
                  >Education ?
                </span></template
              >
              <v-card-text class="text-h6 my-card-text text-left text-white">
                I am a freshly graduated engineer from the Faculty of Science
                and Technology of Tangier in
                <strong>Geoinormation</strong>.</v-card-text
              >
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card elevation="0" class="ml-2" style="background-color: #2b2b2c">
            <template v-slot:title>
              <span
                style="font-size: 35px; color: #f7ce2de1"
                class="span-decoration"
                >My Skills ?
              </span></template
            >
            <v-card-text class="text-h6" style="background-color: #2b2b2c"
              ><v-row justify="center"
                ><SkillCard
                  v-for="skill in skills"
                  :key="skill.id"
                  :skill="skill"
              /></v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
  max-width: 2000px !important;
  /* transform: translateX(-20px);
  transition: transform 3s; */
  /* background-color: rgba(184, 182, 109, 0.733); */
  background-color: #2b2b2c;
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
.my-card-decoration {
  background-color: #2b2b2c;
}
.my-card-decoration:hover {
  box-shadow: 5px 5px 10px #888888;
}
.span-decoration {
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}
.span-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
.containt {
  position: relative;
  text-align: center;
  padding: 10px 300px;
  margin-bottom: 6px;
  height: 100%;
  width: 100%;
  color: #fff;
}
</style>

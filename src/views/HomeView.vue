<template>
  <v-container class="containerMax mt-4">
    <div class="head">
      <v-row class="" style="background-color: #1f1f21">
        <v-col lg="6" md="6" sm="12" xs="12">
          <div
            style="position: relative; padding-top: 150px"
            class="mt-16 image-container"
          >
            <v-img
              class="animated-image"
              max-height="400"
              max-width="400"
              contain
              :src="srcImg"
            />
          </div>
        </v-col>
        <v-col lg="6" md="6" sm="12" xs="12" class=""
          ><div
            style="position: relative; padding-top: 150px; padding-left: 70px"
            class="mt-16 text-left"
          >
            <h1
              class="text-white text-h4 mt-10 my-text"
              style="font-weight: 600;line-height 2;"
            >
              Hello, I'm
            </h1>
            <h1
              class="text-white text-h2 my-text"
              style="font-weight: 600;line-height 2;"
            >
              HAFSA EL AKHDAR
            </h1>
            <span
              class="text-h4 my-text animated-text typing-element"
              style="font-weight: 600; margin-top: 20px"
            ></span>

            <br />
            <div class="text-left">
              <a
                href="https://drive.google.com/file/d/16tARTAwK6nJZZDtwqbEpXt8NGO_g0ku9/view?usp=sharing"
                download="download.pdf"
              >
                <v-btn
                  tile
                  dark
                  class="mt-6 btn-download"
                  variant="outlined"
                  height="72"
                  min-width="200"
                  >Download CV</v-btn
                >
              </a>

              <v-btn
                tile
                dark
                class="text-white mt-6 ml-4 btn-contact"
                variant="outlined"
                height="72"
                min-width="200"
                to="/contact"
                >Contact Me</v-btn
              >
            </div>
            <div class="mt-10 icon-container text-left">
              <v-icon class="social-icon" color="">mdi-instagram</v-icon>
              <a href="https://www.linkedin.com/in/hafsa-el-akhdar-92b446198">
                <v-icon class="social-icon" color="">mdi-linkedin</v-icon></a
              >

              <a href="https://github.com/hafsa2022">
                <v-icon class="social-icon" color="">mdi-github</v-icon></a
              >
            </div>
          </div></v-col
        >
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Typed from "typed.js";
export default {
  name: "HomeView",

  data() {
    return {
      srcImg: require("../assets/CP_hafsa.png"),
      isRevealed: false,
    };
  },
  components: {},
  mounted() {
    const options = {
      strings: ["Software Engineer !", "GIS Engineering !"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    this.typed = new Typed(".typing-element", options);
  },
  methods: {},
};
</script>
<style scoped>
.containerMax {
  max-width: 2000px !important;
  background-color: #1f1f21;
}
.head {
  position: relative;
  text-align: center;
  padding: 10px 300px;
  margin-bottom: 6px;
  height: 100%;
  width: 100%;
  color: #fff;
}
/* .head:before {
  height: 100%;
  width: 50%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: #1f1f21;
  content: "";
  transform: skew(0deg, 10deg);
}
.head:after {
  height: 100%;
  width: 50%;
  right: 0;
  top: 0;
  position: absolute;
  background-color: #1f1f21;
  content: "";
  transform: skew(0deg, -10deg);
} */
.btn-download {
  color: white;
  background: #f7ce2de1;
  transition: all ease 0.5s;
  font-size: 15px;
  font-weight: 600;
  border-radius: 25px;
  border: 3px solid white;
}
.btn-contact {
  color: white;
  background: black;
  transition: all ease 0.5s;
  font-size: 15px;
  font-weight: 600;
  border-radius: 25px;
  border: none;
}
.btn-download:hover {
  transform: translateY(-5px);
  background: black;
}
.btn-contact:hover {
  transform: translateY(-5px);
  background-color: transparent;
}
.animated-image {
  transition: transform 1s ease-in-out;
}
.image-container {
  width: 450px;
  height: 450px;
}
.image-container:hover .animated-image {
  transform: scale(1.2);
}
.my-text {
  line-height: 1.5;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
}
.typing-element {
  color: #f7ce2de1;
}
.social-icon {
  font-size: 44px;
  margin-right: 10px;
  transition: transform 1s ease-in-out;
  color: white;
}
.social-icon:hover {
  transform: rotate(360deg);
  color: #ffde59;
}
/* .my-text-animation {
  animation: mynameanimation 8s ease-in-out 1s infinite alternate;
}
@keyframes mynameanimation {
  0% {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 1s, transform 1s;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
} */
@media (max-width: 1400px) {
  .v-img {
    max-height: 300px;
    max-width: 300px;
  }
  .social-icon {
    font-size: 22px;
  }
}
</style>

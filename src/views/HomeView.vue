<template>
  <v-container class="containerMax mb-4 mt-4">
    <div class="head">
      <v-row class="bg-black">
        <v-col cols="6" class=""
          ><div
            style="position: relative; padding-left: 100px"
            class="mt-16 pt-16 text-left"
          >
            <h1
              class="text-grey text-h4 mt-10 my-text"
              style="font-weight: 600;line-height 1.7"
            >
              Hello,
            </h1>
            <h1
              class="text-white text-h2 my-text my-text-animation"
              style="font-weight: 600;line-height 1.7"
            >
              I'M HAFSA EL AKHDAR
            </h1>

            <span
              class="text-grey text-h4 my-text animated-text"
              style="font-weight: 600; margin-top: 20px"
              >SoftWare Enginner & Full Stack Developper!</span
            >

            <br />
            <div class="text-center">
              <a
                href="https://drive.google.com/file/d/16tARTAwK6nJZZDtwqbEpXt8NGO_g0ku9/view?usp=sharing"
                download="download.pdf"
              >
                <v-btn
                  tile
                  dark
                  class="text-green mt-6 btn-style"
                  variant="outlined"
                  height="72"
                  min-width="200"
                  >Download CV</v-btn
                >
              </a>

              <v-btn
                tile
                dark
                class="text-green mt-6 ml-4 btn-style"
                variant="outlined"
                height="72"
                min-width="200"
                to="/contact"
                >Contact Me</v-btn
              >
            </div>
            <div class="mt-10 icon-container text-center">
              <v-icon class="social-icon" color="white lighten-1"
                >mdi-instagram</v-icon
              >
              <a href="https://www.linkedin.com/in/hafsa-el-akhdar-92b446198">
                <v-icon class="social-icon" color="white lighten-1"
                  >mdi-linkedin</v-icon
                ></a
              >

              <a href="https://github.com/hafsa2022">
                <v-icon class="social-icon" color="white lighten-1"
                  >mdi-github</v-icon
                ></a
              >
            </div>
          </div></v-col
        >
        <v-col cols="1" class=""> </v-col>
        <v-col cols="5" class="">
          <div
            style="position: relative; z-index: 9999"
            class="mt-16 pt-16 image-container"
          >
            <v-img
              class="animated-image"
              contain
              max-height="500"
              width="500"
              src="@/assets/CP_hafsa.png"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped>
.containerMax {
  max-width: 2000px !important;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 900px;
  width: 100%;
  color: #fff;
}
.head:before {
  height: 100%;
  width: 50%;
  left: 0;
  top: 0;
  position: absolute;
  background-color: black;
  content: "";
  transform: skew(0deg, 10deg);
}
.head:after {
  height: 100%;
  width: 50%;
  right: 0;
  top: 0;
  position: absolute;
  background-color: black;
  content: "";
  transform: skew(0deg, -10deg);
}
.btn-style:hover {
  transform: translateY(-5px);
  background-color: #fff;
}
.social-icon {
  font-size: 44px;
  margin-right: 10px;
  transition: transform 1s ease-in-out;
}
.social-icon:hover {
  transform: scale(1.3);
}
.animated-image {
  transition: transform 1s ease-in-out;
}

.image-container:hover .animated-image {
  transform: scale(1.2);
}
.my-text {
  line-height: 1.5;
}
.my-text-animation {
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
}
/* 
.animated-text {
  animation: myanimation 4s linear 2s infinite alternate;
}
@keyframes myanimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 1s, transform 1s;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>

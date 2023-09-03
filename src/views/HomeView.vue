<template>
  <v-container class="containerMax mb-4 mt-4">
    <div class="head">
      <v-row class="bg-black">
        <v-col cols="5" class=""
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
              class="text-white text-h2 my-text"
              style="font-weight: 600;line-height 1.7"
            >
              I'M HAFSA EL AKHDAR
            </h1>
            <span
              class="text-grey text-h4 my-text"
              style="font-weight: 600; margin-top: 20px"
              >SoftWare Enginner & Full Stack Developper</span
            ><br />
            <div class="text-center">
              <v-btn
                tile
                dark
                class="text-green mt-6 btn-style"
                variant="outlined"
                height="72"
                min-width="200"
                >Download CV</v-btn
              >
              <v-btn
                tile
                dark
                class="text-green mt-6 ml-4 btn-style"
                variant="outlined"
                height="72"
                min-width="200"
                >Contact Me</v-btn
              >
            </div>
            <div class="mt-10 icon-container text-center">
              <v-icon class="social-icon" color="white lighten-1"
                >mdi-instagram</v-icon
              >
              <v-icon class="social-icon" color="white lighten-1"
                >mdi-linkedin</v-icon
              >
              <v-icon class="social-icon" color="white lighten-1"
                >mdi-github</v-icon
              >
            </div>
          </div></v-col
        >
        <v-col cols="2" class=""> </v-col>
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
              src="../assets/CP_hafsa.png"
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
  components: {},
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
</style>

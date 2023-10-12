<template>
  <v-container class="containerMax mt-4">
    <div class="head">
      <v-row class="" style="background-color: #1f1f21">
        <v-col lg="6" md="12" sm="12" xs="12">
          <div style="position: relative" class="mt-16 image-container">
            <v-img
              class="animated-image"
              max-height="400"
              max-width="400"
              contain
              :src="srcImg"
            />
          </div>
        </v-col>
        <v-col lg="6" md="12" sm="12" xs="12" class=""
          ><div
            style="position: relative"
            class="mt-16 text-left text-container"
          >
            <h1
              class="text-white mt-10 my-text"
              style="font-weight: 580;line-height 2;"
            >
              Hello, I'm
            </h1>
            <h1
              class="text-white my-text"
              style="font-weight: 580;line-height 2;"
            >
              HAFSA EL AKHDAR
            </h1>
            <span
              class="my-text typing-element"
              style="font-weight: 580; margin-top: 20px"
            ></span>
            <div style="margin-top: 20px">
              <span class="text-grey">Best Welcome To My Portfolio !</span
              ><br />
              <span class="text-grey"
                >This Work Resume All Information About Me !</span
              >
            </div>

            <br />
            <div class="text-left btns">
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
                class="text-white mt-6 btn-contact"
                variant="outlined"
                height="72"
                min-width="200"
                to="/contact"
                >Contact Me</v-btn
              >
            </div>
            <div class="mt-10 icon-container text-left">
              <a href="https://github.com/hafsa2022">
                <v-icon class="social-icon" color="">mdi-github</v-icon></a
              >
              <a href="https://www.linkedin.com/in/hafsa-el-akhdar-92b446198">
                <v-icon class="social-icon" color="">mdi-linkedin</v-icon></a
              >
              <a href="#"
                ><v-icon class="social-icon" color="">mdi-instagram</v-icon></a
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
      windowWidth: null,
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
  height: 900px;
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
  margin-left: 20px;
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
  padding-top: 200px;
}
.image-container:hover .animated-image {
  transform: scale(1.2);
}
.my-text {
  line-height: 1.5;
  font-family: "Rubik", sans-serif;
  letter-spacing: 4px;
  font-size: 2.3em;
  font-weight: bolder;
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
.text-container {
  padding-top: 140px;
  padding-left: 70px;
}
@media (max-width: 1400px) {
  .my-text {
    letter-spacing: 2px;
    font-size: 1.9em;
  }
  .v-img {
    margin: auto;
  }
  .btn-contact {
    font-size: 12px;
    font-weight: 600;
    margin-left: 20px;
  }
  .btn-download {
    font-size: 12px;
    font-weight: 600;
  }
  /* .social-icon {
    font-size: 22px;
  } */
  .containerMax {
    height: 1100px;
  }

  .image-container {
    padding-top: 50px;
  }
  .text-container {
    padding-top: 5px;
    padding-left: 10px;
  }
}

@media (max-width: 980px) {
  .my-text {
    letter-spacing: 2px;
    font-size: 1em;
  }
  .v-img {
    margin: auto;
  }
  .btn-contact {
    margin-left: 0px;
  }
  .containerMax {
    height: 1300px;
  }
  .btns {
    display: block;
  }
}
</style>

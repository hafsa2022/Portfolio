<template>
  <v-app-bar
    elevate-on-scroll
    app
    color="#1f1f21"
    elevation="0"
    :class="containerClass"
    style="padding: 10px 300px"
  >
    <v-toolbar-title class="logo"
      ><span style="font-size: 35px; font-weight: 600">
        <v-img src="../assets/HE.png" controls width="500" height="150" />
        <!-- <b style="color: white">M</b>y
        <b style="color: white">P</b>ortfolio -->
      </span>
      <div :class="navBarClass" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span></div
    ></v-toolbar-title>

    <v-spacer></v-spacer>

    <div class="navlist">
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-home"
        to="/"
        class="text-h6 pb-2 button"
      >
        Home</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-information"
        to="/about"
        class="text-h6 button"
        >About Me</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-laptop"
        to="/myprojects"
        class="text-h6 button"
        >My Projects</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-account-group"
        to="/myactivities"
        class="text-h6 button"
        >My Activities</v-btn
      >
      <!-- <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-account-group"
      to="/mycertificates"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template>My
      Certifications</v-btn
    > -->
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-message-text"
        to="/contact"
        class="text-h6 button"
        >Contact Me</v-btn
      >
    </div>
    <div class="navlistClose" v-show="isNavOpen === true">
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-home"
        to="/"
        class="text-h6 button"
      >
        Home</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-information"
        to="/about"
        class="text-h6 button"
        >About Me</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-laptop"
        to="/myprojects"
        class="text-h6 button"
        >My Projects</v-btn
      >
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-account-group"
        to="/myactivities"
        class="text-h6 button"
        >My Activities</v-btn
      >
      <!-- <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-account-group"
      to="/mycertificates"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template>My
      Certifications</v-btn
    > -->
      <v-btn
        rounded="lg"
        size="large"
        prepend-icon="mdi-message-text"
        to="/contact"
        class="text-h6 button"
      >
        Contact Me</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBarView",
  data() {
    return {
      isNavOpen: false,
      isHeightAugmented: false,
    };
  },
  computed: {
    navBarClass() {
      return this.isNavOpen ? "click" : "togglebtn";
    },
    containerClass() {
      return this.isNavOpen
        ? "containerMaxNavBarClose"
        : "containerMaxNavBarOpen";
    },
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
<style>
.containerMaxNavBarOpen {
  max-width: 2000px;
}
.containerMaxNavBarClose {
  max-width: 2000px;
  height: 350px;
}
.logo {
  font-family: "Rubik", sans-serif;
  top: 45px;
}
.button {
  transition: all ease 0.4s;
  background-color: #1f1f21;
}
.button:hover {
  color: #ffde59;
}
.togglebtn {
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15px;
  right: 3%;
  z-index: 5;
  cursor: pointer;
  display: none;
}
.togglebtn span {
  display: block;
  background-color: #f7ce2de1;
  margin: 5px 0px;
  width: 100%;
  height: 3px;
  transition: 0.3s;
  transition-property: transform, opacity;
}
.click {
  width: 45px;
  height: 45px;
  position: absolute;
  top: 15px;
  right: 3%;
  z-index: 5;
  cursor: pointer;
  display: none;
}
.click span {
  display: block;
  background-color: #ffde59;
  margin: 5px 0px;
  width: 100%;
  height: 3px;
  transition: 0.3s;
  transition-property: transform, opacity;
}
.click span:first-child {
  -webkit-transform: rotate(-45deg) translate(-5px, 2px);
  transform: rotate(-45deg) translate(-5px, 2px);
}
.click span:nth-child(2) {
  opacity: 0;
  margin: 0;
}
.click span:last-child {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media (max-width: 1400px) {
  .togglebtn {
    display: initial;
  }
  .click {
    display: block;
  }
  .navlist {
    display: none;
  }
  .navlistClose {
    position: absolute;
    top: 70px;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #000000;
    z-index: 3;
    box-shadow: 5px 13px 30px rgba (0, 0, 0, 0.1);
    transition: all ease 0.5s;
  }
  .navlistClose .button {
    padding-top: 15px;
    display: block;
    color: white;
  }
  .navlistClose .button .v-icon {
    display: none;
  }
}
</style>

<template>
  <v-app-bar elevate-on-scroll app color="#1f1f21" elevation="0" class="">
    <v-toolbar-title class="logo"
      ><span>
        <v-img src="../assets/HE.png" controls width="500" height="150" />
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <span style="padding-right: 50px">
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            class="togglebtn"
            v-show="isResized"
          >
            <span></span>
            <span></span>
            <span></span>
          </v-btn>
        </template>
        <v-list style="background: #1f1f21">
          <v-list-item
            color="#f7ce2de1"
            v-for="(item, index) in items"
            :key="index"
            :prepend-icon="item.icon"
            :title="item.title"
            :to="item.link"
          ></v-list-item>
        </v-list> </v-menu
    ></span>

    <!-- <div @click="setToggleNav"></div> -->
    <!-- <div>
      <v-list
        density="compact"
        class=""
        v-if="!isResized"
        style="display: inline; direction: row"
      >
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :prepend-icon="item.icon"
          :title="item.title"
          :to="item.link"
        ></v-list-item>
      </v-list>
    </div> -->
    <div class="" v-if="!isResized">
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
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBarView",
  data() {
    return {
      isResized: null,
      items: [
        {
          title: "Home",
          icon: "mdi-home",
          link: "/",
        },
        { title: "About Me", icon: "mdi-information", link: "/about" },
        {
          title: "My Projects",
          icon: "mdi-laptop",
          link: "/myprojects",
        },
        {
          title: "My Activities",
          icon: "mdi-account-group",
          link: "/myactivities",
        },
        {
          title: "Contact Me",
          icon: "mdi-message-text",
          link: "/contact",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkWindow);
    this.checkWindow();
  },
  components: {},
  methods: {
    checkWindow() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1600) {
        this.isResized = true;
        return;
      }
      this.isResized = false;
      return;
    },
  },
};
</script>
<style>
.logo {
  font-family: "Rubik", sans-serif;
  top: 45px;
}
.v-toolbar__content {
  padding-right: 200px;
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
  right: 12%;
  z-index: 5;
  cursor: pointer;
  display: initial;
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
.v-list-item-title {
  color: white;
}
.v-list-item_prepend {
  color: white;
}
@media (max-width: 1600px) {
  .v-toolbar__content {
    padding-right: 0px;
  }
}
</style>

<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: { NavBar, MyFooter },
};
</script>

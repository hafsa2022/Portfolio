<template>
  <v-app-bar elevate-on-scroll app color="black" elevation="0" class="pa-4">
    <v-toolbar-title class="logo"
      ><span style="font-size: 35px; font-weight: 600"
        ><b style="color: #32cd32">M</b>y
        <b style="color: #32cd32">P</b>ortfolio</span
      ></v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-home"
      to="/"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template
      >Home</v-btn
    >
    <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-information"
      to="/about"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template
      >About Me</v-btn
    >
    <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-laptop"
      to="/myprojects"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template>My
      Projects</v-btn
    >
    <v-btn
      rounded="lg"
      size="x-large"
      prepend-icon="mdi-account-group"
      to="/myactivities"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template>My
      Activities</v-btn
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
      size="x-large"
      prepend-icon="mdi-message-text"
      to="/contact"
      class="text-h6 button"
    >
      <template v-slot:prepend> <v-icon color="success"></v-icon> </template
      >Contact Me</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBarView",
};
</script>
<style>
.logo {
  font-family: "Rubik", sans-serif;
}
/* .button {
  transition: transform 2s ease-in-out;
} */
.button:hover {
  background-color: rgb(145, 214, 172);
}
</style>

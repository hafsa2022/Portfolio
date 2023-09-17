<template>
  <v-footer
    class="bg-black-lighten-1 text-center d-flex flex-column text-h6 footer"
  >
    <v-row>
      <!-- <v-col></v-col> -->
    </v-row>
    <!-- <div class="mt-10 icon-container text-center">

    </div> -->

    <div class="text-white">
      Copyrights @ HAFSA EL AKHDAR 2023

      <v-icon class="social-icon" medium color="">mdi-instagram</v-icon>
      <a href="https://www.linkedin.com/in/hafsa-el-akhdar-92b446198">
        <v-icon class="social-icon" medium color="">mdi-linkedin</v-icon></a
      >
      <a href="https://github.com/hafsa2022">
        <v-icon class="social-icon" medium color="">mdi-github</v-icon></a
      >
    </div>
  </v-footer>
</template>
<script>
export default {
  name: "MyFooter",
};
</script>
<style>
.footer {
  position: relative;
  text-align: center;
  padding: 10px 300px;
  height: 5px;
  bottom: 0;
  background-color: #1f1f21;
}
.social-icon {
  font-size: 44px;
  /* margin-right: 10px; */
  transition: transform 1s ease-in-out;
  color: white;
}
.social-icon:hover {
  transform: rotate(360deg);
  color: #ffde59;
}
</style>

<template>
  <v-footer dark padless style="background-color: #1f1f21">
    <v-card
      width="100%"
      class="text-white text-center"
      style="background-color: #1f1f21"
    >
      <v-card-text class="">
        <h1 class="py-2 text-white">You Can Find Us At</h1>
        <a
          target="_blank"
          v-bind:href="social.url"
          v-for="social in socials"
          :key="social.id"
        >
          <v-btn class="ma-4" icon>
            <v-icon size="24px" class="social-icon">{{ social.icon }}</v-icon>
          </v-btn>
        </a>
      </v-card-text>

      <v-card-text class="text-white">
        Copyright {{ new Date().getFullYear() }}
        <span class="text-white">- Hafsa El Akhdar </span>
        |
        <span class="typing-element"></span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Typed from "typed.js";
export default {
  data: () => ({
    panel: [],
    socials: [
      {
        name: "github",
        icon: "mdi-github",
        url: "https://github.com/hafsa2022",
      },
      {
        name: "linkedin",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/hafsa-el-akhdar-92b446198",
      },
      {
        name: "instagram",
        icon: "mdi-instagram",
        url: "#",
      },
    ],
  }),
  mounted() {
    const options = {
      strings: [
        "Software Engineer !",
        "Full Stack Engineer !",
        "GIS Engineering !",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    this.typed = new Typed(".typing-element", options);
  },

  methods: {},
};
</script>

<style>
.containerMax {
  max-width: 2000px !important;
  background-color: #1f1f21;
}
.v-footer {
  padding: 10px 0px;
  border-radius: 0px;
  width: 100%;
}
.social-icon {
  font-size: 44px;
  /* margin-right: 10px; */
  transition: transform 1s ease-in-out;
  color: #1f1f21;
}
.social-icon:hover {
  transform: rotate(360deg);
  color: #ffde59;
}
.typing-element {
  color: #f7ce2de1;
}
</style>

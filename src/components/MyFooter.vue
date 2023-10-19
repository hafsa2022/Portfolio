<template>
  <div class="w-100 text-center">
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
    <div class="text-decoration">
      <strong>
        Copyright {{ new Date().getFullYear() }}
        <span class="text-balck">- Hafsa El Akhdar </span>
        |
        <span class="typing-element"></span
      ></strong>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
export default {
  data: () => ({
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
.text-decoration {
  font-size: 20px;
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
@media (max-width: 900px) {
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-decoration {
    font-size: 16px;
  }
}
</style>

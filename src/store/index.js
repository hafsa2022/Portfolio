import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        projectUrl: "",
        projectName: " My Portfolio using VUE.JS, VUETIFY and VUEX ",
        projectGithub: "https://github.com/hafsa2022/Portfolio",
        projectImg: require("../assets/portfolio_home.png"),
        id: 1,
      },
      {
        projectUrl: "",
        projectGithub:
          "https://github.com/hafsa2022/Site-web-pour-gerer-les-annonces",
        projectName: " Website to manage rental ads using PHP",
        projectImg: require("../assets/newhome.png"),
        id: 2,
      },
      {
        projectUrl: "",
        projectName: " Cruds using JS ",
        projectGithub: "https://github.com/hafsa2022/cruds-html-css-js",
        projectImg: require("../assets/cruds.png"),
        id: 3,
      },
      {
        projectUrl: "https://hafsa2022.github.io/contact-form-html-css/",
        projectName: " Contact Form using HTML and CSS",
        projectGithub: "https://github.com/hafsa2022/contact-form-html-css",
        projectImg: require("../assets/contact_form.png"),
        id: 4,
      },
      {
        projectUrl: "",
        projectName: " Todo List using VUE.JS ",
        projectImg: "",
        id: 5,
      },
    ],
    activities: [
      {
        activityName: "Meeting with members",
        activityImg: require("../assets/meeting_img.jpeg"),
        id: 1,
      },
      {
        activityName: " Play basketball ",
        activityImg: require("../assets/basketball_img.jpeg"),
        id: 2,
      },
      {
        activityName: " Best Speaker ",
        activityImg: require("../assets/best_speaker.jpeg"),
        id: 3,
      },
      {
        activityName: " Chefchaouen ",
        activityImg: require("../assets/chefchaoun.jpeg"),
        id: 4,
      },
      {
        activityName: " english ",
        activityImg: require("../assets/english_img.jpeg"),
        id: 5,
      },
      {
        activityName: " Creative Day ",
        activityImg: require("../assets/creative_day.jpeg"),
        id: 6,
      },
      {
        activityName: " visit to Tanger Med ",
        activityImg: require("../assets/tanger_med.jpeg"),
        id: 7,
      },
      {
        activityName: " Basketball Competition ",
        activityImg: require("../assets/basketball.jpeg"),
        id: 8,
      },
      {
        activityName: " Investigator at Alsa ",
        activityImg: require("../assets/questionnaire_alsa.jpeg"),
        id: 9,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

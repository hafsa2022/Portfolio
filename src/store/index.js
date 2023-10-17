import { createStore } from "vuex";

export default createStore({
  state: {
    snackbar: {
      color: "",
      text: "",
      show: false,
    },
    isResized: null,
    projects: [
      {
        projectUrl: "https://hafsa2022.github.io/contact-form-html-css/",
        projectName: " Contact Form",
        projectGithub: "https://github.com/hafsa2022/contact-form-html-css",
        projectImg: require("../assets/contact_form.png"),
        projectTechnologies: [
          { technology: require("../assets/html.png") },
          { technology: require("../assets/css.png") },
        ],
        projectDesciption:
          "Simple interactive contact ,its allows us to sending message ",
        id: 1,
      },
      {
        projectUrl: "",
        projectName: "Simple Cruds ",
        projectGithub: "https://github.com/hafsa2022/cruds-html-css-js",
        projectImg: require("../assets/cruds.png"),
        projectTechnologies: [
          { technology: require("../assets/js.png") },
          { technology: require("../assets/html.png") },
          { technology: require("../assets/css.png") },
        ],
        projectDesciption:
          "Bautiful Gruds allows you to adding, updating, deleting and Searching product",
        id: 2,
      },
      {
        projectUrl: "",
        projectGithub:
          "https://github.com/hafsa2022/Site-web-pour-gerer-les-annonces",
        projectName: " Website to manage rental ads",
        projectImg: require("../assets/newhome.png"),
        projectTechnologies: [
          { technology: require("../assets/js.png") },
          { technology: require("../assets/html.png") },
          { technology: require("../assets/css.png") },
          { technology: require("../assets/php.png") },
        ],
        projectDesciption:
          "Newhome is website allows you to adding or descovring new ads about appartements for rent  ",
        id: 3,
      },

      {
        projectUrl: "https://hafsa2022.github.io/",
        projectName: " My Portfolio ",
        projectGithub: "https://github.com/hafsa2022/Portfolio",
        projectImg: require("../assets/portfolio_home.png"),
        projectTechnologies: [
          { technology: require("../assets/js.png") },
          { technology: require("../assets/css.png") },
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
          { technology: require("../assets/vuex.png") },
        ],
        projectDesciption:
          "My portfolio descibe me such us my skills, my projects, my activities and more ",
        id: 4,
      },
      {
        projectUrl: "",
        projectName: "Todo List",
        projectGithub: "https://github.com/hafsa2022/todo-list",
        projectImg: require("../assets/todoList.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
        ],
        projectDesciption:
          "Simple Todo List for managing tasks allows you adding and remving tasks",
        id: 5,
      },

      {
        projectUrl: "",
        projectName: " Simple Geoportail",
        projectGithub: "https://github.com/hafsa2022/mini-geoportail",
        projectImg: require("../assets/geoportail_home.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
        ],
        projectDesciption:
          "Simple Geoportail allows you to mapping an serach places and manipulating between layers ",
        id: 6,
      },
      {
        projectUrl: "",
        projectName: "Product management",
        projectGithub:
          "https://github.com/hafsa2022/product-management-web-application-frontend",
        projectImg: require("../assets/product-management-page.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
          { technology: require("../assets/vuex.png") },
          { technology: require("../assets/laravel.png") },
        ],
        projectDesciption:
          "Website allows you to searching, creating, updating and deleting product",
        id: 7,
      },
    ],
    activitiesOfTwc: [
      {
        activityName: "Meeting with members of Club Together We Can",
        activityImg: require("../assets/meeting_img.jpeg"),
        id: 1,
      },
      {
        activityName: " Best Speaker Competition",
        activityImg: require("../assets/best_speaker.jpeg"),
        id: 2,
      },
      {
        activityName:
          " A humanitarian convoy to the outskirts of the city of Chefchaouen ",
        activityImg: require("../assets/chefchaoun.jpeg"),
        id: 3,
      },
      {
        activityName: " Creative Day ",
        activityImg: require("../assets/creative_day.jpeg"),
        id: 4,
      },
    ],
    activitiesOfGeo: [
      {
        activityName: " visit to Tanger Med ",
        activityImg: require("../assets/tanger_med.jpeg"),
        id: 1,
      },

      {
        activityName: "exchange day",
        activityImg: require("../assets/clubGéoinfo.jpeg"),
        id: 2,
      },
      {
        activityName: " Investigator at Alsa ",
        activityImg: require("../assets/clubGeoinfoIntegration.jpeg"),
        id: 3,
      },
      {
        activityName: " Investigator at Alsa ",
        activityImg: require("../assets/questionnaire_alsa.jpeg"),
        id: 4,
      },
    ],
    activitiesOfBasket: [
      {
        activityName: " Basketball Competition ",
        activityImg: require("../assets/basketball.jpeg"),
        id: 1,
      },
      {
        activityName: " Playing Basketball ",
        activityImg: require("../assets/basketball_img.jpeg"),
        id: 2,
      },
      {
        activityName: " Basketball",
        activityImg: require("../assets/basketball4.jpeg"),
        id: 3,
      },
      {
        activityName: " Basketball",
        activityImg: require("../assets/basketball3.jpeg"),
        id: 4,
      },
    ],
  },
  getters: {},
  mutations: {
    SET_SNACKBAR(state, payload) {
      state.snackbar.color = payload.color;
      state.snackbar.text = payload.text;
      state.snackbar.show = payload.show;
    },
    SET_IS_RESIZED(state, value) {
      state.isResized = value;
    },
  },
  actions: {
    setSnackBar({ commit }, payload) {
      commit("SET_SNACKBAR", payload);
    },
    setIsResized({ commit }, payload) {
      commit("SET_IS_RESIZED", payload);
    },
  },
  modules: {},
});

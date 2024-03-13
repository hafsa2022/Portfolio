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
        projectUrl:
          "https://www.linkedin.com/posts/hafsa-el-akhdar-92b446198_fullstack-vuejs-laravel-activity-7125510585789624320-54MH?utm_source=share&utm_medium=member_desktop",
        projectName: "Product management application",
        projectGithub:
          "https://github.com/hafsa2022/product-management-web-application-frontend",
        projectImg: require("../assets/product-management-page.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
          { technology: require("../assets/vuex.png") },
          { technology: require("../assets/laravel.png") },
        ],
        projectDescription:
          "Web application allows us to search, create, update and delete product",
        id: 1,
      },
      {
        projectUrl: "",
        projectName: "Invoice application",
        projectGithub: "https://github.com/hafsa2022/location-car-front",
        projectImg: require("../assets/invoice_app.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
          { technology: require("../assets/vuex.png") },
          { technology: require("../assets/laravel.png") },
          { technology: require("../assets/jwt.png") },
        ],
        projectDescription:
          "Web application allows us to search, create, update, uplaod and delete Invoice",
        id: 2,
      },
      {
        projectUrl:
          "https://www.linkedin.com/posts/hafsa-el-akhdar-92b446198_codsoft-angular-bootstrap-activity-7134948433550815233-NnpR?utm_source=share&utm_medium=member_desktop",
        projectGithub:
          "https://github.com/hafsa2022/job-board-angular-laravel.git",
        projectName: " Job board",
        projectImg: require("../assets/job-board.png"),
        projectTechnologies: [
          { technology: require("../assets/angular_logo.png") },
          { technology: require("../assets/bootstrap.png") },
          { technology: require("../assets/jwt.png") },
          { technology: require("../assets/laravel.png") },
        ],
        projectDescription:
          "Job Dream allows us to search and get new opprtunities easy and fast ",
        id: 3,
      },
      {
        projectUrl:
          "https://www.linkedin.com/posts/hafsa-el-akhdar-92b446198_youngdevintern-youngdev-internship-activity-7154213265168867328-VrtO?utm_source=share&utm_medium=member_desktop",
        projectName: " Registration Form",
        projectGithub: "https://github.com/hafsa2022/registration-form",
        projectImg: require("../assets/registration-form.png"),
        projectTechnologies: [
          { technology: require("../assets/angular_logo.png") },
          { technology: require("../assets/spring_boot.png") },
          { technology: require("../assets/mariaDB.png") },
        ],
        projectDescription:
          "a simple registration form developed using Angular, Spring Boot and MariaDB. This application makes it easy to validate user information before it is added to the database.",
        id: 4,
      },
      {
        projectUrl: "",
        projectName: " Ecommerce Website",
        projectGithub:
          "https://github.com/hafsa2022/ecommerce-website-frontend",
        projectImg: require("../assets/ecommerce_image.png"),
        projectTechnologies: [
          { technology: require("../assets/angular_logo.png") },
          { technology: require("../assets/spring_boot.png") },
          { technology: require("../assets/mariaDB.png") },
          { technology: require("../assets/jwt.png") },
        ],
        projectDescription:
          " The E-Commerce Project with Spring Boot, Angular,JWT Athentication and mariaDB is an innovative web application that enables users to explore and shop for a wide range of products.",
        id: 5,
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
        projectDescription:
          "Newhome is website present ads or about appartements for rent and it allows us to add new ads ",
        id: 6,
      },

      {
        projectUrl: "https://myportfolio-demo-opal.vercel.app/",
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
        projectDescription:
          "My portfolio gives you idea about my skills, my projects, my activities and more ",
        id: 7,
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
        projectDescription:
          "Bautiful Gruds allows us to add, update, delete and search product",
        id: 8,
      },

      {
        projectUrl: "https://todo-list-pied-seven.vercel.app/",
        projectName: "Todo List",
        projectGithub: "https://github.com/hafsa2022/todo-list",
        projectImg: require("../assets/todoList.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
        ],
        projectDescription:
          "Simple Todo List allows us to manage tasks, add and remove tasks",
        id: 9,
      },

      {
        projectUrl: "https://mini-geoportail.vercel.app/",
        projectName: " Simple Geoportail",
        projectGithub: "https://github.com/hafsa2022/mini-geoportail",
        projectImg: require("../assets/geoportail_home.png"),
        projectTechnologies: [
          { technology: require("../assets/vuejs.png") },
          { technology: require("../assets/vuetify.png") },
          { technology: require("../assets/leaflet.png") },
        ],
        projectDescription:
          "Simple Geoportail allows us to map, search places and manipulate between layers ",
        id: 10,
      },
      {
        projectUrl: "",
        projectName: " Employee Management App",
        projectGithub: "https://github.com/hafsa2022/employee-managemant-app",
        projectImg: require("../assets/employee-management-app.png"),
        projectTechnologies: [
          { technology: require("../assets/html.png") },
          { technology: require("../assets/css.png") },
          { technology: require("../assets/angular_logo.png") },
          {
            technology: require("../assets/angular_material.png"),
          },
        ],
        projectDescription:
          "Simple cruds allows us to add, update, delete and search employee",
        id: 11,
      },
      {
        projectUrl: "https://hafsa2022.github.io/contact-form-html-css/",
        projectName: " Contact Form",
        projectGithub: "https://github.com/hafsa2022/contact-form-html-css",
        projectImg: require("../assets/contact_form.png"),
        projectTechnologies: [
          { technology: require("../assets/html.png") },
          { technology: require("../assets/css.png") },
        ],
        projectDescription:
          "Simple interactive contact form allows us to send message ",
        id: 12,
      },
      {
        projectUrl: "",
        projectName: " Product Management System",
        projectGithub: "https://github.com/hafsa2022/product-management-system",
        projectImg: require("../assets/product_management_sys_cap.png"),
        projectTechnologies: [
          { technology: require("../assets/angular_logo.png") },
          { technology: require("../assets/spring_boot.png") },
          { technology: require("../assets/mariaDB.png") },
          { technology: require("../assets/bootstrap.png") },
        ],
        projectDescription:
          "Simple app web for managing product using Angular and Spring Boot",
        id: 13,
      },
    ],
    activitiesOfTwc: [
      {
        activityName: "Meeting with Club Together We Can members ",
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

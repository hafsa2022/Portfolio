<template>
  <v-container class="containerMax mb-16 pb-8">
    <div style="margin-top: 180px">
      <v-card width="1000" height="650" class="mt-12 mx-auto" elevation="0">
        <v-card-title class="mb-2 text-green mb-8" style="font-size: 35px"
          >Contact Me</v-card-title
        >
        <v-dialog v-model="loading" hide-overlay persistent width="300">
          <v-card color="green" dark>
            <v-card-text>
              Sending email .....
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="fullName"
                variant="outlined"
                label="Full Name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="emailAddress"
                label="Email"
                hint="example@gmail.com"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="phoneNumber"
                variant="outlined"
                label="Phone Number"
                maxlength="15"
                :rules="[rules.number, rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                label="Message"
                variant="outlined"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-card-actions class="justify-center">
              <v-btn color="green" size="x-large" @click="sendEmail">
                Send
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-card-text>
      </v-card>
      <div>
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
          {{ snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn
              color="white"
              text
              class="primary--text"
              v-bind="attrs"
              @click="closeSnackbar"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </div></v-container
  >
</template>

<script>
import { mapState } from "vuex";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      phoneNumber: "",
      emailAddress: "",
      fullName: "",
      message: "",
      loading: false,
      rules: {
        number: (value) => {
          const pattern = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/g;
          return pattern.test(value) || "Invalid phone number";
        },
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  computed: {
    ...mapState({
      snackbar: (state) => state.snackbar,
    }),
  },
  methods: {
    closeSnackbar() {
      this.$store.dispatch("setSnackBar", {
        color: "",
        text: "",
        show: false,
      });
    },
    sendEmail() {
      this.loading = true;
      // Initialize Email.js with your user ID
      emailjs.init("1yEO3neNo8eQUxxZG");

      // Use Email.js to send the email
      emailjs
        .send("service_tfbjdfe", "template_0hcpvys", {
          user_name: this.fullName,
          user_email: this.emailAddress,
          message: this.message,
          user_phoneNumber: this.phoneNumber,
        })
        .then((response) => {
          // this.fullName = "";
          // this.emailAddress = "";
          // this.message = "";
          // this.phoneNumber = 0;
          this.loading = false;
          this.$store.dispatch("setSnackBar", {
            color: "success lighten-1",
            text: "email was sended successfully!",
            show: true,
          });
          console.log(response);
        })
        .catch((error) => {
          this.loading = false;
          this.$store.dispatch("setSnackBar", {
            color: "error lighten-1",
            text: "email not sended",
            show: true,
          });
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

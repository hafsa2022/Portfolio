<template>
  <v-container class="containerMax pb-8">
    <div style="margin-top: 200px">
      <v-card
        width="1000"
        class="mt-12 mx-auto"
        elevation="0"
        style="background-color: #2b2b2c"
      >
        <v-dialog v-model="loading" hide-overlay persistent width="300">
          <v-card color="#ffde59" dark>
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

        <v-card-text class="mb-14">
          <v-row
            ><v-col lg="6" md="12" sm="12" xsm="12">
              <v-card
                class="pa-3"
                elevation="4"
                style="background-color: #2b2b2c"
              >
                <v-card-title
                  class="mb-2 span-decoration mb-8 text-center"
                  style="font-size: 35px; color: #ffde59"
                  >Contact Me</v-card-title
                >
                <div class="text-center">
                  <v-icon class="social-icon" color="white">
                    mdi-map-marker-circle</v-icon
                  >
                  <h3 class="mb-12" style="color: #ffde59">Tangier, Morocco</h3>
                </div>
                <div class="text-center">
                  <v-icon class="social-icon" color="white"> mdi-phone</v-icon>
                  <h3 class="mb-12" style="color: #ffde59">0650840950</h3>
                </div>
                <div class="text-center">
                  <v-icon class="social-icon" color="white"> mdi-email</v-icon>
                  <h3 class="mb-16" style="color: #ffde59">
                    h.hafsaelakhdar@gmail.com
                  </h3>
                </div>
              </v-card></v-col
            ><v-col lg="6" md="12" sm="12" xsm="12">
              <v-card
                class="pa-4"
                elevation="0"
                style="background-color: #2b2b2c"
                ><v-row>
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
                  <v-col cols="12">
                    <v-card elevation="0" style="background-color: #2b2b2c">
                      <v-card-actions class="justify-center">
                        <v-btn
                          type="submit"
                          color="white"
                          style="background-color: #ffde59"
                          size="x-large"
                          @click="sendEmail"
                          text="Send"
                          block
                        >
                        </v-btn> </v-card-actions
                    ></v-card> </v-col></v-row></v-card></v-col
          ></v-row>
        </v-card-text>
      </v-card>
      <div>
        <v-snackbar v-model="snackbar.show" :color="snackbar.color">
          {{ snackbar.text }}
          <template v-slot:action="{ attrs }">
            <v-btn
              color="white"
              text
              class=""
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
      if (
        this.phoneNumber != "" &&
        this.emailAddress != "" &&
        this.fullName != "" &&
        this.message != ""
      ) {
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
              color: "#09ee90",
              text: "email was sended successfully!",
              show: true,
            });
            console.log(response);
          })
          .catch((error) => {
            this.loading = false;
            this.$store.dispatch("setSnackBar", {
              color: "error",
              text: "email not sended",
              show: true,
            });
            console.error(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
  background-color: #2b2b2c;
}
.social-icon {
  font-size: 70px;
  margin-top: 20px;
  transition: transform 1s ease-in-out;
}
.span-decoration {
  letter-spacing: 0;
  transition: letter-spacing 0.5s ease;
}
.span-decoration:hover {
  text-decoration: underline;
  letter-spacing: 4px;
}
.v-text-field {
  color: beige;
}
</style>

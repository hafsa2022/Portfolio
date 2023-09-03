<template>
  <v-container class="containerMax mb-4 mt-16">
    <div class="text-center" style="justif">
      <v-card width="1000" height="700" class="mt-12">
        <v-card-title class="mb-2 text-green" style="font-size: 35px"
          >Contact Me</v-card-title
        >

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field variant="outlined" label="Full Name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Email"
                hint="For example, example@gmail.com"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Phone Number"
                maxlength="15"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea label="Message" variant="outlined"></v-textarea>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-card-actions class="justify-center">
              <v-btn color="green" size="x-large"> Send </v-btn>
            </v-card-actions>
          </v-col>
        </v-card-text>
      </v-card>
    </div></v-container
  >
</template>

<script>
export default {};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

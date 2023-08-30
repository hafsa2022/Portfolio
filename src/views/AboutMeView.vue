<template>
  <v-container class="containerMax mb-4 mt-4"
    ><div class="mt-4">
      <v-row
        ><v-col cols="4">
          <div class="mt-16 pt-16">
            <v-img
              max-width="500"
              max-height="500"
              src="../assets/CP_hafsa.png"
            >
            </v-img>
          </div>
          <div class="mt-4">
            <h2><v-icon color="green">mdi-account</v-icon> Hafsa El Akhdar</h2>
            <h2><v-icon color="green">mdi-calendar</v-icon> June 24, 2000</h2>
            <h2>
              <v-icon color="green">mdi-gmail</v-icon> h.hafsaelakhdar@gmail.com
            </h2>
            <h2>
              <v-icon color="green">mdi-map-marker</v-icon> Tangier,Morocco
            </h2>
          </div>
        </v-col>
        <v-col cols="8">
          <div class="mt-16">
            <!-- <h1 style="font-weight: 600"></h1> -->
            <v-card elevation="2" class="mt-2 ml-2 bg-success">
              <template v-slot:title
                ><span style="font-size: 35px"> Who I am ? </span></template
              >
              <v-card-text class="text-h6">
                Hello ,<br />
                My name is Hafsa El Akhdar and I am a dynamic Geoinformation
                engineer, freshly graduated from the Faculty of Science and
                Technology of Tangier. During my training and my end-of-studies
                project at Petalens, I acquired solid technical knowledge and
                skills that made me passionate about the field of
                development.</v-card-text
              >
            </v-card>
            <v-card elevation="2" class="mt-2 ml-2 bg-success">
              <template v-slot:title>
                <span style="font-size: 35px">Education ? </span></template
              >
              <v-card-text class="text-h6">
                Hello ,<br />
                My name is Hafsa El Akhdar and I am a dynamic Geoinformation
                engineer, freshly graduated from the Faculty of Science and
                Technology of Tangier. During my training and my end-of-studies
                project at Petalens, I acquired solid technical knowledge and
                skills that made me passionate about the field of
                development.</v-card-text
              >
            </v-card>
            <v-card elevation="2" class="mt-2 ml-2 bg-success">
              <template v-slot:title>
                <span style="font-size: 35px">Education ? </span></template
              >
              <v-card-text class="text-h6">
                Hello ,<br />
                My name is Hafsa El Akhdar and I am a dynamic Geoinformation
                engineer, freshly graduated from the Faculty of Science and
                Technology of Tangier. During my training and my end-of-studies
                project at Petalens, I acquired solid technical knowledge and
                skills that made me passionate about the field of
                development.</v-card-text
              >
            </v-card>
            <v-card elevation="2" class="mt-2 ml-2 bg-success">
              <template v-slot:title>
                <span style="font-size: 35px">Education ? </span>
              </template>
              <v-card-text class="text-h6">
                Hello ,<br />
                My name is Hafsa El Akhdar and I am a dynamic Geoinformation
                engineer, freshly graduated from the Faculty of Science and
                Technology of Tangier. During my training and my end-of-studies
                project at Petalens, I acquired solid technical knowledge and
                skills that made me passionate about the field of
                development.</v-card-text
              >
            </v-card>
            <v-card elevation="2" class="mt-2 ml-2 bg-success">
              <template v-slot:title> Education ? </template>
              <v-card-text class="text-h6">
                Hello ,<br />
                My name is Hafsa El Akhdar and I am a dynamic Geoinformation
                engineer, freshly graduated from the Faculty of Science and
                Technology of Tangier. During my training and my end-of-studies
                project at Petalens, I acquired solid technical knowledge and
                skills that made me passionate about the field of
                development.</v-card-text
              >
            </v-card>
          </div></v-col
        ></v-row
      >
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

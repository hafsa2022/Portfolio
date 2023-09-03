<template>
  <v-col lg="3" md="6" sm="12" xs="12">
    <div>
      <v-card class="rounded-lg" elevation="3" width="400" height="200">
        <v-card-title>{{ certificate.certificateName }}</v-card-title>

        <v-card-text> This is content </v-card-text>
        <v-card-actions>
          <v-btn variant="text" color="teal-accent-4">
            See More
          </v-btn></v-card-actions
        ></v-card
      >
    </div></v-col
  >
</template>
<script>
export default {
  name: "CertificateCard",
  props: {
    certificate: {
      type: Object,
      default: null,
    },
  },
};
</script>

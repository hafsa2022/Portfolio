<template>
  <v-container class="containerMax mb-4 mt-4"
    ><div class="mt-4 pa-8">
      <v-row>
        <CertificateCard
          v-for="certificate in certificates"
          :key="certificate.id"
          :certificate="certificate"
      /></v-row></div
  ></v-container>
</template>

<script>
import CertificateCard from "../components/CertificateCard.vue";
export default {
  name: "MyProjectsView",
  data() {
    return {
      certificates: [
        { certificateName: " Premier Secour ", id: 1 },
        { certificateName: " Participation au LOE ", id: 2 },
        { certificateName: " Participation Makathon StudiNov  ", id: 3 },
        { certificateName: " Le basketball ", id: 4 },
      ],
    };
  },
  components: { CertificateCard },
};
</script>

<style scoped>
.containerMax {
  max-width: 2000px !important;
}
</style>

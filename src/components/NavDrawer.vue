<template>
  <v-layout width="400">
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Hafsa El Akhdar"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-lightbulb"
          title="About Me"
          value="About Me"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-laptop"
          title="My Projects"
          value="My Projects"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-message-text"
          title="Contact Me"
          value="Contact Me"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
  </v-layout>
</template>

<script>
export default {
  name: "NavDrawerView",
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>

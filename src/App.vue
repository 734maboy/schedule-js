<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link class="white--text" to="/settings">
        <v-btn text> Настройки </v-btn>
      </router-link>
      <router-link class="white--text" to="/about">
        <v-btn text> О нас </v-btn>
      </router-link>
      <router-link class="white--text" to="/load">
        <v-btn text> Загрузить изменения </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

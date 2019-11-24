<template>
  <v-container
    class="d-flex flex-column"
  >
      <h1>Настройки</h1>

      <v-layout
        class="d-flex flex-column"
      >
        <h2>Ссылки</h2>
        <v-item-group
          class="mt-2"
        >
          <v-text-field
            label="Ссылка на страницу с изменениями"
            outlined
            dense
            v-model="$data._schedule.url"
          ></v-text-field>
        </v-item-group>
        <h2>Теги для поиска</h2>
        <v-item-group>
          <setting-item></setting-item>
        </v-item-group>
      </v-layout>
  </v-container>
</template>

<script>

import { Schedule } from '../Schedule.js'
// Components
import SettingItem from '../components/setting-item/setting-item'

export default {
  components: {
    SettingItem,
  },
  data () {
    return {
      _schedule: Schedule
    }
  }
}
</script>

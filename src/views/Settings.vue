<template>
  <v-container
    class="d-flex flex-column"
    fluid
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
          <tag-item
            v-for="tag in tags"
            :key = "tag.id"
            :tag="tag"
            :attrs="tag.attrs"
            :values="tag.attrs.values"
          ></tag-item>
        </v-item-group>
      </v-layout>
  </v-container>
</template>

<script>

import { Schedule } from '../Schedule.js'
// Components
import TagItem from '../components/TagItem/TagItem'

export default {
  components: {
    TagItem,
  },
  data () {
    return {
      _schedule: Schedule
    }
  },
  computed: {
    tags() { return this.$store.state.tags; },
  },
}
</script>

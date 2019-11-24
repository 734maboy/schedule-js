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
        <v-item-group

        >
          <h3 class="ml-2" >Тег для поиска имени группы</h3>
          <div
            class="mt-2"
          >
            <v-text-field
              label="Тег"
              outlined
              dense
              v-model="$data._schedule.openTagGroupName"
            ></v-text-field>
            <v-text-field
              label="Атрибут"
              outlined
              dense
              v-model="$data._schedule.attrGroupName"
            ></v-text-field>
            <v-text-field
              label="Значение атрибута"
              outlined
              dense
              v-model="$data._schedule.attrValueGroupName"
            ></v-text-field>
          </div>
          <h3 class="ml-2" >Тег для поиска списка изменений группы</h3>
          <div
            class="mt-2"
          >
            <v-text-field
              label="Тег"
              outlined
              dense
              v-model="$data._schedule.openGroupTag"
            ></v-text-field>
            <v-text-field
              label="Атрибут"
              outlined
              dense
              v-model="$data._schedule.attrGroup"
            ></v-text-field>
            <v-text-field
              label="Значение атрибута"
              outlined
              dense
              v-model="$data._schedule.attrValueGroup"
            ></v-text-field>
          </div>
          <h3 class="ml-2" >Тег для поиска одной записи - "Что заменяют"</h3>
          <div
            class="mt-2"
          >
            <v-text-field
              label="Тег"
              outlined
              dense
              v-model="$data._schedule.openTag"
            ></v-text-field>
            <v-text-field
              label="Атрибут"
              outlined
              dense
              v-model="$data._schedule.attrFromToName"
            ></v-text-field>
            <v-text-field
              label="Значение атрибута"
              outlined
              dense
              v-model="$data._schedule.attrValueFromTo"
            ></v-text-field>
          </div>
          <h3 class="ml-2" >Тег для поиска одной записи - "<b>НА</b> Что заменяют"</h3>
          <div
            class="mt-2"
          >
            <v-text-field
              label="Тег"
              outlined
              dense
              v-model="$data._schedule.openTag"
            ></v-text-field>
            <v-text-field
              label="Атрибут"
              outlined
              dense
              v-model="$data._schedule.attrToFromName"
            ></v-text-field>
            <v-text-field
              label="Значение атрибута"
              outlined
              dense
              v-model="$data._schedule.attrValueToFrom"
            ></v-text-field>
          </div>
        </v-item-group>
      </v-layout>
  </v-container>
</template>

<script>
import { Schedule } from '../Schedule.js'
export default {
  data () {
    return {
      _schedule: Schedule
    }
  }
}
</script>

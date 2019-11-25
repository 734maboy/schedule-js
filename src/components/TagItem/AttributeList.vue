<template>
  <v-card
    fluid
    outlined
  >
    <v-btn
      x-small
      tile
      text
      @click="toggleList"
    >
      Список атрибутов
    </v-btn>
    <v-layout
      class="d-flex flex-column"
      v-if="isExpanded"
    >
      <v-text-field
        dense
        outlined
        persistent-hint
        append-icon="mdi-tag-plus"
        hint="Введите название нового атрибута и нажмите enter для добавления"
        label="Добавьте новый атрибут"
        placeholder="Новый атрибут"
        class="pt-5 pl-3"
        style="width: 300px;"
      ></v-text-field>
      <v-divider
        class="my-6"
      ></v-divider>
      <attribute-item></attribute-item>
    </v-layout>
  </v-card>
</template>

<script>
  import AttributeItem from './AttributeItem'

export default {
  components: {
    AttributeItem,
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    toggleList() {
      this.isExpanded = !this.isExpanded;
    },
  }
}
</script>

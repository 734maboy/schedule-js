<template>
  <v-container
    fluid
    class="d-flex flex-row justify-start"
  >
    <v-layout
      class="d-flex justify-start"
      style="max-width: 500px;"
    >
      <v-layout
        class="d-flex flex-column align-start justify-start"
        style="max-width: 260px;"
      >
        <v-text-field
          dense
          outlined
          label="Название атрибута"
          placeholder="Атрибут"
          append-icon="mdi-close"
          v-model="attr.name"
          style="max-width: 250px; max-height: fit-content"
          @click:append="deleteThisAttribute"
        ></v-text-field>
        <v-btn
            x-small
            text
            class="pl-8"
            color="primary"
            @click="toggleList"
          >
            Значения атрибута
          </v-btn>
      </v-layout>
      <v-layout
        class="d-flex flex-column justify-start"
        style="max-width: 300px;"
      >
        <v-text-field
          outlined
          dense
          style="max-width: 250px;"
          label="Введите новое значения атрибута"
          placeholder="Значение атрибута"
          append-icon="mdi-format-annotation-plus"
        ></v-text-field>
        <v-layout
          v-if="isExpanded"
          class="d-flex flex-column justify-start"
          style="max-width: 250px; max-height: 180px; overflow-x: auto;"
        >
          <v-text-field
            outlined
            dense
            v-for="value in values"
            v-model="value.value"
            :key="value.id"
          ></v-text-field>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['values', 'attr'],
  data() {
    return {
      isExpanded: false,
    }
  },
  computed: {
  },
  methods: {
    toggleList() {
      this.isExpanded = !this.isExpanded;
      
    },
    deleteThisAttribute() {
      // do nothing 
    },
  },
}
</script>

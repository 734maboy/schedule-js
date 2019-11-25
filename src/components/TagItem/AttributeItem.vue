<template>
  <v-container
    fluid
    class="d-flex flex-row justify-start"
  >
    <v-layout
      class="d-flex justify-start"
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
          style="width: 500px; max-width: 250px; max-height: 180px; overflow-x: auto;"
        >
          <v-text-field
            outlined
            dense
          ></v-text-field>
          <v-text-field
            outlined
            dense
          ></v-text-field>
          <v-text-field
            outlined
            dense
          ></v-text-field>
          <v-text-field
            outlined
            dense
          ></v-text-field>
          <v-text-field
            outlined
            dense
          ></v-text-field>
        </v-layout>
      </v-layout>
    </v-layout>
    <!-- Предпросмотр -->
    <v-layout
      class="d-flex flex-column justify-start"
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    }
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

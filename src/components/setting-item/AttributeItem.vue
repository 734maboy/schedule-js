<template>
  <v-container
    fluid
    class="d-flex flex-row"
  >
    <v-layout
      class="d-flex flex-column"
    >
      <v-text-field
        dense
        outlined
        label="Название атрибута"
        placeholder="Атрибут"
        append-icon="mdi-close"
        style="max-width: 250px"
        @click:append="deleteThisAttribute"
      ></v-text-field>
      <v-layout
        class="d-flex flex-column pl-2"
        style="width: 500px; max-width: 500px"
      >
        <v-btn
          x-small
          text
          color="primary"
          width="100"
          @click="toggleList"
        >Значения атрибута
        </v-btn>
        <v-layout
          v-if="isExpanded"
          class="d-flex flex-column"
        >
          <v-text-field></v-text-field>
          <v-text-field></v-text-field>
          <v-text-field></v-text-field>
          <v-text-field></v-text-field>
        </v-layout>
      </v-layout>
    </v-layout>
    <v-layout>
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

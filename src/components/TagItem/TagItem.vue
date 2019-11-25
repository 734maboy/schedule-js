<template>
  <v-container
    fluid
  >
    <v-text-field
      outlined
      dense
      placeholder="Тег"
      label="Название тега"
      style="max-width: 240px;"
    ></v-text-field>
    <v-layout
      class="d-flex flex-row"
    >
      <v-layout
        class="d-flex flex-column"
      >
        <attribute-list></attribute-list>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>

import AttributeList from './AttributeList'

export default {
  data() {
    return {
      
    }
  },
  components: {
    AttributeList,
  },
}
</script>

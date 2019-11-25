<template>
  <v-container
    fluid
  >
    <v-layout
      class="d-flex flex-row"
    >
      <v-layout
        class="d-flex flex-column"
        style="max-width: 500px"
      >
        <h3> {{ tag.title }} </h3>
        <v-text-field
          outlined
          dense
          v-model="tag.name"
          placeholder="Тег"
          label="Название тега"
          style="max-width: 240px;"
        ></v-text-field>
      </v-layout>
      <tag-preview
        :tag="tag"
        :attrs="attributes"
        :values="values"
      ></tag-preview>
    </v-layout>
    <v-layout
      class="d-flex flex-column"
    >
      <attribute-list
        :attrs="attributes"
      ></attribute-list>
    </v-layout>
  </v-container>
</template>

<script>

import AttributeList from './AttributeList'
import TagPreview from './TagPreview'

export default {
  props: ['tag', 'attrs', 'values'],
  components: {
    AttributeList,
    TagPreview,
  },
  computed: {
    attributes() {
      return this.attrs;
    }
  },
  data() {
    return {

    }
  },
}
</script>

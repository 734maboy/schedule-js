<template>
  <v-card
    class="d-flex flex-column"
  >
    <v-card-titl>Предпросмотр</v-card-titl>
    <code>
      {{ htmlOpenTag }} 
      <p
        v-for="attr in tagAttrs"
        :key="attr.id"
      > {{ attr.name }}="<span
          v-for="value in attr.values"
          :key="value.id"
        > {{ value.value}}</span>"
      </p> 
      <br> ... <br>
      {{ htmlCloseTag }}
    </code>
  </v-card>
</template>

<script>
export default {
  props: ['tag', 'attrs', 'values'],
  computed: {
    htmlOpenTag() {
      return `<${this.tag.name}`;
    },
    htmlCloseTag() {
      return ` </${this.tag.name}>`;
    },
    tagAttrs() {
      let tag = this.$store.state.tags.find( v => v.id == this.tag.id);
      return tag.attrs;
    },
    attrValues() {
      return this.values;
    },
  }
}
</script>

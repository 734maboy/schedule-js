<template>
  <div>
    <v-text-field
      outlined
      dense
      append-icon="mdi-close"
      v-model="attributeValue.value"
      @click:append="deleteThisAttributeValue"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: ['valueId', 'attributeValue'],
  methods: {
    /**
     * Вызывает событие для удаления текущего значения элемента.
     */
    deleteThisAttributeValue() {
      this.$emit('ondelete', this.valueId)
    }
  },
}
</script>

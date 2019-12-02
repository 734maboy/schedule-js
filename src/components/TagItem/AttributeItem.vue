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
          v-model="newAttributeValue"
          @keyup.enter="addNewValueToAttribute"
        ></v-text-field>
        <v-layout
          v-if="isExpanded"
          class="d-flex flex-column justify-start"
          style="max-width: 250px; max-height: 180px; overflow-x: auto;"
        >
          <value-item
            v-for="value in values"
            :key="value.id"
            :valueId="value.id"
            :attributeValue="value"
            @ondelete="deleteValue"
          ></value-item>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import ValueItem from './ValueITem'

export default {
  props: ['values', 'attr'],
  components: {
    ValueItem,
  },
  data() {
    return {
      isExpanded: false,
      newAttributeValue: '',
    }
  },
  methods: {
    toggleList() {
      this.isExpanded = !this.isExpanded;
      
    },
    deleteThisAttribute() {
      this.$emit('ondelete-attribute', this.attr.id);
    },
    deleteValue(id) {
      this.values.forEach((v, i) => {
        if (v.id === id) {
          this.values.splice(i, 1);
        }
      });
    },
    addNewValueToAttribute() {
      this.attr.values.push({
        id: Date.now(),
        value: this.newAttributeValue,
      });
      this.newAttributeValue = '';
    }
  },
}
</script>

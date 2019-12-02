<template>
  <v-container
    fluid
  >
    <v-btn
        x-small
        tile
        text
        @click="toggleList"
      >
        Список атрибутов
    </v-btn>
    <v-card
      fluid
      outlined
    > 
      <v-layout
        class="d-flex flex-column"
        v-if="isExpanded"
      >
        <v-text-field
          v-model="newAttributeName"
          dense
          outlined
          persistent-hint
          append-icon="mdi-tag-plus"
          hint="Введите название нового атрибута и нажмите enter для добавления"
          label="Добавьте новый атрибут"
          placeholder="Новый атрибут"
          class="pt-5 pl-3"
          style="width: 300px;"
          @keyup.enter="addNewAttribute"
        ></v-text-field>
        <v-divider
          class="my-6"
        ></v-divider>
        <attribute-item
          v-for="attribute in attributes"
          :key="attribute.id"
          :attr="attribute"
          :values="attribute.values"
          @ondelete-attribute="deleteAttribute"
        ></attribute-item>
      </v-layout>
    </v-card>
  </v-container>
  
</template>

<script>
  import AttributeItem from './AttributeItem'

export default {
  props: ['attrs', 'tag'],
  components: {
    AttributeItem,
  },
  computed: {
    attributes() {
      return this.attrs;
    },
    tagInstance() {
      return this.tag;
    }
  },
  data() {
    return {
      isExpanded: false,
      newAttributeName: '',
    }
  },
  methods: {
    toggleList() {
      this.isExpanded = !this.isExpanded;
    },
    addNewAttribute() {
      this.tag.attrs.push({
        id: Date.now(),
        name: this.newAttributeName,
        values: [],
      });
      this.newAttributeName = '';
    },
    deleteAttribute(id) {
      this.tagInstance.attrs.forEach( (attr, i) => {
        if (attr.id === id) {
          this.tag.attrs.splice(i, 1);
        }
      })
    }
  }
}
</script>

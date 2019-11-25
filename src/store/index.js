import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// В объекте state, данные скорее всего будут меняться, 
// При запуске приложения, но в случае чего здесь предоставлены
// Исходные данные при разработке софта
export default new Vuex.Store({
  state: {

    nextTagId: 1,
    tags: [
      {
        id: 1,
        title: "Поиск имени группы",
        name: "b",
        attrs: [],
      },
      {
        id: 2,
        title: "Поиск таблицы группы",
        name: "table",
        attrs: [
          {
            id: 1,
            name: "class",
            values: [
              { id: 1, value: "table" },
              { id: 2, value: "table-striped" },
            ]
          }
        ],
      },
      {
        id: 3,
        title: "Поиск записей в таблице. [ЧТО заменяют]",
        name: "td",
        attrs: [
          {
            id: 1,
            name: "class",
            values: [
              { id: 1, value: "replace-from" },
            ]
          },
        ],
      },
      {
        id: 4,
        title: "Поиск записей в таблице. [НА ЧТО заменяют]",
        name: "td",
        attrs: [
          {
            id: 1,
            name: "class",
            values: [
              { id: 1, value: "replace-to" },
            ]
          },
        ],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

<template>
  <div id="app">
    <Title title="식단 만들기" />
    <MenuMealAdd
      :menus="menus"
      :userSelectMealInfo="userSelectMealInfo"
      @update:add-menu="handleAddMenu"
      @update:food-kind="handleChangeFoodKind"
      @update:menu="handleChangeMenu"
    />
    <MenuMealTable :mealTableInfos="mealTableInfos" />
  </div>
</template>

<script>
import MenuMealAdd from "./components/menu-meal/add-menu-meal-component.vue";
import MenuMealTable from "./components/menu-meal/table-menu-meal-component.vue";
import Title from "./components/ui/title-component.vue";
import {
  DEFAULT_MEAL_TIME,
  DEFAULT_MENU,
} from "./components/menu-meal/constants";

import { MENUS, MEAL_TABLE_INFOS } from "./components/menu-meal/db";

export default {
  name: "App",
  components: {
    Title,
    MenuMealAdd,
    MenuMealTable,
  },
  data: function () {
    return {
      menus: MENUS,
      userSelectMealInfo: {},
      mealTableInfos: MEAL_TABLE_INFOS,
    };
  },

  mounted() {
    this.initUserSelectedMealInfo();
  },

  methods: {
    initUserSelectedMealInfo: function () {
      this.userSelectMealInfo = {
        time: DEFAULT_MEAL_TIME,
        menu: DEFAULT_MENU,
      };
    },

    handleAddMenu: function (newMenu) {
      this.menus.push(newMenu);
    },
    handleChangeFoodKind: function (foodKind) {
      this.userSelectMealInfo.time = foodKind;
    },

    handleChangeMenu: function (menu) {
      this.userSelectMealInfo.menu = menu;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 800px;
  height: 800px;
  background: lavender;
}
</style>

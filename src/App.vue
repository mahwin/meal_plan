<template>
  <div id="app">
    <Title title="식단 만들기" />
    <MenuMealAdd
      :menus="menus"
      :userSelectMealInfo="userSelectMealInfo"
      :useSelectMealTableInfo="useSelectMealTableInfo"
      @update:menu="handleChangeMenu"
      @update:add-menu="handleAddMenu"
      @update:food-kind="handleChangeFoodKind"
      @update:add-meal-info="handleAddMealInfo"
    />
    <MenuMealTable
      :mealTableInfos="mealTableInfos"
      :useSelectMealTableInfo="useSelectMealTableInfo"
      @update:meal-date-info="handleUpdateMealDateInfo"
      @update:add-meal-table-info="handleAddMealTableInfo"
    />
  </div>
</template>

<script>
import MenuMealAdd from "./components/menu-meal/add-menu-meal-component.vue";
import MenuMealTable from "./components/menu-meal/table-menu-meal-component.vue";
import Title from "./components/ui/title-component.vue";

import {
  DEFAULT_MENU,
  DEFAULT_MEAL_TIME,
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
      // 식단 추가용
      userSelectMealInfo: {},
      // 식단표 추가용
      useSelectMealTableInfo: {
        date: "",
        breakfast: "",
        lunch: "",
        dinner: "",
      },
      // 식단표 표시용
      mealTableInfos: MEAL_TABLE_INFOS,
    };
  },

  methods: {
    initUserSelectedMealInfo: function () {
      this.userSelectMealInfo = {
        time: DEFAULT_MEAL_TIME,
        menu: DEFAULT_MENU,
      };
    },

    initUseSelectMealTableInfo: function () {
      this.useSelectMealTableInfo = {
        date: "",
        launch: "",
        dinner: "",
        breakfast: "",
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

    handleAddMealInfo: function ({ time, menu }) {
      this.useSelectMealTableInfo[time] = menu;
      this.initUserSelectedMealInfo();
      console.log(this.userSelectMealInfo);
    },
    handleUpdateMealDateInfo: function (newDate) {
      this.useSelectMealTableInfo.date = newDate;
    },

    handleAddMealTableInfo: function () {
      this.mealTableInfos.push({ ...this.useSelectMealTableInfo });
      console.log(this.useSelectMealTableInfo);
      this.initUseSelectMealTableInfo();
      console.log(this.useSelectMealTableInfo);
    },
  },
  mounted() {
    this.initUserSelectedMealInfo();
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

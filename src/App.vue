<template>
  <div id="app">
    <Title title="식단 만들기" />
    <MenuMealAdd
      :menus="filteredMenus"
      :mealInfo="mealInfo"
      @update:add-menu="handleAddMenu"
      @update:add-meal-info="handleAddMealInfoToTotalMealInfo"
      @update:change-menu="handleChangeMenu"
      @update:change-time-kind="handleChangeTimeKind"
    />
    <MenuMealTable
      :totalMealInfo="totalMealInfo"
      :mealTableInfos="mealTableInfos"
      @update:change-total-meal-info-date="handleChangeTotalMealInfoDate"
      @update:add-meal-table-total-meal-info="handleAddMealTableTotalMealInfo"
    />
  </div>
</template>

<script>
import MenuMealAdd from "./components/menu-meal/add-menu-meal-component.vue";
import MenuMealTable from "./components/menu-meal/table-menu-meal-component.vue";
import Title from "./components/ui/title-component.vue";

import { DEFAULT_MEAL_TIME } from "./components/menu-meal/constants";

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
      menus: [...MENUS],
      filteredMenus: [],
      // 식단 추가용

      mealInfo: {},

      // 식단표 추가용
      totalMealInfo: { date: "", breakfast: "", lunch: "", dinner: "" },

      // 식단표 표시용
      mealTableInfos: MEAL_TABLE_INFOS,
    };
  },
  // computed: {
  //   filteredMenus() {
  //     const selectedMenus = Object.values(this.totalMealInfo);

  //     const sorted = [
  //       ...this.menus.filter((menu) => !selectedMenus.includes(menu)),
  //     ];
  //     return sorted;
  //   },
  // },

  methods: {
    /**
     * 사용된 메뉴인지 필터링하는 기능.
     */
    filterMenu() {
      const selectedMenus = Object.values(this.totalMealInfo);

      this.filteredMenus = [
        ...this.menus.filter((menu) => !selectedMenus.includes(menu)),
      ];
    },

    initMealInfo: function () {
      this.filterMenu();

      this.mealInfo = {
        time: DEFAULT_MEAL_TIME,
        menu: this.filteredMenus[0],
      };
    },

    initTotalMealInfo: function () {
      this.totalMealInfo = {
        date: "",
        launch: "",
        dinner: "",
        breakfast: "",
      };
    },

    handleAddMenu: function (newMenu) {
      this.menus.push(newMenu);
      this.initMealInfo();
    },

    handleChangeTimeKind: function (timeKind) {
      this.mealInfo["time"] = timeKind;
    },

    handleChangeMenu: function (menu) {
      this.mealInfo["menu"] = menu;
    },

    /**
     *  mealInfo {'dinner':'김치찌개'} 를
     *  totalInfo {date:'', dinner:'',...}에 반영
     */
    handleAddMealInfoToTotalMealInfo: function ({ time, menu }) {
      this.totalMealInfo[time] = menu;
      this.initMealInfo();
    },

    handleChangeTotalMealInfoDate: function (newDate) {
      this.totalMealInfo["date"] = newDate;
    },

    handleAddMealTableTotalMealInfo: function () {
      this.mealTableInfos.push({ ...this.totalMealInfo });

      this.initTotalMealInfo();
      this.initMealInfo();
    },
  },
  mounted() {
    this.initMealInfo();
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

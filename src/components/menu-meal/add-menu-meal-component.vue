<template>
  <section class="container">
    <SubTitle title="메뉴 추가" />
    <div>
      <input v-model="userInputMenu" />
      <button :disabled="isDisabled" @click="addMenu">추가</button>
    </div>
    <SubTitle title="식단 추가" />
    <label for="food_kind"
      >종류
      <select
        @change="handleChangeFoodKind"
        :value="userSelectMealInfo['time']"
      >
        <option v-for="time in meal_time_options" :key="time.value">
          {{ time.label }}
        </option>
      </select></label
    >
    <label for="food_menu"
      >메뉴
      <select @change="handleChangeMenu" :value="userSelectMealInfo['menu']">
        <!-- <option v-for="filteredMenu in filteredMenus" :key="filteredMenu">
          {{ filteredMenu }}
        </option> -->
        <option v-for="menu in menus" :key="menu">
          {{ menu }}
        </option>
      </select></label
    >
    <div class="flex-end">
      <ValidButton
        validName="추가"
        unValidName="데이터 확인"
        @click="handleAddMealInfo"
        :isValid="isUserSelectedOptionCanAdd"
      />
    </div>
  </section>
</template>

<script>
import SubTitle from "../ui/sub-title-component.vue";
import ValidButton from "../ui/valid-button-component.vue";

import { MEAL_TIME_OPTIONS, MEAL_TIME_MAPPER_KOR_ENG } from "./constants";

import { isNilOrEmpty } from "@/utils";

export default {
  name: "MenuMeal",
  components: {
    SubTitle,
    ValidButton,
  },
  props: {
    menus: {
      type: Array,
      required: true,
    },
    userSelectMealInfo: {
      type: Object,
      required: true,
    },
    useSelectMealTableInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userInputMenu: "",
      meal_time_options: MEAL_TIME_OPTIONS,
      mealTimeMapperKorEng: MEAL_TIME_MAPPER_KOR_ENG,
    };
  },

  computed: {
    isDisabled() {
      return !this.isUserInputMenuValid(this.userInputMenu);
    },
    isUserSelectedOptionCanAdd() {
      const currentUserSelectMealTime = this.userSelectMealInfo["time"];
      const currentUserSelectMealMenu = this.userSelectMealInfo["menu"];

      if (isNilOrEmpty(currentUserSelectMealTime)) return false;
      if (isNilOrEmpty(currentUserSelectMealMenu)) return false;
      return true;
    },
    filteredMenus() {
      const selectedMenus = Object.values(this.useSelectMealTableInfo);
      return this.menus.filter((menu) => !selectedMenus.includes(menu));
    },
  },

  methods: {
    initUserInputMenu: function () {
      this.userInputMenu = "";
    },

    addMenu() {
      this.$emit("update:add-menu", this.userInputMenu);
      this.initUserInputMenu();
    },

    isUserInputMenuValid(userInput) {
      if (isNilOrEmpty(userInput)) return false;

      if (this.menus.includes(userInput)) return false;

      return true;
    },
    handleChangeFoodKind({ currentTarget }) {
      this.$emit("update:food-kind", currentTarget.value);
    },
    handleChangeMenu({ currentTarget }) {
      this.$emit("update:menu", currentTarget.value);
    },

    handleAddMealInfo() {
      const { menu, time } = this.userSelectMealInfo;

      this.$emit("update:add-meal-info", {
        menu,
        time: this.mealTimeMapperKorEng[time],
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}

button[disabled] {
  background: orange;
  color: wheat;
  cursor: not-allowed;
}

select {
  width: 200px;
  text-align: end;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
</style>

<template>
  <div class="container">
    <SubTitle title="선택된 식단" />
    <ul class="time">
      <li v-for="mealTableKey in mealTableArrayInfoEngs" :key="mealTableKey">
        <div>
          {{ mealTimeMapperEngKor[mealTableKey] }}
          <input
            v-if="mealTableKey === 'date'"
            :value="totalMealInfo['date']"
            type="date"
            @input="handleChangeDate"
          />
          <span v-else>{{ totalMealInfo[mealTableKey] }}</span>
        </div>
      </li>
    </ul>
    <div class="flex-end">
      <ValidButton
        @click="handleAddMealTableInfo"
        validName="추가"
        unValidName="데이터 확인"
        :isValid="isUserSelectedOptionCanAdd"
      />
    </div>
    <SubTitle title="식단표" />
    <div class="meal_cards">
      <section
        class="meal_card"
        v-for="(mealTableInfo, index) in mealTableInfos"
        :key="index"
      >
        <h3>{{ mealTableInfo["date"] }}</h3>
        <p>
          <strong> {{ mealTimeMapperEngKor["breakfast"] }}: </strong>
          {{ mealTableInfo["breakfast"] }}
        </p>

        <p>
          <strong> {{ mealTimeMapperEngKor["lunch"] }}: </strong>
          {{ mealTableInfo["lunch"] }}
        </p>

        <p>
          <strong> {{ mealTimeMapperEngKor["dinner"] }}: </strong>
          {{ mealTableInfo["dinner"] }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import { isNilOrEmpty } from "@/utils";
import SubTitle from "../ui/sub-title-component.vue";
import ValidButton from "../ui/valid-button-component.vue";

import {
  MEAL_TIME_MAPPER_ENG_KOR,
  MEAL_TABLE_ARRAY_INFO_ENG,
} from "./constants";

export default {
  name: "TableMenuMeal",
  props: {
    mealTableInfos: {
      type: Array,
      required: true,
    },
    totalMealInfo: {
      type: Object,
      required: true,
    },
  },
  components: {
    SubTitle,
    ValidButton,
  },

  data() {
    return {
      mealTimeMapperEngKor: MEAL_TIME_MAPPER_ENG_KOR,
      mealTableArrayInfoEngs: MEAL_TABLE_ARRAY_INFO_ENG,
    };
  },
  methods: {
    handleChangeDate(e) {
      this.$emit("update:change-total-meal-info-date", e.target.value);
    },
    handleAddMealTableInfo: function () {
      this.$emit("update:add-meal-table-total-meal-info");
    },
  },
  computed: {
    isUserSelectedOptionCanAdd() {
      return Object.values(this.totalMealInfo).every(
        (mealInfo) => !isNilOrEmpty(mealInfo)
      );
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.time {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.meal_cards {
  display: flex;
  gap: 8px;
}
.meal_card {
  border: 1px solid darkcyan;
  width: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

p {
  font-weight: 300;
  font-size: 12px;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
}

li {
  list-style: none;
}
</style>

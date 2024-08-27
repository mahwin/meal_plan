<template>
  <div class="container">
    <SubTitle title="선택된 식단" />
    <div class="time">
      <label>날짜: <input type="text" /> </label>
      <label>아침:</label>
      <label>점심:</label>
      <label>저녁:</label>
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
          <strong> {{ mealTimeMapper["breakfast"] }}: </strong>
          {{ mealTableInfo["breakfast"] }}
        </p>

        <p>
          <strong> {{ mealTimeMapper["lunch"] }}: </strong>
          {{ mealTableInfo["lunch"] }}
        </p>

        <p>
          <strong> {{ mealTimeMapper["dinner"] }}: </strong>
          {{ mealTableInfo["dinner"] }}
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import SubTitle from "../ui/sub-title-component.vue";

import { MEAL_TIME_MAPPER } from "./constants";

export default {
  name: "TableMenuMeal",
  props: {
    mealTableInfos: {
      type: Array,
      required: true,
    },
  },
  components: {
    SubTitle,
  },

  data() {
    return {
      mealTimeMapper: MEAL_TIME_MAPPER,
    };
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
</style>

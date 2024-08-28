export const MEAL_TIME_OPTIONS = [
  { label: "아침", value: "breakfast" },
  { label: "점심", value: "lunch" },
  { label: "저녁", value: "dinner" },
];

// Todo 영어-한글, 한글-영어 맵핑 나누기
export const MEAL_TIME_MAPPER = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
  아침: "breakfast",
  점심: "lunch",
  저녁: "dinner",
  날짜: "date",
  date: "날짜",
};

export const MEAL_TIME_MAPPER_KOR_ENG = {
  아침: "breakfast",
  점심: "lunch",
  저녁: "dinner",
  날짜: "date",
};

export const MEAL_TIME_MAPPER_ENG_KOR = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
  date: "날짜",
};

export const MEAL_TABLE_ARRAY_INFO_ENG = [
  "date",
  "breakfast",
  "lunch",
  "dinner",
];

export const DEFAULT_MEAL_TIME = MEAL_TIME_OPTIONS[0].label;
export const DEFAULT_MENU = "";

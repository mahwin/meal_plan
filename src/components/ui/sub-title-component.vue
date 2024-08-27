<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  padding: 20px;
}
</style>

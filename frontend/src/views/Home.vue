<template>
  <div class="home">
    <MainBackground />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBackground from "@/components/MainBackground.vue";

export default {
  name: "Home",
  components: {
    MainBackground
  }
};
</script>

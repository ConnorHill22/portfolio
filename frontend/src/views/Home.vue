<template>
  <div class="home">
      <MainBackground class="top-0 left-0 absolute" />
      <div class = "flex content-center justify-center h-screen">
        <div class = "self-center text-center">
          <div class="  h-64 w-64 mr-auto ml-auto text-center block ch-imageCrop ch-shadow mb-4">
              <img src="../../public/pngs/home.png" alt=":)">
          </div>
          <p class="text-6xl font-thin">Connor Hill</p>
          <h2 class= "text-2xl">software engineer living in philly</h2>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBackground from "@/components/MainBackground.vue";
import Sidebar from "@/components/Sidebar.vue"

export default {
  name: "Home",
  components: {
    MainBackground,
    // Sidebar,
  }
};
</script>

<style>
.ch-imageCrop {
  overflow: hidden;
  border-radius: 50%;
}

.ch-shadow {
  box-shadow: 0px 10px 30px rgba(0, 0, 0,0.37);
}

</style>

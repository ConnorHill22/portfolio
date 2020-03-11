<template>
  <div class="w-full  p-4">
    <!-- <div class="">
      <h4 class="">{{ project.name }}</h4>
    </div> -->
    <!-- <div class="pb-10">
      <img v-bind:src="require(`../../public/svgs/${project.photo}`)" alt="App Picture" />
    </div>
    <div class="grid grid-cols-2 my-auto gap-2 row-span-1">
      <div
        class="cursor-pointer hover:bg-gray-400  grid grid-cols-2 h-8 rounded-full py-1 px-2 border-solid border border-gray-600"
      >
        <p class="ch-row" style="justify-self: start;">GitHub</p>
        <img
          class="ch-row h-4"
          style="justify-self: end;"
          src="../../public/icons/github-brands.svg"
          alt="Github icon"
        />
      </div>
      <div
        class="cursor-pointer hover:bg-gray-400 grid grid-cols-2 h-8 rounded-full py-1 px-2 border-solid border border-gray-600"
      >
        <p class="ch-row" style="justify-self: start;">Website</p>
        <img
          class="ch-row h-4"
          style="justify-self: end;"
          src="../../public/icons/globe-solid.svg"
          alt="Github icon"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MainProjectCarousel",
  props: ["project"]
};
</script>

<style>
.c-MainGrid {
  grid-template-rows: auto auto auto;
}

.ch-row {
  align-self: center;
}
</style>

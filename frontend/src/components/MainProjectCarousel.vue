<template>
  <div class="w-full h-full p-6 grid c-MainGrid">
    <div class = " row-span-1">
      <h4 class = "text-4xl font-thin">{{ project.name }}</h4>
    </div>
    <div class = "row-span-3 ch-row">
      <img class= "h-full" v-bind:src="require(`../../public/svgs/${project.photo}`)" alt="App Picture">
    </div>
    <div class = "row-span-2 ch-row">
      <p>{{ project.description }}</p>
    </div>
    <div class = "row-span-1 grid grid-cols-2 gap-4 h-full">
      <div class = "cursor-pointer hover:bg-gray-400  grid grid-cols-2 h-12 rounded-full py-2 px-4 border-solid border border-gray-600">
        <p class= "ch-row" style="justify-self: start;">GitHub</p>
        <img class= "ch-row" style="justify-self: end;" src="../../public/icons/github-brands.svg" alt="Github icon">
      </div>
      <div class = "cursor-pointer hover:bg-gray-400 grid grid-cols-2 h-12 rounded-full py-2 px-4 border-solid border border-gray-600">
        <p class= "ch-row" style="justify-self: start;">Website</p>
        <img class= "ch-row" style="justify-self: end;" src="../../public/icons/globe-solid.svg" alt="Github icon">
      </div>
    </div>
    <div class="row-span-1 ch-row">
      <ul class="grid ch-technologiesGrid" >
        <li style="justify-self: center;" v-for="item in project.technologies" :key="item.name">
          <div>
            <img v-bind:src="require(`../../public/icons/${item.icon}`)" alt="technolgy">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainProjectCarousel",
  props: ['project']
};
</script>

<style>
.c-MainGrid {
  grid-template-rows: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
}

.ch-row {
  align-self: center;
}

.ch-technologiesGrid {
  grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%;
  grid-template-rows: auto;
}

</style>

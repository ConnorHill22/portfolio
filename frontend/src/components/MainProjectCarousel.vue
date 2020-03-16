<template>
  <div class="w-full h-full pt-4 px-4 pb-4 grid c-MainGrid">
    <div class="h-full row-span-1">
      <h4 class="text-4xl font-thin">{{ project.name }}</h4>
    </div>
    <div class="row-span-3 w-full">
      <img
        class="ch-projectImage"
        v-bind:src="require(`../../public/svgs/${project.photo}`)"
        alt="App Picture"
      />
    </div>
    <div class = "grid ch-mainProjectContent row-span-4">
      <div class="h-full row-span-3">
        <p class="text-sm lg:text-base xl:text-base">{{ project.description }}</p>
      </div>
      <div class="grid grid-cols-2 my-auto gap-2 row-span-2">
        <div
          class="cursor-pointer hover:bg-gray-400  grid grid-cols-2 h-8 lg:h-10 rounded-full py-1 px-2 border-solid border border-gray-600"
        >
          <p class="ch-row lg:ml-2" style="justify-self: start;">GitHub</p>
          <img
            class="ch-row h-4 lg:h-6 lg:mr-2"
            style="justify-self: end;"
            src="../../public/icons/github-brands.svg"
            alt="Github icon"
          />
        </div>
        <div
          class="cursor-pointer hover:bg-gray-400 grid grid-cols-2 h-8 lg:h-10 rounded-full py-1 px-2 border-solid border border-gray-600"
        >
          <p class="ch-row lg:ml-2" style="justify-self: start;">Website</p>
          <img
            class="ch-row h-4 lg:h-6 lg:mr-2"
            style="justify-self: end;"
            src="../../public/icons/globe-solid.svg"
            alt="Github icon"
          />
        </div>
      </div>
      <div class="h-full my-auto row-span-2">
        <ul class="grid h-full content-center ch-technologiesGrid">
          <li style="justify-self: center;" v-for="item in project.technologies" :key="item.name">
            <div>
              <a class = "ch-toolTip" v-bind:href="item.website" target="_blank"><img v-bind:src="require(`../../public/icons/${item.icon}`)" alt="technolgy" /> <span class="ch-tooltiptext">{{ item.name }}</span></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
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
  grid-template-rows: repeat(8, 1fr)
}

.ch-mainProjectContent {
  grid-template-rows: repeat(7, 1fr);
  align-content: space-around;	
}

.ch-row {
  align-self: center;
}

.ch-projectImage {
  margin: auto;
  width: 22rem;
}

.ch-technologiesGrid {
  grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%;
  grid-template-rows: auto;
}

.ch-tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  margin-top: -4.5rem;
}

.ch-toolTip .ch-tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 14%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.ch-toolTip:hover .ch-tooltiptext {
  visibility: visible;
}
</style>

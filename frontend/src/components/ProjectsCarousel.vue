<template>
  <div class = "grid h-full grid-cols-12">
    <div class = "col-span-1"></div>
    <div class = "col-span-10 grid grid-cols-12">
      <div class = "col-span-1  m-auto">
        <img class = "ch-triangleShadow" src="../../public/svgs/arrow.svg" alt="">
      </div>
      <div class= "col-span-10 grid ">

      </div>
      <div class = "col-span-1 m-auto">
        <img  class = "transform rotate-180" src="../../public/svgs/arrow.svg" alt="">
      </div>
    </div>
    <div class = "col-span-1"></div>

  </div>
</template>

<script>

export default {
    name: "ProjectsCarousel"

}
</script>

<style>
/* .ch-triangleShadow {
  box-shadow: 0px 10px 20px rgba(0,0,0,0.9) 
} */


</style>
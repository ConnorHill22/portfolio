<template>
  <div class="h-screen grid ch-ProjectsView">
    <div style="align-self: end" class="row-span-1">
      <div class="grid grid-cols-5">
        <div class="col-span-1"></div>
        <div class="col-span-3">
          <div>
            <h1 class="w-64 text-8xl z-10 relative font-thin">
              projects
            </h1>
            <div class="ch-greenUnderline -mt-8 z-20 relative"></div>
          </div>
          <div class="mt-8">
            <h2 class="w-full text-3xl z-10 relative font-thin">
              Hey! Here's some things I've been working on...
            </h2>
            <div class="ch-purpleUnderline -mt-1 z-20 relative"></div>
          </div>
        </div>
        <div class="col-span-1"></div>
      </div>
    </div>
    <div class="row-span-3">
      <ProjectsCarousel />
    </div>
  </div>
</template>

<script>
import ProjectsCarousel from "../components/ProjectsCarousel";
export default {
  components: {
    ProjectsCarousel
  }
};
</script>

<style>
.ch-ProjectsView {
  grid-template-rows: repeat(4, 1fr)
}

.ch-greenUnderline {
  background-color: #74f090;
  height: 0.25rem;
  width: 12rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.37);
}

.ch-purpleUnderline {
  background-color: #bf95ff;
  height: 0.25rem;
  width: 20rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.37);
}
</style>

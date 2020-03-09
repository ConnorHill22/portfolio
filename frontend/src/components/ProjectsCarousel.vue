<template>
  <div class="grid h-full grid-cols-12">
    <div class="col-span-1"></div>
    <div class="col-span-10 grid grid-cols-12">
      <div class="col-span-1  m-auto">
        <img class="h-32" src="../../public/svgs/leftArrow.svg" alt="leftArrow" />
      </div>
      <div class="col-span-10 grid grid-cols-3 gap-4 h-full">
        <div class="grid grid-rows-9 col-span-1">
          <div class="row-span-2"></div>
          <div class="row-span-5">
            <div class="ch-secondaryTile h-full"></div>
          </div>
          <div class="row-span-2 h-full"></div>
        </div>
        <div class="grid grid-rows-9 col-span-1">
          <div class="row-span-1"></div>
          <div class="row-span-6">
            <div class="h-full ch-primaryTile">
              <MainProjectCarousel />
            </div>
          </div>
          <div class="row-span-1"></div>
        </div>
        <div class="grid grid-rows-9 col-span-1">
          <div class="row-span-2"></div>
          <div class="row-span-5">
            <div class="ch-secondaryTile h-full"></div>
          </div>
          <div class="row-span-2"></div>
        </div>
      </div>
      <div class="col-span-1 m-auto">
        <img class="h-32" src="../../public/svgs/rightArrow.svg" alt="rightArrow" />
      </div>
    </div>
    <div class="col-span-1"></div>
  </div>
</template>

<script>
import MainProjectCarousel from "../components/MainProjectCarousel";

export default {
  name: "ProjectsCarousel",
  components: {
    MainProjectCarousel
  },
  data() {
    return {
      projects: [
        {
          name: "Form Validator",
          photo: "../../public/svgs/placeholderProject.svg",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
          githubUri: "https://github.com/ConnorHill22/formValidator",
          websiteUri: "https://github.com/ConnorHill22/formValidator",
          technologies: [
            {
              name: "Vuejs",
              website: "https://vuejs.org/",
              icon: "../../public/icons/vuejs.svg"
            },
            {
              name: "Javascript",
              website: "https://www.javascript.com/",
              icon: "../../public/icons/javascript.svg"
            },
            {
              name: "Flask",
              website: "https://flask.palletsprojects.com/en/1.1.x/",
              icon: "../../public/icons/flask.svg"
            },
            {
              name: "Python",
              website: "https://www.python.org/",
              icon: "../../public/icons/python.svg"
            },
            {
              name: "HTML",
              website: "https://en.wikipedia.org/wiki/HTML",
              icon: "../../public/icons/html.svg"
            },
            {
              name: "CSS",
              website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
              icon: "../../public/icons/css.svg"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.ch-secondaryTile {
  border: solid 3px #74f090;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.37);
}

.ch-primaryTile {
  border: solid 3px #bf95ff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.85);
}
</style>

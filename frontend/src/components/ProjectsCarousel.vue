<template>
  <div class="grid h-full ch-bottomHalf grid-cols-12">
    <div class="col-span-1"></div>
    <div class="col-span-10 grid ch-projectCarouselGrid">
      <div class="col-span-1  m-auto">
        <img @click="leftArrowClick()" class="h-32 cursor-pointer" src="../../public/svgs/leftArrow.svg" alt="leftArrow" />
      </div>
      <div class="col-span-10 grid ch-3Tiles gap-4">
        <div class="grid  ch-carouselTile col-span-1">
          <div class="row-span-2"></div>
          <div :class="{leaveRightTransion: isLeaveRightTransition, leaveLeftTransion: isLeaveLeftTransition}" class="row-span-5 ch-secondaryTile">
            <SideProjectCarousel v-bind:project="firstProject" />
          </div>
          <div class="row-span-2 h-full"></div>
        </div>
        <div class="grid ch-carouselTile col-span-1">
          <div class="row-span-1"></div>
          <div :class="{leaveRightTransion: isLeaveRightTransition, leaveLeftTransion: isLeaveLeftTransition}"  class="ch-primaryTile">
            <MainProjectCarousel v-bind:project="secondProject" />
          </div>
          <div class="row-span-1"></div>
        </div>
        <div class="grid ch-carouselTile col-span-1">
          <div class="row-span-2"></div>
          <div :class="{leaveRightTransion: isLeaveRightTransition, leaveLeftTransion: isLeaveLeftTransition}"  class="row-span-5 ch-secondaryTile">
            <SideProjectCarousel v-bind:project="thirdProject" />
          </div>
          <div class="row-span-2"></div>
        </div>
      </div>
      <div class="col-span-1 m-auto">
        <img @click="rightArrowClick()" class="h-32 cursor-pointer" src="../../public/svgs/rightArrow.svg" alt="rightArrow" />
      </div>
    </div>
    <div class="col-span-1"></div>
  </div>
</template>

<script>
import MainProjectCarousel from "../components/MainProjectCarousel";
import SideProjectCarousel from "../components/SideProjectCarousel";

export default {
  name: "ProjectsCarousel",
  components: {
    MainProjectCarousel,
    SideProjectCarousel
  },
  data() {
    return {
      isLeaveRightTransition: false,
      isLeaveLeftTransition: false,
      isDisabled: false,
      projects: [
        {
          name: "Form Validator",
          photo: "placeholderProject.svg",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
          githubUri: "https://github.com/ConnorHill22/formValidator",
          websiteUri: "https://github.com/ConnorHill22/formValidator",
          technologies: [
            {
              name: "Vuejs",
              website: "https://vuejs.org/",
              icon: "vuejs.svg"
            },
            {
              name: "Javascript",
              website: "https://www.javascript.com/",
              icon: "javascript.svg"
            },
            {
              name: "Flask",
              website: "https://flask.palletsprojects.com/en/1.1.x/",
              icon: "flask.svg"
            },
            {
              name: "Python",
              website: "https://www.python.org/",
              icon: "python.svg"
            },
            {
              name: "HTML",
              website: "https://en.wikipedia.org/wiki/HTML",
              icon: "html.svg"
            },
            {
              name: "CSS",
              website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
              icon: "css.svg"
            }
          ]
        },
        {
          name: "Pizza Pizza",
          photo: "placeholderProject.svg",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
          githubUri: "https://github.com/ConnorHill22/formValidator",
          websiteUri: "https://github.com/ConnorHill22/formValidator",
          technologies: [
            {
              name: "Vuejs",
              website: "https://vuejs.org/",
              icon: "vuejs.svg"
            },
            {
              name: "Javascript",
              website: "https://www.javascript.com/",
              icon: "javascript.svg"
            },
            {
              name: "Flask",
              website: "https://flask.palletsprojects.com/en/1.1.x/",
              icon: "flask.svg"
            },
            {
              name: "Python",
              website: "https://www.python.org/",
              icon: "python.svg"
            },
            {
              name: "HTML",
              website: "https://en.wikipedia.org/wiki/HTML",
              icon: "html.svg"
            },
            {
              name: "CSS",
              website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
              icon: "css.svg"
            }
          ]
        },
        {
          name: "Forex Signals",
          photo: "placeholderProject.svg",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
          githubUri: "https://github.com/ConnorHill22/formValidator",
          websiteUri: "h0js.svg",
          technologies: [
            {
              name: "Vuejs",
              website: "https://vuejs.org/",
              icon: "vuejs.svg"
            },
            {
              name: "Javascript",
              website: "https://www.javascript.com/",
              icon: "javascript.svg"
            },
            {
              name: "Flask",
              website: "https://flask.palletsprojects.com/en/1.1.x/",
              icon: "flask.svg"
            },
            {
              name: "Python",
              website: "https://www.python.org/",
              icon: "python.svg"
            },
            {
              nafadeInTransitionme: "HTML",
              website: "https://en.wikipedia.org/wiki/HTML",
              icon: "html.svg"
            },
            {
              name: "CSS",
              website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
              icon: "css.svg"
            },
            
          ]
        },
        {
          name: "Carrousel Project",
          photo: "placeholderProject.svg",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores",
          githubUri: "https://github.com/ConnorHill22/formValidator",
          websiteUri: "https://github.com/ConnorHill22/formValidator",
          technologies: [
            {
              name: "Vuejs",
              website: "https://vuejs.org/",
              icon: "vuejs.svg"
            },
            {
              name: "Javascript",
              website: "https://www.javascript.com/",
              icon: "javascript.svg"
            },
            {
              name: "Flask",
              website: "https://flask.palletsprojects.com/en/1.1.x/",
              icon: "flask.svg"
            },
            {
              name: "Python",
              website: "https://www.python.org/",
              icon: "python.svg"
            },
            {
              name: "HTML",
              website: "https://en.wikipedia.org/wiki/HTML",
              icon: "html.svg"
            },
            {
              name: "CSS",
              website: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
              icon: "css.svg"
            }
          ]
        }
      ],
      firstProjectIndex: 0,
      secondProjectIndex: 1,
      thirdProjectIndex: 2,
    };
  },
  computed: {
    firstProject() {
      return this.projects[this.firstProjectIndex];
    },
    secondProject() {
      return this.projects[this.secondProjectIndex];
    },
    thirdProject() {
      return this.projects[this.thirdProjectIndex];
    },
  },
  methods: {
    leftArrowClick() {
      if( !this.isDisabled){
        this.isDisabled = true
        this.isLeaveLeftTransition = true
        setTimeout(() => { 
          this.firstProjectIndex = this.secondProjectIndex;
          this.secondProjectthis.isLeaveRightTransition = trueIndex = this.thirdProjectIndex;
          if(this.thirdProjectIndex + 1 == this.projects.length) {
            this.thirdProjectIndex = 0
          } else {
            this.thirdProjectIndex = this.thirdProjectIndex + 1
          }
        }, 750);
        setTimeout(() => { this.isLeaveLeftTransition = false; this.isDisabled = false }, 2000);
      }
    },
    rightArrowClick() {
      if( !this.isDisabled) {
        this.isDisabled = true
        this.isLeaveRightTransition = true
        setTimeout(() => {
          const currentFirst = this.firstProjectIndex
          const currentSecond = this.secondProjectIndex
          const currentThird = this.thirdProjectIndex
          this.thirdProjectIndex = currentSecond;
          this.secondProjectIndex = currentFirst
          if(currentThird + 1 == this.projects.length) {
            this.firstProjectIndex = 0
          } else {
            this.firstProjectIndex = currentThird + 1
          }
        }, 750);
        setTimeout(() => { this.isLeaveRightTransition = false; this.isDisabled = false }, 2000);
        
      }
    },
  }
};
</script>

<style>

.ch-3Tiles {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

.leaveRightTransion {
  animation: leaveRight 1.5s linear;
}

.leaveLeftTransion {
  animation: leaveLeft 1.5s linear;
}

.ch-projectCarouselGrid {
  grid-template-columns: repeat(12, 1fr);
}

.ch-carouselTile {
  grid-template-rows: repeat(9,1fr) 
}

.ch-secondaryTile {
  grid-row-start: 3;
  grid-row-end: 8;
  border: solid 3px #74f090;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.37);
}

.ch-primaryTile {
  grid-row-start: 2;
  grid-row-end: 9;
  border: solid 3px #bf95ff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.85);
}

@keyframes leaveRight {
  0%, 100% {
    transform: translate(0,0);
    opacity:1;
  }
  40% {
    transform: translate(2vw,0);
    opacity:0;
  }
  50% {
    transform: translate(2vw,-600px);
    opacity:0;
  }
  51% {
    transform: translate(-2vw,-600px);
    opacity:0;
  }
  60% {
    transform: translate(-2vw,0);
    opacity:0;
  }
}

@keyframes leaveLeft {
  0%, 100% {
    transform: translate(0,0);
    opacity:1;
  }
  48% {
    transform: translate(-600px,0);
    opacity:0;
  }
  50% {
    transform: translate(-600px,-600px);
    opacity:0;
  }
  51% {
    transform: translate(600px,-600px);
    opacity:0;
  }
  52% {
    transform: translate(600px,0);
    opacity:0;
  }
}

</style>

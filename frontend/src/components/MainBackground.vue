<template>
  <kinesis-container>
    <div class="h-screen ch-mainBg">
      <div class="w-screen flex justify-between">
        <div style ="transform: translate(20vw,20vh) rotate(-45deg);" class="inline ch-lineDiv justify-center transform -rotate-90">
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/greenRect.svg" alt="greensvg" class="ch-lineDiv ch-shadow  inline " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(10vw,-5vh) rotate(-45deg);" class="inline ch-lineDiv justify-center ">
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow   inline " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(35vw,35vh) rotate(-45deg);" class="inline ch-lineDivjustify-center ">
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/greenRect.svg" alt="greensvg" class="ch-lineDiv ch-shadow  inline " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(10vw,-10vh) rotate(-45deg);" class="grid ch-lineDiv justify-center ">
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/purpleRect.svg" alt="purplesvg" class="ch-shadow  " />
          </kinesis-element>
          <kinesis-element :strength="20">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-shadow  " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(5vw,-30vh) rotate(-45deg);" class="grid ch-lineDiv justify-center ">
          <kinesis-element :strength="30">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow " />
          </kinesis-element>
          <kinesis-element :strength="20">
            <img  src="../../public/svgs/purpleRect.svg" alt="purplesvg" class="ch-lineDiv ch-shadow " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(3vw,-60vh) rotate(-45deg);" class="grid ch-lineDivjustify-center ">
          <kinesis-element :strength="20">
            <img  src="../../public/svgs/greenRect.svg" alt="greensvg" class="ch-lineDiv ch-shadow  " />
          </kinesis-element>
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(20vw,-23vh) rotate(-45deg);" class="grid gap-64 ch-lineDiv justify-center ">
          <kinesis-element :strength="30">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow  " />
          </kinesis-element>
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/greenRect.svg" alt="greensvg" class="ch-lineDiv ch-shadow " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(8vw,-55vh) rotate(-45deg);" class="grid gap-64 ch-lineDiv justify-center ">
          <kinesis-element :strength="20">
            <img  src="../../public/svgs/purpleRect.svg" alt="purplesvg" class="ch-lineDiv ch-shadow  " />
          </kinesis-element>
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow " />
          </kinesis-element>
        </div>
        <div style ="transform: translate(27vw,-22vh) rotate(-45deg);" class="inline ch-lineDiv justify-center ">
          <kinesis-element :strength="30">
            <img  src="../../public/svgs/greenRect.svg" alt="greensvg" class="ch-lineDiv ch-shadow inline" />
          </kinesis-element>
        </div>
        <div style ="transform: translate(15vw,-60vh) rotate(-45deg);" class="inline ch-lineDiv justify-center ">
          <kinesis-element :strength="10">
            <img  src="../../public/svgs/whiteRect.svg" alt="whitesvg" class="ch-lineDiv ch-shadow inline" />
          </kinesis-element>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: "MainBackground",
};
</script>

<style>
.ch-lineDiv {
  margin-bottom: 10vw;
}

.ch-shadow {
  box-shadow: -10px 30px 20px rgba(0, 0, 0,0.37);
}

.ch-mainBg {
  overflow: hidden;
}
</style>

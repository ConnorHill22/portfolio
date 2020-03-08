<template>
  <div id="burger"
         :class="{ 'active' : isBurgerActive }"
         @click.prevent="toggle">
        <slot>
            <button type="button" class="burger-button" title="Menu">
                <span class="hidden">Toggle menu</span>
                <span class="burger-bar burger-bar--1"></span>
                <span class="burger-bar burger-bar--2"></span>
                <span class="burger-bar burger-bar--3"></span>
            </button>
        </slot>
    </div>
</template>

<script>
export default {
    name: "Burger",
    data: () => ({
        isBurgerActive: false
    }),
    methods: {
        toggle() {
            this.isBurgerActive = !this.isBurgerActive
        }
    }

}
</script>

<style>
   .hidden {
        visibility: hidden;
    }

    button {
        cursor: pointer;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }

    .burger-button {
        position: relative;
        height: 100px;
        width: 100px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        pointer-events: all;
        transition: transform 1.0s cubic-bezier(.165,.84,.44,1);
    }

    .burger-bar {
        /* background-color: #130f40; */
        position: absolute;
        top: 2vh;
        right: 6px;
        left: 2vw;
        height: 5px;
        width: 50px;
        margin-top: 9px;
        transition: transform 1.0s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0,.8);
        border: 1px solid rgba(0, 0, 0,.5);
    }

    .burger-bar--1 {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
        background-color: #74F090;
    }

    .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(.8);
        background-color: #ffff;

    }

    .burger-button:hover .burger-bar--2 {
        transform: scaleX(1);
    }

    .no-touchevents .burger-bar--2:hover {
        transform: scaleX(1);
    }

    .burger-bar--3 {
        transform: translateY(15px);
        background-color: #BF95FF;
    }

    #burger.active .burger-button {
        /* transform: rotate(-180deg); */
    }

    #burger.active .burger-bar--1 {
        transform: rotate(45deg)
    }

    #burger.active .burger-bar--2 {
        opacity: 0;
        left: -60px;
    }

    #burger.active .burger-bar--3 {
        transform: rotate(-45deg)
    }
</style>

<template>
    <div class = "absolute ">
        <div id="burger"
            class = "z-30"
            :class="{ 'active' : isBurgerActive }"
            @click.prevent="toggle">
            <slot>
                <button type="button" class="burger-button" title="Menu">
                    <span class="burger-bar burger-bar--1"></span>
                    <span class="burger-bar burger-bar--2"></span>
                    <span class="burger-bar burger-bar--3"></span>
                </button>
            </slot>
        </div>
        <div :class="{ 'navActive' : !isBurgerActive }">
            <div class=" flex w-screen">
                <div class="absolute top-0 left-0 bg-chColors-100 h-screen z-20 flex-1 w-1/6">
                    <div class = "h-64 mt-32 pl-2">
                        <h1 class="text-4xl ch-navItems" >CH</h1>
                        <div class = "grid grid-cols-1 ml-2">
                            <router-link @click.native="toggle()" class = "ch-navItems" to="/">Home</router-link>
                            <router-link @click.native="toggle()" class = "ch-navItems" to="/projects">Projects</router-link>
                            <router-link @click.native="toggle()" class = "ch-navItems" to="/about">About</router-link>
                            <router-link @click.native="toggle()" class = "ch-navItems" to="/contact">Contact</router-link>
                        </div>
                    </div>
                </div>
                <div class = "absolute bg-chColors-200 top-0 h-screen z-10 w-screen flex-1 w-5/6">

                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: "Nav",
    data: () => ({
        isBurgerActive: false,
    }),
    methods: {
        toggle() {
            this.isBurgerActive = !this.isBurgerActive
        },

    }

}
</script>

<style>

    .navActive {
        display: none;
    }

    button {
        cursor: pointer;
    }

    button:focus, button::before, button::after {
        outline: 0 !important;
        border: none !important;
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
        /* border: 1px solid rgba(0, 0, 0,.5); */
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
        transform: rotate(-45deg);
    }

    .ch-navItems {
        text-shadow: 5px 10px 20px rgba(0, 0, 0, .37);
        margin-bottom: 1rem;
    }

    .router-link-exact-active {
        color: #BF95FF;
        padding-left: 1rem;
    }
</style>

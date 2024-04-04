<template>
  <nav id="navbar" data-link="navbar">
    <div class="navbar__logo">
      <img src="@/assets/imgs/logo_img.png" alt="subin's logo" />
      <router-link to="/dashboard">Subin</router-link>
    </div>
    <ul class="navbar__menu">
      <li
        class="navbar__menu__item"
        :data-link="menuItem.dataLink"
        v-for="(menuItem, index) in menuItems"
        :key="index"
      >
        {{ menuItem.label }}
      </li>
    </ul>

    <button class="navbar__toggle-btn" @click="toggleMenu()">
      <i class="fa-bars">■</i>   
      <i class="fa-times-circle">□</i>   
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: Array,
  },
  methods: {
    toggleMenu() {
      // Add logic to toggle the menu
      const navbarMenu = document.querySelector(".navbar__menu");
      const navbarBtnOn = document.querySelector(".navbar__toggle-btn > .fa-times-circle");
      const navbarBtnOff = document.querySelector(".navbar__toggle-btn > .fa-bars");
      
      navbarMenu.classList.toggle("open");
      navbarBtnOn.classList.toggle("on");
      navbarBtnOff.classList.toggle("off");
    },
  },
}
</script>

<style lang="scss">
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: color(white);
  padding: 16px;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: transparent;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(310px);
  transform: translateZ(310px);
  @include mobile768 {
    flex-direction: column;
    align-items: flex-start;
    background-color: color(red);
  }
  &.navbar--dark {
    background-color: color(red);
    transition: all $animation-duration ease-in-out;
    padding: 8px 16px;
    @include mobile768 {
      padding: 16px;
    }
  }
  .navbar {
    &__logo {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        display: block;
        margin-right: 4px;
      }
      a {
        @include font(medium);
      }
    }
    &__menu {
      display: flex;
      @include mobile768 {
        flex-direction: column;
        text-align: center;
        width: 100%;
        display: none;
        &.open {
          display: block;
        }
      }
      &__item {
        padding: 8px 16px;
        margin: 0 6px;
        cursor: pointer;
        border-radius: $size-border-radius;
        border: 1px solid transparent;
        &.select {
          border-color: color(white);
        }
        &:hover {
          border-color: color(white);
        }
      }
    }
    &__toggle-btn {
      @include font(medium);
      color: color(white);
      position: absolute;
      right: 16px;
      display: none;
      @include mobile768 {        
        display: block;
      }
      i {
        position: absolute;
        top: 0.2px;
        right: 0;
        width: 30px;
      }
      @include mobile768 {
        .fa-bars {
          opacity: 1;
          &.off {
            opacity: 0;
          }
        }
      }
      .fa-times-circle {
        opacity: 0;
        pointer-events: none;
        @include mobile768 {
          &.on {
            pointer-events: auto;
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>

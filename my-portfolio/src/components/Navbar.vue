<template>
  <nav id="navbar" :data-link="navbarDataLink">
    <div class="navbar__logo">
      <img src="@/assets/imgs/logo_img.png" alt="subin's logo" />
      <router-link to="/">Subin</router-link>
    </div>
    <ul class="navbar__menu">
      <li
        class="navbar__menu__item"
        :data-link="menuItem.dataLink"
        v-for="(menuItem, index) in menuItems"
        :key="index"
      >
        <router-link :to="menuItem.dataLink">{{ menuItem.label }}</router-link>
      </li>
    </ul>

    <button class="navbar__toggle-btn" @click="toggleMenu">
      <i class="fas fa-bars"></i>
      <i class="fas fa-times-circle"></i>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home", dataLink: "#home" },
        { label: "About", dataLink: "#about" },
        { label: "Skills", dataLink: "#skills" },
        { label: "Work", dataLink: "#work" },
        { label: "Animations", dataLink: "#animations" },
        { label: "Contact", dataLink: "#contact" },
      ],
      navbarDataLink: null,
    }
  },
  mounted() {
    this.navbarDataLink = this.$el.getAttribute("data-link")
  },
  methods: {
    toggleMenu() {
      // Add logic to toggle the menu
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
  &.navbar--dark {
    background-color: color(red);
    transition: all $animation-duration ease-in-out;
    padding: 8px 16px;
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
      i {
        position: absolute;
        top: 0.2px;
        right: 0;
        width: 30px;
      }
      .fa-times-circle {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
}
</style>

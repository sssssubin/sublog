<template>
  <div class="study-container">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/study/interaction">Interaction</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/study/animation">Animation</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtChild />
  </div>
</template>

<style lang="scss">
.study-container {
  width: 100%;
  background: #f8f9fa;
  margin: 0;
  > nav {
    padding: 20px;
    > ul {
      list-style: none;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      gap: 15px;
      li {
        width: 100%;
        flex-grow: 1;
        a {
          width: 100%;
          height: auto;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px 0;
          border-radius: 8px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          &.nuxt-link-exact-active,
          &.nuxt-link-active {
            color: #fff;
            background: #007aff;
          }
        }
      }
    }
  }
}
</style>

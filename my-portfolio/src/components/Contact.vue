<template>
  <section id="contact" class="section">
    <h1 class="contact__title">Let's talk</h1>
    <h2 class="contact__email">bstnqls@naver.com</h2>
    <div class="contact__links">
      <a href="https://github.com/forest-k" target="_blank" class="git__icon">
        <i class="fab fa-github"></i>
      </a>
      <a href="#none" target="_blank" class="linked__icon">
        <i class="fa fa-linkedin-square"></i>
      </a>
    </div>
    <p class="contact__rights">2021 Coding Subin - All rights reserved</p>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#contact {
  background-color: color(dark-black);
}

.contact__title,
.contact__email,
.contact__rights {
  color: color(white);
}

.contact__title {
  margin: 32px 0;
}

.contact__links {
  font-size: var(--font-large);
  margin: 24px 0;
  transition: all $animation-duration ease-in;
}

.contact__links a {
  display: inline-block;
}

.contact__links a.git__icon {
  margin-right: 8px;
}

.contact__links i:hover {
  transform: scale(1.1);
  color: color(beige);
}
</style>
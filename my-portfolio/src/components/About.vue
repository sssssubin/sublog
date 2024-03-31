<template>
  <section id="about" class="section section__container">
    <h1>About me</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, velit
      tenetur nemo voluptatibus culpa, natus assumenda aliquid provident
      distinctio sint optio excepturi, consectetur omnis mollitia recusandae
      beatae? Fugiat, deleniti quia.
    </p>
    <div class="about__majors">
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-html5"></i>
        </div>
        <h2 class="major__title">HTML</h2>
      </div>
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-css3-alt"></i>
        </div>
        <h2 class="major__title">CSS</h2>
      </div>
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-js-square"></i>
        </div>
        <h2 class="major__title">JavaScript</h2>
      </div>
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-vuejs"></i>
        </div>
        <h2 class="major__title">Vue.js</h2>
      </div>
    </div>
    <div class="about__jobs">
      <div class="job">
        <img
          src="@/assets/imgs/wellness_logo.png"
          alt="웰니스인텔리전스"
          class="job__logo"
        />
        <div class="job__description">
          <p class="job__name">
            working at wellness intelligence as webpublisher
          </p>
          <p class="job__period">2020 Jun - 2021 Oct</p>
        </div>
      </div>
      <div class="job">
        <img src="@/assets/imgs/kumsung_logo.jpg" alt="금성출판사" class="job__logo" />
        <div class="job__description">
          <p class="job__name">working at kumsung as webpublisher</p>
          <p class="job__period">2021 Oct - Until now</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about__majors {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}

.major__icon {
  width: 170px;
  height: 170px;
  line-height: 170px;
  font-size: 70px;
  color: var(--color-red);
  border: 1px solid var(--color-dark-red);
  border-radius: 50%;
  margin-bottom: 16px;
}

.major__icon i {
  transition: all var(--animation-duration) ease;
}

.major__icon:hover i {
  color: var(--color-beige);
  transform: rotate(-30deg) scale(1.1);
}

.major__title {
  color: var(--color-dark-grey);
}

.job {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.job__logo {
  background-color: var(--color-dark-grey);
  border-radius: 50%;
  width: 148px;
  display: block;
}

.job__description {
  margin: 0 0 0 16px;
  text-align: left;
}

.job__name,
.job__period {
  color: var(--color-light-grey);
}

.job__name {
  font-size: var(--font-small);
  font-weight: var(--weight-semi-bold);
}

.job__period {
  font-size: var(--font-micro);
}
</style>
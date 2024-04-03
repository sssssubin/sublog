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
      <div class="major" v-for="(major, index) in majors" :key="index">
        <div class="major__icon">
          <i v-html="major.icon" v-if="major.icon"></i>
          <img :src="major.iconImg" :alt="major.title" v-else>
        </div>
        <h2 class="major__title">{{ major.title }}</h2>
      </div>
    </div>
    <div class="about__jobs">
      <div class="job" v-for="(job, index) in jobs" :key="index">
        <img :src="job.logo" :alt="job.company" class="job__logo" />
        <div class="job__description">
          <p class="job__name">{{ job.title }}</p>
          <p class="job__period">{{ job.period }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      majors: [
        { icon: `<svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>`, title: "HTML" },
        { icon: `<svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>`, title: "CSS" },
        { icon: `<svg fill="none" height="2500" width="2183" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25"/><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/></g></svg>`, title: "JavaScript" },
        { iconImg: require("@/assets/logo.png"), title: "Vue.js" },
      ],
      jobs: [
        {
          logo: require("@/assets/imgs/wellness_logo.png"),
          company: "웰니스인텔리전스",
          title: "working at wellness intelligence as webpublisher",
          period: "2020 Jun - 2021 Oct",
        },
        {
          logo: require("@/assets/imgs/kumsung_logo.jpg"),
          company: "금성출판사",
          title: "working at kumsung as webpublisher",
          period: "2021 Oct - Until now",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.about {
  &__majors {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    @include mobile768 {
      margin: 30px 0 0 0;
      flex-direction: column;
      align-items: center;
    }
    .major {
      @include mobile768 {
        margin-bottom: 30px;
      }
      &__icon {
        width: 170px;
        height: 170px;
        line-height: 170px;
        font-size: 70px;
        color: color(red);
        border: 1px solid color(dark-red);
        border-radius: 50%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        img, i {
          display: block;
          width: 50%;
          height: 50%;
          transition: all $animation-duration ease;
          svg {
            display: block;
            width: 100%;
            height: 100%;            
          }
        }
        &:hover {
          img, i {
            color: color(beige);
            transform: rotate(-30deg) scale(1.1);
          }
        }
      }
      &__title {
        color: color(dark-grey);
      }
    }
  }
  &__jobs {
    .job {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      &__logo {
        background-color: color(dark-grey);
        border-radius: 50%;
        width: 148px;
        display: block;
        @include mobile768 {
          width: 72px;
        }
      }
      &__description {
        margin: 0 0 0 16px;
        text-align: left;
      }
      &__name,
      &__period {
        color: color(light-grey);
      }

      &__name {
        @include font(small);
      }

      &__period {
        @include font(micro);
      }
    }
  }
}
</style>

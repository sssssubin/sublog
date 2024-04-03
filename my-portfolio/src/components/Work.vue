<template>
  <section id="work" class="section">
    <div class="section__container">
      <h1>My Work</h1>
      <h3>Projects</h3>
      <!-- 카테고리 버튼들 -->
      <div class="work__categories">
        <button
          v-for="(category, index) in categories"
          :key="index"
          class="category__btn"
          :data-filter="category.data"
          :class="{ selected: currentFilter === category.data }"
          @click="handleFilterSelection($event, category.data)"
        >
          {{ category.title }}
          <!-- 해당 카테고리에 속하는 프로젝트 수 -->
          <span class="category__count">
            {{ getProjectCount(category.data) }}
          </span>
        </button>
      </div>
      <!-- 프로젝트 목록 -->
      <div class="work__projects">
        <a
          v-for="(project, index) in filteredProjects"
          :key="index"
          :href="project.link"
          :data-type="project.type"
          class="project"
          target="_blank"
        >
          <img :src="project.image" :alt="project.title" class="project__img" />
          <div class="project__description">
            <h3>{{ project.title }}</h3>
            <span>{{ project.technologies }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: "*", // 현재 선택된 필터
      categories: [ // 카테고리 목록
        { data: "*", title: "ALL" },
        { data: "Webstandard", title: "Webstandard" },
        { data: "Responsive", title: "Responsive" },
        { data: "etc", title: "etc" },
      ],
      projects: [ // 프로젝트 목록
        { title: "Webstandard", technologies: "HTML / CSS / JavaScript / jQuery", link: "http://kimmango.dothome.co.kr/web/index.html", image: require("@/assets/imgs/work1.jpg"), type: "Webstandard" },
        { title: "Responsive", technologies: "HTML / CSS / JavaScript / jQuery", link: "http://kimmango.dothome.co.kr/responsive/index.html", image: require("@/assets/imgs/work2.jpg"), type: "Responsive" },
        { title: "Megabox Website", technologies: "HTML / CSS / JavaScript / jQuery", link: "http://kimmango.dothome.co.kr/megabox/index.html", image: require("@/assets/imgs/work3.jpg"), type: "etc" },
        { title: "Fendi Website", technologies: "HTML / CSS / JavaScript / jQuery", link: "http://kimmango.dothome.co.kr/fendi/index.html", image: require("@/assets/imgs/work4.jpg"), type: "etc" },
        { title: "Hyundai Card Website", technologies: "HTML / CSS", link: "http://kimmango.dothome.co.kr/HyundaiCard/index.html", image: require("@/assets/imgs/work5.jpg"), type: "etc" },
      ],
    }
  },
  computed: {
    // 필터된 프로젝트 목록
    filteredProjects() {
      if (this.currentFilter === "*") {
        return this.projects;
      } else {
        return this.projects.filter(project => project.type === this.currentFilter && !project.isHidden);
      }
    },
  },
  methods: {
    handleFilterSelection(e, type) {
      const filter = type;
      if (filter == null) return;

      const projectContainer = this.$el.querySelector(".work__projects"); 
      const projects = this.$el.querySelectorAll(".project"); 

      // 이전 선택 취소 후 새로운 선택 처리
      const active = this.$el.querySelector(".category__btn.selected"); 
      active.classList.remove("selected");
      const target = e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
      target.classList.add("selected");

      projectContainer.classList.add("anim-out");

      setTimeout(() => {
        projects.forEach((project) => {
          if (filter === "*" || filter === project.dataset.type) {
            project.isHidden = false;
          } else {
            project.isHidden = true;
          }
        });
        projectContainer.classList.remove("anim-out");

        this.filterProjects(type);
      }, 200);
    },
    // 프로젝트 필터링
    filterProjects(type) {
      this.currentFilter = type;
    },
    // 특정 카테고리에 속하는 프로젝트 수 반환
    getProjectCount(category) {
      if (category === "*") {
        return this.projects.length;
      } else {
        return this.projects.filter(project => project.type === category).length;
      }
    },
  },
}
</script>

<style lang="scss">
.work {
  &__categories {
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    @include mobile768 {
      flex-direction: column;
      gap: 4px;
    }
  }

  &__projects {
    display: flex;
    flex-wrap: wrap;
    opacity: 1;
    transition: all $animation-duration ease-out;

    &.anim-out {
      opacity: 0.6;
      transform: scale(0.96) translateY(40px);
    }
  }
}

.category {
  &__btn {
    border: 1px solid color(dark-white);
    padding: 8px 48px;
    position: relative;
    border-radius: $size-border-radius;
    @include font(regular);
    @include mobile768 {
      width: 100%;
    }

    &.selected,
    &:hover {
      background-color: color(red);
      color: color(white);
      .category__count {
        opacity: 1;
        top: 0;
      }
    }
  }
  &__count {
    background-color: color(dark-black);
    border-radius: 50%;
    color: color(white);
    width: 24px;
    height: 24px;
    line-height: 24px;
    position: absolute;
    top: -20px;
    right: 16px;
    opacity: 0;
    transition: all $animation-duration ease-in;
  }
}

.project {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 250px;
  margin: 2px 16px;
  flex-basis: calc(25% - 32px);
  
  @include mobile768 {
    flex-grow: 1;
    margin: 0 2px 38px 2px;
    flex-basis: initial;
  }

  &__img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  &__description {
    position: absolute;
    top: 0;
    background-color: rgba(31, 2, 2, 0.8);
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(10px);
    transition: all $animation-duration ease;

    h3 {
      color: color(white);

      &::after {
        content: "";
        display: block;
        width: 50px;
        height: 2px;
        background-color: color(beige);
        position: relative;
        left: 50%;
        margin: 8px 0 0 0;
        transform: translateX(-50%);
      }
    }
  }

  &:hover {
    .project__description {
      transform: translateY(0);
      opacity: 0.8;
    }
  }
}
</style>

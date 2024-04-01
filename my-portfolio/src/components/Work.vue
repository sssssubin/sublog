<template>
  <section id="work" class="section">
    <div class="section__container">
      <h1>My work</h1>
      <h3>Projects</h3>
      <div class="work__categories">
        <button
          v-for="(categorie, index) in categories" :key="index"
          class="category__btn" :data-filter="categorie.data"
          :class="{ selected: currentFilter === categorie.data }"
          @click="filterProjects(categorie.data)"
          @mouseover="getProjectCount(categorie.data)"
        >
          {{ categorie.title }} <span class="category__count">{{ getProjectCount(categorie.data)  }}</span>
        </button>
      </div>
      <div class="work__projects">
        <a
          v-for="(project, index) in filteredProjects"
          :key="index"
          :href="project.link"
          class="project"
          target="_blank"
        >
          <img :src="project.image" :alt="project.alt" class="project__img" />
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
      currentFilter: "*",
      categories: [
        {
         data: '*',
         title: 'ALL'
        },
        {
         data: 'Webstandard',
         title: 'Webstandard'
        },
        {
         data: 'Responsive',
         title: 'Responsive'
        },
        {
         data: 'etc',
         title: 'etc'
        },
      ],
      projects: [
        {
          title: "Webstandard",
          technologies: "HTML / CSS / JavaScript / jQuery",
          link: "http://kimmango.dothome.co.kr/web/index.html",
          image: require("@/assets/imgs/work1.jpg"),
          type: "Webstandard",
        },
        {
          title: "Responsive",
          technologies: "HTML / CSS / JavaScript / jQuery",
          link: "http://kimmango.dothome.co.kr/responsive/index.html",
          image: require("@/assets/imgs/work2.jpg"),
          type: "Responsive",
        },
        {
          title: "Megabox Website",
          technologies: "HTML / CSS / JavaScript / jQuery",
          link: "http://kimmango.dothome.co.kr/megabox/index.html",
          image: require("@/assets/imgs/work3.jpg"),
          type: "etc",
        },
        {
          title: "Fendi Website",
          technologies: "HTML / CSS / JavaScript / jQuery",
          link: "http://kimmango.dothome.co.kr/fendi/index.html",
          image: require("@/assets/imgs/work4.jpg"),
          type: "etc",
        },
        {
          title: "Hyundai Card Website",
          technologies: "HTML / CSS",
          link: "http://kimmango.dothome.co.kr/HyundaiCard/index.html",
          image: require("@/assets/imgs/work5.jpg"),
          type: "etc",
        },
      ],
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === "*") {
        return this.projects
      } else {
        return this.projects.filter(
          (project) => project.type === this.currentFilter
        )
      }
    },
  },
  methods: {
    filterProjects(type) {
      this.currentFilter = type
    },
    getProjectCount(category) {
      if (category === "*") {
        return this.projects.length;
      } else {
        return this.projects.filter(project => project.type === category).length;
      }
    }
  },
}
</script>

<style lang="scss">
.work__categories {
  margin: 40px;
}

.category__btn {
  border: 1px solid color(dark-white);
  padding: 8px 48px;
  position: relative;
  border-radius: $size-border-radius;
  @include font(regular);
}

.category__btn.selected,
.category__btn:hover {
  background-color: color(red);
  color: color(white);
}

.category__btn.selected .category__count,
.category__btn:hover .category__count {
  opacity: 1;
  top: 0;
}

.category__count {
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

.work__projects {
  display: flex;
  flex-wrap: wrap;
  opacity: 1;
  transition: all $animation-duration ease-out;
}

.work__projects.anim-out {
  opacity: 0.6;
  transform: scale(0.96) translateY(40px);
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
}

.project.invisible {
  display: none;
}

.project__img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.project__description {
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
}

.project:hover .project__description {
  transform: translateY(0);
  opacity: 0.8;
}

.project__description h3 {
  color: color(white);
}

.project__description h3::after {
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
</style>

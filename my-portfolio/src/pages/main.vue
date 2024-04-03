<template>
  <div>
    <Navbar v-bind:menuItems="menuItems"></Navbar>
    <main>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </main>    
    <button class="arrow-up" data-link="#home" @click="smoothScrollToTop">△</button>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Skills from "../components/Skills.vue"
import Work from "../components/Work.vue"
import Contact from "../components/Contact.vue"

export default {
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Work,
    Contact,
  },  
  data() {
    return {
      menuItems: [
        { label: "Home", dataLink: "#home" },
        { label: "About", dataLink: "#about" },
        { label: "Skills", dataLink: "#skills" },
        { label: "Work", dataLink: "#work" },
        { label: "contact", dataLink: "#contact" },
      ],
      sectionIds: [
        "#home",
        "#about",
        "#skills",
        "#work",
        "#contact",
      ],
      sections: {},
      navItems: {},
      selectedNavIndex: 0,
      selectedNavItem: ''
    }
  },
  mounted() {
    // Make home slowly fade to transparent as the window scrolls down
    window.addEventListener('scroll', this.handleScroll);
    
    // Make navbar transparent when it is on the top
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar.getBoundingClientRect().height;

    document.addEventListener("scroll", () => {
      if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
      } else {
        navbar.classList.remove("navbar--dark");
      }
    });

    // Handle scrolling when tapping on the navbar menu
    const navbarMenu = document.querySelector(".navbar__menu");
    navbarMenu.addEventListener("click", (event) => {
      this.scrollToId(event);
    });

    // 모든 section 요소들, 메뉴 아이템들을 가져오기
    this.sections = this.sectionIds.map((id) => document.querySelector(id));
    this.navItems = this.sectionIds.map((id) =>
      document.querySelector(`[data-link="${id}"]`)
    );
    
    window.addEventListener("load", () => {
      this.selectNavItem(this.navItems[this.selectedNavIndex]);
    });

    this.IntersectionObserver();

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        this.selectedNavIndex = 0;
      } else if (window.scrollY + window.innerHeight === document.body.scrollHeight) {
        this.selectedNavIndex = this.navItems.length - 1;
      }
      this.selectNavItem(this.navItems[this.selectedNavIndex]);
    });

    // Show "arrow up" button when scrolling down
    const arrowTop = document.querySelector(".arrow-up");   
    const home = document.querySelector(".home__container");
    const homeHeight = home.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      if (window.scrollY > homeHeight / 2) {
        arrowTop.classList.add("visible");
      } else {
        arrowTop.classList.remove("visible");
      }
    });

    window.addEventListener('resize', function() {
      let w = window.outerWidth;
      if(w <= 768) {
        this.handleScroll();
      }
    }.bind(this));
  },
  methods: {
    smoothScrollToTop() {
      const scrollTo = document.querySelector("#home")
      scrollTo.scrollIntoView({ behavior: "smooth" })
    },
    handleScroll() {
      const sections = document.querySelectorAll(".section");
      for (const section of sections) {
        this.updateOpacity(section);
      }
    },
    updateOpacity(section) {
      const sectionHeight = section.getBoundingClientRect().height;
      const scrollPosition = window.scrollY + (window.innerHeight * 0.8); // 80% 지점      
      let opacity = Math.max(0, 2 - (scrollPosition - section.offsetTop) / sectionHeight);

      section.style.opacity = (0 < opacity && opacity <=2) ? opacity : 1;
    },
    IntersectionObserver() {        
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = this.sectionIds.indexOf(`#${entry.target.id}`); //'indexOf' API

            // 스크롤링이 아래로 되어서 페이지가 올라옴
            if (entry.boundingClientRect.y < 0) {
              this.selectedNavIndex = index + 1;
            } else {
              this.selectedNavIndex = index - 1;
            }
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      this.sections.forEach((section) => observer.observe(section));
    },
    scrollToId(event) {
      const target = event.target;
      const link = target.dataset.link;
      if (link == null) {
        return;
      }

      // Javascript scroll to id
      this.smoothScrollTo(link);
    },
    smoothScrollTo(selector) {
      const scrollTo = document.querySelector(selector);
      scrollTo.scrollIntoView({ behavior: "smooth" });
      this.selectNavItem(this.navItems[this.sectionIds.indexOf(selector)]);
    },
    selectNavItem(selected) {
      this.navItems.forEach(item => {
        this.selectedNavItem = item; 
        if(this.selectedNavItem.classList.contains("select")) {
          this.selectedNavItem.classList.remove("select");
        }
      });

      this.selectedNavItem = selected; //navItems[this.selectedNavIndex];
      this.selectedNavItem.classList.add("select");
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

.arrow-up {
  position: fixed;
  bottom: 32px;
  right: 32px;
  color: color(red);
  @include font(large);
  opacity: 0;
  transition: all $animation-duration ease-in;
  pointer-events: none;
  @include mobile768 {
    right: 16px;
  }
}

.arrow-up.visible {
  opacity: 1;
  pointer-events: auto;
}

</style>

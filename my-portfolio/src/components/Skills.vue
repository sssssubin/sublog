<template>
  <section id="skills">
    <div class="section section__container">
      <h1>Skills</h1>
      <h2>Skills & Attributes</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem iure
        quidem error hic, cupiditate accusamus possimus quia alias tempora et?
        Unde alias et consequatur debitis rem culpa saepe quas cumque.
      </p>
      <div class="skillset">
        <div class="skillset__left">
          <div class="card">
            <div class="card__top"></div>
            <div class="card__profile">
              <img
                :src="profileImg"
                alt="subin's profile photo"
                class="profile__img"
              />
              <span class="profile__name">{{ profileName }}</span>
            </div>
            <div class="card__list">
              <div class="card__list__item level">
                <h3 class="item__title">LEVEL</h3>
                <span>{{ level }}</span>
              </div>
              <div class="card__list__item projects">
                <h3 class="item__title">PROJECTS</h3>
                <span>{{ projects }}</span>
              </div>
              <div class="card__list__item age">
                <h3 class="item__title">AGE</h3>
                <span>{{ age }}</span>
              </div>
            </div>
            <div class="skills">
              <h3 class="skillset__title">Skills</h3>
              <div
                v-for="(skill, index) in skills"
                :key="index"
                class="skill"
                :class="skill.class"
              >
                <div class="skill__description">
                  <span>{{ skill.name }}</span>
                  <span>{{ skill.percent }}</span>
                </div>
                <div class="skill__bar">
                  <div class="skill__value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skillset__right">
          <div class="licenses">
            <h3 class="licenses__title">licenses</h3>
            <div
              v-for="(license, index) in licenses"
              :key="index"
              class="license"
            >
              <figure class="front">
                <img
                  :src="license.frontImg"
                  :alt="license.altText"
                  class="license__img"
                />
                <figcaption>
                  <i class="far fa-hand-point-up"></i>
                </figcaption>
              </figure>
              <figure class="back">
                <img
                  :src="license.backImg"
                  :alt="license.altText"
                  class="license__img"
                />
              </figure>
            </div>
          </div>
          <div class="tools">
            <h3 class="tools__title">Tools</h3>
            <ul class="tools__list">
              <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
            </ul>
          </div>
          <div class="etc">
            <h3 class="etc__title">Etc</h3>
            <ul class="etc__list">
              <li v-for="(etcItem, index) in etc" :key="index">
                {{ etcItem }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profileImg: require("@/assets/imgs/aboutme1.jpg"),
      profileName: "kim su bin",
      level: 1,
      projects: 5,
      age: 26,
      skills: [
        { name: "HTML", percent: "90%", class: "skill html" },
        { name: "CSS", percent: "90%", class: "skill css" },
        { name: "JavaScript", percent: "50%", class: "skill javascript" },
        { name: "PhotoShop", percent: "80%", class: "skill photoshop" },
      ],
      licenses: [
        {
          frontImg: require("@/assets/imgs/license_img1.png"),
          backImg: require("@/assets/imgs/license_img2.png"),
          altText: "정보처리기사 자격증",
        },
        {
          frontImg: require("@/assets/imgs/license_img3.png"),
          backImg: require("@/assets/imgs/license_img4.png"),
          altText: "정보처리기사 자격증",
        },
      ],
      tools: ["Visual studio Code", "Bracket", "Photoshop", "illustrator"],
      etc: ["Git", "Sourcetree", "Velog"],
    }
  },
}
</script>

<style lang="scss">
#skills {
  background-color: color(beige);
}

.skillset {
  display: flex;
  justify-content: space-between;
  color: color(white);
  margin-top: 34px;

  @include mobile768 {
    flex-direction: column;
  }

  &__left {
    flex-basis: fit-content;
    margin-right: 20px;
  
    @include mobile768 {
      margin-right: 0;
      margin-bottom: 38px;
    }
  }

  &__title {
    flex-basis: 100%;
    @include font(medium);
    margin-bottom: 5px;
    text-transform: uppercase;
    text-align: left;
  }

  &__right {
    flex-basis: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: color(dark-black);
    border-radius: 10px;
  }
}

.card {
  position: relative;
  width: 450px;
  height: 640px;
  border-radius: 10px;
  box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
  background: #151515;
  overflow: hidden;
  
  @include mobile768 {
    width: 100%;
  }
  &__top {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: crimson;
    animation: cardTop 1.5s;
  }

  .profile {
    &__img {
      position: absolute;
      margin: auto;
      top: 40px;
      right: 0;
      left: 0;
      width: 120px;
      height: initial;
      border-radius: 50%;
      box-shadow: 0 0 0 5px #151515, inset 0 0 0 5px #000000,
        inset 0 0 0 5px #000000, inset 0 0 0 5px #000000,
        inset 0 0 0 5px #000000;
      background: white;
      animation: mvTop 1.5s;
    }
    &__name {
      position: absolute;
      margin: auto;
      top: -220px;
      right: 0;
      bottom: 0;
      left: 0;
      width: inherit;
      height: 40px;
      text-align: center;
      animation: fadeIn 2s ease-in;
      color: white;
      text-decoration: none;
      font-weight: 700;
      font-size: 26px;
      &:hover {
        text-decoration: underline;
        color: crimson;
      }
    }
  }

  &__list {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: inherit;
    height: fit-content;
    display: flex;

    &__item {
      &.level,
      &.projects,
      &.age {
        position: relative;
        left: -300px;
        width: calc(100% / 3);
        text-align: center;
        color: white;
        animation: fadeInMove 2s;
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: column;
        .item__title {
          text-transform: uppercase;
          color: crimson;
          font-weight: var(--weight-bold);
          @include font(regular);
        }
      }

      &:nth-of-type(2) {
        animation-delay: 0.5s;
      }

      &:nth-of-type(1) {
        animation-delay: 1s;
      }
    }
  }

  .skills {
    position: absolute;
    margin: auto;
    bottom: 70px;
    right: 0;
    left: 0;
    width: 80%;
    height: initial;
    animation: mvBottom 1.5s;
    .skill {
      span {
        font-weight: 400;
        font-size: 16px;
        letter-spacing: 0.05em;
        margin: 4px 0;
        color: white;
      }

      &__description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      &__bar {
        height: 5px;
        background: crimson;
        text-align: right;

        .skill__value {
          color: white;
          font-size: 16px;
          padding-top: 5px;
          animation: fadeIn 5s;
        }

        &:hover {
          background: white;
        }
      }

      &.html {
        .skill__description {
          width: 90%;
        }
        .skill__bar {
          width: 90%;
          animation: htmlSkill 1s;
          animation-delay: 0.4s;
        }
      }

      &.css {
        .skill__bar {
          width: 90%;
          animation: htmlSkill 1s;
          animation-delay: 0.4s;
        }
        .skill__bar {
          width: 90%;
          animation: cssSkill 2s;
          animation-delay: 0.4s;
        }
      }

      &.javascript {
        .skill__description {
          width: 50%;
        }
        .skill__bar {
          width: 50%;
          animation: jsSkill 3s;
          animation-delay: 0.4s;
        }
      }

      &.photoshop {
        .skill__description {
          width: 80%;
        }
        .skill__bar {
          width: 80%;
          animation: photoSkill 4s;
          animation-delay: 0.4s;
        }
      }
    }
  }
}

.licenses {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  flex-basis: 100%;
  flex-wrap: wrap;
  align-items: center;
  &__title {
    flex-basis: 100%;
    color: color(red);
    @include font(medium);
  }

  .license {
    position: relative;
    perspective: 600px;
    .front {
      transform-style: preserve-3d;
      transform: rotateY(0deg);
      transition: all $animation-duration ease-in-out;
      backface-visibility: hidden;
      position: relative;
      @include mobile768 {
        margin: 16px;
      }
      figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        text-align: center;
      }
    }

    .back {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform-style: preserve-3d;
      transform: rotateY(-180deg);
      transition: all $animation-duration ease-in-out;
      backface-visibility: hidden;
      @include mobile768 {
        margin: 16px;
      }
      figcaption {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) translateZ(100px);
        display: block;
        text-align: center;
      }
    }
    &:hover {
      .front {
        transform: rotateY(180deg);
      }
      .back {
        transform: rotateY(0deg);
        z-index: 1;
      }
    }

    &__img {
      width: 200px;
      display: block;
      @include mobile768 {
        width: 100%;
      }
    }

    figcaption {
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      padding: 5px;
      width: 100px;
      height: 100px;

      i {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        color: color(white);
        opacity: 0.6;
        @include font(large);
        border: 4px dashed color(white);
        padding-top: 12.36px;
      }
    }
  }
}

.tools,
.etc {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  &__title {
    @include font(medium);
  }
  &__list {
    margin: 0;
    li {
      margin: 4px 0;
    }
  }
}

.tools {
  background-color: color(red);
  border-bottom-left-radius: 10px;
}

.etc {
  background-color: color(light-grey);
  border-bottom-right-radius: 10px;
}

@keyframes fadeInMove {
  0% {
    opacity: 0;
    left: -300px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes htmlSkill {
  0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
}

@keyframes cssSkill {
  0% {
    width: 0;
  }
  100% {
    width: 90%;
  }
}

@keyframes jsSkill {
  0% {
    width: 0;
  }
  100% {
    width: 50%;
  }
}

@keyframes photoSkill {
  0% {
    width: 0;
  }
  100% {
    width: 80%;
  }
}

@keyframes mvBottom {
  0% {
    bottom: -150px;
  }
  100% {
    bottom: 10px;
  }
}

@keyframes mvTop {
  0% {
    top: -150px;
  }
  100% {
    top: 40px;
  }
}

@keyframes cardTop {
  0% {
    top: -150px;
  }
  100% {
    top: 0;
  }
}
</style>

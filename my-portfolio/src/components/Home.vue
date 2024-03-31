<template>
  <section id="home" data-link="home">
    <div class="home__container">
      <div class="home__avatar">
        <div class="avatar__img"></div>
        <span class="avatar__text">SUBIN</span>
      </div>
      <h1 class="home__title">Hello:)<br />I'm Dream Coder</h1>
      <h2 class="home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Tempora consectetur eum harum illum placeat,<br />
        corporis veniam assumenda totam,<br />
        nulla vero ab laboriosam a quod consequatur illo,<br />
        distinctio odio eveniet fugit.
      </h2>
      <button class="home__contact" data-link="#contact">Contact Me</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#home {
  background: url(../assets/imgs/home-background.png) center/cover no-repeat;
  height: 100vh;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.home__container {
 padding-right: 38px;
}

.home__avatar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 369px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translate(-50%, -50%) perspective(600px) rotateY(20deg)
    rotateX(10deg);
  transform: translate(-50%, -50%) perspective(600px) rotateY(20deg)
    rotateX(10deg);
}

.avatar__img {
  position: relative;
  width: 369px;
  height: 447px;
  -webkit-transform: translateZ(80px) scale(0.8);
  transform: translateZ(80px) scale(0.8);
}

.avatar__img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/imgs/aboutme1.jpg) no-repeat;
  background-size: cover;
  border-radius: 100%;
  display: block;
}

.avatar__img::after {
  content: "";
  position: absolute;
  top: auto;
  bottom: -30px;
  z-index: -1;
  width: 80%;
  height: 30px;
  -webkit-filter: blur(13px);
  filter: blur(13px);
  background: var(--color-brown);
  display: block;
  border-radius: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.avatar__text {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 390px;
  height: 495px;
  // -webkit-transform: translateZ(150px) translateX(-11px) translateY(-13px) scale(0.55);
  // transform: translateZ(150px) translateX(-11px) translateY(-13px) scale(0.55));
  font-size: var(--font-large);
  line-height: 800px;
  text-align: center;
  color: white;
  background: linear-gradient(
    135deg,
    white 0%,
    rgba(255, 255, 255, 0.36) 39%,
    rgba(255, 255, 255, 0.07) 41%,
    rgba(255, 255, 255, 0) 51%,
    black 100%
  );
  border: 3px solid white;
  border-radius: 100%;
  opacity: 0.42;
}

.avatar__text::after {
  content: "publisher";
  position: absolute;
  bottom: 36px;
  left: 0;
  z-index: 1;
  width: 100%;
  font-size: var(--font-micro);
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 10px;
  text-indent: 20px;
}

.home__title,
.home__description {
  color: var(--color-white);
  width: 100%;
}

.home__contact {
  color: var(--color-white);
  font-size: var(--font-regular);
  font-weight: var(--weight-bold);
  margin: 24px 0 24px 24px;
  padding: 8px 12px;
  border: 2px solid var(--color-white);
  border-radius: var(--size-border-radius);
}

.home__contact:hover {
  background-color: var(--color-red);
}
</style>
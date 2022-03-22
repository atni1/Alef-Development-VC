<template>
  <header>
    <div class="header__wrapp">
      <div class="logo">
        <img src="~@/assets/logo.svg" alt="">
      </div>
      <div class="position__wrapper">
        <div class="link__wrapper">
        <router-link class="link" to="/">Форма</router-link>
          <router-link class="link" to="/preview">Превью</router-link>
        </div>
      </div>
    </div>
    <!-- <hr> -->
  </header>
  
</template>

<script>
export default {

}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
details, summary {
  list-style: none;
}
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
}


header {
  display: flex;
  flex-direction: column;
}
header::after {
  content: '';
  width: 100%;
  height: 2px;
  border-bottom: 1px solid #F1F1F1;
}
.header__wrapp {
  margin: 24px 92px;
  display: flex;
}
.position__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.link__wrapper {
  display: flex;
}
.link {
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: flex-end;
  color: rgba(17, 17, 17, 0.48);
}
.link:first-child {
  margin: 0 24px 0 0;
}
.link:hover {
  text-decoration: underline rgba(17, 17, 17, 0.48);
}
.link:active {
  transform: scale(1.08);
  text-decoration: underline rgba(17, 17, 17, 0.48);
}

@media (max-width: 375px) {
  .header__wrapp {
    margin: 24px 24px;
    display: flex;
    align-items: center;
  }
  .position__wrapper {
    justify-content: flex-end;
  }
  .link:hover {
    text-decoration: none;
  }
  .link:active {
    text-decoration: underline rgba(17, 17, 17, 0.48);
  }
}
@media (min-width: 376px) and (max-width: 768px) { 
  .header__wrapp {
    margin: 24px 80px;
    display: flex;
    align-items: center;
  }
  .position__wrapper {
    justify-content: flex-end;
  }
  .link:hover {
    text-decoration: none;
  }
  .link:active {
    text-decoration: underline rgba(17, 17, 17, 0.48);
  }
}
</style>
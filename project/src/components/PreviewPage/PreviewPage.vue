<template>
  <section class="container">
    <div class="personal__data">
      <h3 class="title">Персональные данные</h3>
      <div class="personal__data__wrapper">
        <span class="personal__data__text">
          <b>{{ firsName }}, {{ personAge }}</b>
        </span>
      </div>
     
    </div>
    <div class="children__info">
      <h3 class="title">Дети</h3>
      <div class="children__info__wrapper">
        <span 
          v-for="child in childs"
          :key="child"
          class="child__data__text">
          <b>{{ child.childName }}, {{ declOfNum(child.childAge, ['год', 'года', 'лет']) }}</b>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  created() {
    this.showStore();
  },
  computed: {
    ...mapGetters([
            'firsName',
            'age',
            'childs',]),
    personAge() {
      return this.declOfNum(this.age, ['год', 'года', 'лет'])
    },
  },
  methods: {
    ...mapActions(['showStore']),

    declOfNum(number, titles) {
      const cases = [2, 0, 1, 1, 1, 2];  
      return number+" "+titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    },
  }
}
</script>

<style>
.container {
  width: 616px;
  margin: 30px auto 136px;
}
.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.children__info {
  margin: 60px 0 0 0;
}
.personal__data__text,
.child__data__text {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.child__data__text {
  margin: 0 0 20px 0 ;
  background: #F1F1F1;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  display: flex;
}
.personal__data__wrapper,
.children__info__wrapper {
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  align-items: flex-start;
}
</style>
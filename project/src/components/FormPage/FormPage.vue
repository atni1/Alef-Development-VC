<template>
  <section class="container">
    <form @submit.prevent="handlerSubmit">
      <h3 class="title">Персональные данные</h3>
      <div @change="personalData" class="personal__data">
        <div class="personal__data__name">
          <label for="name">Имя</label>
          <input 
            id="name" 
            autocomplete="off" 
            required 
            maxlength="15"
            v-model.trim="firsName"
            type="text">
        </div>
        <div class="personal__data__age">
          <label for="age">Возраст</label>
          <input 
            id="age" 
            autocomplete="off" 
            required 
            max="99"
            v-model.number="age"
            type="number">
        </div>
      </div>

      <div class="children__data">
        <div class="tilte__btn__wrapper">
          <h3 class="title">Дети (макс. 5)</h3>
          <button 
            @click.prevent="addNewChild"
            class="add__children__data"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
            fill="#01A7FD"/>/>
            </svg>
            Добавить ребенка
          </button>
        </div>
        <div
          class="child__data__wrapper"
          @change="childsData" 
          v-for="(child, key) in childs" 
          :key="'child-' + key"
          v-show="showAddChild">
          <div class="child__data__name">
            <label for="child-name">Имя</label>
            <input 
              id="child-name" 
              autocomplete="off" 
              required 
              maxlength="15"
              v-model.trim="child.childName"
              type="text">
          </div>
          <div class="child__data__age">
            <label for="child-age">Возраст</label>
            <input 
              id="child-age" 
              autocomplete="off" 
              required 
              max="99"
              v-model.number="child.childAge"
              type="number">
          </div>
          <button
            class="delete__btn"
            @click.prevent="deleteChild( key )">Удалить</button>
        </div>
      </div>

      <div class="btn__submit__wrapper">
        <button class="btn__submit" type="submit">Сохранить</button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data: () => ({
    firsName: '',
    age: '',
    childs:[],
    child: {},
    showAddChild: true,
  }),
  computed: {
  },
  methods: {
    ...mapActions(['showStore']),
    ...mapMutations([
            'SET_FIRSTNAME',
            'SET_AGE',
            'SET_CHILDS']),

    handlerSubmit() {
      this.personalData();
      this.childsData();

      this.showStore();
      setTimeout(() => {
        this.$router.push('/preview')
      }, 2000)
      
    },
    addNewChild() {
      if (this.childs.length < 5 && this.childs.length >= 0) {
        this.childs.push(this.child)
        this.child = {};
      } 
    },
    deleteChild( key ) {
      this.childs.splice( key, 1)
    },
    personalData() {
      this.SET_FIRSTNAME(this.firsName);
      this.SET_AGE(this.age)
    },
    childsData() {
      this.SET_CHILDS(this.childs)
    },
  },
}
</script>

<style scoped>
.container {
  width: 616px;
  margin: 30px auto 136px;
}

.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.personal__data {
  display: flex;
  flex-direction: column;
  margin: 20px 0 33px 0
}
.personal__data__name,
.personal__data__age {
  width: 100%;
  position: relative;
  margin: 0 0 10px 0;
}
.personal__data__name input,
.personal__data__age input{
  background: #FFFFFF;
  width: 100%;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 26px 16px 6px 16px;
  cursor: pointer;
}
.personal__data__name label,
.personal__data__age label {
  position: absolute;
  left: 16px;
  top: 8px;
  color: rgba(17, 17, 17, 0.48);
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

.tilte__btn__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.add__children__data {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #01A7FD;
  background:#FFFFFF;
  padding: 10px;
  border: 2px solid #01A7FD;
  box-sizing: border-box;
  border-radius: 100px;
}
.add__children__data svg {
  margin: 0 8px 0 0;
}

.child__data__wrapper {
  display: grid;
  grid-template-columns: 260px 296px 60px;
  margin: 11px 0 0 0;
}
.child__data__name,
.child__data__age {
  position: relative;
}
.child__data__age {
  margin: 0 18px;
}
.child__data__name input,
.child__data__age input{
  background: #FFFFFF;
  width: 100%;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 26px 16px 6px 16px;
  cursor: pointer;
}
.child__data__name label,
.child__data__age label {
  position: absolute;
  left: 16px;
  top: 8px;
  color: rgba(17, 17, 17, 0.48);
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}
.delete__btn {
  background: transparent;
  border: none;
  font-weight: 400;
  padding: 0;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #01A7FD;
}

.btn__submit__wrapper {
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 0 0;
}
.btn__submit {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  padding: 10px 20px;
  background: #01A7FD;
  border-radius: 100px;
  border: none;
}
</style>
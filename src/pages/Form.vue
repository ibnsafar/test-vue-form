<template>
  <div class="container">
    <Header/>
    <div class="content-form">
      <form>
        <div class="form-personal-info">
          <p class="vue-form-p">Персональные данные</p>
          <!--inputs-->
          <input required class="form-vue form-vue1"
                 id="name"
                 name="name"
                 placeholder="Имя"
                 v-model="name"
                 type="text">
          <input required class="form-vue form-vue2"
                 id="age"
                 name="age"
                 placeholder="Возраст"
                 min="0"
                 v-model="age"
                 type="number">
        </div>
        <div class="head-wrapper">
          <p class="vue-form-p">Дети (макс. 5)</p>
          <button type="submit"
                  class="form-button"
                  @click="addBaby"
          >+ Добавить ребенка
          </button>
        </div>
        <div v-for="baby in babies" :key="baby.age" class="form-content">
          <input class="form-vue form-vue2 form-content-input "
                 required
                 placeholder="Имя"
                 v-model="baby.name"
                 type="text">
          <input class="form-vue form-vue2 form-content-input
                        form-content-input2"
                 required
                 placeholder="Возраст"
                 v-model="baby.age"
                 min="0"
                 type="number">
          <button type="submit"
                  class="form-button-delete"
                  @click="removeBaby(baby.id)"
          >Удалить
          </button>
        </div>
      </form>
      <button type="submit"
              class="form-save-info"
              @click="saveData"
      >Сохранить
      </button>
    </div>
    <Footer/>
    <Preview
             class="form-displaying"/>
<!--    can't resolve this :names="this.name" :msg="this.babies"-->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./css/form.css";
import Preview from "@/pages/Preview";

export default {
  name: 'Form',
  data() {
    return {
      name: '',
      age: '',
      babies: [{id: 1, name: "", age: ''}],
      information: {
        name: this.name,
        age: this.age,
        babies: this.babies
      },
      res: []
    }
  },
  components: {
    Preview,
    Header,
    Footer
  },
  methods: {
    addBaby: function () {
      if (this.babies.length === 5) {
        return 0;
      } else {
        this.babies.push({
          //adding auto increment manually. my own solution:)
          id: this.babies[this.babies.length - 1].id + 1,
          name: "", age: ''
        })
        console.log(this.babies)
      }
    },
    removeBaby: function (id) {
      if (this.babies.length === 1) {
        return 0;
      }
      for (let i = 0; i < this.babies.length; i++) {
        if (this.babies[i].id === id) {
          //getting index of object there and splicing
          this.babies.splice(this.babies.indexOf(this.babies[i])
              , 1);
        }
      }
    },
    saveData: function () {
      for (let i = 0; i < this.babies.length; i++) {
        if (this.babies[i].name === '' || this.babies[i].age === '') {
          this.res.push(false)
        }
      }
      if (this.name !== '' && this.age !== ''
          && this.res.length === 0) {
        console.log(this.information)
        this.$router.push({path: '/preview'});
      }
    }
  }
}
</script>
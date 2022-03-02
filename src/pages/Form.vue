<template>
  <div class="container">
    <Header/>
    <div class="content-form">
      <form
      >
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
                 type="text">
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
                 type="text">
          <input class="form-vue form-vue2 form-content-input  form-content-input2"
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
      >Сохранить
      </button>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./css/form.css";

export default {
  name: 'Form',
  data() {
    return {
      name: "",
      age: '',
      babies: [{id: 1, name: "", age: ''}],
      information: {
        name: this.name,
        age: this.age,
        babies: this.babies
      }
    }
  },
  components: {
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
  }
}
</script>
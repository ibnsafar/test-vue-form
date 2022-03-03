<template>
  <div>
    <Header/>
    <div class="pre-container">
      <p class="pre-person">Персональные данные</p>
      <p class="pre-info">Василий, 30 лет</p>
      <p class="pre-baby">Дети</p>
      <div class="pre-babies">
        <p>Петр, 10 лет</p>
<!--        <h1>{{names}}</h1>-->
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./css/preview.css";

export default {
  name: "Preview",
  components: {Footer, Header},
  // props: {
  //   names: String
  // }
}
console.log()
</script>

<style>

</style>
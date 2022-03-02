<template>
  <div>
    <div class="container-head">
      <div>
        <img class="img-head" src="./../assets/img/logo.png" alt="logo">
      </div>
      <div class="wrapper-head">
        <router-link class="p-head" to="/">Форма</router-link>
        <router-link class="p-head p-head2" to="/preview">Превью</router-link>
      </div>
      <div></div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.p-head {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
  font-family: Montserrat, serif;
  text-decoration: none;
}

.p-head2 {
  margin-left: 24px;
}

hr {
  color: rgba(17, 17, 17, 0.48);
}

.container-head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px 0;
}

.wrapper-head {
  display: flex;
}

.img-head {
  width: 93px;
  height: 29px;
}
</style>
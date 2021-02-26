<template>
  <div id="app">
  <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <p class="h1 my-0 me-md-auto fw-normal">Aodzi Shop</p>
  </header>
  <main class="container">
    <div class="p-3 mb-2 bg-dark text-white">
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch1.name}}</h4>
      </div>
      <div class="card-body">
        <img src="http://casio-cmg.com/wp-content/uploads/2017/06/GA-400HR-1A_l.png" width=100% height= 100%>
        <ul class="list-unstyled text-small">590 บาท</ul>
        <div id="example-1">
          <button type="button" class="btn btn-warning" @click= "increment1()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de1()" >ลบ</button>
          <p>จำนวน {{ countclock1 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch2.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://www.casio-intl.com/product/image/1425515936765/" width=100% height= 100%>
        <ul class="list-unstyled text-small">400 บาท</ul>
        <div id="example-2">
          <button type="button" class="btn btn-warning" @click= "increment2()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de2()" >ลบ</button>
          <p>จำนวน {{ countclock2 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch3.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://casio-cmg.com/wp-content/uploads/2017/12/GA-100VLA-4A.png" width=100% height= 100%>
        <ul class="list-unstyled text-small">390 บาท</ul>
        <div id="example-3">
          <button type="button" class="btn btn-warning" @click= "increment3()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de3()" >ลบ</button>
          <p>จำนวน {{ countclock3 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
  </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch4.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://www.casio-intl.com/product/image/1425303492240/" width=100% height= 100%>
        <ul class="list-unstyled text-small">259 บาท</ul>
        <div id="example-4">
          <button type="button" class="btn btn-warning" @click= "increment4()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de4()" >ลบ</button>
          <p>จำนวน {{ countclock4 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch5.name}}</h4>
      </div>
      <div class="card-body">
        <img src="http://casio-cmg.com/wp-content/uploads/2015/12/GA-100BW-1A_l.png" width=100% height= 100%>
        <ul class="list-unstyled text-small">450 บาท</ul>
        <div id="example-5">
          <button type="button" class="btn btn-warning" @click= "increment5()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de5()" >ลบ</button>
          <p>จำนวน {{ countclock5 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div span class="border border-warning">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{watch6.name}}</h4>
      </div>
      <div class="card-body">
        <img src="https://www.casio-intl.com/product/image/1425303491796/" width=100% height= 100%>
        <ul class="list-unstyled text-small">599 บาท</ul>
        <div id="example-6">
          <button type="button" class="btn btn-warning" @click= "increment6()" >ซื้อ</button>
          <button type="button" class="btn btn-warning" @click= "de6()" >ลบ</button>
          <p>จำนวน {{ countclock6 }} เรือน </p>
        </div>
      </div>
    </div>
    </div>
  </div>
  <h4>ราคารวม {{ summoney }} บาท</h4>
  <button type="button" class="btn btn-warning" v-on:click="say('สั่งซื้อเสร็จสิ้น')" >สั่งซื้อ</button>
  <input type="button" value=" ยกเลิก " onClick="javascript:location.reload();">
  </div>
  </main>
  </div>
</template> 

<script>
export default {
  name: 'App',
  computed: {
    countclock1 () {
    return this.$store.getters.countclock1
  },
    countclock2 () {
    return this.$store.getters.countclock2
  },
    countclock3 () {
    return this.$store.getters.countclock3
  },
    countclock4 () {
    return this.$store.getters.countclock4
  },
    countclock5 () {
    return this.$store.getters.countclock5
  },
    countclock6 () {
    return this.$store.getters.countclock6
  },
    summoney() {
    return this.$store.getters.summoney
  },
},
 methods: {
    increment1() {
      this.$store.commit('increment1')
    },
    increment2() {
      this.$store.commit('increment2')
    },
    increment3() {
      this.$store.commit('increment3')
    },
    increment4() {
      this.$store.commit('increment4')
    },
    increment5() {
      this.$store.commit('increment5')
    },
    increment6() {
      this.$store.commit('increment6')
    },
    de1() {
      this.$store.commit('de1')
    },
    de2() {
      this.$store.commit('de2')
    },
    de3() {
      this.$store.commit('de3')
    },
    de4() {
      this.$store.commit('de4')
    },
    de5() {
      this.$store.commit('de5')
    },
    de6() {
      this.$store.commit('de6')
    },
  },
  data(){
    return{
      watch1:{
        name:"G-SHOCK รุ่น GA-400HR 1ADR-BK ",
      },
      watch2:{
        name:"G-SHOCK รุ่น GA-700SE-1A2DR ",
      },
      watch3:{
        name:"G-SHOCK รุ่น GA-100-1A4DR",
      },
      watch4:{
        name:"G-SHOCK รุ่น GA-100-1A1DR ",
      },
      watch5:{
        name:"G-SHOCK CASIO รุ่น GA-100BW-1A ",
      },
      watch6:{
        name:"G-SHOCK CASIO รุ่น GA-100-1A4",
      },
      say: function (message) {
      alert(message)
    }
    }
  }
}
</script>


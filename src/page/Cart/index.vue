<template>
  <div>
    <h1>先行后列</h1>
    <div class="wrapper">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="seven item">Seven</div>
      <div class="eight item">eight</div>
      <div class="nine item">Nine</div>
    </div>

    <h1>先列后行</h1>
    <div class="wrapper-1">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="seven item">Seven</div>
      <div class="eight item">eight</div>
      <div class="nine item">Nine</div>
    </div>

    <h1>先行后列：dense</h1>
    <div class="wrapper-2">
      <div class="one item">One</div>
      <div class="two item">Two</div>
      <div class="three item">Three</div>
      <div class="four item">Four</div>
      <div class="five item">Five</div>
      <div class="six item">Six</div>
      <div class="seven item">Seven</div>
      <div class="eight item">eight</div>
      <div class="nine item">Nine</div>
    </div>
  </div>

</template>
<style>
  .wrapper,
  .wrapper-1,
  .wrapper-2 {
    margin: 50px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-flow: row;
    grid-gap: 5px;
    grid-auto-rows: 50px;
  }

  .wrapper-1 {
    display: grid;
    grid-auto-columns: 100px;
    grid-auto-flow: column;
    grid-gap: 5px;
    grid-template-rows: 50px 50px;
  }

  .wrapper-2 {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-flow: row dense;
    grid-gap: 5px;
    grid-auto-rows: 50px;
  }

  .one {
    background: #19CAAD;
  }

  .two {
    background: #8CC7B5;
  }

  .three {
    background: #D1BA74;
  }

  .four {
    background: #BEE7E9;
  }

  .five {
    background: #E6CEAC;
  }

  .six {
    grid-column-start: span 2;
    background: #ECAD9E;
  }

  .seven {
    background: #BEEDC7;
  }

  .eight {
    background: #F4606C;
  }

  .nine {
    background: #A0EEE1;
  }

  .item {
    text-align: center;
    font-size: 200%;
    color: #fff;
  }

</style>
<script>
  export default {
    mounted() {
      this.say();
    },
    methods: {
      say() {
        // alert('123123');
      }
    }
  }

</script>

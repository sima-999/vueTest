<template>
  <div>
    <child>
      <template v-slot:todo1="nice">
        <div>
        {{nice.test+'232323'}}
        </div>
        <h4>{{nice.user1.lastName}}</h4>
      </template>
      <template v-slot:mymy></template> 
    </child>
  </div>
</template>

<script>
  import child from './child'
  export default {
    components: {
      child
    }

  }

</script>

<style>

</style>

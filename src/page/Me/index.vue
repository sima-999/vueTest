<template>
  <div>
    <child>
      <template v-slot:todo1="slotProps22">
        <div>
        {{slotProps22.test+'232323'}}
        </div>
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

<template>
  <div>
    <!-- <slot name="todo" :user="user" :test="test">
      {{ user.lastName }}
    </slot>-->
    <slot name="todo1" :user1="user" :test="test">
      henhao
    </slot> 
    <!-- <slot name="mymy">KGB</slot> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          lastName: "Zhang",
          firstName: "yue"
        },
        test: [1, 2, 3, 4]
      }
    }
  }

</script>

<style>

</style>

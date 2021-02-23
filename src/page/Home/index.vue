<!--<template>
  <div>
    <div>首页</div>
    <test>
      <template slot="header" slot-scope="{text}">
        <p style="color: red">{{ text }}</p>
      </template>
    </test>
  </div>
</template>-->
<style></style>
<script>
  import test from './test'
  export default {
    components: {
      test
    },
      render(h) {
    return h("div", [
    //   this.$slots.default,
      h("test", {
        scopedSlots: {
          header: props => {
              console.log(props);
            return h("p", { style: { color: "red" } }, [props.text]);
          },
        }
      })
    ]);
  }
  }

</script>

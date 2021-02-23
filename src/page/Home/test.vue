<!--<template>
<div class="child-node">
  <slot name="header" :text="headerText"></slot>
  <slot :text="defaultText"></slot>
  <slot name="footer" :text="footerText"></slot>
</div>
</template>-->
<script>
export default {
  data() {
    return {
      headerText: "child header text",
      defaultText: "child default text",
      footerText: "child footer text"
    };
  },
  render(h) {
    return h("div", { class: "child-node" }, [
      // 相当于 <slot name="header" :text="headerText"></slot>
      this.$scopedSlots.header({ text: this.headerText }),
      // 相当于 <slot :text="defaultText"></slot>
    //   this.$scopedSlots.default(this.defaultText),
    //   this.$scopedSlots.footer({ text: this.footerText })
    ]);
  }
};
</script>
<!-- Copyright (C) 2019 Xvezda <https://xvezda.com/> -->
<template>
  <div v-if="show" v-once>
    <slot></slot>
  </div>
</template>

<script>
import { replacer, pattern } from '../utils';

export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    prehook: {
      type: Function,
      default: context => {
        context;
      },
    },
    posthook: {
      type: Function,
      default: context => {
        context;
      },
    },
  },
  methods: {
    replaceMessage: function(elements) {
      for (let element of elements) {
        if (element.children) this.replaceMessage(element.children);
        if (element.text && element.text.match(pattern)) {
          element.text = element.text.replace(pattern, replacer);
        }
      }
    },
  },
  beforeMount() {
    this.prehook(this);
    if (this.$slots.default) {
      this.replaceMessage(this.$slots.default);
    }
    this.posthook(this);
    this.$emit('replaced', this);
  },
};
</script>

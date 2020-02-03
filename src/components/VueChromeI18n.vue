<!-- Copyright (C) 2019 Xvezda <https://xvezda.com/> -->
<template>
  <div v-if="show" v-once>
    <slot></slot>
  </div>
</template>

<script>
import { replacer, pattern, nl2br } from '../utils';

export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    nl2br: {
      type: Boolean,
      default: false,
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
    if (this.nl2br) {
      this.$nextTick(() => {
        this.$el.innerHTML = nl2br(this.$el.innerHTML);
      });
    }
    this.posthook(this);
    this.$emit('replaced', this);
  },
};
</script>

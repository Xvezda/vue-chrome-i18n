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
          if (this.nl2br) {
            this.$nextTick(() => {
              let parent = element.elm.parentElement;
              parent.innerHTML = nl2br(parent.innerHTML);
            });
          }
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

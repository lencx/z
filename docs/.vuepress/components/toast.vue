<template>
  <span>
    <span
      class="tooltip-label"
      @mouseover="showTooltip"
      @mouseleave="hideTooltip"
      v-html="label"
    />
    <div class="tooltip-text" v-html="text" />
  </span>
</template>

<script>
import { createPopper } from '@popperjs/core'

export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      displayed: '',
    }
  },
  mounted() {
    const labelEl = this.$el.querySelector('.tooltip-label');
    const textEl = this.$el.querySelector('.tooltip-text');
    createPopper(labelEl, textEl, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: { offset: [0, 8] },
        },
      ],
    });
    this.hideTooltip();
  },
  methods: {
    showTooltip() {
      this.$el.querySelector('.tooltip-text').classList.remove('tooltip-hide');
    },
    hideTooltip() {
      this.$el.querySelector('.tooltip-text').classList.add('tooltip-hide');
    },
  },
}
</script>

<style>
.tooltip-hide {
  visibility: hidden;
}
.tooltip-label {
  font-style: italic;
  border-bottom: 1px dotted grey;
  position: relative;
}
.tooltip-text {
  display: inline-block;
  font-family: inherit !important;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  font-size: 0.9rem;
  border-radius: 4px;
  z-index: 100;
  max-width: 500px;
}
.tooltip-text code {
  font-size: 0.9rem;
  color: #7ec699;
  background-color: rgba(18, 0, 0, 0.5);
}
</style>
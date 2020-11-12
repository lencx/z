<template>
    <span
      @mouseover="showTooltip"
      @mouseleave="hideTooltip"
    >
      <span class="tooltip-label" v-html="label"></span>
      <div class="tooltip-text">
        <div data-popper-arrow class="tooltip-arrow" />
        <div v-html="text" />
      </div>
    </span>
</template>

<script>
import { createPopper } from '@popperjs/core';
import debounce from 'lodash/debounce';

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
      placement: 'auto-start',
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: this.$el.querySelector('.tooltip-arrow'),
            padding: 10,
          },
        },
        {
          name: 'offset',
          options: { offset: [0, 8] },
        },
      ],
    });
  },
  methods: {
    showTooltip() {
      this.$el.querySelector('.tooltip-text').classList.add('tooltip-show');
    },
    hideTooltip() {
      this.$el.querySelector('.tooltip-text').classList.remove('tooltip-show');
    },
  },
}
</script>

<style lang="postcss">
.tooltip-show {
  visibility: visible !important;
}

.tooltip-arrow,
.tooltip-arrow::before {
  width: 10px;
  height: 10px;
  position: absolute;
  z-index: -1;
}
.tooltip-arrow::before {
  content: '';
  transform: rotate(45deg);
  background: #2a2a2a;
}
.tooltip-label {
  font-style: italic;
  border-bottom: 1px dotted #666;
  position: relative;
}
.tooltip-text {
  visibility: hidden;
  display: inline-block;
  font-family: inherit !important;
  background: #2a2a2a;
  font-weight: normal;
  color: white;
  padding: 10px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 100;
  max-width: 320px;
  word-break: break-all;
}
.tooltip-text code {
  font-size: 12px;
  color: #7ec699;
  background-color: rgba(18, 0, 0, 0.5);
}
.tooltip-text[data-popper-placement*="right-"] .tooltip-arrow {
  left: -3px;
}
.tooltip-text[data-popper-placement*="left-"] .tooltip-arrow {
  right: -3px;
}
.tooltip-text[data-popper-placement*="top-"] .tooltip-arrow {
  bottom: -3px;
}
.tooltip-text[data-popper-placement*="bottom-"] .tooltip-arrow {
  top: -3px;
}
</style>
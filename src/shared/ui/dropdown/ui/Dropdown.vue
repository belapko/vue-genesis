<script setup lang="ts">
import type { Props } from '../model/types'
import { ref } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  default: 'Не выбрано'
})
defineEmits(['select'])

const opened = ref(false)
const selected = ref(props.default)
</script>

<template>
  <div class="dropdown" @blur="opened = false">
    <div class="selected" :class="{ opened }" @click="opened = !opened">
      {{ selected }}
    </div>
    <Transition name="options">
      <div class="options" :class="{ opened }" v-show="opened">
        <div
          class="option"
          v-for="(option, index) in options"
          :key="index"
          @click="(selected = option), (opened = false), $emit('select', option)"
        >
          {{ option }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.options-enter-active,
.options-leave-active {
  transition: opacity .25s;
}

.options-enter-from,
.options-leave-to {
  opacity: 0;
}

.dropdown {
  position: relative;
  width: 100%;
  color: var(--dark-color);
  cursor: pointer;
}

.selected {
  padding: 0px 0.5rem;
  background-color: var(--main-reverse-color);
  border-radius: 0.25rem;
  &.opened {
    &.selected {
      border-bottom-left-radius: 0%;
      border-bottom-right-radius: 0%;
    }
  }
}

.options {
  z-index: var(--z-dropdown);
  position: absolute;
  width: 100%;
  background-color: var(--main-reverse-color);
  border-radius: 0.25rem;
  &.opened {
    &.options {
      border-top-left-radius: 0%;
      border-top-right-radius: 0%;
    }
  }

  .option {
    padding: 0px 0.5rem;

    &:hover {
      background-color: var(--secondary-color);
    }
  }
}
</style>

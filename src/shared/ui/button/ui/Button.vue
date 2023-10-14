<script setup lang="ts">
import { type Props } from '../model/types'
import Spinner from '../../spinner/ui/Spinner.vue'

withDefaults(defineProps<Props>(), {
  theme: 'primary',
  size: 'medium'
})
</script>

<template>
  <button
    class="button"
    :class="[theme, size, loading && 'loading', disabled && 'disabled']"
    v-bind:disabled="disabled || loading"
    v-bind="$attrs"
  >
    <Spinner v-if="loading" />
    <component :is="leftIcon" class="icon" :class="[loading && 'invisible']" />
    <span :class="loading && 'invisible'"><slot /></span>
    <component :is="rightIcon" class="icon" :class="[loading && 'invisible']" />
  </button>
</template>

<style scoped lang="scss">
.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;

  .icon {
    width: 0.875rem;
    height: 0.875rem;
  }
}

.medium {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;

  .icon {
    width: 1rem;
    height: 1rem;
  }
}

.large {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;

  .icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

.button {
  font-weight: var(--font-semibold);
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.loading,
.disabled {
  cursor: default;
}

.invisible {
  opacity: 0;
}

.primary {
  background-color: var(--accent-color);

  &.disabled {
    background-color: var(--secondary-color);
    color: var(--dark-color);
  }
}
</style>

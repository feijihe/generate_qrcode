<script setup lang="ts">
import VTooltip from 'floating-vue'

defineProps<{
  title: string
  nested?: boolean | number
  div?: boolean
  description?: string
}>()

const emit = defineEmits<{
  (event: 'reset'): void
}>()

function reset() {
  emit('reset')
}
</script>

<template>
  <component :is="div ? 'div' : 'label'" flex="~ row gap-2 items-center" select-none>
    <div w-35 flex="~ gap-1 items-center">
      <div
        v-if="nested" i-ri-corner-down-right-line op40
        :style="typeof nested === 'number' ? { marginLeft: `${nested * 0.5 + 0.5}rem` } : { marginLeft: '0.25rem' }"
      />
      <div v-if="!description" text-sm op75 @dblclick="reset">
        {{ title }}
      </div>
      <VTooltip v-else placement="left" distance="10">
        <div text-sm op75 @dblclick="reset">
          {{ title }}
        </div>
        <template #popper>
          <div text-sm>
            {{ description }}
          </div>
        </template>
      </VTooltip>
    </div>
    <slot />
  </component>
</template>

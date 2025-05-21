<script setup lang="ts">
import { hasParentWindow, storeIndex, toggleDark } from '~/logic/state'
import StateProvider from './components/StateProvider.vue'
import VTooltip from 'floating-vue'

// const config = useRuntimeConfig()
// const buildTime = useTimeAgo(config.public.buildTime as any)
</script>

<template>
  <div flex="~ justify-center" px3 py4 lg:p10 lg:py10>
    <div flex="~ col gap-4" class="max-w-full min-h-[calc(100vh-100px)] w-250">
      <div fixed right-5 top-14 flex="col gap-2" hidden xl:flex>
        <VTooltip v-for="n in 10" :key="n" placement="left" distance="10">
          <button
            :style="{
              opacity: storeIndex === n ? 1 : 1 - (Math.abs(storeIndex - n) + 2) * 0.18,
              transform: storeIndex === n ? 'scale(1.1)' : 'scale(0.95)',
            }"
            class="hover:op100!"
            h-8 w-8 transition-all duration-300 icon-button @click="storeIndex = n"
          >
            {{ n }}
          </button>
          <template #popper>
            <div text-sm>
              Save slot {{ n }}
            </div>
          </template>
        </VTooltip>
      </div>

      <StateProvider :key="storeIndex" :index="storeIndex" />

      <div flex-auto />

      <div mt-15 flex="~ col gap-2">
        <div>
          <span op50>Anthony Fu's </span> <span font-600 op75>QR</span><span font-400 op65> Toolkit</span>
        </div>
        <div flex="~ gap-1 items-center">
          <span i-ri-arrow-right-line ml1 inline-block h-1em op50 /><a op75 hover:op100 href="https://antfu.me/posts/ai-qrcode-101" target="_blank">How to Generate AI QR Code</a><br>
        </div>
        <div v-if="!hasParentWindow" flex="~ gap-1 items-center">
          <span i-ri-arrow-right-line ml1 inline-block h-1em op50 />
          <a
            href="https://github.com/antfu/sd-webui-qrcode-toolkit"
            target="_blank"
            flex="~ inline gap-1 items-center" op75 hover:op100
          >Web UI Extension</a>
        </div>
        <div flex="~ gap-1 items-center">
          <span i-ri-arrow-right-line ml1 inline-block h-1em op50 />
          <a
            href="https://github.com/antfu/qrcode-toolkit/issues"
            target="_blank"
            flex="~ inline gap-1 items-center" op75 hover:op100
          >Bug report / feature request</a>
        </div>
      </div>
      <div>
        <span op50>If you find this app useful, </span>
        <a href="https://github.com/sponsors/antfu" target="_blank" op75 hover:text-rose hover:underline hover:op100>Sponsor to support my work</a>
      </div>

      <div my2 h-1px border="t base" w-10 />

      <div flex="~ gap-2 items-center">
        <!-- <span op65>
          v{{ config.public.version }}
          <a text-xs font-mono op50 :href="`https://github.com/antfu/qrcode-toolkit/commit/${config.public.git.sha}`" target="_blank">({{ config.public.git.sha.slice(0, 5) }})</a>
        </span>
        <span op35>·</span>
        <span text-sm op50 :title="new Date(config.public.buildTime).toString()">Built {{ buildTime }}</span> -->
      </div>

      <div my4 h-1px border="t base" w-10 />

      <div flex="~ gap-3 items-center">
        <button op50 hover:op100 @click="toggleDark()">
          <div i-ri-sun-fill dark:i-ri-moon-fill />
        </button>
        <a href="https://github.com/antfu/qrcode-toolkit" target="_blank" text-lg op50 hover:op100>
          <div i-ri-github-fill />
        </a>
        <a href="https://chat.antfu.me" target="_blank" text-lg op50 hover:op100>
          <div i-ri-discord-fill />
        </a>
        <a href="https://antfu.me" target="_blank" ml--0.5 text-lg op50 hover:op100>
          <img src="https://antfu.me/logo.svg" h-1.2em w-1.2em dark:invert>
        </a>
        <div flex="~ gap-1 items-center" ml-3>
          <span op35>Made with </span> <a mt--2 href="https://nuxt.com" target="_blank" flex="~ inline gap-1 items-center" translate-y-0.9 op75 hover:op100><div i-logos-nuxt-icon /> <span font-bold op65>Nuxt</span></a><br>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html, body , #__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #222;
  accent-color: #888;
  background: white;
  color-scheme: light;
}

html.dark,
.dark body,
.dark #__nuxt {
  background: black !important;
  color: white !important;
  color-scheme: dark;
}

/* Overrides Floating Vue */
.v-popper--theme-dropdown .v-popper__inner,
.v-popper--theme-tooltip .v-popper__inner {
  --at-apply: bg-black text-white rounded border border-base shadow;
  box-shadow: 0 6px 30px #0000001a;
}

.v-popper--theme-tooltip .v-popper__arrow-inner,
.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: visible;
  --at-apply: border-black;
}

.v-popper--theme-tooltip .v-popper__arrow-outer,
.v-popper--theme-dropdown .v-popper__arrow-outer {
  --at-apply: border-base;
}

.v-popper--theme-tooltip.v-popper--shown,
.v-popper--theme-tooltip.v-popper--shown * {
  transition: none !important;
}

html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#app .icon-size {
  width: 1.2em;
  height: 1.2em;
}

#app fieldset {
  padding: 0;
}

*, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-color: var(--un-default-border-color, #e5e7eb);
}

button, input, optgroup, select, textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}
</style>

<script>
import { createApp } from "vue";
import { defineAsyncComponent, defineComponent } from "vue";
const home = defineAsyncComponent(() => import("./views/Home/Home.vue"));
export default defineComponent({ name: "App", components: { home } })
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <section>
          <component :is="Component" />
        </section>
      </transition>
    </router-view>
  </main>
</template>

<style scoped></style>

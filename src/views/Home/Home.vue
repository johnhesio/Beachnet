<script>
import { defineComponent, defineAsyncComponent } from "vue";
const topbar = defineAsyncComponent(() => import("../Home/topbar/Topbar.vue"));
const banner = defineAsyncComponent(() => import("../Home/banner/Banner.vue"));
const planos_fibra = defineAsyncComponent(() => import("../Home/planos_fibra/planos_fibra.vue"));
const atendimento = defineAsyncComponent(() => import("../Home/atendimento/atendimento.vue"));
const nossa_praia = defineAsyncComponent(() => import("../Home/nossa_praia/nossa_praia.vue"));
const sobre_nos = defineAsyncComponent(() => import("../Home/sobre_nos/sobre_nos.vue"));
const onde_estamos = defineAsyncComponent(() => import("../Home/onde_estamos/onde_estamos.vue"));
const rodape = defineAsyncComponent(() => import("../Home/rodape/rodape.vue"));

export default defineComponent({
  name: "home",
  components: {
    topbar,
    banner,
    planos_fibra,
    atendimento,
    nossa_praia,
    sobre_nos,
    onde_estamos,
    rodape,
  },
});
</script>

<template>
  <topbar />
  <banner />
  <planos_fibra />
  <planos_app />
  <atendimento />
  <nossa_praia />
  <sobre_nos />
  <onde_estamos />
  <rodape />
</template>

<style scoped></style>

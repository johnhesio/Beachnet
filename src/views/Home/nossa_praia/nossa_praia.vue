<script>
import Carousel from "primevue/carousel";
import "primeicons/primeicons.css";
import image1 from "../../../assets/Images/Card_Indique_e_Ganhe.png";
import image2 from "../../../assets/Images/Card_instalacao_gratis.webp";
import image3 from "../../../assets/Images/Card_melhor_assistencia.webp";
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
  components: { Carousel },
  setup() {
    let links = [
      {
        image: image1,
        imageAlt: "Indique e ganhe",
      },
      {
        image: image2,
        imageAlt: "Instalação grátis",
      },
      {
        image: image3,
        imageAlt: "A melhor assistência Técnica da região!",
      },
    ];
    return {
      links,
    };
  },
});
</script>
<template>
  <div class="md:h-[550px] bg-white flex flex-col">
    <h1
      class="text-[#0168BC] md:text-4xl text-2xl font-black text-center md:pt-8 pt-10"
    >
      Internet é nossa praia
    </h1>
    <!--web-->
    <div class="hidden md:block">
      <div class="flex flex-row justify-center pt-8">
        <div class="w-[350px] px-10" v-for="link in links">
          <img :src="link.image" :alt="link.imageAlt" />
        </div>
      </div>
    </div>
    <!--mobile-->
    <div class="md:hidden">
      <Carousel
        Carousel
        :value="links"
        :numVisible="1"
        :numScroll="1"
        circular
        :responsiveOptions="responsiveOptions"
        class=""
        :autoplayInterval="4000"
      >
        <template #item="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.imageAlt" />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<style></style>

<script>
import Carousel from "primevue/carousel";
import "primeicons/primeicons.css";
import image1 from "../../../assets/Images/Card_Comercial.webp";
import image2 from "../../../assets/Images/Card_Suporte.webp";
import image3 from "../../../assets/Images/Card_Financeiro.png";
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
  components: { Carousel },
  setup() {
    let links = [
      {
        image: image1,
        imageAlt: "Fale com o comercial",
        cardLink: " http://wa.me/5585981674817",
      },
      {
        image: image2,
        imageAlt: "Fale com o suporte",
        cardLink: " http://wa.me/5585982257397",
      },
      {
        image: image3,
        imageAlt: "Fale com o financeiro",
        cardLink: " http://wa.me/5585991495691",
      },
    ];
    return {
      links,
    };
  },
});
</script>
<template>
  <div id="contatos" class="md:h-[690px] bg-white flex flex-col">
    <h1
      class="text-[#0168BC] md:text-4xl text-2xl font-black text-center md:pt-5 pt-10"
    >
      Fale com a gente
    </h1>
    <div class="flex justify-center text-center">
      <div
        class="bg-gray-300 h-[80px] w-[330px] md:mt-8 mt-4 flex flex-col justify-center rounded-xl px-10 text-xl"
      >
        <div class="flex items-center">
          <i
            class="pi pi-phone px-1"
            style="color: black; font-size: 1.5rem"
          ></i>
          <p class="text-black">Central de Atendimento</p>
        </div>
        <div>
          <p class="text-black">+55 (85) 4042-9293</p>
        </div>
      </div>
    </div>
    <!--web-->
    <div class="hidden md:block">
      <div class="flex flex-col justify-center mt-8">
        <div class="flex justify-center">
          <a
            href="http://wa.me/5585981674817"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[350px] px-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img
              src="../../../assets/Images/Card_Comercial.webp"
              alt="Fale com o comercial"
              class=""
            />
          </a>
          <a
            href="http://wa.me/5585982257397"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[350px] px-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img
              src="../../../assets/Images/Card_Suporte.webp"
              alt="Fale com o suporte"
            />
          </a>
          <a
            href="http://wa.me/5585991495691"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[350px] px-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img
              src="../../../assets/Images/Card_Financeiro.png"
              alt="Fale com o financeiro"
            />
          </a>
        </div>
        <div class="pt-8 flex justify-center">
          <div
            class="w-[25%] h-[40px] bg-[#003366] rounded-full text-2xl text-center hover:bg-[#1EC2F1] ease-in-out duration-300 py-[3px]"
          >
            <a
              href="https://linktr.ee/beachnetmkt?fbclid=PAZXh0bgNhZW0CMTEAAaYtAHG4VvbfNv-goKcEsQykxSbvKgrDbtSRol-B7B-dLUubDP1HqSWnJNA_aem_dvIWia2HKS_ekFuHer_tmA"
              class=""
              >Converse com a gente</a
            >
          </div>
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
        <template #item="slotProps"
          ><a
            :href="slotProps.data.cardLink"
            target="_blank"
            rel="noopener noreferrer"
            class="w-[20%] px-2"
          >
            <img :src="slotProps.data.image" :alt="slotProps.data.imageAlt" />
          </a>
        </template>
      </Carousel>
      <div class="py-2 flex justify-center">
        <div
          class="w-[280px] h-[33px] bg-[#003366] rounded-full text-xl text-center hover:bg-[#1EC2F1]"
        >
          <a
            href="https://linktr.ee/beachnetmkt?fbclid=PAZXh0bgNhZW0CMTEAAaYtAHG4VvbfNv-goKcEsQykxSbvKgrDbtSRol-B7B-dLUubDP1HqSWnJNA_aem_dvIWia2HKS_ekFuHer_tmA"
            class=""
            >Converse com a gente</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>

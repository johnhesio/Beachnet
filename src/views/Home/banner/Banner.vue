<!--para trocar a imagem, basta trocar o caminho dela-->
<script>
import image1 from "../../../assets/Images/300mb_Internet_do_jeito_que_voce_precisa.jpg";
import image2 from "../../../assets/Images/600mb_Internet_ideal_para_gamers.jpg";
import { defineComponent } from "vue";
import Galleria from "primevue/galleria";
export default defineComponent({
  name: "carrossel",
  components: { Galleria },
  setup() {
    const carrosselSlides = [
      {
        image: image1,
        imageAlt: image1,
      },
      {
        image: image2,
        imageAlt: image2,
      },
    ];
    return { carrosselSlides };
  },
});
</script>

<template>
  <Galleria
    :value="carrosselSlides"
    :responsiveOptions="responsiveOptions"
    :numVisible="4"
    :circular="true"
    :showItemNavigators="true"
    :showThumbnails="false"
    :autoPlay="true"
    :transitionInterval="5000"
  >
    <template #item="slotProps">
      <div class="w-full">
        <!--para adicionar o link, basta trocar o # no href-->
        <a href="#">
          <img
            :src="slotProps.item.image"
            :alt="slotProps.item.imageAlt"
            style="width: 100%; display: block"
          />
        </a>
      </div>
    </template>
  </Galleria>
</template>

<style scoped></style>

<script>
import Carousel from "primevue/carousel";
import image1 from "../../../assets/Images/looke.webp";
import image2 from "../../../assets/Images/deezer.svg";
import image3 from "../../../assets/Images/max.webp";
import { defineComponent } from "vue";
export default defineComponent({
  name: "app",
  components: { Carousel },
  setup() {
    let links = [
      {
        textNomePlano: "PLANO PÉ NA AREIA",
        textMegaPlano: "100MEGA",
        imageApp: image1,
        imageAlt: "Looker App",
        textApp: "App incluso",
        textValor: "79,90",
      },
      {
        textNomePlano: "PLANO TÁ DANDO ONDA",
        textMegaPlano: "300MEGA",
        imageApp: image2,
        imageAlt: "Looker App",
        textApp: "App incluso",
        textValor: "109,90",
      },
      {
        textNomePlano: "PLANO OCEANO",
        textMegaPlano: "600MEGA",
        imageApp: image3,
        imageAlt: "Looker App",
        textApp: "App incluso",
        textValor: "129,90",
      },
    ];
    return {
      links,
    };
  },
});
</script>

<template>
  <div class="md:h-[550px] bg-white">
    <h1
      class="text-[#0168BC] md:text-4xl text-2xl font-black text-center md:pt-5 pt-10"
    >
      Planos Fibra Com Apps
    </h1>
    <!--Web Version-->
    <div class="hidden md:block">
      <div
        class="md:h-[400px] h-[1200px] flex flex-col md:gap-10 md:flex-row justify-center items-center md:py-8 pt-5"
      >
        <!--1º card-->
        <div
          class="mt-24 flex flex-col text-center h-[450px] w-[270px] md:mx-5 py-5 rounded-[25px] relative drop-shadow-md shadow-2xl border text-black"
        >
          <p class="text-[10px] md:pt-5 pt-2 text-black">PLANO PÉ NA AREIA</p>
          <p class="text-4xl font-bold text-[#0168BC] md:py-1">100MEGA</p>
          <div class="text-left">
            <div class="flex justify-left pl-12 md:pt-6 pt-2">
              <img
                src="../../../assets/Images/Network_Cable.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">100% Fibra</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Online_Support.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">Suporte humanizado</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Discount.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">Instalação gratuita</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/WiFi.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <img
                src="../../../assets/Images/WiFi_branco.png"
                alt="100% Fibra"
                class="h-[20px] hidden group-hover:block"
              />
              <p class="md:pl-1">WIFI Plus</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-4">
              <img
                src="../../../assets/Images/looke.webp"
                alt="Looke app"
                class="h-[40px]"
              />
              <p class="pt-[5px] pl-1">App incluso</p>
            </div>
          </div>
          <div class="flex justify-center md:pt-6 pt-2">
            <p class="text-xl font-bold pt-3">R$</p>
            <p class="text-4xl font-bold text-[#0168BC]">79,90</p>
            <p class="text-xl font-bold pt-3">/mês</p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5585981674817&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <div
              class="bg-[#0168BC] rounded-b-[25px] h-[70px] absolute inset-x-0 bottom-0 hover:bg-[#003366]"
            >
              <p class="text-2xl font-bold flex justify-center pt-4 text-white">
                Assine Já
              </p>
            </div>
          </a>
        </div>

        <!--2º card-->
        <div
          class="mt-24 flex flex-col text-center h-[450px] w-[270px] md:mx-5 py-5 rounded-[25px] relative drop-shadow-md shadow-2xl border text-black"
        >
          <p class="text-[10px] md:pt-5 pt-2 text-black">PLANO TÁ DANDO ONDA</p>
          <p class="text-4xl font-bold text-[#0168BC] md:py-1">300MEGA</p>
          <div class="text-left">
            <div class="flex justify-left pl-12 md:pt-6 pt-2">
              <img
                src="../../../assets/Images/Network_Cable.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">100% Fibra</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Online_Support.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">Suporte humanizado</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Discount.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">Instalação gratuita</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/WiFi.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">WIFI Plus</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-4">
              <img
                src="../../../assets/Images/deezer.svg"
                alt="Looke app"
                class="h-[40px]"
              />
              <p class="pt-[5px] pl-1">App incluso</p>
            </div>
          </div>
          <div class="flex justify-center md:pt-6 pt-2">
            <p class="text-xl font-bold pt-3">R$</p>
            <p class="text-4xl font-bold text-[#0168BC]">109,90</p>
            <p class="text-xl font-bold pt-3">/mês</p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5585981674817&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <div
              class="bg-[#0168BC] rounded-b-[25px] h-[70px] absolute inset-x-0 bottom-0 hover:bg-[#003366]"
            >
              <p class="text-2xl font-bold flex justify-center pt-4 text-white">
                Assine Já
              </p>
            </div>
          </a>
        </div>

        <!--3º card-->
        <div
          class="mt-24 flex flex-col text-center h-[450px] w-[270px] md:mx-5 py-5 rounded-[25px] relative drop-shadow-md shadow-2xl border text-black"
        >
          <p class="text-[10px] md:pt-5 pt-2 text-black">PLANO OCEANO</p>
          <p class="text-4xl font-bold text-[#0168BC] md:py-1">600MEGA</p>
          <div class="text-left">
            <div class="flex justify-left pl-12 md:pt-6 pt-2">
              <img
                src="../../../assets/Images/Network_Cable.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />
              <p class="md:pl-1">100% Fibra</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Online_Support.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />

              <p class="md:pl-1">Suporte humanizado</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/Discount.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />

              <p class="md:pl-1">Instalação gratuita</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-1">
              <img
                src="../../../assets/Images/WiFi.png"
                alt="100% Fibra"
                class="h-[20px] group-hover:hidden"
              />

              <p class="md:pl-1">WIFI Plus</p>
            </div>
          </div>
          <div class="text-left">
            <div class="flex justify-left pl-12 pt-4">
              <img
                src="../../../assets/Images/max.webp"
                alt="Looke app"
                class="h-[40px]"
              />
              <p class="pt-[5px] pl-1">App incluso</p>
            </div>
          </div>
          <div class="flex justify-center md:pt-6 pt-2">
            <p class="text-xl font-bold pt-3">R$</p>
            <p class="text-4xl font-bold text-[#0168BC]">129,90</p>
            <p class="text-xl font-bold pt-3">/mês</p>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=5585981674817&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <div
              class="bg-[#0168BC] rounded-b-[25px] h-[70px] absolute inset-x-0 bottom-0 hover:bg-[#003366]"
            >
              <p class="text-2xl font-bold flex justify-center pt-4 text-white">
                Assine Já
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!--mobile Version-->
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
          <div
            class="flex flex-col text-center h-[400px] w-[270px] md:mx-5 py-5 rounded-[25px] relative drop-shadow-md shadow-2xl border text-black"
          >
            <p class="text-[10px] md:pt-5 pt-2 text-black">
              {{ slotProps.data.textNomePlano }}
            </p>
            <p class="text-4xl font-bold text-[#0168BC] md:py-1">
              {{ slotProps.data.textMegaPlano }}
            </p>
            <div class="text-left">
              <div class="flex justify-left pl-12 md:pt-6 pt-2">
                <img
                  src="../../../assets/Images/Network_Cable.png"
                  alt="100% Fibra"
                  class="h-[20px] group-hover:hidden"
                />
                <p class="md:pl-1">100% Fibra</p>
              </div>
            </div>
            <div class="text-left">
              <div class="flex justify-left pl-12 pt-1">
                <img
                  src="../../../assets/Images/Online_Support.png"
                  alt="100% Fibra"
                  class="h-[20px] group-hover:hidden"
                />
                <p class="md:pl-1">Suporte humanizado</p>
              </div>
            </div>
            <div class="text-left">
              <div class="flex justify-left pl-12 pt-1">
                <img
                  src="../../../assets/Images/Discount.png"
                  alt="100% Fibra"
                  class="h-[20px] group-hover:hidden"
                />
                <p class="md:pl-1">Instalação gratuita</p>
              </div>
            </div>
            <div class="text-left">
              <div class="flex justify-left pl-12 pt-1">
                <img
                  src="../../../assets/Images/WiFi.png"
                  alt="100% Fibra"
                  class="h-[20px] group-hover:hidden"
                />
                <img
                  src="../../../assets/Images/WiFi_branco.png"
                  alt="100% Fibra"
                  class="h-[20px] hidden group-hover:block"
                />
                <p class="md:pl-1">WIFI Plus</p>
              </div>
            </div>
            <div class="text-left">
              <div class="flex justify-left pl-12 pt-4">
                <img
                  :src="slotProps.data.imageApp"
                  :alt="slotProps.data.imageAlt"
                  class="h-[40px]"
                />
                <p class="pt-[5px] pl-1">App incluso</p>
              </div>
            </div>
            <div class="flex justify-center md:pt-6 pt-2">
              <p class="text-xl font-bold pt-3">R$</p>
              <p class="text-4xl font-bold text-[#0168BC]">{{slotProps.data.textValor}}</p>
              <p class="text-xl font-bold pt-3">/mês</p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5585981674817&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <div
                class="bg-[#0168BC] rounded-b-[25px] h-[70px] absolute inset-x-0 bottom-0 hover:bg-[#003366]"
              >
                <p
                  class="text-2xl font-bold flex justify-center pt-4 text-white"
                >
                  Assine Já
                </p>
              </div>
            </a>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style scoped></style>

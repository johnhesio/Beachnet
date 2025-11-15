<script>
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "topbar",
  setup() {
    let open = ref(false);
    let links = [
      { name: "Home", link: "/#home" },
      { name: "Sobre", link: "/#sobre" },
      { name: "Planos", link: "/#planos" },
      { name: "Contatos", link: "/#contatos" },
    ];
    function menuopen() {
      open.value = !open.value;
    }
    return {
      links,
      open,
      menuopen,
    };
  },
});
</script>

<template>
  <!-- Barra de Menu-->
  <div
    id="home"
    class="fixed top-0 left-0 w-full bg-[#003366] text-white py-3.5 px-6 shadow md:flex justify-between items-center z-50"
  >
    <!-- Img da logo com link (para trocar o link alterar a linha "router-link")-->
    <router-Link to="">
      <div class="flex items-center">
        <!-- Img para trocar só alterar o caminho da img nos arquivos-->
        <img
          src="/src/assets/Images/Beachnet_logo.webp"
          alt="Logo Beachnet"
          class="h-16"
        />
      </div>
    </router-Link>

    <span
      @click="menuopen()"
      class="absolute md:hidden items-center right-6 top-5 cursor-pointer text-4xl"
    >
      <i
        :class="[open ? 'pi pi-times' : 'pi pi-bars']"
        style="font-size: 1.5rem"
      ></i>
    </span>

    <!-- Menu Mobile-->
    <ul
      class="bg-[#003366] md:flex md:items-center text-lg md:px-0 px-7 md:pb-0 md:static absolute md:w-auto w-[300px] duration-700 ease-in z-10"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li class="md:mx-2 md:my-0 my-6" v-for="link in links">
        <!-- Links dos botões do menu mobile(para trocar ir no script na, tag link para alterar)-->
        <router-link
          :to="link.link"
          class="rounded-full px-5 py-2 text-x1 hover:text-white hover:bg-[#1EC2F1] hover:rounded-full hover:px-5"
          >{{ link.name }}</router-link
        >
      </li>
      <div class="md:hidden flex flex-col text-center my-2">
        <a
          class="mx-2 my-1 rounded-full bg-white px-5 py-2 text-x1 text-black hover:bg-[#ffc500] hover:rounded-full hover:px-5"
          href="http://wa.me/5585981674817"
          target="_blank"
          >Assine Já</a
        >
        <a
          class="mx-2 my-1 rounded-full bg-white px-5 py-2 text-x1 text-black hover:bg-[#ffc500] hover:rounded-full hover:px-5"
          href="http://wa.me/5585981674817"
          target="_blank"
          >Área do cliente</a
        >
      </div>
    </ul>
    <div class="hidden md:block">
      <!-- Links dos botões do menu (para trocar alterar tag href)-->
      <a
        class="mx-2 rounded-full bg-white px-5 py-2 text-x1 text-black hover:bg-[#ffc500] hover:rounded-full hover:px-5"
        href="http://wa.me/5585981674817"
        target="_blank"
        >Assine Já</a
      >
      <a
        class="mx-2 rounded-full bg-white px-5 py-2 text-x1 text-black hover:bg-[#ffc500] hover:rounded-full hover:px-5"
        href="http://wa.me/5585981674817"
        target="_blank"
        >Área do cliente</a
      >
    </div>
  </div>
</template>

<style scoped></style>

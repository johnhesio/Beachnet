<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="bg-blue-900 text-white py-4">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row md:justify-between items-center">
        <!-- Logo e navegação -->
        <div class="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div class="flex items-center space-x-2">
            <img
              src="../../../assets/Images/Beachnet_logo.webp"
              alt="BeachNet Logo"
              class="w-[200px]"
            />
          </div>
        </div>

        <nav
          class="md:mt-2 space-y-1 md:text-left flex flex-col items-center md:items-start"
        >
          <router-link to="/#home">
            <a class="hover:underline">Home</a>
          </router-link>
          <router-link to="/#sobre">
            <a class="hover:underline">Sobre</a>
          </router-link>

          <router-link to="/#planos">
            <a class="hover:underline">Planos</a>
          </router-link>

          <router-link to="/#contatos">
            <a class="hover:underline">Contatos</a>
          </router-link>

          <a href="#" class="hover:underline">Assine Já</a>
          <a href="#" class="hover:underline">Área do Cliente</a>
        </nav>

        <!-- Informações de contato -->
        <div class="text-center md:text-left pt-5 md:pt-0">
          <h3 class="text-lg font-semibold">Central de Atendimento</h3>
          <p class="text-sm">+55 (85) 4042-9293</p>
          <hr class="bg-white my-3" />
          <p class="text-sm mt-1">Av. Zezé Diogo, 425 b - Cais do Porto</p>
          <p class="text-sm">Fortaleza - CE, 60180-005</p>
        </div>
        <!-- Redes sociais -->
        <div
          class="flex flex-col items-center md:items-start mb-6 md:mb-0 pt-5 md:pt-0"
        >
          <h3 class="text-lg font-semibold mb-2">Redes sociais</h3>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/beachnet.oficial?mibextid=ZbWKwL" class="hover:opacity-75" target="_blank">
              <i class="pi pi-facebook" style="font-size: 2.5rem"></i>
            </a>
            <a href="https://www.instagram.com/beachnet.oficial?igsh=MjNveG82a3lmcGxy" class="hover:opacity-75" target="_blank">
              <i class="pi pi-instagram" style="font-size: 2.5rem"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Opcional: Ajustes adicionais de estilo */
</style>

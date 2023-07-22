<template>
  <main>
    <Header />

    <!-- Hero -->
    <section class="flex flex-col h-screen">
      <div class="container flex">
        <div class="py-24 lg:w-2/3">
          <h1 class="leading-none text-6xl lg:text-8xl font-bold">
            Building in stealth.<br /><span class="text-primary">Empowered to disrupt.</span>
          </h1>
        </div>
      </div>

      <div
        class="flex-grow"
        style="background: url(/hero-bg.jpeg) no-repeat; background-size: cover; background-position: center center"
      ></div>
    </section>

    <!-- What We Do -->
    <section class="bg-[#fefefe]">
      <div class="container pt-12 lg:pt-24 lg:pb-12">
        <div class="min-h-[500px] md:min-h-[340px] mb-12" @mouseenter="pause = true" @mouseleave="pause = false">
          <div v-if="selected === 0">
            <h1 class="mb-6 leading-none lg:w-2/3 text-6xl font-bold">We make useful AI-based applications.</h1>
            <p class="text-gray-700 lg:w-1/3">
              We invest our time into state-of-the-art AI technologies and create applications with real-life
              touchpoints. We want to take the very best of Artificial Intelligence and put it to programs that help
              humans excel at their tasks and decision-making.
            </p>
          </div>
          <div v-if="selected === 1">
            <h1 class="mb-6 leading-none lg:w-2/3 text-6xl font-bold">We build MVPs for Silicon Valley startups.</h1>
            <p class="text-gray-700 lg:w-1/3">
              We're a team of experts who help Silicon Valley startups create Minimum Viable Products (MVPs) that allow
              them to test their ideas quickly and inexpensively. Our developers and designers work closely with
              founders to build functional, visually appealing, and user-friendly MVPs using the latest technologies and
              agile methodologies.
            </p>
          </div>
          <div v-if="selected === 2">
            <h1 class="mb-6 leading-none lg:w-2/3 text-6xl font-bold">We are exploring the future of blockchain.</h1>
            <p class="text-gray-700 lg:w-1/3">
              At our core, we're a team of passionate blockchain enthusiasts who are committed to exploring the future
              of this revolutionary technology. We're constantly researching new use cases and applications for
              blockchain, and we're always eager to collaborate with other innovators in the space.
            </p>
          </div>
        </div>

        <div class="flex flex-row items-center h-40 grid-cols-3 gap-3 lg:grid">
          <div
            class="flex flex-row items-center transition-all duration-500 cursor-pointer select-none"
            @mouseover="selected = 0"
            @click="selected = 0"
          >
            <div
              class="transition-all duration-500 border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
              :class="selected === 0 ? 'bg-primary text-white p-4 mr-3 lg:mr-6' : 'p-2 mr-3'"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current"
              >
                <circle cx="12" cy="12" r="3" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="12" cy="4" r="2" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="20" cy="12" r="2" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="4" cy="12" r="2" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></circle>
                <circle cx="12" cy="20" r="2" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></circle>
                <path d="M12 6V9" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M15 12H18" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 15V18" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9 12H6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>

            <h4
              :class="selected === 0 ? 'font-bold text-xl lg:text-2xl block' : 'font-medium text-xl hidden lg:block'"
              class="transition-all duration-500"
            >
              Artificial Intelligence
            </h4>
          </div>

          <div
            class="flex flex-row items-center transition-all duration-500 cursor-pointer select-none"
            @mouseover="selected = 1"
            @click="selected = 1"
          >
            <div
              class="transition-all duration-500 border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
              :class="selected === 1 ? 'bg-primary text-white p-4 mr-3 lg:mr-6' : 'p-2 mr-3'"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current"
              >
                <path d="M7 8L3 12L7 16" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17 8L21 12L17 16" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M14 4L9.8589 19.4548" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>

            <h4
              :class="selected === 1 ? 'font-bold text-xl lg:text-2xl block' : 'font-medium text-xl hidden lg:block'"
              class="transition-all duration-500"
            >
              Product Development
            </h4>
          </div>

          <div
            class="flex flex-row items-center transition-all duration-500 cursor-pointer select-none"
            @mouseover="selected = 2"
            @click="selected = 2"
          >
            <div
              class="transition-all duration-500 border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
              :class="selected === 2 ? 'bg-primary text-white p-4 mr-3 lg:mr-6' : 'p-2 mr-3'"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current"
              >
                <path d="M3 6V18" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M21 6V18" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18 21H6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M18 3H6" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>

            <h4
              :class="selected === 2 ? 'font-bold text-xl lg:text-2xl block' : 'font-medium text-xl hidden lg:block'"
              class="transition-all duration-500"
            >
              Blockchain
            </h4>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      changer: null,
      pause: false,
    };
  },
  mounted() {
    this.changer = setInterval(() => {
      if (this.pause) return;

      if (this.selected === 2) {
        this.selected = 0;
      } else {
        this.selected++;
      }
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.changer);
  },
  watch: {
    selected() {
      clearInterval(this.changer);

      this.changer = setInterval(() => {
        if (this.pause) return;

        if (this.selected === 2) {
          this.selected = 0;
        } else {
          this.selected++;
        }
      }, 3000);
    },
  },
};
</script>

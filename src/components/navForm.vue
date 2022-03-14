<template>
  <div>
      <button @click="navigateNext">
          {{ buttonText() }}
      </button>
  </div>
</template>

<script>
export default {
    name: 'navForm',
    methods: {
        buttonText() {
            if (
                this.$route.name ==='landingPage'
            ) {
                return 'Je participe';
            }
            return 'Je valide';
        },
        navigateNext() {
            if (this.$route.name === 'landingPage') {
                this.$router.push('/1');
            } else if (this.$route.name ==='firstStep') {
                this.$router.push('/2');
            }
        }
    }

    //If info perso : submit()

}
</script>

<style>

</style>
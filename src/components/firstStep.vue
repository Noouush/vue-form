<template>
  <div>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" name="firstName" v-model="firstName"/>

        <label for="email-address">Email</label>
      <input type="text" id="email-address" name="email" v-model="email"/>


        <div class="radiobutton">
            <input type="radio" id="Oui" value="Oui" name="connaissanceSite">
            <label for="Oui">Oui</label>
        </div>

        <div class="radiobutton">
          <input type="radio" id="Non" value="Non" name="connaissanceSite">
          <label for="Non">Non</label>
        </div>

        <div class="radiobutton">
          <input type="radio" id="Peut-être" value="Peut-être" name="connaissanceSite">
          <label for="Peut-être">Je pense - J'en ai déjà entendu parler</label>
        </div>


      <navForm></navForm>
  </div>
</template>

<script>
import navForm from './navForm';

export default {
    name: 'firstStep',
    components: {
        navForm,
    },
    computed: {
        firstName: {
            get () {
                return this.$store.state.firstName
            },
            set (value) {
                this.$store.commit('setFirstName', {firstName: value})
            }
        },
        email: {
            get () {
                return this.$store.state.email
            },
            set (value) {
                this.$store.commit('setEmail', {email: value})
            }
        }
    }

}
</script>

<style>

</style>
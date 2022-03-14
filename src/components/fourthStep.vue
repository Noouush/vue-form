<template>
  <div>
        <label>
        Apporter un soutien financier
        <input type="checkbox" value="finance" name="souhaitFinance" v-model="souhaitFinance" />
      </label>
      <label>
        Proposer votre lieu en résidence
        <input type="checkbox" value="lieu" name="souhaitLieu" v-model="souhaitLieu" />
      </label>
      <label>
        Programmer une représentation
        <input type="checkbox" value="representation" name="souhaitRepresentation" v-model="souhaitRepresentation" />
      </label>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
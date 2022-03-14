<template>
<div>
    <div class="radiobutton">
        <input type="radio" id="Oui" value="Oui" name="connaissanceLeo">
        <label for="Oui">Oui</label>
    </div>

    <div class="radiobutton">
        <input type="radio" id="Non" value="Non" name="connaissanceLeo">
        <label for="Non">Non</label>
    </div>

    <div class="radiobutton">
        <input type="radio" id="Peut-être" value="Peut-être" name="connaissanceLeo">
        <label for="Peut-être">Je pense - J'en ai déjà entendu parler</label>
    </div>
</div>
</template>

<script>
export default {
    name: 'secondStep',
}
</script>

<style>

</style>
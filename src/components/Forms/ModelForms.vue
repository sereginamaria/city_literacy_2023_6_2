<template>
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/TaskChatFestivalBackground.webp') + ')'}">
        <FormsModel v-if="this.mainJSON.forms.modelShow"/>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormsModel from "@/components/Forms/FormsModel.vue";

export default {
    name: "ModelForms",
    components: {FormsModel},
    computed: {
        ...mapGetters(['mainJSON']),
    },
}
</script>

<style scoped>
</style>
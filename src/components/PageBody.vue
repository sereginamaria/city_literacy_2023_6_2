<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskLibraryNight v-if="this.mainJSON.taskLibraryNight.isShow"/>
        <ModelTaskChatFestival v-if="this.mainJSON.taskChatFestival.isShow"/>
        <ModelTaskVolunteers v-if="this.mainJSON.task3.isShow"/>
        <ModelForms v-if="this.mainJSON.forms.isShow"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ModelTaskChatFestival from "@/components/Task2/ModelTaskChatFestival";
    import ModelTaskVolunteers from "@/components/Task3/ModelTaskVolunteers";
    import ModelForms from "@/components/Forms/ModelForms.vue";
    import ModelTaskLibraryNight from "@/components/Task1/ModelTaskLibraryNight.vue";
    export default {
        name: "PageBody",
        components: {
            ModelTaskLibraryNight,
            ModelForms, ModelTaskVolunteers, ModelTaskChatFestival},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>
<template>
    <div>
       <!-- <PageNavBar/>-->
        <ModelTaskNightInTheMuseum v-if="this.mainJSON.task1.isShow"/>
        <ModelTaskChatFestival v-if="this.mainJSON.taskChatFestival.isShow"/>
        <ModelTaskVolunteers v-if="this.mainJSON.task3.isShow"/>
        <ModelForms v-if="this.mainJSON.forms.isShow"/>
    </div>
</template>

<script>
    import ModelTaskNightInTheMuseum from "@/components/Task1/ModelTaskNightInTheMuseum";
    import {mapGetters} from "vuex";
    import ModelTaskChatFestival from "@/components/Task2/ModelTaskChatFestival";
    import ModelTaskVolunteers from "@/components/Task3/ModelTaskVolunteers";
    import ModelForms from "@/components/Forms/ModelForms.vue";
    export default {
        name: "PageBody",
        components: {ModelForms, ModelTaskVolunteers, ModelTaskChatFestival, ModelTaskNightInTheMuseum},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>
<template>
    <div class="background" :style="{ background: 'url(' + require('../../assets/TaskChatFestivalBackground.webp') + ')'}">
        <ChatModel v-if="this.mainJSON.taskChatFestival.chatShow"/>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ChatModel from "@/components/Task2/Chat/ChatModel";

    export default {
        name: "ModelTaskChatFestival",
        components: {ChatModel},
        computed: {
            ...mapGetters(['mainJSON']),
        },
    }
</script>

<style scoped>
</style>
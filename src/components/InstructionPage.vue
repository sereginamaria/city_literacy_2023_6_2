<template>
    <div class="instruction-body" :class="{backgroundTaskNightInTheMuseum: mainJSON.task1.isShow, backgroundTaskChatWalk: mainJSON.task2.isShow ||
    mainJSON.forms.isShow, backgroundTaskVolunteers: mainJSON.task3.isShow}">
        <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="instruction-card">
                <div>
                    <p v-if="mainJSON.task1.isShow">{{constTask1.instruction}}</p>
                    <p v-if="mainJSON.task2.isShow">{{constTask2.instruction}}</p>
                    <p v-if="mainJSON.task3.isShow">{{constTask3.instruction}}</p>
                    <p v-if="mainJSON.forms.isShow">{{constForm.instruction}}</p>
                </div>
                <div class="d-flex justify-content-end" v-if="!mainJSON.forms.isShow">
                    <p style="font-style: italic; width: 700px; text-align: right;">
                        Все имена и события в тесте вымышлены, любые совпадения с реальными людьми и событиями случайны.
                    </p>
                </div>
                <div class="d-flex justify-content-center">
                    <MyButton style="width: 250px" @click="instruction" class="blue-buttons">Приступить</MyButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "InstructionPage",
        computed: {
            ...mapGetters(['mainJSON', 'constTask1', 'constTask2', 'constTask3', 'constForm']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            instruction() {
                this.mainJSON['instructionShow'] = false
                this.mainJSON['mainPageShow'] = true
                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>
    .instruction-body {
        backdrop-filter: blur(5px);
        height: 100vh;
        background-size: cover !important;
    }
    .backgroundTaskNightInTheMuseum {
        background: url("../assets/Background.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .backgroundTaskChatWalk {
        background: url("../assets/TaskChatBackground.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .backgroundTaskVolunteers {
        background: url("../assets/TaskVolunteersBackground.webp") rgba(255, 255, 255, 0.01) no-repeat center center fixed;
    }
    .instruction-card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 957px;
        max-height: 750px;
        background: #fff;
        border: 1px solid #2a94d6;
        box-shadow: 0 2px 20px rgb(24 24 24 / 50%);
        border-radius: 15px;
        padding: 20px 40px;
    }
</style>
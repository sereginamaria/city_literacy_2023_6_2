<template>
    <!--Задание 11 задание-->
    <div class="backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Выбери из списка фестиваль, который проходит в Москве.
            </p>
        </div>
        <div class="option-answers-background">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskFestival" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK4}"
                 class="option-answers-border"
            >
                <div @click="chooseAnswer(el)">
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
                 <div class="d-flex">

                <p>
                    <span class="name-in-dialog">{{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK4 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskFestival",
        computed: {
            ...mapGetters(['mainJSON']),
        },
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK4 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })

                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK4 === 2){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK4 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK4 = 0
                }

                let t = new Date()
                this.mainJSON.results.dataTimeLastUpdate =
                    [
                        t.getFullYear(),
                        ('0' + (t.getMonth() + 1)).slice(-2),
                        ('0' + t.getDate()).slice(-2)
                    ].join('-') + ' ' + [
                        ('0' + (t.getHours())).slice(-2),
                        ('0' + (t.getMinutes())).slice(-2),
                        ('0' + t.getSeconds()).slice(-2)
                    ].join(':');

                this.push_mainJSON({
                    push: this.mainJSON
                })
            }
        }
    }
</script>

<style scoped>

</style>
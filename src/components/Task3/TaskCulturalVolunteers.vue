<template>
    <div class="backgroundTaskNewGirl"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Подскажи Кате, как называют активных жителей города, которые по своей инициативе помогают ухаживать за историческими памятниками. Выбери один вариант ответа.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="option-answers-background">
                <div v-for="el in constTaskNewGirl.listOfAnswersCulturalVolunteers" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskNewGirl.results.ULSE2_Log_SEK2_2}"
                     class="option-answers-border"
                >
                    <div @click="chooseAnswer(el)">
                        {{el.value}}
                    </div>
                </div>
            </div>
        </div>
        <div class="background-text" id="background-text">
            <div style="width: 90%">
                <p>
                    <span class="name-in-dialog">{{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].name}}</span>
                    {{constTaskNewGirl.screens[this.mainJSON.taskNewGirl.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNewGirl.results.ULSE2_Log_SEK2_2 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskCulturalVolunteers",
        props: {
            screen: {},
            constTaskNewGirl: {}
        },
        data() {
            return {
                height: 0
            }
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK2_2 = el.id
            },
            checkAnswer() {
                screen.isShow = false

                if(this.mainJSON.taskNewGirl.results.ULSE2_Log_SEK2_2 === 4){
                    this.mainJSON.taskNewGirl.shownScreenID++
                    this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK2_2 = 1
                }
                else{
                    this.mainJSON.taskNewGirl.shownScreenID+=2
                    this.mainJSON.taskNewGirl.results.ULSE2_Score_SEK2_2 = 0
                }

                this.mainJSON.taskNewGirl.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
                        el.isShow = true
                    }
                })

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
        },
        mounted(){
            this.height = document.getElementById('background-text').offsetHeight + document.getElementById('instruction-block').offsetHeight
        }
    }
</script>

<style scoped>

</style>
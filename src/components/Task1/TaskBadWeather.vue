<template>
    <div class="background backimp" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}" :class="{background5: mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 === 1,
    background6: mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 === 2, background7: mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 === 3, background8: mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 === 4}"
    >
        <div class="instruction-block">
            <p>Что ответишь Кате? Выбери все верные варианты ответа, кликнув на картинку.
            </p>
        </div>
        <div class="task13">
            <div v-for="el in mainJSON.taskLibraryNight.listOfAnswersTaskBadWeather" :key="el.id" class="task13El"
                 :class="{choosenAnswer1: el.id === mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1}"
                 @click="chooseAnswer(el)">
                <div>
                    {{el.name}}
                </div>
            </div>
        </div>
        <div class="background-text">
            <div class="d-flex">
                <p>
                    <span class="name-in-dialog">{{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].name}}</span>
                    {{constTaskLibraryNight.screens[this.mainJSON.taskLibraryNight.shownScreenID].text}}
                </p>
            </div>
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 !== 'NA'">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskBadWeather",
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el) {
                this.mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 = el.id
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskLibraryNight.results.ULSCLL1_Log_SCK3_1 === 3){
                    this.mainJSON.taskLibraryNight.results.ULSCLL1_Score_SCK3_1 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL1_Score_SCK3_1 = 0
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
    .task13 {
        display: flex;
        width: 100%;
        position: absolute;
        top: 60%;
        justify-content: center;
        padding: 0 calc(100%/10);
        flex-wrap: wrap;
        align-items: center;
    }
    .task13El {
        margin: 20px 50px;
        display: flex;
        min-height: 60px;
        width: calc(100%/4);
        /* min-width: max-content; */
        background: #FFFFFF;
        border: 1px solid #54BEDF;
        /* height: calc(100%/4); */
        align-items: center;
        justify-content: center;
    }
    .choosenAnswer1 {
        background: rgba(84, 190, 223, 0.8);
    }
    .backimp {
        background-position: unset !important;
    }
    .background5 {
        background: url("../../assets/TaskLibraryNightBadWeather4.webp") !important;
        background-size: cover!important;
    }
    .background6 {
        background: url("../../assets/TaskLibraryNightBadWeather2.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background7 {
        background: url("../../assets/TaskLibraryNightBadWeather1.webp") rgba(255, 255, 255, 0.01)  !important;
        background-size: cover!important;
    }
    .background8 {
        background: url("../../assets/TaskLibraryNightBadWeather3.webp") rgba(255, 255, 255, 0.01) !important;
        background-size: cover!important;
    }
</style>
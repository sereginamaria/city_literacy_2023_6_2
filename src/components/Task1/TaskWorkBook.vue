<template>
    <!--Задание рабочая тетрадь-->
    <div class="background backgroundTaskLibraryNight" :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Заполни пропуски в тексте.
            </p>
        </div>
        <div class="background-task1">
            <div style="line-height: 3; text-align: justify; font-size: 18px" id="collapseModularTask4">
                Считается, что Москва появилась в
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ1" aria-expanded="false" aria-controls="collapseWorkBookQ1"
                      @click="openWorkBookQ(14)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_1 === 'NA'}"
                >{{this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_1 !== "NA" ? mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_1 : "_______"}}</span>
                <div class="collapse" id="collapseWorkBookQ1" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            В каком году основана Москва?
                        </p>
                        <p>
                            Выбери правильный ответ в правой части тетради.
                        </p>
                    </div>
                </div>
                году. Город был основан
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ2" aria-expanded="false" aria-controls="collapseWorkBookQ2"
                      @click="openWorkBookQ(15)" style="text-decoration: underline; font-size: 18px; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_2 === 'NA'}"
                >{{this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_2 !== "NA" ? mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_2 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ2" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Кто из них основал Москву?
                        </p>
                        <p>
                            Выбери правильный рисунок в правой части тетради.
                        </p>
                    </div>
                </div>
                Главной торговой площадью средневековой Москвы была
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ3" aria-expanded="false" aria-controls="collapseWorkBookQ3"
                      @click="openWorkBookQ(16)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_3 === 'NA'}"
                >{{this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_3 !== "NA" ? mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_3 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ3" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Какая площадь была главной в средневековой Москве?
                        </p>
                        <p>
                            Выбери правильный рисунок в правой части тетради.
                        </p>
                    </div>
                </div>
                В наши дни рядом с этой площадью находится памятник
                <span data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ4" aria-expanded="false" aria-controls="collapseWorkBookQ4"
                      @click="openWorkBookQ(17)" style="text-decoration: underline; font-size: 18px" :class="{colorAnswers: this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_4 === 'NA'}"
                >{{this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_4 !== "NA" ? mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_4 : "_______"}}</span>.
                <div class="collapse" id="collapseWorkBookQ4" style="position: absolute" data-bs-parent="#collapseModularTask4">
                    <div class="card card-body">
                        <p>
                            Кому поставлен этот памятник?
                        </p>
                        <p>
                            Выбери правильный ответ в правой части тетради.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Первый вопрос-->
        <div class="background-task2" v-if="mainJSON.taskLibraryNight.modularTask1_14Show">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskWorkBook1" :key="el.id">
                <div class="d-flex mt-2" @click="chooseWorkBookEl(1, 14, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ1" aria-expanded="false" aria-controls="collapseWorkBookQ1"
                >
                    <div>
                        <p style="background: #FFFFFF; border: 1px solid #54BEDF; border-radius: 0px; padding: 10px 20px;">
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Второй вопрос-->
        <div class="background-task2" v-if="mainJSON.taskLibraryNight.modularTask1_15Show">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskWorkBook2" :key="el.id">
                <div class="d-flex mt-2 align-items-center" @click="chooseWorkBookEl(2, 15, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ2" aria-expanded="false" aria-controls="collapseWorkBookQ2"
                >
                    <img :src=" require('../../assets/' + el.src) " alt="" style="width: 30%;" class="me-2">
                    <div>
                        <p>
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Третий вопрос-->
        <div class="background-task2" v-if="mainJSON.taskLibraryNight.modularTask1_16Show">
            <div v-for="el in constTaskLibraryNight.listOfAnswersTaskWorkBook3" :key="el.id">
                <div class="d-flex mt-2 align-items-center" @click="chooseWorkBookEl(3, 16, el)"
                     data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ3" aria-expanded="false" aria-controls="collapseWorkBookQ3"
                >
                    <img :src=" require('../../assets/' + el.src) " alt="" style="width: calc(100%/2.5);" class="me-2">
                    <div>
                        <p>
                            {{el.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!--Четвертый вопрос-->
        <div class="background-task2" v-if="mainJSON.taskLibraryNight.modularTask1_17Show">
            <img src="../../assets/Workbook8.webp" alt="" style="width: 90%">
            <div style="background: #fff; border: 1px solid #54bedf;" class="mt-2">
                <div v-for="el in constTaskLibraryNight.listOfAnswersTaskWorkBook4" :key="el.id" :class="{choosenAnswer: el.id === mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_4}"
                     class="option-answers-border"
                >
                    <div @click="chooseAnswer(el)"
                         data-bs-toggle="collapse" data-bs-target="#collapseWorkBookQ4" aria-expanded="false" aria-controls="collapseWorkBookQ4"
                    >
                        {{el.value}}
                    </div>
                </div>
            </div>
        </div>

        <div class="background-text justify-content-end" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer"
                      v-if="mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_1 !== 'NA' || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_2 !== 'NA'
                      || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_3 !== 'NA' || mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_4 !== 'NA'"
            >
                Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>

</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "TaskWorkBook",
        props: {
            screen: {},
            constTaskLibraryNight: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            chooseAnswer(el){
                this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_4 = el.id
                this.mainJSON.taskLibraryNight.ULSCLL2_Log_LLK1_4 = el.value
                this.mainJSON.taskLibraryNight.modularTask1_17Show = false
            },
            chooseWorkBookEl(workBookID, id, el){
                this.mainJSON.taskLibraryNight.results["ULSCLL2_Log_LLK1_" + workBookID] = el.id

                if(workBookID === 1){
                    if(el.value === 'В 1280 году'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = '1280'
                    }
                    if(el.value === 'В 1105 году'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = '1105'
                    }
                    if(el.value === 'В 1147 году'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = '1147'
                    }
                    if(el.value === 'В 1127 году'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = '1127'
                    }
                }
                if(workBookID === 2){
                    if(el.value === 'Царь Иван Грозный'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = 'Царем Иваном Грозным'
                    }
                    if(el.value === 'Князь Юрий Долгорукий'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = 'Князем Юрием Долгоруким'
                    }
                    if(el.value === 'Боярин Борис Годунов'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = 'Боярином Борисом Годуновым'
                    }
                    if(el.value === 'Князь Ярослав Мудрый'){
                        this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = 'Князем Ярославом Мудрым'
                    }
                }
                if(workBookID === 3 || workBookID === 4){
                    this.mainJSON.taskLibraryNight["ULSCLL2_Log_LLK1_" + workBookID] = el.value
                }
                this.mainJSON.taskLibraryNight["modularTask1_" + id + "Show"] = false
            },
            openWorkBookQ(id){
                let k = 15
                while (k !== 18){
                    if(k !== id){
                        this.mainJSON.taskLibraryNight["modularTask1_" + k + "Show"] = false
                    }
                    k++
                }
                this.mainJSON.taskLibraryNight["modularTask1_" + id + "Show"] = !this.mainJSON.taskLibraryNight["modularTask1_" + id + "Show"]
            },
            checkAnswer(){
                screen.isShow = false
                this.mainJSON.taskLibraryNight.shownScreenID++
                this.mainJSON.taskLibraryNight.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskLibraryNight.shownScreenID) {
                        el.isShow = true
                    }
                })
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_1 ===  3){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_1 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_1 = 0
                }
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_2 ===  2){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_2 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_2 = 0
                }
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_3 ===  2){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_3 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_3 = 0
                }
                if(this.mainJSON.taskLibraryNight.results.ULSCLL2_Log_LLK1_4 ===  3){
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_4 = 1
                }
                else {
                    this.mainJSON.taskLibraryNight.results.ULSCLL2_Score_LLK1_4 = 0
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
.background{
    background-position: center !important;
}
    .background-task1 {
        width: calc(100%/3.5);
        position: absolute;
        top: calc(100%/6);
        left: calc(100%/5);
    }
    .background-task2 {
        width: calc(100%/3.5);
        position: absolute;
        top: calc(100%/8);
        left: calc(100%/1.8);
    }
    .card {
        background: #FFFFFF;
        border: 1px solid #54BEDF;
    }
    .colorAnswers {
        border-bottom-right-radius: 10%;
        border-bottom-left-radius: 10%;
        border-top-right-radius: 50%;
        box-shadow: 0px 0px 5px 3px rgba(84, 190, 223, 0.5);
        text-decoration: underline;
        border-top-left-radius: 50%;
        background: rgba(84, 190, 223, 0.5);
    }
</style>
<template>
    <div class="backgroundTaskNewGirl"
         :style="{ background: 'url(' + require('../../assets/' + screen.imgURL + '.webp') + ')'}">
        <div class="instruction-block" id="instruction-block">
            <p>Соотнеси социальные институты и то, какой вклад они вносят в заботу о природе.
            </p>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100"
             :style="'height: calc(100% - ' + this.height + 'px)'">
            <div class="backgroundTaskBodyNewGirl flex-row">
                <div class="d-flex justify-content-center flex-column" style="width: 45%; background: #72A2AE;">
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskNewGirlSocialInstitutions1.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Волонтерство</div>
                            <draggable
                                    @add="error(1)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list1"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskNewGirlSocialInstitutions2.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Государственная дума</div>
                            <draggable
                                    @add="error(2)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list2"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskNewGirlSocialInstitutions3.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Школа</div>
                            <draggable
                                    @add="error(3)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list3"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div style="width: 20%" class="d-flex justify-content-center align-items-center">
                            <img src="../../assets/TaskNewGirlSocialInstitutions4.png" alt="" style="width: 100%">
                        </div>
                        <div style="width: 80%" class="d-flex flex-column align-items-center justify-content-center">
                            <div style="color: white">Наука</div>
                            <draggable
                                    @add="error(4)"
                                    class="list-group list-group-el"
                                    :list="this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list4"
                                    group="listOfAnswersSocialInstitutions"
                            >
                                <template #item="{ element }">
                                    <div>
                                        {{element.value}}
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>

                <draggable
                        class="list-group d-flex flex-column justify-content-center align-items-center"
                        :list="this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions"
                        group="listOfAnswersSocialInstitutions" style="width: 45%"
                >
                    <template #item="{ element }">
                        <div class="list-of-answers" style="width: unset">
                            {{element.value}}
                        </div>
                    </template>
                </draggable>
            </div>
        </div>

        <div class="background-text" id="background-text" style="background: none; justify-content: end;">
            <MyButton class="white-buttons" @click="checkAnswer" v-if="mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list1.length !== 0 ||
            mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list2.length !== 0 || mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list3.length !== 0 ||
            mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list4.length">Готово</MyButton>
            <MyButton class="white-buttons" disabled v-else>Готово</MyButton>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";
    import draggable from "vuedraggable";

    export default {
        name: "TaskSocialInstitutions",
        props: {
            screen: {},
            constTaskNewGirl: {}
        },
        data() {
            return {
                height: 0
            }
        },
        components: {
            draggable
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            error(id) {
                if(this.mainJSON.taskNewGirl["listOfAnswersSocialInstitutions_list" + id].length > 1){
                    this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions.push(this.mainJSON.taskNewGirl["listOfAnswersSocialInstitutions_list" + id][1])
                    this.mainJSON.taskNewGirl["listOfAnswersSocialInstitutions_list" + id].splice(1, 1)
                }
            },
            checkAnswer() {
                screen.isShow = false
                this.mainJSON.taskNewGirl.shownScreenID++
                this.mainJSON.taskNewGirl.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskNewGirl.shownScreenID) {
                        el.isShow = true
                    }
                })
                let results = 0
                if(this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list1.length !== 0){
                    this.mainJSON.taskNewGirl.results.ULSE2_Log1_SEK2_1 = this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list1[0].id
                    if(this.mainJSON.taskNewGirl.results.ULSE2_Log1_SEK2_1 === 1){
                        results++
                    }
                }
                if(this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list2.length !== 0){
                    this.mainJSON.taskNewGirl.results.ULSE2_Log2_SEK2_1 = this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list2[0].id
                    if(this.mainJSON.taskNewGirl.results.ULSE2_Log2_SEK2_1 === 2){
                        results++
                    }
                }
                if(this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list3.length !== 0){
                    this.mainJSON.taskNewGirl.results.ULSE2_Log3_SEK2_1 = this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list3[0].id
                    if(this.mainJSON.taskNewGirl.results.ULSE2_Log3_SEK2_1 === 3){
                        results++
                    }
                }
                if(this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list4.length !== 0){
                    this.mainJSON.taskNewGirl.results.ULSE2_Log4_SEK2_1 = this.mainJSON.taskNewGirl.listOfAnswersSocialInstitutions_list4[0].id
                    if(this.mainJSON.taskNewGirl.results.ULSE2_Log4_SEK2_1 === 4){
                        results++
                    }
                }

                if(results === 4){
                    this.mainJSON.taskNewGirl.results.ULSE2_Score1_SEK2_1 = 1
                }
                else this.mainJSON.taskNewGirl.results.ULSE2_Score1_SEK2_1 = 0

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
.list-of-answers {
    margin: 10px;
    width: 20%;
    background: #d2fff7;
    border-radius: 4px;
    padding: 10px 20px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.list-group-el {
    margin: 20px;
    width: 80%;
    padding: 20px;
    background: #FFFFFF;
    border: 1px dashed #333333;
    border-radius: 4px;
}
</style>
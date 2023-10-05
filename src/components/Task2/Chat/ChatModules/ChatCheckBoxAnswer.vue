<template>
    <div>
        <div>
            <p class="text-bold" style="color: #2A91D6;">Что ответить?</p>
            <p class="text-bold" style="color: #2A91D6;">Выбери один или несколько вариантов ответа.</p>
        </div>

        <div class="form-check" v-for="option in screenConst.answers"
             :key="option.id">
            <input class="form-check-input" type="checkbox" :id=option.id
                   :value=option v-model="this.mainJSON.taskChatFestival.checkBox1Selected"
            />
            <label :for=option.id>{{option.value}}</label>
        </div>
        <MyButton @click="save" style="border-color: #74a2ce" v-if="this.mainJSON.taskChatFestival.checkBox1Selected.length !== 0">Готово</MyButton>
        <MyButton disabled style="border-color: #74a2ce" v-else>Готово</MyButton>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "ChatCheckBoxAnswer",
        props: {
            screenConst: {}
        },
        computed: {
            ...mapGetters(['mainJSON']),
        },
        methods: {
            ...mapMutations(["push_mainJSON"]),
            save() {
                let answersID = []
                this.mainJSON.taskChatFestival.checkBox1Selected.forEach(el => {
                    answersID.push(el.id)
                })
                this.mainJSON.taskChatFestival[this.screenConst.resultIndicator] = this.mainJSON.taskChatFestival.checkBox1Selected
                this.mainJSON.taskChatFestival.results[this.screenConst.resultIndicator] = answersID.join()
                this.mainJSON.taskChatFestival.checkBox1Selected = []

                this.mainJSON.taskChatFestival.shownScreenID++
                this.mainJSON.taskChatFestival.screens.forEach(el => {
                    if (el.id === this.mainJSON.taskChatFestival.shownScreenID) {
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
            },
        }
    }
</script>

<style scoped>

</style>
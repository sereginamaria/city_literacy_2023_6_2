<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskMovingThingsFromBag v-if="screen.isShow && screen.haveTask && screen.taskName === 'MovingThingsFromBag'"
                             :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskChooseShoes v-if="screen.isShow && screen.haveTask && screen.taskName === 'ChooseShoes'"
                             :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TextScreen from "@/components/Task1/TextScreen.vue";
    import TaskMovingThingsFromBag from "@/components/Task1/TaskMovingThingsFromBag.vue";
    import TaskChooseShoes from "@/components/Task1/TaskChooseShoes.vue";
    export default {
        name: "ModelTaskLibraryNight",
        components: {
            TaskChooseShoes,
            TaskMovingThingsFromBag,
            TextScreen
        },
        computed: {
            ...mapGetters(['mainJSON', 'constTaskLibraryNight']),
          screenID(){
            return this.mainJSON.taskLibraryNight.shownScreenID
          },
          screen(){
            return this.mainJSON.taskLibraryNight.screens[this.screenID]
          }
        },
    }
</script>

<style>
  .background {
    height: calc(100vh - 140px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    background-position: center !important;
  }

  .background-text {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 3.79%, rgba(0, 0, 0, 0.72) 12.58%);
    padding: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .background-text-center {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) -116.67%, #FFFFFF 47.55%, rgba(255, 255, 255, 0) 215.22%);
    padding: 20px;
    width: 100%;
    bottom: 50%;
    position: fixed;
}

  .background-text-center p{
    font-weight: bold;
    font-size: 26px;
    color: #333333;
  }

.background-task {
  background: #FFFFFF;
  border: 1px solid #54BEDF;
  width: calc(100%/1.2);
  height: calc(100%/1.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background-text p{
  color: white;
  font-size: 18px;
}

.choosenAnswer {
  background: rgba(84, 190, 223, 0.15);
}

.option-answers-background {
  background: #FFFFFF;
  border: 1px solid #54BEDF;
  left: calc(100%/1.8);
  width: calc(100%/3);
  position: absolute;
  bottom: calc(100%/2.5);
}

.option-answers-border {
  border: 2px solid #54BEDF;
  padding: 10px 20px;
}

.instruction-block {
  margin: auto;
  background: #FFFFFF;
  border: 5px solid #54BEDF;
  width: 70%;
  padding: 20px;
  position: relative;
  z-index: 9;
}

.instruction-block p {
  font-size: 18px;
}

.name-in-dialog {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: white;
}
</style>
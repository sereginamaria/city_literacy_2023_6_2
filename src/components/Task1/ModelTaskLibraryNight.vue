<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskMovingThingsFromBag v-if="screen.isShow && screen.haveTask && screen.taskName === 'MovingThingsFromBag'"
                             :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskChooseShoes v-if="screen.isShow && screen.haveTask && screen.taskName === 'ChooseShoes'"
                     :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskBadWeather v-if="screen.isShow && screen.haveTask && screen.taskName === 'BadWeather'"
                    :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskWarningSigns v-if="screen.isShow && screen.haveTask && screen.taskName === 'WarningSigns'"
                      :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskMetro v-if="screen.isShow && screen.haveTask && screen.taskName === 'Metro'"
               :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskWorkBook v-if="screen.isShow && screen.haveTask && screen.taskName === 'WorkBook'"
                  :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskMuseumPaintings v-if="(screen.taskName === 'MuseumPaintings1' || screen.taskName === 'MuseumPaintings2') &&
                        screen.isShow && screen.haveTask"
                         :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskEscape v-if="screen.isShow && screen.haveTask && screen.taskName === 'Escape'"
                :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskFire v-if="screen.isShow && screen.haveTask && screen.taskName === 'Fire'"
              :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskHooligans  v-if="(screen.taskName === 'Hooligans1' || screen.taskName === 'Hooligans2') &&
                screen.isShow && screen.haveTask"
                 :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskMap v-if="screen.isShow && screen.haveTask && screen.taskName === 'Map'"
             :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskAttractions v-if="screen.isShow && screen.haveTask && screen.taskName === 'Attractions'"
                     :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskFestival v-if="screen.isShow && screen.haveTask && screen.taskName === 'Festival'"
                  :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
    <TaskSites v-if="screen.isShow && screen.haveTask && screen.taskName === 'Sites'"
               :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>


    <TaskWeatherForecast v-if="screen.isShow && screen.haveTask && screen.taskName === 'WeatherForecast'"
                         :screen="screen" :constTaskLibraryNight="constTaskLibraryNight"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TextScreen from "@/components/Task1/TextScreen";
    import TaskMovingThingsFromBag from "@/components/Task1/TaskMovingThingsFromBag";
    import TaskChooseShoes from "@/components/Task1/TaskChooseShoes";
    import TaskMetro from "@/components/Task1/TaskMetro";
    import TaskWorkBook from "@/components/Task1/TaskWorkBook";
    import TaskMuseumPaintings from "@/components/Task1/TaskMuseumPaintings";
    import TaskEscape from "@/components/Task1/TaskEscape";
    import TaskFire from "@/components/Task1/TaskFire";
    import TaskHooligans from "@/components/Task1/TaskHooligans";
    import TaskMap from "@/components/Task1/TaskMap";
    import TaskAttractions from "@/components/Task1/TaskAttractions";
    import TaskFestival from "@/components/Task1/TaskFestival";
    import TaskSites from "@/components/Task1/TaskSites";
    import TaskBadWeather from "@/components/Task1/TaskBadWeather";
    import TaskWarningSigns from "@/components/Task1/TaskWarningSigns";
    import TaskWeatherForecast from "@/components/Task1/TaskWeatherForecast";
    export default {
        name: "ModelTaskLibraryNight",
        components: {
            TaskWeatherForecast,
            TaskWarningSigns,
            TaskBadWeather,
            TaskSites,
            TaskFestival,
            TaskAttractions,
            TaskMap,
            TaskHooligans,
            TaskFire,
            TaskEscape,
            TaskMuseumPaintings,
            TaskWorkBook,
            TaskMetro,
            TaskChooseShoes,
            TaskMovingThingsFromBag,
            TextScreen,
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
  .backgroundTaskLibraryNight {
        height: calc(100vh - 140px);
        backdrop-filter: blur(5px);
        background-size: cover !important;
      background-position: 0 5% !important;
  }

  .backgroundTaskBodyLibraryNight {
      background: #FFFFFF;
      border: 1px solid #54BEDF;
      width: 85%;
      max-height: 85%;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3%;
      backdrop-filter: blur(5px);
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


.name-in-dialog {
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: white;
}
</style>
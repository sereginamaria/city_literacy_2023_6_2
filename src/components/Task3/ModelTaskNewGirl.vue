<template>
    <TextScreen v-if="screen.isShow && !screen.haveTask" :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskWhoIsAVolunteer v-if="screen.isShow && screen.haveTask && screen.taskName === 'WhoIsAVolunteer'"
                         :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskCulturalVolunteers v-if="screen.isShow && screen.haveTask && screen.taskName === 'CulturalVolunteers'"
                            :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskRightsAndObligationsPart1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'RightsAndObligationsPart1'"
                                   :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskRightsAndObligationsPart2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'RightsAndObligationsPart2'"
                                   :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskCardAboutVolunteering v-if="screen.isShow && screen.haveTask && screen.taskName === 'CardAboutVolunteering'"
                               :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskUrbanProblems v-if="screen.isShow && screen.haveTask && screen.taskName === 'UrbanProblems'"
                       :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskElectronicServicesPart1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart1'"
                                 :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskElectronicServicesPart2_1 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart2_1'"
                                   :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskElectronicServicesPart2_2 v-if="screen.isShow && screen.haveTask && screen.taskName === 'ElectronicServicesPart2_2'"
                                   :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskSocialInstitutions v-if="screen.isShow && screen.haveTask && screen.taskName === 'SocialInstitutions'"
                            :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskFlowerbed v-if="screen.isShow && screen.haveTask && screen.taskName === 'Flowerbed'"
                                :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskDuck v-if="screen.isShow && screen.haveTask && screen.taskName === 'Duck'"
                       :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskReusableTableware v-if="screen.isShow && screen.haveTask && screen.taskName === 'ReusableTableware'"
                 :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskSortingGarbage v-if="screen.isShow && screen.haveTask && screen.taskName === 'SortingGarbage'"
                        :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskSortingGarbageLightBulb v-if="screen.isShow && screen.haveTask && screen.taskName === 'TaskSortingGarbageLightBulb'"
                               :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskBusStop v-if="screen.isShow && screen.haveTask && screen.taskName === 'BusStop'"
                           :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskKateFeelsBad v-if="screen.isShow && screen.haveTask && screen.taskName === 'KateFeelsBad'"
                     :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
    <TaskBehaviorOnTheBus v-if="screen.isShow && screen.haveTask && screen.taskName === 'BehaviorOnTheBus'"
                            :screen="screen" :constTaskNewGirl="constTaskNewGirl"/>
</template>

<script>
    import {mapGetters} from "vuex";
    import TaskWhoIsAVolunteer from "@/components/Task3/TaskWhoIsAVolunteer";
    import TextScreen from "@/components/Task3/TextScreen";
    import TaskCardAboutVolunteering from "@/components/Task3/TaskCardAboutVolunteering";
    import TaskRightsAndObligationsPart1 from "@/components/Task3/TaskRightsAndObligationsPart1.vue";
    import TaskRightsAndObligationsPart2 from "@/components/Task3/TaskRightsAndObligationsPart2.vue";
    import TaskSocialInstitutions from "@/components/Task3/TaskSocialInstitutions";
    import TaskCulturalVolunteers from "@/components/Task3/TaskCulturalVolunteers";
    import TaskUrbanProblems from "@/components/Task3/TaskUrbanProblems";
    import TaskElectronicServicesPart2_1 from "@/components/Task3/TaskElectronicServicesPart2_1";
    import TaskElectronicServicesPart2_2 from "@/components/Task3/TaskElectronicServicesPart2_2";
    import TaskElectronicServicesPart1 from "@/components/Task3/TaskElectronicServicesPart1";
    import TaskDuck from "@/components/Task3/TaskDuck";
    import TaskSortingGarbage from "@/components/Task3/TaskSortingGarbage";
    import TaskFlowerbed from "@/components/Task3/TaskFlowerbed";
    import TaskBusStop from "@/components/Task3/TaskBusStop";
    import TaskBehaviorOnTheBus from "@/components/Task3/TaskBehaviorOnTheBus";
    import TaskKateFeelsBad from "@/components/Task3/TaskKateFeelsBad";
    import TaskReusableTableware from "@/components/Task3/TaskReusableTableware";
    import TaskSortingGarbageLightBulb from "@/components/Task3/TaskSortingGarbageLightBulb";
    export default {
        name: "ModelTaskNewGirl",
        components: {
            TaskSortingGarbageLightBulb,
            TaskReusableTableware,
            TaskKateFeelsBad,
            TaskBehaviorOnTheBus,
            TaskBusStop,
            TaskFlowerbed,
            TaskSortingGarbage,
            TaskDuck,
            TaskElectronicServicesPart1,
            TaskElectronicServicesPart2_2,
            TaskElectronicServicesPart2_1,
            TaskUrbanProblems,
            TaskCulturalVolunteers,
            TaskSocialInstitutions,
            TaskRightsAndObligationsPart1,
            TaskRightsAndObligationsPart2,
            TaskCardAboutVolunteering, TextScreen, TaskWhoIsAVolunteer},
        computed: {
            ...mapGetters(['mainJSON', 'constTaskNewGirl']),
            screenID(){
                return this.mainJSON.taskNewGirl.shownScreenID
            },
            screen(){
                return this.mainJSON.taskNewGirl.screens[this.screenID]
            }
        },
    }
</script>

<style>
.backgroundTaskNewGirl {
    height: calc(100vh - 70px);
    backdrop-filter: blur(5px);
    background-size: cover !important;
    background-position: center !important;
}

.backgroundTaskBodyNewGirl {
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
     /*   position: fixed;
        bottom: 0;*/
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

    .list-group-el {
        margin: 20px;
        width: 80%;
        padding: 20px;
        background: #FFFFFF;
        border: 1px dashed #333333;
        border-radius: 4px;
    }

    .electronic_services_part1_img_block {
        display: flex;
        width: 45%;
        height: 45%;
        align-items: center;
        justify-content: center;
    }
    .electronic_services_part1_img_block img{
        height: 100%;
    }
</style>
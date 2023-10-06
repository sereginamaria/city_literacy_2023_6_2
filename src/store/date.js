const date = {
    "login": '',
    "hash": '',
    "loginShow": true,
    "instructionShow": false,
    "mainPageShow": false,
    "pauseShow": false,
    "resultsShow": false,
    "feedbackShow": false,
    "allDone": false,
    "currentPushTime": 0,
    "currentTime": 4200,
    "ret": '',
    "retPush": '',
    "retPause": '',
    "results": {
        "login": null,
        "dataTimeStart": null,
        "dataTimeEndTaskLibraryNight": null,
        "dataTimeEndTask2": null,
        "dataTimeEndTask3": null,
        "dataTimeEnd": null,
        "dataTimeLastUpdate": null
    },
    "listOfTasks": [
        {'name': 'taskLibraryNight', 'done': false},
        {'name': 'taskChatFestival', 'done': false},
        {'name': 'task3', 'done': false}
    ],
    "taskLibraryNight": {
        "results": {
            //1 ChooseBag and Moving things from bag
            "ULSCLL2_Log_SCK1_2": "NA",// todo поразмислыть в контексте state machine
            "ULSCLL2_Score_SCK1_2": "NA",

            //2 Choose shoes
            "ULSCLL2_Log_SCK1_3": "NA",
            "ULSCLL2_Score_SCK1_3": "NA",

            //3 Metro
            "ULSCLL1_Log_SCK2_1": "NA",
            "ULSCLL1_Score_SCK2_1": "NA",

            //4 Workbook
            "ULSCLL1_Log_LLK1_1": "NA",
            "ULSCLL1_Log_LLK1_2": "NA",
            "ULSCLL1_Log_LLK1_3": "NA",
            "ULSCLL1_Log_LLK1_4": "NA",
            "ULSCLL1_Score_LLK1_1": "NA",
            "ULSCLL1_Score_LLK1_2": "NA",
            "ULSCLL1_Score_LLK1_3": "NA",
            "ULSCLL1_Score_LLK1_4": "NA",

            //5 Museum Paintings
            "ULSCLL1_Log_SCK2_2": "NA",
            "ULSCLL1_Log_SCK2_3": "NA",
            "ULSCLL1_Score_SCK2_2": "NA",
            "ULSCLL1_Score_SCK2_3": "NA",

            //6 Escape
            "ULSCLL1_Log_SCS4_1": "NA",
            "ULSCLL1_Score_SCS4_1": "NA",

            //7 Fire
            "ULSCLL1_Log_SCK1_4": "NA",
            "ULSCLL1_Score_SCK1_4": "NA",

            //8 Statue
            "ULSCLL1_Log_SCS4_2": "NA",
            "ULSCLL1_Log_SCS4_3": "NA",
            "ULSCLL1_Score_SCS4_2": "NA",
            "ULSCLL1_Score_SCS4_3": "NA",

            //9 Map
            "ULSCLL1_Log_LLK3_1": "NA",
            "ULSCLL1_Score_LLK3_1": "NA",

            //10 Attractions
            "ULSCLL1_Log_LLK2_1": "NA",
            "ULSCLL1_Score_LLK2_1": "NA",

            //11 Festival
            "ULSCLL1_Log_LLK4_1": "NA",
            "ULSCLL1_Score_LLK4_1": "NA",

            //12 Sites
            "ULSCLL1_Log_LLK5_1": "NA",
            "ULSCLL1_Score_LLK5_1": "NA",

            //13 Bag Weather
            "ULSCLL1_Log_SCK3_1": "NA",
            "ULSCLL1_Score_SCK3_1": "NA",

            //14 Warning Signs
            "ULSCLL1_Log_SCK3_2": "NA",
            "ULSCLL1_Log_SCK3_3": "NA",
            "ULSCLL1_Log_SCK3_4": "NA",
            "ULSCLL1_Log_SCK3_5": "NA",
            "ULSCLL1_Score_SCK3_2": "NA",

            //15 Weather Forecast
            "ULSCLL1_Log_LLK6_1": "NA",
            "ULSCLL1_Log_LLK6_2": "NA",
            "ULSCLL1_Log_LLK6_3": "NA",
            "ULSCLL1_Log_LLK6_4": "NA",
            "ULSCLL1_Score_LLK6_1": "NA",
        },
        "isShow": false,
        "shownScreenID": 0,
        "screens": [
            {"id": 0, "isShow": true, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "Background", "haveTask": true, "taskName": "MovingThingsFromBag",
                "description": 'Перетаскивание вещей'},
            {"id": 2, "isShow": true, "imgURL": "Background", "haveTask": true, "taskName": "ChooseShoes",
                "description": 'Выбор обуви'},
            {"id": 3, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 4, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 5, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
        ],
        //Перетаскивание вещей в рюкзаке
        "listOfElementsStart": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Element2.png",
                "src_dop": "Element2_dop.png",
                "id": 6,
                "style": "width: calc(100%/10); position: absolute; bottom: calc(100%/6); left: calc(100%/25)",
                "style_dop": "rotate: 90deg; width: calc(100%/10); position: absolute; bottom: 0; left: calc(100%/25)",
                "toolTip": "бумажные платочки"
            },
            {
                "src": "Element3.png",
                "src_dop": "Element3.png",
                "id": 1,
                "style": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/5)",
                "style_dop": "width: calc(100%/5); position: absolute; bottom: calc(100%/12); left: calc(100%/1.2)",
                "toolTip": "упаковка леденцов"
            },
            {
                "src": "Element4.png",
                "src_dop": "Element4_dop.png",
                "id": 2,
                "style": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)",
                "style_dop": "width: calc(100%/3); position: absolute; bottom: calc(100%/30); left: calc(100%/2.5)",
                "toolTip": "блокнот"
            },
            {
                "src": "Element5.png",
                "src_dop": "Element5.png",
                "id": 7,
                "style": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "style_dop": "width: calc(100%/4); position: absolute; bottom: calc(100%/30); left: calc(100%/1.34)",
                "toolTip": "зонт-трость"
            },
            {
                "src": "Element6.png",
                "src_dop": "Element6_dop.png",
                "id": 4,
                "style": "width: calc(100%/6); position: absolute; bottom: calc(100%/1.7); left: calc(100%/1.83)",
                "style_dop": "rotate: 90deg; width: calc(100%/6); position: absolute; bottom: 0; left: calc(100%/1.83)",
                "toolTip": "ножницы"
            },
            {
                "src": "Element7.png",
                "src_dop": "Element7_dop.png",
                "id": 3,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.64); left: calc(100%/2.1)",
                "style_dop": "rotate: 90deg; width: 6.5%; position: absolute; bottom: 0; left: calc(100%/2.1)",
                "toolTip": "ручка"
            },
        ],
        "listOfElementsEnd": [],
    },
    "taskChatFestival": {
        "isShow": false,
        "results": {
            //0
            "ULHLDT2_Log_DTS2_1": "NA",
            "ULHLDT2_Score_DTS2_1": "NA",
            //1
            "ULHLDT2_Log_DTS3_1": "NA",
            "ULHLDT2_Score_DTS3_1": "NA",
            //2
            "ULHLDT2_Log_DTS1_2": "NA",
            "ULHLDT2_Score_DTS1_2": "NA",
            //3 новый модуль
            "ULHLDT2_Log_DTS3_2": "NA",
            "ULHLDT2_Score_DTS3_2": "NA",
            //4
            "ULHLDT2_Log_HLS3_1": "NA",
            "ULHLDT2_Score_HLS3_1": "NA",
            //5
            "ULHLDT2_Log_HLS5_1": "NA",
            "ULHLDT2_Score_HLS5_1": "NA",
            //6
            "ULHLDT2_Log_HLK3_1": "NA",
            "ULHLDT2_Score_HLK3_1": "NA",
            //7
            "ULHLDT2_Log_HLK1_1": "NA",
            "ULHLDT2_Score_HLK1_1": "NA",
            //8
            "ULHLDT2_Log_HLK2_1": "NA",
            "ULHLDT2_Score_HLK2_1": "NA",
            //9
            "ULHLDT2_Log_DTS1_1": "NA",
            "ULHLDT2_Score_DTS1_1": "NA",
            //10
            "ULHLDT2_Log_HLS4_2": "NA",
            "ULHLDT2_Score_HLS4_2": "NA",
            //11
            "ULHLDT2_Log_HLS2_1": "NA",
            "ULHLDT2_Score_HLS2_1": "NA",
            //12
            "ULHLDT2_Log_HLK2_2": "NA",
            "ULHLDT2_Score_HLK2_2": "NA",
            //13
            "ULHLDT2_Log_DTS2_2": "NA",
            "ULHLDT2_Score_DTS2_2": "NA",
            //14новый модуль
            "ULHLDT2_Log_HLK4_1": "NA",
            "ULHLDT2_Score_HLK4_1": "NA",
            //15
            "ULHLDT2_Log_DTK1_1": "NA",
            "ULHLDT2_Score_DTK1_1": "NA",
            //16
            "ULHLDT2_Log_HLS1_1": "NA",
            "ULHLDT2_Score_HLS1_1": "NA",
            //17
            "ULHLDT2_Log_HLS4_1": "NA",
            "ULHLDT2_Score_HLS4_1": "NA",
        },
        "ULHLDT2_Log_DTS2_1": "NA",
        //1
        "ULHLDT2_Log_DTS3_1": "NA",
        //2
        "ULHLDT2_Log_DTS1_2": "NA",
        //3
        "ULHLDT2_Log_HLS3_1": "NA",
        //4
        "ULHLDT2_Log_HLS5_1": "NA",
        //5
        "ULHLDT2_Log_HLK3_1": "NA",
        //6
        "ULHLDT2_Log_HLK1_1": "NA",
        //7
        "ULHLDT2_Log_HLK2_1": "NA",
        //8
        "ULHLDT2_Log_DTS1_1": "NA",
        //9
        "ULHLDT2_Log_HLS4_2": "NA",
        //10
        "ULHLDT2_Log_HLS2_1": "NA",
        //11
        "ULHLDT2_Log_HLK2_2": "NA",
        //12
        "ULHLDT2_Log_DTS2_2": "NA",
        //13
        "ULHLDT2_Log_DTK1_1": "NA",
        //14
        "ULHLDT2_Log_HLS1_1": "NA",
        //15
        "ULHLDT2_Log_HLS4_1": "NA",
        "shownScreenID": 0,
        "screens": [
            {
                "id": 0, "type": "radio", "isShow": true, "haveImg": true,
                "description": ""
            },
            {
                "id": 1, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 2, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 3, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 4, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 5, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 6, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 7, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 8, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 9, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 10, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 11, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 12, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 13, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 14, "type": "checkBox", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 15, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 16, "type": "radio", "isShow": false, "haveImg": false,
                "description": ""
            },
            {
                "id": 17, "type": "radio", "isShow": false, "haveImg": true,
                "description": ""
            },
            {
                "id": 18, "type": "end", "isShow": false, "haveImg": false,
                "description": ""
            },

        ],
        "chatShow": true,
        "checkBox1Selected": [],
        "height": '98%',
        "width": '70%',
        "left": 100,
        "top": 0
    },
    "task3": {
        "isShow": false,
        "results": {
        },
        "shownScreenID": 0,
        "screens": [],
    },
    "forms": {
        "results": {
            //1
            "ULSE_SEA1_1": "NA",
            "ULSE_SEA1_2": "NA",
            "ULSE_SEA1_3": "NA",
            "ULSE_SEA1_4": "NA",
            //2
            "ULSE_SEA3_1": "NA",
            "ULSE_SEA3_2": "NA",
            "ULSE_SEA3_3": "NA",
            "ULSE_SEA3_4": "NA",
            //3
            "ULSE_SEA4_1": "NA",
            "ULSE_SEA4_2": "NA",
            "ULSE_SEA4_3": "NA",
            "ULSE_SEA4_4": "NA",
            //4
            "ULSE_SEA2_1": "NA",
            "ULSE_SEA2_2": "NA",
            "ULSE_SEA2_3": "NA",
            "ULSE_SEA2_4": "NA",
            //5
            "ULSE_SEA5_0": "NA",
            "ULSE_SEA5_1": "NA",
            "ULSE_SEA5_2": "NA",
            "ULSE_SEA5_3": "NA",
            "ULSE_SEA5_4": "NA",
            //6
            "ULSC_SCA1_1": "NA",
            "ULSC_SCA1_2": "NA",
            "ULSC_SCA1_3": "NA",
            "ULSC_SCA1_4": "NA",
            //7
            "ULSC_SCA2_1": "NA",
            "ULSC_SCA2_2": "NA",
            "ULSC_SCA2_3": "NA",
            "ULSC_SCA2_4": "NA",
            //8
            "ULSC_SCA3_1": "NA",
            "ULSC_SCA3_2": "NA",
            "ULSC_SCA3_3": "NA",
            "ULSC_SCA3_4": "NA",
            //9
            "ULSC_SCA4_1": "NA",
            "ULSC_SCA4_2": "NA",
            "ULSC_SCA4_3": "NA",
            "ULSC_SCA4_4": "NA",
            //10
            "ULLL_LLA6_1": "NA",
            "ULLL_LLA6_2": "NA",
            "ULLL_LLA6_3": "NA",
            "ULLL_LLA6_4": "NA",
            //11
            "ULLL_LLA7_1": "NA",
            "ULLL_LLA7_2": "NA",
            "ULLL_LLA7_3": "NA",
            "ULLL_LLA7_4": "NA",
            "ULLL_LLA7_5": "NA",
            "ULLL_LLA7_6": "NA",
            "ULLL_LLA7_7": "NA",
            "ULLL_LLA7_8": "NA",
            "ULLL_LLA7_9": "NA",
            //12
            "ULLL_LLA8_1": "NA",
            "ULLL_LLA8_2": "NA",
            "ULLL_LLA8_3": "NA",
            "ULLL_LLA8_4": "NA",
            "ULLL_LLA8_5": "NA",
            "ULLL_LLA8_6": "NA",
            "ULLL_LLA8_7": "NA",
            //13
            "ULHL_HLA1_1": "NA",
            "ULHL_HLA1_2": "NA",
            "ULHL_HLA1_3": "NA",
            "ULHL_HLA1_4": "NA",
            "ULHL_HLA1_5": "NA",
            "ULHL_HLA1_6": "NA",
            "ULHL_HLA1_7": "NA",
            "ULHL_HLA1_8": "NA",
            //14
            "ULDT_DTA1_1": "NA",
            "ULDT_DTA1_2": "NA",
            "ULDT_DTA1_3": "NA",
            "ULDT_DTA1_4": "NA",
            "ULDT_DTA1_5": "NA",
            "ULDT_DTA1_6": "NA"
        },
        "isShow": false,
        "modelShow": true,
        "shownFormID": 1,
        "height": '80%',
        "width": '70%',
        "left": 100,
        "top": 20
    }
}

export default {
    date
}
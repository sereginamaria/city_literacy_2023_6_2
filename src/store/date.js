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
            {"id": 0, "isShow": true, "imgURL": "TaskLibraryNightMovingThingsFromBagKate", "haveTask": false,
                "description": ''},
            {"id": 1, "isShow": false, "imgURL": "TaskLibraryNightMovingThingsFromBag", "haveTask": true, "taskName": "MovingThingsFromBag",
                "description": 'Перетаскивание вещей'},

            {"id": 2, "isShow": false, "imgURL": "TaskLibraryNightChooseShoesKate", "haveTask": false,
                "description": ''},
            {"id": 3, "isShow": true, "imgURL": "TaskLibraryNightChooseShoеs", "haveTask": true, "taskName": "ChooseShoes",
                "description": 'Выбор обуви'},

            {"id": 4, "isShow": false, "imgURL": "TaskLibraryNightBadWeather", "haveTask": false,
                "description": ''},
            {"id": 5, "isShow": false, "imgURL": "TaskLibraryNightBagWeatherKate", "haveTask": false,
                "description": ''},
            {"id": 6, "isShow": false, "imgURL": "TaskLibraryNightBadWeather0", "haveTask": true, "taskName": "BadWeather",
                "description": 'Плохая погода (и 4 раза фон меняется)'},

            {"id": 7, "isShow": false, "imgURL": "TaskLibraryNightWarningSignsKate", "haveTask": false,
                "description": ''},
            {"id": 8, "isShow": false, "imgURL": "TaskLibraryNightWarningSignsKate", "haveTask": true, "taskName": "WarningSigns",
                "description": 'Предупреждающие знаки'},

            {"id": 9, "isShow": false, "imgURL": "TaskLibraryNightMetro", "haveTask": false,
                "description": ''},
            {"id": 10, "isShow": false, "imgURL": "TaskLibraryNightMetroKate1", "haveTask": false,
                "description": ''},
            {"id": 11, "isShow": false, "imgURL": "TaskLibraryNightMetroKate2", "haveTask": false,
                "description": ''},
            {"id": 12, "isShow": false, "imgURL": "TaskLibraryNightMetroKate3", "haveTask": true, "taskName": "Metro",
                "description": 'Метро'},

            {"id": 13, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 14, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 15, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 16, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 17, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 18, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 19, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 20, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 21, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 22, "isShow": false, "imgURL": "BackgroundModule20", "haveTask": true, "taskName": "MuseumPaintings1",
                "description": 'Картины'},
            {"id": 23, "isShow": false, "imgURL": "BackgroundModule21", "haveTask": true, "taskName": "MuseumPaintings2",
                "description": 'Картины'},

            {"id": 24, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 25, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 26, "isShow": false, "imgURL": "BackgroundModule14", "haveTask": true, "taskName": "WorkBook",
                "description": 'Раюочая тетрадь'},

            {"id": 27, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 28, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 29, "isShow": false, "imgURL": "BackgroundModule37", "haveTask": true, "taskName": "Statue1",
                "description": 'Статуя'},
            {"id": 30, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 31, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 32, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 33, "isShow": false, "imgURL": "BackgroundModule41", "haveTask": true, "taskName": "Statue2",
                "description": 'Вторая статуя'},

            {"id": 34, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 35, "isShow": false, "imgURL": "BackgroundModule25", "haveTask": true, "taskName": "Escape",
                "description": 'Побег'},

            {"id": 36, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 37, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 38, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 39, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 40, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 41, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},

            {"id": 42, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 43, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 44, "isShow": false, "imgURL": "BackgroundModule44", "haveTask": true, "taskName": "Map",
                "description": 'Карта'},

            {"id": 45, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 46, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 47, "isShow": false, "imgURL": "BackgroundModule34", "haveTask": true, "taskName": "Fire",
                "description": 'Пожар'},

            {"id": 48, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 49, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 50, "isShow": false, "imgURL": "BackgroundModule46", "haveTask": true, "taskName": "Attractions",
                "description": 'Достопримечательности'},

            {"id": 51, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 52, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 53, "isShow": false, "imgURL": "BackgroundModule50", "haveTask": true, "taskName": "Festival",
                "description": 'Фестиваль'},

            {"id": 54, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 55, "isShow": false, "imgURL": "BackgroundModule52", "haveTask": true, "taskName": "Sites",
                "description": 'Сайты'},

            {"id": 56, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 57, "isShow": false, "imgURL": "Background", "haveTask": false,
                "description": ''},
            {"id": 58, "isShow": false, "imgURL": "BackgroundModule64", "haveTask": true, "taskName": "WeatherForecast",
                "description": 'Прогноз погоды'},

            {"id": 59, "isShow": false, "imgURL": "Background", "haveTask": false,
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
        //Задание рабочая тетрадь
        "modularTask1_14Show": false,
        //Картинки ко второму вопросу
        "modularTask1_15Show": false,
        //Картинки к третьему вопросу
        "modularTask1_16Show": false,
        //Картинки к четвертому вопросу
        "modularTask1_17Show": false,
        "ULSCLL1_Log_LLK1_1": "NA",
        "ULSCLL1_Log_LLK1_2": "NA",
        "ULSCLL1_Log_LLK1_3": "NA",
        "ULSCLL1_Log_LLK1_4": "NA",

        //Задание 9 задание
        "listOfElementsTask9": [  // todo контекстуальные стили? подумать про state machine
            {
                "src": "Stiker1.png",
                "name": "Парк Таганай",
                "id": 1,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/6.8); left: calc(100%/4)"
            },
            {
                "src": "Stiker3.png",
                "name": "Красная Площадь",
                "id": 3,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.95); left: calc(100%/2.1)"
            },
            {
                "src": "Stiker4.png",
                "name": "Кремль",
                "id": 4,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/2.4); left: calc(100%/2.25)"
            },
            {
                "src": "Stiker5.png",
                "name": "Патриаршие пруды",
                "id": 5,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.65); left: calc(100%/3)"
            },
            {
                "src": "Stiker6.png",
                "name": "Тверская улица",
                "id": 6,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.65); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker7.png",
                "name": "Садовое кольцо",
                "id": 7,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.3); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker8.png",
                "name": "Бульварное кольцо",
                "id": 8,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.5); left: calc(100%/2)"
            },
            {
                "src": "Stiker9.png",
                "name": "Река Ока",
                "id": 9,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/7); left: calc(100%/1.32)"
            },
            {
                "src": "Stiker10.png",
                "name": "Река Яуза",
                "id": 10,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.4)"
            },
            {
                "src": "Stiker11.png",
                "name": "Чистые пруды",
                "id": 11,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/1.8); left: calc(100%/1.7)"
            },
            {
                "src": "Stiker12.png",
                "name": "Парк Зарядье",
                "id": 12,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/2.4); left: calc(100%/2)"
            },
            {
                "src": "Stiker13.png",
                "name": "Парк Горького",
                "id": 13,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: calc(100%/4.7); left: calc(100%/2.4)"
            },
            {
                "src": "Stiker14.png",
                "name": "Москва Река",
                "id": 14,
                "choose": false,
                "style": "width: 6.5%; position: absolute; bottom: 35%; left: 60%"
            },
        ],
        "listOfAnswersTask9": [],

        //Задание 10 задание
        "listOfElementsTask10": [
            {
                "id": 1,
                "value": "Московский Кремль"
            },
            {
                "id": 2,
                "value": "ВДНХ"
            },
            {
                "id": 4,
                "value": "Большой театр"
            },
            {
                "id": 5,
                "value": "Московский зоопарк"
            },
            {
                "id": 6,
                "value": "Государственный исторический музей"
            },
            {
                "id": 7,
                "value": "Государственная Третьяковская галерея"
            },
            {
                "id": 8,
                "value": "Парк Горького"
            },
        ],
        "listOfAnswersTask10_1": [],
        "listOfAnswersTask10_2": [],
        "listOfAnswersTask10_3": [],
        "listOfAnswersTask10": [],


        //Задание 12 задание
        "listOfAnswersTask12": [
            {
                "name": "Культура Москвы Онлайн",
                "link": "https://www.mos.ru/city/projects/kulturaonline",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Мероприятия и события в Москве",
                "link": "https://mos-holidays.ru/news/",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Узнай Москву",
                "link": "https://um.mos.ru",
                "id": 3,
                "choose": false,
            }, {
                "name": "Яндекс.Афиша: Куда сходить в Москве",
                "link": "https://afisha.yandex.ru/moscow",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTask12": [],

        //Задание 13 задание
        "listOfAnswersTaskBadWeather": [
            {
                "name": "Спрятаться у ларька с мороженым.",
                "id": 1,
                "choose": false,
            },
            {
                "name": "Подождать под большим деревом, пока пройдет гроза.",
                "id": 2,
                "choose": false,
            },
            {
                "name": "Спрятаться в беседке возле прудов.",
                "id": 3,
                "choose": false,
            }, {
                "name": "Зайти в ближайший магазин.",
                "id": 4,
                "choose": false,
            },
        ],
        "listOfChoosenAnswersTaskBadWeather": [],

        //Задание 14 задание
        "listOfAnswersTaskWarningSigns": [
            {
                "src": "task14EL1.png",
                "id": 1,
            },
            {
                "src": "task14EL2.png",
                "id": 2,
            },
            {
                "src": "task14EL3.png",
                "id": 3,
            },
            {
                "src": "task14EL4.png",
                "id": 4,
            },
            {
                "src": "task14EL5.png",
                "id": 5,
            },
            {
                "src": "task14EL6.png",
                "id": 6,
            },
            {
                "src": "task14EL7.png",
                "id": 7,
            },
            {
                "src": "task14EL8.png",
                "id": 8,
            },
        ],
        "listOfAnswersTaskWarningSigns_1": [],
        "listOfAnswersTaskWarningSigns_2": [],
        "listOfAnswersTaskWarningSigns_3": [],
        "listOfAnswersTaskWarningSigns_4": [],

        //Задание 15 задание
        "listOfAnswersTask15": [
            {
                "id": 4,
                "value": "Попасть на экскурсию в Музей космонавтики"
            },
            {
                "id": 1,
                "value": "Погулять на улице в Парке Сокольники"
            },
            {
                "id": 2,
                "value": "Посетить Планетарий Москвы"
            },
            {
                "id": 3,
                "value": "Покормить птиц в Московском зоопарке"
            },
        ],
        "listOfAnswersTask15_1": [],
        "listOfAnswersTask15_2": [],
        "listOfAnswersTask15_3": [],
        "listOfAnswersTask15_4": [],
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
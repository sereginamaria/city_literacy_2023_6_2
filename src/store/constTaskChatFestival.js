const constTaskChatFestival = {
    "instruction": "Ты сейчас окажешься в чате с друзьями из разных школ. Вы собираетесь посетить Фестиваль городских развлечений. Обсудите планы на сегодняшний день.",
    "screens": [
        {
            "id": 0,
            "resultIndicator": "ULHLDT2_Log_DTS2_1",
            "message": [
                {"name": "Настя", "text": "Всем привет! Есть планы на сегодня?"},
                {"name": "Даша", "text": "Привет. Сегодня воскресенье, так что никаких планов. Может сходим куда-нибудь? 🙂"},
                {"name": "Серёжа", "text": "Ребята, привет! Давайте посмотрим в интернете, куда сходить. Наверняка найдем что-то интересное. Какую ссылку мне лучше открыть?"}
            ],
            "src": "TaskChatFestivalAttractions",
            "answers": [
                {
                    "id": 1,
                    "value": "Самые популярные достопримечательности России."
                },
                {
                    "id": 2,
                    "value": "Отдых и развлечения в городе сегодня."
                },
                {
                    "id": 3,
                    "value": "Куда сходить с родителями, если скучно."
                },
                {
                    "id": 4,
                    "value": "Последние новости города."
                }
            ]
        },
        {
            "id": 1,
            "resultIndicator": "ULHLDT2_Log_DTS3_1",
            "message": [
                {"name": "Серёжа", "text": "Я перешёл по ссылке, теперь вижу вот такое сообщение. Что мне делать? 🤔"},
            ],
            "src": "TaskChatFestivalMessage",
            "answers": [
                {
                    "id": 1,
                    "value": "Попробуй открыть, найдешь бесплатную информацию про мероприятия."
                },
                {
                    "id": 2,
                    "value": "Лучше не нажимай - это может быть вредоносная страница."
                },
                {
                    "id": 3,
                    "value": "Скинь эту страницу в чат, так мы получим четыре билета по цене двух."
                },
                {
                    "id": 4,
                    "value": "Нажимай, иначе не узнать, что там."
                }
            ]
        },
        {
            "id": 2,
            "resultIndicator": "ULHLDT2_Log_DTS1_2",
            "message": [
                {"name": "Настя", "text": "Я уже посмотрела в интернете и нашла, что сегодня в парке рядом с нами проходит фестиваль городских развлечений."},
                {"name": "Даша", "text": "Мне говорили, что там круто! Но много желающих и огромные очереди в кассу..."},
                {"name": "Серёжа", "text": "Может есть какой-то другой вариант приобрести билет?"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Если люди стоят в очереди, значит, другого варианта нет."
                },
                {
                    "id": 2,
                    "value": "Можем постоять в очереди, мы никуда не торопимся. "
                },
                {
                    "id": 3,
                    "value": "Давайте зайдем на официальный сайт и зарегистрируемся."
                },
                {
                    "id": 4,
                    "value": "Давайте пойдем вечером, когда очереди уже не будет."
                }
            ]
        },
        {
            "id": 3,
            "resultIndicator": "ULHLDT2_Log_DTS3_2",
            "message": [
                {"name": "Серёжа", "text": "Я зашел на сайт фестиваля, регистрация открыта, но там много всего надо ввести. " +
                        "Вот скриншот с сайта. Как думаете, заполнять ли всю информацию?"}
            ],
            "src": "TaskChatFestivalRegistrationForm",
            "answers": [
                {
                    "id": 1,
                    "value": "Заполняй все поля, чтобы точно пройти без очереди."
                },
                {
                    "id": 2,
                    "value": "Можешь ввести мои данные, если ты сомневаешься в безопасности сайта."
                },
                {
                    "id": 3,
                    "value": "Лучше не использовать этот сайт, тут запрашивают очень много личной информации."
                },
                {
                    "id": 4,
                    "value": "Заполни только обязательную информацию со звездочкой."
                }
            ]
        },
        {
            "id": 4,
            "resultIndicator": "ULHLDT2_Log_HLS3_1",
            "message": [
                {"name": "Серёжа", "text": "Еще на сайте сказано, что везде на фестивале рекомендуют дезинфицировать руки. Как думаете, зачем это надо?"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Чтобы на фестивале все было стерильно."
                },
                {
                    "id": 2,
                    "value": "Хмм.. По-моему, это странная рекомендация."
                },
                {
                    "id": 3,
                    "value": "Для удаления микробов и бактерий с рук."
                },
                {
                    "id": 4,
                    "value": "Это нужно только тем, кто недавно болел."
                }
            ]
        },
        {
            "id": 5,
            "resultIndicator": "ULHLDT2_Log_HLS5_1",
            "message": [
                {"name": "Серёжа", "text": "Я зарегистрировал нас на фестиваль. Теперь сможем не стоять в очереди в кассу."},
                {"name": "Настя", "text": "Отлично! А я нашла программу фестиваля, здесь много интересного. " +
                        "Давайте займемся чем-нибудь физически активным, чтобы совместить приятное с полезным! 💪"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Лучше пойдем на викторину, там еще как придется попотеть."
                },
                {
                    "id": 2,
                    "value": "Давайте возьмем ролики и покатаемся на специальной площадке."
                },
                {
                    "id": 3,
                    "value": "Давайте погуляем по территории фестиваля, пока тепло."
                },
                {
                    "id": 4,
                    "value": "Пойдем прокатимся на колесе обозрения."
                }
            ]
        },
        {
            "id": 6,
            "resultIndicator": "ULHLDT2_Log_HLK3_1",
            "message": [
                {"name": "Настя", "text": "Давайте покатаемся на роликах до начала фестиваля. Я знаю неплохое место на парковке в торговом центре. Что думаете?"},
            ],
            "src": "TaskChatFestivalParking",
            "answers": [
                {
                    "id": 1,
                    "value": "Можно покататься, только там, где машин будет меньше всего."
                },
                {
                    "id": 2,
                    "value": "Давайте не пойдем туда, где нет оборудованного места для катания."
                },
                {
                    "id": 3,
                    "value": "Думаю не стоит, на нас будут ругаться охранники."
                },
                {
                    "id": 4,
                    "value": "Там хороший асфальт и почти нет машин, поэтому можем покататься."
                }
            ]
        },
        {
            "id": 7,
            "resultIndicator": "ULHLDT2_Log_HLK1_1",
            "message": [
                {"name": "Даша", "text": "Я не особо люблю кататься на роликах.. Можно как-то по-другому поддерживать физическую активность?"},
            ],
            "message_dop": [
                {"name": "Даша", "text": "Не стоит кататься в необорудованном месте на парковке, там могут быть машины."},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Посещать спортивную секцию в школе."
                },
                {
                    "id": 2,
                    "value": "Купить продукты для роста мышц."
                },
                {
                    "id": 3,
                    "value": "Подписаться в социальных сетях на спортивных блогеров."
                },
                {
                    "id": 4,
                    "value": "Заниматься спортом 2-3 раза в неделю."
                }
            ]
        },
        {
            "id": 8,
            "resultIndicator": "ULHLDT2_Log_HLK2_1",
            "message": [
                {"name": "Серёжа", "text": "А я вообще не понимаю, почему все говорят, что надо регулярно заниматься физическими упражнениями. Как вы думаете, зачем это нужно?"}
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Насытить организм полезными минералами."
                },
                {
                    "id": 2,
                    "value": "Чтобы наладить правильное питание."
                },
                {
                    "id": 3,
                    "value": "Для снижения риска развития некоторых болезней."
                },
                {
                    "id": 4,
                    "value": "Для повышения качества и продолжительности сна."
                }
            ]
        },
        {
            "id": 9,
            "resultIndicator": "ULHLDT2_Log_DTS1_1",
            "message": [
                {"name": "Настя", "text": "Тогда можем просто погулять на территории фестиваля. Нам на ОБЖ говорили, " +
                        "что для здоровья нужно много ходить! Оказывается, дневная норма для нашего возраста - шесть тысяч шагов. Как узнать количество своих шагов в день?"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Считать шаги про себя, пока гуляешь."
                },
                {
                    "id": 2,
                    "value": "Смотреть на картах, какое расстояние ты проходишь, и умножать на 1,2."
                },
                {
                    "id": 3,
                    "value": "С помощью фитнес-браслета."
                },
                {
                    "id": 4,
                    "value": "Посчитать количество шагов в час и умножить на 16 часов."
                }
            ]
        },
        {
            "id": 10,
            "resultIndicator": "ULHLDT2_Log_HLS4_2",
            "message": [
                {"name": "Даша", "text": "Ребята, если мы будем на фестивале весь день, то нам точно захочется пить. Предлагаю взять напитки. Что лучше всего утолит жажду?"}
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Пакетированный фруктовый сок."
                },
                {
                    "id": 2,
                    "value": "Негазированная вода."
                },
                {
                    "id": 3,
                    "value": "Горячий чай с медом в термосе."
                },
                {
                    "id": 4,
                    "value": "Сладкий компот из смородины."
                }
            ]
        },
        {
            "id": 11,
            "resultIndicator": "ULHLDT2_Log_HLS2_1",
            "message": [
                {"name": "Даша", "text": "Вечером на фестивале пройдет концерт! Мои родители будут на нем и зовут к ним присоединиться."},
                {"name": "Серёжа", "text": "Концерт поздно закончится, а я не сделал домашнее задание на завтра… И вчера поздно лег спать."},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Давайте сходим на концерт, а домашнее задание сделаешь ночью."
                },
                {
                    "id": 2,
                    "value": "Сходим на концерт в другой раз, чтобы вечером сделать уроки и лечь спать вовремя."
                },
                {
                    "id": 3,
                    "value": "Если ты вчера поздно лег, то и сегодня можно, организм уже перестроился."
                },
                {
                    "id": 4,
                    "value": "Учеба важнее всего, не пойдем на концерт!"
                }
            ]
        },
        {
            "id": 12,
            "resultIndicator": "ULHLDT2_Log_HLK2_2",
            "message": [
                {"name": "Даша", "text": "Я часто ложусь спать поздно и чувствую себя нормально!"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Если все время мало спать, то ухудшится внимание и станет сложнее учиться."
                },
                {
                    "id": 2,
                    "value": "Пока организм молодой и сильный, можно спать всего несколько часов в сутки."
                },
                {
                    "id": 3,
                    "value": "Хорошо тебе! Тебе разрешают поздно ложиться спать."
                },
                {
                    "id": 4,
                    "value": "Собьешь свой режим сна – 100% заболеешь."
                }
            ]
        },
        {
            "id": 13,
            "resultIndicator": "ULHLDT2_Log_DTS2_2",
            "message": [
                {"name": "Настя", "text": "Я люблю концерты, но обычно на фестивалях много людей и почти не видно сцену :("},
                {"name": "Серёжа", "text": "Еще на фестивале будут квесты. Вот расписание. Какой из этих квестов нам подойдет?"},
            ],
            "src": "TaskChatFestivalQuest",
            "answers": [
                {
                    "id": 1,
                    "value": "Дом дружбы"
                },
                {
                    "id": 2,
                    "value": "В тридевятом царстве"
                },
                {
                    "id": 3,
                    "value": "Космическое путешествие"
                },
                {
                    "id": 4,
                    "value": "Страшные сказки"
                }
            ]
        },
        {
            "id": 14,
            "resultIndicator": "ULHLDT2_Log_HLK4_1",
            "message": [
                {"name": "Настя", "text": "Ладно, давайте уже выходить, а то опоздаем к началу фестиваля."},
                {"name": "Серёжа", "text": "Можем встретиться у меня во дворе, я проведу вас коротким путем через промзону? " +
                        "По пути не будет пешеходного перехода через дорогу, но и машин практически не бывает."},
            ],
            "message_dop": [
                {"name": "Даша", "text": "Мне говорили, что на квесте “Космическое путешествие” круто!"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Не уверен, что этот маршрут безопасный, там нет пешеходного перехода или светофора."
                },
                {
                    "id": 2,
                    "value": "Хорошо, что ты там уже ходил. Покажешь нам путь."
                },
                {
                    "id": 3,
                    "value": "Идти через промзону опасно, можно надышаться пылью."
                },
                {
                    "id": 4,
                    "value": "Не важно, как идти, главное, что вместе."
                }
            ]
        },
        {
            "id": 15,
            "resultIndicator": "ULHLDT2_Log_DTK1_1",
            "message": [
                {"name": "Даша", "text": "Давайте тогда выберем другой путь. Какой сайт или приложение поможет нам построить маршрут для пешей прогулки?"},
            ],
            "message_dop": [
                {"name": "Настя", "text": "Я не пойду через промзону. К тому же перебегать дорогу небезопасно. 😬"},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Официальный сайт Департамента транспорта."
                },
                {
                    "id": 2,
                    "value": "Приложение с онлайн картой города."
                },
                {
                    "id": 3,
                    "value": "Сайт с картой маршрутов транспорта нашего города."
                },
                {
                    "id": 4,
                    "value": "Приложения с экскурсионными маршрутами."
                }
            ]
        },
        {
            "id": 16,
            "resultIndicator": "ULHLDT2_Log_HLS1_1",
            "message": [
                {"name": "Настя", "text": "Я нашла подходящий маршрут в приложении. Готова выходить. 🙃"},
                {"name": "Даша", "text": "Ребята, давайте выйдем чуть позже. Я еще не успела пообедать. :("},
            ],
            "src": "",
            "answers": [
                {
                    "id": 1,
                    "value": "Съешь больше на ужин, ничего страшного."
                },
                {
                    "id": 2,
                    "value": "Иногда пропустить обед полезно."
                },
                {
                    "id": 3,
                    "value": "Поешь во время фестиваля, там много кафе."
                },
                {
                    "id": 4,
                    "value": "Можешь съесть карамельку - это уменьшит чувство голода."
                }
            ]
        },
        {
            "id": 17,
            "resultIndicator": "ULHLDT2_Log_HLS4_1",
            "message": [
                {"name": "Настя", "text": "На фестивале есть кафе с готовыми обедами, можешь выбрать из них."},
                {"name": "Даша", "text": "Я хочу взять что-то полезное. Что посоветуете выбрать?"},
            ],
            "src": "TaskChatFestivalMenu",
            "answers": [
                {
                    "id": 1,
                    "value": "Обед №1"
                },
                {
                    "id": 2,
                    "value": "Обед №2"
                },
                {
                    "id": 3,
                    "value": "Обед №3"
                },
                {
                    "id": 4,
                    "value": "Обед №4"
                }
            ]
        },
        {
            "id": 18,
            "resultIndicator": "",
            "src": "",
            "message": [
                {"name": "Даша", "text": "Спасибо, что помогли определиться. Теперь я готова выходить."},
                {"name": "Настя", "text": "Супер! Я тоже.💫"},
                {"name": "Серёжа", "text": "До встречи на фестивале! :)"},
            ],
            "answers": [
                {
                    "id": 1,
                    "value": "Завершить"
                }
            ]
        },
    ]
}

export default {
    constTaskChatFestival
}
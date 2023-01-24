/** Тестовые пакеты вопросов.
 * Используются для проверки работы приложения.
 * Вы можете сыграть тестовый пакет без подключения к серверам Nastybits
 */
export default [
  {
    ID: 1,
    Name: "Тестовое имя пакета вопросов для администратора",
    Title: "Тестовый пакет вопросов",
    Description: "Описание тестового пакета вопросов",
    Author: "Nastybits",
    Questions: [
      {
        Text: "Попытки научить обезьян говорить Сти́вен Пи́нкер сравнил с попытками заставить розданного вам зверька поднимать предметы ноздрями лишь на том основании, что он — ближайший родственник ИХ?",
        Wording: "Назовите ИХ.",
        Answer: { Text: "Слонов." },
        Comment: "Похожий на морскую свинку полуметровый дама́н — ближайший родственник слона. Пинкер уподобил язык человека хоботу — уникальному органу, аналогов которому нет ни у кого из современных животных. По словам Пинкера, если бы специалисты носились с хоботом так же, как с языком, они бы пытались найти хобот у дамана на основании того, что у него есть ноздри.",
        Time: 60,
        Img: "daman.png",
        Author: "Some author"
      },
      {
        Text: "По мнению Дарьи Хитро́вой, адаптируя фильм для разных условий, режиссёр в некоторых случаях может пожертвовать его развязкой.",
        Wording: "Чей анатомии Хитрова уподобила структуру фильма?",
        Answer: { Text: "Ящерица" },
        Comment: "По мнению Хитровой, концовка фильма подобна хвосту ящерицы — в случае чего можно отбросить её и отрастить новую, ещё лучше.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Зы́бка — это подвесная колыбель. Несмотря на то, что она раскачивается из стороны в сторону, деревенская старушка, рассказывая о посещении города, назвала зыбкой ЕГО.",
        Wording: "Назовите ЕГО одним словом.",
        Answer: { Text: "Лифт" },
        Comment: "Видимо, подобрать слово для подвесной штуки, которая движется туда-сюда, старушке было нелегко, поэтому, рассказывая о своих впечатлениях от посещения Ленинграда, она вспоминала, как каталась там в зыбке.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Британский учёный Джон Хо́лдейн, которого отец часто брал с собой в шахту, в детстве едва не погиб из-за скопления метана. Позже он приобрёл склонность, из-за которой его знакомые боялись находиться с ним рядом.",
        Wording: "Догадавшись, кого в рассказе об этом вспомнил Билл Ме́слер, назовите день и месяц рождения Холдейна.",
        Answer: { Text: "5 ноября." },
        Comment: "Холдейн был пирома́ном — например, любил держать в карманах одновременно спички и взрывчатку, из-за чего знакомые следили за ним с осторожностью и страхом. Неизвестно, что повлияло на склонность Холдейна к огню: травмирующий детский опыт с метаном или дата рождения, совпадающая с днём Гая Фокса, пытавшегося взорвать английский парламент. Слово «вспомнил» в тексте вопроса — подсказка, отсылающая к английскому стишку «Remember, remember the fifth of November!»",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Предпринимателя Джона Те́мплтона огорчало, что многие забывают о духовном поиске, который тоже способствует прогрессу. В появившемся полвека назад документе особо оговорено, что ОНА Темплтона должна быть больше, чем ТАКАЯ ОНА.",
        Wording: "Назовите ТАКУЮ ЕЁ.",
        Answer: { Text: "Но́белевская премия." },
        Comment: "Премия Темплтона с 1972 года вручается за успехи и открытия в духовной жизни, при этом получить её может человек любого вероисповедания и даже атеист. В разные годы её получали как мать Тере́за и Дала́й-ла́ма, так и, например, учёный Фри́мен Да́йсон. В стату́те премии особо оговорено, что её денежный эквивалент должен всегда превышать сумму, которую получают нобелевские лауреаты.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Сто лет назад профессора полушутя жаловались, что по понедельникам, средам и пятницам читают студентам ТАКУЮ теорию, а по вторникам, четвергам и субботам — СЯКУЮ.",
        Wording: "Догадавшись, о теории чего идёт речь, ответьте: от каких существительных происходят слова «ТАКАЯ» и «СЯКАЯ»?",
        Answer: { Text: "Волна, частица (корпускула, квант)" },
        Comment: "Речь идёт о теории света, который ставил учёных в тупик своей двойственной природой. Физики шутили, что три дня в неделю читают студентам волновую теорию света, а ещё три дня — корпускулярную.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Жена Черныше́вского была очень прогрессивной женщиной. Описывая гостей, от которых в доме Чернышевских не было отбоя, Набо́ков использовал выражение «от а́за до и́жицы». Более известный, но гораздо менее подробный аналог того, о чём говорил Набоков, основывается на НЁМ.",
        Wording: "Назовите ЕГО словом английского происхождения.",
        Answer: { Text: "Бейсбол." },
        Comment: "Жена Чернышевского окружила себя многочисленными поклонниками, с которыми находилась на разных стадиях любовной близости — по выражению Набокова, «от аза до ижицы». Это подразумевает тридцать пять стадий — по числу букв дореформенного русского алфавита. Более известная, но гораздо менее подробная классификация основана на терминах из бейсбола — «первая база», «вторая база» и так далее.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "В книге «Норвежский лес» рассказывается о Ру́бене Кну́тсене, который каждый год возводит красивую поле́нницу. Узнав, что Кнутсен делает впоследствии, автор вопроса уподобил поленницу ЕЙ.",
        Wording: "Назовите ЕЁ словом с одинаковыми гласными.",
        Answer: { Text: "Манда́ла." },
        Comment: "Поленницы, которые возводит Кнутсен, круговые, и напоминают мандалу — буддистский символ Вселенной. Во время одного из ритуалов мандалу долгое время создают при помощи цветных порошков, а в конце разрушают, намекая на бренность всего сущего. Создатель поленницы тоже разрушает её после постройки.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Рассказывая об аспирантке Горного института, награждённой в 1957 году за работу в бассейне реки Лены, Василий А́вченко упомянул известную песню. Несколькими годами ранее профессиональная американская певица Ма́рни Ни́ксон помогла исполнить эту песню.",
        Wording: "Назовите исполнительницу которой помогала Ма́рни Ни́ксон.",
        Answer: { Text: "Мэ́рилин Монро́." },
        Comment: "В середине двадцатого века Лариса Попуга́ева открыла месторождение якутских алмазов. За это её наградили орденом Ленина, хотя из-за интриг лишили славы первооткрывательницы. Мэрилин Монро спела песню «Бриллианты — лучшие друзья девушек» в фильме 1953 года «Джентльмены предпочитают блондинок», а высокие ноты ей помогла тянуть Марни Никсон, известная певица-сопрано.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Первоначально считалось, что чёрная дыра может лишь поглощать материю и энергию. После появления гипотезы об излучении Хо́кинга физики даже стали говорить об эффекте массы чёрной дыры.",
        Wording: "Восстановите замену, сделанную в предыдущем предложении.",
        Answer: { Text: "Период полураспада/Half-life" },
        Comment: "Хокинг предположил, что чёрная дыра может и таким образом деградировать, теряя массу. По аналогии с периодом полураспада элементарных частиц появилось даже понятие периода полураспада чёрной дыры, зависящего от массы и интенсивности излучения. Замена основана на названиях компьютерных игр «Mass Effect» и «Half-Life».",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "У Джона Гри́нлифа Уи́ттьера, выросшего в начале девятнадцатого века на ферме, уже в детстве появилось много свободного времени для занятий поэзией, поскольку из-за НЕГО мальчик был мало полезен при сборе урожая. ОН назван в честь старшего современника Уиттьера.",
        Wording: "Назовите фамилию этого современника.",
        Answer: { Text: "Да́льтон" },
        Comment: "Из-за дальтонизма Уиттьер не отличал спелых ягод от зелёных, поэтому тратил свободное время на чтение и в итоге стал известным поэтом. Дальтонизм описал в конце восемнадцатого века старший современник Уиттьера Джон Дальтон, у которого были те же проблемы.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "В русском языке название мышьяка связано не с рукокрылыми, а с грызунами. Тем не менее, мышьяко́вый колчеда́н в народных поверьях считался обере́гом, поскольку при воздействии на минерал появляется ОН.",
        Wording: "Назовите ЕГО двумя словами.",
        Answer: { Text: "Запах чеснока." },
        Comment: "Из-за чесночного запаха мышьяковый колчедан, также известный как арсенопири́т, считался магическим оберегом против нечисти вроде вампиров, которые, по легендам, могут превращаться в летучих мышей. Против обычных мышей арсенопирит, кстати, тоже помогает.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Ми́на Овчи́нская — мать Роме́на Гари́ — считала сына литературным гением и умоляла никогда не участвовать в НИХ.",
        Wording: "Назовите ИХ словом французского происхождения.",
        Answer: { Text: "Дуэли." },
        Comment: "Мать Гари, которая была уроженкой Российской Империи, считала, что по литературному таланту её сын равен Пу́шкину и Ле́рмонтову, поэтому умоляла его никогда не драться на дуэлях, чтобы не умереть в расцвете своего дарования.",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "В книге Паска́ля Буайе́ высказывается предположение, что определённую разновидность ЕЁ вызывают продукты, способные негативно повлиять на развитие. Действие «ЕЁ» происходит в Буви́ле, название которого можно перевести как «Грязь-город».",
        Wording: "Назовите ЕЁ.",
        Answer: { Text: "Тошнота." },
        Comment: "Токсико́з при беременности нередко сопровождается тошнотой от самых обычных продуктов. Согласно одному предположению, такая тошнота — эволюционный механизм, защищающий организм матери от токсинов, способных повлиять на развитие эмбриона. Прообразом отвратительного города Бувиля из «Тошноты» Са́ртра был Гавр, где писатель преподавал философию.",
        Time: 60,
        Author: "Some author"
      }
    ]
  },
  {
    ID: 2,
    Name: "Админ: Тестовый пакет 2",
    Title: "Тестовый пакет 2",
    Description: "Описание тестового пакета 2",
    Author: "Nastybits",
    Questions: [
      {
        Text: "Текст первого вопроса",
        Wording: "Формулировка первого вопроса",
        Answer: { Text: "Ответ на первый вопрос" },
        Comment: "Комментарий к ответу на первый вопрос",
        Time: 60,
        Author: "Some author"
      }
    ]
  },
  {
    ID: 2,
    Name: "Админ: Тестовый пакет 3",
    Title: "Тестовый пакет 3",
    Description: "Описание тестового пакета 3",
    Author: "Test Author",
    Questions: [
      {
        Text: "Текст первого вопроса третьего пакета",
        Wording: "Формулировка первого вопроса третьего пакета",
        Answer: { Text: "Ответ на первый вопрос третьего пакета" },
        Comment: "Комментарий к ответу на первый вопрос третьего пакета",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Текст второго вопроса третьего пакета",
        Wording: "Формулировка второго вопроса третьего пакета",
        Answer: { Text: "Ответ на второй вопрос третьего пакета" },
        Comment: "Комментарий к ответу на второй вопрос третьего пакета",
        Time: 60,
        Author: "Some author"
      },
      {
        Text: "Текст третьего вопроса третьего пакета",
        Wording: "Формулировка третьего вопроса третьего пакета",
        Answer: { Text: "Ответ на третий вопрос третьего пакета" },
        Comment: "Комментарий к ответу на третий вопрос третьего пакета",
        Time: 60,
        Author: "Some author"
      }
    ]
  }
]
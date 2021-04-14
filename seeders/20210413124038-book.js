'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('book', [
            {
                id: '1',
                title: 'Компьютерные сети',
                creator: 'Таненбаум Эндрю',
                subject: 'Зарубежная компьютерная литература, ОС и сети',
                description:
                    'Перед вами – очередное, пятое издание самой авторитетной книги по современным сетевым технологиям, написанной признанным экспертом в этой области Эндрю Таненбаумом в соавторстве с профессором Вашингтонского университета Дэвидом Уэзероллом. Первая версия этого классического труда появилась на свет в далеком 1980 году, и с тех пор каждое издание книги неизменно становилось бестселлером и использовалось в качестве базового учебника в ведущих технических вузах.',
                publisher: 'Питер',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                date: '2011',
                type: 'Текст',
                format: 'Печатное издание',
                countPages: '961 стр',
                identifier: '978-5-4461-1248-7',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 2,
            },

            {
                id: '2',
                title: 'Архитектура компьютера',
                creator: 'Таненбаум Эндрю',
                subject:
                    'Зарубежная компьютерная литература, Классика Computer Science',
                description:
                    'Книга Эндрю Таненбаума, всемирно известного специалиста в области информационных технологий, писателя и преподавателя, выходящая уже в шестом издании, посвящена структурной организации компьютера. В ее основе лежит идея иерархической структуры, в которой каждый уровень выполняет вполне определенную функцию. В рамках этого нетрадиционного подхода подробно описываются цифровой логический уровень, уровень архитектуры команд, уровень операционной системы и уровень языка ассемблера. В шестое издание внесены многочисленные изменения, которые приводят книгу в соответствие со стремительным развитием компьютерной отрасли. В частности, была обновлена информация о машинах, представленных в качестве примеров: Intel Core i7, Texas Instrument OMAP4430 и Atmel ATmega168. Книга рассчитана на широкий круг читателей: как на студентов, изучающих компьютерные технологии, так и на тех, кто самостоятельно знакомится с архитектурой компьютера.',
                publisher: 'Питер',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                date: '2018',
                type: 'Текст',
                format: 'Печатное издание',
                countPages: '816 стр',
                identifier: '978-5-4461-1103-9',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 4,
            },
            {
                id: '3',
                title: 'Современные операционные системы',
                creator: 'Таненбаум Эндрю, Бос Херберт',
                subject:
                    'Зарубежная компьютерная литература, Классика Computer Science',
                description:
                    'Эндрю Таненбаум представляет новое издание своего всемирного бестселлера, необходимое для понимания функционирования современных операционных систем. Оно существенно отличается от предыдущего и включает в себя сведения о последних достижениях в области информационных технологий.  Например, глава о Windows Vista теперь заменена подробным рассмотрением Windows 8.1 как самой актуальной версии на момент написания книги. Появился объемный раздел, посвященный операционной системе Andrid Был обновлен материал, касающийся Unix и Linux, а также RIDсистем. Гораздо больше внимания уделено мультиядерным и многоядерным системам, важность которых в последние несколько лет постоянно возрастает. Появилась совершенно новая глава о виртуализации и облачных вычислениях. Добавился большой объем нового материала об использовании ошибок кода, о вредоносных программах и соответствующих мерах защиты.  В книге в ясной и увлекательной форме приводится множество важных подробностей, которых нет ни в одном другом издании.',
                publisher: 'Питер',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '1120 стр',
                date: '2018',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '978-5-4461-1155-8',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 7,
            },
            {
                id: '4',
                title: 'Структуры данных и алгоритмы',
                creator: 'Андреева Л. П.',
                subject: 'Алгоритмы, алгоритмы и структуры данных',
                description: 'NULL',
                publisher: 'МГТУ МИРЭА',
                contributor: 'МГТУ МИРЭА',
                typeCover: 'NULL',
                countPages: '204 стр',
                date: '2012',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '978-5-7339-1013-0',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 22,
            },
            {
                id: '5',
                title: 'Искусство программирования. Том 1. ',
                creator: 'Кнут Дональд Эрвин',
                subject: 'Искусство программирования',
                description:
                    'Первый том серии книг Искусство программирования начинается с описания основных понятий и методов программирования. Затем автор сосредоточивается на рассмотрении информационных структур —представлении информации внутри компьютера, структурных связях между элементами данных и способах эффективной работы с ними. Для методов имитации, символьных вычислений, числовых методов и методов разработки программного обеспечения даны примеры элементарных приложений. По сравнению с предыдущим изданием добавлены десятки простых, но в то же время очень важных алгоритмов. В соответствии с современными направлениями исследований был существенно переработан также раздел математического введения.',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '720 стр',
                date: '2019',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '978-5-907144-23-1',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 25,
            },
            {
                id: '6',
                title:
                    'Структуры и алгоритмы обработки данных: объектно-ориентированный подход и реализация на C++',
                creator: 'Кубенский Александр Александрович',
                subject: 'ООП, структуры данных, обработка данных, С++',
                description:
                    'Описываются методы построения и использования сложных структур данных: стеки, деревья, графы; нетрадиционные представления данных, в частности функциональное представление. Рассматриваются различные алгоритмы обработки этих структур на простых примерах программ. Изложение осуществляется на основе объектно-ориентированного подхода с использованием языка программирования C++. Показано, как тот или иной выбор решения задач влияет на эффективность и выразительность программ. Приводится большое количество текстов программ, иллюстрирующих рассматриваемые алгоритмы.',
                publisher: 'БХВ-Петербург',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '464 стр',
                date: '2004',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '5-94157-506-8',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 12,
            },
            {
                id: '7',
                title: 'Структуры и алгоритмы обработки данных',
                creator: 'Сыромятников В. П.',
                subject: 'Алгоритмы, алгоритмы и структуры данных',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: '95 стр',
                date: '2020',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 45,
            },
            {
                id: '8',
                title: 'Оптика и атомная физика',
                creator: 'Роберт Вихард Поль',
                subject: 'Физика, оптика, атомная физика',
                description:
                    'Данная книга представляет собой последний, третий том Введения в физику Р. В. Поля. В ней излагается оптика и кое-что из атомной физики. Особое внимание обращено на единообразный подход к рентгеновскому и обыкновенному свету. Перевод с немецкого Н. М. Лозинской.',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '552 стр',
                date: '1966',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 2,
            },
            {
                id: '9',
                title: 'Механика, молекулярная физика и термодинамика',
                creator:
                    'Ивашкин П. И., Коссов О. М., Романовский М. Ю., Задерновский А. А.',
                subject: 'Механика, физика, термодинакима',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'Твердый переплет',
                countPages: '180 стр',
                date: '2005',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 29,
            },
            {
                id: '10',
                title: 'Основы конструирования и производства ЭВМ ',
                creator: 'Б. В. Анисимов, А. Я. Савельев',
                subject: 'ЭВМ',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '278 стр',
                date: '1972',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 24,
            },
            {
                id: '11',
                title:
                    'Элементная и конструктивная база высокопроизводительных ЭВМ и вычислительных систем',
                creator: 'Коваленко С. М., Романов А. М.',
                subject: 'ЭВМ',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: '55 стр',
                date: '2001',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 22,
            },
            {
                id: '12',
                title: 'Организация ЭВМ и систем',
                creator: 'Иванов Е. Л., Бражникова Е. В.',
                subject: 'ЭВМ',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: '72',
                date: '2006',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 25,
            },
            {
                id: '13',
                title: 'Организация ЭВМ и систем',
                creator: 'Иванов Е. Л., Бражникова Е. В.',
                subject: 'ЭВМ',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: '72',
                date: '2006',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '5-7339-0546-8',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 2,
            },
            {
                id: '14',
                title: 'Программирование на языке Ассемблер',
                creator: 'П. В. Беспалов, С. В. Горин, С. М. Коновалов',
                subject: 'Ассемблер, ЭВМ',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '191 стр',
                date: 'NULL',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'NULL',
                coutInstance: 98,
            },
            {
                id: '15',
                title: 'Ассемблер для IBM PC',
                creator: 'Г. В. Майко. — М.: Агенство',
                subject: 'IBM, Ассемблер, ЭВМ',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '212 стр',
                date: '1997',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 102,
            },
            {
                id: '16',
                title: 'Программирование и алгоритмические языки',
                creator: 'Докукина Т. К.',
                subject: 'Программирование, алгоритмы',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '496 стр',
                date: '1992',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-217-01501-2',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 202,
            },
            {
                id: '17',
                title: 'Разработка веб-приложений с помощью PHP и MySQL',
                creator: 'Люк Веллинг, Лора Томсон',
                subject: 'PHP, базы данных, MySql, sql, веб',
                description:
                    'Овладейте современным передовым опытом разработки веб-приложений, взаимодействующих с базами данных, с помощью PHP 7 и MySQL 5.7! В этом новом 5-м издании книги, признанной наиболее ясным, удобным и практичным руководством по разработке с использованием PHP и MySQL, полностью отражены возможности последних версий PHP и MySQL.',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '876 стр',
                date: '2008',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '978-5-8459-0862-9',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 63,
            },
            {
                id: '18',
                title: 'Программирование в WEB для профессионалов',
                creator: 'Джамса К.',
                subject: 'web, программирование',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Жесткий переплет',
                countPages: '631 стр',
                date: '1997',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '985-438-034-3',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 72,
            },
            {
                id: '19',
                title:
                    'Web-протоколы. Теория и практика. HTTP/1. 1, взаимодействие протоколов, кэширование, измерение трафика',
                creator: 'Б. Кришнамурти, Дж. Рексфорд',
                subject: 'Web, http, протоколы',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '592 стр',
                date: '2002',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Мир',
                coutInstance: 52,
            },
            {
                id: '20',
                title: 'Web-дизайн в примерах и задачах',
                creator: 'Д.А.Евсеев, В.В.Трофимов. — М.: Кнорус',
                subject: 'Web, задачи',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '263',
                date: '2010',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '978-5-406-00017-5',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 24,
            },
            {
                id: '21',
                title: 'HTML и CSS',
                creator: 'Мальчук Е. В.',
                subject: 'HTML, CSS',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '408 стр',
                date: '2006',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-8459-0907-4',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 36,
            },
            {
                id: '22',
                title: 'Математическая логика',
                creator: 'С. А. Унучек',
                subject: 'Математика, логика',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2015',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '978-5-7339-1327-8',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 27,
            },
            {
                id: '23',
                title: 'Математическая логика и теория алгоритмов',
                creator: 'А. П. Мацнев, А. М. Русаков',
                subject: 'Математика, логика, алгоритмы',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: 'NULL',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 46,
            },
            {
                id: '24',
                title:
                    'Математическая логика и общая теория алгебраических систем',
                creator: 'NULL',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '338',
                date: 'NULL',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 2,
            },
            {
                id: '25',
                title: 'Математическая логика ',
                creator: 'Клини С. К.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '480 стр',
                date: '1973',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 34,
            },
            {
                id: '26',
                title:
                    'Математическая логика, теория алгоритмов и теория множеств ',
                creator: 'С. И. Адян. — М.: Наука',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '276 стр',
                date: '1973',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 48,
            },
            {
                id: '27',
                title: 'Математическая логика и теория алгоритмов',
                creator: 'Р. И. Дзержинский, А. А. Воронцов. ',
                subject: 'Математика, логика, алгоритмы',
                description: '',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2019',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 37,
            },
            {
                id: '28',
                title: 'Базы данных ',
                creator: 'Д. Мартэн. — М.: Радио ',
                subject: 'БД, базы данных',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '168 стр',
                date: '1983',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 201,
            },
            {
                id: '29',
                title: 'Базы данных',
                creator: 'Л. П. Андреева. ',
                subject: 'Лабораторные работы, базы данных',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2012',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '978-5-7339-1011-6',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 22,
            },
            {
                id: '30',
                title: 'СУБД. Язык SQL в примерах и задачах',
                creator:
                    'Астахова Ирина Федоровна, Толстобров Александр Павлович',
                subject: 'СУБД, sql, задачи',
                description:
                    'Учебное пособие содержит подборку примеров и упражнений различной степени сложности для практических занятий по изучению основ языка SQL в рамках учебного курса, посвященного информационным системам с базами данных. Допущено Министерством образования и науки Российской Федерации в качестве учебного пособия для студентов высших учебных заведений, обучающихся по направлению подготовки и по специальности «Прикладная математика и информатика».',
                publisher:
                    'Издательская фирма Физико-математическая литература',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: 'NULL',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 24,
            },
            {
                id: '31',
                title: 'SQL в примерах и задачах',
                creator: 'И.Ф.Астахова, А.П.Толстобров, В.М.Мельников.',
                subject: 'SQL, задачи',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '175 стр',
                date: '2002',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '985-475-004-3',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 41,
            },
            {
                id: '32',
                title: 'Оптимизация баз данных ',
                creator: 'Шаша Деннис',
                subject: 'Базы данных, бд',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '431 стр',
                date: '2004',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '1-55860-753-6',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 73,
            },
            {
                id: '33',
                title: 'Анализ,алгебра,обыкновенные дифференциальные уравнения',
                creator: 'NULL',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '631 стр',
                date: 'NULL',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 48,
            },
            {
                id: '34',
                title: 'Аналитическая геометрия. Прямая и плоскость',
                creator: 'М. Л. Гольдман, Е. О. Сивкова.',
                subject: 'геометрия, прямая, плоскость',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2015',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 72,
            },
            {
                id: '35',
                title: 'Задачник по алгебре',
                creator: 'Кречмар В. А.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '428 стр',
                date: '1961',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 39,
            },
            {
                id: '36',
                title: 'Дискретная математика и комбинаторика',
                creator: 'Андерсон Дж. А.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '957 стр',
                date: '2003',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-8459-0498-6',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 62,
            },
            {
                id: '37',
                title: 'Автоматизация проектирования вычислительных систем',
                creator: 'М. Брейера',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '464 стр',
                date: '1979',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 37,
            },
            {
                id: '38',
                title: 'Базы данных в административных информационных системах',
                creator: 'Т. Кроув, Д. Эйвисон',
                subject: 'Базы данных, администрирование',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '168 стр',
                date: '1983',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 64,
            },
            {
                id: '39',
                title: 'Базы данных',
                creator: 'Андреева Л. П.',
                subject: 'БД, базы данных, методические указания',
                description: '',
                publisher: 'МГТУ МИРЭА',
                contributor: 'МГТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2012',
                type: 'Текст',
                format: 'Цифровая книга',
                identifier: '978-5-7339-1010-9',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 52,
            },
            {
                id: '40',
                title: 'Дискретная математика для программистов',
                creator: 'Новиков Федор Александрович',
                subject: 'математика, программирование',
                description: 'NULL',
                publisher: 'СПб.: Питер',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '363 стр',
                date: '2006',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-94723-741-5',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 102,
            },
            {
                id: '41',
                title: 'C++',
                creator: 'П. Франка',
                subject: 'С++',
                description: 'NULL',
                publisher: 'СПб.: Питер',
                contributor: 'NULL',
                typeCover: 'Твердый переплет',
                countPages: '521 стр',
                date: '1999',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-314-00136-5',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 132,
            },
            {
                id: '42',
                title: 'JavaScript на примерах',
                creator: 'Климов Александр Петрович',
                subject: 'JavaScript, js, Javascript',
                description: 'NULL',
                publisher: 'БХВ-Петербург',
                contributor: 'БХВ-Петербург',
                typeCover: 'NULL',
                countPages: '237 стр',
                date: '2006',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-94157-852-0',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 142,
            },
            {
                id: '43',
                title: 'Java Script : Основы программирования',
                creator: 'Мейнджер Дж.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '510 стр',
                date: '1997',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 139,
            },
            {
                id: '44',
                title:
                    'Нейроны и нейронные сети. Введение в теорию формальных нейронов и нейронных сетей ',
                creator: 'Мкртчян С. О.',
                subject: 'Нейронные сети, нейроны',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '232 стр',
                date: '1971',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 159,
            },
            {
                id: '45',
                title: 'Нейрокомпьютеры и их применение',
                creator: 'Галушкин А.И',
                subject: 'Нейрокомпьютеры, практика',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '415 стр',
                date: '2000',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-93108-005-8',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 172,
            },
            {
                id: '46',
                title: 'Сверточные нейронные сети: примеры реализаций',
                creator: 'Сорокин Алексей Борисович',
                subject: 'Нейронные сети, сверточные нейронные сети',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2020',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-93108-005-8',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 164,
            },
            {
                id: '47',
                title: 'Информационная безопасность и защита информации',
                creator: 'Степанов Е. А.',
                subject: 'Информация, безопасность',
                description: 'NULL',
                publisher: 'ИНФРА-М',
                contributor: 'ИНФРА-М',
                typeCover: 'NULL',
                countPages: '302 стр',
                date: '2001',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-16-000491-2',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 172,
            },
            {
                id: '48',
                title: 'Информационная безопасность методические указания',
                creator: 'Крюков Д. А.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'РТУ МИРЭА',
                contributor: 'РТУ МИРЭА',
                typeCover: 'NULL',
                countPages: 'NULL',
                date: '2016',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 184,
            },
            {
                id: '49',
                title: 'Введение в SQL',
                creator: 'Грабер М.',
                subject: 'SQL',
                description: 'NULL',
                publisher: 'NULL',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '379 стр',
                date: '1996',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: 'NULL',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 15,
            },
            {
                id: '50',
                title: 'Практикум по программированию на С++',
                creator: 'Е. Л. Романов.',
                subject: 'NULL',
                description: 'NULL',
                publisher: 'СПб.: БХВ-Петербург,',
                contributor: 'NULL',
                typeCover: 'NULL',
                countPages: '427 cnh',
                date: '2004',
                type: 'Текст',
                format: 'Печатное издание',
                identifier: '5-94157-553-X',
                language: 'ru-RU',
                coverage: 'Россия',
                coutInstance: 45,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('book', null, {});
    },
};

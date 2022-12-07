# Метадані

В `Atsumeru` основний наголос робиться на наповнення вашого контенту метаданими. Максимально, наскільки це можливо. Це спрощує пошук контенту, дає змогу швидше і легше вивчити опис/жанри/теги/і тд і покращує зовнішній вигляд бібліотеки

## Підтримувані формати метаданих
### ComicInfo.xml

Формат метаданих придуманий для додатка `ComicRack`, який більше не розробляється. Формат сильно застарів і дуже обмежений в оригінальному виконанні, але все ще використовується деякими додатками через відсутність альтернативи

`Atsumeru` під час імпорту витягуєт `ComicInfo.xml` з архівів і читає такі поля:  
`Title` `Circles` `Summary` `Volume` `Year` `Month` `Writer` `Publisher` `Genre` `Characters` `PageCount` 

:::c-warning
З огляду на те, що формат сильно застарів і розширювати його практично немає сенсу, було розроблено альтернативний формат метаданих [book_info.json](./metadata.md#book-info-json) на який спираються `Atsumeru` і [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png">
:::

### book_info.json
[<Badge vertical="middle" text="Схема формату"/>](./book-info-scheme.md)

Спеціально розроблений формат метаданих для всієї екосистеми `Atsumeru`. Формат підтримує велику кількість полів метаданих на будь-який смак і дає змогу наповнювати метаданими не тільки комікси ([ComicInfo.xml](./metadata.md#comicinfo-xml) був розроблений для коміксів), а також `Манги`, `Хентаю` і `Ранобе`

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> містить [редактор метаданих](./metadata.md#редактор-метаданих), який працює саме з цим форматом метаданих

:::c-tip
`Atsumeru` також може зберігати і витягувати статичні унікальні хеші `Архіву` і `Серії` всередині об'єкта `atsumeru` у метаданих, які дають змогу переімпортувати `Архіви` і `Серії` без прив'язки до шляху файлу і без втрати історії читання
:::

#### chapter_info.json
[<Badge vertical="middle" text="Схема формату"/>](./book-info-scheme.md#схема-chapter-info-json)

Допоміжний формат метаданих для глав в архівах (одна директорія - одна глава). Підтримує майже аналогічний набір полів метаданих і дає змогу організувати в архівах складну систему з глав, кожна з яких матиме свої унікальні метадані (актуально, наприклад, для журналів `Манги` або `Хентаю`, у яких часто глави розділи різних творів)

## Редактор метаданих

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> містить потужний редактор метаданих у [book_info.json](./metadata.md#book-info-json) форматі

Підтримується кілька зручних і прозорих режимів редагування:
- редагування імпортованих `Серій` і `Архівів` на сервері
- редагування локальних `Архівів` (файлів)
- безпосереднє редагування файлу [book_info.json](./metadata.md#book-info-json)

### Відкриття редактора

Відкрити редактор можна кількома шляхами:
- з контекстного меню `Серії`
- з контекстного меню `Архіву` всередині `Серії`
- натиснув <MaterialIcon icon="edit"/> на верхній панелі додатку:
  - натиснувши на вибір файлу
  - перетягнувши файл у вікно

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor.png">
<p style="text-align: center; font-size:75%">Інтерфейс редактора метаданих</p>

### Редагування

Редактор інтуїтивно зрозумілий і надає доступ до всіх можливих полів метаданих формату [book_info.json](./metadata.md#book-info-json), але необхідні невеликі уточнення:
- поле `Альтернативна назва` передбачає запис туди назви вашою мовою
- поле `Рейтинг` варто заповнювати, якщо ви прив'язуєте ваш контент до зовнішніх *сервісів-баз даних* на кшталт [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/), [ComicVine](https://comicvine.gamespot.com/) та інших. Це поле означає позицію контенту в рейтингу таких сервісів
- поле `Оцінка` передбачає середньостатистичну оцінку контенту за десятибальною шкалою з плаваючою крапкою
- поле `Том` недоступне під час редагування `Серії`. `Atsumeru` використовує дане значення з метаданих `Архіву` або спробує самостійно його визначити з назви файлу

У всіх полів доступне розширене контекстне меню з додатковими функціями:

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor-context-menu.png">
<p style="text-align: center; font-size:75%">Розширене контекстне меню</p>

#### Пов'язані сервіси

У нижній частині вікна є розділ `Пов'язані сервіси`, де відображається список полів підтримуваних `Atsumeru` зовнішніх сервісів, які можна *прив'язати* до контенту. Може бути корисним для швидкої прив'язки контенту з боку клієнта до сервісів трекінгу за типом [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/) та іншим

:::c-tip
Кожне поле має функції автодоповнення. Достатньо вставити у відповідне поле посилання/ідентифікатор контенту і друге поле буде заповнено автоматично
:::

:::c-warning
Файл метаданих [book_info.json](./metadata.md#book-info-json) підтримує вказівку будь-яких `Пов'язаних сервісів`. Конкретний список сервісів для `Atsumeru` був відібраний на розсуд розробника
:::

### Отримання метаданих із зовнішніх джерел

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> також підтримує функціонал парсингу метаданих із підтримуваних каталогів. Парсери доступні для встановлення в **Репозиторії**, який можна відкрити натиснувши <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/earth.png"> на верхній панелі додатку

Щоб отримати метадані необхідно в [редакторі](./metadata.md#редактор-метаданих) натиснути на `Отримати метадані`, вставити в поле підтримуване посилання на контент і натиснути <MaterialIcon icon="download"/> 

<img style="display: block; margin: 0 auto" src="/assets/media/ru/guides/metadata-editor-fetch.png">
<p style="text-align: center; font-size:75%">Інтерфейс вікна отримання метаданих</p>

:::c-tip
Якщо отримати метадані за посиланням не вийшло, можна вставити в поле нижче HTML-код сторінки контенту і повторити спробу
:::

### Збереження

Змінивши метадані, їх потрібно зберегти. Існує чотири режими запису під час редагування метаданих на сервері:
- у пов'язані `Архіви` (метадані записуються в усі `Архіви` `Серії`)
- у зовнішні файли метаданих (у такому разі збереження відбувається в зовнішній файл  [book_info.json](./metadata.md#book-info-json), який зберігається за шляхом `<поточна директорія>/.atsumeru/<назва архіва>/book_info.json`)
- тільки в базу даних (запис відбувається тільки в базу даних, не змінюючи оригінальні файли і не створюючи окремі файли [book_info.json](./metadata.md#book-info-json))
- тільки `Серію` (змінюється тільки `Серія` і тільки в базі даних. Корисно, коли необхідно змінити тільки `Серію` не змінюючи `Архіви`)

:::c-tip
Будь-який метод запису метаданих (окрім запису тільки `Серії`) автоматично визначає і записує номери томів `Архівів`
:::

:::c-warning
Редагування локальних `Архівів` (файлів) і [book_info.json](./metadata.md#book-info-json) завжди зберігає зміни у файлі
:::
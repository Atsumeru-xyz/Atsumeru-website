# Налаштування сервера

## Зміна порту

За замовчуванням  `Atsumeru` запускається на порту `31337`, але іноді його потрібно змінити (порт зайнятий, не підходить, потрібен запуск декількох серверів). Для зміни порту необхідно додати аргумент `-Dserver.port=<порт>` до команди запуску сервера, де `<порт>` - бажаний порт. Наприклад:
```
java -Dserver.port=<порт> -jar Atsumeru-x.y.z.jar
```

## Налаштування додаткових функцій

Усі налаштування сервера здійснюються або через інтерфейс налаштування у [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> або через ручне редагування файлу конфігурації `atsumeru.properties`, який знаходиться біля `jar` файла

:::c-danger
Ручне редагування файлу конфігурації вимагає перезапуску сервера для застосування налаштувань. Зміна налаштувань через [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> проводиться моментально
:::

## Налаштування за допомогою Atsumeru Manager

Для налаштування сервера достатньо підключитися до нього через [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> и натиснути <MaterialIcon icon="settings"/> на нижній панелі додатку, щоб відкрити вікно з доступними налаштуваннями, приклад якого показано нижче

<img style="display: block; margin: 0 auto" src="/assets/media/ru/installation/server-settings.png">
<p style="text-align: center; font-size:75%">Інтерфейс редагування налаштувань через  Atsumeru Manager</p>

:::c-tip
Детальніші описи кожного налаштування доступні в розділі [Налаштування за допомогою файлу конфігурації](./server-settings.md#налаштування-за-допомогою-фаилу-конфігураціі)
:::

## Налаштування за допомогою файлу конфігурації

Нижче описані доступні ключі та їхні можливі значення, які можна змінювати у файлі конфігурації `atsumeru.properties` по формулі `<ключ>=<значення>`. Кожна пара має бути з нового рядка

#### allow_loading_list_with_volumes `<true/false>`

Дозволяє вивантаження списків томів разом з історією читання для поточного користувача у відповідях `REST API`

:::c-tip
Функція використовується в додатках [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png">, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> і [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/> для відображення кількості томів і прогресу читання поточного користувача на картках у списках `Серій`
:::

За замовчуванням: `true`

#### allow_loading_list_with_chapters `<true/false>`

Дозволяє вивантаження списків глав разом з історією читання для поточного користувача у відповідях `REST API`

:::c-danger
Працює тільки з увімкненим [allow_loading_list_with_volumes](./server-settings.md#allow-loading-list-with-volumes-true-false)
:::

За замовчуванням: `true`

#### disable_chapters `<true/false>`

Повністю відключає читання та імпорт списків глав з архівів під час імпорту. У такому режимі сервер працює тільки з `Архівами` і `Серіями`.

:::c-tip
Вимкнення імпорту глав істотно прискорює імпортування, активуючи багатопотоковий імпорт
:::

За замовчуванням: `false`

#### disable_request_logging_into_console `<true/false>`

Повністю відключає логгування запитів до `REST API` в консоль і залишає тільки логгування в лог-файл `requests.log`

:::c-tip
Прогрес імпортування та кешування обкладинок продовжить відображатися в консолі
:::

За замовчуванням: `false`

#### disable_bonjour_service `<true/false>`

Повністю відключає сервіс виявлення сервера за допомогою `Bonjour/Zeroconf` протоколу ([Bonjour](https://github.com/mannodermaus/RxBonjour))

:::c-tip
Коли сервіс увімкнено, підтримувані `Atsumeru` додатки зможуть (за наявності реалізації) виявляти сервер у локальній мережі для швидкого підключення
:::

За замовчуванням: `false`

#### disable_watch_for_modified_files `<true/false>`

Вимикає спостереження за змінами імпортованих файлів у файловій системі за допомогою [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). У такому разі автоматичний `Пошук нових архівів` буде запущено тільки після видалення або додавання нових файлів

За замовчуванням: `false`

#### disable_file_watcher `<true/false>`

Повністю відключає сервіс спостереження за змінами імпортованих файлів у файловій системі за допомогою [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). У такому разі `Пошук нових архівів` потрібно буде запускати вручну після внесення змін 

За замовчуванням: `false`
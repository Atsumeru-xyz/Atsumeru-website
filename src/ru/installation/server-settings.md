# Настройка сервера

## Изменение порта

По умолчанию **Atsumeru** запускается на порту `31337`, но, иногда, его требуется изменить (порт занят, не подходит, требуется запуск нескольких серверов). Для изменения порта необходимо добавить флаг `-Dserver.port=<порт>` к команде запуска сервера, где `<порт>` - желаемый порт. Например:
```
java -Dserver.port=<порт> -jar Atsumeru-x.y.z.jar
```

## Настройка дополнительных функций

Все настройки сервера производятся либо через интерфейс настройки в [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> либо через ручное редактирование файла конфигурации `atsumeru.properties`, который находится возле `jar` файла

:::c-danger
Ручное редактирование файла конфигурации требует перезапуск сервера для применения настроек. Изменение настроек через [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> производится моментально
:::

## Настройка с помощью Atsumeru Manager

Для настройки сервера достаточно подключиться к нему через [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> и нажать <MaterialIcon icon="settings"/> на нижней панели приложения, чтобы открыть окно с доступными настройками, пример которого показан ниже

<img style="display: block; margin: 0 auto" src="/assets/media/ru/installation/server-settings.png">
<p style="text-align: center; font-size:75%">Интерфейс редактирования настроек через Atsumeru Manager</p>

:::c-tip
Более подробные описания каждой настройки доступны в разделе [Настройка с помощью файла конфигурации](./server-settings.md#настроика-с-помощью-фаила-конфигурации)
:::

## Настройка с помощью файла конфигурации

Ниже описаны доступные ключи и их возможные значения, которые можно изменять в файле конфигурации `atsumeru.properties` по формуле `<ключ>=<значение>`. Каждая пара должна быть с новой строки

#### allow_loading_list_with_volumes `<true/false>`

Разрешает выгрузку списков томов вместе с историей чтения для текущего пользователя в ответах `REST API`

:::c-tip
Функция используется в приложениях [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png">, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> и [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/> для отображения количества томов и прогресса чтения текущего юзера на карточках `Серий` в списках `Серий`
:::

По умолчанию: `true`

#### allow_loading_list_with_chapters `<true/false>`

Разрешает выгрузку списков глав вместе с историей чтения для текущего пользователя в ответах `REST API`

:::c-danger
Работает только с включенным [allow_loading_list_with_volumes](./server-settings.md#allow-loading-list-with-volumes-true-false)
:::

По умолчанию: `true`

#### disable_chapters `<true/false>`

Полностью отключает чтение и импорт списков глав из архивов во время импорта. В таком режиме сервер оперирует только `Архивами` и `Сериями`

:::c-tip
Отключение импорта глав существенно ускоряет импортирование активируя многопоточный импорт
:::

По умолчанию: `false`

#### disable_request_logging_into_console `<true/false>`

Полностью отключает логгирование запросов к `REST API` в консоль и оставляет только логгирование в лог-файл `requests.log`

:::c-tip
Прогресс импортирования и кеширования обложек продолжит отображаться в консоли
:::

По умолчанию: `false`

#### disable_bonjour_service `<true/false>`

Полностью отключает сервис обнаружения сервера с помощью `Bonjour/Zeroconf` протокола ([Bonjour](https://github.com/mannodermaus/RxBonjour))

:::c-tip
Когда сервис включен, поддерживаемые **Atsumeru** приложения смогут (при наличии реализации) обнаруживать сервер в локальной сети для быстрого подключения
:::

По умолчанию: `false`

#### disable_watch_for_modified_files `<true/false>`

Отключает наблюдение за изменениями импортированных файлов в файловой системе с помощью [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). В таком случае автоматический `Поиск новых архивов` будет запущен только после удаления или добавления новых файлов

По умолчанию: `false`

#### disable_file_watcher `<true/false>`

Полностью отключает сервис наблюдения за изменениями импортированных файлов в файловой системе с помощью [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). В таком случае `Поиск новых архивов` нужно будет запускать вручную после внесенных изменений 

По умолчанию: `false`
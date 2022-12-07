# Запуск с Jar файла

## Установка Java

:::c-tip
Для работы `Atsumeru` необходима установленная **Java** версии **8+** (**1.8+**). Подойдет как [Oracle Java](https://www.java.com/ru/download/manual.jsp), так и [OpenJDK](https://www.openlogic.com/openjdk-downloads)  
Узнать установлена ли **Java** и ее версию можно с помощью команды `java -version`
:::

Установите **Java** для вашей системы:

#### Windows
Скачайте и установите установочный набор с сайта [Oracle](https://www.java.com/ru/download/manual.jsp)/[OpenJDK](https://www.openlogic.com/openjdk-downloads)

#### Linux/MacOS
Скачайте [OpenJDK](https://www.openlogic.com/openjdk-downloads) из репозитория или установив его вручную из **deb/rpm/tar.gz** пакета

:::c-tip
Зачастую, актуальные **Linux** системы поставляются с **OpenJDK 11+** в комплекте и дополнительная установка не требуется
:::

## Запуск

Запустить `Atsumeru` можно с самостоятельного `jar` файла. Актуальную версию можно загрузить из секции [Releases](https://github.com/AtsumeruDev/Atsumeru/releases) в GitHub репозитории

Для запуска сервера можно использовать такую команду (замените `x.y.z` на версию скачанного файла):

```
java -jar Atsumeru-x.y.z.jar
```

:::c-tip
На **Windows** системах можно использовать `javaw` вместо `java` для запуска сервера без отображения окна коммандной строки
:::

После запуска, сервер будет доступен для управления из [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> и чтения из поддерживаемых приложений (например, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> или [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/>) 

:::c-warning
Первый запуск сопровождается созданием необходимых файлов (кеш, настройки, базы данных) рядом с `jar` файлом. Также, создается пользователь `Admin` со случайным паролем, который единожды будет отображен в консоли. Рекомендуется сменить данный пароль и/или создать нового Администратора, удалив стандартного
:::

:::c-danger
Для создания нового пользователя `Admin` достаточно остановить сервер, удалить базу данных по пути `/database/users.db` и запустить сервер  
Данная операция удаляет всех ранее созданных пользователей, поэтому ее не рекомендуется производить при наличии таковых
:::

## Увеличения лимитов памяти

По умолчанию, `java` процесс получает ограниченное максимальное количество оперативной памяти (ОЗУ/RAM), которое он может использовать во время работы. Зачастую, это `~1 Гб`. При возникновении проблем в работе сервере или появлению ошибок по типу `OutOfMemoryException` в консоли/логах, скорее всего, нужно увеличить максимальное количество памяти, которое `Atsumeru` может использовать

Для этого необходимо добавить флаг `-Xmx<размер>` к команде запуска сервера, где `<размер>` может быть любым значением по типу `2048m` (Мегабайты), `3g` (Гигабайты) и так далее. К примеру, для запуска сервера с использованием до `3 Гб` памяти, нужно использовать такую команду:

```
java -jar -Xmx3072m Atsumeru-x.y.z.jar
```
или
```
java -jar -Xmx3g Atsumeru-x.y.z.jar 
```

## Обновление

Для обновления сервера его нужно остановить и заново запустить с использованием последней версии `jar`
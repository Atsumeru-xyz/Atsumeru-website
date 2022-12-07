# Запуск з Jar файлу

## Установка Java

:::c-tip
Для роботи `Atsumeru` необхідна встановлена **Java** версії **8+** (**1.8+**). Підійде як [Oracle Java](https://www.java.com/ru/download/manual.jsp), так і [OpenJDK](https://www.openlogic.com/openjdk-downloads)  
Дізнатися чи встановлена **Java** та її версію можна за допомогою команди `java -version`
:::

Встановіть **Java** для вашої системи:

#### Windows
Завантажте та встановіть інсталяційний набір із сайту [Oracle](https://www.java.com/ru/download/manual.jsp)/[OpenJDK](https://www.openlogic.com/openjdk-downloads)

#### Linux/MacOS
Завантажте [OpenJDK](https://www.openlogic.com/openjdk-downloads) з репозиторію або встановіть його вручну з **deb/rpm/tar.gz** пакету

:::c-tip
Найчастіше, актуальні **Linux** системи постачаються з **OpenJDK 11+** у комплекті і додаткове встановлення не потрібне
:::

## Запуск

Запустити `Atsumeru` можна самостійно з `jar` файлу. Актуальну версію можна завантажити із секції [Releases](https://github.com/AtsumeruDev/Atsumeru/releases) в GitHub репозиторії

Для запуску сервера можна використовувати таку команду (замініть `x.y.z` на версію завантаженного файла):

```
java -jar Atsumeru-x.y.z.jar
```

:::c-tip
На **Windows** системах можна використовувати `javaw` замість `java` для запуску сервера без відображення вікна командного рядка
:::

Після запуску, сервер буде доступний для управління з [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> і читання з підтримуваних додатків (наприклад, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> або [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/>) 

:::c-warning
Перший запуск супроводжується створенням необхідних файлів  (кеш, налаштування, бази даних) поряд з `jar` файлом. Також, створюється користувач `Admin` з випадковим паролем, який один раз буде відображено в консолі. Рекомендується змінити цей пароль або створити нового Адміністратора, видаливши стандартного
:::

:::c-danger
Для створення нового користувача  `Admin` достатньо зупинити сервер, видалити базу даних за шляхом `/database/users.db` і запустити сервер  
Ця операція видаляє всіх раніше створених користувачів, тому її не рекомендується проводити за їх наявності
:::

## Збільшення лімітів пам'яті

За замовчуванням, `java` процес отримує обмежену максимальну кількість оперативної пам'яті (ОЗП/RAM), яку він може використовувати під час роботи. Найчастіше, це `~1 Гб`. У разі виникнення проблем у роботі сервері або появи помилок на кшталт `OutOfMemoryException` в консолі/логах, найімовірніше, потрібно збільшити максимальну кількість пам'яті, яку `Atsumeru` може використовувати

Для цього необхідно додати агрумент `-Xmx<розмір>`до команди запуску сервера, де `<розмір>`може бути будь-яким значенням за типом  `2048m` (Мегабайти), `3g` (Гігабайти) і так далі. Наприклад, для запуску сервера з використанням до `3 Гб` пам'яті, потрібно використовувати таку команду:

```
java -jar -Xmx3072m Atsumeru-x.y.z.jar
```
або
```
java -jar -Xmx3g Atsumeru-x.y.z.jar 
```

## Оновлення

Для оновлення сервера його потрібно зупинити і заново запустити з використанням останньої версії `jar`
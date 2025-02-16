# Глосарій

**`Архів`** - мінімальна цільна одиниця контенту. Являє собою набір даних імпортованого файлу (шлях до файлу, [Метадані](/ua/guides/metadata.md), унікальний хеш тощо), яким оперує сервер

**`Серія` або `контент`** - збірна структура з будь-якої кількості `Архівів`. Являє собою загальні дані з усіх `Архівів` у даній `Серії`. Використовується для формування списків імпортованого контенту і містить в собі метадані даної серії (назви різними мовами, статуси, автори, опис і тд). `Серія` завжди формується автоматично під час імпортування на основі його налаштувань або певних *стандартних* правил формування. `Серію` можна тільки редагувати або видалити

**`Глава`** - атомарна одиниця `Архіву`. Список глав формується автоматично під час імпортування на основі папок у корені `Архіву`. Одна папка - одна `Глава`
:::c-danger
Із зображень у корені архіву також створюється `Глава` з назвою самого `Архіву`. Намагайтеся уникати розміщення зображень у корені, якщо така поведінка вам не подобається
:::

**`Хеш архіву`** - унікальний *ідентифікатор*, яким оперує сервер і клієнти для ідентифікації імпортованого `Архіву`. За усталеним налаштуванням створюється зі шляху до `Архіву`, але може бути статичним, записаним у `book_info.json` [Метадані](/ua/guides/metadata.md), що дає змогу привласнити той самий ідентифікатор навіть після переміщення `Архіву` у файловій системі та не втрачати історію читання [Користувачів](/ua/guides/users.md). У цього хеша завжди є префікс `atsumeru`.

**`Хеш серії`** - те ж саме, що і `Хеш архіву`, але для `Серії`. Створюється зі шляху до директорії з `Архівами`. Також може бути статичним з [Метаданих](/ua/guides/metadata.md). У даного хеша завжди є префікс `atsumeru-serie`
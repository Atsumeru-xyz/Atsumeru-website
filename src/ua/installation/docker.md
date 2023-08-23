# Запуск у Docker

## Регістри

[Docker](https://www.docker.com) образи опубліковано в таких регістрах:
- [DockerHub](https://hub.docker.com/r/atsumerudev/atsumeru)

:::c-danger
Образи підтримують архітектури `linux/arm/v7` та `linux/arm64` для запуску, наприклад, на `Raspberry Pi`, але в такому режимі підтримується тільки читання `ZIP` архівів!
:::

## Теги версій

Образ поставляється в різних версіях, які позначені тегами:
- `latest`: найсвіжіший образ
- `x.y.z`: образ із зазначеною версією `Atsumeru` (наприклад, `1.0.2`)

## Використання

Нижче наведено приклади сніпетів із поясненнями про те, як створити свій контейнер:

### За допомогою `Docker`

```
docker run -d \
    --name=atsumeru \
    -p 31337:31337 \
    -v /path/to/your/library:/library \
    -v /path/to/your/config:/app/config \
    -v /path/to/your/db:/app/database \
    -v /path/to/your/cache:/app/cache \
    -v /path/to/your/logs:/app/logs \
    --restart unless-stopped \
    atsumerudev/atsumeru:latest
```

### За допомогою `Docker Compose`

```
version: '3.3'
services:
    atsumeru:
        container_name: atsumeru
        ports:
            - '31337:31337'
        volumes:
            - '/path/to/your/library:/library'
            - '/path/to/your/config:/app/config'
            - '/path/to/your/db:/app/database'
            - '/path/to/your/cache:/app/cache'
            - '/path/to/your/logs:/app/logs'
        restart: unless-stopped
        image: 'atsumerudev/atsumeru:latest'
```

:::c-warning
Після запуску контейнера виконайте команду
```
docker logs atsumeru
```
для того, щоб дізнатися створений пароль для користувача `Admin`
:::

## Конфігурація

| Параметр                                                                     | Функція                                                                      |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `--name=atsumeru`                                                            | Назва контейнера                                                             |
| `-p 31337`                                                                   | Порт для доступу до сервера                                                  |
| `-v /path/to/your/library`                                                   | Шлях до файлів бібліотеки (архівів)                                          |
| `-v /path/to/your/db`                                                        | Директорія, де сервер зберігатиме свої бази даних                            |
| `-v /path/to/your/config`                                                    | Директорія, де сервер зберігатиме свої файли конфігурації                    |
| `-v /path/to/your/cache`                                                     | Директорія, де сервер зберігатиме свій кеш обкладинок                        |
| `-v /path/to/your/logs`                                                      | Директорія, де сервер зберігатиме свої логи                                  |

:::c-tip
За необхідності запустити відразу кілька серверів, створюйте для кожного контейнер з новою назвою і параметрами
:::

## Оновлення контейнера

### За допомогою `Docker`

- оновіть образ: `docker pull atsumerudev/atsumeru`
- зупиніть запущений контейнер: `docker stop atsumeru`
- видаліть старий контейнер: `docker rm atsumeru`
- перестворіть контейнер, використовуючи ті ж параметри, які були використані раніше для створення старого контейнера
- запустіть новий контейнер: `docker start atsumeru`

:::c-tip
Після оновлення контейнера також можна видалити старі образи командою   
`docker image prune`
:::

### За допомогою `Docker Compose`

- оновіть усі образи: `docker-compose pull` або оновіть окремий образ: `docker-compose pull atsumeru`
- нехай `Compose` оновить усі контейнери, якщо необхідно: `docker-compose up -d` або оновіть окремий контейнер: `docker-compose up -d atsumeru`

:::c-tip
Після оновлення контейнера також можна видалити старі образи командою   
`docker image prune`
:::

### Автоматичне оновлення

Можна використовувати [Watchtower](https://github.com/containrrr/watchtower) для автоматичного оновлення `Docker` контейнерів
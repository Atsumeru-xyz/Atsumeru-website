# Запуск в Docker

## Регистры

[Docker](https://www.docker.com) образы опубликованы в следующих регистрах:
- [DockerHub](https://hub.docker.com/r/atsumerudev/atsumeru)

:::c-danger
Образы поддерживают архитектуры `linux/arm/v7` и `linux/arm64` для запуска, например, на `Raspberry Pi`, но в таком режиме поддерживается только чтение `ZIP` архивов!
:::

## Теги версий

Образ поставляется в разных версиях, которые обозначены тегами:
- `latest`: самый свежий образ
- `x.y.z`: образ с указанной версией `Atsumeru` (например, `1.0.2`)

## Использование

Ниже приведены примеры сниппетов с пояснениями о том, как создать свой контейнер:

### С помощью `Docker`

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

### С помощью `Docker Compose`

```
version: '3.3'
services:
    atsumeru:
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
После запуска контейнера выполните команду
```
docker logs atsumeru
```
для того, чтобы узнать созданный пароль для пользователя `Admin`
:::

## Конфигурация

| Параметр                                                                     | Функция                                                                      |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `--name=atsumeru`                                                            | Название контейнера                                                          |
| `-p 31337`                                                                   | Порт для доступа к серверу                                                   |
| `-v /path/to/your/library`                                                   | Путь к файлам библиотеки (архивам)                                           |
| `-v /path/to/your/db`                                                        | Директория, где сервер будет хранить свои базы данных                        |
| `-v /path/to/your/config`                                                    | Директория, где сервер будет хранить свои файлы конфигурации                 |
| `-v /path/to/your/cache`                                                     | Директория, где сервер будет хранить свой кеш обложек                        |
| `-v /path/to/your/logs`                                                      | Директория, где сервер будет хранить свои логи                               |

:::c-tip
При необходимости запустить сразу несколько серверов, создавайте для каждого контейнер с новым названием и параметрами
:::

## Обновление контейнера

### С помощью `Docker`

- обновите образ: `docker pull atsumerudev/atsumeru`
- остановите запущенный контейнер: `docker stop atsumeru`
- удалите старый контейнер: `docker rm atsumeru`
- пересоздайте контейнер используя те же параметры, которые были использованы ранее для создания старого контейнера
- запустите новый контейнер: `docker start atsumeru`

:::c-tip
После обновления контейнера также можно удалить старые образы командой   
`docker image prune`
:::

### С помощью `Docker Compose`

- обновите все образы: `docker-compose pull` или обновите отдельный образ: `docker-compose pull atsumeru`
- пусть `Compose` обновит все контейнеры, если необходимо: `docker-compose up -d` или обновите отдельный контейнер: `docker-compose up -d atsumeru`

:::c-tip
После обновления контейнера также можно удалить старые образы командой   
`docker image prune`
:::

### Автоматическое обновление

Можно использовать [Watchtower](https://github.com/containrrr/watchtower) для автоматического обновления `Docker` контейнеров
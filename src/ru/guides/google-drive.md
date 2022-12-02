# Google Drive

Если ваши файлы хранятся в [Google Drive](https://drive.google.com/), вы можете подключить его для доступа `Atsumeru` к файлам используя сторонние решения

## Plexdrive

На Linux системах можно использовать [Plexdrive](https://github.com/plexdrive/plexdrive) и подключить [Google Drive](https://drive.google.com/) в виде `read-only` [FUSE](https://www.wikiwand.com/ru/Filesystem_in_Userspace) файловой системы

:::c-danger
Файлы, импортированные из такой файловой системы нельзя модифицировать. Поэтому редактирование [Метаданных](./metadata.md) не будет работать. Рекомендуется заранее записать все необходимые [Метаданные](./metadata.md) перед загрузкой их в [Google Drive](https://drive.google.com/)
:::

## rclone

[rclone](https://rclone.org/) позволяет подключить [Google Drive](https://drive.google.com/) как директорию и синхронизировать изменения в ваших файлах. Для оптимальной работы с `Atsumeru` лучше всего использовать кастомную конфигурацию:
```
rclone mount <name>:<path> <mount_point/folder> \
  --no-checksum \
  --use-server-modtime \
  --no-gzip-encoding \
  --no-update-modtime \
  --no-seek \
  --modify-window 2m \
  --allow-other \
  --allow-non-empty \
  --dir-cache-time 30m \
  --cache-read-retries 15 \
  --cache-db-purge \
  --timeout 30m \
  --vfs-cache-mode full \
  --vfs-read-chunk-size 2M \
  --vfs-read-chunk-size-limit 5M \
  --vfs-cache-max-age 30m \
  --attr-timeout 20s \
  --poll-interval 9m \
  --vfs-cache-poll-interval 10m
```
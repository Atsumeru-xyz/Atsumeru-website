# Google Drive

Якщо ваші файли зберігаються в [Google Drive](https://drive.google.com/), ви можете підключити його для доступу `Atsumeru` до файлів, використовуючи сторонні рішення

## Plexdrive

На Linux системах можна використовувати [Plexdrive](https://github.com/plexdrive/plexdrive) і підключити [Google Drive](https://drive.google.com/) у вигляді `read-only` [FUSE](https://www.wikiwand.com/uk/Filesystem_in_Userspace) файлової системи

:::c-danger
Файли, імпортовані з такої файлової системи, не можна модифікувати. Тому редагування [Метаданих](./metadata.md) не працюватиме. Рекомендується заздалегідь записати всі необхідні [Метадані](./metadata.md) перед завантаженням їх у [Google Drive](https://drive.google.com/)
:::

## rclone

[rclone](https://rclone.org/) дає змогу підключити [Google Drive](https://drive.google.com/) як директорію і синхронізувати зміни у ваших файлах. Для оптимальної роботи з `Atsumeru` найкраще використовувати кастомну конфігурацію:
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
# Google Drive

If your files are stored in [Google Drive](https://drive.google.com/), you can connect it to access files from `Atsumeru` using third-party solutions

## Plexdrive

On Linux systems, you can use [Plexdrive](https://github.com/plexdrive/plexdrive) and mount [Google Drive](https://drive.google.com/) as a `read-only` [FUSE](https://www.wikiwand.com/ru/Filesystem_in_Userspace) file system

:::c-danger
Files imported from such file system cannot be modified. Therefore, editing [Metadata](./metadata.md) will not work. It is recommended to write down all necessary [Metadata](./metadata.md) in advance before uploading them to [Google Drive](https://drive.google.com/)
:::

## rclone

[rclone](https://rclone.org/) allows you to connect [Google Drive](https://drive.google.com/) as a directory and synchronize changes to your files. For optimal performance with `Atsumeru`, it is best to use a custom configuration:
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
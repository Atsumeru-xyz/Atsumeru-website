## Running in Docker

## Registers

[Docker](https://www.docker.com) images are published to the following registries:
- [DockerHub](https://hub.docker.com/r/atsumerudev/atsumeru)

:::c-danger
Images support `linux/arm/v7` and `linux/arm64` architectures to run, for example, on a `Raspberry Pi`, but only reading `ZIP` archives is supported in this mode!
:::

## Version tags

The image comes in different versions, which are labeled with tags:
- `latest`: the most recent image
- `x.y.z`: the image with the specified version of `Atsumeru` (e.g. `1.0.2`).

## Usage

The following are sample snippets with explanations on how to create your container:

### Using `Docker`

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

### Using `Docker Compose`

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

After starting container, run command
```
docker logs atsumeru
```
to find out  created password for `Admin` user
:::

## Configuration

| Parameter                                                                    | Function                                                                     |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| `--name=atsumeru`                                                            | Container name                                                               |
| `-p 31337`                                                                   | Server access port                                                           |
| `-v /path/to/your/library`                                                   | Path to your library files                                                   |
| `-v /path/to/your/db`                                                        | Directory where server will store its databases                              |
| `-v /path/to/your/config`                                                    | Directory where server will store its configuration files                    |
| `-v /path/to/your/cache`                                                     | Directory where server will store its covers cache                           |
| `-v /path/to/your/logs`                                                      | Directory where server will store its logs                                   |

:::c-tip
If you need to run several servers at once, create a container with a new name and parameters for each one
:::

### Updating container

### Using `Docker`

- update image: `docker pull atsumerudev/atsumeru`
- stop running container: `docker stop atsumeru`
- delete old container: `docker rm atsumeru`
- recreate container using same parameters that were used to create the old container
- start new container: `docker start atsumeru`

:::c-tip
After updating container, you can also delete old images with command   
`docker image prune`
:::

### Using `Docker Compose`

- update all images: `docker-compose pull` or update an individual image: `docker-compose pull atsumeru`
- let `Compose` update all containers if necessary: `docker-compose up -d` or update an individual container: `docker-compose up -d atsumeru`

:::c-tip
After updating container, you can also delete old images with command   
`docker image prune`
:::

### Automatic update

You can use [Watchtower](https://github.com/containrrr/watchtower) to automatically update `Docker` containers
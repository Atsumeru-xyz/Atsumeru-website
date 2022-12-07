# Setting up your server

## Changing port

By default, `Atsumeru` starts on port `31337`, but, sometimes, you may need to change it (port is busy, not suitable, you need to start several servers). To change port, add flag `-Dserver.port=<port>` to server start command, where `<port>` is desired port. For example:
```
java -Dserver.port=<port> -jar Atsumeru-x.y.z.jar
```

## Configuring advanced features

All server settings are made either through the configuration interface in [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> or by manually editing the `atsumeru.properties` configuration file, which located next to a `jar` file

:::c-danger
Manual editing of configuration file requires restarting server to apply settings. Changing settings via [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> is made immediately
:::

## Setting up with Atsumeru Manager

To configure server it is sufficient to connect to it via [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> and click <MaterialIcon icon="settings"/> on bottom panel of application to open window with available settings, an example of which is shown below

<img style="display: block; margin: 0 auto" src="/assets/media/en/installation/server-settings.png">
<p style="text-align: center; font-size:75%">Settings editing interface via Atsumeru Manager</p>

:::c-tip
A more detailed description of each setting is available in [Setup with a configuration file](./server-settings.md#setup-with-a-configuration-file)
:::

## Setup with a configuration file

The following describes available keys and their possible values, which can be changed in `atsumeru.properties` configuration file using formula `<key>=<value>`. Each pair must be on a new line

#### allow_loading_list_with_volumes `<true/false>`

Allows loading volume lists along with read history for current user in `REST API' responses

:::c-tip
Function is used in applications [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png">, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> and [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/> to display number of volumes and current user's reading progress on `Series` cards in the `Series` lists
:::

By default: `true`

#### allow_loading_list_with_chapters `<true/false>`

Allows loading chapter lists along with reading history for current user in `REST API' responses

:::c-danger
Works only with enabled [allow_loading_list_with_volumes](./server-settings.md#allow-loading-list-with-volumes-true-false)
:::

By default: `true`

#### disable_chapters `<true/false>`

Completely disables reading and importing chapter lists from archives during import. In this mode server operates only with `Archives` and `Series`.

:::c-tip
Disabling chapter import significantly speeds up importing by activating multi-threaded mode
:::

By default: `false`

#### disable_request_logging_into_console `<true/false>`

Completely disables logging of requests to `REST API` into console and leaves only logging into `requests.log` log file

:::c-tip
Progress of importing and caching covers will continue to be displayed in console
:::

By default: `false`

#### disable_bonjour_service `<true/false>`

Completely disables server discovery service using `Bonjour/Zeroconf` protocol ([Bonjour](https://github.com/mannodermaus/RxBonjour))

:::c-tip
When service is enabled, `Atsumeru` supported applications will be able (if implemented) to detect server in local network for fast connection
:::

By default: `false`

#### disable_watch_for_modified_files `<true/false>`

Disables monitoring changes of imported files in file system with [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). In this case automatic `Search for new archives` will be started only after deleting or adding new files

By default: `false`

#### disable_file_watcher `<true/false>`

Completely disables monitoring changes of imported files in file system with [FileSystemWatcher](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/devtools/filewatch/FileSystemWatcher.html). In this case, `Search for new archives` will have to be run manually after changes are made 

By default: `false`
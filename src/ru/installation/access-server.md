# Подключение к серверу

Как только `Atsumeru` будет запущен, доступ к `REST API` из приложений производится по ссылке `http://<ip/адрес сервера>:<порт>`

:::c-tip
При запуске сервера локально (например, когда подключение к серверу будет производиться с устройства, на котором он запущен), `<ip/адрес сервера>` будет `localhost`

`<порт>` по умолчанию - `31337`
:::

:::c-danger
Веб-интерфейс для управления сервером и чтения контента **недоступен**  
На данный момент его заменяют нативные приложения ([Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png">, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/>, [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/>)
:::
# Running from a Jar file

## Installing Java

:::c-tip
`Atsumeru` requires installed **Java** version **8+** (**1.8+**). Both [Oracle Java](https://www.java.com/en/download/manual.jsp) and [OpenJDK](https://www.openlogic.com/openjdk-downloads) are suitable  
To find out if **Java** is installed and its version, use command `java -version`
:::

Install **Java** for your system:

#### Windows
Download and install the installation kit from [Oracle](https://www.java.com/en/download/manual.jsp)/[OpenJDK](https://www.openlogic.com/openjdk-downloads)

#### Linux/MacOS
Download [OpenJDK](https://www.openlogic.com/openjdk-downloads) from repository or install it manually from **deb/rpm/tar.gz** package

:::c-tip
Often current **Linux** systems come with **OpenJDK 11+** and no additional installation is required
:::

## Launching

You can run `Atsumeru` from a standalone `jar` file. The actual version can be downloaded from [Releases](https://github.com/AtsumeruDev/Atsumeru/releases) section in GitHub repository

To start server you can use following command (replace `x.y.z` with the version of downloaded file)

```
java -jar Atsumeru-x.y.z.jar
```

:::c-tip
On **Windows** systems you can use `javaw` instead of `java` to start server without displaying command line window
:::

Once started, server will be available for management from [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> and read from supported applications (e.g., [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> or [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/>) 

:::c-warning
The first startup is accompanied by creation of necessary files (cache, settings, databases) next to a `jar` file. Also, an `Admin` user is created with a random password, which will be displayed once in the console. It is recommended to change this password and/or create a new Administrator by removing default one
:::

:::c-danger
To create a new `Admin` user, just stop server, delete database at `/database/users.db` and start server  
This operation deletes all previously created users, so it is not recommended to perform it if there are any
:::

## Increasing memory limits

By default, `java' process gets a limited maximum amount of RAM it can use while running. Often, this is `~1 GB'. If there are problems with server, or if errors like `OutOfMemoryException` appear in the console/logs, you probably need to increase maximum amount of memory that `Atsumeru` can use

To do this, add `-Xmx<size>` flag to server start command, where `<size>` can be any value of type `2048m` (Megabytes), `3g` (Gigabytes) and so on. For example, to start a server using up to `3GB` of memory, you would use following command:

```
java -jar -Xmx3072m Atsumeru-x.y.z.jar
```
or
```
java -jar -Xmx3g Atsumeru-x.y.z.jar 
```

## Updating

To update server it must be stopped and restarted using the latest `jar` version
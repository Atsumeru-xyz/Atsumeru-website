# What is Atsumeru?

`Atsumeru (集める)` - is a free [self-hosted](https://www.wikiwand.com/en/Self-hosting_(web_services)) media server for manga/comics/light novels with focus on cataloging and collecting content, easy filling of [Metadata](./metadata.md) and working speed

## How does it work?

Very simple:
- Install and run `Atsumeru` on your computer or NAS
- Add directories with archives/books to the import list
- Wait while `Atsumeru` processes the data
- Connect to the server using a supported application (e.g., [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png">, [Atsumeru](https://github.com/AtsumeruDev/AtsumeruAndroid) <MaterialIcon icon="android"/> or [AniLabX](https://github.com/CrazyXacker/anilabx) <MaterialIcon icon="android"/>)
- Enjoy comfortable reading!

## On what systems does Atsumeru work?

`Atsumeru` can run on any system where Java can be installed:
- Windows
- Linux
- MacOS
- Most NAS devices

## What archive/book formats are supported?

`Atsumeru` supports import of these formats:
- CBZ
- CBR (including RAR5 and Multivolume Archives)
- CB7
- ZIP
- RAR (including RAR5 and Multivolume Archives)
- 7z
- PDF
- ePub (with restrictions)
- FB2 (with limitations)
- Djvu

:::c-tip
PDF and Djvu are rendered on server side on demand, but the end client can download the actual files to read them natively on device
:::

:::c-warning
Although server can handle `CBR`, `CB7`, `RAR` and `7z`, these formats are not recommended if you plan to write [Metadata](./metadata.md) directly into archives
:::

:::c-danger
Server cannot render `ePub` and `FB2`. To read content in these formats, the end client must support them natively
:::

## What image formats are supported?

Following image formats are fully supported:
- JPEG
- PNG
- GIF
- WebP (with on-demand support for conversion to JPEG on the fly)

Supported in limited mode (no cover cache and no support for conversion):
- AVIF
- HEIC
- HEIF

:::c-danger
Server supports conversion of `WebP` into `JPEG` on the fly on client request. The other formats are output unchanged, so the implementation of `AVIF`, `HEIC` and `HEIF` support is left to client developer
:::
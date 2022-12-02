# Metadata

In `Atsumeru` the main emphasis is on filling your content with metadata. As much as possible. This makes it easier to find content, makes it faster and easier to explore descriptions/genres/tags/etc, and improves appearance of the library

## Supported metadata formats

### ComicInfo.xml

A metadata format invented for `ComicRack` application, which is no longer in development. Format is severely outdated and very limited in its original implementation, but is still used by some applications due to lack of an alternative

`Atsumeru` extracts `ComicInfo.xml` from archives during import and reads following fields:  
`Title` `Circles` `Summary` `Volume` `Year` `Month` `Writer` `Publisher` `Genre` `Characters` `PageCount` 

:::c-warning
Due to fact that format is very outdated and it is almost pointless to expand it, an alternative metadata format [book_info.json](./metadata.md#book-info-json) has been developed on which `Atsumeru` and [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> relies
:::

### book_info.json
[<Badge vertical="middle" text="Format schema"/>](./book-info-scheme.md)

A specially developed metadata format for entire `Atsumeru` ecosystem. Format supports a large number of metadata fields for every taste and allows you to fill metadata not only for comics ([ComicInfo.xml](./metadata.md#comicinfo-xml) was developed for comics) but also for `Manga`, `Hentai` and `Ranobe`

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> contains [metadata editor](./metadata.md#metadata-editor), which works with this particular metadata format

:::c-tip
`Atsumeru` can also store and retrieve static unique hashes of `Archive` and `Serie` inside `atsumeru` object in metadata, which allow re-importing `Archives` and `Series` without binding to file path and without losing read history
:::

#### chapter_info.json
[<Badge vertical="middle" text="Format schema"/>](./book-info-scheme.md#chapter-info-scheme)

Auxiliary metadata format for chapters in archives (one directory - one chapter). Supports almost the same set of metadata fields and allows you to organize a complex system of chapters in archives, each with its own unique metadata (relevant, for example, for `Manga` or `Hentai` magazines, which often contain chapters of different works)

## Metadata editor

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> contains a powerful metadata editor in [book_info.json](./metadata.md#book-info-json) format

Several convenient and transparent editing modes are supported:
- editing imported `Series` and `Archives` on server
- editing of local `Archives` (files)
- direct editing of file [book_info.json](./metadata.md#book-info-json)

### Editor opening 

You can open editor in several ways:
- from context menu of `Serie`.
- from context menu of `Archive` inside `Serie`.
- by clicking <MaterialIcon icon="edit"/> on top panel of application:
  - by clicking on file selection
  - by dragging file to the window

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/metadata-editor.png">
<p style="text-align: center; font-size:75%">Metadata editor interface</p>

### Editing

Editor is intuitive and provides access to all possible metadata fields in [book_info.json](./metadata.md#book-info-json) format, but a little clarification is needed:
- field `Alternative title` suggests writing title in your language
- `Rating` field is worth filling in if you're linking your content to external "database services" like [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/), [ComicVine](https://comicvine.gamespot.com/), etc. This field means a position of content in a rating of such services
- field `Rating` means average rating of content on a ten-point scale with a floating point
- `Volume` field is not available while editing `Serie`. `Atsumeru` will use this value from `Archive` metadata or try to determine it itself from file name

All fields have an extended context menu with additional functions:

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/metadata-editor-context-menu.png">
<p style="text-align: center; font-size:75%">Extended context menu</p>

#### Bounded services

At the bottom of window there is a section `Bounded services`, which displays a list of fields of external services supported by `Atsumeru`, which can be `linked` to content. It can be useful for fast binding of client-side content to tracking services like [Shikimori](https://shikimori.one/), [MyAnimeList](https://myanimelist.net/) and others

:::c-tip.
Each field has auto-complete functions. You just need to insert link/content ID into corresponding field, and second field will be filled in automatically
:::

:::c-warning
Metadata file [book_info.json](./metadata.md#book-info-json) supports specifying any `Bounded services`. Specific list of services for `Atsumeru` has been selected at developer's discretion
:::

### Obtaining metadata from external sources

[Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> also supports metadata parsing functionality from supported catalogs. Parsers are available for installation in **Repository**, which can be opened by clicking <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/earth.png"> on the top bar of application

To get metadata, in [editor](./metadata.md#metadata-editor) click on `Get metadata`, insert supported link to content in field and click <MaterialIcon icon="download"/>. 

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/metadata-editor-fetch.png">
<p style="text-align: center; font-size:75%">Interface of metadata obtaining window</p>

:::c-tip
If it fails to get metadata by link, you can paste HTML code of content page into field below and try again
:::

### Saving

Once you have changed metadata, you need to save it. There are four saving modes when editing metadata on server:
- to linked `Archives` (metadata is written to all `Archives` of `Serie`)
- to external metadata files (in this case saving takes place to external [book_info.json](./metadata.md#book-info-json) file, which is saved at path `<current directory>/.atsumeru/<archive name>/book_info.json`)
- only into database (writing is done only into database without changing original files and without creating separate files [book_info.json](./metadata.md#book-info-json))
- only `Serie` (only `Serie` is changed and only in database. Useful when only `Serie` needs to be changed without changing `Archives`)

:::c-tip
Any method of writing metadata (except writing only `Serie`) automatically detects and writes volume numbers of `Archives`
:::

:::c-warning
Editing local `Archives` (files) and [book_info.json](./metadata.md#book-info-json) always saves changes into file
:::
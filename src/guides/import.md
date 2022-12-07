# Import

After you start server, you need to fill it with your content. This process is very simple and requires minimal involvement

## Import directory management

Directory management window can be opened by clicking <MaterialIcon icon="file_open"/> on a panel of [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png"> and selecting `Directory Management`. In this window you can view list of added directories, [delete](./import.md#deleting-directory) and [add new](./import.md#adding-a-new-directory). Also, it is available to run selective import for individual directories with hints on which import mode will be run

:::c-tip
For convenience, in addition under each directory displays the amount of content that is imported from it
:::

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/import-dir-list.png">
<p style="text-align: center; font-size:75%">Directory management interface</p>

## Adding a new directory

To add a new directory, in `Directory Management` window, click on `Add Directory`

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/import-dir-add.png">
<p style="text-align: center; font-size:75%">Adding directory interface</p>

In `Directory path` field specify path to desired directory from which server will try to import content

:::c-tip
Clicking on <MaterialIcon icon="folder"/> opens a convenient directory selection window
:::

### Import settings

Before adding a directory, you can configure some import parameters:

:::c-danger
[Import as Singles](./import.md#import-as-singles) and [Import as Singles only files from root directory](./import.md#import-as-singles-only-files-from-root-directory) settings may not be used if [Metadata](./metadata.md) already exists in your files and has `Status` set to `Single`
:::

#### Import as Singles

Activating this option will force the server to import each file as a `Single`, creating a separate `Serie` for them ignoring any other import conditions (not automatically collecting `Serie` from subdirectories and ignoring status from [Metadata](./metadata.md)). This option may be useful if your content is somehow catalogued (e.g., `Oneshots` by different authors sorted into directories), but you do not want the server to take this into account and not create incorrect `Series`

#### Import as Singles only files from root directory

Activating this option will force server to import each file in root of specified directory as a `Single`, creating a separate `Serie` for them. This option may be useful if your content consists of both `Series` and `Singles/Oneshots` and you want to import them without creating incorrect `Series`

## Import process

Clicking <MaterialIcon icon="save"/> `Save` in the add directory dialog box will start import process on server. This process is quite fast (~20 archives/sec in single-threaded mode and up to 40 archives/sec in multi-threaded mode)

During import process server reads [Metadata](./metadata.md) from archives, searches for and prepares covers, generates chapter lists and automatically creates `Series` from files in subdirectories

The server **is not blocked** while the importing is in progress, so it can be used as usual

:::c-tip
If a file has [Metadata](./metadata.md) written on it and its status is `Single`, server will automatically import that file as `Single`, even if it is placed in a subdirectory with other files
:::

## Caching covers (generating previews)

When import process is over, cover art caching (preview generation) service will automatically start for all imported files for which no cover art is available. This operation takes considerably longer, because it is necessary to extract the cover from each archive, decode it, reduce its size and save it to disk. Server is also **not blocked** at this point

### Choosing cover of `Archive`

Selecting a cover from archive is done according to some criteria (with priority from top to bottom):
- image has name `00000.<extension>`.
- image has word `cover` in its name
- image is first in list with a supported extension: `jpg`, `jpeg`, `png`, `bmp`, `webp`

### Choosing cover of `Serie`

By default, cover of `Serie` becomes cover of first `Archive`

It is also possible to provide an alternative cover with name `cover.<extension>`, where `extension>` can be one of: `jpg`, `jpeg`, `png`, `bmp`, `webp`. The cover must be placed in directory with other files that will be collected into `Serie`

:::c-tip
If option [Allow loading lists with volumes](/installation/server-settings.md#allow-loading-list-with-volumes-true-false) is enabled, server will replace cover of `Serie` with cover of first unread `Archive`

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/import-cover-change.png">
<p style="text-align: center; font-size:75%">Automatic cover change</p>
:::

### Selecting cover of remaining files

For `PDF` and `Djvu` cover will be first page of book  
For `ePub` cover will be cover from `OPF` book metadata or first image in archive  
For `FB2` cover will be cover from metadata  

## Deleting directory

To delete a directory, click <MaterialIcon icon="delete"/> next to a directory in control window. During deletion, all related content will be removed from library. Reading history remains and will be restored automatically after re-importing
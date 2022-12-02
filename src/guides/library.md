# Library

All imported content `Atsumeru` puts in a library. It is always single and global for entire server

Content can be divided into groups by using [Dynamic categories](./library.md#dynamic-categories) or by creating an unlimited number of [Categories](./library.md#categories) and placing content into them

By default, all imported content is placed in [Category](./library.md#categories) `Unsorted` unless the content type is specified in [Metadata](./metadata.md)

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/app-library.png">
<p style="text-align: center; font-size:75%">Library interface</p>

:::c-tip
Right-clicking on content card opens a context menu with additional functions like changing [Category](./library.md#categories) or editing [Metadata](./metadata.md)

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/app-library-context-menu.png">
<p style="text-align: center; font-size:75%">Content card context menu</p>
:::

## Dynamic categories

`Dynamic categories` - is a special function that automatically groups content into categories based on [Content types](/glossary/content-types.md)

Grouping occurs immediately during import if content type is specified in [Metadata](./metadata.md) or after editing [Metadata](./metadata.md) with specifying/changing type

Category data appears if there is at least one `Serie` with required type in database and is automatically deleted if there is no `Serie`. You cannot directly manage categories (create/edit/delete), but you can change their order as you like

:::c-tip
By moving content to [Category](./library.md#categories) it will no longer belong to a `Dynamic category` even if [Content types](/glossary/content-types.md) match. This way you can get rid of  unnecessary category completely
:::

:::c-warning
There is also a *special* `Dynamic category` - `Unsorted`. All content without specified [Content type](/glossary/content-types.md) and [Categories](./library.md#categories) are automatically placed here
:::

## Categories

In addition to (or as an alternative to) [Dynamic categories](./library.md#dynamic-categories) you can create your own `Categories` and move content there. By clicking <MaterialIcon icon="local_offer"/> on [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> panel `Category editor` will opens, where you can edit, delete and create new categories

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/categories-edit.png">
<p style="text-align: center; font-size:75%">Category editor interface</p>

:::c-warning
Category name must be unique
:::

Selecting `Edit categories` from context menu of content will open a similar window where you can specify in which categories to put it

:::c-tip
Content can be in an unlimited number of categories at the same time
:::

If you delete a category, all content will be moved to `Unsorted` or [Dynamic categories](./library.md#dynamic-categories) based on [Content types](/glossary/content-types.md)

### Changing order of categories

Order of categories can be changed by dragging and dropping category tabs on the bottom panel of the application

## Metacategories

From all [Metadata](./metadata.md) of all content on server, `Atsumeru` automatically creates `Metacategories`. This is a special section in which content is grouped according to formula `<category>` > `<tag>` > `<content lists>`, where:
- `<category>` - one of the predefined [Metadata categories](/glossary/metadata-categories.md)
- `<tag>` - an atomic category unit (e.g., individual author, translator, genre, etc.)
- `<content lists>` - generated content lists that contain this `<tag>` in `<category>` in metadata

Metacategories work independently of the user, they cannot be controlled or directly changed (can be changed only when [Metadata](./metadata.md) of content is changed). They cannot be disabled or somehow configured

:::c-warning.
It is not necessary to use and/or maintain `Metadata categories`. Client's developer can choose not to implement this functionality or make it optional
:::

## Sorting

`Atsumeru` supports a huge number of [Sort types](/glossary/sort-types.md)

:::c-warning
Sorting `By last read` is a bit slower due to additional queries to reading history
:::

Sorting can be used either with default content lists or combined with [Filtering and searching](./library.md#filtering-and-searching)

## Filtering and searching

### Filtering

Similar to [Metacategories](./library.md#metacategories), from all [Metadata](./metadata.md) of all content on server is collected lists of `tags` for all [Metadata categories](/glossary/metadata-categories.md). These lists can be used for more accurate content selection

:::c-tip
Nearly all [Metadata categories](/glossary/metadata-categories.md) supports multiple and/or exclusionary filtering
:::

:::c-warning
The quality implementation of filtering interfaces is left to client developer
:::

### Searching

Server supports keyword searches on main fields (titles) and on all other [Metadata](./metadata.md) fields. For example, if you search for `Honna`, server will display all content authored by `Honna Wakou`

:::c-tip
For ease of processing and filling in [Metadata](./metadata.md) in `Unsorted` category, Administrators can also search by file paths. It is no different from the usual search. Just use part of the path to required files as a phrase. For example, if you search by the phrase `Rebirth`, server will display all content whose path contains the phrase `DC Rebirth`
:::

:::c-danger
Full-text [Fuzzy-search](https://www.wikiwand.com/en/Approximate_string_matching) in not supported
:::

## Content removal

Content can be removed from Library with help of its context menu item. Physically, the file is not deleted, but *hides* the `Serie` entry itself in database. Re-importing does not restore deleted content

:::c-tip
You can restore deleted content by [deleting directory from import](./import.md#delete-directory) where content is located and re-importing it
:::
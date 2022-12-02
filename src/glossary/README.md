# Glossary

**`Archive`** - minimal integral unit of content. Represents data set of imported file (file path, [Metadata](/guides/metadata.md), unique hash, etc.) that server operates with

**`Serie` or `content`** - composite structure from any number of `Archives`. Represents general data from all `Archives` in the given `Serie`. It is used to compile lists of imported content and contains metadata of this series (titles in different languages, statuses, authors, descriptions, etc.). `Serie` is always created automatically at the time of import based on its settings or certain *standard* forming rules. A `Serie` can only be edited or deleted

**`Chapter`** - atomic unit of `Archive`. List of chapters is generated automatically during import based on folders in root of `Archive`. One folder - one `Chapter`

:::c-danger
From images in the root of archive also creates a `Chapter` with name of `Archive` itself. Try to avoid placing images in root if you don't like this behavior
:::

**`Archive hash`** - unique *identifier* used by server and clients to identify imported `Archive`. By default it is created from path to `Archive`, but can be static, written in `book_info.json` [Metadata](/guides/metadata.md), which allows to assign the same identifier even after moving `Archive` around the file system and not to lose [Users](/guides/users.md) reading history. This hash always has `atsumeru` prefix

**`Serie hash`** - is the same as `Archive hash`, but for `Serie`. It is created from path to directory with `Archives`. Can also be static from [Metadata](/guides/metadata.md). This hash always has `atsumeru-serie` prefix
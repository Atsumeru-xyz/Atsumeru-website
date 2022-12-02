# Administration

This section contains descriptions of functions that are available only to Administrators

## Check if content is downloaded from links

Allows you to check if content with provided links in [Metadata](./metadata.md) has been downloaded and imported

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/admin-check-links.png">
<p style="text-align: center; font-size:75%">Link checking interface</p>

## Clear server cache <Badge type="error" vertical="middle" text="Danger" />

Causes server to completely clear cover cache and run [caching service](./import.md#caching-covers-generating-previews)

:::c-warning
Duration of this procedure is directly proportional to number of imported files
:::

## Create unique archive hashes <Badge type="error" vertical="middle" text="Danger" />

For each `Archive` and `Serie` creates unique static hashes and writes them in [book_info.json](./metadata.md#book-info-json) metadata

:::c-warning
Duration of this procedure is directly proportional to number of imported files
:::

## Write all metadata in the archives <Badge type="error" vertical="middle" text="Danger" />

If you want to speed up metadata editing by writing only to the database, you can start writing all metadata from database into [book_info.json](./metadata.md#book-info-json) files

:::c-tip
Advanced users familiar with [SQLite](https://www.sqlite.org/index.html) databases can mass change `Archives` data directly in database and use this function to write changes to files
:::

:::c-warning
Duration of this procedure is directly proportional to number of imported files
:::
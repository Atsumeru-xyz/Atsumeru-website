# Users

Server allows you to create an unlimited number of users with different rights and permissions. Each user will have its own reading history

## User management

To open user management window (create/edit/delete), press <MaterialIcon icon="person"/> on a panel of [Atsumeru Manager](https://github.com/AtsumeruDev/AtsumeruManager) <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/windows.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/penguin.png"> <img style="position: relative; top: 6px;" width="24" height="24" src="/assets/media/icons/apple.png">.

In this window you can both change/delete users and create new ones

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/users-list.png">
<p style="text-align: center; font-size:75%">User management interface</p>

### Creating

To add a new user, click on `Add user` button. In the window that opens, you must specify:
- User name
- Password
- Roles:
  - `ADMIN` (*no restrictions. Ignoring Authorities*)
  - `USER` (*additional rights based on Authorities*)
- Authorities <Badge vertical="medium" text="optional" /> : 
  - `IMPORTER` (*allows you to control the importer*)
  - `UPLOADER` (*allows you to upload new files to server*)
  - `METADATA_UPDATER` (*allows you to edit metadata*)
  - `DOWNLOAD_FILES` (*allows you to download original files*)
- Category access <Badge vertical="medium" text="optional" /> (*restrict access to individual [Categories](./library.md#categories). Restrictions do not apply if nothing is selected*)
- Forbidden genres <Badge vertical="medium" text="optional" /> (*restrict access to content with certain [Genres](/glossary/genres.md)*)
- Forbidden tags <Badge vertical="medium" text="optional" /> (*restrict access to content with certain tags*)

Clicking on <MaterialIcon icon="save"/> `Save` will create a new user on the server

:::c-warning
[Genres](/glossary/genres.md) list is predefined and restrictions can be set at this stage

[Categories](./library.md#categories) are created by Administrator or [Importer](./import.md). Tags list is collected from [Metadata](./metadata.md) of already imported content. When changing these datasets, you need to edit previously created users to set new restrictions for them, if necessary
:::

<img style="display: block; margin: 0 auto" src="/assets/media/en/guides/users-add.png">
<p style="text-align: center; font-size:75%">User creation interface</p>

### Editing

Editing a user is no different than creating one. To edit, click on the appropriate icon next to user. A similar window will open as when creating, but with filled in data, which you can change and save  changes

:::c-tip
It is allowed to change `User name`. Reading history will not be lost, but you will need to use new name when connecting to server
:::

### Deleting

To delete a user, click on the appropriate icon next to user

:::c-warning
Current user cannot be deleted
:::
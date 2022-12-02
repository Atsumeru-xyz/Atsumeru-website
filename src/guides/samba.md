# Samba (SMB)

If your files are stored *outside of a server*, you can use [Samba (SMB)](https://www.wikiwand.com/en/Samba_(software)) to connect this storage to server

:::c-warning
Use instructions for your operating system to create and connect [Samba (SMB)](https://www.wikiwand.com/en/Samba_(software)) to server
:::

Once storage is connected, directories from it can be [Added to importer](./import.md#adding-a-new-directory) as local directories. Files added from this storage can be modified, so editing [Metadata](./metadata.md) will work as usual

:::c-tip
Under `Windows` it is recommended to mount the repositories as virtual drive letters, though mounting as a network location will also work
:::
# HTTPS

If you want to access `Atsumeru` server outside of local network, it is strongly recommended to protect requests to it with `https` (especially since the main authorization method is `Basic`)

[Spring Boot](https://spring.io/projects/spring-boot), which is the heart of server, supports `https` out of the box, but you must configure it yourself, and self-signed and [Let's Encrypt](https://letsencrypt.org/) certificates are not supported

## Reverse Proxy

The best option is to use [CloudFlare Reverse Proxy](./https.md#cloudflare-reverse-proxy), [CloudFlare Tunnel](./https.md#cloudflare-tunnel) or [Caddy](./https.md#caddy)

:::c-danger
Any of the above methods will require your own domain name with ability to change `NS-server`
:::

### CloudFlare Reverse Proxy

:::c-tip
`HTTPS` certificate will be issued for free and automatical
:::

:::c-danger
This method only works if you have a static/white IP and with ports `80`, `8080` or `443`. If your server is behind `NAT` or you want to use a different port, use [CloudFlare Tunnel](./https.md#cloudflare-tunnel)
:::

- You need to register in [CloudFlare](https://dash.cloudflare.com/)
- Click `Add Site` button on the quick access panel
- Follow instructions to add and configure your domain
- Open control panel
- Go to `DNS` section
- Set up a redirect to the actual server address

:::c-tip
It is also possible (and preferable) to enable requests proxying to cache them in `CloudFlare` and hide the real IP/address of server
:::

### CloudFlare Tunnel

:::c-tip
`HTTPS` certificate will be issued for free and automatical
:::

- You need to register in [CloudFlare Zero Trust](https://one.dash.cloudflare.com/)
- Open `Access` section
- Open `Tunnel` subsection
- Click on `Create a tunnel` and follow instructions to create a tunnel
- After tunnel is created and connector is activated, open created tunnel in control panel
- In `Public Hostnames` tab add your domain specifying the IP/address of server and its port

:::c-tip
If necessary, in `Public Hostnames` tab you can add subdomains for your domain, setting a different IP/server address or port 
:::

### Caddy

:::c-tip
[Caddy](https://caddyserver.com/) supports automatic generation of [Let's Encrypt](https://letsencrypt.org/) certificates
:::

You need to install [Caddy](https://caddyserver.com/)

Configuration examples:

#### Caddy (v2):
```
<your domain> {
  reverse_proxy http://<ip/server address>:<port>
}
```

With HTTPS:
```
{
  your@email.com
  http_port 80
  https_port 443
}

<your domain> {
  reverse_proxy http://<ip/server address>:<port>
}
```
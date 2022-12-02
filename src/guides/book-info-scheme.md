# book_info.json schema

```json
{
	"title": string,
	"alt_title": string,
	"jap_title": string,
	"kor_title": string,

	"country": string,
    "publisher": string,
    "published": string,
    "event": string,
    
    "authors": string[],
    "artists": string[],
    "languages": string[],
    "translators": string[],
    "characters": string[],
    "parodies": string[],
    "circles": string[],
    "magazines": string[],
    
    "genres": string[],
    "tags": string[],

	"chapters": int,
    "volumes": int,
    "volume": float,

    "rating": int,
    "score": float,

    "description": string,

	"content_type": enum|string,
	"age_rating": enum|string,
	"status": enum|string,
	"translation_status": enum|string,
	"color": enum|string,
	"censorship": enum|string,

	"links": jsonarray,
	"bound_services": jsonarray,

	"atsumeru": jsonarray
}
```

#### links object schema

```json
{
	"source": string,
    "link": string
}
```

#### bound_services object schema

```json
{
    "service_type": string,
    "link": string,
    "id": string
}
```


#### atsumeru object schema

```json
{
    "serie_hash": string,
    "hash": string
}
```

## chapter_info.json schema
```json
{
	"title": string,
	"alt_title": string,

    "authors": string[],
    "artists": string[],
    "languages": string[],
    "translators": string[],
    "characters": string[],
    "parodies": string[],
    
    "genres": string[],
    "tags": string[],

    "chapter": int,

    "description": string,

    "color": enum|string,
	"censorship": enum|string,

	"atsumeru": jsonarray
}
```
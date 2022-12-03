# Схема book_info.json

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

#### Схема об'єкта links

```json
{
	"source": string,
    "link": string
}
```

#### Схема об'єкта bound_services

```json
{
    "service_type": string,
    "link": string,
    "id": string
}
```


#### Схема об'єкта atsumeru

```json
{
    "serie_hash": string,
    "hash": string
}
```

## Схема chapter_info.json
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
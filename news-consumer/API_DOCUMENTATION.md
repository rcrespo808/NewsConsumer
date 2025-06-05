# NewsAPI - Developer Plan API Documentation

## Authentication

All requests require an API key. You can provide it using one of the following methods:

1. Query parameter:

```
?apiKey=YOUR_API_KEY
```

2. HTTP Header:

```
X-Api-Key: YOUR_API_KEY
```

3. Authorization Header:

```
Authorization: Bearer YOUR_API_KEY
```

---

## Endpoints

### 1. Top Headlines

* **Endpoint:** `GET https://newsapi.org/v2/top-headlines`
* **Description:** Fetches live top and breaking headlines.

**Parameters:**

* `country` (e.g., `us`, `gb`)
* `category` (e.g., `business`, `science`)
* `sources` (e.g., `bbc-news`) *(cannot be mixed with country or category)*
* `q` (keywords or phrases)
* `pageSize` (max 100)
* `page` (pagination index)

**Example:**

```
GET https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=YOUR_API_KEY
```

---

### 2. Everything

* **Endpoint:** `GET https://newsapi.org/v2/everything`
* **Description:** Search for articles from all sources and blogs.

**Parameters:**

* `q` (keywords or phrases)
* `searchIn` (`title`, `description`, `content`)
* `sources` or `domains`
* `excludeDomains`
* `from`, `to` (ISO 8601 format date range)
* `language` (e.g., `en`)
* `sortBy` (`relevancy`, `popularity`, `publishedAt`)
* `pageSize`, `page`

**Example:**

```
GET https://newsapi.org/v2/everything?q=climate+change&from=2025-06-01&to=2025-06-05&sortBy=publishedAt&language=en&apiKey=YOUR_API_KEY
```

*Supports advanced search operators (quotes, AND, OR, NOT, +, -)*

---

### 3. Sources

* **Endpoint:** `GET https://newsapi.org/v2/top-headlines/sources`
* **Description:** Returns available news publishers.

**Parameters:**

* `category`
* `language`
* `country`

**Example:**

```
GET https://newsapi.org/v2/top-headlines/sources?category=technology&language=en&country=us&apiKey=YOUR_API_KEY
```

---

## Developer Plan Limitations

* 100 requests/day
* 24-hour article delay
* Search up to 1 month old
* CORS enabled for localhost
* Basic support, no uptime SLA

---

## Sample Science Headlines Request

```
GET https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=YOUR_API_KEY
```

Refer to [https://newsapi.org/docs](https://newsapi.org/docs) for the full documentation. 
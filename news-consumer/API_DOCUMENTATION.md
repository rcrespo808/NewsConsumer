# NewsAPI - Developer Plan API Documentation

## Registered API Key

- **API Key:** Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U
- **Registration:** This key is registered for use in the NewsConsumer project. Keep it secure and do not expose it in public repositories.

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

## NewsAPI Overview

- **Base URL:** https://newsapi.org/v2/
- NewsAPI is a RESTful API that provides access to live and historical news articles from over 150,000 sources worldwide. It offers endpoints to retrieve top headlines, search for articles based on keywords, and obtain information about news sources.
- [Official Documentation](https://newsapi.org/docs)

---

## Endpoints

### 1. Top Headlines
- **Endpoint:** `GET /top-headlines`
- **Description:** Retrieves the latest headlines from various sources.
- **Parameters:**
  - `country` (optional): 2-letter ISO 3166-1 code (e.g., us, gb)
  - `category` (optional): business, entertainment, general, health, science, sports, technology
  - `sources` (optional): Comma-separated list of identifiers for the news sources or blogs you want headlines from
  - `q` (optional): Keywords or phrases to search for
  - `pageSize` (optional): Number of results to return per page (maximum 100)
  - `page` (optional): Use this to page through the results
- **Example:**
```
GET https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U
```

### 2. Everything
- **Endpoint:** `GET /everything`
- **Description:** Searches through millions of articles from over 150,000 sources.
- **Parameters:**
  - `q` (optional): Keywords or phrases to search for
  - `qInTitle` (optional): Keywords or phrases to search for in the article title only
  - `sources` (optional): Comma-separated list of identifiers for the news sources or blogs you want headlines from
  - `domains` (optional): Comma-separated list of domains to restrict the search to
  - `excludeDomains` (optional): Comma-separated list of domains to exclude from the search
  - `from` (optional): A date and optional time for the oldest article allowed (e.g., 2025-06-01)
  - `to` (optional): A date and optional time for the newest article allowed (e.g., 2025-06-05)
  - `language` (optional): The 2-letter ISO-639-1 code of the language you want to get headlines for
  - `sortBy` (optional): The order to sort the articles in. Possible options: relevancy, popularity, publishedAt
  - `pageSize` (optional): Number of results to return per page (maximum 100)
  - `page` (optional): Use this to page through the results
- **Example:**
```
GET https://newsapi.org/v2/everything?q=climate+change&from=2025-06-01&to=2025-06-05&sortBy=publishedAt&language=en&apiKey=Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U
```

### 3. Sources
- **Endpoint:** `GET /sources`
- **Description:** Returns the subset of news publishers that top headlines are available from.
- **Parameters:**
  - `category` (optional): business, entertainment, general, health, science, sports, technology
  - `language` (optional): The 2-letter ISO-639-1 code of the language you want to get sources for
  - `country` (optional): The 2-letter ISO 3166-1 code of the country you want to get sources for
- **Example:**
```
GET https://newsapi.org/v2/sources?category=technology&language=en&country=us&apiKey=Hri16CtwXylNBvFV0X6ahbv9niqze2qslvJfQ96U
```

---

## Error Handling

NewsAPI returns standard HTTP error codes along with a JSON response containing an error code and message.

**Common Error Codes:**
- 400: Bad Request – The request was unacceptable, often due to missing a required parameter.
- 401: Unauthorized – Your API key was missing or incorrect.
- 429: Too Many Requests – You made too many requests within a window of time and have been rate limited.
- 500: Server Error – Something went wrong on NewsAPI's end.

**Example Error Response:**
```json
{
  "status": "error",
  "code": "apiKeyMissing",
  "message": "Your API key is missing. Append it to the URL with the 'apiKey' parameter."
}
```

---

## Rate Limits

- NewsAPI enforces rate limits based on your subscription plan. For the free plan, the limit is typically 100 requests per day. Exceeding this limit will result in a 429 Too Many Requests error.

---

## Additional Resources
- [Official Documentation](https://newsapi.org/docs)
- [Authentication Guide](https://newsapi.org/docs/authentication)
- [Endpoints Overview](https://newsapi.org/docs/endpoints)

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
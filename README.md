# NewsConsumer

## Assignment

Create a simple Angular application that:
- Fetches and displays a list of news articles using a public API
- Includes routing (Home, Article Details, About)
- Has a clean and functional user interface

### Requirements
- Angular 12+ (or latest stable)
- Fetch from a public news API (e.g., [New York Times](https://developer.nytimes.com/) or [NewsAPI](https://newsapi.org/))
- List articles with title and short description
- Link each article to a detail page with more information
- Provide navigation routes for:
  - Home (list view)
  - About (static page)
  - Article Details (dynamic route)

### UI Expectations
- Clean and readable layout
- Responsive design is a plus
- Optional: Angular Material or Bootstrap

### Technical Guidelines
- Use Angular components and services
- Use RxJS for async data handling
- Add basic error handling for failed API calls

### API Keys
API tokens are managed in Angular's `environment` files.
`src/environments/environment.ts` contains the development keys and
`environment.prod.ts` holds the production values. The project currently
includes a token for **The News API**.

### Evaluation Criteria
- Code quality and structure
- Use of Angular best practices
- API integration and routing
- UI/UX and responsiveness
- Maintainability and organization


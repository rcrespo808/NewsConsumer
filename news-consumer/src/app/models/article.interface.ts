export interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: Date;
  source: string;
  categories: string[];
}

export interface NewsResponse {
  articles: Article[];
  totalResults: number;
  status: string;
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface SourcesResponse {
  status: string;
  sources: Source[];
}

export interface NewsApiParams {
  country?: string;
  category?: string;
  sources?: string;
  q?: string;
  pageSize?: number;
  page?: number;
  searchIn?: 'title' | 'description' | 'content';
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
} 
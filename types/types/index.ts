export type Category =
  | 'politics'
  | 'philosophy'
  | 'economics'
  | 'religion'
  | 'history'
  | 'literature'
  | 'societal-trends'
  | 'interviews';

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  bio?: string;
  affiliation?: string;
  image?: SanityImage;
  twitter?: string;
}

export interface SanityImage {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
  caption?: string;
}

export interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  author: Author;
  category: Category;
  publishedAt: string;
  excerpt: string;
  body: PortableTextBlock[];
  coverImage?: SanityImage;
  featured?: boolean;
  readingTime?: number; // minutes, computed
  wordCount?: number;
}

export interface ArticleCard {
  _id: string;
  title: string;
  slug: { current: string };
  author: { name: string };
  category: Category;
  publishedAt: string;
  excerpt: string;
  coverImage?: SanityImage;
  featured?: boolean;
  readingTime?: number;
}

// Portable Text
export interface PortableTextBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: { _key: string; _type: string; text: string; marks?: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
  listItem?: string;
  level?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  politics: 'Politics',
  philosophy: 'Philosophy',
  economics: 'Economics',
  religion: 'Religion',
  history: 'History',
  literature: 'Literature',
  'societal-trends': 'Societal Trends',
  interviews: 'Interviews',
};

export const ALL_CATEGORIES: Category[] = [
  'politics',
  'philosophy',
  'economics',
  'religion',
  'history',
  'literature',
  'societal-trends',
  'interviews',
];

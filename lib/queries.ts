export const allArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "author": author->{ name },
    category,
    publishedAt,
    excerpt,
    featured
  }
`;

export const featuredArticleQuery = `
  *[_type == "article" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    "author": author->{ name },
    category,
    publishedAt,
    excerpt
  }
`;

export const latestArticlesQuery = `
  *[_type == "article" && featured != true] | order(publishedAt desc)[0...9] {
    _id,
    title,
    "slug": slug.current,
    "author": author->{ name },
    category,
    publishedAt,
    excerpt,
    featured
  }
`;

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "author": author->{ name, affiliation, bio },
    category,
    publishedAt,
    excerpt,
    body
  }
`;

export const allSlugsQuery = `
  *[_type == "article"]{ "slug": slug.current }
`;

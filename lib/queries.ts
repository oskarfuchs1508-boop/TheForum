export const allArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "author": author->{ name },
    category,
    publishedAt,
    excerpt,
    featured,
    coverImage
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
    coverImage,
    body
  }
`;

export const allSlugsQuery = `
  *[_type == "article"]{ "slug": slug.current }
`;

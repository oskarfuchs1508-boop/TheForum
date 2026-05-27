// Temporary mock data — will be replaced by Sanity CMS queries
export const MOCK_ARTICLES = [
  {
    _id: "1",
    slug: "courage-to-be-useless",
    title: "The Courage to Be Useless: Liberal Education in an Age of Utility",
    excerpt: "Universities have surrendered the classical ideal of education for its own sake. But the crisis of meaning among young professionals suggests we may need it more urgently than ever.",
    author: "Marcus Hoffmann",
    category: "philosophy",
    readingTime: "22 min",
    date: "May 20, 2026",
    featured: true,
  },
  {
    _id: "2",
    slug: "inflation-feels-worse",
    title: "Why Inflation Feels Worse Than the Numbers Say",
    excerpt: "The gap between official statistics and lived experience reveals a deeper problem with how we measure modern economies.",
    author: "Elena Vasquez",
    category: "economics",
    readingTime: "14 min",
    date: "May 14, 2026",
    featured: false,
  },
  {
    _id: "3",
    slug: "new-right-intellectual-pretensions",
    title: "The New Right's Intellectual Pretensions",
    excerpt: "A reckoning with the philosophers and polemicists attempting to give nationalist populism a serious intellectual foundation.",
    author: "James Carrington",
    category: "politics",
    readingTime: "18 min",
    date: "May 12, 2026",
    featured: false,
  },
  {
    _id: "4",
    slug: "after-secularism",
    title: "After Secularism: Europe's Quiet Return to the Sacred",
    excerpt: "A generation raised without faith is asking religious questions again — and the institutional churches are not ready.",
    author: "Sophia Brennan",
    category: "religion",
    readingTime: "12 min",
    date: "May 9, 2026",
    featured: false,
  },
  {
    _id: "5",
    slug: "boredom-as-political-problem",
    title: "Boredom as a Political Problem",
    excerpt: "From Kierkegaard to Hannah Arendt, thinkers have understood that what societies do with idle minds shapes their politics.",
    author: "T. H. Müller",
    category: "philosophy",
    readingTime: "9 min",
    date: "May 7, 2026",
    featured: false,
  },
  {
    _id: "6",
    slug: "weimar-analogy-wrong",
    title: "The Weimar Analogy Is Almost Always Wrong",
    excerpt: "Historians are growing tired of watching commentators misuse Germany's doomed republic as a metaphor for today.",
    author: "Isabelle Fournier",
    category: "history",
    readingTime: "16 min",
    date: "Apr 30, 2026",
    featured: false,
  },
  {
    _id: "7",
    slug: "what-novel-knows",
    title: "What the Novel Still Knows That Film Cannot",
    excerpt: "Against the relentless adaptation of literary fiction into prestige television: some things resist the screen.",
    author: "A. K. Reinholt",
    category: "literature",
    readingTime: "11 min",
    date: "Apr 28, 2026",
    featured: false,
  },
  {
    _id: "8",
    slug: "legutko-interview",
    title: "Ryszard Legutko on the Liberal Paradox: \"Tolerance Became Its Own Orthodoxy\"",
    excerpt: "The Polish philosopher speaks candidly about the ideological character of contemporary liberalism, the European crisis of sovereignty, and what classical conservatives actually believe.",
    author: "Interviewed by Marcus Hoffmann",
    category: "interviews",
    readingTime: "35 min",
    date: "May 5, 2026",
    featured: true,
  },
  {
    _id: "9",
    slug: "effective-altruism-philosophical-problem",
    title: "The Problem With Effective Altruism Was Always Philosophical",
    excerpt: "Long before the FTX collapse, the movement was built on a theory of ethics that could not bear scrutiny.",
    author: "R. Alderman",
    category: "philosophy",
    readingTime: "8 min",
    date: "Apr 25, 2026",
    featured: false,
  },
  {
    _id: "10",
    slug: "credentialed-class-discontents",
    title: "The Credentialed Class and Its Discontents",
    excerpt: "Elite overproduction — too many graduates competing for too few elite positions — may be the defining social crisis of our time.",
    author: "N. Svensson",
    category: "societal-trends",
    readingTime: "13 min",
    date: "Apr 22, 2026",
    featured: false,
  },
];

export const MOCK_ARTICLE_BODY = `
When the European Central Bank announces that inflation has returned to its 2% target, the public reaction is invariably bewildered. People who shop for groceries, pay rent, or have recently renewed an insurance policy know something the headline number does not capture: prices have not fallen. They have merely stopped rising as fast.

This gap — between the official account and the felt experience — is not a case of mass delusion or economic illiteracy. It reflects something genuine and structurally important about how modern statistical agencies measure the cost of living.

The consumer price index was designed for an economy that no longer exists. It assumes a stable basket of goods, a relatively immobile population, and housing costs that reflect a reasonable proportion of income.

## The measurement problem

The CPI basket is updated, but infrequently, and the methodology of how price changes are weighted has enormous consequences. If the price of beef rises sharply, statisticians assume consumers substitute toward chicken. This is true, in one sense — people do adapt — but it also means the index systematically undercounts the felt cost of inflation by assuming consumption flexibility that not everyone has.

Housing is the starkest example. In most European CPI frameworks, owner-occupied housing is either excluded or represented through an imputed rent calculation that drastically understates the actual cost of shelter in major cities. In Frankfurt, Munich, or Zurich, a young professional might spend 45–55% of net income on rent — a figure virtually invisible in the official statistics.

## What the numbers are for

It is worth asking why we have inflation statistics at all. The original purpose was mundane: to index wages and benefits in a way that preserved real purchasing power. Over time, CPI became something else — a policy instrument, a benchmark for central bank credibility, a number that appears on the front pages of newspapers and is cited by politicians as evidence that conditions are improving or deteriorating.

This dual role creates a structural incentive problem. Any methodology that makes inflation appear lower is, in a certain sense, politically convenient — it flatters central bank performance, makes fiscal consolidation easier to justify, and allows governments to pay out smaller inflation adjustments on indexed benefits. None of this requires conscious manipulation. It is simply the way that measurement choices, made by technocrats in good faith, accumulate over decades into a systematic bias.
`;

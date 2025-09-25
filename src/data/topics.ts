export interface Topic {
  slug: string;
  title: string;
}

export const TOPICS: Topic[] = [
  { slug: 'tall', title: 'Tall og algebra' },
  { slug: 'prosent', title: 'Prosent' },
  { slug: 'funksjoner', title: 'Funksjoner og modeller' },
  { slug: 'statistikk', title: 'Statistikk' },
  { slug: 'sannsynlighet', title: 'Sannsynlighet' },
  { slug: 'okonomi', title: 'Økonomi' },
  { slug: 'geometri', title: 'Geometri og måling' },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return TOPICS.find(topic => topic.slug === slug);
}
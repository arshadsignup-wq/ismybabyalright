import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-high-lipase',
  title: 'My Stored Breast Milk Tastes Soapy (High Lipase)',
  category: 'feeding',
  searchTerms: ['high lipase breast milk', 'breast milk soapy taste', 'lipase breast milk', 'stored milk baby refuses', 'breast milk metallic after storage', 'lipase activity milk', 'how to fix high lipase milk', 'scalding breast milk lipase', 'baby refuses frozen breast milk', 'high lipase fix'],
  quickAnswer: 'High lipase is a naturally occurring enzyme that breaks down fat in breast milk. In some mothers, lipase is more active and causes stored milk to develop a soapy, metallic, or sour taste. This milk is still safe and nutritious but some babies refuse it. Scalding fresh milk before storage prevents the taste change.',
  byAge: [
    { ageRange: '0-3 months', context: 'If you discover high lipase early, you can scald milk before storing. Heat freshly expressed milk in a pan until small bubbles form at the edges (about 180F or 82C), then cool quickly in ice water and store. This preserves most nutrients while inactivating the lipase.' },
    { ageRange: '4-6 months', context: 'If you have already built a freezer stash that baby refuses, try mixing a small amount of the high lipase milk with fresh milk or mixing it into cereal or purees once baby starts solids.' },
    { ageRange: '6-9 months', context: 'High lipase milk can be mixed into solid foods like oatmeal, purees, or smoothies where the taste is masked by other flavors. You can also try adding a drop of non-alcohol vanilla extract to stored milk.' },
    { ageRange: '9-12 months', context: 'Continue to scald fresh milk before storing if baby refuses high lipase milk. Some babies accept it if warmed to a slightly higher temperature before serving.' },
    { ageRange: '12-24 months', context: 'Use remaining high lipase frozen milk in baking, cooking, or mixed into foods. Nothing is wasted.' },
  ],
  whenNormal: ['Stored milk develops a slightly different taste or smell after hours of storage', 'Baby drinks the milk despite the different taste', 'Scalding before storage prevents the taste change'],
  whenToMention: ['You have a large frozen stash that baby refuses and you need guidance on alternatives', 'You are unsure if the taste change is lipase or actual spoilage', 'You need help with the scalding technique'],
  whenToActNow: ['You suspect stored milk is actually spoiled rather than just high lipase', 'Baby becomes ill after drinking stored milk'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-smell-taste-change', 'breast-milk-storage-rules', 'breast-milk-freezer-stash-building'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breast Milk Storage. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Lipase Activity in Human Milk. Journal of Human Lactation, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};

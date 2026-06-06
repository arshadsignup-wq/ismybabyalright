import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-smell-taste-change',
  title: 'My Breast Milk Smells or Tastes Different',
  category: 'feeding',
  searchTerms: ['breast milk smell change', 'breast milk taste different', 'breast milk soapy smell', 'breast milk metallic taste', 'breast milk sour smell', 'breast milk smells bad', 'stored milk taste change', 'breast milk flavor change', 'breast milk tastes off', 'breast milk lipase smell'],
  quickAnswer: 'Changes in breast milk smell or taste can be caused by high lipase activity, diet changes, medications, or storage conditions. High lipase milk develops a soapy or metallic smell after pumping and is still safe for baby, though some babies refuse it. If your stored milk smells off, it is likely lipase-related rather than spoilage. Scalding milk before storage can prevent this.',
  byAge: [
    { ageRange: '0-3 months', context: 'If you notice stored milk smelling soapy or metallic, test your milk by storing a small amount and smelling it after a few hours. If the smell develops, you likely have high lipase. Scalding fresh milk before storage (heating to 180F until tiny bubbles form, then cooling quickly) inactivates the lipase.' },
    { ageRange: '4-6 months', context: 'If returning to work and pumping, discovering high lipase early helps you adjust your storage routine. Mix freshly scalded milk with a small amount of high lipase milk to help baby accept it.' },
    { ageRange: '6-9 months', context: 'Your diet can affect milk flavor. Garlic, spices, onions, and strong flavors transfer to breast milk. This is actually beneficial as it exposes baby to diverse flavors and may improve food acceptance later.' },
    { ageRange: '9-12 months', context: 'The same principles apply. If baby suddenly refuses stored milk, smell it to check for lipase changes. Fresh milk from the breast is not affected by lipase until it sits.' },
    { ageRange: '12-24 months', context: 'If still pumping and storing, the same storage and lipase considerations apply.' },
  ],
  whenNormal: ['Stored milk develops a slightly different smell after several hours due to lipase', 'Fresh breast milk has a mild sweet smell', 'Milk flavor changes based on what you eat'],
  whenToMention: ['Baby consistently refuses stored milk and you cannot find a workaround', 'Milk smells truly rancid or rotten rather than soapy', 'You are unsure whether your stored milk is safe to feed'],
  whenToActNow: ['Milk smells strongly putrid and you suspect true spoilage from improper storage', 'Baby becomes ill after drinking stored milk'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-high-lipase', 'breast-milk-storage-rules', 'breast-milk-color-changes'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breast Milk Storage and Handling. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk. 2023.', url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-freezer-stash-building',
  title: 'How to Build a Breast Milk Freezer Stash',
  category: 'feeding',
  searchTerms: ['breast milk freezer stash', 'building frozen milk supply', 'how much frozen breast milk need', 'pumping extra to freeze', 'breast milk freezer storage', 'breast milk stash for work', 'frozen breast milk supply', 'when to start freezer stash', 'how to pump extra milk', 'breast milk stockpile'],
  quickAnswer: 'A freezer stash of 30-60 ounces (about 3-5 days of daytime feeds) is typically enough for most mothers returning to work. You do not need hundreds of ounces. Start pumping once daily (usually in the morning when supply is highest) about 2-3 weeks before you need the milk. Store in 2-4 ounce portions to minimize waste.',
  byAge: [
    { ageRange: '0-3 months', context: 'Wait until breastfeeding is well established (usually 3-4 weeks) before adding pumping sessions to build a stash. Pumping once after the first morning feed, when supply is highest, typically yields the most. Even 1-2 ounces per session adds up over weeks.' },
    { ageRange: '4-6 months', context: 'If returning to work, 2-3 weeks of daily morning pumping should build an adequate starter stash. Remember you will be pumping at work too, so you do not need months of frozen milk. Store in small portions to reduce waste.' },
    { ageRange: '6-9 months', context: 'If you already have a stash, rotate it by using frozen milk and replacing with fresh pumped milk. Frozen breast milk is best used within 6 months for optimal nutrient quality.' },
    { ageRange: '9-12 months', context: 'As baby eats more solids, you may not need as large a stash. Use existing frozen milk before it reaches the 6-12 month storage limit.' },
    { ageRange: '12-24 months', context: 'A large freezer stash is not typically needed at this age since toddlers get most nutrition from food. Use existing frozen milk in cooking or smoothies.' },
  ],
  whenNormal: ['You pump 1-3 extra ounces per day from one additional pump session', 'It takes 2-4 weeks to build an adequate stash', 'Your supply meets baby\'s needs plus a small amount extra for storage'],
  whenToMention: ['You cannot pump any extra despite adding sessions', 'Building a stash is causing you significant stress', 'You are unsure how much frozen milk you actually need'],
  whenToActNow: ['You are pumping so much that baby is not getting enough at the breast', 'You are experiencing engorgement, clogged ducts, or mastitis from overpumping'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-storage-rules', 'breast-milk-high-lipase', 'breastfeeding-working-mom-schedule'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Storing Breast Milk. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Proper Storage of Breast Milk. 2023.', url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm' },
  ],
};

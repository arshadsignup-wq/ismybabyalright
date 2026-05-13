import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-storage-guidelines',
  title: 'Formula Storage Guidelines',
  category: 'feeding',
  searchTerms: [
    'formula storage guidelines',
    'how long is formula good for',
    'storing prepared formula',
    'formula in fridge how long',
    'can I reheat formula',
    'formula left out too long',
    'powdered formula shelf life',
    'formula storage safety',
    'how to store baby formula',
  ],
  quickAnswer:
    'Prepared infant formula can be stored in the refrigerator for up to 24 hours and should be used within two hours once at room temperature or within one hour after a feeding has begun. Opened containers of powdered formula should be used within one month and kept in a cool, dry place. Following these guidelines helps prevent bacterial growth that could make your baby sick.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are most vulnerable to foodborne illness, so strict storage guidelines are especially important. Never save formula from a partially finished bottle for later, as bacteria from your baby\'s mouth contaminate the milk during feeding. If your newborn is feeding frequently and you want to prepare bottles in advance, you can make a batch and refrigerate immediately, using each bottle within 24 hours.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby takes larger, less frequent feeds, you may find it easier to prepare bottles on demand rather than in batches. If you do prepare ahead, label each bottle with the date and time of preparation. When warming a refrigerated bottle, use a bowl of warm water or a bottle warmer rather than a microwave, which heats unevenly and can cause burns.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, you might be traveling more with your baby or sending bottles to daycare. Ready-to-feed formula is the safest option for on-the-go feeding since it is sterile until opened. For powdered formula during outings, carry pre-measured powder and a separate container of water, mixing only when ready to feed. Discard any formula left in a bottle after a feeding.',
    },
  ],
  whenNormal: [
    'You prepare formula, refrigerate it immediately, and use it within 24 hours',
    'You discard leftover formula from a bottle your baby has started drinking',
    'You use opened powdered formula within one month of opening',
    'You warm refrigerated bottles using a bowl of warm water or a bottle warmer',
  ],
  whenToMention: [
    'You are unsure about specific storage times for a specialty or ready-to-feed formula',
    'Your baby has had gastrointestinal symptoms and you want to review your preparation and storage routine',
    'You need guidance on safely storing and transporting formula for daycare or travel',
  ],
  whenToActNow: [
    'Your baby develops vomiting, diarrhea, or fever that you suspect may be from spoiled or improperly stored formula',
    'Your baby has consumed formula that was left at room temperature for several hours or looks or smells unusual',
    'Your baby shows signs of food poisoning including high fever, bloody stool, or signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Formula Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/default.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Safe Preparation, Storage and Handling of Powdered Infant Formula Guidelines.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
  ],
};

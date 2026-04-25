import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oral-rehydration-baby',
  title: 'How to Rehydrate My Baby',
  category: 'digestive',
  searchTerms: [
    'how to rehydrate baby',
    'oral rehydration solution baby',
    'pedialyte for baby',
    'baby won\'t drink fluids sick',
    'rehydrating baby after vomiting',
    'electrolytes for baby',
    'how much pedialyte to give baby',
    'baby refusing to drink when sick',
    'oral rehydration therapy infant',
    'homemade electrolyte drink baby',
  ],
  quickAnswer:
    'The best way to rehydrate a sick baby is to offer breast milk, formula, or a commercial oral rehydration solution (like Pedialyte) in small, frequent amounts. For breastfed babies, nurse more often in shorter sessions. For formula-fed babies and toddlers, offer an oral rehydration solution in small sips every few minutes. Avoid giving plain water alone to babies under six months, juice, soda, or sports drinks, as these can worsen diarrhea.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breast milk and formula are the primary rehydration fluids for babies under six months. If your breastfed baby is vomiting, try nursing for shorter periods more frequently. For formula-fed babies, your pediatrician may recommend offering small amounts (one to two tablespoons) of oral rehydration solution between formula feeds. Do not dilute formula or give plain water to babies under six months without medical guidance, as this can cause dangerous electrolyte imbalances.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue breastfeeding or formula feeding as the primary source of hydration. You can now also offer small sips of water and oral rehydration solution between feeds. If your baby is vomiting, wait about 30 minutes after a vomiting episode, then offer one teaspoon of oral rehydration solution every two to three minutes. Gradually increase the amount as your baby tolerates it. A medicine syringe can help deliver small precise amounts.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can drink oral rehydration solution from a cup or sippy cup. Offer small, frequent sips rather than large amounts at once. If your toddler refuses the rehydration solution, try offering it cold, as ice pops made from the solution, or mixed with a very small amount of juice for flavor. Continue offering normal foods as tolerated, as eating helps the gut recover. Avoid giving large amounts of apple juice or sugary drinks, which can worsen diarrhea.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers may be more cooperative with drinking but may also have stronger preferences. Oral rehydration solution popsicles, small cups with straws, and gentle encouragement all help. Once vomiting has stopped for a few hours, gradually reintroduce a normal diet. Broth-based soups, crackers, and bland foods are good starting points. If your child continues to refuse all fluids, contact your pediatrician, as IV rehydration may be needed.',
    },
  ],
  whenNormal: [
    'Your baby is taking small frequent sips of oral rehydration solution or breast milk and maintaining wet diapers during an illness',
    'Your baby vomits occasionally but is able to keep down small amounts of fluid between episodes',
    'Your toddler is drinking less than usual but is still producing wet diapers and gradually improving',
    'Your child\'s energy and mood improve after rehydration and they begin asking for food',
  ],
  whenToMention: [
    'You are unsure how much fluid to offer your baby or which products are appropriate for their age',
    'Your baby has been sick for more than 24 hours and you want to confirm your rehydration approach is working',
  ],
  whenToActNow: [
    'Your baby cannot keep any fluids down for more than eight hours or is showing signs of worsening dehydration despite your rehydration efforts',
    'Your baby under three months is refusing to feed, your baby has bloody diarrhea or vomit, or your baby is extremely lethargic, has a sunken fontanelle, or has not had a wet diaper in more than six hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Rehydration Therapy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Oral-Rehydration-Therapy.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Oral Rehydration Salts: Production of the New ORS.',
      url: 'https://www.who.int/publications/i/item/9241594845',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Managing Acute Gastroenteritis Among Children.',
      url: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5216a1.htm',
    },
  ],
};

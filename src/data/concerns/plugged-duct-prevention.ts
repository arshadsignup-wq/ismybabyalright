import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'plugged-duct-prevention',
  title: 'Preventing Plugged Milk Ducts',
  category: 'feeding',
  searchTerms: [
    'plugged duct breastfeeding',
    'clogged milk duct',
    'breast lump while nursing',
    'blocked duct prevention',
    'recurrent plugged ducts',
    'hard lump breast breastfeeding',
    'milk blister bleb',
    'plugged duct home remedy',
    'prevent clogged ducts',
  ],
  quickAnswer:
    'A plugged or clogged milk duct occurs when milk is not draining properly from a section of the breast, creating a tender, firm lump. Plugged ducts are common during breastfeeding and are usually caused by incomplete breast emptying, pressure from tight clothing, or sudden changes in feeding patterns. Most plugged ducts resolve within one to two days with frequent nursing, gentle massage, and warm compresses.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Plugged ducts are especially common in the early months when your milk supply is abundant and still regulating. Engorgement from missed or delayed feedings is a frequent trigger. To prevent plugged ducts, nurse frequently on demand, ensure your baby has a deep latch, and avoid going long stretches between feeds. Wearing a supportive but not overly tight bra and avoiding sleeping on your stomach can also help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your supply regulates, plugged ducts may become less frequent. However, changes in routine, such as returning to work or your baby sleeping longer stretches, can disrupt drainage patterns and trigger a plug. If you are pumping at work, make sure you pump at regular intervals and fully empty both breasts. Breast massage during pumping can help ensure thorough drainage.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Plugged ducts can occur when your baby begins eating more solids and nursing less frequently. The gradual decrease in demand, combined with a supply that has not yet adjusted, can lead to milk stasis. Wean gradually rather than abruptly, and if you notice a tender area developing, nurse more frequently on that side and apply warm compresses before feeds.',
    },
  ],
  whenNormal: [
    'You occasionally feel a small, tender area in your breast that resolves within a day or two with nursing and massage',
    'A plugged duct occurs after a change in your feeding or pumping schedule',
    'You notice a small white dot (milk blister or bleb) on your nipple that clears with nursing',
    'Plugged ducts happen infrequently and respond to home treatment',
  ],
  whenToMention: [
    'You are getting recurrent plugged ducts despite preventive measures and want to discuss contributing factors',
    'A plugged duct has not resolved after two to three days of home treatment',
    'You notice a persistent lump that does not change with nursing or massage',
    'You have a milk blister that is very painful or does not resolve on its own',
  ],
  whenToActNow: [
    'You develop fever, chills, body aches, or a red, hot, painful streak on your breast, which are signs of mastitis',
    'You notice pus draining from your nipple or a fluctuant area on your breast, suggesting a possible abscess',
    'You feel systemically unwell with a breast lump that is worsening rapidly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Lactational Mastitis. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549915/',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Plugged Ducts and Mastitis.',
      url: 'https://llli.org/breastfeeding-info/plugged-ducts/',
    },
  ],
};

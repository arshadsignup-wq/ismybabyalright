import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'when-to-call-pediatrician',
  title: 'When to Call Your Pediatrician',
  category: 'medical',
  searchTerms: [
    'when to call pediatrician',
    'should I call the doctor for my baby',
    'baby sick when to call doctor',
    'signs baby needs doctor',
    'baby emergency signs',
    'when to take baby to doctor',
    'baby not acting right',
    'sick baby when to worry',
  ],
  quickAnswer:
    'Knowing when to call your pediatrician can be stressful, but a good rule of thumb is: if something about your baby worries you, it is always okay to call. In general, any fever in a baby under 3 months, difficulty breathing, signs of dehydration, or a sudden change in behavior warrants a prompt call. Trust your instincts  -  you know your baby best, and pediatricians expect and welcome these calls.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first three months, babies have immature immune systems and can become seriously ill quickly. Call your pediatrician immediately for any rectal temperature of 100.4\u00b0F (38\u00b0C) or higher, refusal to eat for two or more consecutive feedings, persistent vomiting, fewer than the expected number of wet diapers, or if your baby is unusually sleepy and difficult to wake. Jaundice that worsens after the first week also warrants a call.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, fevers above 102\u00b0F (38.9\u00b0C) or lasting more than two days should prompt a call. Contact your doctor if your baby has persistent diarrhea or vomiting, seems to be in pain, has an unusual rash, or is significantly fussier than normal with no obvious explanation. If your baby is pulling at their ears or has a new cough, these are also good reasons to check in.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and start solid foods, new situations arise. Call your doctor for fevers lasting more than three days, signs of an allergic reaction after eating a new food, a fall that results in vomiting or loss of consciousness, persistent constipation or diarrhea, or if your baby seems unusually lethargic. Ear infections become common at this age, so ear tugging with fever or fussiness is worth a call.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are better at fighting infections but also more prone to injuries as they explore. Call your pediatrician for fevers above 104\u00b0F (40\u00b0C), fevers lasting more than five days, limping or refusal to use a limb, a rash with fever, signs of dehydration (no tears when crying, dry mouth, reduced urination), or any sudden behavioral change such as extreme irritability or inconsolability.',
    },
  ],
  whenNormal: [
    'You have a general question about your baby\'s development, feeding, or sleep that can wait until business hours',
    'Your baby has mild cold symptoms but is still eating, drinking, and producing wet diapers normally',
    'Your baby has a low-grade fever (under 102\u00b0F in babies over 3 months) and is alert and feeding well',
    'You want reassurance about a symptom you have read about  -  calling is always okay',
  ],
  whenToMention: [
    'Your baby has a fever lasting more than 2-3 days, even if they seem otherwise okay',
    'Your baby has had repeated episodes of vomiting or diarrhea over 24 hours',
    'Your baby has a new rash that you cannot identify, especially if accompanied by other symptoms',
    'Your baby is feeding significantly less than usual for more than a day',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months, difficulty breathing (flared nostrils, rib retractions, grunting), blue or gray skin color, a seizure, unresponsiveness, or a bulging soft spot  -  seek emergency care immediately',
    'Your baby has signs of severe dehydration: no wet diaper in 6-8 hours, no tears when crying, sunken soft spot, or dry mouth with lethargy',
    'Your baby has a stiff neck, purple or non-blanching spots on the skin, persistent high-pitched cry, or appears to be in severe pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Call the Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever Without Fear: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When Should I Seek Medical Care for My Child?',
      url: 'https://www.cdc.gov/flu/highrisk/children-warning-signs.html',
    },
  ],
};

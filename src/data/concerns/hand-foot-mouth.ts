import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hand-foot-mouth',
  title: 'Hand, Foot, and Mouth Disease in Babies',
  category: 'skin',
  searchTerms: [
    'hand foot and mouth disease baby',
    'baby blisters on hands and feet',
    'HFMD baby',
    'coxsackievirus baby',
    'baby mouth sores and rash',
    'hand foot mouth treatment baby',
    'baby won\'t eat mouth sores',
    'baby spots on hands and feet',
    'hand foot mouth contagious baby',
    'hand foot and mouth disease toddler',
  ],
  quickAnswer:
    'Hand, foot, and mouth disease (HFMD) is a very common viral illness in babies and toddlers, especially during summer and fall. It causes small blisters or sores in the mouth and a spotted rash on the hands and feet. While it can make your child uncomfortable for a few days, it is not dangerous and resolves on its own within 7-10 days.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'HFMD is less common in very young infants, but when it occurs, it can cause more discomfort because babies cannot tell you about mouth pain. Watch for fussiness, drooling, and refusal to feed, which are clues that mouth sores may be present. Keep your baby well hydrated with breast milk or formula. Contact your pediatrician if your young infant develops this illness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for HFMD, particularly in babies who attend daycare. The illness usually starts with a mild fever for 1-2 days, followed by small red spots or blisters on the palms, soles, and inside the mouth. The mouth sores can be quite painful, so your baby may refuse to eat or drink. Cool liquids, cold foods, and pain relief with infant acetaminophen can help.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are the age group most commonly affected by HFMD. The rash may also appear on the buttocks, knees, and elbows. Some children develop a more widespread rash. A notable late effect is nail changes, where fingernails or toenails may peel or shed 4-8 weeks after the illness. This is harmless and the nails grow back normally.',
    },
  ],
  whenNormal: [
    'Low-grade fever (under 101.5F / 38.6C) lasting 1-3 days at the start of the illness',
    'Small red spots or blisters on the palms, soles of the feet, and inside the mouth',
    'Fussiness and decreased appetite due to mouth discomfort for 3-5 days',
    'Mild rash on the buttocks, legs, or arms without blisters',
    'Nail peeling or shedding 4-8 weeks after recovery, which is a common harmless aftereffect',
  ],
  whenToMention: [
    'Your baby is drinking significantly less than usual and you are worried about dehydration',
    'Fever persists beyond 3 days or exceeds 102F (38.9C)',
    'The rash is widespread, very blistered, or appears different than typical HFMD descriptions',
    'Your baby seems excessively sleepy or irritable beyond what you would expect',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: no wet diapers for 6+ hours, no tears when crying, sunken fontanelle, or dry mouth',
    'Your baby develops a stiff neck, severe headache-like behavior (screaming when moved), or persistent vomiting, which could indicate viral meningitis, a rare complication',
    'Your baby under 3 months develops a fever with this illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hand, Foot, and Mouth Disease (HFMD).',
      url: 'https://www.cdc.gov/hand-foot-mouth/index.html',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Symptoms and Diagnosis of HFMD.',
      url: 'https://www.cdc.gov/hand-foot-mouth/about/signs-symptoms.html',
    },
  ],
};

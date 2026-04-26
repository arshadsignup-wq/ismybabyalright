import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'post-vaccine-fever',
  title: 'Post-Vaccine Fever',
  category: 'medical',
  searchTerms: [
    'fever after vaccine',
    'baby fever after shots',
    'post-vaccine fever normal',
    'how long does vaccine fever last',
    'baby temperature after immunization',
    'fever after 2 month shots',
    'fever after DTaP vaccine',
    'post-vaccine fever treatment',
    'when to worry fever after vaccine',
    'baby hot after vaccination',
  ],
  quickAnswer:
    'A low-grade fever after vaccination is one of the most common and expected side effects. It means your baby\'s immune system is responding to the vaccine and building protection - which is exactly what it is supposed to do. Most post-vaccine fevers are mild (under 102 degrees F), begin within 6-24 hours after the shot, and resolve within 1-2 days without any treatment needed.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'The first vaccines (Hepatitis B) are given at birth and 1 month. Fever after these vaccines is uncommon but possible. Because any fever in a baby under 2 months old needs medical attention regardless of cause, contact your pediatrician if your newborn has a rectal temperature of 100.4 degrees F (38 degrees C) or higher after vaccination.',
    },
    {
      ageRange: '2-6 months',
      context:
        'The 2-month, 4-month, and 6-month vaccine visits involve multiple shots and are the most common times for post-vaccine fever. A temperature up to 102 degrees F (38.9 degrees C) within 24-48 hours is typical. You can offer infant acetaminophen (Tylenol) if your baby is uncomfortable, but do not give it preventively before the vaccine as some research suggests it may slightly reduce the immune response.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Fever may occur after the 12-month and 15-month vaccines, which include MMR and varicella. The MMR vaccine can cause a delayed fever appearing 7-12 days after the shot, which can surprise parents who are not expecting it. This delayed fever is caused by the body\'s response to the live vaccine components and is normal. It typically lasts 1-2 days.',
    },
    {
      ageRange: '18 months - 5 years',
      context:
        'Booster shots can still cause brief fevers, though children at this age often have milder reactions than younger babies. The DTaP booster at 15-18 months and 4-6 years is most commonly associated with fever and local soreness. If your child has a fever that begins more than 48 hours after a non-live vaccine or lasts more than 3 days, it is likely from a coincidental illness rather than the vaccine.',
    },
  ],
  whenNormal: [
    'Your baby has a fever under 102 degrees F (38.9 degrees C) that begins within 24 hours of vaccination',
    'The fever resolves within 1-3 days without worsening',
    'Your baby is fussy but still feeding, making wet diapers, and able to be comforted',
    'Mild redness, swelling, or a small hard lump at the injection site',
    'A fever appearing 7-12 days after the MMR vaccine, lasting 1-2 days',
  ],
  whenToMention: [
    'The fever is above 102 degrees F (38.9 degrees C) or lasts more than 3 days after a non-live vaccine',
    'Your baby has a rash, excessive crying for more than 3 hours, or seems more ill than you would expect from a simple vaccine reaction',
  ],
  whenToActNow: [
    'Any fever of 100.4 degrees F (38 degrees C) or higher in a baby under 2 months old, regardless of vaccination',
    'Your baby has a fever above 104 degrees F (40 degrees C), is extremely lethargic, inconsolable, has difficulty breathing, or shows signs of an allergic reaction such as hives, swelling of the face or throat, or wheezing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Possible Side Effects from Vaccines.',
      url: 'https://www.cdc.gov/vaccines/vac-gen/side-effects.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: What You Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Childhood Vaccines. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/childhoodvaccines.html',
    },
  ],
};

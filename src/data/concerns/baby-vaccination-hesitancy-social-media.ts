import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-vaccination-hesitancy-social-media',
  title: 'Vaccine Hesitancy: Navigating Social Media Misinformation',
  category: 'medical',
  searchTerms: [
    'vaccine hesitancy baby',
    'anti-vaccine social media',
    'are vaccines safe for babies',
    'vaccine misinformation parents',
    'baby vaccine side effects',
    'vaccine safety concerns baby',
    'vaccines cause autism debunked',
    'too many vaccines baby',
    'vaccine ingredients safety',
    'should I vaccinate my baby',
    'vaccine schedule concerns',
  ],
  quickAnswer:
    'Childhood vaccines are among the most thoroughly studied medical interventions in history and have been proven safe and effective by decades of research involving millions of children. The original study claiming a link between vaccines and autism was fraudulently fabricated and has been thoroughly debunked by hundreds of subsequent studies. Social media algorithms often amplify anti-vaccine content because it generates emotional engagement. Your pediatrician is the best resource for evidence-based answers to vaccine questions.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Babies receive their first hepatitis B vaccine shortly after birth. Vaccines at this age provide crucial early protection during a time when your baby\'s immune system is most vulnerable. Common concerns about giving vaccines so early are understandable but unfounded - the immune system can handle the antigens in vaccines easily, as babies encounter far more antigens daily from food, air, and normal bacteria on their skin. Side effects are typically mild: fussiness, slight fever, and redness at the injection site lasting 1-2 days.',
    },
    {
      ageRange: '2-6 months',
      context:
        'The 2-month, 4-month, and 6-month vaccine visits include multiple vaccines. Parents sometimes worry about "too many vaccines at once," but the recommended schedule has been carefully designed and tested for safety and effectiveness. Delaying or spreading out vaccines leaves your baby unprotected during the most vulnerable period. Each vaccine ingredient has been tested for safety. Common social media claims about vaccine ingredients (aluminum, formaldehyde, thimerosal) ignore the fact that these substances are present in amounts far smaller than what babies encounter naturally in food and environment.',
    },
    {
      ageRange: '6-36 months',
      context:
        'Vaccines continue through toddlerhood, including MMR and varicella at 12 months. The fraudulent 1998 study by Andrew Wakefield (who lost his medical license) claiming MMR caused autism has been retracted, and subsequent studies involving millions of children have found no link whatsoever between any vaccine and autism. Autism signs typically emerge around 12-18 months - the same time many vaccines are given - which is a coincidence in timing, not a causal relationship. If you have concerns, talk to your pediatrician rather than relying on social media sources.',
    },
  ],
  whenNormal: [
    'Your baby has mild fussiness, low-grade fever, or redness at the injection site for 1-2 days after vaccination.',
    'Your baby is sleepier than usual for a day after vaccines.',
    'You have questions about the vaccine schedule and want to discuss them with your pediatrician.',
  ],
  whenToMention: [
    'You have specific concerns about a particular vaccine and want evidence-based information.',
    'You are feeling pressured by family or social media to delay or skip vaccines.',
    'Your baby had a previous reaction to a vaccine and you want to discuss future doses.',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction after vaccination: difficulty breathing, swelling of face/throat, or widespread hives (very rare).',
    'Your baby has a fever above 105F (40.5C) after vaccination.',
    'Your baby has continuous crying lasting more than 3 hours, seizures, or extreme limpness after vaccination.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vaccination-schedule-delayed-catching-up', 'baby-rsv-vaccine-antibody-prevention', 'baby-vitamin-drops-schedule'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Vaccine Safety: How Vaccines Are Made Safe.',
      url: 'https://www.cdc.gov/vaccinesafety/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Vaccine Safety: The Facts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Vaccines and Immunization: Myths and Misconceptions.',
      url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-myths-and-misconceptions',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-roseola-high-fever-rash',
  title: 'Roseola: High Fever Followed by Rash',
  category: 'medical',
  searchTerms: [
    'roseola baby',
    'baby high fever then rash',
    'roseola rash',
    'sixth disease baby',
    'HHV-6 baby',
    'baby fever 104 rash after',
    'roseola treatment baby',
    'exanthem subitum',
    'baby rash after fever breaks',
    'roseola contagious daycare',
    'three day fever baby',
  ],
  quickAnswer:
    'Roseola (also called sixth disease or exanthem subitum) is a very common viral illness caused by human herpesvirus 6 (HHV-6). It typically causes 3-5 days of high fever (often 103-105F) followed by a characteristic pink, flat or slightly raised rash that appears as the fever breaks. The rash itself is not itchy or painful and resolves within a few days. Roseola is most common between 6-24 months and is usually harmless, though the high fever can occasionally trigger febrile seizures.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Roseola is uncommon before 6 months due to protective maternal antibodies. If your very young baby develops high fever, it is important to contact your pediatrician, as high fever in babies under 3 months especially can indicate serious bacterial infection and needs prompt evaluation. Any fever in a baby under 3 months warrants an immediate call to your doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for roseola, and it is often the first significant illness a baby experiences. The fever can be quite high (103-105F) and last 3-5 days, which is understandably alarming. Your baby may be irritable, have mild nasal congestion, or be slightly less interested in eating. When the fever drops suddenly, a pink lacy rash appears on the trunk and spreads to the arms and face. The rash means the illness is essentially over. Manage fever with acetaminophen or ibuprofen (ibuprofen only after 6 months) and keep your baby well hydrated.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Roseola can still occur in this age group, though many children have already had it. The illness follows the same pattern: high fever followed by rash. Toddlers may be cranky and tired during the fever phase. By the time the rash appears, your child is typically feeling much better and is no longer contagious. Most children develop lifelong immunity after one infection. If your toddler has a febrile seizure during the high fever phase, it is frightening but typically not dangerous.',
    },
  ],
  whenNormal: [
    'Your baby has high fever for 3-5 days followed by a pink rash as the fever breaks - this is the classic roseola pattern.',
    'The rash is flat or slightly raised, pink, and not itchy or painful.',
    'Your baby seems to feel better and is eating and drinking normally once the rash appears.',
  ],
  whenToMention: [
    'The fever lasts longer than 5 days without a rash appearing.',
    'Your baby is drinking less than half their normal fluid intake during the fever.',
    'Your baby has had roseola before and seems to have it again (uncommon but possible with HHV-7).',
  ],
  whenToActNow: [
    'Your baby has a febrile seizure: stiffening, shaking, eyes rolling back, or loss of consciousness.',
    'Fever is above 104F and not responding to fever-reducing medication.',
    'Your baby is under 3 months with any fever, or shows signs of dehydration, extreme lethargy, or a stiff neck.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['persistent-fever-baby', 'baby-viral-exanthem-rash-types', 'febrile-seizure', 'hand-foot-mouth'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Roseola (HHV-6). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola-Infantum.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Human Herpesvirus 6 (HHV-6).',
      url: 'https://www.cdc.gov/herpes-viruses/about/hhv-6-hhv-7.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Roseola. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000968.htm',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-recurring-ear-infections',
  title: 'Recurring Ear Infections in Babies',
  category: 'medical',
  searchTerms: [
    'baby recurring ear infections',
    'baby keeps getting ear infections',
    'chronic ear infections infant',
    'baby ear infection again',
    'ear tubes baby',
    'baby otitis media recurrent',
    'when to get ear tubes',
    'baby ear infection every month',
    'baby ear infection antibiotics not working',
    'multiple ear infections baby',
  ],
  quickAnswer:
    'Recurrent ear infections are common in babies and toddlers because their Eustachian tubes are shorter and more horizontal than adults\', making them prone to fluid buildup and infection. Three or more ear infections in six months, or four in twelve months, is considered recurrent and may warrant referral to an ENT specialist. Ear tubes (tympanostomy tubes) are a safe, common procedure that can significantly reduce infection frequency.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ear infections in very young infants are less common but can be harder to diagnose since babies cannot point to their ear or describe pain. Signs include fever, fussiness (especially when lying down), pulling at ears, difficulty feeding, and disrupted sleep. A first ear infection before 6 months of age is a risk factor for recurrent infections. Breastfeeding, avoiding secondhand smoke, and keeping babies upright during bottle feeding can help reduce risk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for ear infections. Your baby\'s Eustachian tubes are small and nearly horizontal, making drainage difficult. Daycare attendance, pacifier use, and exposure to other children increase risk. Each infection should be properly treated; your doctor may use a watch-and-wait approach for mild cases or prescribe antibiotics. If infections keep recurring, your pediatrician may refer you to an ENT specialist to discuss ear tubes.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Many toddlers continue to have ear infections, particularly during cold and flu season. By age 3, the Eustachian tubes have grown and angled more downward, which helps reduce infection frequency. If your toddler has had multiple rounds of antibiotics or the infections are affecting hearing and speech development, ear tubes may be recommended. The procedure is one of the most common childhood surgeries and typically takes about 15 minutes.',
    },
  ],
  whenNormal: [
    'Your baby has one or two ear infections during cold season and recovers well with or without antibiotics.',
    'Ear infections clear completely between episodes with no lasting fluid behind the eardrum.',
    'Your baby is hearing normally between infections and meeting speech milestones.',
  ],
  whenToMention: [
    'Your baby has had three or more ear infections in six months or four in twelve months.',
    'Fluid behind the eardrum persists for more than three months after infection.',
    'You notice your baby is not responding to sounds as well or speech seems delayed.',
  ],
  whenToActNow: [
    'Your baby has a high fever (over 104F/40C) with ear infection symptoms.',
    'You notice swelling, redness, or the ear protruding outward behind the ear - this could indicate mastoiditis.',
    'Your baby has sudden hearing loss, severe pain unresponsive to pain relievers, or drainage of pus from the ear.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['persistent-fever-baby', 'not-responding-to-sounds', 'baby-stuffy-nose-remedies'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Ear Infections in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media',
    },
  ],
};

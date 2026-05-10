import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'middle-ear-infection-recurrent',
  title: 'Recurrent Middle Ear Infections',
  category: 'medical',
  searchTerms: [
    'recurrent ear infections baby',
    'baby keeps getting ear infections',
    'chronic ear infections toddler',
    'multiple ear infections baby',
    'baby ear infection every month',
    'frequent ear infections infant',
    'why does my baby get so many ear infections',
    'recurrent otitis media child',
  ],
  quickAnswer:
    'Recurrent ear infections (recurrent acute otitis media) are defined as 3 or more separate episodes in 6 months, or 4 or more in 12 months. They are very common in young children due to the anatomy of the Eustachian tubes, which are shorter and more horizontal in babies, making it easier for bacteria to travel from the throat to the middle ear. Risk factors include daycare attendance, secondhand smoke exposure, bottle-feeding while lying flat, and pacifier use after 6 months. Most children outgrow the tendency for ear infections by age 2-3.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Ear infections at this very young age are less common but are taken seriously when they occur. A baby under 3 months with a confirmed ear infection typically needs antibiotic treatment due to the higher risk of complications. If ear infections begin this early, your pediatrician will want to monitor closely for recurrence and may discuss risk factor modification such as breastfeeding, upright feeding position, and smoke-free environment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies begin their pattern of recurrent ear infections at this age, especially if they are in group daycare or have older siblings who bring home respiratory viruses. Each cold can trigger a new ear infection. Breastfeeding provides some protective benefit. If your baby has already had 2-3 ear infections, keep a log of each episode to help your pediatrician track the pattern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for ear infections. Almost every upper respiratory infection may seem to turn into an ear infection for susceptible babies. If your baby meets the criteria for recurrent infections (3 in 6 months or 4 in 12 months), your doctor may discuss prophylactic strategies or referral to an ENT specialist for consideration of ear tube placement. Ensuring vaccines are up to date (including pneumococcal vaccine) can help reduce some ear infections.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with continued recurrent ear infections may benefit from ear tube placement, which dramatically reduces the frequency and severity of episodes. As children grow, the Eustachian tubes become more vertical and functional, and most children significantly improve by age 2-3. If your toddler had ear tubes and continues to get infections, your ENT may evaluate for other contributing factors like adenoid enlargement.',
    },
  ],
  whenNormal: [
    'Your baby gets an ear infection with almost every cold but recovers fully between episodes  -  this is very common in the first 2 years of life.',
    'Your baby has had 1-2 ear infections but they resolved with standard treatment  -  occasional infections are normal.',
    'Your toddler\'s ear infections became less frequent after age 2  -  this is the expected pattern as the Eustachian tubes mature.',
    'Your child had ear tubes placed and now gets fewer infections or the infections are milder and treated with ear drops only.',
  ],
  whenToMention: [
    'Your baby has had 3 or more ear infections in the past 6 months, or 4 or more in the past 12 months.',
    'Your baby has hearing concerns between ear infection episodes, which could indicate persistent fluid.',
    'Ear infections are not resolving with standard antibiotics, requiring multiple courses or stronger medications.',
  ],
  whenToActNow: [
    'Your baby develops signs of a complication such as swelling or redness behind the ear (mastoiditis), high fever that doesn\'t respond to treatment, or severe lethargy  -  these require emergency evaluation.',
    'Your child with recurrent infections shows signs of speech or language delay that may be related to chronic hearing reduction from repeated fluid buildup.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
  ],
};

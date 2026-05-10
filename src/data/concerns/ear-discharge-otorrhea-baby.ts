import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ear-discharge-otorrhea-baby',
  title: 'Ear Discharge (Otorrhea) in Babies',
  category: 'medical',
  searchTerms: [
    'ear discharge baby',
    'baby ear draining fluid',
    'otorrhea infant',
    'yellow discharge from baby ear',
    'baby ear leaking',
    'pus from baby ear',
    'baby ear infection drainage',
    'smelly ear discharge baby',
    'green discharge baby ear',
  ],
  quickAnswer:
    'Ear discharge (otorrhea) in babies can range from normal earwax to a sign of infection. The most common cause is an ear infection (acute otitis media) where the eardrum has ruptured, allowing pus to drain out. While a ruptured eardrum sounds alarming, it actually often relieves the pain and pressure, and eardrums typically heal on their own. Other causes include swimmer\'s ear (outer ear infection), ear tubes draining fluid, or rarely, a foreign object in the ear canal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any ear discharge in a very young baby should be evaluated promptly by your pediatrician. While some clear or slightly yellow drainage can be normal amniotic fluid or vernix in the first days of life, persistent discharge may indicate infection. Ear infections in babies under 3 months are taken more seriously due to the higher risk of serious bacterial infection at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Ear discharge at this age is most commonly related to middle ear infection. You may notice yellow or greenish fluid on the pillow or draining from the ear canal. Your baby may have been fussy or pulling at their ear before the drainage started, and may actually seem to feel better once drainage begins (because the pressure is relieved). Your pediatrician will examine the ear and likely prescribe antibiotic ear drops or oral antibiotics.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a peak age for ear infections, and ear discharge can occur when the eardrum perforates from pressure buildup. Clear or blood-tinged drainage followed by relief of symptoms is a classic pattern. If your baby has ear tubes, intermittent clear or slightly cloudy drainage is expected and usually managed with antibiotic ear drops alone. Persistent foul-smelling drainage warrants medical evaluation.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may develop ear discharge from middle ear infections, swimmer\'s ear (especially after swimming or bathing), or draining ear tubes. If your toddler sticks a small object in their ear, this can also cause drainage. Chronic or recurrent drainage from the same ear should be evaluated by an ENT specialist to rule out cholesteatoma or chronic infection.',
    },
  ],
  whenNormal: [
    'Your baby has ear tubes and experiences occasional clear or slightly cloudy drainage during a cold  -  this is the tubes functioning as intended.',
    'A small amount of earwax that appears yellowish or brownish drains from your baby\'s ear  -  this is normal wax migration.',
    'Your baby had an ear infection, the eardrum ruptured with brief drainage, pain resolved, and the ear is healing  -  eardrums typically heal within days to weeks.',
    'There is a tiny amount of dried blood mixed with discharge after a confirmed eardrum rupture  -  this is expected.',
  ],
  whenToMention: [
    'Your baby has new ear discharge with fever, pain, or fussiness that may indicate an ear infection.',
    'Ear discharge persists for more than a few days despite treatment, or the discharge has a foul smell.',
    'Your baby has recurrent episodes of ear drainage from the same ear.',
  ],
  whenToActNow: [
    'A baby under 3 months has any ear discharge with fever  -  young infants with ear infections need prompt medical evaluation.',
    'Your child has ear discharge accompanied by severe pain, facial weakness, dizziness, or swelling behind the ear  -  these may indicate a spreading infection requiring urgent care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Infection Information. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Ear Infection (Middle Ear): Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/ear-infections/symptoms-causes/syc-20351616',
    },
  ],
};

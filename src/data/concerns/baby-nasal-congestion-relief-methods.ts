import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nasal-congestion-relief-methods',
  title: 'How Can I Help My Congested Baby Breathe Better?',
  category: 'medical',
  searchTerms: [
    'baby stuffy nose relief',
    'how to clear baby congestion',
    'baby congestion home remedies',
    'baby can\'t breathe through nose',
    'nasal congestion baby treatment',
    'baby stuffy nose at night',
    'baby congested what to do',
    'baby nose blocked',
    'clearing baby nose',
    'baby breathing congested sound',
    'baby snoring congestion',
  ],
  quickAnswer:
    'The safest ways to relieve baby congestion include saline nasal drops followed by gentle suctioning with a bulb syringe or nasal aspirator, running a cool-mist humidifier, keeping baby upright during feeds, and ensuring adequate hydration. Over-the-counter cold and decongestant medicines are NOT safe for babies and young children under age 2.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies breathe primarily through their noses, so congestion can significantly interfere with feeding and sleeping. Use 1-2 drops of sterile saline in each nostril, wait 30 seconds, then gently suction with a bulb syringe or nasal aspirator. Do this before feedings and sleep. Run a cool-mist humidifier in the room. Avoid menthol or eucalyptus products near young babies.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue using saline drops and gentle suctioning, limiting suctioning to 3-4 times per day to avoid irritating the nasal passages. Sitting in a steamy bathroom for 10-15 minutes can help loosen mucus. Elevating the head of the crib slightly (by placing a towel under the mattress, not a pillow) may help drainage. Keep your baby well-hydrated with extra breast milk or formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies may resist suctioning but still benefit from saline drops. You can try saline spray, which some babies tolerate better than drops. Steam from a warm shower, cool-mist humidifier, and extra fluids remain helpful. If your baby is eating solids, warm broth or slightly warm water can help thin mucus. Never use decongestant drops or sprays.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can be very resistant to nasal suctioning. Focus on methods they tolerate: humidifier at night, steam from a bathroom, saline spray, and encouraging fluid intake. Honey (for children over 12 months) can help with associated cough. Teach your toddler to blow their nose by practicing during well periods, though most cannot master this skill until age 2-3.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many children this age can begin to learn nose-blowing with practice. Use games like blowing out a candle with their nose or blowing a cotton ball across a table using only their nose. Continue using humidifier and saline spray. Cold medicines remain NOT recommended until at least age 4, and many experts recommend waiting until age 6.',
    },
  ],
  whenNormal: [
    'Congestion improves with saline drops, suctioning, and humidifier use',
    'Your baby can still feed, though they may need to take breaks to breathe',
    'Congestion is worse at night and in the morning but improves during the day',
    'The congestion follows the typical cold timeline, peaking around days 3-5 and gradually improving',
  ],
  whenToMention: [
    'Congestion lasts more than 10-14 days without improvement',
    'Your baby has significant difficulty feeding due to congestion despite using saline and suctioning',
    'Congestion seems to recur frequently without other cold symptoms, which may suggest allergies',
  ],
  whenToActNow: [
    'Your baby has labored breathing with flaring nostrils, chest retractions, or is breathing very fast',
    'Your baby turns blue around the lips or refuses to eat at all due to congestion, or shows signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-nasal-aspirator-frequency',
    'baby-saline-drops-usage',
    'baby-humidifier-benefits',
    'chronic-congestion',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Child\'s Cold or Flu. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Caring-for-Your-Childs-Cold-or-Flu.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Common cold in babies: Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/diagnosis-treatment/drc-20351657',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Management of nasal congestion in infants. Clinical Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26358538/',
    },
  ],
};

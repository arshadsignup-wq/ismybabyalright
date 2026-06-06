import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-saline-drops-usage',
  title: 'How Do I Use Saline Drops for My Baby\'s Stuffy Nose?',
  category: 'medical',
  searchTerms: [
    'saline drops baby how to use',
    'saline nasal drops baby',
    'baby saline nose drops',
    'how many saline drops baby nose',
    'saline spray vs drops baby',
    'homemade saline baby',
    'how often saline drops baby',
    'saline drops baby age',
    'nasal saline safe for newborn',
    'saline drops before suctioning',
  ],
  quickAnswer:
    'Saline nasal drops are safe for babies of all ages and are the first-line treatment for nasal congestion. Use 1-2 drops per nostril before suctioning to help loosen thick mucus. You can use them as often as needed throughout the day. Use only sterile, preservative-free saline solution made specifically for infants, or make your own with 1/4 teaspoon non-iodized salt in 8 ounces of distilled or previously boiled water.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Lay your baby on their back with the head slightly tilted back. Place 1-2 drops of saline in one nostril at a time. Wait 30 seconds to allow the saline to soften the mucus, then gently suction with a bulb syringe or nasal aspirator. Repeat on the other side. Do this before feedings to help your baby breathe while nursing or bottle-feeding.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue using saline drops before suctioning. At this age, your baby may squirm more during the process. Having a second caregiver gently hold your baby\'s head can make it easier. Some parents find saline spray (a gentle mist) easier to administer than drops. Both are equally effective at loosening mucus.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Saline spray may be easier to use with an active baby who resists lying still for drops. You can use saline spray with your baby upright or slightly reclined. Saline alone, without suctioning, can sometimes be enough to thin mucus and trigger a productive sneeze. Use saline freely throughout the day, especially before meals and naps.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Saline spray is typically easier than drops for toddlers. Some children learn to tolerate and even cooperate with saline spray if you make it part of a routine. Use a gentle, child-friendly spray bottle. Saline is medication-free and non-habit-forming, so there is no risk of overuse.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can begin to participate in saline use by sitting up and tilting their head back. Continue using saline spray as needed for congestion. Some children this age can use saline rinse bottles with supervision, though this works better for children over 4. Saline remains the safest and most recommended nasal congestion treatment.',
    },
  ],
  whenNormal: [
    'Your baby sneezes or coughs briefly after saline drops, which helps clear the mucus',
    'Saline drops cause your baby to fuss momentarily but the congestion improves afterward',
    'You use saline drops multiple times a day during a cold without any side effects',
  ],
  whenToMention: [
    'Saline drops and suctioning do not seem to help at all with your baby\'s congestion',
    'Your baby seems to have a reaction to commercial saline drops',
    'Congestion persists for more than 2 weeks despite regular saline use',
  ],
  whenToActNow: [
    'Your baby has severe congestion with labored breathing that does not improve with saline and suctioning',
    'Your baby cannot feed at all due to congestion or shows signs of respiratory distress such as fast breathing, rib retractions, or color changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-nasal-congestion-relief-methods',
    'baby-nasal-aspirator-frequency',
    'baby-humidifier-benefits',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Treating Your Child\'s Cold. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Caring-for-Your-Childs-Cold-or-Flu.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nasal congestion in infants and children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/diagnosis-treatment/drc-20351657',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nasal saline irrigations for the symptoms of chronic rhinosinusitis. Cochrane Database.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17636843/',
    },
  ],
};

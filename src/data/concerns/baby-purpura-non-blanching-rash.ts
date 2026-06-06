import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-purpura-non-blanching-rash',
  title: 'Non-Blanching Rash (Purpura) in Baby',
  category: 'skin',
  searchTerms: [
    'baby non blanching rash',
    'baby purpura',
    'baby rash doesnt fade when pressed',
    'baby rash glass test',
    'baby purple spots skin',
    'baby bruise like rash',
    'infant petechiae spreading',
    'baby meningitis rash',
    'baby rash doesnt disappear with pressure',
    'non blanching spots baby',
  ],
  quickAnswer:
    'A non-blanching rash is one that does not fade when you press on it or roll a glass over it. While some causes are benign, such as minor petechiae from coughing or straining, a non-blanching rash can be a sign of a serious condition like meningococcal disease and should always be evaluated urgently, especially if your baby has a fever or seems unwell.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Non-blanching spots in newborns can occur from birth trauma, particularly on the face after a difficult delivery. However, any new non-blanching rash in a young infant, especially with fever, requires emergency evaluation. Infections can progress extremely rapidly in this age group. Do not wait to see if it improves.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Small petechiae (pinpoint non-blanching spots) can appear on the face and neck after vigorous crying, coughing, or vomiting, which is usually harmless. However, petechiae that appear on the trunk or limbs, or any purpura (larger non-blanching spots) with fever, must be evaluated immediately as they could indicate a serious bacterial infection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, the most concerning cause of a non-blanching rash is meningococcal disease, which can progress from initial symptoms to life-threatening illness within hours. ITP (immune thrombocytopenic purpura) can also occur, causing easy bruising and petechiae without fever. Any unexplained non-blanching rash should be assessed same-day.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Henoch-Schonlein purpura (IgA vasculitis) can cause a non-blanching rash, usually on the buttocks and legs, sometimes with joint pain and tummy aches. While not as immediately dangerous as meningococcal disease, it still needs medical evaluation and monitoring. Any non-blanching rash should always be assessed by a healthcare professional.',
    },
  ],
  whenNormal: [
    'A few tiny petechiae on the face after a hard crying spell, coughing fit, or vomiting episode that do not spread',
    'Small non-blanching spots confined to the area above the nipple line (face, neck) after straining, with no fever and a well-appearing baby',
  ],
  whenToMention: [
    'Any non-blanching spots that you notice and cannot clearly attribute to straining or coughing should be evaluated the same day',
  ],
  whenToActNow: [
    'Any non-blanching rash with fever, no matter how well your baby appears, requires emergency evaluation',
    'A non-blanching rash that is spreading or increasing in number',
    'Your baby has a non-blanching rash and seems unwell, lethargic, irritable, or is feeding poorly',
    'Purple or bruise-like spots appear without any known injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Petechiae. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Petechiae.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Evaluation of the Child with Non-Blanching Rash. Archives of Disease in Childhood.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16551785/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Meningococcal Disease: Signs and Symptoms.',
      url: 'https://www.cdc.gov/meningococcal/about/symptoms.html',
    },
  ],
  relatedConcernSlugs: ['petechiae-baby', 'henoch-schonlein-purpura-baby', 'baby-bruises-easily'],
};

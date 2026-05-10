import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dust-mite-allergy-baby',
  title: 'Dust Mite Allergy in Babies',
  category: 'medical',
  searchTerms: [
    'dust mite allergy baby',
    'baby allergic to dust',
    'baby sneezing dust allergy',
    'dust allergy symptoms infant',
    'baby congestion dust mites',
    'infant dust mite allergy eczema',
    'baby stuffy nose allergy',
    'dust mite allergy prevention baby',
  ],
  quickAnswer:
    'Dust mite allergy is one of the most common indoor allergens affecting babies and toddlers. Dust mites are microscopic creatures that thrive in bedding, carpets, and upholstered furniture. Symptoms include chronic nasal congestion, sneezing, runny nose, itchy eyes, and worsening eczema. While dust mite allergy cannot be cured, reducing exposure through environmental controls can significantly improve symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True dust mite allergy is uncommon in very young infants because allergic sensitization takes time to develop. Nasal congestion in newborns is usually caused by small nasal passages or viral infections, not allergies. However, dust mite exposure in early infancy may contribute to later sensitization, so keeping the sleep environment clean is still good practice.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Dust mite sensitization can begin in the first six months of life, especially in babies with a family history of allergies or those with eczema. If your baby has persistent nasal congestion that does not seem related to a cold, or eczema that worsens despite good skin care, dust mite allergy may be a contributing factor worth discussing with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, dust mite allergy becomes more recognizable. Symptoms include a chronically stuffy or runny nose, sneezing fits (especially in the morning), itchy or watery eyes, and eczema that flares despite treatment. Babies who spend more time on the floor crawling may have increased exposure. Allergy testing can be considered if symptoms are persistent.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with dust mite allergy may have chronic nasal congestion, mouth breathing, snoring, frequent ear infections, or persistent eczema. An allergist can perform skin prick testing or blood tests to confirm the diagnosis. Environmental control measures such as allergen-proof mattress covers, regular hot-water laundering of bedding, and removing bedroom carpeting can significantly reduce symptoms.',
    },
  ],
  whenNormal: [
    'Baby has occasional sneezing or mild congestion that resolves quickly',
    'Baby has nasal congestion only during a cold that clears within 7-10 days',
    'Baby has mild eczema that responds well to moisturizers and occasional topical treatment',
    'Baby sneezes a few times when entering a dusty room but has no persistent symptoms',
  ],
  whenToMention: [
    'Baby has chronic nasal congestion or runny nose that persists beyond typical cold duration',
    'Baby has eczema that keeps flaring despite consistent skin care and treatment',
    'Baby seems to have worse symptoms at night or upon waking up in the morning',
  ],
  whenToActNow: [
    'Baby develops significant wheezing or difficulty breathing that could indicate allergic asthma',
    'Baby has severe swelling of face or lips or any signs of anaphylaxis -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Dust Allergy. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/dust-allergy/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Environmental Health Sciences. Dust Mites and Cockroaches. NIH.',
      url: 'https://www.niehs.nih.gov/health/topics/agents/allergens/dustmites',
    },
  ],
};

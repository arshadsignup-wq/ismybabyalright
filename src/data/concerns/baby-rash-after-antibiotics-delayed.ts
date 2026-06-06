import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-after-antibiotics-delayed',
  title: 'Delayed Rash After Antibiotics in Baby',
  category: 'skin',
  searchTerms: [
    'baby rash after antibiotics delayed',
    'baby rash days after antibiotic',
    'baby rash after finishing amoxicillin',
    'delayed antibiotic rash baby',
    'baby rash week after antibiotics',
    'amoxicillin rash baby delayed',
    'baby rash after course of antibiotics',
    'antibiotic allergy rash baby late',
    'baby drug rash delayed onset',
    'is baby allergic to antibiotics rash',
  ],
  quickAnswer:
    'A rash that appears days after starting or even after finishing antibiotics is common in babies. Amoxicillin frequently causes a non-allergic rash that appears around day 5 to 10, especially during viral infections. True allergic reactions usually cause hives, itching, and swelling. Your pediatrician can help determine whether it is a true allergy or a harmless drug reaction.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Antibiotics are used less commonly in this age group, but if a delayed rash occurs, it should always be evaluated by your pediatrician. Young infants need careful assessment to distinguish between a medication reaction and a rash from the underlying infection being treated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As ear infections and other bacterial infections become more common, so does antibiotic use. Amoxicillin is the most commonly prescribed antibiotic and frequently causes a maculopapular (flat, red, widespread) rash that is not a true allergy. This rash is especially common when antibiotics are given during a viral infection like mononucleosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Delayed antibiotic rashes are very common at this age because ear infections peak and amoxicillin is frequently prescribed. If the rash is flat and non-itchy, it is likely not a true allergy. However, if the rash includes hives, swelling, or breathing difficulty, that is a different situation requiring immediate attention.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who develop a delayed rash after antibiotics are sometimes mislabeled as allergic when they actually had a viral rash or a non-allergic drug reaction. Being mislabeled as penicillin-allergic can affect future treatment options. Discuss with your pediatrician whether allergy testing is appropriate to clarify the situation.',
    },
  ],
  whenNormal: [
    'A flat, pink, widespread rash that appears around day 5 to 10 of an amoxicillin course and is not itchy',
    'A rash that appears after antibiotics are finished and the child is feeling well otherwise',
    'The rash fades over a few days without treatment',
  ],
  whenToMention: [
    'Any rash that develops during or after antibiotic use so your pediatrician can document it and advise on future prescriptions',
    'You are unsure whether the rash is from the antibiotic or from the illness itself',
    'The rash is mildly itchy but there are no hives or swelling',
  ],
  whenToActNow: [
    'The rash includes raised, itchy hives or welts along with facial or lip swelling, as this may indicate a true allergic reaction',
    'Your baby develops difficulty breathing, wheezing, vomiting, or appears to be having an anaphylactic reaction',
    'Your baby has a widespread blistering rash with peeling skin and mouth sores, which could indicate a serious drug reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotic Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Antibiotic-Allergies.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Drug Allergy.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/drug-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amoxicillin Rash: Not Always an Allergy. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-0515/37363/',
    },
  ],
  relatedConcernSlugs: ['rash-after-antibiotics', 'hives', 'viral-rash-baby'],
};

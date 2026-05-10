import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fpies-diagnosis-management',
  title: 'FPIES Diagnosis and Management',
  category: 'feeding',
  searchTerms: [
    'FPIES baby',
    'food protein-induced enterocolitis syndrome',
    'baby vomiting 2 hours after eating',
    'FPIES symptoms infant',
    'FPIES trigger foods baby',
    'FPIES vs food allergy',
    'baby profuse vomiting after food',
    'FPIES diagnosis management',
    'FPIES reaction what to do',
  ],
  quickAnswer:
    'Food Protein-Induced Enterocolitis Syndrome (FPIES) is a non-IgE mediated food allergy that causes severe vomiting, often with diarrhea, typically 2-4 hours after eating a trigger food. Common triggers include milk, soy, rice, oats, and other grains. Unlike typical food allergies, FPIES does not cause hives or swelling but can cause dehydration and lethargy. Standard allergy tests are often negative, and diagnosis is based on the pattern of symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        "FPIES can present in the first weeks of life, typically triggered by cow's milk or soy formula. Chronic FPIES in young infants causes intermittent vomiting, watery or bloody diarrhea, poor weight gain, and lethargy. Breastfed infants rarely develop FPIES but it can occur. If your baby has chronic vomiting or bloody diarrhea, your pediatrician may consider FPIES among other diagnoses.",
    },
    {
      ageRange: '3-6 months',
      context:
        "As babies are introduced to new proteins, acute FPIES reactions may be identified. The hallmark is profuse, repetitive vomiting beginning 1-4 hours after eating a trigger food, often accompanied by pallor and lethargy. Some babies become limp and appear quite ill. If your baby has had a severe vomiting episode hours after a new food, describe the timeline to your pediatrician -- this pattern is key to diagnosis.",
    },
    {
      ageRange: '6-12 months',
      context:
        "This is the most common age for FPIES to be identified because many trigger foods (rice, oats, egg, fish) are introduced during this period. A typical FPIES reaction involves profuse vomiting 2-4 hours after eating, with possible diarrhea starting 5-10 hours later. Your baby may look pale or gray and become very sleepy. An ER visit may be needed for IV fluids. Once a trigger is identified, strict avoidance is essential.",
    },
    {
      ageRange: '12 months+',
      context:
        "Most children outgrow FPIES between ages 3-5. Your allergist will recommend supervised oral food challenges in a medical setting (usually a hospital) to test whether your child has outgrown specific FPIES triggers. Never try reintroducing a known FPIES trigger food at home, as reactions can be severe. Introduce new foods cautiously and one at a time to identify any new triggers.",
    },
  ],
  whenNormal: [
    'Baby spits up small amounts after feeding without distress',
    'Baby vomits once during a stomach bug and recovers quickly',
    'Baby gags on a new food texture but does not have repeated vomiting',
    'Baby has occasional loose stools with no blood, lethargy, or dehydration',
  ],
  whenToMention: [
    'Baby has had one or more episodes of profuse vomiting 2-4 hours after eating a specific food',
    'Baby becomes unusually pale, sleepy, or limp after eating certain foods',
    'Baby has chronic vomiting and diarrhea with poor weight gain on formula',
  ],
  whenToActNow: [
    'Baby has repetitive vomiting and appears pale, limp, or lethargic -- go to the emergency room for IV fluids',
    'Baby appears to be in shock (very pale, cool skin, unresponsive) after eating -- call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Protein-Induced Enterocolitis Syndrome (FPIES). AAP Clinical Report, Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/145/5/e20200418/36917/Food-Protein-Induced-Enterocolitis-Syndrome',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Food Protein-Induced Enterocolitis Syndrome (FPIES). ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/fpies/',
    },
  ],
};

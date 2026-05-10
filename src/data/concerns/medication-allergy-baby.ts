import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'medication-allergy-baby',
  title: 'Medication Allergy in Babies',
  category: 'medical',
  searchTerms: [
    'medication allergy baby',
    'baby allergic to amoxicillin',
    'baby rash from antibiotics',
    'drug allergy infant symptoms',
    'baby allergic reaction to medicine',
    'baby hives after medication',
    'penicillin allergy baby',
    'medication allergy vs side effect baby',
  ],
  quickAnswer:
    'Medication allergies in babies are less common than many parents think. True drug allergies involve an immune system reaction and can cause hives, rash, swelling, or rarely, anaphylaxis. Many reactions attributed to drug allergies are actually viral rashes or side effects (like diarrhea from antibiotics) rather than true allergies. An accurate diagnosis matters because unnecessarily avoiding important medications like antibiotics can lead to less effective treatments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Medication allergies are uncommon in very young babies because allergic sensitization typically requires prior exposure. If your newborn develops a rash while on an antibiotic, it may be a viral exanthem (rash from the illness being treated) rather than a drug allergy. However, any rash with hives, breathing difficulty, or swelling should be evaluated immediately. Always report suspected reactions to your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies this age may receive their first courses of antibiotics for ear infections or other bacterial illnesses. A rash that appears during antibiotic treatment is common and is usually caused by the underlying viral infection rather than the antibiotic itself. Flat, non-itchy rashes are less likely to be allergic. Raised, itchy hives within hours of a dose are more concerning for a true allergy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With more medication exposure comes more opportunity for reactions. Amoxicillin rash is very common -- a flat, pink rash that appears several days into treatment, especially during viral illnesses. This is usually not a true allergy and does not typically require avoiding amoxicillin in the future. However, immediate hives, facial swelling, or breathing difficulty after any medication is a true allergic reaction requiring medical attention.',
    },
    {
      ageRange: '12 months+',
      context:
        'If your toddler has been labeled with a drug allergy, discuss with your pediatrician whether formal allergy testing is warranted. Studies show that over 90% of children labeled "penicillin allergic" are not truly allergic when tested. An allergist can perform skin testing or a supervised oral drug challenge to confirm or rule out the allergy. Accurate labeling prevents unnecessary use of broader-spectrum antibiotics.',
    },
  ],
  whenNormal: [
    'Baby develops a flat, non-itchy rash several days into an antibiotic course during a viral illness',
    'Baby has loose stools while taking antibiotics (a common side effect, not an allergy)',
    'Baby fusses after taking a bad-tasting medication',
    'Baby has mild stomach upset from a medication that resolves after the course is completed',
  ],
  whenToMention: [
    'Baby develops any rash during a medication course and you are unsure if it is an allergy',
    'Baby has had a previous suspected reaction to a medication and needs the same class of drug again',
    'You want to discuss formal allergy testing to clarify a previous drug allergy label',
  ],
  whenToActNow: [
    'Baby develops hives, swelling of face or lips, or difficulty breathing within minutes to hours of taking a medication -- call 911',
    'Baby has widespread blistering skin rash, peeling skin, or involvement of the mouth and eyes after starting a medication -- seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotic Allergies in Children: Commonly Reported but Rarely Real. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Antibiotic-Allergies.aspx',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Drug Allergies. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/drug-allergies/',
    },
  ],
};

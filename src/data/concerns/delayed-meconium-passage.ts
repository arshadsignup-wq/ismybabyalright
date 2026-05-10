import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'delayed-meconium-passage',
  title: 'Delayed Meconium Passage',
  category: 'digestive',
  searchTerms: [
    'newborn not pooping',
    'baby has not passed meconium',
    'delayed first stool newborn',
    'no meconium 24 hours',
    'baby first poop late',
    'newborn constipated no stool',
    'when should newborn poop first time',
    'meconium not passed',
    'Hirschsprung disease signs',
  ],
  quickAnswer:
    'Most healthy newborns pass their first meconium stool within 24 hours of birth, and nearly all do so within 48 hours. A delay beyond 48 hours can sometimes indicate an underlying condition such as Hirschsprung disease, meconium plug syndrome, or cystic fibrosis, and should be evaluated by a doctor.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'About 90-99% of full-term newborns pass meconium within the first 24 hours of life. Meconium is a thick, dark green-black, sticky substance that was present in the intestines before birth. If your baby has not yet passed meconium but is otherwise feeding, active, and has no abdominal distension, the medical team will continue to monitor. Premature babies may take slightly longer. Nurses typically track and document the first meconium stool.',
    },
    {
      ageRange: '24-48 hours',
      context:
        'If meconium has not been passed by 24 hours, the medical team will assess the baby more closely. They will examine the abdomen for distension and may perform a rectal examination. A delay at this point does not necessarily indicate a problem, particularly in premature infants, but it does warrant increased observation. The baby should be feeding well and showing no signs of vomiting, especially bilious (green) vomiting.',
    },
    {
      ageRange: '48 hours - 1 week',
      context:
        'Failure to pass meconium within 48 hours in a full-term newborn is considered a red flag and typically triggers a diagnostic workup. Conditions that can cause delayed meconium include Hirschsprung disease (absence of nerve cells in part of the colon), meconium plug syndrome, small left colon syndrome, and in rare cases cystic fibrosis. Diagnostic tests may include an abdominal X-ray, contrast enema, or rectal biopsy. Early diagnosis and treatment lead to the best outcomes.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'If a diagnosis such as Hirschsprung disease or meconium plug syndrome was made, treatment will have been initiated. For Hirschsprung disease, surgical intervention is usually required. For meconium plug syndrome, a contrast enema is often both diagnostic and therapeutic, relieving the obstruction. After resolution, parents should monitor stool patterns closely. Ongoing constipation, abdominal distension, or poor feeding should be reported to the pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby passed meconium within the first 24 hours and is now having regular stools',
    'Your premature baby took slightly longer (up to 48 hours) to pass meconium but has no abdominal distension or vomiting',
    'The hospital team has evaluated the delay and determined no further workup is needed at this time',
    'Your baby is transitioning from meconium to yellow-seedy breastfed stools by day 3-5',
  ],
  whenToMention: [
    'Your baby has not passed meconium within 24 hours and you have not yet discussed this with the medical team',
    'Your baby passed meconium but is now having infrequent or difficult stools with abdominal distension',
    'You have a family history of Hirschsprung disease or cystic fibrosis',
  ],
  whenToActNow: [
    'Your baby has not passed meconium within 48 hours, has a distended abdomen, and/or is vomiting green (bilious) material, as this may indicate a bowel obstruction requiring urgent evaluation',
    'Your baby is refusing to feed, appears in pain, or has a significantly swollen, tense abdomen, as these are signs of a potential surgical emergency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation of the Newborn with Delayed Passage of Meconium. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews/article/21/9/e612/979/Evaluation-of-Neonatal-Intestinal-Obstruction',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Meconium. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/003274.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Hirschsprung Disease. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/hirschsprungs-disease/symptoms-causes/syc-20351556',
    },
  ],
};

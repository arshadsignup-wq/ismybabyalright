import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rash-after-antibiotics',
  title: 'My Baby Got a Rash After Antibiotics',
  category: 'skin',
  searchTerms: [
    'baby rash after antibiotics',
    'amoxicillin rash baby',
    'antibiotic allergy baby',
    'rash from amoxicillin toddler',
    'baby allergic to penicillin',
    'hives after antibiotics baby',
    'drug rash infant',
    'baby rash during antibiotics',
    'is antibiotic rash dangerous',
    'amoxicillin rash vs allergy',
  ],
  quickAnswer:
    'A rash during or after antibiotics is very common in babies and children, occurring in up to 10% of those taking amoxicillin. Most antibiotic rashes are non-allergic reactions that appear as flat, pink, widespread spots and are not dangerous. However, it is important to distinguish this from a true allergic reaction involving hives, so contact your pediatrician to help determine which type of rash your baby has.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are less commonly prescribed antibiotics, but when they are, rashes can occur. A non-allergic amoxicillin rash typically appears 3-10 days after starting the medication as small, flat, pink or red spots that start on the trunk and spread outward. It does not itch significantly and your baby is otherwise well. In contrast, a true allergic rash (urticaria) appears as raised, itchy hives that can appear within hours of the first dose. Any rash in an infant under 6 months on antibiotics should be evaluated by your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for first antibiotic use, often for ear infections. The classic non-allergic amoxicillin rash is a widespread, flat, pink rash that is sometimes called a "drug eruption." It is especially common when antibiotics are given during a viral illness. This type of rash is not a true allergy and does not mean your baby cannot take the same antibiotic again in the future. Your pediatrician can help determine if it is safe to continue the course.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers frequently take antibiotics for ear infections, strep throat, and other bacterial infections. If a rash appears, note when it started relative to the first antibiotic dose and whether it is flat or raised. Flat, non-itchy spots that appear several days into the course are usually benign. Raised, itchy welts (hives) that appear quickly suggest a true allergic reaction, and the antibiotic should be stopped while you contact your pediatrician immediately.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At this age, children can better communicate if they feel itchy or unwell. If your child develops a rash during antibiotics but is otherwise happy, eating, and playing normally, it is more likely a non-allergic reaction. Take photos of the rash for your pediatrician. If your child has been labeled with a penicillin allergy based on a past rash, ask your doctor about allergy testing, as studies show that over 90% of children labeled with penicillin allergy are not truly allergic.',
    },
  ],
  whenNormal: [
    'A flat, pink, widespread rash that appears 3 or more days after starting antibiotics and does not itch significantly',
    'Small spots that start on the trunk and gradually spread to the arms and legs',
    'Your baby seems otherwise well, is eating normally, and is not distressed by the rash',
    'The rash fades within a few days of stopping the antibiotic or even while continuing it',
  ],
  whenToMention: [
    'Any rash that appears while your baby is taking antibiotics, so your pediatrician can help distinguish between an allergic and non-allergic reaction',
    'A rash that persists for more than a few days after the antibiotic is finished',
    'You are unsure whether the rash is flat spots or raised hives',
  ],
  whenToActNow: [
    'Your baby develops raised, itchy hives (welts), facial or lip swelling, wheezing, vomiting, or any difficulty breathing after taking an antibiotic, as this could indicate anaphylaxis requiring emergency care',
    'Your baby develops a rash with peeling skin, blisters inside the mouth, or sores around the eyes, which could indicate a serious drug reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amoxicillin Rashes: Not Always an Allergy. AAP News.',
      url: 'https://publications.aap.org/aapnews/article-abstract/doi/10.1542/aapnews.2020341010',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Drug Allergy. Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/drug-allergy/symptoms-causes/syc-20371835',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotic Allergies in Children: What Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Antibiotic-Allergies.aspx',
    },
  ],
};

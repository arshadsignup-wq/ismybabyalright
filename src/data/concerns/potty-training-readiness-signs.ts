import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'potty-training-readiness-signs',
  title: 'Potty Training Readiness: Signs Your Child Is Ready',
  category: 'behavior',
  searchTerms: [
    'potty training readiness signs',
    'when to start potty training',
    'how to know child ready potty training',
    'potty training age',
    'toddler ready for toilet training',
    'signs toddler ready to potty train',
    'too early for potty training',
    'potty training 18 months',
    'potty training 2 year old',
    'potty training developmental readiness',
  ],
  quickAnswer:
    'Most children show readiness for potty training between 18 and 36 months, with the average age being around 27 months. Readiness depends on physical, cognitive, and emotional signs rather than a specific age. Key indicators include staying dry for at least two hours, showing interest in the toilet, telling you when they have a wet or dirty diaper, and being able to follow simple instructions. Starting before a child is ready often leads to frustration and a longer training process.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most children this age are not developmentally ready for potty training, though some may begin to show early signs of awareness. They may pause during play while having a bowel movement or tug at a dirty diaper. You can start introducing the concept by letting them observe family members use the toilet, reading potty-themed books, and having a small potty available to sit on with clothes on. There is no advantage to starting formal training at this age, and pushing it can create resistance later.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Some children begin showing clear readiness signs during this period: staying dry for two or more hours, having predictable bowel movements, showing discomfort with dirty diapers, and demonstrating the physical ability to pull pants up and down. However, many children are not ready until closer to their second birthday or beyond. If your child shows interest, follow their lead gently. If they resist, back off and try again in a few weeks. Power struggles over toilet use are counterproductive.',
    },
    {
      ageRange: '24-30 months',
      context:
        'This is the most common window for successful potty training initiation. By this age, most children have the language skills to communicate their needs, the physical control to hold urine briefly, and the cognitive development to understand the sequence of events involved. Look for these specific readiness signs: telling you before or right after they go, staying dry during naps, wanting to wear "big kid" underwear, and being able to sit on the potty for a few minutes. Praise effort rather than results.',
    },
    {
      ageRange: '30-36+ months',
      context:
        'Children who start later often train faster because they have greater developmental maturity. There is no cause for concern if your child is not trained by age three, though most children achieve daytime dryness by this point. Nighttime dryness typically comes later and is a separate developmental process. If your child is older than three and shows no interest or readiness despite encouragement, discuss this with your pediatrician to rule out constipation, sensory issues, or other factors. Avoid punishment or shaming, which consistently backfire.',
    },
  ],
  whenNormal: [
    'Your child shows no interest in the potty at 18 months',
    'Potty training takes several weeks or even months of gradual progress',
    'There are occasional accidents even after your child is mostly trained',
    'Nighttime dryness takes much longer than daytime training',
  ],
  whenToMention: [
    'Your child is over three years old and shows no readiness signs despite gentle encouragement',
    'Your child was previously trained and has regressed significantly',
    'Your child shows signs of pain or straining with bowel movements',
    'Your child is withholding stool, leading to constipation',
  ],
  whenToActNow: [
    'Your child has persistent painful urination, blood in urine, or foul-smelling urine suggesting a urinary tract infection',
    'Your child has severe abdominal pain with inability to have a bowel movement for more than several days',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'potty-training-refusal',
    'potty-training-regression',
    'poop-withholding-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toilet Training. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Readiness Signs for Toilet Training. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Signs-of-Readiness.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Toddler Development. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'multiple-illnesses-close-together',
  title: 'Getting Sick Again and Again: Illness Clustering',
  category: 'medical',
  searchTerms: [
    'baby keeps getting sick',
    'toddler sick all the time',
    'baby one illness after another',
    'baby always sick daycare',
    'toddler constant colds',
    'baby immune system weak',
    'is it normal for baby to be sick so often',
    'baby sick every two weeks',
    'toddler recurring illness',
  ],
  quickAnswer:
    'It is completely normal for babies and toddlers, especially those in group care settings, to get sick 8 to 12 times per year  -  and these illnesses often cluster in fall and winter, making it feel like your child is constantly unwell. Each infection helps build their immune system. However, if illnesses seem unusually frequent, severe, or slow to resolve, it is worth discussing with your pediatrician to rule out underlying conditions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are partially protected by maternal antibodies passed during pregnancy and through breast milk. Frequent illnesses at this very young age are less typical and should be discussed with your pediatrician. If your newborn is catching multiple infections, your doctor may want to evaluate whether there is an underlying issue or environmental exposure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As maternal antibodies begin to wane, babies become more susceptible to infections. If your baby is in daycare or has older siblings, expect an increase in colds and viral illnesses. Each illness should follow its normal course (7-10 days for a cold) and resolve fully. What often looks like one long illness may actually be two separate viruses caught back to back.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often the peak age for frequent illnesses as maternal antibody protection fades significantly. Babies in group care may seem to have a perpetual runny nose from October through March. As long as each individual illness resolves, your baby is growing well, and there are periods of wellness between infections, this frequency is normal and actually beneficial for long-term immune development.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in daycare average one new viral infection every 3-4 weeks during cold and flu season. This can feel relentless for parents. The good news is that children who are exposed to more viruses early on tend to have fewer illnesses once they reach school age. If your toddler is growing normally, recovering fully between illnesses, and not requiring hospitalization, their immune system is likely working as expected.',
    },
  ],
  whenNormal: [
    'Your child catches 8-12 viral infections per year, mostly colds, and recovers fully from each one within 7-14 days',
    'Illnesses cluster during fall and winter with longer healthy stretches in spring and summer',
    'Your child is growing well, gaining weight, and developing normally between illnesses',
    'Each illness is a common childhood virus (cold, stomach bug, hand-foot-and-mouth) that resolves without complications',
  ],
  whenToMention: [
    'Your child seems to catch more than 12 infections per year or never seems fully well between illnesses',
    'Illnesses are frequently complicated  -  every cold turns into an ear infection, pneumonia, or requires antibiotics',
    'Your child has had more than 4 ear infections in a year or more than 2 episodes of pneumonia',
    'Your child is not growing or gaining weight as expected, or has chronic diarrhea alongside frequent infections',
  ],
  whenToActNow: [
    'Your child develops a serious infection such as meningitis, a deep skin abscess, or a bone or joint infection  -  these unusual infections may prompt evaluation of immune function',
    'Your child has a fever with extreme lethargy, difficulty breathing, or an inability to keep fluids down during any illness  -  seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Frequent Infections in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. How Does the Immune System Work?',
      url: 'https://www.nichd.nih.gov/health/topics/primaryimmune',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is It Normal for My Child to Be Sick So Often? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/Germs-Infections.aspx',
    },
  ],
};

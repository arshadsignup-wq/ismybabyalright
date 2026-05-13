import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'illness-duration-when-to-worry',
  title: 'How Long Is Too Long: Illness Duration Guide',
  category: 'medical',
  searchTerms: [
    'baby sick too long',
    'how long should baby illness last',
    'baby not getting better',
    'baby sick for a week',
    'toddler illness won\'t go away',
    'how long is normal for baby to be sick',
    'baby still sick after a week',
    'when to worry illness lasting too long',
    'baby illness timeline',
  ],
  quickAnswer:
    'Most common childhood illnesses have predictable timelines: colds last 7-10 days, stomach bugs 2-5 days, ear infections improve within 48-72 hours of treatment, and croup typically peaks on nights 2-3 then improves. An illness that worsens after initially improving, lasts significantly longer than expected, or is accompanied by new concerning symptoms is worth evaluating. The pattern of the illness matters more than the exact number of days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants should be evaluated promptly for any illness, regardless of duration. Their immature immune systems mean that even common viruses can progress differently than in older babies. Any illness in this age group that is not clearly improving within 24-48 hours, or any fever at all, warrants medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Common viral illnesses should show a clear pattern of worsening for 2-3 days, plateauing, and then improving. If an illness seems to plateau without improvement for more than 5 days, or if your baby develops new symptoms (such as ear tugging, worsening cough, or a new fever after the initial fever resolved), contact your pediatrician to check for complications.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies this age are exposed to many new viruses, and illnesses may seem to blend together. Each individual illness should still follow its expected timeline. A cold lasting beyond 10-14 days may actually be a new cold or could indicate a sinus infection. An ear infection should improve within 2-3 days of starting antibiotics  -  if not, the antibiotic may need to be changed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in daycare may average one illness per month during fall and winter, which can feel relentless. Key timelines to know: a typical cold is 7-10 days, influenza is 5-7 days of acute illness, croup is 3-5 days, a stomach virus is 2-5 days, and a fever with roseola lasts 3-5 days before the rash appears. Any illness that significantly exceeds these timelines or involves worsening after improvement deserves a call to your doctor.',
    },
  ],
  whenNormal: [
    'The illness is following the expected timeline for a common virus, with gradual improvement each day',
    'Your child has some lingering symptoms like a cough or runny nose after the worst has passed  -  this can last 1-2 weeks after a cold',
    'Your child is slowly returning to normal eating, sleeping, and activity patterns',
    'Each day your child seems a little better than the day before, even if recovery is slow',
  ],
  whenToMention: [
    'The illness is not improving at all after the expected timeline or seems to have plateaued without getting better',
    'Your child improves for a day or two and then worsens again, which may indicate a secondary infection',
    'You are unsure whether your child\'s symptoms represent one long illness or multiple back-to-back illnesses',
    'Your child has been on antibiotics for 48-72 hours with no improvement',
  ],
  whenToActNow: [
    'Your child develops new, serious symptoms during an illness such as difficulty breathing, a high-pitched cry, extreme lethargy, or inability to keep any fluids down',
    'A fever that seemed to be resolving returns higher than before, especially with new symptoms like rash, neck stiffness, or inconsolability',
    'Your child shows signs of dehydration: no wet diapers for 6-8 hours, no tears, dry mouth, or sunken eyes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Flu: A Guide for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/The-Flu.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold and Runny Nose.',
      url: 'https://www.cdc.gov/antibiotic-use/colds.html',
    },
  ],
};

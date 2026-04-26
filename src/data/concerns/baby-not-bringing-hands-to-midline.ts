import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-bringing-hands-to-midline',
  title: 'Baby Not Bringing Hands to Midline',
  category: 'physical',
  searchTerms: [
    'baby not bringing hands to midline',
    'baby doesn\'t bring hands together',
    'baby not clasping hands',
    'baby hands don\'t meet in middle',
    'baby not playing with hands',
    'infant not bringing hands together',
    'baby doesn\'t clasp hands at chest',
    'when do babies bring hands to midline',
    'baby hands stay to the sides',
    'midline hand play baby',
  ],
  quickAnswer:
    'Bringing hands to midline - the center of the body - is an important early motor milestone that typically develops between 3 and 4 months. Before this, babies tend to keep their hands to their sides or near their face. Once midline play develops, you will see your baby clasping their hands together, reaching for toys with both hands, and bringing objects to their mouth. This skill lays the foundation for many later abilities like transferring objects between hands and self-feeding.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns typically keep their hands fisted and arms flexed close to their body. They are not yet expected to bring their hands to midline. You may see occasional hand-to-mouth movements, which is a precursor to midline play. There is no need to worry about midline skills at this age.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is when most babies discover their hands and begin bringing them together at the center of their body. You will notice your baby looking at their hands, clasping them together, and starting to reach for objects with both hands. By 4 months, most babies are actively playing with their hands at midline. If your baby shows no interest in their hands and never brings them together by 4 months, mention this at your next well-child visit.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Midline play should be well established by this point. Your baby should be reaching for objects with both hands, bringing toys to their mouth (which requires crossing midline), and clasping their hands together. If your baby still cannot bring their hands together at midline by 5 months, or consistently avoids using one hand, discuss this with your pediatrician, as it can sometimes indicate tone or neurological differences that benefit from early therapy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, babies are transferring objects from one hand to the other, which requires fluid midline crossing. They bang toys together, clap their hands, and use both hands cooperatively. If your baby is still not bringing hands to midline by 6 months, your pediatrician may refer for a motor evaluation. Early physical or occupational therapy can help encourage midline skills.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and has not yet started bringing their hands together, as this skill typically develops between 3 and 4 months.',
    'Your baby brings hands to midline sometimes but not consistently, as the skill is still developing.',
    'Your baby brings hands to midline during certain activities like lying on their back but not yet during tummy time.',
    'Your baby holds their hands together briefly but then their hands drift apart again.',
  ],
  whenToMention: [
    'Your baby is 4 to 5 months old and never brings their hands together at midline or shows no interest in their hands.',
    'Your baby consistently uses one hand while the other stays fisted or at their side.',
    'Your baby cannot bring objects to their mouth using their hands by 5 months of age.',
  ],
  whenToActNow: [
    'Your baby was previously bringing hands to midline and has stopped doing so, as loss of any motor skill requires prompt evaluation.',
    'Your baby has persistent fisting of one or both hands past 4 months combined with inability to bring hands to midline, which may indicate increased muscle tone requiring assessment.',
  ],
  relatedMilestones: [
    'fine-motor-midline-play',
    'fine-motor-grasping',
    'fine-motor-transferring',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'skin-picking-toddler',
  title: 'My Toddler Picks at Their Skin',
  category: 'behavior',
  searchTerms: [
    'toddler picking at skin',
    'baby picking scabs',
    'toddler picking face',
    'toddler picking until bleeds',
    'why does my toddler pick their skin',
    'toddler picking nose until bleeds',
    'baby scratching face repeatedly',
    'toddler excoriation disorder',
    'toddler picking eczema',
    'how to stop toddler picking skin',
  ],
  quickAnswer:
    'Occasional skin picking in toddlers is common and usually harmless  -  they are exploring their bodies, responding to itchiness, or self-soothing. Most children pick at scabs, dry skin, or small bumps occasionally. If the picking is causing frequent bleeding, sores, or seems compulsive, it is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age often discover scabs, dry patches, or bumps on their skin and pick at them out of curiosity. They may also scratch or pick in response to eczema, bug bites, or other itchy skin conditions. Keep nails trimmed short, moisturize dry skin, and try to address any underlying itch or irritation. Redirection usually works at this age.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Skin picking can become more deliberate during this stage. Some toddlers pick at their face, arms, or legs when bored, tired, or anxious. Others focus on scabs or small imperfections and cannot resist the urge to pick them off. This is usually a phase and not a sign of a deeper issue. Gently redirecting hands ("Let\'s keep that covered so it can heal") or offering a fidget toy can help.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Most children outgrow frequent skin picking by preschool age as they develop better self-control. If picking persists, worsens, or your child seems unable to stop even when they want to, it may be becoming a compulsive habit. Look for patterns  -  does it happen when anxious, during screen time, or at bedtime? Addressing triggers and offering alternative sensory outlets can reduce the behavior.',
    },
  ],
  whenNormal: [
    'Your toddler picks at scabs, dry skin, or bug bites occasionally but stops when redirected',
    'Picking happens in specific situations (like boredom or when there is a visible scab to pick)',
    'Your child does not pick to the point of creating new wounds or infections',
    'The behavior is mild and not interfering with healing or causing scarring',
    'Your toddler is otherwise developing typically and does not show signs of distress',
  ],
  whenToMention: [
    'Your child picks frequently enough to create new sores or delay healing of existing ones',
    'Picking seems to be triggered by anxiety, stress, or strong emotions',
    'Your child has created noticeable scarring or skin damage from repeated picking',
    'Picking is focused on one area (like the face or arms) and is becoming a daily habit',
  ],
  whenToActNow: [
    'Your child has developed a skin infection (redness, warmth, pus, or fever) from picking',
    'Picking is so severe or frequent that your child is bleeding regularly or has open wounds that will not heal',
    'Your child is picking in response to hallucinations, delusions, or seems to be in distress about their skin that is not based in reality',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Picking and Habits in Young Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/default.aspx',
    },
    {
      org: 'AACAP',
      citation:
        'American Academy of Child and Adolescent Psychiatry. Skin Picking Disorder (Excoriation). Facts for Families.',
      url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Skin-Picking-Disorder-128.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Understanding Self-Soothing Behaviors in Toddlers.',
      url: 'https://www.zerotothree.org/resource/self-soothing/',
    },
  ],
};

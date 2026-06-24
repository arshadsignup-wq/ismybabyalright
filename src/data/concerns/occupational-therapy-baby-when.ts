import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'occupational-therapy-baby-when',
  title: 'When Does Your Baby Need Occupational Therapy?',
  category: 'physical',
  searchTerms: [
    'occupational therapy baby',
    'baby OT referral when',
    'occupational therapy infant',
    'baby feeding therapy OT',
    'baby sensory processing OT',
    'occupational therapy toddler fine motor',
    'early intervention occupational therapy',
    'baby not using hands OT',
    'occupational therapy vs physical therapy baby',
    'pediatric OT what to expect',
  ],
  quickAnswer:
    'Pediatric occupational therapy (OT) helps babies and toddlers develop skills needed for daily activities including feeding, playing, and exploring their environment. OT may be recommended if your baby has difficulties with feeding (sucking, swallowing, transitioning to solids), fine motor skills (grasping, reaching, manipulating objects), sensory processing (over- or under-reacting to textures, sounds, movement), or self-care skills. Early intervention OT is available free or low-cost through your state\'s early intervention program for children under 3, and early treatment leads to better outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'In the first 6 months, OT referrals most commonly address feeding difficulties. Signs that OT may help include: persistent difficulty latching or sucking, choking or gagging during feeds, excessive spitting up, prolonged feeding times (over 30 minutes per session), poor weight gain related to feeding, and difficulty transitioning between breast and bottle. OT can also help babies who seem unusually stiff or floppy, have difficulty bringing hands to midline, show strong preference for one side, or seem to over-react or under-react to touch and sensory input.',
    },
    {
      ageRange: '6-12 months',
      context:
        'During this period, OT may be helpful for babies who are not reaching for and grasping toys, not transferring objects between hands (by 7-8 months), having significant difficulty with solid food introduction (gagging on all textures, refusing textures beyond purees), not bringing toys to mouth for exploration, showing strong hand preference before 12 months (which can indicate weakness on one side), or displaying sensory sensitivities that interfere with daily activities (extreme distress with certain textures, sounds, or movements).',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may benefit from OT for fine motor delays (not stacking blocks, difficulty with pincer grasp, inability to self-feed with utensils), sensory processing challenges (meltdowns triggered by textures, sounds, or visual stimulation; seeking excessive sensory input like crashing and spinning), feeding difficulties (extremely limited diet, texture aversions, pocketing food), difficulty with self-care tasks (taking off shoes, hand washing), and play skill delays. Your pediatrician or state early intervention program can make a referral. OT is typically covered by insurance with a referral.',
    },
  ],
  whenNormal: [
    'Your baby is meeting fine motor milestones within the expected range, even if not at the earliest end.',
    'Your baby has some food preferences but is gradually accepting new textures and flavors.',
    'Your toddler is developing self-care skills with some age-appropriate messiness and imprecision.',
  ],
  whenToMention: [
    'Your baby is not reaching for or grasping objects by 5-6 months.',
    'Your baby is having persistent feeding difficulties that are affecting weight gain or mealtime experience.',
    'Your toddler has extreme reactions to certain textures, sounds, or sensory experiences that interfere with daily life.',
    'Your child seems significantly behind peers in fine motor skills or self-care tasks.',
  ],
  whenToActNow: [
    'Your baby is unable to feed safely (choking, aspiration risk) and needs immediate feeding evaluation.',
    'Your baby shows sudden loss of previously acquired motor skills, which could indicate a neurological issue.',
    'Your child has sensory-related behaviors that are causing self-injury or preventing participation in necessary activities.',
  ],
  relatedMilestones: [
    'fine-motor',
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'physical-therapy-baby-when',
    'not-picking-up-small-objects',
    'not-transferring-objects',
    'weak-grip-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Screening and Referral. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones.aspx',
    },
    {
      org: 'AOTA',
      citation:
        'American Occupational Therapy Association. OT for Children and Youth.',
      url: 'https://www.aota.org/practice/practice-essentials/children-and-youth',
    },
    {
      org: 'CDC',
      citation:
        'CDC. If You\'re Concerned: Early Intervention.',
      url: 'https://www.cdc.gov/ncbddd/actearly/parents/states.html',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'low-muscle-tone-arms',
  title: 'Low Muscle Tone in Arms (Hypotonia)',
  category: 'physical',
  searchTerms: [
    'baby low muscle tone arms',
    'baby arms feel floppy',
    'infant weak arms',
    'baby arms limp',
    'hypotonia arms baby',
    'baby can\'t support on arms',
    'baby weak upper body',
    'baby floppy arms',
    'low tone upper body baby',
    'baby arms don\'t resist when moved',
    'infant upper body hypotonia',
  ],
  quickAnswer:
    'Low muscle tone in the arms means your baby\'s arms may feel floppy or offer less resistance than expected when you move them. While some babies naturally have lower muscle tone that improves with time and practice, significant or persistent low tone in the arms can affect reaching, grasping, and tummy time skills. Your pediatrician can assess whether your baby\'s tone is within the normal range or whether a referral for physical or occupational therapy would be helpful.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns typically hold their arms in a flexed position close to their body and offer some resistance when you gently extend their limbs. A baby with low arm tone may let their arms rest loosely at their sides and offer little resistance when moved. Some degree of variation is normal, and premature babies often have lower tone initially. If your baby\'s arms seem significantly floppy and they have difficulty with feeding or show very little arm movement, bring this to your pediatrician\'s attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies should be reaching for objects, bringing their hands together at midline, and starting to bear weight on their forearms during tummy time. Low arm tone can make these activities more difficult. You may notice your baby tires quickly during tummy time, has trouble reaching for and holding toys, or seems to use their arms less than expected. Physical therapy can be very effective at this stage to build strength.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies are now transferring objects between hands, feeding themselves finger foods, and bearing weight through their arms for crawling. Low arm tone may slow progress in these areas. Your baby may crawl with a modified pattern or prefer to scoot rather than bear weight through their arms. An evaluation can help determine the best approach to support your baby\'s upper body development.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with low arm tone may have difficulty with activities like throwing a ball, climbing playground equipment, pushing riding toys, or using utensils. They may tire more quickly during activities that require arm strength. Occupational therapy can help build functional arm strength through play-based activities. Many children with mild low tone make excellent progress with consistent support.',
    },
  ],
  whenNormal: [
    'Your baby has slightly lower tone than other babies but is meeting developmental milestones within the expected timeframes.',
    'Your premature baby has lower arm tone that is gradually improving as they grow.',
    'Your baby\'s arms feel a bit relaxed, but they are actively reaching for objects, bearing weight during tummy time, and using their hands appropriately for their age.',
    'There is a family history of being very flexible or "double-jointed," and your baby is otherwise developing well.',
  ],
  whenToMention: [
    'Your baby\'s arms feel notably floppy and they have difficulty bearing weight on their arms during tummy time by 4 months.',
    'Your baby seems to avoid using their arms for reaching, grasping, or weight bearing, and this is affecting their development.',
    'You notice that your baby\'s arm tone is significantly different on one side compared to the other.',
  ],
  whenToActNow: [
    'Your baby\'s arms have become progressively floppier over time rather than getting stronger, or your baby has lost arm movement they previously had.',
    'Your baby has severely floppy arms combined with difficulty feeding, breathing problems, or overall low alertness.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-reaching',
    'gross-motor-tummy-time',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Floppy Infant: Evaluation of Hypotonia. Pediatrics in Review. 2005.',
      url: 'https://publications.aap.org/pediatricsinreview/article/26/5/169/62083/The-Floppy-Infant',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hypotonia Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypotonia',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Six Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
  ],
};

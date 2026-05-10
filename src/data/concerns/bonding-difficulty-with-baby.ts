import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'bonding-difficulty-with-baby',
  title: 'Difficulty Bonding with Baby',
  category: 'behavior',
  searchTerms: [
    'not bonding with baby',
    'do not feel connected to my baby',
    'no maternal instinct',
    'feel nothing for my baby',
    'baby feels like a stranger',
    'difficulty bonding with newborn',
    'no instant love for baby',
    'when will I love my baby',
  ],
  quickAnswer:
    'Not feeling an instant, overwhelming rush of love for your baby is far more common than anyone talks about. Bonding is not always a lightning bolt — for many parents, it is a gradual process that builds over days, weeks, or even months. Difficulty bonding can be related to birth trauma, postpartum depression, or simply the shock of new parenthood. It does not mean something is wrong with you as a parent.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'In the early weeks, many parents describe feeling more like a caretaker than a connected parent. The fog of sleep deprivation, physical recovery, and the unrewarding nature of newborn care (they do not smile yet, do not interact much) can make bonding feel impossible. This does not mean the bond will not form. Going through the motions of care — holding, feeding, talking — builds connection even when you do not feel it yet.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As your baby begins to smile, coo, and respond to you, many parents notice the bond strengthening naturally. If you still feel emotionally disconnected, empty, or indifferent toward your baby at this stage, it may be related to postpartum depression or anxiety. Speaking to a healthcare provider can help — treatment often leads to a rapid improvement in the ability to connect.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'By this age, your baby is becoming interactive — laughing, reaching for you, showing clear preferences. If you are still feeling detached despite your baby\'s growing responsiveness, this is worth addressing with professional support. Bonding difficulties are treatable and resolving them benefits both you and your baby.',
    },
    {
      ageRange: '12 months+',
      context:
        'It is never too late to build a secure bond with your child. Some parents find that bonding clicks when their child becomes more of a communicator and a companion. If you continue to struggle, therapies focused on the parent-child relationship (such as Circle of Security or Child-Parent Psychotherapy) can be very effective.',
    },
  ],
  whenNormal: [
    'Not feeling an instant rush of love at birth — many parents need time for the bond to develop',
    'Feeling more connected on some days than others during the early months',
    'Finding newborn care monotonous or unrewarding before baby becomes more interactive',
    'Bonding feeling slower after a difficult birth, NICU stay, or fertility journey',
  ],
  whenToMention: [
    'You have felt persistently disconnected from your baby for more than a few weeks and it is distressing to you',
    'You are going through the motions of care but feel emotionally numb or indifferent most of the time',
    'You are avoiding holding or interacting with your baby beyond what is necessary',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby — call 988 (Suicide and Crisis Lifeline) or the Postpartum Support International helpline at 1-800-944-4773 immediately',
    'You feel nothing at all — no positive or negative emotion toward your baby — and this scares you. Please reach out to a healthcare provider or crisis line today.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-ptsd-birth-trauma',
    'nicu-parent-trauma',
    'identity-loss-after-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bonding With Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Bonding-With-Your-Baby.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Depression.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
  ],
};

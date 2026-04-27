import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-waking-every-hour',
  title: 'Baby Waking Every Hour at Night',
  category: 'sleep',
  searchTerms: ['baby waking every hour','baby waking up every hour at night','baby frequent night waking','baby won\'t stay asleep','baby waking every 45 minutes','baby sleep cycle problems','baby waking every sleep cycle','why does my baby wake so often','baby can\'t connect sleep cycles','newborn waking every hour','baby restless all night','baby waking hourly teething'],
  quickAnswer: 'Babies naturally wake between sleep cycles, which last about 45-60 minutes for infants. If your baby needs help (feeding, rocking, pacifier) to fall asleep initially, they will need that same help each time they surface between sleep cycles - which can mean waking every 45-90 minutes all night. This is the most common cause of frequent night waking. Other causes include sleep regressions, illness, teething, hunger, discomfort, or sleep environment issues. While exhausting, this pattern is solvable.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborn sleep cycles are about 45-50 minutes, and newborns have not yet developed the ability to connect sleep cycles independently. Waking every 1-2 hours is biologically normal at this age. Newborns also need frequent night feeds for growth. Do not try to "fix" this - focus on safe sleep practices and survival strategies like taking turns with a partner, sleeping when baby sleeps, and accepting help. This phase is temporary.' },
    { ageRange: '3-6 months', context: 'By 3-4 months, many babies can sleep one longer stretch of 4-6 hours. If your baby is still waking every hour, the most likely cause is a strong sleep association - they fall asleep being nursed, rocked, or with a pacifier and need that same condition at each sleep cycle transition. The 4-month sleep regression also permanently changes sleep architecture, making cycle transitions more noticeable. This is the age when working on independent sleep skills can start making a difference.' },
    { ageRange: '6-12 months', context: 'Hourly waking at this age almost always involves sleep associations. Your baby\'s sleep cycles are still about 45-60 minutes, and they briefly wake between each one. If they can only fall asleep with help, they fully wake and cry at each transition. Teaching your baby to fall asleep independently at bedtime (through any method that works for your family) typically resolves frequent night waking within 3-7 nights because the skill transfers to all sleep cycle transitions.' },
    { ageRange: '12-24 months', context: 'If your toddler is still waking hourly, consider: Are they falling asleep independently at bedtime? Is the sleep environment consistent all night? Are they overtired (not enough daytime sleep) or undertired (too much daytime sleep)? Teething, illness, and developmental leaps can temporarily increase waking. If your toddler was sleeping well and suddenly regressed, look for a trigger. If they have never slept more than 1-2 hours at a stretch, sleep associations are almost certainly the cause.' },
  ],
  whenNormal: ['Your newborn under 3 months wakes every 1-3 hours for feeds - this is biologically appropriate','Your baby wakes more frequently for 3-5 days during a growth spurt or illness and then returns to normal','Your baby is going through a known sleep regression (4, 8, 12, 18 months) and waking has temporarily increased','Your baby wakes briefly between sleep cycles but resettles within a few minutes without intervention'],
  whenToMention: ['Your baby is over 6 months and waking every hour despite consistent efforts to improve sleep','Sleep deprivation is affecting your mental health, ability to function, or safety','Your baby seems to be in pain or discomfort at each waking rather than just seeking comfort','Your baby snores loudly, gasps, or pauses breathing during sleep'],
  whenToActNow: ['You are so sleep deprived that you are at risk of falling asleep with your baby in an unsafe location (couch, recliner)','Your baby has signs of a sleep-related breathing disorder - loud snoring, gasping, long pauses in breathing','You are having thoughts of harming yourself or your baby due to exhaustion - call your doctor or 988 Suicide and Crisis Lifeline'],
  relatedMilestones: ['sleep-consolidation','self-soothing'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cries-when-put-down-to-sleep','baby-sleep-training-when-to-start','sleep-regression-12-months'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx' },
    { org: 'NIH', citation: 'Mindell JA, et al. A Nightly Bedtime Routine: Impact on Sleep in Young Children. Sleep. 2015.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325483/' },
    { org: 'NIH', citation: 'Sadeh A, et al. Infant Sleep and Parental Sleep-Related Cognitions. Journal of Family Psychology. 2007.', url: 'https://pubmed.ncbi.nlm.nih.gov/17605544/' },
  ],
};

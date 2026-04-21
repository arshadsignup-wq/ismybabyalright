import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'low-muscle-tone',
  title: 'Low Muscle Tone (Hypotonia)',
  searchTerms: [
    'baby feels floppy',
    'low muscle tone in babies',
    'baby hypotonia',
    'my baby feels limp',
    'baby not holding head up',
    'floppy baby syndrome',
    'baby has weak muscles',
    'baby low tone what does it mean',
    'benign hypotonia in infants',
    'baby muscles feel loose',
  ],
  quickAnswer:
    'Low muscle tone means your baby\'s muscles feel less firm or their body feels "floppy" when you hold them. While it can sometimes indicate an underlying condition, many babies with mildly low tone do very well with support and strengthening activities.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'All newborns have relatively low tone compared to older babies, and they naturally curl into a flexed position. Premature babies especially may feel floppier than full-term babies. Head lag when gently pulling your baby from lying to sitting is normal at this age, though they should show some effort to keep their head in line.',
    },
    {
      ageRange: '2-4 months',
      context:
        'Babies are developing head control and should be starting to hold their head steadily when supported upright. During tummy time, they should be beginning to lift their head and push up on their forearms. If your baby seems unable to make progress with head lifting or feels unusually floppy, it is worth mentioning to your doctor.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By now, babies typically have good head control and are working on sitting with support. Babies with low tone may need more practice and encouragement during tummy time and supported sitting. Some babies with mild low tone begin to "catch up" around this age as they build strength.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Most babies are sitting independently and some are beginning to crawl. Babies with low muscle tone may reach these milestones a bit later, which is often manageable with physiotherapy support. Your doctor can help assess whether the tone difference is mild and isolated or part of a broader pattern.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Babies with benign low tone are often making good progress by this point, especially if they have had support from a physiotherapist. They may pull to stand and cruise a little later than average. Ongoing gentle strengthening through play continues to be helpful.',
    },
  ],
  whenNormal: [
    'Your baby feels a bit "softer" than other babies but is still meeting motor milestones within a reasonable range',
    'Your premature baby has lower tone that is gradually improving as they grow',
    'Your baby has mild low tone but is making steady progress with head control, rolling, and sitting',
    'There is a family pattern of being more flexible or "double-jointed," and your baby is developing well overall',
  ],
  whenToMention: [
    'Your baby seems noticeably floppier than other babies their age and is slow to develop head control',
    'Your baby has difficulty with tummy time even with lots of practice and support, and does not seem to be building strength',
    'Motor milestones like rolling, sitting, and reaching seem significantly delayed alongside the low tone',
    'Your baby tires very quickly during physical activities like tummy time or supported sitting',
  ],
  whenToActNow: [
    'Your baby feels suddenly more floppy than usual, seems less responsive, or has a significant change in their tone or alertness',
    'Your baby has difficulty feeding, a weak cry, and very low muscle tone, particularly in the newborn period',
    'Your baby has low tone combined with breathing difficulties or failure to thrive',
  ],
  relatedMilestones: [
    'head-control',
    'rolling',
    'sitting',
    'crawling',
    'pulling-to-stand',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hypotonia in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/bones-joints-muscles/Pages/Hypotonia.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-4mo.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Motor Development Study: Windows of Achievement for Six Gross Motor Milestones.',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};

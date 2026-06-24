import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-divorce-new-parents',
  title: 'Sleeping in Separate Rooms as New Parents - Is This Normal?',
  category: 'maternal',
  searchTerms: [
    'sleep divorce new baby',
    'sleeping separately after baby',
    'separate bedrooms new parents',
    'is it normal to sleep apart with newborn',
    'partner sleeping in different room baby',
    'sleep divorce relationship damage',
    'taking turns sleeping baby',
    'sleeping apart saving marriage baby',
    'new parent sleep arrangements',
    'sleeping in shifts with baby',
    'partner won\'t help at night baby',
    'sleep divorce normal',
    'separate sleeping new parents guilt',
  ],
  quickAnswer:
    'Sleeping in separate rooms as new parents is common - surveys show about 50% of US couples sometimes sleep apart, and the newborn period is one of the most common triggers. This arrangement can be a practical survival strategy that helps both parents get enough sleep to function safely. It does not mean your relationship is failing. The key is that the arrangement is mutually agreed upon, temporary, and that both parents are sharing the nighttime caregiving load fairly.',
  byAge: [
    {
      ageRange: 'Baby 0-3 months',
      context:
        'The newborn period involves feeds every 2-3 hours around the clock, and severe sleep deprivation affects safety, mental health, and relationship quality. Many couples find that taking shifts (one parent sleeps uninterrupted while the other handles the baby) is the most effective way to ensure both parents get one solid block of sleep. This often means sleeping in separate rooms. If you are breastfeeding, you might pump a bottle for your partner\'s shift, or handle the feeds during your "on" shift while your partner sleeps. The AAP recommends room-sharing with the baby (not bed-sharing) for at least the first 6 months, so whoever is "on" should have the baby in their room.',
    },
    {
      ageRange: 'Baby 3-6 months',
      context:
        'As your baby begins to consolidate sleep into longer stretches, some couples transition back to sharing a room while the baby remains in the parents\' room in a bassinet or crib. Others continue sleeping separately because it is working. Neither approach is wrong. What matters is communication: are both partners satisfied with the arrangement? Is nighttime caregiving shared equitably? If one partner feels abandoned or resentful about the setup, that needs a conversation - preferably during the day when you are both less exhausted.',
    },
    {
      ageRange: 'Baby 6+ months',
      context:
        'If you are still sleeping separately after your baby moves to their own room, check in with each other about whether this is still serving your family or has become a habit disconnecting your relationship. Some couples find they prefer separate sleeping long-term, and research suggests this does not inherently harm relationships as long as intimacy and connection are maintained in other ways. If one partner wants to return to sharing a room and the other does not, consider couples counseling to work through the underlying issues.',
    },
  ],
  whenNormal: [
    'You and your partner agreed to sleep in shifts or separate rooms to manage newborn sleep deprivation.',
    'Both parents are sharing nighttime caregiving responsibilities fairly under the arrangement.',
    'You plan to resume room-sharing once your baby sleeps longer stretches.',
    'You feel some guilt or sadness about the arrangement but recognize it is practical - that is a normal emotional response.',
  ],
  whenToMention: [
    'You are so sleep-deprived that you are falling asleep while holding or feeding your baby, creating a safety risk.',
    'The separate sleeping arrangement is causing significant relationship conflict or resentment.',
    'One parent is doing all nighttime caregiving and is showing signs of burnout or postpartum mood disorder.',
  ],
  whenToActNow: [
    'You are experiencing symptoms of postpartum depression or anxiety that are worsened by isolation and sleep deprivation.',
    'You are so exhausted that you are unable to safely care for your baby during the day.',
    'Your relationship is in crisis and the sleeping arrangement is a symptom of deeper issues that need professional support.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'partner-conflict-parenting-decisions',
    'postpartum-depression-signs',
    'postpartum-anxiety-symptoms',
    'mom-guilt',
    'postnatal-depletion-syndrome',
  ],
  sources: [
    {
      org: 'AAP',
      citation: 'AAP - Safe Sleep Recommendations Including Room-Sharing Guidelines',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'Sleep Foundation',
      citation: 'Sleep Foundation - Sleep Divorce: Trends and Impact on Relationships',
      url: 'https://www.sleepfoundation.org/sleep-hygiene/what-is-a-sleep-divorce',
    },
    {
      org: 'NIH',
      citation: 'NIH - Postpartum Sleep Deprivation and Its Impact on Parental Functioning',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31433507/',
    },
  ],
};

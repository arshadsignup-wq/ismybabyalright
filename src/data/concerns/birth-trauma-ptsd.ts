import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'birth-trauma-ptsd',
  title: 'I\'m Having Flashbacks or Nightmares About My Baby\'s Birth',
  category: 'maternal',
  searchTerms: [
    'birth trauma PTSD',
    'flashbacks from childbirth',
    'traumatic birth experience',
    'PTSD after emergency C-section',
    'nightmares about delivery',
    'birth trauma father partner',
    'can\'t stop thinking about birth',
    'afraid of another pregnancy after traumatic birth',
    'tokophobia after birth trauma',
    'postpartum PTSD symptoms',
  ],
  quickAnswer:
    'Birth trauma is real and can affect both the person who gave birth and their partner. Up to 1 in 10 mothers and up to 8% of fathers meet diagnostic criteria for PTSD following childbirth. Symptoms include flashbacks, nightmares, avoidance of reminders, emotional numbness, and hypervigilance. Having a traumatic birth experience does not mean you are weak, and your pain is valid even if your baby is healthy. Effective treatment exists, and recovery is absolutely possible.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'In the immediate aftermath of a traumatic birth, it is normal to replay events, feel shaky, or have difficulty sleeping beyond what newborn care demands. Many parents experience a period of acute stress that resolves naturally. However, if you are having vivid flashbacks, nightmares, or intense distress at reminders of the birth (hospital smells, seeing your scar, hearing other people\'s birth stories), these are signs that your nervous system is struggling to process what happened.',
    },
    {
      ageRange: '6 weeks - 3 months postpartum',
      context:
        'If symptoms have not begun to ease by 6 weeks, or are getting worse, this may be developing into postpartum PTSD. You may find yourself avoiding the hospital, the route you drove to the hospital, or even conversations about birth. Partners who witnessed a traumatic birth may feel helpless, angry at the medical team, or guilty that they could not protect their loved one. Both partners deserve support.',
    },
    {
      ageRange: '3-12 months postpartum',
      context:
        'Untreated birth trauma can affect bonding, relationships, and daily functioning. Some parents feel emotionally disconnected from their baby because the baby is associated with the traumatic event. Others become hyperprotective. EMDR (Eye Movement Desensitization and Reprocessing) and trauma-focused CBT are both highly effective treatments for birth-related PTSD.',
    },
    {
      ageRange: '12 months+',
      context:
        'It is never too late to process birth trauma. Some parents do not recognize what they experienced as trauma until months or years later — sometimes triggered by a friend\'s pregnancy, a subsequent pregnancy, or an anniversary of the birth. If the birth experience is still causing distress, seeking help now can bring significant relief.',
    },
  ],
  whenNormal: [
    'You recall your birth experience vividly but can discuss it without becoming overwhelmed and the memories are fading over time',
    'You had a difficult birth and feel sadness or disappointment that it did not go as planned, but it does not dominate your daily thoughts',
    'You have moments of anxiety in hospital settings but can manage them without significant distress',
  ],
  whenToMention: [
    'You are having intrusive flashbacks or nightmares about the birth that are not fading with time',
    'You avoid anything that reminds you of the birth — the hospital, your scar, birth stories, medical appointments',
    'You feel emotionally numb, disconnected from your baby, or unable to enjoy parenthood because of what happened during the birth',
    'Your partner is struggling with what they witnessed during the birth',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself — call 988 (Suicide and Crisis Lifeline) or go to your nearest emergency room',
    'You are unable to care for yourself or your baby because birth trauma symptoms are so severe — call the PSI helpline at 1-800-944-4773 for immediate support and referral',
    'You are terrified of a subsequent pregnancy and it is affecting your relationship or family planning — a perinatal mental health specialist can help',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-ptsd-birth-trauma',
    'nicu-parent-trauma',
    'bonding-difficulty-with-baby',
    'postpartum-rage-anger',
  ],
  sources: [
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Postpartum Post-Traumatic Stress Disorder.',
      url: 'https://www.postpartum.net/learn-more/postpartum-post-traumatic-stress-disorder/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Post-Traumatic Stress Disorder Following Childbirth. BMC Pregnancy and Childbirth, 2023.',
      url: 'https://bmcpregnancychildbirth.biomedcentral.com/articles/10.1186/s12884-023-06104-2',
    },
    {
      org: 'Mind UK',
      citation:
        'Mind. PTSD and Birth Trauma.',
      url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/postnatal-depression-and-perinatal-mental-health/ptsd-and-birth-trauma/',
    },
  ],
};

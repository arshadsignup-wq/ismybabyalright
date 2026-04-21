import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-responding-to-name',
  title: 'My Baby Isn\'t Responding to Their Name',
  searchTerms: [
    'baby not responding to name',
    'baby doesn\'t look when I call name',
    'baby ignoring name',
    'when do babies respond to name',
    'baby won\'t turn when called',
    'baby not answering to name',
    'baby not recognizing name',
    'baby doesn\'t react to name',
    'is it normal baby ignores me',
    'baby not responding to sound',
  ],
  quickAnswer:
    'Babies typically begin responding to their name consistently between 9 and 12 months. Before that, responses can be hit-or-miss, especially when your baby is focused on something interesting. The first step is always to check hearing, because hearing issues are common, treatable, and can look a lot like other concerns.',
  byAge: [
    {
      ageRange: '0-5 months',
      context:
        'Babies this young are still learning that they have a name. Your baby should startle to loud sounds and quiet to your voice, but consistently turning to their name isn\'t expected yet. What you\'re looking for is that your baby reacts to sounds in general — turning toward voices, noticing music, startling at sudden noises.',
    },
    {
      ageRange: '6-8 months',
      context:
        'Your baby is starting to learn their name, and you might notice them turning toward it sometimes — but not reliably. It\'s perfectly normal for babies this age to "ignore" you when they\'re absorbed in exploring a toy or watching something interesting. The key question is whether they ever respond, not whether they always respond.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, most babies respond to their name the majority of the time when they\'re not deeply focused on something. If your baby rarely or never turns when you say their name — even in a quiet room when nothing else is competing for their attention — it\'s worth bringing up with your pediatrician. A hearing test should be the first step.',
    },
    {
      ageRange: '13-18 months',
      context:
        'Your toddler should reliably respond to their name by now. If they consistently don\'t, especially when combined with limited eye contact, not pointing, or not following simple directions, it\'s important to have both a hearing evaluation and a developmental check. These are screenable, treatable things, and acting early makes a real difference.',
    },
    {
      ageRange: '18+ months',
      context:
        'Not responding to their name at this age, particularly if other social communication concerns are present, warrants evaluation. Talk to your pediatrician about a hearing test and a developmental screening. The earlier any challenges are identified, the more effective support can be.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months and responds to their name sometimes but not always — consistency comes with time.',
    'Your baby doesn\'t respond when deeply focused on a toy or activity but turns when you call their name in a quiet moment.',
    'Your baby responds to your voice and other sounds but hasn\'t connected their name specifically yet (common before 7-8 months).',
    'Your baby has an ear infection or recent cold — temporary hearing reduction from fluid in the ears is extremely common and resolves with treatment.',
  ],
  whenToMention: [
    'Your baby is 9-12 months and rarely responds to their name, even in quiet settings with no distractions.',
    'Your baby doesn\'t seem to respond to sounds in general — not just their name but also voices, music, or sudden noises.',
    'Your baby responds to their name sometimes but also doesn\'t seem to make eye contact or share attention with you when you point at things.',
    'You have a family history of hearing loss or your baby had multiple ear infections.',
  ],
  whenToActNow: [
    'Your baby previously responded to their name and sounds and has stopped — any regression warrants prompt evaluation.',
    'Your baby is over 12 months and never responds to their name, doesn\'t turn to sounds, and doesn\'t follow your gaze or pointing — request both a hearing evaluation and developmental screening.',
    'Your baby doesn\'t startle to loud sounds at any age — this may indicate a hearing issue that needs immediate assessment.',
  ],
  relatedMilestones: [
    'social-emotional-responds-to-name',
    'social-emotional-joint-attention',
    'language-receptive',
    'social-emotional-eye-contact',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker — Important Milestones: Your Baby By 9 Months and 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Hearing Assessment in Infants and Children: Recommendations Beyond Neonatal Screening',
      url: 'https://publications.aap.org/pediatrics/article/124/4/1252/72057',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Identifying Infants and Young Children With Developmental Disorders in the Medical Home',
      url: 'https://publications.aap.org/pediatrics/article/118/1/405/69565',
    },
  ],
};

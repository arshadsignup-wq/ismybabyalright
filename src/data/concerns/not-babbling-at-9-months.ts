import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-babbling-at-9-months',
  title: 'My Baby Isn\'t Babbling at 9 Months',
  category: 'communication',
  searchTerms: [
    'baby not babbling at 9 months',
    'baby not making sounds 9 months',
    'no babbling at 10 months',
    'baby quiet no babbling',
    'when should baby start babbling',
    'baby doesn\'t say mama dada',
    'baby makes no sounds',
    'late babbling',
    'baby not vocalizing',
    'silent baby 9 months',
  ],
  quickAnswer:
    'Most babies are babbling with consonant-vowel sounds like "baba" or "dada" by 9 months. If your baby isn\'t babbling at all by this age, it\'s important to check their hearing first and then consider a speech evaluation. Babbling is a key building block for later language, and early intervention can make a big difference.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Around 4-6 months, babies start experimenting with sounds  -  cooing, squealing, blowing raspberries, and making vowel sounds like "oooh" and "aaah." These sounds are playful and musical. This is the foundation for babbling, which comes next. If your baby is making these early sounds, they\'re on track, even if consonant babbling hasn\'t started yet.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By 7-9 months, babbling should include repetitive consonant-vowel combinations: "bababa," "dadada," "mamama." This is called canonical babbling. If your baby is 9 months and still only making vowel sounds or is very quiet, it\'s worth checking in with your pediatrician. The first step is always a hearing test  -  babies don\'t babble properly if they can\'t hear clearly.',
    },
    {
      ageRange: '10-12 months',
      context:
        'At this age, babbling becomes more complex and varied  -  sometimes called "jargon" babbling because it sounds like the baby is having a conversation with inflection and rhythm, even though there are no real words yet. If your baby has no babbling at all by 12 months, an evaluation is definitely needed. Babbling is a stronger predictor of later language than first words are.',
    },
    {
      ageRange: '13-18 months',
      context:
        'If your baby never babbled much and still isn\'t saying words, speech therapy should be started. Even if hearing is normal, some babies need support to develop the oral-motor skills and sound combinations that lead to speech. The earlier this support starts, the better the outcomes. Many babies who missed babbling but got early help go on to develop completely normal language.',
    },
  ],
  whenNormal: [
    'Your baby is under 7 months and is cooing, squealing, and making vowel sounds, but hasn\'t started consonant babbling yet.',
    'Your baby babbles sometimes but not constantly  -  some babies are quieter than others, and that\'s okay as long as babbling is happening.',
    'Your baby is very focused on physical milestones like crawling and hasn\'t babbled much yet  -  sometimes motor-focused babies talk a bit later, though it should still be monitored.',
  ],
  whenToMention: [
    'Your baby is 9 months and has no consonant babbling at all  -  only vowel sounds or silence.',
    'Your baby used to babble and has become quieter or stopped vocalizing.',
    'Your baby is making sounds but they\'re all the same  -  no variety in consonants or syllables.',
    'Your baby doesn\'t respond to sounds or doesn\'t seem to hear you well  -  this could indicate a hearing issue.',
  ],
  whenToActNow: [
    'Your baby is 12 months or older with no babbling at all.',
    'Your baby has completely stopped making sounds after previously babbling  -  any loss of skills needs immediate evaluation.',
    'Your baby doesn\'t respond to loud sounds or their name, and also isn\'t babbling  -  hearing should be tested urgently.',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-cooing',
    'language-responds-to-name',
    'language-imitates-sounds',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Your Baby By Nine Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Speech and Language Developmental Milestones',
      url: 'https://www.asha.org/public/speech/development/chart/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Language Development: Speech Milestones for Babies',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-12-to-24-Months.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ear-pulling',
  title: 'Baby Pulling or Tugging at Ears',
  category: 'physical',
  searchTerms: [
    'baby pulling ears',
    'baby tugging ears',
    'baby grabbing ears',
    'baby ear pulling teething',
    'baby ear pulling ear infection',
    'baby rubbing ears',
    'why does baby pull ears',
    'baby pulling ears no fever',
    'baby ear pulling sleep',
    'baby ear tugging 6 months',
  ],
  quickAnswer:
    'Baby ear pulling is one of the most common concerns parents bring up, but it is rarely a sign of an ear infection on its own. Babies discover their ears around 4-6 months and often pull, rub, or tug at them out of curiosity, self-soothing, teething discomfort, or tiredness. Ear pulling is concerning for infection mainly when accompanied by fever, fussiness, disrupted sleep, or cold symptoms. Without other symptoms, ear pulling is almost always harmless exploration.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Very young babies may bat at or rub their ears as they discover their body parts. This is a normal part of sensory exploration. Ear infections are less common at this age because maternal antibodies offer some protection and babies are less exposed to cold viruses. If a young baby pulls at ears with fever or extreme fussiness, evaluation is warranted.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This is the peak age for both ear discovery and the start of teething, which commonly causes referred discomfort near the ears and jaw. Babies may rub or pull their ears when tired, as a self-soothing behavior, or when teething. They also get more ear infections at this age as daycare exposure and cold frequency increase. The key differentiator is accompanying symptoms: ear pulling alone without fever, fussiness, cold symptoms, or sleep disruption is very unlikely to be an ear infection.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may pull at their ears when they have wax buildup, water in the ear after bathing or swimming, allergies, or genuinely have an ear infection. They may also do it as a habit or comfort behavior. By this age, toddlers can often point to or tell you about ear pain. Ear infections at this age are commonly preceded by a cold with congestion lasting several days.',
    },
  ],
  whenNormal: [
    'Ear pulling without any other symptoms like fever, fussiness, or cold',
    'Pulling at ears during teething while also drooling and chewing',
    'Rubbing ears when tired or sleepy as a self-soothing habit',
    'Exploring ears with curiosity during bath time or quiet moments',
    'Pulling at both ears equally (infection usually affects one ear)',
  ],
  whenToMention: [
    'Ear pulling is accompanied by a cold, congestion, and fussiness',
    'Your baby is pulling at one specific ear persistently and seems uncomfortable',
    'Ear pulling disrupts sleep when it previously did not',
    'You notice fluid or drainage from the ear',
  ],
  whenToActNow: [
    'Ear pulling with fever over 102F (38.9C) and significant irritability',
    'Pus or blood draining from the ear canal',
    'Your baby is inconsolable and pulling at their ear after a cold',
    'Your baby seems to not be hearing well or is not responding to sounds from one side',
  ],
  relatedMilestones: ['6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['ear-infections', 'baby-ear-wax-buildup', 'hearing-loss-signs-baby', 'baby-ear-infection-vs-teething'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Ear Infections in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Signs Your Baby May Have an Ear Infection.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Symptoms.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institute on Deafness and Other Communication Disorders. Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
  ],
};

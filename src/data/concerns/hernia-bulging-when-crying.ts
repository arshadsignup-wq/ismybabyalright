import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hernia-bulging-when-crying',
  title: 'My Baby\'s Belly Button Bulges When Crying',
  category: 'digestive',
  searchTerms: [
    'baby belly button bulges when crying',
    'umbilical hernia baby',
    'outie belly button baby',
    'belly button pokes out when crying',
    'is umbilical hernia dangerous',
    'baby hernia symptoms',
    'belly button sticks out baby',
    'when do umbilical hernias close',
  ],
  quickAnswer: 'This is almost always an umbilical hernia, which is very common (occurring in about 1 in 5 babies) and usually harmless. It happens when a small opening in the abdominal muscles near the belly button doesn\'t close completely after birth. The bulge you see is intestine pushing through when baby cries, strains, or coughs. Most umbilical hernias close on their own by age 2-5 without any treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context: 'Umbilical hernias are very common in newborns and become more noticeable over the first few weeks as the umbilical cord stump falls off. The bulge can be small (grape-sized) or surprisingly large (golf ball or larger). It becomes more prominent when baby cries, poops, or coughs, then often disappears when baby is calm and lying down. The bulge should be soft and easily pushable back in (you can gently press it). This is completely normal and not painful for baby.',
    },
    {
      ageRange: '6-12 months',
      context: 'The hernia often looks the same size or may seem larger as baby becomes more active, sits up, and uses abdominal muscles more. This doesn\'t mean it\'s getting worse  -  it just means you\'re noticing it more with increased activity. Many hernias start to close during this period as abdominal muscles strengthen. Your pediatrician will monitor the size at checkups.',
    },
    {
      ageRange: '12-24 months',
      context: 'Most umbilical hernias begin to close by this age. You might notice the bulge becoming smaller or appearing less often. Some hernias close as late as age 4-5, especially larger ones. As long as the hernia remains soft and reducible (pushes back in), and baby has no pain or other symptoms, watchful waiting is appropriate.',
    },
    {
      ageRange: '2-5 years',
      context: 'If the hernia hasn\'t closed by age 4-5, or if it\'s particularly large, your pediatrician may refer you to a pediatric surgeon to discuss repair. Surgery is usually simple, safe, and has excellent outcomes. Most surgeons prefer to wait until at least age 4-5 before repairing umbilical hernias unless there\'s a complication.',
    },
  ],
  whenNormal: [
    'Soft bulge at belly button that appears with crying/straining and disappears when calm',
    'Bulge that can be gently pushed back in (reducible)',
    'Baby seems unbothered by the bulge and shows no signs of pain',
    'Hernia that stays roughly the same size over time',
    'Skin over the hernia looks normal, not red or discolored',
  ],
  whenToMention: [
    'You first notice the bulge (so it can be documented at next checkup)',
    'Hernia seems to be getting larger over several months',
    'You have questions about when/if it will close',
    'Your child is approaching age 4-5 and hernia hasn\'t closed',
  ],
  whenToActNow: [
    'Bulge becomes hard, firm, or can\'t be pushed back in',
    'Skin over the hernia turns red, purple, or dark',
    'Baby seems to be in pain, especially around the belly button',
    'Baby is vomiting, especially if bile-colored (green/yellow)',
    'Hernia is tender to touch and baby cries when you touch it',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Umbilical Hernias in Infants: What Parents Should Know (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'American Pediatric Surgical Association',
      citation: 'Umbilical Hernia: Natural History and Treatment Guidelines (2024)',
      url: 'https://www.eapsa.org',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Umbilical Hernia: When Surgery Is Necessary (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};

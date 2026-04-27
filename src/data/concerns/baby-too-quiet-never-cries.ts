import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-too-quiet-never-cries',
  title: 'Baby Too Quiet and Never Cries - When to Worry',
  category: 'behavior',
  searchTerms: ['baby too quiet','baby never cries','baby doesn\'t cry','baby not fussy enough','very quiet baby concerning','baby too calm','baby too easy','baby never fusses','baby too content','should I worry quiet baby','baby not crying when hungry','unresponsive quiet baby'],
  quickAnswer: 'While most parents worry about babies crying too much, having a very quiet baby can also raise questions. Some babies are genuinely calm, easy-going, and cry less than average - this is a normal temperament variation. However, a baby who rarely or never cries, is unusually quiet and still, does not signal hunger, and seems disconnected from their environment may need evaluation. The key difference is between a calm but engaged baby (makes eye contact, responds to voices, signals needs) versus a quiet and unresponsive baby.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns should cry to communicate hunger, discomfort, and need for closeness. A very quiet newborn who does not cry for feeds and seems excessively sleepy may not be getting enough nutrition - this can be a sign of poor feeding or illness. Premature babies or those with medical conditions may be quieter. Check that your baby is feeding well, having adequate wet and dirty diapers, gaining weight, and has periods of alert wakefulness. A "good baby" who never fusses should still have clear alert periods with eye contact.' },
    { ageRange: '3-6 months', context: 'By 3-6 months, babies should be babbling, cooing, smiling at faces, and showing excitement. A baby who is quiet in the sense of not crying much but actively engages with the world (tracks faces, smiles, coos, reaches for toys) has an easy temperament. A baby who is quiet and also does not engage - rarely makes eye contact, does not smile responsively, does not vocalize at all, and shows little interest in people - should be evaluated. Some babies with sensory processing differences or developmental conditions are unusually quiet.' },
    { ageRange: '6-12 months', context: 'Your baby should be babbling with consonant sounds (ba-ba, da-da), showing stranger anxiety (which involves crying), protesting when wants are unmet, and expressing a range of emotions. An easy-going baby who does not cry much but expresses needs through fussing, reaching, or vocalizing is fine. A baby who seems passive, does not protest when toys are taken, shows flat affect (limited facial expressions), and does not seem to communicate needs is worth discussing with your pediatrician.' },
    { ageRange: '12-24 months', context: 'Toddlers should be expressive and communicative even if not verbally advanced. They should point to things they want, show frustration when they cannot do something, protest when told no, and express joy. A very quiet toddler who does not attempt to communicate, shows limited emotional range, and seems passive about their environment may benefit from a developmental evaluation. Some children with hearing loss are quieter because they are not receiving auditory input.' },
  ],
  whenNormal: ['Your baby has an easy temperament - cries less than average but is alert, engaged, and responsive','Your baby signals hunger with rooting and fussing rather than intense crying','Your baby is quiet but socially engaged - smiles, makes eye contact, coos, and babbles','Your child is an introvert who is content observing the world rather than being loud about it'],
  whenToMention: ['Your baby rarely cries and also seems unusually still, passive, or uninterested in surroundings','Your newborn does not wake for feeds or cry when hungry','Your baby does not babble or vocalize by 6 months','Your baby shows limited facial expressions and does not seem to react emotionally to much of anything'],
  whenToActNow: ['Your baby is suddenly much quieter and less responsive than usual - this could indicate illness','Your newborn is limp, very quiet, and feeding poorly - needs immediate medical evaluation','Your baby has stopped making sounds they previously made (regression)'],
  relatedMilestones: ['language-expressive','social-emotional-regulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-flat-affect-no-expression','baby-not-interested-in-people','early-signs-of-autism-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development: 1 to 12 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-12-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Baby by Two Months.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html' },
    { org: 'NIH', citation: 'Zwaigenbaum L, et al. Early Identification of Autism Spectrum Disorder: Recommendations for Practice. Pediatrics. 2015.', url: 'https://pubmed.ncbi.nlm.nih.gov/26430168/' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'foster-baby-prenatal-substance-exposure',
  title: 'Foster Baby with Prenatal Substance Exposure',
  category: 'medical',
  searchTerms: [
    'foster baby drug exposure',
    'prenatal substance exposure baby',
    'neonatal abstinence syndrome',
    'baby born drug exposed',
    'foster baby developmental concerns',
    'NAS baby care',
    'prenatal alcohol exposure foster baby',
    'fetal alcohol spectrum foster',
    'foster baby special needs',
    'drug exposed baby development',
    'prenatal opioid exposure infant',
  ],
  quickAnswer:
    'Babies who were prenatally exposed to substances (opioids, alcohol, stimulants, marijuana, or other drugs) may have a range of immediate and long-term needs. Neonatal abstinence syndrome (NAS) from opioid exposure requires medical management and can cause irritability, feeding difficulty, and tremors. Fetal alcohol spectrum disorders can affect development. However, many prenatally exposed children thrive with appropriate care, early intervention services, and a stable, nurturing environment. Foster parents play a crucial role in these children\'s outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with prenatal substance exposure may display neonatal abstinence syndrome (NAS) or neonatal opioid withdrawal syndrome (NOWS), which can include high-pitched crying, tremors, feeding difficulties, sleep problems, and seizures in severe cases. Many of these babies have already been treated in the NICU before foster placement. At home, soothing strategies include swaddling, reduced stimulation (quiet, dim environment), skin-to-skin contact, and frequent small feedings. These babies may be harder to console than typical newborns, which can be exhausting for caregivers. Seek support and respite care.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As acute withdrawal resolves, ongoing effects may include sensory sensitivities, feeding challenges, sleep difficulties, and irritability. Request an early intervention evaluation, as prenatally exposed babies may benefit from occupational therapy, physical therapy, or developmental support even before specific delays are identified. Not all prenatally exposed babies will have developmental delays -- many develop normally with responsive caregiving. Maintain regular pediatric visits and be open with your pediatrician about the baby\'s prenatal history (if known) so appropriate screening can be done.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Longer-term effects of prenatal substance exposure can include speech and language delays, motor delays, behavioral challenges (difficulty with self-regulation, attention), and learning differences. Fetal alcohol spectrum disorders (FASD) may become more apparent during the toddler years, with signs including poor growth, facial features, and cognitive or behavioral differences. Early intervention services, consistent routines, and a nurturing environment significantly improve outcomes. Foster parents should also attend to their own well-being, as caring for children with special needs can be demanding.',
    },
  ],
  whenNormal: [
    'Your foster baby was treated for NAS in the NICU, is now medically stable, and is feeding and growing.',
    'Your foster baby is more irritable or harder to soothe than you expected, but can eventually be calmed and is meeting milestones.',
    'Your foster baby is receiving early intervention services and making progress.',
  ],
  whenToMention: [
    'Your foster baby seems to have persistent feeding difficulties, excessive irritability, or sleep problems beyond what you can manage.',
    'You are concerned about developmental milestones and the baby has not yet been evaluated for early intervention.',
    'You need more information about the baby\'s prenatal history to guide medical care.',
  ],
  whenToActNow: [
    'Your foster baby has seizures, persistent vomiting, extreme irritability with inability to be consoled, or significant weight loss.',
    'You suspect your foster baby was exposed to substances not documented in their medical records and they are showing withdrawal symptoms.',
    'You are feeling overwhelmed and unable to safely care for your foster baby -- seek respite care and support.',
  ],
  relatedMilestones: [
    'feeding',
    'social-emotional',
    'gross-motor',
    'language-development',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['developmental-delay-early-intervention-importance', 'high-needs-baby', 'attachment-concerns'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Drug Withdrawal. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/2/e540/31683/Neonatal-Drug-Withdrawal',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fetal Alcohol Spectrum Disorders. CDC.',
      url: 'https://www.cdc.gov/ncbddd/fasd/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Drug Abuse. Substance Use While Pregnant and Breastfeeding. NIDA.',
      url: 'https://nida.nih.gov/publications/research-reports/substance-use-in-women/substance-use-while-pregnant-breastfeeding',
    },
  ],
};

import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-withdrawal-symptoms-nas',
  title: 'Neonatal Abstinence Syndrome (NAS)',
  category: 'medical',
  searchTerms: [
    'neonatal abstinence syndrome',
    'NAS baby',
    'newborn withdrawal symptoms',
    'baby drug withdrawal',
    'baby born addicted',
    'newborn opioid withdrawal',
    'baby shaking after birth',
    'newborn jittery irritable',
    'methadone baby withdrawal',
    'NOWS neonatal opioid withdrawal',
  ],
  quickAnswer:
    'Neonatal abstinence syndrome (NAS) occurs when a baby is exposed to certain substances, most commonly opioids, during pregnancy and experiences withdrawal symptoms after birth. Symptoms can include excessive crying, tremors, poor feeding, and sleep problems. NAS is a treatable condition, and with proper medical care, most babies recover well. Non-judgmental support and medical monitoring are essential.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'NAS symptoms can begin as early as a few hours after birth, though the timing depends on the substance involved. Opioid withdrawal symptoms typically appear within 48-72 hours of birth, while some substances can cause delayed onset. The hospital team will assess the baby using a standardized scoring tool (such as the Finnegan Neonatal Abstinence Scoring System or the Eat, Sleep, Console method) to evaluate the severity of withdrawal. Rooming-in with the mother and skin-to-skin contact are first-line treatments and can significantly reduce symptom severity.',
    },
    {
      ageRange: '2-7 days',
      context:
        'This is typically when NAS symptoms peak. Symptoms may include high-pitched or excessive crying, tremors or jitteriness, difficulty feeding, frequent yawning or sneezing, tight muscle tone, poor sleep, sweating, and in some cases loose stools or vomiting. The Eat, Sleep, Console approach focuses on keeping the baby comfortable through non-pharmacological methods such as swaddling, quiet environments, frequent small feedings, and parental presence. If symptoms are severe despite these measures, medication (typically morphine or methadone) may be used to ease withdrawal gradually.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'Babies with mild NAS may have symptom resolution within 1-2 weeks. Those requiring pharmacological treatment typically have a hospital stay of 2-4 weeks or longer as medication is slowly weaned. Breastfeeding is encouraged in most cases (if the mother is in a stable treatment program and not using illicit substances) because it provides comfort and small amounts of the substance that can ease withdrawal. Before discharge, the medical team ensures the baby is feeding well, gaining weight, and symptoms are controlled.',
    },
    {
      ageRange: '1-3 months',
      context:
        'After discharge, babies who had NAS may continue to be more irritable, have difficulty with sleep regulation, and be harder to soothe than other newborns. These issues typically improve gradually over the first few months. Regular pediatric follow-up is important to monitor growth, development, and feeding. Developmental screening is recommended because prenatal substance exposure can occasionally affect long-term development, though many children with a history of NAS develop normally with appropriate support.',
    },
  ],
  whenNormal: [
    'Your baby had mild NAS symptoms that were managed with non-pharmacological care and has been cleared for discharge',
    'Your baby completed a medication wean in the hospital and is now feeding and sleeping well',
    'Some mild irritability or difficulty with sleep regulation in the first few months after NAS, which is gradually improving',
    'Your baby is meeting developmental milestones and gaining weight appropriately',
  ],
  whenToMention: [
    'Your baby continues to be excessively irritable, has difficulty with feeding, or has poor weight gain after discharge',
    'You are concerned about your baby\'s development or ability to self-soothe',
    'You need support or resources for your own recovery while caring for your newborn',
  ],
  whenToActNow: [
    'Your baby has seizures, severe vomiting or diarrhea leading to dehydration, or is refusing all feeds, as these are signs of severe withdrawal that require emergency medical care',
    'Your baby is excessively limp, not waking to feed, or has difficulty breathing, as these could indicate a serious medical issue beyond typical NAS symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Opioid Withdrawal Syndrome. Pediatrics. 2020;146(5):e2020029074.',
      url: 'https://publications.aap.org/pediatrics/article/146/5/e2020029074/79857/Neonatal-Opioid-Withdrawal-Syndrome',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Drug Abuse. Neonatal Abstinence Syndrome (NAS).',
      url: 'https://nida.nih.gov/publications/research-reports/medications-to-treat-opioid-addiction/how-do-medications-to-treat-opioid-addiction-affect-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Neonatal Abstinence Syndrome (NAS).',
      url: 'https://www.marchofdimes.org/find-support/topics/planning-baby/neonatal-abstinence-syndrome-nas',
    },
  ],
};

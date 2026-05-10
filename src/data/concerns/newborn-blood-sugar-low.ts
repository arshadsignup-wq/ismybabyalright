import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-blood-sugar-low',
  title: 'Newborn Low Blood Sugar (Hypoglycemia)',
  category: 'medical',
  searchTerms: [
    'newborn low blood sugar',
    'neonatal hypoglycemia',
    'baby blood sugar low',
    'newborn glucose low',
    'baby jittery blood sugar',
    'large for gestational age blood sugar',
    'diabetic mother baby blood sugar',
    'newborn shaky low glucose',
    'baby not feeding well blood sugar',
  ],
  quickAnswer:
    'Neonatal hypoglycemia (low blood sugar) is common in the first hours and days of life, especially in babies who are large or small for gestational age, premature, born to mothers with diabetes, or stressed during delivery. Mild hypoglycemia often responds to frequent feeding. More significant or persistent hypoglycemia may require IV glucose treatment. Early and frequent feeding is the best prevention.',
  byAge: [
    {
      ageRange: '0-4 hours',
      context:
        'In the first few hours after birth, it is normal for blood sugar to drop as the baby transitions from receiving glucose through the placenta to producing and regulating its own blood sugar. At-risk babies (those born to mothers with gestational or pre-existing diabetes, large for gestational age, small for gestational age, premature, or those who had a stressful delivery) will have their blood sugar monitored with heel-stick glucose checks starting around 1-2 hours of age. Early and frequent breastfeeding or formula feeding helps stabilize blood sugar. Skin-to-skin contact also helps by reducing the baby\'s stress and energy expenditure.',
    },
    {
      ageRange: '4-24 hours',
      context:
        'Glucose levels should stabilize as feeding is established. The medical team will continue monitoring blood sugar at regular intervals for at-risk babies. Most guidelines use a threshold of 45-50 mg/dL for intervention after the first few hours. If blood sugar remains low despite adequate feeding, supplementation with expressed breast milk, donor milk, or formula may be given. If oral feeding does not raise the blood sugar sufficiently, an IV dextrose infusion will be started. Symptoms of significant hypoglycemia include jitteriness, tremors, lethargy, poor feeding, hypothermia, high-pitched cry, and in severe cases seizures.',
    },
    {
      ageRange: '1-3 days',
      context:
        'For most babies, blood sugar stabilizes within the first 24-48 hours as feeding is well established. Babies who required IV glucose will have it weaned gradually while monitoring that blood sugar remains stable on feeds alone. Persistent or recurrent hypoglycemia beyond 48 hours is less common and may indicate an underlying condition such as hyperinsulinism, hormonal deficiency, or an inborn error of metabolism. These conditions require further workup and specialist evaluation. Most at-risk babies who responded to early feeding do well and are discharged on a normal feeding schedule.',
    },
    {
      ageRange: '3 days - 4 weeks',
      context:
        'After discharge, babies who had transient neonatal hypoglycemia generally do not need ongoing blood sugar monitoring unless they had severe or persistent episodes. Ensure the baby feeds frequently (at least 8-12 times per day for breastfed babies). Signs to watch for include excessive sleepiness, difficulty waking for feeds, jitteriness, or poor feeding. If your baby was diagnosed with a persistent form of hypoglycemia such as hyperinsulinism, you will have a detailed management plan from your endocrinologist including monitoring schedules and emergency protocols.',
    },
  ],
  whenNormal: [
    'Your baby had a mildly low blood sugar check in the first hours that corrected with feeding and subsequent checks were normal',
    'Your baby is at risk for hypoglycemia but all glucose checks have been within normal range with frequent feeding',
    'Blood sugar monitoring has been completed, all values are stable, and the medical team has discontinued monitoring',
    'Your baby is feeding well (8-12 times per day), has good energy, and is producing adequate wet and dirty diapers',
  ],
  whenToMention: [
    'Your baby had neonatal hypoglycemia and you notice occasional jitteriness or tremors at home',
    'Your baby seems excessively sleepy or difficult to wake for feeds in the first few weeks',
    'You have diabetes and want guidance on monitoring your baby\'s feeding adequacy at home',
  ],
  whenToActNow: [
    'Your newborn is extremely jittery, limp, has a seizure, or is unresponsive, as severe hypoglycemia can cause brain injury if not treated immediately',
    'Your baby is refusing all feeds, is lethargic, has abnormal movements, or cannot be roused, as these may indicate dangerously low blood sugar or another serious medical condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Committee on Fetus and Newborn. Postnatal Glucose Homeostasis in Late-Preterm and Term Infants. Pediatrics. 2011;127(3):575-579.',
      url: 'https://publications.aap.org/pediatrics/article/127/3/575/30110/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Neonatal Hypoglycemia. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007306.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Low Blood Sugar in Newborns. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-and-pregnancy/art-20044581',
    },
  ],
};

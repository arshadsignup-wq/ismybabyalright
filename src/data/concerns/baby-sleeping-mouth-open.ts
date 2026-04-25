import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleeping-mouth-open',
  title: 'My Baby Sleeps with Mouth Open',
  category: 'sleep',
  searchTerms: [
    'baby sleeping with mouth open',
    'baby sleeps with mouth open',
    'why does my baby sleep with mouth open',
    'baby mouth breathing during sleep',
    'is it bad for baby to sleep with mouth open',
    'baby always has mouth open when sleeping',
    'baby mouth breathing at night',
    'baby sleeping with mouth open snoring',
    'should baby breathe through nose when sleeping',
    'baby mouth open during sleep normal',
  ],
  quickAnswer:
    'Occasional mouth breathing during sleep is common in babies, especially when congested from a cold or teething. However, habitual mouth breathing can indicate nasal obstruction or enlarged tonsils/adenoids and may affect sleep quality and development. If your baby consistently sleeps with their mouth open, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are typically obligate nose breathers, meaning they strongly prefer breathing through their nose. If your young baby is breathing through their mouth, it often indicates nasal congestion. Common causes include residual amniotic fluid, dry air, or normal newborn congestion. Using a cool-mist humidifier and saline drops can help. Persistent mouth breathing in a newborn should be evaluated to rule out structural issues.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies this age may mouth breathe when congested from a cold or during teething. Brief periods of mouth breathing during illness are normal. However, if your baby consistently breathes through their mouth even when well, or if you notice snoring, noisy breathing, or pauses, it could indicate enlarged adenoids or other obstruction. Your baby should be able to nurse or bottle-feed without excessive gasping or struggling.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Habitual mouth breathing at this age can interfere with feeding, sleep quality, and even facial development over time. Babies who mouth breathe may be more prone to ear infections, have difficulty gaining weight, or seem excessively tired. Common causes include allergies, chronic congestion, enlarged tonsils/adenoids, or structural issues like a deviated septum. If your baby is a persistent mouth breather, an evaluation by your pediatrician is warranted.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who habitually sleep with their mouth open may snore, have restless sleep, or show signs of sleep-disordered breathing. They might wake frequently, sweat excessively, or sleep in unusual positions (hyperextended neck to keep airway open). Chronic mouth breathing can lead to dental issues, facial changes, and developmental concerns. Your pediatrician may refer you to an ENT specialist for evaluation of tonsils, adenoids, or structural issues.',
    },
  ],
  whenNormal: [
    'Your baby occasionally breathes through their mouth when congested from a cold or teething',
    'Mouth breathing is temporary and resolves when the congestion clears',
    'Your baby can easily breathe through their nose when awake and calm',
    'Your baby feeds well, sleeps soundly, and is growing appropriately',
    'There is no snoring, gasping, or pauses in breathing',
  ],
  whenToMention: [
    'Your baby consistently sleeps with their mouth open, even when not visibly congested',
    'You notice snoring, noisy breathing, or pauses in breathing during sleep',
    'Your baby seems excessively tired during the day, is irritable, or has difficulty feeding',
    'Your baby has frequent ear infections, chronic congestion, or allergies',
    'You\'re concerned about your baby\'s breathing pattern or sleep quality',
  ],
  whenToActNow: [
    'Your baby has significant difficulty breathing, is gasping, or has retractions (pulling in of the chest)',
    'Your baby\'s lips or skin have a blue or grey tinge',
    'Your baby stops breathing during sleep for more than 10-20 seconds',
    'Your baby is unresponsive, extremely lethargic, or very difficult to wake',
  ],
  relatedMilestones: [
    'nasal-breathing-development',
    'sleep-quality',
    'feeding-coordination',
    'respiratory-health',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Disordered Breathing in Children. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30672/Clinical-Practice-Guideline-Diagnosis-and',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is Your Child\'s Snoring a Sign of a Problem? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/sleep/Pages/Snoring-Obstructive-Sleep-Apnea.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Health. CDC.gov.',
      url: 'https://www.cdc.gov/parents/infants/index.html',
    },
  ],
};

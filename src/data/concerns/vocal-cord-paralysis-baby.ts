import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vocal-cord-paralysis-baby',
  title: 'Vocal Cord Paralysis in Babies',
  category: 'medical',
  searchTerms: [
    'vocal cord paralysis baby',
    'baby weak cry',
    'baby hoarse cry from birth',
    'vocal cord paresis infant',
    'unilateral vocal cord paralysis baby',
    'bilateral vocal cord paralysis newborn',
    'baby stridor weak voice',
    'vocal fold paralysis infant',
    'baby breathy cry',
    'newborn vocal cord injury',
  ],
  quickAnswer:
    'Vocal cord paralysis is the second most common congenital abnormality of the larynx in infants. It can affect one vocal cord (unilateral) or both (bilateral). Unilateral paralysis typically causes a weak, breathy cry and mild feeding difficulties but usually resolves on its own. Bilateral paralysis is more serious, causing stridor and potentially significant breathing difficulty that may require medical intervention. Causes include birth trauma, cardiac surgery, neurological conditions, or may be idiopathic (no known cause).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Vocal cord paralysis is often noticed at birth or within the first few weeks of life. A baby with unilateral paralysis may have a weak, breathy, or hoarse cry and may cough or choke during feedings. A baby with bilateral paralysis will typically have a near-normal cry but noisy breathing (stridor) that worsens with activity or agitation. Your pediatrician may suspect vocal cord paralysis based on these symptoms and will refer you to a pediatric ENT specialist for flexible laryngoscopy, a quick in-office procedure to visualize the vocal cords.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has unilateral vocal cord paralysis, feeding adjustments such as thickening feeds, pacing feedings, and positioning changes can help reduce aspiration risk. A swallow study may be recommended to check whether your baby is aspirating. Many cases of unilateral paralysis begin to improve during this period as the opposite vocal cord compensates. Bilateral paralysis requires closer monitoring, and some babies may need supplemental oxygen or airway support.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Spontaneous recovery occurs in about 50-70% of unilateral cases and up to 50% of bilateral cases, often within the first 6-12 months of life. If your baby is feeding well, growing, and breathing comfortably, continued observation is the standard approach. For babies with bilateral paralysis who are having significant breathing difficulties, a tracheostomy may be needed to secure the airway while waiting for recovery or considering surgical options.',
    },
    {
      ageRange: '12 months+',
      context:
        'If vocal cord paralysis has not resolved by 12-18 months, it is less likely to recover spontaneously, and surgical options may be discussed. For unilateral paralysis, procedures such as injection laryngoplasty can improve voice quality and reduce aspiration. For bilateral paralysis, surgical options to widen the airway may be considered when the child is older. Speech therapy may be helpful for children with persistent voice changes. Long-term outcomes are generally good, especially for unilateral cases.',
    },
  ],
  whenNormal: [
    'Baby has a soft, breathy, or slightly hoarse cry but is feeding well and gaining weight',
    'Mild noisy breathing that improves when baby is calm and at rest',
    'ENT specialist has confirmed unilateral paralysis and recommended watchful waiting',
    'Baby is meeting developmental milestones and is otherwise healthy',
  ],
  whenToMention: [
    'Baby is frequently coughing, gagging, or choking during feedings',
    'Baby seems to tire quickly during feeds or is not gaining weight as expected',
    'The hoarse or weak cry has not improved by 6-9 months of age',
  ],
  whenToActNow: [
    'Baby has significant stridor with visible chest retractions, nasal flaring, or difficulty breathing -- call 911',
    'Baby turns blue or very pale during a breathing episode or while feeding',
    'Baby has recurrent pneumonia or persistent wet-sounding breathing suggesting aspiration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['laryngomalacia-floppy-airway', 'hoarse-voice-baby', 'baby-stridor-noisy-breathing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Noisy Breathing in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Noisy-Breathing-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Vocal Fold Paralysis. NIDCD, NIH.',
      url: 'https://www.nidcd.nih.gov/health/vocal-fold-paralysis',
    },
    {
      org: 'AAO-HNS',
      citation:
        'American Academy of Otolaryngology-Head and Neck Surgery. Vocal Cord Paralysis.',
      url: 'https://www.enthealth.org/conditions/vocal-cord-paralysis/',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wolff-parkinson-white-baby',
  title: 'Wolff-Parkinson-White (WPW) Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'wolff parkinson white baby',
    'wpw syndrome infant',
    'baby extra heart pathway',
    'pre-excitation ecg baby',
    'wpw and svt baby',
    'baby rapid heartbeat episodes',
    'delta wave ecg baby',
    'wolff parkinson white newborn',
    'accessory pathway heart baby',
    'wpw tachycardia infant',
  ],
  quickAnswer:
    'Wolff-Parkinson-White (WPW) syndrome is a heart condition where an extra electrical pathway exists between the upper and lower chambers of the heart. This extra pathway can cause episodes of supraventricular tachycardia (SVT), where the heart beats very rapidly. In infants, WPW is the most common identifiable cause of SVT. It is often detected on an ECG showing a characteristic "delta wave" pattern. Many infants with WPW outgrow their episodes by 1 year of age, but ongoing monitoring by a pediatric cardiologist is important.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'WPW may be detected prenatally when fetal tachycardia is identified, or in the newborn period when an ECG is performed for a fast heart rate. Newborns with WPW-related SVT may present with irritability, poor feeding, pallor, or rapid breathing. The heart rate during an SVT episode can exceed 220 bpm. Episodes may be brief or sustained. If SVT is prolonged and unrecognized, it can lead to heart failure in infants. Medication is typically started to prevent recurrent episodes.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants in this age range may continue to have SVT episodes related to their WPW. Parents may notice sudden pallor, irritability, or sweating. Some infants are on daily preventive medications such as beta-blockers or flecainide. Many infants with WPW see their episodes decrease significantly by the time they approach their first birthday. The accessory pathway may become dormant as the heart grows, though it can reactivate later in childhood.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Many children who had WPW-related SVT as infants experience a quiescent period during toddlerhood. Preventive medications may be tapered under cardiologist guidance. However, some children continue to have breakthrough episodes. Toddlers may show signs like sudden stopping of play, clutching their chest, or appearing frightened. Regular follow-up with a pediatric cardiologist is important to monitor the ECG pattern and decide on ongoing management.',
    },
    {
      ageRange: '3+ years',
      context:
        'WPW can recur in older children, particularly during exercise or emotional excitement. Children who can describe symptoms may report a racing heart, dizziness, or chest fluttering. For children with recurrent symptomatic WPW, catheter ablation of the accessory pathway is a highly effective procedure, typically considered after age 5-7 or when the child is large enough for the procedure. Ablation has a success rate of over 95% and can be curative.',
    },
  ],
  whenNormal: [
    'Your baby\'s heart rate increases with crying, feeding, or activity and returns to normal quickly',
    'Your child was found to have WPW pattern on ECG but has never had symptoms (asymptomatic WPW)',
    'Your baby had WPW-related SVT as a newborn but has had no episodes for several months while on preventive medication',
    'An ECG shows the WPW pattern has resolved, suggesting the accessory pathway is no longer conducting',
  ],
  whenToMention: [
    'Your baby has occasional brief episodes of appearing pale or fussy that resolve on their own within a few minutes',
    'Your child with known WPW has not had a cardiology follow-up in over 6 months',
    'Your child seems to tire more easily than peers or avoids physical activity',
  ],
  whenToActNow: [
    'Your baby has a sustained episode of very rapid heartbeat with pallor, lethargy, poor feeding, or rapid breathing -- go to the emergency room immediately',
    'Your child loses consciousness or faints during physical activity or excitement -- call 911',
    'An SVT episode in your child does not resolve with vagal maneuvers (such as applying ice to the face for an infant) within 10-15 minutes -- seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'supraventricular-tachycardia-svt-baby',
    'congenital-heart-defect-signs',
    'baby-heart-murmur',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Wolff-Parkinson-White Syndrome (WPW). AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/wolff-parkinson-white-syndrome-wpw',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Arrhythmias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Irregular-Heartbeat-Arrhythmia.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Wolff-Parkinson-White (WPW) Syndrome: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/wolff-parkinson-white-syndrome/symptoms-causes/syc-20354626',
    },
  ],
};

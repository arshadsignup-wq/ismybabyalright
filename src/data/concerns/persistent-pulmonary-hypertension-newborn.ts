import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'persistent-pulmonary-hypertension-newborn',
  title: 'Persistent Pulmonary Hypertension of the Newborn (PPHN)',
  category: 'medical',
  searchTerms: [
    'persistent pulmonary hypertension newborn',
    'PPHN baby',
    'newborn low oxygen',
    'newborn blue skin breathing',
    'newborn respiratory distress cyanosis',
    'baby lungs not working after birth',
    'PPHN treatment nitric oxide',
    'newborn ECMO',
    'meconium aspiration pulmonary hypertension',
    'newborn pulmonary hypertension causes',
  ],
  quickAnswer:
    'Persistent pulmonary hypertension of the newborn (PPHN) occurs when the blood vessels in the lungs fail to relax after birth, keeping blood pressure in the lungs abnormally high and preventing adequate oxygen exchange. This causes severe respiratory distress and cyanosis (blue skin) typically within the first 24 hours of life. PPHN is a medical emergency treated in the NICU with inhaled nitric oxide, high-frequency ventilation, and in severe cases, ECMO (extracorporeal membrane oxygenation).',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'PPHN most commonly presents within the first hours to the first day of life. The newborn may appear blue (cyanotic), breathe rapidly, grunt, flare their nostrils, or have chest retractions. Oxygen saturation levels remain low despite supplemental oxygen. Risk factors include meconium aspiration, pneumonia, sepsis, congenital diaphragmatic hernia, and maternal use of certain medications (such as NSAIDs or SSRIs in late pregnancy). The diagnosis is confirmed by echocardiography showing elevated pulmonary pressures and right-to-left shunting of blood.',
    },
    {
      ageRange: '1-7 days',
      context:
        'Babies with PPHN require intensive care in the NICU. Treatment focuses on lowering pulmonary vascular resistance and improving oxygenation. Inhaled nitric oxide is the primary targeted therapy and works by selectively dilating the lung blood vessels. High-frequency oscillatory ventilation may be used to optimize lung expansion. If the baby does not respond to these treatments, ECMO (a heart-lung bypass machine) may be needed as a rescue therapy. Most babies with PPHN who survive the acute phase recover well.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'As PPHN resolves, babies are gradually weaned from respiratory support, nitric oxide, and supplemental oxygen. The weaning process must be done carefully, as too-rapid reduction can cause rebound pulmonary hypertension. Some infants may need supplemental oxygen at home for a period after discharge. Follow-up echocardiography is performed to confirm resolution of elevated pulmonary pressures. Parents should be counseled about the importance of follow-up appointments to monitor respiratory and developmental progress.',
    },
    {
      ageRange: '1 month+',
      context:
        'Most babies who recover from PPHN do well long-term, though some may have ongoing respiratory issues or developmental concerns depending on the severity and duration of their illness. Babies who required ECMO or had prolonged periods of low oxygen should have developmental follow-up. Hearing screening should be repeated, as some PPHN treatments and the condition itself can affect hearing. If your baby had PPHN, keeping all follow-up appointments is important for monitoring their continued recovery.',
    },
  ],
  whenNormal: [
    'Your newborn had a brief period of blue hands and feet (acrocyanosis) after birth that resolved quickly, which is a normal finding in healthy newborns',
    'Your baby had mild respiratory transition after birth that resolved within a few hours without requiring significant intervention',
    'Your baby\'s oxygen levels are consistently normal on pulse oximetry screening before hospital discharge',
  ],
  whenToMention: [
    'Your baby who recovered from PPHN seems to breathe faster than expected or has intermittent episodes of looking dusky during feeds or crying',
    'Your baby had PPHN and you are concerned about their developmental progress at follow-up visits',
    'You are pregnant and taking medications that have been associated with PPHN risk and want to discuss this with your obstetrician',
  ],
  whenToActNow: [
    'Your newborn appears blue around the lips, tongue, or trunk and is breathing rapidly, grunting, or having difficulty breathing, as this could indicate PPHN or another critical condition requiring emergency evaluation',
    'Your baby recently discharged after PPHN treatment develops worsening breathing difficulty, new cyanosis, or poor feeding, which could indicate rebound pulmonary hypertension',
    'Your newborn\'s oxygen saturation is consistently low on pulse oximetry, which is a sign of a potentially life-threatening condition requiring immediate medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['cyanosis-baby', 'baby-breathing-fast'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Steinhorn RH. Neonatal Pulmonary Hypertension. Pediatric Critical Care Medicine, 2010. Referenced in AAP NeoReviews.',
      url: 'https://publications.aap.org/neoreviews/article/11/12/e693/80023/Persistent-Pulmonary-Hypertension-of-the-Newborn',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Persistent Pulmonary Hypertension of the Newborn. NIH, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/pulmonary-hypertension',
    },
    {
      org: 'ATS',
      citation:
        'Abman SH, et al. Pediatric Pulmonary Hypertension: Guidelines from the American Heart Association and American Thoracic Society. Circulation, 2015.',
      url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.201501-0088ST',
    },
  ],
};

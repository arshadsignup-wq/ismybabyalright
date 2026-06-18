import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tracheoesophageal-fistula',
  title: 'My Baby Was Born with a Tracheoesophageal Fistula (TEF/EA)',
  category: 'medical',
  searchTerms: [
    'tracheoesophageal fistula TEF',
    'esophageal atresia baby',
    'TEF EA baby',
    'baby can\'t swallow saliva',
    'esophageal atresia repair surgery',
    'TEF stricture baby',
    'TEF VACTERL',
    'esophageal atresia long gap',
    'TEF coughing choking feeds',
    'tracheomalacia after TEF repair',
  ],
  quickAnswer:
    'Tracheoesophageal fistula (TEF) and esophageal atresia (EA) are birth defects affecting the esophagus (the tube connecting the mouth to the stomach) and/or the trachea (windpipe). In EA, the esophagus does not connect to the stomach. In TEF, there is an abnormal connection between the esophagus and trachea. They often occur together and affect about 1 in 3,500 births. Surgical repair in the newborn period is the standard treatment, and most babies do well. Long-term challenges may include feeding difficulties, reflux, strictures, and tracheomalacia, but with appropriate follow-up, the vast majority of children thrive.',
  byAge: [
    {
      ageRange: '0-1 week (diagnosis and surgery)',
      context:
        'EA/TEF is usually discovered within hours of birth when the baby cannot swallow saliva (excessive drooling) and a feeding tube cannot be passed into the stomach. Surgery to repair the esophagus and close the fistula is performed as soon as the baby is stable. In "long gap" EA (where the esophageal ends are far apart), a staged approach may be needed. Your surgeon will explain the specific anatomy and surgical plan for your baby. About 50% of babies with EA/TEF have additional anomalies (often VACTERL-associated).',
    },
    {
      ageRange: '1 week - 3 months (post-surgical recovery)',
      context:
        'After repair, feeding is introduced gradually. Many babies experience reflux and swallowing difficulties. Esophageal strictures (narrowing at the repair site) are common and may need dilation procedures. Signs of a stricture include difficulty swallowing, choking on feeds, and poor weight gain. Tracheomalacia (floppy trachea) causes a characteristic barking cough and noisy breathing, particularly during illness — it typically improves as the child grows.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Feeding continues to be the primary challenge. Many babies with repaired EA/TEF have oral aversion, texture sensitivity, and difficulty transitioning to solids. Working with a feeding therapist experienced with EA/TEF is invaluable. Reflux management (medication and positioning) is important. Respiratory infections may be more problematic due to tracheomalacia and risk of aspiration. Your surgical team will monitor for strictures with swallow studies as needed.',
    },
    {
      ageRange: '1 year+',
      context:
        'Many feeding challenges improve significantly by age 2-3 as the esophagus grows and the child develops stronger swallowing coordination. Tracheomalacia typically improves by age 2-3. Long-term, adults with repaired EA/TEF may have a slightly increased risk of esophageal issues (Barrett\'s esophagus), so surveillance is recommended. The EA/TEF family community is active and supportive — organizations like EATEF and VACTERL Support Group provide valuable resources.',
    },
  ],
  whenNormal: [
    'Your baby had EA/TEF repair and is feeding, even if slowly and with some difficulty — progress is progress',
    'Your baby has occasional noisy breathing (tracheomalacia) that does not cause distress or feeding problems',
    'Your child is growing, even if on the smaller side, and strictures are managed with dilations',
  ],
  whenToMention: [
    'Your baby is choking or coughing with feeds more frequently',
    'Your baby is having increasing difficulty swallowing or seems to get food "stuck"',
    'Your baby has recurrent pneumonia or respiratory infections',
    'Your baby is not gaining weight despite adequate feeding efforts',
  ],
  whenToActNow: [
    'Your baby is choking and cannot clear their airway — perform infant first aid for choking and call 911',
    'Your baby has a food impaction (food stuck in the esophagus and cannot swallow) — go to the emergency room',
    'Your baby is in respiratory distress — turning blue, severe retractions, or grunting — call 911',
    'Your baby has bile-stained (green) vomiting — this may indicate a bowel obstruction and needs emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vacterl-association',
    'congenital-diaphragmatic-hernia',
    'silent-reflux-vs-colic',
  ],
  sources: [
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. Esophageal Atresia and Tracheoesophageal Fistula.',
      url: 'https://www.chop.edu/conditions-diseases/esophageal-atresia',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Esophageal Atresia and Tracheoesophageal Fistula. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459277/',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Esophageal Atresia/Tracheoesophageal Fistula.',
      url: 'https://rarediseases.org/rare-diseases/esophageal-atresia-tracheoesophageal-fistula/',
    },
  ],
};

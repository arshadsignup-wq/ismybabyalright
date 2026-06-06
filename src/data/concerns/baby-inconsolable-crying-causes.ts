import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-inconsolable-crying-causes', title: 'Reasons for Inconsolable Crying', category: 'behavior',
  searchTerms: ['baby inconsolable crying','baby won\'t stop crying','baby screaming inconsolably','why is my baby crying nonstop','inconsolable crying baby causes','baby uncontrollable crying','baby hysteria crying','baby won\'t calm down','baby screaming can\'t soothe','baby crying for hours'],
  quickAnswer: 'When a baby cries inconsolably, the most common causes are hunger, overtiredness, gas/digestive discomfort, overstimulation, and needing a diaper change. Less common but important causes include hair tourniquet, illness, ear infection, or intussusception. If your baby cannot be consoled after addressing basic needs and the crying is unusual for them, trust your instincts and call your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'The most common causes are hunger (even if recently fed), gas or reflux, overtiredness, overstimulation, and needing to be held. Check for a hair tourniquet (hair wrapped tightly around a finger or toe). Colic peaks at 6 weeks. The Period of PURPLE Crying describes normal crying peaks in the first months.' },
    { ageRange: '3-6 months', context: 'As colic resolves, inconsolable crying episodes should decrease. New causes include teething, ear infections, vaccination reactions, and developmental frustration. Check for obvious discomfort sources: tight clothing, scratchy tags, diaper rash.' },
    { ageRange: '6-12 months', context: 'Teething pain, illness, separation anxiety, and frustration are common causes. If inconsolable crying is accompanied by pulling at ears, fever, or changes in feeding, an illness workup may be needed.' },
    { ageRange: '12-24 months', context: 'Toddlers can become inconsolable during tantrums, which is a normal part of development. However, if crying seems pain-related rather than emotional, investigate potential causes like constipation, ear infection, or injury.' },
  ],
  whenNormal: ['Brief periods of inconsolable crying that resolve within 20-30 minutes','Crying that responds eventually to comfort measures','Evening fussiness in a young baby (witching hour)','Crying associated with an obvious cause like hunger or overtiredness'],
  whenToMention: ['Inconsolable crying episodes are frequent and lasting longer than 30-45 minutes','Crying pattern has changed significantly from your baby\'s norm','You notice other symptoms like pulling at ears, changes in feeding, or lethargy between crying episodes'],
  whenToActNow: ['Baby has inconsolable crying with fever, vomiting, bloody stools, or abdominal distension','Baby seems to be in severe pain, is limp or pale, or has a weak or high-pitched cry','Baby has a bulging fontanelle, rash that does not blanch, or difficulty breathing'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responding to Your Baby\'s Cries. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx' },
    { org: 'NIH', citation: 'Barr RG. The Normal Crying Curve. Clin Perinatol. 2017;44(3):697-713.', url: 'https://pubmed.ncbi.nlm.nih.gov/28802347/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to Call the Pediatrician. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['colic','baby-excessive-crying-evening','baby-fussy-period-peak','baby-crying-when-waking-up'],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-breathing-patterns-normal',
  title: 'Normal Baby Breathing Patterns',
  category: 'medical',
  searchTerms: [
    'normal baby breathing patterns',
    'baby breathing fast then slow',
    'newborn periodic breathing',
    'baby breathing irregularly',
    'baby breathing rate normal',
    'newborn breathing pauses',
    'baby breathing patterns while sleeping',
    'is my baby breathing normally',
  ],
  quickAnswer:
    'Newborns and young babies have breathing patterns that can seem alarming to parents but are perfectly normal. Periodic breathing -- rapid breaths followed by brief pauses of up to 10 seconds -- is common, especially during sleep. Normal newborn breathing rates range from 30-60 breaths per minute and are naturally irregular. Babies are obligate nose breathers and may sound congested without being sick. True warning signs include persistent fast breathing, pauses longer than 20 seconds, chest retractions, grunting, or color changes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have an immature respiratory center in the brain, which causes periodic breathing: cycles of faster breathing followed by brief pauses of 5-10 seconds before breathing resumes. This is normal and not the same as apnea. Babies also sneeze frequently to clear their nasal passages, hiccup often, and may make small grunting or squeaking sounds. Normal breathing rate is 30-60 breaths per minute when calm.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, breathing patterns become more regular as the respiratory center matures. Periodic breathing episodes decrease. Normal breathing rate slows slightly to 25-45 breaths per minute. Your baby may still sound congested due to small nasal passages and normal mucus production. Saline drops and gentle suctioning can help if nasal congestion interferes with feeding.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Breathing patterns are much more regular by this age. Normal resting breathing rate is 20-40 breaths per minute. Periodic breathing should have resolved. If your baby still has irregular breathing patterns, pauses in breathing, or noisy breathing at this age, mention it to your pediatrician as further evaluation may be warranted to rule out conditions like laryngomalacia or sleep apnea.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers breathe at 20-30 breaths per minute at rest. Breathing should be regular and quiet during sleep. Persistent snoring, mouth breathing, or observed pauses in breathing during sleep may indicate conditions like enlarged adenoids or obstructive sleep apnea and should be discussed with your pediatrician. During respiratory illnesses, monitor breathing rate and work of breathing closely.',
    },
  ],
  whenNormal: [
    'Newborn has brief 5-10 second pauses between breathing cycles during sleep (periodic breathing)',
    'Baby breathes faster for a few seconds then slower, in a regular cycle',
    'Baby sounds congested or snuffly but is feeding well and has no fever',
    'Baby sneezes, hiccups, or makes occasional squeaky sounds during normal breathing',
  ],
  whenToMention: [
    'Baby consistently breathes faster than 60 breaths per minute when calm and at rest',
    'Baby has persistent noisy breathing that does not change with position or nasal suctioning',
    'Baby snores regularly during sleep or always breathes through the mouth',
  ],
  whenToActNow: [
    'Baby has a breathing pause longer than 20 seconds or turns blue/pale during a pause',
    'Baby has persistent grunting, chest retractions, or nasal flaring with each breath -- seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Breathing: What Is Normal? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Breathing-Patterns-and-Control.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Periodic Breathing in Infants. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/003065.htm',
    },
  ],
};

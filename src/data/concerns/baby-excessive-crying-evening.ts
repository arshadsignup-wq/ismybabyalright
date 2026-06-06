import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-excessive-crying-evening', title: 'The Witching Hour: Evening Fussiness', category: 'behavior',
  searchTerms: ['baby witching hour','baby fussy evening','baby crying every evening','evening colic baby','baby inconsolable evening','witching hour baby','baby fussy 5pm','baby cries at night','baby evening fussiness','late afternoon baby crying'],
  quickAnswer: 'The "witching hour" is a period of increased fussiness and crying that commonly occurs in the late afternoon or evening, typically between 5-11 PM. It is most common in newborns and young babies (2-12 weeks) and usually resolves by 3-4 months. It is thought to be related to overstimulation, fatigue, and immature nervous system regulation.',
  byAge: [
    { ageRange: '0-6 weeks', context: 'Evening fussiness often starts around 2-3 weeks and intensifies through week 6. Your baby has been processing stimulation all day and their immature nervous system becomes overwhelmed by evening. Skin-to-skin contact, gentle motion, white noise, a dim quiet environment, and feeding on demand all help.' },
    { ageRange: '6-12 weeks', context: 'This is typically the peak of the witching hour. Crying may be intense and seem inconsolable. Try the 5 S\'s: swaddling, side-lying (in your arms), shushing, swinging, and sucking. Wearing your baby in a carrier can help. Take turns with a partner. This phase is temporary.' },
    { ageRange: '3-4 months', context: 'Evening fussiness usually decreases significantly by 12-16 weeks as your baby\'s nervous system matures and they develop better self-regulation. If evening crying continues to be severe past 4 months, discuss with your pediatrician.' },
    { ageRange: '4-12 months', context: 'If evening fussiness returns or persists, it may be related to overtiredness (check the nap schedule and bedtime), hunger, teething, or a need for earlier bedtime. Adjust the evening routine to include a calming wind-down period.' },
  ],
  whenNormal: ['Evening fussiness in a baby aged 2-12 weeks that follows a daily pattern','Baby is otherwise feeding well, gaining weight, and content at other times of day','Fussiness improves with holding, motion, or feeding','The pattern gradually improves and resolves by 3-4 months'],
  whenToMention: ['Crying is extreme and lasts more than 3 hours per day, 3 days per week (meets colic criteria)','You are feeling overwhelmed, frustrated, or having scary thoughts about your baby','Evening crying persists past 4-5 months without improvement'],
  whenToActNow: ['Baby is inconsolable with a fever, vomiting, bloody stools, or seems in pain','You feel you might lose control or harm your baby - put baby in a safe place and step away for a few minutes, then call for help'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coping with Colic. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx' },
    { org: 'NIH', citation: 'Wolke D et al. Systematic review and meta-analysis: fussing and crying durations in infancy. J Pediatr. 2017;185:55-61.', url: 'https://pubmed.ncbi.nlm.nih.gov/28385295/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Understanding Your Baby\'s Cries.', url: 'https://www.zerotothree.org/resource/coping-with-crying/' },
  ],
  relatedConcernSlugs: ['colic','colic-vs-gas','baby-inconsolable-crying-causes','baby-fussy-period-peak'],
};

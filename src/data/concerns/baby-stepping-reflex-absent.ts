import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-stepping-reflex-absent',
  title: 'Baby\'s Stepping Reflex Is Absent',
  category: 'physical',
  searchTerms: [
    'baby stepping reflex absent',
    'baby no stepping reflex',
    'newborn walking reflex missing',
    'baby won\'t step when held upright',
    'stepping reflex not present',
    'automatic walking reflex absent',
    'newborn stepping movement absent',
    'baby reflex evaluation',
    'primitive stepping reflex',
    'baby leg movement reflex',
  ],
  quickAnswer:
    'The stepping (or walking) reflex is a primitive reflex present at birth where a newborn makes stepping motions when held upright with feet touching a flat surface. This reflex normally disappears by about 2 months of age. An absent stepping reflex at birth may indicate prematurity, neurological concerns, or breech positioning effects. However, this reflex is variable and can be difficult to elicit in some healthy newborns. Your pediatrician evaluates reflexes as part of the newborn exam.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'The stepping reflex is normally present in full-term newborns and is tested by holding the baby upright with feet touching a surface - the baby should make alternating stepping motions. This reflex can be variable in strength and is sometimes difficult to elicit in sleepy or recently fed babies. Premature babies may have a weaker stepping reflex. The reflex is one of many primitive reflexes assessed during newborn examinations. An isolated absent stepping reflex, if all other reflexes and neurological exams are normal, may not be clinically significant.',
    },
    {
      ageRange: '2-4 months',
      context:
        'The stepping reflex naturally disappears around 2 months of age as the baby\'s legs become heavier relative to their muscle strength and as the brain develops more voluntary movement control. The absence of this reflex after 2 months is completely normal and expected. It is not related to when your baby will eventually learn to walk. The stepping reflex reappears later as a voluntary behavior when babies begin pulling to stand and cruising, typically around 8-12 months.',
    },
    {
      ageRange: '4-12 months',
      context:
        'The stepping reflex should be gone by this age. Your baby is now developing voluntary leg movements: kicking, pushing off surfaces, and eventually pulling to stand. The absence of the primitive stepping reflex at this age is normal. If your baby is not bearing weight on their legs when held upright by 6-8 months, or not developing other gross motor skills on track, discuss this with your pediatrician as a separate concern from the stepping reflex.',
    },
  ],
  whenNormal: [
    'Your newborn has a variable stepping reflex - sometimes present and sometimes hard to elicit.',
    'The stepping reflex has disappeared by 2-3 months of age.',
    'Your premature baby has a weaker stepping reflex that was present at birth.',
  ],
  whenToMention: [
    'Your full-term newborn has no stepping reflex along with other weak or absent reflexes.',
    'Your baby has asymmetric stepping - one leg steps but the other does not.',
    'Your baby has an absent stepping reflex combined with very stiff or very floppy legs.',
  ],
  whenToActNow: [
    'Multiple reflexes are absent in your newborn along with poor muscle tone, difficulty feeding, or lethargy.',
    'Your baby has no movement in one or both legs at any age.',
    'Your newborn has absent reflexes with seizures or extreme irritability.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-primitive-reflexes-not-integrating', 'baby-rooting-reflex-absent', 'not-standing', 'baby-not-kicking-legs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Infant Reflexes. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003292.htm',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};

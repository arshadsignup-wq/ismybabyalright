import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaginal-discharge-newborn',
  title: 'My Newborn Has Vaginal Discharge',
  category: 'medical',
  searchTerms: [
    'newborn vaginal discharge',
    'baby girl discharge',
    'newborn vaginal bleeding',
    'baby girl white discharge',
    'newborn pseudo menstruation',
    'baby girl bloody discharge',
    'newborn vaginal discharge normal',
    'baby girl discharge diaper',
    'maternal estrogen baby',
    'newborn genital discharge',
  ],
  quickAnswer:
    'Vaginal discharge in newborn baby girls is very common and usually completely normal. It\'s caused by maternal hormones passed to your baby before birth. You may see white, milky discharge or even a small amount of blood (like a mini period) in the first few weeks. This is called "pseudo-menstruation" and resolves on its own as hormones clear your baby\'s system.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'White or milky vaginal discharge in the first two weeks is extremely common and normal. Some baby girls also have a small amount of bloody or pink discharge around days 3-7 of life - this is pseudo-menstruation caused by withdrawal of maternal estrogen. It\'s completely harmless and will stop on its own. Simply wipe gently during diaper changes from front to back. No special care is needed.',
    },
    {
      ageRange: '2 weeks - 2 months',
      context:
        'By this age, hormonal discharge should be decreasing. A small amount of clear or white discharge can still be normal as your baby\'s body adjusts. However, if discharge is yellow, green, foul-smelling, or accompanied by redness and swelling, this could indicate an infection and should be evaluated by your pediatrician.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Vaginal discharge at this age is less common. Small amounts of clear or white mucus can occasionally be normal, but persistent discharge warrants evaluation. Infections are rare but possible. Contact your pediatrician if you notice discharge with unusual color, odor, or if the diaper area is very red or irritated.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Vaginal discharge in older babies is uncommon and should be evaluated. Possible causes include irritation from soap or bubble bath, diaper rash that has spread, or rarely infection. Your pediatrician will examine your baby to determine the cause. Avoid using harsh soaps or bubble baths in the genital area.',
    },
    {
      ageRange: '12 months+',
      context:
        'Vaginal discharge in toddlers should be evaluated, especially if it\'s persistent, has an unusual color or odor, or is accompanied by irritation. Causes can include irritation, foreign body, or infection. Early puberty is very rare but should be considered if discharge occurs along with other signs like breast development. See your pediatrician for evaluation.',
    },
  ],
  whenNormal: [
    'Your newborn has white or milky vaginal discharge in the first few weeks of life',
    'Your newborn has a small amount of bloody or pink discharge around days 3-7 (pseudo-menstruation)',
    'The discharge is odorless and your baby is otherwise well',
    'The discharge is decreasing and resolving over the first few weeks',
    'Your baby\'s genital area looks normal aside from the discharge - no redness, swelling, or irritation',
  ],
  whenToMention: [
    'You\'ve noticed vaginal discharge and want reassurance that it\'s normal',
    'The discharge has lasted longer than expected or seems to be increasing',
    'You\'re unsure whether the discharge is normal newborn discharge or something else',
    'Your baby has had discharge for several weeks and it hasn\'t resolved',
  ],
  whenToActNow: [
    'The discharge is yellow, green, or foul-smelling',
    'The genital area is very red, swollen, or appears painful',
    'Your baby has a fever along with vaginal discharge',
    'There is a large amount of bleeding or blood clots (more than a few drops)',
    'Your baby seems very uncomfortable or in pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Baby Girl Care. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Newborn-Baby-Girl-Vaginal-Care.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Newborn. AAP, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Newborn Conditions. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview/article/39/5/261/34394/Common-Newborn-Exam-Findings',
    },
  ],
};

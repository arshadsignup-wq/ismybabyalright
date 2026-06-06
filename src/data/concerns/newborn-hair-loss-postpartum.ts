import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-hair-loss-postpartum',
  title: 'Baby Losing Hair',
  category: 'physical',
  searchTerms: [
    'baby losing hair',
    'newborn hair falling out',
    'baby bald spot',
    'infant hair loss',
    'baby hair thinning',
    'newborn hair shedding',
    'baby losing birth hair',
    'lanugo hair falling out',
    'baby bald patch back of head',
    'when does baby hair grow back',
  ],
  quickAnswer:
    'Hair loss in babies during the first few months is very common and completely normal. Many babies lose some or all of their birth hair in the first 6 months of life due to hormonal changes after birth. The hair that grows back may be a different color or texture. Bald spots on the back of the head from lying down are also very common.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Babies are born with varying amounts of hair. Some newborns also have lanugo, a fine downy hair on the body that gradually falls out after birth. In the first weeks, you may notice hair beginning to thin or fall out, particularly at the temples and back of the head. This is caused by the drop in maternal hormones after birth, similar to postpartum hair loss in mothers.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Hair loss may become more noticeable during this period. Many babies develop a bald spot on the back of the head from the friction of lying on their backs (which is the recommended sleep position). This positional hair loss is temporary and not harmful. You may notice hair on the crib sheet or during bath time. No treatment is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hair loss from hormonal changes typically peaks around 3-4 months. Your baby may appear much less hairy than at birth. New hair growth usually begins during this period and may be a completely different color or texture than the birth hair. The bald spot from sleeping position typically fills in once your baby spends more time sitting up and on their tummy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies have noticeable new hair growth by this age, though some babies remain relatively bald until after their first birthday. The new hair may be curly when the birth hair was straight, or vice versa. Color may also change. If hair loss is patchy, in unusual patterns, or accompanied by scalp changes, consult your pediatrician.',
    },
  ],
  whenNormal: [
    'Gradual thinning or loss of birth hair in the first 6 months of life',
    'A bald spot on the back of the head from lying on the back',
    'Hair loss that is diffuse rather than patchy',
    'New hair growing in that may be a different color or texture',
  ],
  whenToMention: [
    'Patchy hair loss with red, scaly, or crusty scalp areas that could suggest ringworm or other conditions',
    'Hair loss accompanied by other skin changes or symptoms',
    'Hair has not started to regrow by 12 months',
  ],
  whenToActNow: [
    'Hair loss with significant scalp inflammation, open sores, or signs of infection',
    'Hair loss accompanied by other concerning symptoms such as poor growth, lethargy, or developmental delays',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Skin, Hair, and Nails. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Hair Loss in Babies. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/expert-answers/baby-hair/faq-20058037',
    },
  ],
  relatedConcernSlugs: ['newborn-cradle-cap-spreading', 'newborn-flat-spot-prevention'],
};

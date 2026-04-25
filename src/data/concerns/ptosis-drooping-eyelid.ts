import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ptosis-drooping-eyelid',
  title: 'My Baby Has a Drooping Eyelid',
  category: 'medical',
  searchTerms: [
    'baby drooping eyelid',
    'ptosis baby',
    'baby eyelid won\'t open all the way',
    'one eyelid droopy baby',
    'congenital ptosis',
    'lazy eyelid baby',
    'baby eyelid surgery',
    'ptosis treatment baby',
    'baby eyelid covering pupil',
    'eyelid drooping newborn',
  ],
  quickAnswer:
    'Ptosis is when one or both upper eyelids droop lower than normal, sometimes partially covering the eye. It can be present from birth (congenital) or develop later. While often cosmetic, ptosis needs evaluation because if the eyelid covers the pupil, it can affect vision development. Your pediatrician can refer you to a pediatric ophthalmologist to assess whether treatment is needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Congenital ptosis (present from birth) is usually noticed right away. One eyelid may appear lower than the other, or your baby may seem to have difficulty fully opening one eye. If the drooping eyelid covers the pupil, it can interfere with vision development and may require early surgery. Even if the ptosis is mild, have it evaluated by a pediatric eye specialist to monitor vision.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If you notice new drooping of an eyelid at this age, it should be evaluated promptly, especially if it came on suddenly. Sudden ptosis can occasionally indicate a neurological issue. Congenital ptosis that was present from birth should be monitored regularly. Your ophthalmologist will check whether your baby is developing good vision in the affected eye.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with ptosis may tilt their head back or raise their eyebrows to try to see better under the drooping lid. This compensatory behavior suggests the eyelid is affecting vision. Your ophthalmologist will assess vision development and may recommend surgery if the eyelid is covering the pupil or causing significant vision obstruction.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Ptosis that affects vision typically needs surgical correction before school age to prevent permanent vision problems (amblyopia). Your child\'s ophthalmologist will determine the best timing for surgery based on how much the eyelid interferes with vision. Mild ptosis that doesn\'t cover the pupil may just need monitoring.',
    },
    {
      ageRange: '2 years+',
      context:
        'If ptosis is affecting vision or causing your child to tilt their head back constantly, surgery is usually recommended by preschool age. The procedure tightens the eyelid muscle to lift the lid. Outcomes are generally very good. If ptosis is mild and not affecting vision, it can be monitored and addressed when your child is older if desired for cosmetic reasons.',
    },
  ],
  whenNormal: [
    'Your baby has mild ptosis that doesn\'t cover the pupil and has been evaluated by a pediatric ophthalmologist',
    'Your baby is being monitored regularly and vision is developing normally in both eyes',
    'The ptosis is stable and not worsening',
    'Your baby\'s eye closes fully during sleep (even with ptosis, the eye should close completely)',
  ],
  whenToMention: [
    'You\'ve noticed one eyelid seems lower than the other and want it evaluated',
    'Your baby tilts their head back or raises their eyebrows frequently',
    'You have a family history of ptosis or eye problems',
    'The ptosis seems to be worsening or the eyelid is drooping more',
  ],
  whenToActNow: [
    'Your baby develops sudden drooping of an eyelid, especially if accompanied by other symptoms like weakness, difficulty swallowing, or breathing problems',
    'The drooping eyelid is covering the pupil and affecting how much your baby can see',
    'Your baby has ptosis in both eyes or other unusual eye movements',
    'Your baby seems unable to close the affected eye completely or has eye irritation',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ptosis (Drooping Eyelid). HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Ptosis.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Ophthalmology. Ptosis in Children. EyeWiki, 2023.',
      url: 'https://eyewiki.aao.org/Ptosis',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amblyopia (Lazy Eye). HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Amblyopia-Lazy-Eye.aspx',
    },
  ],
};

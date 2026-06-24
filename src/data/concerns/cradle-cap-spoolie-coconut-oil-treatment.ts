import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cradle-cap-spoolie-coconut-oil-treatment',
  title: 'Treating Cradle Cap with Spoolie Brushes and Coconut Oil',
  category: 'skin',
  searchTerms: [
    'cradle cap spoolie brush',
    'cradle cap coconut oil',
    'cradle cap home treatment',
    'spoolie brush cradle cap',
    'coconut oil cradle cap safe',
    'cradle cap removal hack',
    'TikTok cradle cap treatment',
    'natural cradle cap remedy',
    'cradle cap brush baby',
    'cradle cap olive oil treatment',
    'removing cradle cap flakes',
  ],
  quickAnswer:
    'Using a soft brush (like a spoolie or soft-bristled baby brush) and gentle oil to loosen cradle cap flakes is a commonly shared home remedy. While gentle brushing and oil massage can help manage mild cradle cap, aggressive scraping or picking at scales can damage your baby\'s delicate scalp skin and cause infection. Coconut oil is generally considered safe in small amounts, but some babies may be sensitive to it. Cradle cap is harmless and usually resolves on its own.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cradle cap is most common in the first few weeks to months of life. If you choose to use an oil treatment, apply a small amount of mineral oil, petroleum jelly, or coconut oil to the affected area about 15-20 minutes before bath time. Gently massage with your fingertips and then use a soft-bristled baby brush (not a spoolie designed for eyebrows, which may be too stiff for newborn scalp) to loosen scales. Wash with a mild baby shampoo. Do not pick or scratch at the scales. One application per day is sufficient.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If cradle cap persists, gentle daily shampooing with a mild baby shampoo and soft brushing may help. While coconut oil has become a popular remedy via social media, there is limited clinical evidence for its superiority over mineral oil or petroleum jelly. Some babies with eczema tendency may react to coconut oil, so test a small area first. If cradle cap is not responding to home treatments after 2-3 weeks of consistent care, your pediatrician may recommend a medicated shampoo or mild topical steroid.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most cradle cap resolves by this age without any treatment. If it persists or spreads beyond the scalp (to face, neck, or body), it may overlap with atopic dermatitis (eczema) and should be evaluated by your pediatrician. Avoid using essential oils (like tea tree oil) on your baby\'s scalp, as these can cause irritation and allergic reactions. Stick to simple, gentle approaches and be wary of social media advice that promotes aggressive removal techniques.',
    },
  ],
  whenNormal: [
    'Yellowish, waxy, greasy scales on the scalp that come off easily with gentle brushing.',
    'Cradle cap that gradually improves with regular gentle shampooing and brushing.',
    'Small amounts of cradle cap that do not bother your baby at all.',
  ],
  whenToMention: [
    'Cradle cap is thick, widespread, or not improving after several weeks of gentle home treatment.',
    'The affected areas are becoming red, inflamed, or weeping.',
    'Cradle cap has spread to the face, behind the ears, or to the diaper area.',
  ],
  whenToActNow: [
    'The scalp appears infected: oozing pus, increasing redness, warmth, or your baby has a fever.',
    'You accidentally broke the skin while removing scales and the area looks infected.',
    'Your baby has developed a widespread rash or hives after application of coconut oil or another product.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['cradle-cap', 'hives', 'rash-after-antibiotics'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Seborrheic Dermatitis in Infants. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000963.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Skin and Common Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'peeling-skin-newborn',
  title: 'My Newborn\'s Skin Is Peeling',
  category: 'skin',
  searchTerms: [
    'newborn peeling skin',
    'baby skin peeling',
    'newborn dry skin peeling',
    'why is my baby\'s skin flaking',
    'baby skin shedding',
    'peeling skin on newborn feet',
    'newborn skin cracking',
    'is peeling skin normal newborn',
    'baby skin peeling after birth',
    'when does newborn skin stop peeling',
  ],
  quickAnswer:
    'Skin peeling is very common and completely normal in newborns, especially in the first few weeks of life. After spending nine months in amniotic fluid, your baby\'s skin naturally sheds its outer layer as it adjusts to air. This peeling requires no treatment and will resolve on its own as new skin emerges.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Newborn skin peeling typically begins a few days after birth, especially on the hands, feet, and ankles. This is most common in babies born at or after their due date, as they have had more time to shed the protective vernix coating in the womb. Premature babies often have less peeling because their skin is still developing its outer layers.',
    },
    {
      ageRange: '1-3 weeks',
      context:
        'Peeling is often most noticeable during this period. You may see flaky, dry skin on your baby\'s hands, feet, legs, or torso. This is a natural transition as your baby\'s skin adapts from the moist womb environment to dry air. Resist the urge to peel off loose skin, as this can cause irritation. Let it shed naturally.',
    },
    {
      ageRange: '3-6 weeks',
      context:
        'Most newborn peeling begins to slow down during this time. The outer layer has shed, revealing fresh, soft skin underneath. You can apply a small amount of fragrance-free, hypoallergenic baby moisturizer if the skin still seems dry, but this is optional. Avoid using lotions, oils, or creams with fragrances or additives.',
    },
    {
      ageRange: '6+ weeks',
      context:
        'By this age, newborn skin peeling has typically resolved. If dry, cracked, or peeling skin persists or worsens after 6 weeks, this may indicate eczema or very dry skin and should be discussed with your pediatrician. Ongoing moisturizing and gentle bathing practices may be recommended.',
    },
  ],
  whenNormal: [
    'Dry, flaky, peeling skin on the hands, feet, ankles, or legs in the first few weeks of life',
    'The skin underneath the peeling looks healthy and pink, not red, raw, or irritated',
    'Your baby was born at or after their due date (full-term or post-term babies peel more)',
    'The peeling does not seem to bother your baby and they are feeding and sleeping well',
    'Gradual improvement over 2-4 weeks as the outer layer sheds and fresh skin emerges',
  ],
  whenToMention: [
    'The peeling is accompanied by redness, cracking, or weeping that looks painful',
    'Dry, scaly patches persist beyond 6 weeks and are spreading or worsening',
    'The skin is extremely tight, shiny, or forming deep cracks that may bleed',
    'You are concerned about eczema or another skin condition',
  ],
  whenToActNow: [
    'The peeling skin develops signs of infection such as oozing, crusting, swelling, or warmth',
    'Your baby has widespread blistering, skin loss, or peeling along with fever or poor feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Caring for Your Newborn\'s Skin.',
      url: 'https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-new-baby',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Infant and Toddler Health: Newborn Skin Care.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044438',
    },
  ],
};

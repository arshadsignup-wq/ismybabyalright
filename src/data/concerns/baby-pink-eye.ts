import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-pink-eye',
  title: 'Baby Pink Eye (Conjunctivitis)',
  category: 'medical',
  searchTerms: [
    'baby pink eye',
    'baby conjunctivitis',
    'baby eye red and goopy',
    'baby eye discharge pink eye',
    'newborn pink eye',
    'baby eye infection',
    'toddler pink eye treatment',
    'is baby pink eye contagious',
    'baby eye swollen and red',
    'bacterial vs viral pink eye baby',
    'baby eye drops for pink eye',
    'baby pink eye home treatment',
  ],
  quickAnswer:
    'Pink eye (conjunctivitis) is an inflammation of the clear membrane covering the white of the eye and the inner eyelids. In babies it can be caused by viruses, bacteria, allergens, or irritants. Bacterial pink eye causes thick yellow-green discharge and is treated with antibiotic eye drops. Viral pink eye causes watery discharge and resolves on its own. In newborns under 28 days, pink eye can be more serious and always requires medical evaluation.',
  byAge: [
    {
      ageRange: '0-28 days',
      context:
        'Conjunctivitis in the first 28 days of life (ophthalmia neonatorum) is a medical concern that requires prompt evaluation. It can be caused by the antibiotic ointment given at birth (chemical conjunctivitis, appears in the first 24 hours), blocked tear ducts, or infections acquired during birth including chlamydia and gonorrhea. Gonococcal conjunctivitis is a medical emergency that can rapidly damage the eye. Any eye discharge in a newborn should be reported to your pediatrician promptly.',
    },
    {
      ageRange: '1-6 months',
      context:
        'The most common cause of watery or goopy eyes at this age is a blocked tear duct, not pink eye. Blocked tear ducts cause persistent watering and mild crusting, usually in one eye, without redness of the white of the eye. True pink eye causes redness of the whites, swollen eyelids, and discharge. If your baby has a blocked tear duct, gentle massage of the tear duct area and keeping the eye clean with warm water is usually sufficient. Most blocked tear ducts resolve by 12 months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Pink eye in older babies is commonly viral (associated with a cold) or bacterial. Viral pink eye causes clear, watery discharge and often affects both eyes. Bacterial pink eye causes thick, yellow-green discharge that crusts the eyelids shut, often starting in one eye and spreading to the other. Bacterial pink eye usually responds quickly to antibiotic eye drops or ointment. Clean discharge from the eyes with a warm, wet cloth before applying drops.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in daycare frequently get pink eye because it is highly contagious. They touch everything and then rub their eyes. Prevention includes good handwashing. Most daycares require 24 hours of antibiotic treatment before the child can return. Allergic conjunctivitis can also appear in toddlers and causes itchy, watery eyes without thick discharge, often with associated sneezing. If pink eye keeps recurring, talk to your pediatrician about possible allergies or persistent bacteria.',
    },
  ],
  whenNormal: [
    'Mild clear eye discharge during a cold that resolves as the cold improves',
    'A blocked tear duct causing watering and mild crusting in one eye without redness',
    'Brief eye redness after swimming, rubbing, or exposure to wind that clears quickly',
  ],
  whenToMention: [
    'Your baby has red eyes with thick yellow-green discharge suggesting bacterial pink eye',
    'Eye symptoms are not improving after 2-3 days of prescribed antibiotic drops',
    'Your baby has recurring episodes of pink eye and you suspect allergies',
    'Your baby has a blocked tear duct that has not resolved by 12 months',
  ],
  whenToActNow: [
    'Your newborn (under 28 days) has any eye discharge, swelling, or redness - this needs same-day evaluation',
    'Your baby\'s eye is very swollen, has severe redness, or they cannot open the eye',
    'There is a blister on or near the eyelid, the skin around the eye is red and swollen (periorbital cellulitis), or your baby has fever along with eye symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['blocked-tear-duct'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pinkeye (Conjunctivitis). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Pinkeye-Conjunctivitis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Conjunctivitis (Pink Eye).',
      url: 'https://www.cdc.gov/conjunctivitis/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Pink Eye.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/pink-eye',
    },
  ],
};

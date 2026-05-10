import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-eye-swelling-after-birth',
  title: 'Newborn Eye Swelling After Birth',
  category: 'medical',
  searchTerms: [
    'newborn swollen eyes',
    'baby puffy eyes after birth',
    'newborn eye discharge',
    'baby eyes swollen shut',
    'newborn conjunctivitis',
    'eye ointment reaction newborn',
    'baby red swollen eyelids',
    'newborn eye infection',
    'ophthalmia neonatorum',
  ],
  quickAnswer:
    'Mild eye swelling and puffiness in newborns is very common after birth, especially after vaginal delivery, and typically resolves within a few days. It can also be caused by the prophylactic antibiotic eye ointment given after birth. However, significant swelling with yellow or green discharge, especially after the first few days, may indicate a bacterial infection (ophthalmia neonatorum) that requires prompt treatment.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Mild puffiness and swelling of the eyelids immediately after birth is extremely common, particularly after vaginal delivery where pressure during passage through the birth canal causes temporary edema. The erythromycin eye ointment routinely applied after birth to prevent gonococcal ophthalmia can also cause mild irritation and puffiness. This type of chemical conjunctivitis typically produces mild redness and swelling but minimal discharge and resolves within 24-48 hours. The baby may have difficulty opening their eyes fully, which is normal.',
    },
    {
      ageRange: '2-5 days',
      context:
        'Swelling from birth trauma or eye ointment should be resolving by now. If new or worsening eye swelling develops during this period, particularly with purulent (yellow or green) discharge, it could indicate bacterial conjunctivitis. Gonococcal ophthalmia neonatorum can present as early as day 2-5 and is a medical emergency because it can rapidly damage the cornea. Chlamydial conjunctivitis typically appears between 5-14 days. A blocked tear duct (dacryostenosis) can also cause watery or slightly mucousy discharge, but the eye itself is not red or swollen.',
    },
    {
      ageRange: '5 days - 2 weeks',
      context:
        'Chlamydial conjunctivitis is the most common infectious cause of neonatal eye discharge during this window. It presents with eyelid swelling and mucopurulent discharge that can range from mild to severe. It requires oral antibiotic treatment (not just eye drops) because chlamydia can also affect the lungs. If your baby develops eye discharge, redness, or swelling during this period, see your pediatrician promptly. A blocked tear duct, by contrast, causes tearing and mild crusting but not significant redness or swelling of the eye itself.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Persistent watery eyes and mild crusting, especially upon waking, are commonly caused by a blocked tear duct (nasolacrimal duct obstruction), which affects up to 20% of newborns. This usually resolves on its own by 6-12 months of age. Gentle massage of the inner corner of the eye (Crigler massage) can help open the duct. However, if the eye becomes red, produces thick yellow or green discharge, or the eyelid is swollen, this indicates infection (dacryocystitis or conjunctivitis) and needs medical treatment.',
    },
  ],
  whenNormal: [
    'Mild puffy eyelids in the first 48 hours after birth, gradually improving',
    'Slight irritation or puffiness after prophylactic eye ointment that resolves within 1-2 days',
    'Intermittent watery eyes or mild crusting upon waking from a blocked tear duct, without redness or significant swelling',
    'The whites of the eyes appear clear and the baby can open their eyes normally by day 2-3',
  ],
  whenToMention: [
    'Persistent watery eyes or mild crusting that you suspect is from a blocked tear duct',
    'Mild yellow discharge from one eye without significant redness or swelling',
    'You are unsure whether the eye discharge is normal or a sign of infection',
  ],
  whenToActNow: [
    'Your newborn has significant eyelid swelling with thick yellow or green discharge, especially between days 2-14, as gonococcal or chlamydial ophthalmia neonatorum can cause serious eye damage if not treated urgently',
    'The eye area is red, warm, and markedly swollen, or the baby seems to be in pain (crying when the area is touched) or has a fever, as this could indicate a spreading infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ophthalmia Neonatorum. Red Book: Report of the Committee on Infectious Diseases.',
      url: 'https://publications.aap.org/redbook',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Neonatal Conjunctivitis. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001606.htm',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Eye Infections (Conjunctivitis) in Newborns. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Conjunctivitis-Pink-Eye.aspx',
    },
  ],
};

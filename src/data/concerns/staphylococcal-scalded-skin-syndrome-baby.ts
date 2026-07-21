import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'staphylococcal-scalded-skin-syndrome-baby',
  title: 'Staphylococcal Scalded Skin Syndrome (SSSS)',
  category: 'skin',
  searchTerms: [
    'staphylococcal scalded skin syndrome baby',
    'SSSS baby',
    'baby skin peeling sheets',
    'baby red skin peeling',
    'baby skin looks scalded',
    'newborn skin peeling raw',
    'baby skin tender red peeling',
    'Ritter disease baby',
    'staph toxin skin baby',
    'baby blistering skin widespread',
  ],
  quickAnswer:
    'Staphylococcal scalded skin syndrome (SSSS) is a serious skin condition caused by toxins produced by certain strains of Staphylococcus aureus bacteria. The toxins cause the top layers of skin to blister and peel off in sheets, leaving raw, red, tender areas that look like a burn or scald. SSSS primarily affects newborns and children under 5, whose immature kidneys cannot clear the toxin efficiently. It is a medical emergency requiring hospitalization, IV antibiotics, pain management, and careful skin care. With prompt treatment, most children recover fully within 1-2 weeks without scarring.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are most vulnerable to SSSS because their immature kidneys cannot effectively clear the staphylococcal toxin, and their immune systems are still developing. The condition may start with irritability, fever, and tender red skin, often beginning around the face, neck, and diaper area. Within 24-48 hours, large areas of skin may wrinkle, blister, and peel off with gentle touching (a positive Nikolsky sign). The underlying skin appears moist and red like a burn. SSSS in newborns requires urgent hospitalization for IV antibiotics, fluid management, and specialized wound care.',
    },
    {
      ageRange: '3-12 months',
      context:
        'In infants, SSSS often begins with a localized staphylococcal infection (such as an infected umbilical stump, impetigo, or a skin wound) that produces the exfoliative toxin, which then circulates through the bloodstream and affects skin at distant sites. Your baby may develop widespread redness, tender skin, and then peeling, often starting on the face and spreading to the trunk. The skin may peel in large sheets when touched or rubbed. Unlike a burn, SSSS affects only the very outermost skin layer and typically heals without scarring.',
    },
    {
      ageRange: '1-5 years',
      context:
        'SSSS can occur in young children, though it becomes less common as kidney function matures and the immune system strengthens. In toddlers, you may first notice redness around the eyes, nose, and mouth, with crusting and cracking of the skin. The redness then spreads, and the skin becomes tender and fragile. Large blisters may form and rupture easily. Your child will likely be irritable and in significant pain. Seek emergency medical care immediately if you see widespread red, tender, peeling skin.',
    },
    {
      ageRange: '5+ years',
      context:
        'SSSS is rare in older children and adults because mature kidneys clear the toxin effectively and the immune system produces neutralizing antibodies. When it does occur in older children, it is usually associated with an underlying condition that compromises the immune system or kidney function. Recovery after appropriate treatment is typically complete within 10-14 days, and the new skin grows back without scarring since SSSS affects only the superficial skin layer.',
    },
  ],
  whenNormal: [
    'Mild peeling of newborn skin in the first 1-2 weeks of life is a normal physiological process and is not tender or red',
    'Peeling skin after a sunburn follows a clear sun-exposure event and is limited to exposed areas',
    'Dry, flaky skin patches from eczema that are not bright red, widespread, or tender to touch',
  ],
  whenToMention: [
    'Your baby has new widespread redness that is spreading and the skin feels tender when you touch or hold them',
    'Your baby has developed a localized skin infection (impetigo, infected wound) and now seems to have new skin redness spreading to other areas',
    'Your baby\'s skin appears wrinkled, fragile, or seems to be peeling in areas that were not originally affected',
  ],
  whenToActNow: [
    'Your baby has widespread bright red, tender skin that blisters or peels off in sheets when touched -- go to the emergency room immediately',
    'Your baby has fever, irritability, and large areas of raw, weeping skin that looks like a burn or scald -- call 911 or go to the ER',
    'Your baby is refusing to be held or touched because of skin pain, has stopped feeding, and appears very ill',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['impetigo-baby', 'baby-skin-infection-staph', 'baby-mrsa-skin-infection', 'stevens-johnson-syndrome-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Staphylococcal Infections. Red Book: Report of the Committee on Infectious Diseases.',
      url: 'https://redbook.solutions.aap.org/',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Staphylococcal Scalded Skin Syndrome.',
      url: 'https://www.aad.org/public/diseases/a-z/staphylococcal-scalded-skin-syndrome',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Staphylococcal Scalded Skin Syndrome. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK448135/',
    },
  ],
};

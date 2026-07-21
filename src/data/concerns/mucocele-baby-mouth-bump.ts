import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mucocele-baby-mouth-bump',
  title: 'Mucocele or Ranula (Bump in Baby\'s Mouth)',
  category: 'medical',
  searchTerms: [
    'mucocele baby',
    'baby bump on lip',
    'baby blister inside lip',
    'ranula baby mouth',
    'baby bump under tongue',
    'blue bump baby mouth',
    'baby mouth cyst',
    'fluid filled bump baby lip',
    'baby salivary gland cyst',
    'translucent bump baby mouth',
  ],
  quickAnswer:
    'A mucocele is a painless, fluid-filled bump that develops when a salivary gland duct becomes blocked or damaged, causing saliva to collect under the tissue. It appears as a soft, round, bluish or translucent swelling, most commonly on the lower lip. A ranula is a specific type of mucocele that occurs on the floor of the mouth under the tongue. While they can look alarming, mucoceles are benign and not cancerous. Many small mucoceles resolve on their own, but larger or persistent ones may need to be removed by a pediatric oral surgeon or ENT specialist.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Mucoceles and ranulas in newborns are sometimes present at birth (congenital) and appear as a soft, bluish or translucent swelling on the lip, inside the cheek, or under the tongue. A congenital ranula on the floor of the mouth may occasionally be large enough to interfere with feeding or breathing. Your pediatrician can usually diagnose a mucocele by its characteristic appearance. Most small mucoceles in infants are observed, as they often resolve spontaneously within a few weeks to months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins teething and exploring objects with their mouth, minor trauma to the inner lips and cheeks can damage salivary gland ducts and cause mucoceles. You may notice a smooth, round, dome-shaped bump that is soft to the touch, usually painless, and bluish or clear in color. The bump may fluctuate in size, sometimes appearing larger after meals when saliva production increases. Mucoceles are harmless and your baby should not be in pain.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may develop mucoceles from biting their lips or cheeks, or from falls that injure the mouth. If a mucocele keeps coming back after rupturing on its own, your pediatrician may refer you to a pediatric oral surgeon or ENT for definitive treatment. The most common procedure is excision (surgical removal) of the mucocele along with the associated minor salivary gland, which is a brief outpatient procedure. For ranulas under the tongue, marsupialization (creating a drainage opening) may be performed.',
    },
    {
      ageRange: '3+ years',
      context:
        'In older children, mucoceles can recur if the underlying blocked gland is not removed. If your child has a mucocele that repeatedly fills, ruptures, and refills, surgical removal is generally recommended. The procedure is straightforward, performed under local or general anesthesia depending on age and cooperation, and recurrence after complete excision is uncommon. Ranulas that extend below the jaw (plunging ranulas) are rare but may require a more extensive surgical approach.',
    },
  ],
  whenNormal: [
    'A small, painless, bluish or clear bump on the inner lip that has been present for a short time and your baby is unbothered',
    'The bump fluctuates in size but is not growing steadily and does not interfere with feeding',
    'A mucocele that ruptured on its own and has not recurred',
    'Your pediatrician has examined the bump and confirmed it is a mucocele',
  ],
  whenToMention: [
    'A bump in your baby\'s mouth has been present for more than 2-3 weeks and is not resolving',
    'The mucocele keeps coming back after rupturing on its own',
    'The bump is growing in size or you are unsure whether it is a mucocele',
  ],
  whenToActNow: [
    'A large ranula under the tongue is interfering with feeding, swallowing, or breathing in a young infant',
    'The area around the bump becomes red, swollen, warm, or painful, suggesting a possible infection rather than a simple mucocele',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-childhood-caries-prevention', 'baby-teeth-discolored-gray'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Mouth and Dental Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Oral Pathology. Reference Manual.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Mucocele and Ranula. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560855/',
    },
  ],
};

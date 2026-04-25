import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oversupply-symptoms',
  title: 'Breast Milk Oversupply Symptoms',
  category: 'feeding',
  searchTerms: [
    'oversupply of breast milk',
    'overactive letdown',
    'too much milk',
    'forceful letdown baby choking',
    'baby coughing while nursing',
    'foremilk hindmilk imbalance',
    'green frothy poop breastfed',
    'baby gulping and gagging at breast',
    'how to reduce milk supply',
    'fast milk flow breastfeeding',
  ],
  quickAnswer:
    'Breast milk oversupply means your body produces more milk than your baby needs, often accompanied by a fast or forceful letdown. While this might sound like a good problem to have, it can cause challenges for both you and your baby: engorgement, plugged ducts, and mastitis for you; and fussiness, gassiness, green frothy poops, and difficulty nursing for your baby. The good news is that oversupply can be managed with feeding adjustments and usually regulates over time.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'In the early weeks, it is very common to have more milk than your baby needs as your body is learning to match supply to demand. Your breasts may feel very full, leak constantly, and spray during letdown. Your baby may cough, sputter, or pull off the breast when milk lets down forcefully. This is normal in the beginning. Avoid pumping unless medically necessary, as it signals your body to make even more milk. Hand express just enough for comfort if needed.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'If oversupply persists beyond 6-8 weeks, it can become uncomfortable. Signs include baby pulling off and crying during letdown, frequent green watery or frothy stools, excessive gas and fussiness, and clicking or gulping sounds while nursing. Try block feeding: nurse on one breast only for a set time period (e.g., 3-4 hours), then switch. This helps reduce stimulation and can gradually decrease supply. Laid-back nursing positions can also help slow milk flow.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most oversupply issues resolve by 3-4 months as your supply regulates. However, if you continue to experience painful engorgement, frequent plugged ducts or mastitis, or if your baby remains fussy and gassy with green stools, consult a lactation consultant. Block feeding, nursing from one side per session, or even using a nipple shield temporarily can help slow the flow. Avoid over-pumping or over-stimulating the breast.',
    },
    {
      ageRange: '6 months+',
      context:
        'By this stage, oversupply has typically self-corrected. If you still struggle with forceful letdown, your baby is now better able to handle it as their suck is stronger and they can pull off when needed. Some babies learn to unlatch during letdown, wait for the spray to slow, then relatch. If you continue to have recurrent plugged ducts or mastitis, see a lactation consultant for personalized management strategies.',
    },
  ],
  whenNormal: [
    'Your breasts feel very full in the first few weeks and gradually soften as your supply regulates',
    'You experience occasional leaking or spraying, especially in the early weeks',
    'Your baby occasionally coughs or sputters during letdown but generally nurses well',
    'You pump large amounts in the early weeks but this decreases as your body adjusts to your baby\'s needs',
  ],
  whenToMention: [
    'You have recurrent plugged ducts or have had mastitis more than once',
    'Your baby consistently coughs, gags, or chokes during nursing and seems distressed at the breast',
    'Your baby has persistent green, frothy, or explosive stools along with fussiness and gas',
    'Your baby is gaining weight very rapidly (more than 2 pounds per month after the first month)',
    'You are engorged and uncomfortable most of the time despite frequent nursing',
  ],
  whenToActNow: [
    'You have signs of mastitis: fever over 101°F, flu-like symptoms, red/hot/painful area on breast (call your doctor same day)',
    'You have a large, hard, extremely painful lump in your breast that does not improve with nursing or warm compresses (could be an abscess)',
    'Your baby is refusing to nurse, losing weight, or showing signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
    'breastfeeding',
    'digestive-health',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Oversupply and Overactive Letdown. 2024.',
      url: 'https://www.llli.org/breastfeeding-info/oversupply/',
    },
    {
      org: 'KellyMom',
      citation:
        'KellyMom Parenting & Breastfeeding. Oversupply: Too Much Milk.',
      url: 'https://kellymom.com/bf/got-milk/supply-worries/fast-letdown/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Managing Breastfeeding Challenges. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
  ],
};

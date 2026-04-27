import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-white-tongue',
  title: 'Baby White Tongue - Milk Residue or Thrush?',
  category: 'medical',
  searchTerms: [
    'baby white tongue',
    'baby tongue white coating',
    'milk tongue vs thrush baby',
    'baby white patches in mouth',
    'is baby white tongue thrush',
    'how to tell if baby has thrush',
    'newborn white tongue',
    'baby white residue on tongue',
    'baby thrush on tongue',
    'baby tongue coated white after feeding',
    'white film on baby tongue',
    'baby white tongue not coming off',
  ],
  quickAnswer:
    'A white tongue in babies is extremely common and is usually just milk residue from breastfeeding or formula feeding. Milk residue coats the tongue lightly and can be wiped away with a damp cloth. Thrush (oral candidiasis) is a yeast infection that creates white patches that look like cottage cheese and do NOT wipe away easily - if you try, the tissue underneath may appear raw or bleed. Thrush can also appear on the cheeks, gums, and roof of the mouth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A white-coated tongue is very common in newborns and young infants who feed frequently. To determine whether it is milk or thrush, gently try to wipe the white coating with a damp cloth or your finger. If it wipes away easily, it is milk residue. If it does not come off, or the area underneath looks red and raw, it is likely thrush. Thrush is caused by an overgrowth of Candida yeast, which is normally present in small amounts. Risk factors include antibiotic use (by baby or breastfeeding mother), a vaginal yeast infection during birth, or a young immune system.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Thrush is most common in babies under 6 months but can occur at any age. If your baby has thrush, you may notice them pulling off the breast or bottle, being fussy during feeds, or making clicking sounds. Breastfeeding mothers may develop corresponding nipple thrush - symptoms include red, shiny, painful nipples and shooting pain during or after feeding. Both mother and baby need to be treated simultaneously to prevent passing the infection back and forth.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solids and their immune systems mature, thrush becomes less common. A white tongue at this age is more likely milk residue. If thrush does occur, it may be triggered by antibiotics prescribed for an ear infection or other illness. Probiotics may help prevent antibiotic-associated thrush but discuss this with your pediatrician first. Sterilize pacifiers and bottle nipples regularly to reduce the yeast load.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Thrush in toddlers is uncommon unless the child has been on antibiotics, uses a steroid inhaler, or has an immune system concern. A white-coated tongue in a toddler who is eating well and not on any medications is most likely just from milk or food residue. Encourage water drinking after meals to help clear the tongue. If your toddler has persistent or recurrent oral thrush, your pediatrician may want to investigate further.',
    },
  ],
  whenNormal: [
    'The white coating on your baby\'s tongue wipes away easily with a damp cloth - this is milk residue',
    'Your baby has a white tongue only right after feeding that clears within an hour or so',
    'Your baby is feeding well with no fussiness or changes in feeding behavior',
    'The white is only on the tongue and not on the cheeks, gums, or palate',
  ],
  whenToMention: [
    'White patches that do not wipe away are present on the tongue, cheeks, gums, or palate',
    'Your baby seems fussy or uncomfortable during feeds and you see white patches',
    'You (the breastfeeding parent) have red, painful nipples alongside your baby\'s white patches',
    'Thrush keeps coming back after treatment',
  ],
  whenToActNow: [
    'Your baby is refusing to eat, is not making wet diapers, or is showing signs of dehydration along with mouth sores',
    'White patches are accompanied by fever, widespread rash, or your baby seems unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['thrush', 'tongue-tie', 'painful-breastfeeding'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Thrush and Other Candida Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Candidiasis (Thrush).',
      url: 'https://www.cdc.gov/candidiasis/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Oral Thrush in Infants. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000626.htm',
    },
  ],
};

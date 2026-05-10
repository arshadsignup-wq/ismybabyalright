import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-tongue-color-white-coating',
  title: 'Newborn White Tongue Coating',
  category: 'medical',
  searchTerms: [
    'white tongue baby',
    'newborn white coating tongue',
    'baby tongue white after feeding',
    'oral thrush baby',
    'milk residue on baby tongue',
    'white patches in baby mouth',
    'candida baby mouth',
    'newborn tongue looks white',
    'thrush vs milk tongue',
  ],
  quickAnswer:
    'A white coating on a newborn\'s tongue is extremely common and is usually just a milk residue from breastfeeding or formula feeding. If the white coating wipes off easily with a damp cloth, it is almost certainly milk residue. If it does not wipe off easily, appears as raised white patches on the tongue, gums, or inner cheeks, and looks slightly red underneath when scraped, it may be oral thrush (a yeast infection) that requires treatment.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'A white-coated tongue in the first two weeks is very common and is most often simply milk residue. Newborns feed frequently and milk can coat the tongue. To check whether it is milk or thrush, gently wipe the tongue with a clean, damp cloth or gauze. If the white comes off easily, it is milk. If it does not come off or leaves a red, raw-looking area, it could be thrush. Thrush in newborns this young may have been acquired during passage through the birth canal if the mother had a vaginal yeast infection.',
    },
    {
      ageRange: '2-4 weeks',
      context:
        'Oral thrush becomes more common during this period, particularly in babies who were exposed to antibiotics (given to the mother during labor or to the baby). Thrush presents as white patches that appear on the tongue, inner cheeks, gums, and sometimes the roof of the mouth. Unlike milk residue, these patches do not wipe off easily. The baby may seem fussy during feeding, pull off the breast or bottle, or be slightly reluctant to feed. Breastfeeding mothers may also develop nipple thrush, experiencing burning or sharp pain during and after nursing.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Thrush is most common during the first 2-3 months of life when the baby\'s immune system is still maturing. If diagnosed, it is typically treated with an antifungal medication such as nystatin oral suspension, which is applied to the inside of the mouth after feedings. It is important to treat both the baby and the breastfeeding mother if she has symptoms, to prevent passing the infection back and forth. Sterilize pacifiers, bottle nipples, and teething toys regularly to prevent reinfection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Thrush that recurs frequently or does not respond to treatment may warrant further evaluation. In rare cases, persistent or recurrent thrush can indicate an immune system issue. However, most cases at this age are simply recurrences due to reinfection from contaminated objects or ongoing antibiotic use. Continue good hygiene practices. Once the baby\'s immune system matures, thrush becomes less common.',
    },
  ],
  whenNormal: [
    'A thin white coating on the tongue that wipes off easily and appears after feeding (milk residue)',
    'Your baby is feeding well, gaining weight, and is not fussy during feeds despite the white tongue',
    'Thrush was diagnosed and is responding well to prescribed antifungal treatment',
    'The white coating comes and goes and is clearly related to feeding times',
  ],
  whenToMention: [
    'White patches that do not wipe off easily and appear on the tongue, cheeks, or gums',
    'Your baby seems fussy during feeding, pulls away from the breast or bottle, or feeds less than usual',
    'You (the breastfeeding mother) have nipple pain, redness, or shiny/flaky skin on the nipples suggesting nipple thrush',
  ],
  whenToActNow: [
    'Your baby refuses to feed, is not producing wet diapers, or shows signs of dehydration (dry mouth, no tears, sunken fontanelle) along with oral white patches, as adequate hydration and nutrition are critical for newborns',
    'Thrush does not improve after a full course of prescribed treatment or worsens rapidly, spreading extensively throughout the mouth, as this may indicate a more resistant infection or immune issue needing further evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Thrush and Other Candida Infections. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Thrush-and-Other-Candida-Infections.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Oral Thrush. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/diseases-conditions/oral-thrush/symptoms-causes/syc-20353533',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Thrush in Newborns. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001618.htm',
    },
  ],
};

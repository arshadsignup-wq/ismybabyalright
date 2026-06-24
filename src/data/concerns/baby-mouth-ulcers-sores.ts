import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-mouth-ulcers-sores',
  title: 'My Baby Has Mouth Ulcers or Sores',
  category: 'medical',
  searchTerms: [
    'baby mouth ulcer',
    'baby mouth sore',
    'baby canker sore',
    'baby mouth blister',
    'baby sore in mouth eating',
    'toddler mouth ulcer treatment',
    'baby white spot in mouth painful',
    'baby aphthous ulcer',
    'baby refuses eat mouth sore',
    'baby mouth sore causes',
  ],
  quickAnswer:
    'Mouth ulcers (canker sores or aphthous ulcers) are common in babies and toddlers and appear as small, round or oval sores with a white or yellowish center and red border on the inner cheeks, gums, tongue, or lips. They are usually caused by minor injuries (biting, sharp foods), viral infections (like hand-foot-and-mouth disease or herpes simplex), or sometimes nutritional deficiencies. Most heal on their own within 7-14 days, but they can cause significant pain and feeding difficulties.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Mouth sores in very young infants are less common but can occur. Thrush (oral candidiasis) is the most frequent cause of white patches in an infant\'s mouth and is caused by yeast, not ulcers — it appears as white patches that do not wipe off easily. Neonatal herpes (from HSV infection) can cause mouth sores in newborns and is a serious condition requiring immediate treatment. Epstein pearls (small, white, harmless cysts on the gums or roof of the mouth) are very common in newborns and resolve without treatment. If your young infant has mouth sores and seems unwell, has a fever, or is not feeding, seek prompt medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Hand-foot-and-mouth disease (caused by coxsackievirus) is a common cause of mouth ulcers in babies, usually accompanied by a rash on the hands, feet, and buttocks. Primary herpes gingivostomatitis (first HSV-1 infection) causes multiple painful mouth sores, high fever, drooling, and refusal to eat. Canker sores (aphthous ulcers) can also begin at this age. For pain relief, offer cool foods and liquids, use infant acetaminophen or ibuprofen (for 6+ months), and keep your baby hydrated. Avoid acidic, salty, or spicy foods that can worsen pain.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are prone to mouth injuries from falls, chewing on hard objects, or accidentally biting their cheeks or lips. These injuries can cause ulcers that heal within 1-2 weeks. Recurrent canker sores in toddlers may be related to vitamin deficiencies (iron, B12, folate), food sensitivities, or stress. If your toddler gets frequent mouth ulcers, your pediatrician may check bloodwork. For severe or widespread mouth sores, prescription treatments like oral acyclovir (for herpes) or magic mouthwash (a compounded rinse) may be recommended.',
    },
  ],
  whenNormal: [
    'Your child has one or two small ulcers inside the mouth that appeared after a minor injury and are healing within 1-2 weeks.',
    'Mouth sores are mild, your child is still eating and drinking adequately, and there is no fever.',
    'Your child has hand-foot-and-mouth disease with mouth ulcers that are healing within 7-10 days.',
  ],
  whenToMention: [
    'Your child has recurrent mouth ulcers (more than 3-4 episodes per year) and you want to identify potential causes.',
    'Mouth sores are making it very difficult for your child to eat or drink.',
    'Mouth ulcers are accompanied by sores on other parts of the body or unusual symptoms.',
  ],
  whenToActNow: [
    'Your newborn (under 3 months) has mouth sores, fever, or is refusing to eat — this could be neonatal herpes, which is a medical emergency requiring immediate treatment with antiviral medication.',
    'Your child has mouth sores with signs of dehydration: no wet diapers for 6+ hours, dry mouth, no tears, sunken fontanelle, or lethargy — seek medical care.',
    'Your child has widespread mouth ulcers with high fever, extreme pain, and is completely unable to swallow — seek urgent medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hand-foot-mouth', 'tongue-tie', 'baby-irritable-during-feeding-fussy'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Mouth Sores in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/Canker-Sores.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Aphthous Stomatitis (Canker Sores)',
      url: 'https://medlineplus.gov/cankersores.html',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Hand, Foot, and Mouth Disease',
      url: 'https://www.cdc.gov/hand-foot-mouth/index.html',
    },
  ],
};

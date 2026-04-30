import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-white-patches-on-skin',
  title: 'White Patches on Baby\'s Skin',
  category: 'skin',
  searchTerms: ['white patches baby skin', 'baby losing skin color', 'baby white spots on face', 'pityriasis alba baby', 'vitiligo baby', 'toddler white patches on cheeks', 'baby light patches skin', 'baby skin depigmentation', 'baby pale spots', 'tinea versicolor baby'],
  quickAnswer: 'White or lighter patches on a baby\'s skin are usually caused by common, harmless conditions. Pityriasis alba is the most frequent cause in children - it creates slightly scaly, pale patches, especially on the cheeks and arms, and is related to dry skin and mild eczema. Vitiligo (true loss of pigment) is rarer in babies but possible. Tinea versicolor is a harmless fungal condition that creates lighter patches. Most white patches in children are not concerning, but a dermatology evaluation can provide a clear diagnosis.',
  byAge: [
    { ageRange: '0-12 months', context: 'White patches in babies are uncommon. If present, they could be birthmark-related (nevus depigmentosus - a flat, white birthmark that stays the same size relative to growth), or early signs of a condition. Ash-leaf spots (small, oval white patches) can be present from birth and are usually harmless, but multiple ash-leaf spots may warrant evaluation as they can be associated with tuberous sclerosis.' },
    { ageRange: '1-3 years', context: 'Pityriasis alba is the most common cause of white patches in toddlers. These slightly scaly, poorly defined pale patches appear on the face (especially cheeks), upper arms, and trunk. They are more noticeable in darker-skinned children and in summer when surrounding skin tans. It is a mild eczema variant that resolves on its own over months to years. Regular moisturizing and sun protection help. Tinea versicolor can also cause lighter patches but is more common in adolescents.' },
  ],
  whenNormal: ['Slightly pale, dry patches on the cheeks that become more noticeable in summer (likely pityriasis alba)', 'A single small white birthmark-like patch that has been present since birth and is not changing', 'White patches that improve with moisturizing and gentle skin care'],
  whenToMention: ['White patches are new and spreading', 'The patches are completely white (stark white vs. slightly lighter than surrounding skin)', 'You want a definitive diagnosis to know the cause', 'White patches are accompanied by changes in hair color in the affected area'],
  whenToActNow: ['Multiple ash-leaf-shaped white spots are present in a young baby (evaluation for tuberous sclerosis may be recommended)', 'White patches are spreading rapidly and affecting large areas of the body', 'White patches are accompanied by other symptoms like seizures, developmental changes, or a growing birthmark'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'dry-skin', 'baby-dry-patches-on-cheeks', 'birthmarks'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Skin Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pityriasis Alba. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK431102/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vitiligo. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Vitiligo.aspx' },
  ],
};

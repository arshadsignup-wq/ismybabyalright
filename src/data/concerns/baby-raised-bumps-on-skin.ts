import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-raised-bumps-on-skin',
  title: 'Raised Bumps on Baby\'s Skin',
  category: 'skin',
  searchTerms: ['baby raised bumps', 'toddler bumps on skin', 'baby bumpy skin', 'baby small bumps', 'toddler rough bumpy skin', 'baby goosebump-like rash', 'keratosis pilaris baby', 'molluscum contagiosum baby', 'baby bumps on arms', 'baby skin colored bumps'],
  quickAnswer: 'Raised bumps on a baby\'s skin have many possible causes, most of which are harmless. Common causes include keratosis pilaris (tiny rough bumps on upper arms and thighs), molluscum contagiosum (small, dome-shaped, pearl-like bumps from a viral infection), insect bites, viral rashes, and milia (tiny white bumps in newborns). The bumps\' appearance - their color, size, texture, location, and whether they are itchy - helps determine the cause. Most resolve on their own or with simple treatment.',
  byAge: [
    { ageRange: '0-12 months', context: 'Newborns commonly develop milia (tiny white bumps on the face), baby acne (red bumps and pustules on cheeks and forehead at 2-4 weeks), and erythema toxicum (blotchy red patches with small yellow bumps in the first few days). These are all harmless and resolve without treatment. Miliaria (heat rash) causes tiny red bumps from blocked sweat ducts. If bumps are widespread with fever, consult your pediatrician to evaluate for a viral illness or infection.' },
    { ageRange: '1-3 years', context: 'Common causes of raised bumps in toddlers include keratosis pilaris (rough, sandpaper-like bumps on upper arms, thighs, and cheeks - harmless and very common), molluscum contagiosum (smooth, dome-shaped, flesh-colored bumps with a central dimple - a common viral infection that spreads in daycare), insect bites (grouped red itchy bumps), and warts (rough, raised bumps from HPV). Most of these are harmless and resolve over time, though molluscum may take 6-18 months to clear.' },
  ],
  whenNormal: ['Tiny white bumps on a newborn\'s face (milia)', 'Rough, sandpaper-like bumps on the upper arms and thighs (keratosis pilaris)', 'Small red bumps during hot weather (heat rash)', 'A few smooth, dome-shaped bumps that have been present for weeks (molluscum)'],
  whenToMention: ['Bumps are spreading or multiplying', 'Bumps are itchy and bothersome to your child', 'You want a diagnosis to know what the bumps are', 'Bumps are on the face and you are concerned about scarring'],
  whenToActNow: ['Bumps are accompanied by fever and your child appears unwell', 'Bumps are rapidly spreading with pain and redness (possible infection)', 'A bump is growing rapidly, changing shape, or has an irregular appearance', 'Raised purple or dark red bumps that do not blanch (turn white) when pressed (petechiae/purpura - seek immediate care)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away', 'heat-rash', 'insect-bites-baby', 'warts-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Common Skin Rashes in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Molluscum Contagiosum. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Molluscum-Contagiosum.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Keratosis Pilaris. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK546708/' },
  ],
};

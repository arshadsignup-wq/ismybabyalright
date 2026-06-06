import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-only-eating-pouches',
  title: 'My Baby Will Only Eat from Squeeze Pouches',
  category: 'feeding',
  searchTerms: [
    'baby only eats pouches',
    'baby addicted to squeeze pouches',
    'baby won\'t eat anything but pouches',
    'baby food pouch dependence',
    'are baby food pouches bad',
    'too many baby food pouches',
    'baby refusing food only wants pouches',
    'squeeze pouch only diet baby',
    'weaning off baby food pouches',
    'baby pouch feeding problems',
  ],
  quickAnswer:
    'While squeeze pouches can be a convenient way to get nutrition into your baby, relying on them exclusively can delay important oral motor development. Pouches bypass chewing and texture exploration, which are skills babies need to develop. Gradually transitioning to spoon-fed purees and finger foods is recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age are not eating solids and pouches are not appropriate for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When starting solids, it is better to begin with spoon-fed purees rather than pouches. Spoon feeding helps baby learn to take food from a spoon, move it around in their mouth, and swallow. If you do use pouches, squeeze the contents onto a spoon rather than letting baby suck directly from the pouch.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is a critical window for texture development. Babies who only eat smooth pouch purees may miss important practice with lumpier textures and finger foods. Start offering mashed foods with small lumps and soft finger foods alongside pouches. Gradually reduce pouch use over several weeks.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, babies should be practicing with a variety of textures including soft chunks and finger foods. If your baby only accepts pouches, try squeezing pouch contents onto a spoon or plate and mixing in slightly thicker textures. Offer finger foods at every meal even if baby does not eat them right away.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers should be eating a variety of textures and self-feeding. If your toddler still relies heavily on pouches, work on a gradual transition. Squeeze pouch contents into a bowl, add texture gradually, and pair with finger foods. If your toddler resists all textures, consider an evaluation for sensory or oral motor concerns.',
    },
  ],
  whenNormal: [
    'Baby eats pouches as part of a varied diet that also includes spoon-fed foods and finger foods',
    'Baby enjoys pouches on the go but eats other textures at home',
    'Baby is going through a brief phase of preferring pouches but still accepts other foods sometimes',
  ],
  whenToMention: [
    'Baby refuses all food except squeeze pouches for more than two to three weeks',
    'Baby gags or vomits on any food that is not smooth pouch consistency',
    'Baby is over 9 months and has not progressed to any textured foods',
  ],
  whenToActNow: [
    'Baby is losing weight or not growing despite consuming many pouches',
    'Baby is over 12 months and cannot tolerate any texture beyond smooth purees',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-eat-lumpy-food', 'baby-texture-regression', 'baby-gagging-on-textures'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Food Pouches: Are They OK? HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Foods and Drinks for 6 to 24 Month Olds. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-6-to-24-months.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Impact of Commercial Baby Food Pouches on Infant Feeding Development. 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};

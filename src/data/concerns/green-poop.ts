import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'green-poop',
  title: 'Green Poop in Babies',
  category: 'digestive',
  searchTerms: [
    'baby green poop',
    'why is my baby\'s poop green',
    'green stool in newborn',
    'breastfed baby green poop',
    'formula fed baby green poop',
    'green poop baby normal',
    'baby dark green poop',
    'bright green baby poop',
    'baby green poop teething',
    'baby green poop should I worry',
  ],
  quickAnswer:
    'Green poop in babies is almost always completely normal and nothing to worry about. It can be caused by iron in formula or supplements, a foremilk-hindmilk balance in breastfeeding, dietary changes, or simply normal variation in how quickly food moves through the gut.',
  byAge: [
    {
      ageRange: '0-5 days',
      context:
        'In the first few days, your baby passes meconium, a dark greenish-black, sticky stool. This is completely normal and expected. Over the next few days, stools transition through dark green to yellow-green and then to the typical colour for your baby\'s feeding type. This progression is actually a reassuring sign that feeding is going well.',
    },
    {
      ageRange: '1 week - 3 months',
      context:
        'Breastfed babies typically have yellow, seedy stools, but occasional green stools are very common. This can happen if your baby gets more foremilk (the thinner milk at the start of a feed), if you eat certain green foods, or simply as normal variation. Formula-fed babies often have greener, more paste-like stools, especially with iron-fortified formula.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Green poop continues to be a normal variation. If your baby has started iron supplements (often recommended around 4 months for breastfed babies), dark green or greenish-black stools are a very common and harmless side effect. Illness with a tummy bug can also temporarily turn stools green.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby starts solid foods, you may see a whole rainbow of stool colours depending on what they eat. Green vegetables like peas, beans, and spinach can turn stools quite dramatically green. This is completely harmless and shows your baby is eating their greens.',
    },
    {
      ageRange: '12 months+',
      context:
        'As your toddler\'s diet expands, green stools remain a normal variation. Bright green can come from food colouring in some snacks and drinks. As long as your child is well, eating normally, and not in pain, green poop on its own is not a concern.',
    },
  ],
  whenNormal: [
    'Your newborn is passing dark green transitional stools in the first week of life',
    'Your formula-fed baby has greenish stools, which is common with iron-fortified formula',
    'Your breastfed baby has occasional green stools but is feeding well and gaining weight',
    'Your baby started iron drops and their stools turned dark green or greenish-black',
    'Your baby recently started solids and has green stools after eating green vegetables',
  ],
  whenToMention: [
    'Green stools are accompanied by mucus or a slimy texture consistently over several days',
    'Your breastfed baby has persistently green, frothy stools and seems unsettled after feeds, which may suggest a foremilk-hindmilk imbalance worth discussing with a lactation consultant',
    'Your baby has green stools alongside other symptoms like a rash, excessive fussiness, or poor weight gain, which could occasionally suggest a food sensitivity',
  ],
  whenToActNow: [
    'You see blood (red or dark streaks) mixed in with green or any colour stool',
    'Your baby has pale, chalky white or very light grey stools, as this can indicate a liver or bile duct issue and needs urgent medical attention',
    'Your baby has green watery diarrhoea many times a day and shows signs of dehydration such as fewer wet nappies, no tears, or a sunken soft spot',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'starting-solids',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Feeding Infants.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/index.html',
    },
  ],
};

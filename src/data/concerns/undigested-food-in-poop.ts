import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'undigested-food-in-poop',
  title: 'I See Undigested Food in My Baby\'s Poop',
  category: 'digestive',
  searchTerms: [
    'undigested food in baby poop',
    'baby poop has chunks of food',
    'toddler poop undigested food',
    'baby poop pieces of carrot',
    'food coming out whole in baby poop',
    'baby not digesting food properly',
    'corn in toddler poop',
    'blueberry skin in baby poop',
    'why is there food in my baby\'s diaper',
    'baby poop looks like food',
  ],
  quickAnswer:
    'Seeing undigested food in your baby\'s poop is completely normal, especially when they are first learning to eat solids. Babies are still developing the ability to fully chew and digest certain foods, and many common foods like corn, blueberry skins, peas, raisins, and tomato skins are naturally difficult to break down. As long as your baby is growing well and not having other digestive symptoms, this is nothing to worry about.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'When babies first start solids, their digestive system is still maturing. It is very common to see recognizable pieces of food in their diapers, especially with foods that have tough skins or fibrous structures like peas, blueberries, and beans. Babies at this age also tend to swallow food with minimal chewing since they are still developing their chewing skills. Offering well-cooked, soft foods cut into appropriate sizes helps, but some undigested food in the stool is expected and normal.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As babies become more experienced eaters and develop more teeth, you may notice less undigested food in their stools, though it will still appear with certain foods. Corn, for example, has an outer shell made of cellulose that humans cannot digest at any age. Raisins, grape skins, tomato skins, and leafy greens are also commonly seen. This is a sign that your baby is eating a varied diet, not that something is wrong.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers eat a wider variety of foods and chew more effectively, but undigested food in the stool remains common and normal. If your toddler eats quickly or does not chew thoroughly, you may see larger pieces of food in the diaper. Encouraging slower eating and thorough chewing helps, but is a gradual learning process. Some foods will always appear in the stool because they contain insoluble fiber that the human body simply does not break down.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By this age, you should see less undigested food overall, but it is still normal to occasionally spot corn kernels, skins of fruits and vegetables, seeds, and nuts in the stool. If your child is consistently passing large amounts of undigested food, has foul-smelling or greasy stools, or is not gaining weight appropriately, these could be signs of a malabsorption issue and should be evaluated by your pediatrician.',
    },
  ],
  whenNormal: [
    'You see recognizable pieces of corn, peas, blueberry skins, raisins, or other high-fiber foods in your baby\'s diaper',
    'Your baby is growing well, gaining weight, and has no other digestive complaints like persistent diarrhea or belly pain',
    'The undigested food appears occasionally and your baby\'s stool is otherwise a normal consistency and color',
    'Your baby or toddler has recently started a new food and pieces of it are visible in the stool',
  ],
  whenToMention: [
    'Large amounts of undigested food consistently appear in every stool, even with well-cooked soft foods',
    'Undigested food in the stool is accompanied by persistent diarrhea, foul-smelling or oily stools, or excessive gas and bloating',
    'Your child does not seem to be gaining weight appropriately despite eating well',
  ],
  whenToActNow: [
    'Your baby has chronic diarrhea with large amounts of undigested food along with poor weight gain or weight loss, which could indicate a malabsorption condition',
    'Your baby has blood or significant mucus in the stool along with undigested food and seems to be in pain or distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Undigested food in stool: What does it mean?',
      url: 'https://www.mayoclinic.org/undigested-food-in-stool/expert-answers/faq-20058093',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Your Digestive System & How It Works.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'difficulty-using-utensils',
  title: 'Difficulty Using Utensils',
  category: 'physical',
  searchTerms: [
    'toddler can\'t use spoon',
    'toddler won\'t use fork',
    'child difficulty using utensils',
    'toddler can\'t feed self with spoon',
    'when should toddler use utensils',
    'toddler drops spoon',
    'toddler messy eater with utensils',
    'child prefers eating with hands',
    'toddler struggles with fork and spoon',
    'delayed utensil use toddler',
  ],
  quickAnswer:
    'Learning to use utensils is a complex fine motor skill that develops gradually between 12 and 36 months. Most toddlers begin experimenting with a spoon around 12 to 15 months, but it takes many months of messy practice before they become proficient. It is perfectly normal for toddlers to prefer eating with their hands, and spills are expected well into the preschool years.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'Babies at this age may show interest in the spoon during feeding and try to grab it from you. They may hold a spoon and bang it on the highchair tray, mouth it, or wave it around. They are not yet expected to scoop and deliver food to their mouth with a utensil. Giving your baby their own spoon to hold while you feed them with another is a great way to encourage interest.',
    },
    {
      ageRange: '14-18 months',
      context:
        'Many toddlers begin attempting to use a spoon for self-feeding. They may dip the spoon into food and bring it to their mouth, but much of the food will fall off along the way. They typically use a fist grip (whole hand wrapped around the handle). Pre-loading the spoon for them can help reduce frustration. If your toddler shows no interest in holding or trying a spoon by 18 months, gently encourage practice.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Spoon skills improve, and most toddlers can scoop soft foods and get them to their mouth with moderate success. Fork use begins, though stabbing food with a fork requires more coordination. Messes are still very common and expected. By 24 months, many toddlers can use a spoon fairly consistently for soft foods, though they may switch back to fingers when frustrated or tired.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Utensil use becomes more refined. Children use a spoon and fork with increasing accuracy and less spilling. They may begin to use a more mature grip (closer to how an adult holds a utensil). If your child is over 2.5 years and still cannot get food to their mouth using a spoon at all, mention this to your pediatrician, as fine motor or coordination support may be helpful.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months and prefers eating with their hands over using utensils.',
    'Your toddler can use a spoon but makes a significant mess, with food falling off the spoon regularly.',
    'Your toddler uses utensils for some foods but switches to fingers for foods that are harder to manage.',
    'Your toddler uses a fist grip on the spoon rather than a more mature grip, which is normal until about age 3.',
    'Your toddler can use a spoon well for some meals but refuses to use it when tired or frustrated.',
  ],
  whenToMention: [
    'Your child is over 2 years old and shows no interest in or ability to use a spoon, even with pre-loaded food.',
    'Your child seems to have significant difficulty controlling hand movements when trying to bring a utensil to their mouth.',
    'Your child has trouble with other fine motor tasks as well, such as stacking blocks, turning pages, or picking up small objects.',
  ],
  whenToActNow: [
    'Your child previously used utensils and has lost the ability or coordination to do so.',
    'Your child has difficulty bringing food to their mouth by any method (hands or utensils) by 18 months, which could indicate a motor planning or coordination concern.',
  ],
  relatedMilestones: [
    'fine-motor-self-feeding',
    'fine-motor-grasping',
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Eighteen Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};

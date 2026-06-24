import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-utensil-refusal',
  title: 'My Toddler Refuses to Use Utensils',
  category: 'feeding',
  searchTerms: [
    'toddler won\'t use utensils',
    'toddler refuses fork and spoon',
    'toddler only eats with hands',
    'when should toddler use utensils',
    'toddler utensil refusal',
    'toddler eating with fingers only',
    'toddler won\'t hold spoon',
    'teaching toddler to use fork',
    'toddler utensil milestones',
    'toddler eating with hands normal',
  ],
  quickAnswer:
    'It is completely normal for toddlers to prefer eating with their hands even when they are capable of using utensils. Most children begin showing interest in spoons around 12-15 months and can use a fork with some accuracy by age 2-3. Using hands is often faster and more efficient for a hungry toddler. Forcing utensil use can create mealtime power struggles. Continue offering utensils at every meal, model their use, and trust that your toddler will use them more consistently as their fine motor skills and interest develop.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most toddlers begin showing interest in holding a spoon around 12-15 months, but their accuracy is very limited. They may dip the spoon in food, bring it to their mouth upside down, and end up using their other hand to eat off the spoon. This is completely normal and should be encouraged even though it is messy. Offer a preloaded spoon (you scoop, they bring it to their mouth) alongside finger foods. Do not take the spoon away when they struggle — practice builds skill. Let them eat with their hands when they prefer; this is about exploration, not etiquette.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Spoon accuracy improves during this period, and many toddlers begin to attempt using a fork (stabbing is a gratifying action). However, fingers remain the preferred and most efficient eating method. This is normal and expected. Provide toddler-appropriate utensils with short, chunky handles that are easy to grip. Some toddlers refuse utensils because the ones offered are too large, too small, or have an uncomfortable grip. Let your toddler experiment with different utensils. Continue modeling utensil use yourself during family meals.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, most children can use a spoon with reasonable accuracy and stab food with a fork. However, many children continue to use their hands for some foods, and this is perfectly acceptable. Utensil use becomes more consistent with maturity, not pressure. If your child is 3 years old and cannot hold or use a spoon at all despite exposure and practice, mention this to your pediatrician as it may indicate a fine motor skill concern. Otherwise, trust the process — table manners will come with time.',
    },
  ],
  whenNormal: [
    'Your toddler uses utensils sometimes but prefers hands most of the time',
    'Your toddler plays with utensils at meals — banging, stirring, waving — rather than eating with them',
    'Your toddler can use a spoon but switches to hands when they are very hungry or when the food is easier to grab',
    'Your toddler uses utensils at some meals but not others',
  ],
  whenToMention: [
    'Your toddler is 2 years old and shows no interest in holding a spoon despite regular exposure',
    'Your toddler seems to have difficulty grasping utensils due to hand weakness or coordination problems',
    'Your toddler avoids touching food with their hands AND refuses utensils, severely limiting their eating',
  ],
  whenToActNow: [
    'Your toddler has lost the ability to hold objects or bring food to their mouth after previously being able to',
    'Your toddler\'s hands tremble significantly when trying to hold utensils',
    'Your toddler cannot pick up any small objects with their fingers, indicating potential fine motor delay',
  ],
  relatedMilestones: [
    'feeding-self-feeding',
    'fine-motor-grasp',
    'fine-motor-manipulation',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-self-feeding-messy-normal',
    'throwing-food',
    'toddler-food-texture-sensitivity',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Self-Feeding.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Fine Motor Skills.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Healthy Eating Habits: Starting from the Beginning.',
      url: 'https://www.zerotothree.org/resource/healthy-eating-habits/',
    },
  ],
};

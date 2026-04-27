import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-chronic-diarrhea',
  title: "Toddler Chronic Diarrhea (Toddler's Diarrhea)",
  category: 'digestive',
  searchTerms: ['toddler chronic diarrhea','toddler diarrhea for weeks','toddler\'s diarrhea','chronic loose stools toddler','toddler diarrhea lasting weeks','functional diarrhea toddler','toddler persistent diarrhea','toddler diarrhea no other symptoms','toddler diarrhea won\'t stop','chronic nonspecific diarrhea of childhood','when to worry about toddler diarrhea','toddler watery poop for weeks'],
  quickAnswer: 'Chronic diarrhea in an otherwise healthy, thriving toddler is very common and usually diagnosed as "toddler\'s diarrhea" (chronic nonspecific diarrhea of childhood). The child has 3-6+ loose stools per day, often with undigested food, but is growing well, eating normally, and is otherwise healthy. The most effective fix is dietary: limit juice to 4oz/day or less, increase dietary fat, and ensure adequate fiber. If your child is also losing weight, has blood in stool, or seems unwell, further evaluation is needed.',
  byAge: [
    { ageRange: '6-12 months', context: 'During the transition to solid foods, stool consistency varies widely. High-fiber fruits and juices can keep stools very soft. If your baby has consistently loose stools but is gaining weight normally, there is usually no cause for concern. Reducing fruit juice and observing which foods affect stool consistency can help identify patterns.' },
    { ageRange: '1-2 years', context: 'This is peak age for toddler\'s diarrhea. A typical pattern is 3-6 loose stools per day, often with visible undigested food. The first stool of the day is usually the best formed, with stools becoming progressively looser. Your toddler feels fine and is growing normally. The most effective dietary changes: limit juice, offer whole-fat dairy and healthy fats, and ensure adequate fiber.' },
    { ageRange: '2-3 years', context: 'Symptoms often persist but usually begin improving. Artificial sweeteners like sorbitol (in sugar-free snacks and some juices) are poorly absorbed and can cause persistent loose stools. Check labels for sorbitol, mannitol, and xylitol. A balanced diet with adequate fat, fiber, and limited liquid sugar usually firms stools over time.' },
    { ageRange: '3-5 years', context: 'Most children outgrow toddler\'s diarrhea by age 3-4. If loose stools persist despite dietary changes, your pediatrician may test for celiac disease (a simple blood test), food allergies, or parasitic infections like Giardia (common in daycare). Stool calprotectin can screen for inflammatory bowel disease if clinically indicated.' },
  ],
  whenNormal: ['Your toddler has soft to loose stools but is growing well and has a healthy appetite','Stools contain undigested food particles like corn, peas, or raisins - this is common and harmless','Loose stools improve when you reduce juice and increase dietary fat','No blood, mucus, or severe pain with the loose stools'],
  whenToMention: ['Loose stools accompanied by poor weight gain or weight loss','Blood, mucus, or unusually foul smell consistently in stools','Abdominal bloating, gas, or intermittent pain alongside chronic loose stools','Dietary changes have not improved consistency after several weeks'],
  whenToActNow: ['Signs of dehydration - decreased urination, dry lips, lethargy, no tears when crying','Bloody diarrhea with fever or severe abdominal pain','Your child is losing weight noticeably or appears pale and fatigued'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['diarrhea','baby-lactose-intolerance-signs','food-allergy-signs','dehydration-signs-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Diarrhea. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx' },
    { org: 'NIH', citation: 'NIDDK. Chronic Diarrhea in Children.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea-children' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fruit Juice Recommendations. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Where-We-Stand-Fruit-Juice.aspx' },
  ],
};

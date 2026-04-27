import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-abdominal-pain',
  title: 'Toddler Complaining of Tummy Pain',
  category: 'digestive',
  searchTerms: ['toddler tummy pain','toddler stomach ache','toddler belly hurts','child abdominal pain','toddler says tummy hurts every day','toddler stomach pain after eating','chronic stomach ache toddler','toddler belly pain at night','what causes toddler stomach pain','toddler abdominal pain no fever','when to worry about toddler stomach pain','recurrent abdominal pain child'],
  quickAnswer: 'Tummy pain is one of the most common complaints in toddlers. The most frequent cause by far is constipation, which can cause significant discomfort even when parents do not realize their child is constipated. Other common causes include gas, overeating, mild stomach bugs, food intolerances, and stress. While most tummy pain in toddlers is not serious, certain patterns - pain that wakes your child from sleep, pain localized to the right lower side, or pain with high fever and vomiting - should be evaluated promptly.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies cannot say their tummy hurts, so watch for pulling legs up to chest, arching back, or crying inconsolably. Gas, constipation (especially after starting solids), and mild viral illnesses are the most common causes. If your baby has brief episodes of intense colicky pain followed by calm periods, especially with blood in stool, seek immediate attention as this could indicate intussusception.' },
    { ageRange: '1-2 years', context: 'As toddlers begin to verbalize, they may point to their belly or say "owie." Constipation is the number one cause of recurrent abdominal pain at this age. Even daily poopers may not be fully emptying, causing backup and cramping. Other common causes include gas from certain foods, swallowed air from drinking too fast, and mild gastroenteritis.' },
    { ageRange: '2-3 years', context: 'Toddlers often describe many types of discomfort as "tummy pain." A child who says their tummy hurts then runs off to play is less concerning than one doubled over and unable to be distracted. Constipation remains the top cause. Mesenteric lymphadenitis (swollen abdominal lymph nodes from a recent cold) can mimic more serious conditions.' },
    { ageRange: '3-5 years', context: 'Recurrent abdominal pain is very common in preschoolers and is often "functional" - meaning no underlying disease, but the pain is real. Triggers include starting preschool, a new sibling, or diet changes. Functional pain is diagnosed when pain comes and goes, the child grows normally, and there are no red flags like weight loss, blood in stool, or nighttime pain that wakes the child.' },
  ],
  whenNormal: ['Brief tummy aches that resolve after passing gas or having a bowel movement','Belly pain around mealtimes in a child who eats quickly','Complaint of tummy pain in a child otherwise happy, playing, and eating normally','Mild stomachache during a cold that resolves as illness passes'],
  whenToMention: ['Tummy pain occurs frequently (multiple times per week) and affects daily activities','Chronic constipation with pain not improving with dietary changes','Pain related to specific foods suggesting food intolerance','Your child is losing weight or growing more slowly than expected'],
  whenToActNow: ['Severe constant abdominal pain making your child unable to walk or be comforted','Pain with high fever, green vomit, bloody stool, or rigid tender abdomen','Pain localized to the right lower abdomen, which could indicate appendicitis'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['constipation','toddler-chronic-diarrhea','intussusception-signs','food-allergy-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Chronic Abdominal Pain in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Chronic-Abdominal-Pain-in-Children.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Constipation. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx' },
    { org: 'NIH', citation: 'NIDDK. Irritable Bowel Syndrome in Children.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome-children' },
  ],
};

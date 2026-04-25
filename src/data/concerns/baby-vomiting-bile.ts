import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-bile',
  title: 'My Baby Is Vomiting Green or Yellow (Bile)',
  category: 'medical',
  searchTerms: [
    'baby vomiting green',
    'baby vomiting bile',
    'baby green vomit',
    'baby yellow vomit',
    'baby bilious vomiting',
    'newborn green vomit',
    'baby bright green spit up',
    'baby vomiting green liquid',
    'baby vomiting yellow bile',
    'baby bile colored vomit emergency',
  ],
  quickAnswer:
    'Bilious (green or bright yellow) vomiting in a baby is a medical emergency until proven otherwise. While older children and adults occasionally vomit bile with prolonged vomiting, in infants, green vomiting can be a sign of a bowel obstruction such as malrotation with volvulus, which requires emergency surgery. If your baby vomits green or bright yellow fluid, seek immediate medical attention.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Bilious vomiting in a newborn is a surgical emergency until proven otherwise. The most concerning cause is malrotation with midgut volvulus, where the intestine twists on itself, cutting off blood supply. This can lead to intestinal death within hours if not treated surgically. Other causes include duodenal atresia, jejunal atresia, or other congenital bowel obstructions. If your newborn vomits green or bright yellow fluid, go to the emergency room immediately. Do not wait to see if it happens again.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Bilious vomiting remains a red flag at any age in infancy. While some conditions like malrotation can present later in infancy, intussusception (where one segment of bowel telescopes into another) also becomes a possibility, typically after 3 months. Bilious vomiting combined with abdominal distension, bloody stools (currant jelly appearance), lethargy, or inconsolable crying requires emergency evaluation with imaging studies such as an upper GI contrast study or ultrasound.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, occasional green-tinged spit-up after eating green vegetables (like peas or spinach) is not the same as bilious vomiting and is harmless. True bilious vomiting is bright green or fluorescent yellow and occurs without recent green food intake. Intussusception peaks at 5-9 months and classically presents with intermittent severe abdominal pain (episodes of drawing up legs and crying), vomiting that may become bilious, and eventually bloody stools. This requires emergency treatment.',
    },
    {
      ageRange: '1-3 years',
      context:
        'In toddlers, bilious vomiting is still concerning but has a broader differential. Prolonged vomiting from gastroenteritis can eventually produce bile-colored vomit after the stomach has been emptied. This is less alarming in the context of an obvious stomach bug where the child was initially vomiting food, then clear fluid, then bile. However, bilious vomiting as a first or early symptom, or bilious vomiting with severe abdominal pain and distension, still requires urgent evaluation to rule out obstruction.',
    },
  ],
  whenNormal: [
    'Green-tinged spit-up after eating green-colored foods like pureed peas, spinach, or green beans in an older infant',
    'Yellow-tinted vomit after prolonged vomiting from a clear stomach virus, where the child initially vomited food and then clear fluid first (context of known gastroenteritis in a child over 1 year)',
  ],
  whenToMention: [
    'Your toddler has an episode of bile-colored vomiting during a stomach virus but is otherwise keeping down some fluids and not in significant pain',
    'You are unsure whether your baby\'s vomit is truly green/bilious or just a food-related color',
  ],
  whenToActNow: [
    'Any episode of bright green or bright yellow (bilious) vomiting in a baby under 12 months, especially without preceding food-related explanation  -  go to the emergency room immediately, as this could indicate a life-threatening bowel obstruction',
    'Bilious vomiting at any age combined with severe abdominal pain, abdominal distension, bloody stools, lethargy, or your child appearing very ill  -  this is a surgical emergency requiring immediate evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Vomiting in Infants.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Vomiting.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Juang D, Snyder CL. Neonatal Bowel Obstruction. Surgical Clinics of North America, 2012.',
      url: 'https://publications.aap.org/pediatrics',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Intestinal Obstruction: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/intestinal-obstruction/symptoms-causes/syc-20351460',
    },
  ],
};

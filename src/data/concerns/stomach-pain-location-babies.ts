import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'stomach-pain-location-babies',
  title: "Stomach Pain in Babies: Where It Hurts Matters",
  category: 'digestive',
  searchTerms: [
    'baby stomach pain',
    'baby belly hurts',
    'where does baby stomach hurt',
    'toddler tummy ache location',
    'baby pain around belly button',
    'baby lower belly pain',
    'baby upper stomach pain',
    'baby cries when belly pressed',
    'toddler points to stomach pain',
  ],
  quickAnswer:
    'Babies and young toddlers cannot tell you exactly where their tummy hurts, but observing their behavior and the location of tenderness can offer helpful clues. Generalized, mild tummy discomfort is very common and usually caused by gas, constipation, or a stomach virus. Pain that is localized to a specific area, severe, or accompanied by other symptoms like vomiting, fever, or distension may need medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies express abdominal discomfort primarily through crying, pulling their legs up toward their chest, arching their back, and general fussiness. Gas and infant colic are the most common causes of belly discomfort in this age group. Gently pressing on different areas of the abdomen can sometimes help you identify whether the discomfort is generalized or localized. A soft, non-tender belly is reassuring, even in a fussy baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gas pain remains common. Babies at this age may also develop gastroesophageal reflux symptoms that can cause upper abdominal or chest discomfort, often noticeable after feeding. Constipation can cause lower abdominal discomfort. If your baby seems to have pain that is consistently in one area, is getting worse, or is accompanied by vomiting or changes in stool, contact your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, new types of tummy discomfort may appear. Food intolerances can cause cramping and generalized belly pain. Stomach viruses become more common and cause diffuse abdominal pain with diarrhea and sometimes vomiting. Intussusception, though rare, most commonly occurs between 6-36 months and causes sudden, severe, intermittent pain where the baby screams, draws up their legs, then has quiet intervals between episodes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may begin to point to where it hurts, though their localization is not always accurate. Pain around the belly button is extremely common and is usually benign, often related to gas or constipation. Pain in the lower right abdomen could indicate appendicitis, though this is rare under age 2. Pain accompanied by a bulge in the groin area may suggest an inguinal hernia. Any persistent, severe, or localized pain in a toddler deserves medical evaluation.',
    },
  ],
  whenNormal: [
    'Your baby has brief episodes of fussiness with a soft belly that resolves with passing gas, a bowel movement, or being comforted',
    'Your toddler complains of a tummy ache around the belly button that comes and goes and does not prevent normal activity',
    'Belly discomfort is clearly related to constipation, gas, or a mild stomach bug and improves within a day or two',
  ],
  whenToMention: [
    'Your baby or toddler has recurrent abdominal pain that seems to follow a pattern, such as after eating specific foods or at specific times of day',
    'Your child has belly pain along with changes in stool pattern, such as persistent constipation or chronic loose stools',
    'Abdominal discomfort is interfering with your child\'s feeding, sleep, or general well-being on a regular basis',
    'Your toddler points to a specific area of pain that is not around the belly button',
  ],
  whenToActNow: [
    'Your baby has sudden, severe, intermittent pain with episodes of screaming and drawing up legs, followed by quiet or limp intervals, which could indicate intussusception',
    'Your child\'s abdomen is rigid, very distended, and painful to touch, especially if accompanied by vomiting (particularly green or bilious vomiting)',
    'Abdominal pain is accompanied by blood in the stool, high fever, inability to keep fluids down, or a visible bulge in the groin area',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Abdominal Pain in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Abdominal-Pain-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Intussusception in Children. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/000958.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Constipation in Infants and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
  ],
};

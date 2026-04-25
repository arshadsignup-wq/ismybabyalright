import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'pallor-baby',
  title: 'My Baby Looks Very Pale',
  category: 'medical',
  searchTerms: [
    'baby looks pale',
    'baby pale skin',
    'baby anemia symptoms',
    'baby lips look pale',
    'baby pale and tired',
    'baby white skin suddenly',
    'baby lighter than usual',
    'baby pallor causes',
    'baby pale around mouth',
    'baby iron deficiency signs',
  ],
  quickAnswer:
    'Babies\' skin color can vary naturally depending on temperature, activity, and genetics. However, true pallor (unusual paleness of the skin, lips, or nail beds) can sometimes indicate anemia, poor circulation, or an infection. If your baby looks noticeably paler than usual, especially in the lips, gums, inner eyelids, or palms, it is worth mentioning to your pediatrician.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns naturally have varying skin tones and it is common for skin color to fluctuate. Physiologic anemia of infancy occurs around 6-8 weeks when the baby\'s red blood cell production temporarily dips as fetal hemoglobin is replaced. This is normal and usually mild. However, significant pallor in a newborn, especially with poor feeding, rapid breathing, or lethargy, should be evaluated promptly as it could indicate a more serious anemia or infection.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Mild pallor around 2-3 months may coincide with the normal physiologic nadir (lowest point) of hemoglobin levels. Premature babies are more prone to anemia of prematurity and may appear paler earlier. If your baby looks pale but is feeding well, gaining weight, and active, your doctor may simply monitor with blood work. Persistent or worsening pallor warrants checking a complete blood count.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Iron deficiency anemia becomes the most common cause of pallor at this age, especially if the baby is primarily breastfed without iron supplementation or has been introduced to cow\'s milk too early. Babies who were premature or had low birth weight are at higher risk. Iron-fortified cereals and iron-rich foods introduced at 6 months help prevent this. Your pediatrician will screen for anemia around 9-12 months.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who drink excessive amounts of cow\'s milk (more than 24 ounces per day) and eat few iron-rich foods are at significant risk for iron deficiency anemia, which can cause pallor, fatigue, and irritability. A balanced diet with iron-rich foods such as meat, beans, and fortified cereals is important. If your child appears pale, a simple blood test can check hemoglobin and iron levels.',
    },
  ],
  whenNormal: [
    'Your baby\'s skin looks lighter due to being indoors, cold, or just waking up but the lips, gums, and nail beds are pink',
    'Your baby has naturally fair skin and the inner eyelids and palms appear well-perfused (pink)',
    'Brief episodes of pallor during crying or straining that quickly resolve',
    'Your baby is active, feeding well, and gaining weight normally',
  ],
  whenToMention: [
    'Your baby seems consistently paler than usual over several days, especially in the lips, gums, and inner eyelids',
    'Your baby seems more tired, irritable, or less interested in feeding than usual along with looking pale',
    'Your baby is older than 6 months and eating few iron-rich foods or drinking large amounts of cow\'s milk',
  ],
  whenToActNow: [
    'Sudden pallor accompanied by rapid breathing, fast heartbeat, lethargy, or poor feeding, as this could indicate severe anemia, bleeding, or serious illness requiring emergency evaluation',
    'Your baby looks gray or ashen and is limp, unresponsive, or struggling to breathe, which requires calling 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Baker RD, Greer FR, Committee on Nutrition. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children. Pediatrics, 2010.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65342/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Anemia in Children and Teens.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Anemia-in-Children-and-Teens.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Iron Deficiency Anemia: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/iron-deficiency-anemia/symptoms-causes/syc-20355034',
    },
  ],
};

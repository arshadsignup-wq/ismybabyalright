import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-heartburn-severe',
  title: 'Severe Heartburn and GERD in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'heartburn pregnancy',
    'acid reflux pregnant',
    'GERD pregnancy',
    'burning chest pregnant',
    'indigestion pregnancy',
    'severe heartburn pregnant',
    'antacids safe pregnancy',
    'heartburn won\'t go away pregnant',
    'acid reflux third trimester',
    'pregnancy heartburn relief',
    'reflux worse at night pregnant',
  ],
  quickAnswer:
    'Heartburn (gastroesophageal reflux) is extremely common in pregnancy, affecting up to 80% of pregnant people. It is caused by the hormone progesterone relaxing the valve between the stomach and esophagus, and by the growing uterus pushing up against the stomach. While very uncomfortable, it is not harmful to you or your baby.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Heartburn may begin early due to rising progesterone levels that relax the lower esophageal sphincter. Eating smaller, more frequent meals, avoiding spicy or acidic foods, and not lying down right after eating can help. Many antacids are safe in pregnancy, but check with your provider before taking any medication.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Heartburn often worsens as the uterus grows and progesterone levels continue to rise. Elevating the head of your bed, eating your last meal 2-3 hours before lying down, and wearing loose-fitting clothing can help. Over-the-counter antacids containing calcium carbonate are generally considered safe.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'This is when heartburn is typically worst, as the large uterus pushes the stomach upward. If lifestyle changes and antacids are not enough, your provider may recommend H2 blockers or proton pump inhibitors that are considered safe in pregnancy. Heartburn usually resolves quickly after delivery.',
    },
  ],
  whenNormal: [
    'Burning sensation behind the breastbone after eating or when lying down',
    'Symptoms worsen with large meals, spicy foods, citrus, or chocolate',
    'Heartburn improves with antacids, smaller meals, or sleeping with head elevated',
    'Symptoms are worse in the third trimester and improve after delivery',
  ],
  whenToMention: [
    'Heartburn is severe and not controlled by diet changes and over-the-counter antacids',
    'You are losing weight because eating triggers too much discomfort',
    'You experience difficulty swallowing or feel food getting stuck',
  ],
  whenToActNow: [
    'Severe chest pain that feels different from typical heartburn, especially if accompanied by shortness of breath, jaw or arm pain, or sweating',
    'Vomiting blood or dark material that looks like coffee grounds',
    'Severe upper abdominal pain, especially on the right side, which could indicate a more serious condition like HELLP syndrome or gallstones',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Problems of the Digestive System. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gastroesophageal Reflux Disease in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK532930/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-constipation', 'pregnancy-gallstones'],
};

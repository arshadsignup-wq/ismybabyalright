import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-sciatica',
  title: 'Sciatic Nerve Pain in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'sciatica pregnancy',
    'sciatic nerve pain pregnant',
    'shooting pain down leg pregnant',
    'hip and leg pain pregnancy',
    'numbness leg pregnancy',
    'tingling leg pregnancy',
    'buttock pain pregnant',
    'nerve pain pregnancy',
    'piriformis syndrome pregnancy',
    'sciatica relief pregnancy',
  ],
  quickAnswer:
    'Sciatica during pregnancy involves pain that radiates along the sciatic nerve, from the lower back through the buttock and down the leg. It affects roughly 1% of pregnant people and is caused by the growing uterus putting pressure on the sciatic nerve, hormonal changes loosening joints, or the baby\'s position.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Sciatica may begin in the second trimester as the uterus grows and weight increases. The pain typically radiates from the lower back or buttock down one leg and may feel like burning, tingling, or numbness. Gentle stretching, prenatal yoga, warm compresses, and sleeping on your side with a pillow between your knees can help manage symptoms.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Sciatica is most common in the third trimester when the baby\'s weight puts the most pressure on pelvic nerves. The baby\'s head can rest directly on the sciatic nerve. Swimming, prenatal physical therapy, and pelvic tilts may provide relief. Avoid prolonged sitting or standing. A maternity support belt can help distribute weight more evenly.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Sciatica usually resolves after delivery once pressure on the nerve is relieved. If pain persists beyond a few weeks postpartum, talk to your provider. Gentle core strengthening exercises and physical therapy can support recovery.',
    },
  ],
  whenNormal: [
    'Pain radiates from the lower back or buttock down one leg and improves with rest or position changes',
    'Tingling or numbness is mild and intermittent',
    'Symptoms began or worsened as pregnancy progressed',
    'Pain improves with gentle stretching or warm compresses',
  ],
  whenToMention: [
    'Pain is severe enough to limit your mobility or daily activities',
    'Numbness or weakness in your leg is persistent',
    'Home remedies are not providing adequate relief',
  ],
  whenToActNow: [
    'You experience sudden loss of feeling or muscle control in one or both legs',
    'You have difficulty controlling your bladder or bowels along with back or leg pain',
    'Severe back pain is accompanied by fever or other signs of infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Back Pain During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/back-pain-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sciatica. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK507908/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Sciatica - Symptoms and Causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/sciatica/symptoms-causes/syc-20377435',
    },
  ],
  relatedConcernSlugs: ['pregnancy-back-pain', 'pregnancy-hip-pain'],
};

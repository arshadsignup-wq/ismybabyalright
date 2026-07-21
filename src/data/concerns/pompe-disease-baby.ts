import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pompe-disease-baby',
  title: 'Pompe Disease in Babies',
  category: 'medical',
  searchTerms: [
    'pompe disease baby',
    'pompe disease symptoms infant',
    'glycogen storage disease type II baby',
    'infantile pompe disease',
    'enlarged heart baby cardiomyopathy',
    'floppy baby pompe disease',
    'pompe disease newborn screening',
    'acid maltase deficiency baby',
    'enzyme replacement therapy pompe',
    'pompe disease treatment baby',
  ],
  quickAnswer:
    'Pompe disease (glycogen storage disease type II) is a rare inherited disorder where the body cannot break down glycogen properly, causing it to build up in muscles. The infantile-onset form is the most severe, presenting in the first months of life with a dangerously enlarged heart (cardiomyopathy), significant muscle weakness (floppy baby), and breathing and feeding difficulties. Pompe disease is on the federal Recommended Uniform Screening Panel (RUSP), so most babies in the United States are screened at birth. Enzyme replacement therapy with alglucosidase alfa has dramatically improved outcomes when started early.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Babies with infantile-onset Pompe disease may appear normal at birth, but symptoms often develop rapidly in the first weeks of life. A chest X-ray or echocardiogram may reveal a massively enlarged heart (hypertrophic cardiomyopathy), which is the hallmark of infantile Pompe disease. Newborn screening detects the enzyme deficiency before symptoms develop, allowing immediate treatment. If your baby\'s newborn screen is positive for Pompe disease, confirmatory testing (enzyme activity and genetic testing) will be done urgently.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Without treatment, babies with infantile Pompe disease develop progressive muscle weakness — they feel floppy when picked up, have poor head control, and may have difficulty feeding. Breathing becomes labored because both the diaphragm and chest muscles are weakened. The heart continues to enlarge, which can lead to heart failure. Enzyme replacement therapy (ERT) with alglucosidase alfa, started in the first weeks of life, has been shown to dramatically reduce heart size and improve survival. Babies on ERT still need close cardiology and pulmonology monitoring.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies diagnosed and started on ERT early often show significant improvement in heart size and function within the first few months of treatment. Motor development may be delayed compared to peers, but many babies on early treatment achieve milestones like head control and rolling. Physical therapy is an important part of care. Some babies develop antibodies against the replacement enzyme, which can reduce treatment effectiveness — your metabolic team will monitor for this.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With early and ongoing ERT, many babies with infantile Pompe disease show continued motor progress, though they often remain behind their peers in gross motor skills. Regular echocardiograms monitor heart size and function. Hearing should be monitored, as some children with Pompe disease develop hearing loss. Respiratory function is followed closely, and some children may need breathing support during sleep. Dietary support and speech therapy may be needed for feeding difficulties.',
    },
    {
      ageRange: '1 year and beyond',
      context:
        'Long-term management of Pompe disease involves biweekly ERT infusions, regular cardiology and pulmonology follow-up, and ongoing physical and occupational therapy. Newer enzyme therapies (avalglucosidase alfa) may offer improved muscle uptake. Gene therapy clinical trials are underway and represent a potential future cure. Children with late-onset Pompe disease (which presents later in childhood or adulthood) have milder symptoms primarily affecting skeletal muscles, without the severe cardiomyopathy seen in infantile Pompe.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for Pompe disease',
    'An initial positive screen was followed by confirmatory testing that showed normal enzyme levels — false positives occur, particularly with pseudodeficiency alleles',
    'Your baby with Pompe disease is on enzyme replacement therapy and their heart size is stable or decreasing, with improving motor function',
    'Your baby has a mild heart murmur that has been evaluated and is not related to cardiomyopathy',
  ],
  whenToMention: [
    'Your baby received an abnormal Pompe disease result on newborn screening — follow up promptly for confirmatory testing',
    'Your baby seems unusually floppy or weak and is having difficulty with feeding or breathing',
    'Your baby on Pompe treatment seems to be plateauing or regressing in motor skills despite therapy',
    'There is a family history of Pompe disease and you want testing for your baby',
  ],
  whenToActNow: [
    'Your newborn has screened positive for Pompe disease — confirmatory testing should be arranged urgently because early treatment is critical for outcomes',
    'Your baby has a rapidly enlarging heart, severe muscle weakness, and difficulty breathing — these signs need immediate cardiac and metabolic evaluation',
    'Your baby with known Pompe disease develops signs of heart failure such as rapid breathing, poor feeding, excessive sweating during feeds, or blue-tinged lips',
    'Your baby is extremely floppy, cannot lift their head at all, and has labored breathing — seek emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'newborn-screening-abnormal-results',
    'floppy-baby-syndrome',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pompe Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/pompe-disease/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Pompe Disease Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/pompe-disease',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. Pompe Disease Newborn Screening Working Group: Evidence-based Guidelines. ACMG, 2017.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
  ],
};

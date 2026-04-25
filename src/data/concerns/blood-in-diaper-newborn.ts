import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'blood-in-diaper-newborn',
  title: 'I Found Blood in My Newborn\'s Diaper',
  category: 'medical',
  searchTerms: [
    'blood in baby diaper',
    'newborn blood in diaper',
    'pink stain in baby diaper',
    'red spots in newborn diaper',
    'urate crystals newborn',
    'baby bleeding diaper',
    'newborn girl blood in diaper',
    'brick dust in diaper',
    'baby blood in stool',
    'newborn vaginal bleeding',
  ],
  quickAnswer:
    'Finding blood or red-tinged spots in a newborn\'s diaper is alarming but often has a benign explanation. Urate crystals (brick-red or orange powder) are very common in the first few days and are harmless. Newborn girls can have a small vaginal discharge or spotting from maternal hormones. However, frank blood in the stool or persistent bleeding always needs medical evaluation.',
  byAge: [
    {
      ageRange: '0-5 days',
      context:
        'In the first few days of life, the most common cause of reddish-orange staining in a diaper is urate crystals, which appear as brick-red or salmon-colored powder. These are concentrated uric acid deposits from normal kidney function and are especially common before a mother\'s milk fully comes in. They can look alarming but are harmless and typically resolve once the baby is feeding well and producing more dilute urine. Newborn girls may also have a small amount of blood-tinged vaginal discharge (pseudomenstruation) due to withdrawal from maternal estrogen, which is entirely normal.',
    },
    {
      ageRange: '5 days - 2 weeks',
      context:
        'If urate crystals persist beyond the first 3-5 days, it may indicate the baby is not getting enough milk and is becoming dehydrated. Track wet and dirty diapers carefully. By day 4-5, a well-fed newborn should have at least 6 wet diapers and 3-4 stools per day. Blood streaks in the stool at this age could be from swallowed maternal blood during breastfeeding (from cracked nipples) or from a small anal fissure caused by straining.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Blood in the stool during this period most commonly comes from a tiny anal fissure (a small tear near the anus) or from cow\'s milk protein intolerance if the baby is formula-fed or if the breastfeeding mother consumes dairy. Allergic colitis from cow\'s milk protein is one of the more common causes of blood-streaked stools in otherwise healthy-appearing infants. Your pediatrician may recommend a dietary trial to determine if this is the cause.',
    },
    {
      ageRange: '3 months+',
      context:
        'Blood in the diaper at this age could be from anal fissures, food protein intolerance, or rarely, more serious conditions such as intussusception (a bowel obstruction) or Meckel\'s diverticulum. Any new onset of blood in the stool, especially if accompanied by vomiting, lethargy, or jelly-like (currant jelly) stools, requires urgent medical evaluation.',
    },
  ],
  whenNormal: [
    'Brick-red or orange powder (urate crystals) in the diaper during the first 2-3 days of life in a feeding newborn',
    'A small amount of blood-tinged or mucousy vaginal discharge in a newborn girl during the first 1-2 weeks',
    'Occasional tiny streak of bright red blood on the surface of a stool from a known anal fissure that your pediatrician has evaluated',
  ],
  whenToMention: [
    'Urate crystals persist beyond day 3-4 or your baby is not having enough wet diapers',
    'You notice blood-streaked stools that recur, even if the baby seems otherwise well',
    'Your baby seems fussier than usual or is spitting up more along with blood in the stool',
  ],
  whenToActNow: [
    'There is a large amount of frank blood in the diaper, the stool looks like currant jelly, or the blood is dark and tarry, as these can indicate a serious condition such as intussusception or internal bleeding',
    'Your baby is vomiting, lethargic, refusing feeds, has a distended abdomen, or appears pale along with blood in the diaper',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Blood in Infant\'s Stool.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Blood-in-Infant-Stool.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Diaper Check: What\'s Normal and What\'s Not.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Pooping-By-the-Numbers.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Blood in Baby\'s Stool: Causes. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/symptoms/rectal-bleeding/basics/causes/sym-20050740',
    },
  ],
};

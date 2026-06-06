import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-hiccups-excessive',
  title: 'Frequent Hiccups in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn hiccups excessive',
    'baby hiccups all the time',
    'newborn hiccups after every feed',
    'baby hiccups too much',
    'newborn constant hiccups',
    'infant hiccups frequent',
    'baby hiccups wont stop',
    'newborn hiccups normal',
    'baby hiccups during sleep',
    'how to stop newborn hiccups',
  ],
  quickAnswer:
    'Frequent hiccups in newborns are extremely common and almost always harmless. Hiccups are caused by sudden contractions of the diaphragm, often triggered by feeding, swallowing air, or temperature changes. Most newborns hiccup several times a day, and the hiccups typically resolve on their own within a few minutes. They are not painful or distressing for your baby.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Hiccups are very common in newborns and even begin before birth (you may have felt them during pregnancy). They are caused by the immature diaphragm contracting involuntarily, often after feeding or when the stomach is full. Hiccups are more common in this age group because the nervous system is still developing. They do not bother your baby, even if they seem persistent. Burping your baby during and after feeds, feeding in an upright position, and ensuring a good latch can help reduce the frequency.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Hiccups may continue to be frequent but are completely normal. As your baby\'s digestive and nervous systems mature, hiccups typically become less frequent. If hiccups interrupt feeding, you can pause, burp your baby, and resume once they stop. Avoid old remedies like giving water to a newborn to stop hiccups.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hiccups usually become less frequent by this age as your baby\'s diaphragm and nervous system mature. They may still occur after meals or when your baby swallows air, and this remains normal. If hiccups seem to cause significant distress or are associated with frequent vomiting, discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Hiccups continue to be a normal occurrence, though less frequent than in the newborn period. They should not interfere with feeding or daily activities. Persistent, prolonged hiccups that last hours or seem to cause pain are rare and should be mentioned to your doctor.',
    },
  ],
  whenNormal: [
    'Hiccups that occur several times a day, especially after feeding',
    'Hiccups that resolve on their own within a few minutes',
    'Baby does not appear distressed or in pain during hiccups',
    'Hiccups during sleep that do not wake the baby',
  ],
  whenToMention: [
    'Hiccups seem to consistently interfere with feeding or cause significant spitting up',
    'Hiccups are accompanied by frequent projectile vomiting or poor weight gain',
    'You are concerned about the frequency or duration of your baby\'s hiccups',
  ],
  whenToActNow: [
    'Hiccups that last for extended periods (hours) and cause obvious distress, poor feeding, or breathing difficulties',
    'Hiccups accompanied by arching of the back, persistent crying during feeds, or other signs that could indicate gastroesophageal reflux disease (GERD)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hiccups, Sneezes, and Yawns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Newborn Health: What to Expect. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20047438',
    },
  ],
  relatedConcernSlugs: ['baby-hiccups', 'hiccups-wont-stop', 'newborn-spit-up-vs-vomit'],
};

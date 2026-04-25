import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'white-poop',
  title: 'Baby White or Pale Poop',
  category: 'digestive',
  searchTerms: [
    'baby white poop',
    'baby pale stool',
    'baby chalky white poop',
    'baby clay colored stool',
    'baby light colored poop',
    'baby grey poop',
    'baby stool no color',
    'white poop baby biliary atresia',
    'baby pale yellow poop',
    'baby cream colored stool',
    'baby acholic stool',
  ],
  quickAnswer:
    'White, pale, chalky, or clay-colored stool in a baby is a MEDICAL EMERGENCY that requires immediate evaluation. Normal stool gets its color from bile, which is produced by the liver. White or very pale stools can indicate that bile is not reaching the intestines, which may be a sign of biliary atresia, a serious liver condition that requires urgent surgical treatment within the first weeks of life for the best outcomes.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'In the first days, meconium transitions to normal yellow or green stools. If your newborn\'s stools do not transition and instead become pale, white, or clay-colored, this is an urgent warning sign. Biliary atresia, a condition where the bile ducts are blocked or absent, typically presents in the first 2-8 weeks of life. Early detection and surgery (Kasai procedure) ideally before 30-45 days of age leads to significantly better outcomes.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'This is the critical window when biliary atresia most commonly presents. Along with pale or white stools, you may notice your baby developing jaundice that is not resolving (yellow skin and eyes), dark tea-colored urine, or an enlarged liver. If you see pale, white, or clay-colored stools at ANY point, do not wait for the next scheduled appointment. Contact your doctor or go to the emergency department immediately.',
    },
    {
      ageRange: '2-12 months',
      context:
        'While biliary atresia is most commonly diagnosed before 8 weeks, pale stools at any age in infancy are concerning and require urgent evaluation. Other liver and bile duct conditions, though rare, can also cause pale stools. Some parents find it helpful to use a stool color card (available from your pediatrician) to compare their baby\'s stool color to reference images.',
    },
    {
      ageRange: '12-36 months',
      context:
        'White or very pale stools in a toddler are uncommon but still require prompt medical evaluation. Possible causes include liver disease, bile duct obstruction, or certain medications. An isolated very light stool after consuming a large amount of milk or dairy is not the same as a truly white or clay-colored stool, but if you are unsure, always err on the side of getting it checked.',
    },
  ],
  whenNormal: [
    'There is essentially no situation where truly white, chalky, or clay-colored stool is considered normal in a baby or child',
    'A very pale yellow stool may occasionally occur after a milk-heavy diet in an older child, but even pale stools deserve attention',
    'If you are unsure whether the stool is pale or just a lighter shade of normal, take a photo in natural light and show it to your pediatrician',
  ],
  whenToMention: [
    'This concern should not wait for a routine mention. White or very pale stools require urgent evaluation. See whenToActNow below.',
  ],
  whenToActNow: [
    'Your baby has white, chalky, clay-colored, or very pale stools at ANY age. This is a potential sign of biliary atresia or another serious liver or bile duct condition. Contact your pediatrician immediately or go to the emergency department.',
    'Your baby has pale stools along with jaundice (yellow skin or eyes) that is worsening or not resolving after 2 weeks of age, or dark tea-colored urine',
    'Your baby has persistently pale stools even without other symptoms. Do not wait to see if it resolves. Early intervention for biliary atresia is critical for the best outcomes, and the surgical window narrows significantly after 60-90 days of life.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Biliary Atresia.',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Jaundice. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Jaundice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Jaundice and Kernicterus.',
      url: 'https://www.cdc.gov/ncbddd/jaundice/index.html',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'biliary-atresia-signs',
  title: 'Biliary Atresia Signs in Babies',
  category: 'medical',
  searchTerms: [
    'baby jaundice not going away',
    'biliary atresia signs',
    'baby pale white stool',
    'newborn yellow eyes not improving',
    'baby dark urine light poop',
    'prolonged jaundice baby',
    'biliary atresia symptoms infant',
    'baby clay colored stool',
  ],
  quickAnswer:
    'Biliary atresia is a rare but serious liver condition in newborns where the bile ducts are blocked or absent, preventing bile from draining from the liver. It affects about 1 in 10,000 to 15,000 births. Early detection is critical — the Kasai procedure, performed ideally before 60 days of life, can restore bile flow and significantly improve outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Biliary atresia typically becomes apparent in the first 2-8 weeks of life. The hallmark signs are jaundice (yellowing of skin and eyes) that doesn\'t resolve by 2 weeks of age, pale or clay-colored stools, and dark urine. Babies may initially appear healthy and feed well. If your baby still looks yellow after 2 weeks, or has pale stools at any point, seek medical evaluation right away — early surgery produces much better outcomes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If biliary atresia is not detected early, babies develop worsening jaundice, an enlarged and hardened liver, poor weight gain, and increasingly distended abdomens from fluid accumulation (ascites). The spleen may also enlarge. At this stage, the Kasai procedure is less likely to be successful, but it may still be attempted. Some babies may need to be evaluated for liver transplantation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, untreated biliary atresia leads to progressive liver damage (cirrhosis). Babies may show significant failure to thrive, severe abdominal swelling, easy bruising, and fat-soluble vitamin deficiencies. Many children diagnosed or treated late will require liver transplantation. If your baby had an early Kasai procedure, this period involves close monitoring of liver function.',
    },
    {
      ageRange: '12 months+',
      context:
        'Children who had a successful Kasai procedure may still develop complications and require ongoing liver monitoring throughout childhood. Some will eventually need a liver transplant. With modern surgical techniques and transplantation, the long-term prognosis has improved significantly, with most children surviving into adulthood.',
    },
  ],
  whenNormal: [
    'Mild newborn jaundice that resolves by 2 weeks of age (3 weeks in breastfed babies)',
    'Your baby has yellow or seedy mustard-colored stools (normal breastfed baby stool)',
    'Your baby\'s skin color is returning to normal and stools are not pale or white',
    'Your baby is feeding well and gaining weight appropriately',
  ],
  whenToMention: [
    'Your baby\'s jaundice has not resolved by 2 weeks of age (or 3 weeks if breastfed)',
    'Your baby has stools that are lighter than usual, particularly pale yellow or chalky',
    'Your baby\'s urine is consistently darker than expected',
  ],
  whenToActNow: [
    'Your baby has pale, clay-colored, or white stools — this requires same-day evaluation regardless of age',
    'Your baby has persistent jaundice beyond 2 weeks with an enlarged belly or poor feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Biliary Atresia. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Jaundice in Newborns: Parent FAQs. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Jaundice.aspx',
    },
  ],
};

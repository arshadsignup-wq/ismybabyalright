import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-hair-loss',
  title: 'Postpartum Hair Loss',
  category: 'maternal',
  searchTerms: [
    'postpartum hair loss',
    'hair falling out after baby',
    'losing hair after pregnancy',
    'hair shedding postpartum',
    'thinning hair after birth',
    'how long does postpartum hair loss last',
    'clumps of hair falling out after delivery',
    'bald spots after pregnancy',
  ],
  quickAnswer:
    'Postpartum hair loss, medically known as telogen effluvium, affects up to 50% of women and typically begins around two to four months after delivery. During pregnancy, elevated estrogen levels keep hair in its growth phase longer than usual, and after birth, the drop in hormones causes all that "extra" hair to shed at once. This is temporary, and hair usually returns to its normal fullness by your baby\'s first birthday.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Hair loss has usually not yet started at this stage. Your hair may still look and feel thick from the pregnancy growth phase. The hormonal shift that triggers shedding is underway, but the visible effects typically take a couple of months to appear.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Some women begin to notice increased hair shedding toward the end of this period, though for many it has not started yet. Maintaining a healthy diet rich in protein, iron, and vitamins supports overall hair health. There is no way to prevent this shedding, as it is a normal physiological process.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'This is when many women first notice significant hair shedding. You may find large amounts of hair on your pillow, in the shower drain, or in your hairbrush. While alarming, this is the peak shedding period and it is completely normal. The hair you are losing is the "extra" hair that was retained during pregnancy.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Hair shedding typically peaks around three to four months postpartum and then gradually slows. You may notice thinner areas, particularly around the temples and hairline. New baby hairs should start growing in, which you may notice as short, fine hairs along your hairline. Gentle hair care and avoiding tight hairstyles can help minimize breakage.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'For most women, the excessive shedding has stopped by six to nine months postpartum, and the new growth is filling in. Your hair should be returning to its pre-pregnancy thickness and cycle. If shedding continues beyond 12 months or you notice patchy bald spots rather than overall thinning, consult your provider, as thyroid disorders or nutritional deficiencies may need to be ruled out.',
    },
  ],
  whenNormal: [
    'Increased hair shedding beginning two to four months after delivery',
    'Finding larger-than-usual amounts of hair in your brush, shower, or on your pillow',
    'Overall thinning rather than patchy bald spots',
    'Gradual slowing of shedding and new hair growth appearing by six to nine months',
  ],
  whenToMention: [
    'Hair shedding continues heavily beyond 12 months postpartum',
    'You notice distinct bald patches rather than general thinning',
    'You are experiencing other symptoms such as fatigue, weight changes, or feeling cold, which could suggest a thyroid issue',
    'The shedding feels excessive and is significantly affecting your emotional well-being',
  ],
  whenToActNow: [
    'You develop sudden, patchy hair loss with red or scaly scalp, which could indicate a different condition requiring treatment',
    'You have significant hair loss accompanied by other concerning symptoms such as rapid weight loss, heart palpitations, or extreme fatigue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Skin Conditions During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'Hughes EC, Saleh D. Telogen Effluvium. StatPearls, National Library of Medicine, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430848/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Body After Baby: The First 6 Weeks. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Your-Body-After-Baby-The-First-6-Weeks.aspx',
    },
  ],
};

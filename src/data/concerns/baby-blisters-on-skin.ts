import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-blisters-on-skin',
  title: 'Blisters on Baby\'s Skin - Causes and When to Worry',
  category: 'skin',
  searchTerms: ['baby blisters on skin','baby skin blisters','newborn blisters','baby blister on lip','baby blister on hand','baby blister from sucking','baby friction blister','baby burn blister','baby blister from shoes','toddler blisters hands feet mouth','baby water blisters','baby blister on finger'],
  quickAnswer: 'Blisters on a baby\'s skin can have many causes ranging from harmless (sucking blisters, friction blisters) to conditions requiring medical attention (burns, infections like hand-foot-and-mouth disease, impetigo, or herpes). A single blister on a newborn\'s lip or hand from sucking is very common and harmless. Multiple blisters, blisters with fever, blisters that spread rapidly, or blisters in a newborn under 1 month should be evaluated by a doctor.',
  byAge: [
    { ageRange: '0-3 months', context: 'Sucking blisters are extremely common in newborns - they appear on the lips, hands, or wrists from vigorous sucking (sometimes even in the womb). These are painless, clear, and resolve on their own. Do not pop them. Newborn acne and erythema toxicum can also cause small fluid-filled bumps. However, blisters in a newborn under 1 month that are widespread, appear infected (cloudy fluid, red base), or are accompanied by fever need urgent evaluation, as neonatal herpes is a medical emergency.' },
    { ageRange: '3-12 months', context: 'Friction blisters from new shoes, rough surfaces, or crawling are common as babies become more mobile. Drool rash can cause small blisters around the mouth and chin. Hand-foot-and-mouth disease (coxsackievirus) causes painful blisters on hands, feet, and in the mouth alongside fever - this is very common in babies who are in daycare. Burns from hot liquids, surfaces, or sunburn can also cause blisters and need appropriate first aid and potentially medical evaluation.' },
    { ageRange: '12-24 months', context: 'Toddlers encounter more causes of blisters: hand-foot-and-mouth disease (extremely common in daycare settings), impetigo (honey-colored crusted blisters from bacterial infection), insect bite reactions (some children develop blisters at bite sites), allergic contact dermatitis (from plants, products), and friction blisters from increased activity. Most heal on their own, but impetigo requires antibiotic treatment and hand-foot-and-mouth requires comfort care.' },
    { ageRange: '2-3 years', context: 'At this age, blisters are most commonly from hand-foot-and-mouth disease, chicken pox (if unvaccinated), friction, burns, or insect bites. Chicken pox blisters are itchy, start on the trunk, and progress through stages (red bumps, blisters, crusts). If your child is vaccinated, breakthrough chicken pox is usually very mild. Allergic reactions to plants like poison ivy cause linear blisters where the plant touched the skin. Do not pop blisters - they protect the healing skin beneath.' },
  ],
  whenNormal: ['A single blister on your newborn\'s lip or hand from sucking that is clear and painless','A small friction blister from new shoes or crawling that is not spreading','A few blisters on hands, feet, and mouth with mild fever in a child over 6 months - likely hand-foot-and-mouth disease','A blister at the site of an insect bite that is not spreading or showing signs of infection'],
  whenToMention: ['Multiple blisters appearing over a few days without a clear cause','Blisters that are cloudy, yellow, or have honey-colored crusts - suggesting bacterial infection','Blisters in the mouth that are preventing your child from eating or drinking','A blister that is not healing after a week or seems to be getting worse'],
  whenToActNow: ['Any blisters in a newborn under 1 month, especially with fever, lethargy, or poor feeding - neonatal herpes is a medical emergency','Blisters from a burn - run cool (not cold) water for 20 minutes and seek medical evaluation for any burn larger than a coin','Rapidly spreading blisters with high fever, your child looks very unwell, or blisters are filled with blood','Blisters around the eyes or in the genital area'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-rash-around-mouth','baby-rash-in-skin-folds'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Rashes and Skin Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand-Foot-and-Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Blisters. MedlinePlus.', url: 'https://medlineplus.gov/blisters.html' },
  ],
};

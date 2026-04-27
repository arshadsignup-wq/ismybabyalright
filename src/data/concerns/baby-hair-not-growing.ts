import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hair-not-growing',
  title: 'Baby Hair Not Growing - Bald Baby Concerns',
  category: 'physical',
  searchTerms: ['baby hair not growing','baby still bald','when does baby hair grow','baby no hair','baby bald spot','toddler thin hair','baby hair falling out','baby hair loss','baby bald back of head','baby hair growth timeline','when do babies get hair','baby hair slow growing'],
  quickAnswer: 'Hair growth in babies varies enormously and is primarily genetic. Some babies are born with thick hair and some are nearly bald until age 2-3. Both are completely normal. Many babies lose their newborn hair in the first few months (telogen effluvium) and grow new hair that may be a different color or texture. A bald spot on the back of the head from friction (sleeping position) is very common and resolves once the baby is more mobile. Most "bald babies" grow a full head of hair by age 2-3.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborn hair loss is extremely common. The hair your baby was born with often falls out between 1-4 months as the growth cycle resets. Some babies shed dramatically and look nearly bald, while others lose hair gradually. This is called telogen effluvium and is caused by the hormonal shift after birth. The new hair that grows in may be a completely different color and texture from the birth hair. Do not use any products to try to speed hair growth - time is the only solution.' },
    { ageRange: '3-6 months', context: 'A bald spot on the back of the head is very common at this age from friction against the crib mattress. This is not a sign of nutritional deficiency - it is a mechanical result of spending time on their back (which is the correct safe sleep position). As your baby starts rolling and spending more time sitting and on their tummy, the bald spot fills in. New hair growth should be starting to appear, though it may be very fine and light.' },
    { ageRange: '6-12 months', context: 'Hair growth varies tremendously at this age. Some babies have thick hair by 6 months and others are still mostly bald. Both are normal. Hair texture and color may continue to change. If your baby has distinct patches of complete hair loss (as opposed to overall thin/sparse hair), this could indicate alopecia areata (an autoimmune condition) or ringworm (a fungal infection) and should be evaluated. Overall thin or slow-growing hair is almost always just genetics.' },
    { ageRange: '12-36 months', context: 'Most babies have visible hair by their first birthday, but some take until age 2-3 to develop a full head of hair. This is particularly common in babies with very fair, fine hair. If your toddler has no hair growth at all by age 2, or if they develop sudden bald patches, discuss with your pediatrician. Nutritional deficiencies (iron, zinc, biotin) can affect hair growth but are usually accompanied by other symptoms. Compulsive hair pulling (trichotillomania) can emerge in toddlerhood and causes patchy loss.' },
  ],
  whenNormal: ['Your baby lost their newborn hair and new hair is slowly growing in','Your baby has a bald spot from sleeping on their back - this is normal and resolves with increased mobility','Hair growth is slow but steady, with new fine hair visible','Family members also had sparse hair as babies that filled in by age 2-3'],
  whenToMention: ['Your baby has distinct circular bald patches (not from friction) that could indicate alopecia or ringworm','Your toddler\'s hair seems to be thinning or falling out rather than growing in','Your baby has no hair growth at all by age 2','You notice your toddler pulling out their own hair'],
  whenToActNow: ['Sudden hair loss alongside other symptoms like weight changes, fatigue, or skin changes','Bald patches with redness, scaling, or broken hairs (possible fungal infection)','Hair loss accompanied by overall poor growth, pallor, or your child seeming unwell'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-dry-scalp-flakes','baby-red-ring-rash','toddler-nutritional-deficiency-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby\'s Hair Growth. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Hair Loss. MedlinePlus.', url: 'https://medlineplus.gov/hairloss.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Alopecia Areata. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Alopecia-Areata.aspx' },
  ],
};

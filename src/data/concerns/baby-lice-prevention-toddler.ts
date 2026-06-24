import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-lice-prevention-toddler',
  title: 'Head Lice Prevention and Treatment for My Toddler',
  category: 'skin',
  searchTerms: [
    'toddler lice prevention',
    'baby head lice treatment',
    'lice in toddler hair',
    'lice shampoo safe for babies',
    'head lice toddler daycare',
    'lice treatment under 2',
    'nit comb baby',
    'lice prevention toddler',
    'baby lice symptoms',
    'how to check toddler for lice',
  ],
  quickAnswer:
    'Head lice are common in young children, especially those in daycare or group settings, and are spread primarily through direct head-to-head contact. Lice are not a sign of poor hygiene and do not carry disease. For children under 2, manual removal with a fine-toothed nit comb is the recommended first-line treatment since many over-the-counter lice treatments are not approved for this age group. Prevention includes avoiding head-to-head contact and not sharing hats, brushes, or pillows.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Head lice in infants under 12 months is relatively uncommon because they have less hair and fewer social contacts. However, babies can contract lice from siblings, parents, or caregivers through direct contact. If you find lice on your infant, the safest treatment is manual removal: wet the hair, apply conditioner to slow the lice down, and use a fine-toothed metal nit comb to remove lice and nits (eggs) systematically. Repeat every 3-4 days for 2-3 weeks. Do not use any over-the-counter chemical lice treatments on infants without specific guidance from your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in daycare are at increased risk for lice transmission. Symptoms include persistent head scratching, irritability, visible nits (tiny white or yellow-brown eggs attached to hair shafts near the scalp), and live lice (tiny tan or grayish insects). Nit combing with conditioner remains the safest approach. Some pediatricians may approve specific over-the-counter treatments for children over 2 — always check age recommendations and consult your doctor first. Wash bedding, hats, and recently used clothing in hot water (130 degrees F) and dry on high heat. Items that cannot be washed can be sealed in a plastic bag for 2 weeks.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, over-the-counter permethrin-based lice treatments (such as Nix) are generally considered safe and are the standard first-line chemical treatment. Apply according to package directions and follow up with nit combing. A second treatment 7-10 days later is typically recommended to kill any newly hatched lice. If over-the-counter treatments fail after 2 complete rounds, your pediatrician can prescribe stronger treatments. Prevention includes teaching children not to share hats, hair accessories, and pillows, and performing routine head checks if there is a lice outbreak at daycare.',
    },
  ],
  whenNormal: [
    'Your child has head lice and is otherwise healthy — lice do not carry disease and are a nuisance, not a health emergency.',
    'You find a few nits (eggs) after treatment — continue combing and retreating per your treatment schedule.',
    'Your child\'s scalp is slightly irritated from scratching — this will resolve as the lice are eliminated.',
  ],
  whenToMention: [
    'Over-the-counter treatments have failed after two complete rounds and lice are still present.',
    'Your child is under 2 and you want guidance on safe treatment options.',
    'Your child has open sores on their scalp from scratching that may be infected.',
  ],
  whenToActNow: [
    'Your child\'s scalp has signs of bacterial infection from scratching: spreading redness, warmth, swelling, pus, or fever — see your pediatrician, as antibiotics may be needed.',
    'Your child has had an allergic reaction to a lice treatment product: widespread rash, difficulty breathing, or significant swelling — seek emergency care.',
    'You are unsure whether what you are seeing is lice, and your child\'s scalp condition is worsening — see your pediatrician for proper diagnosis.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nail-care-trimming-fear', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Head Lice Treatment and Prevention',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Signs-of-Lice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Head Lice Treatment',
      url: 'https://www.cdc.gov/lice/head/treatment.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Pediculosis Capitis (Head Lice)',
      url: 'https://medlineplus.gov/headlice.html',
    },
  ],
};

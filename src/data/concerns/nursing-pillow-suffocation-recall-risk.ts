import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nursing-pillow-suffocation-recall-risk',
  title: 'Nursing Pillow Suffocation Risk and Product Recalls',
  category: 'sleep',
  searchTerms: [
    'Boppy recall suffocation',
    'nursing pillow recall',
    'infant lounger recall',
    'baby lounger suffocation deaths',
    'Boppy Newborn Lounger recall',
    'nursing pillow suffocation',
    'infant sleep product recall',
    'Leachco Podster recall',
    'Fisher-Price incline sleeper recall',
    'baby product recall safety',
  ],
  quickAnswer:
    'Multiple nursing pillows and infant lounging products have been recalled after being linked to infant suffocation deaths. The most notable recall was the Boppy Company\'s Newborn Lounger in 2021, linked to at least 8 infant deaths. These products were never intended for sleep but were frequently used that way. In 2022, the CPSC issued a final rule requiring that all infant sleep products meet federal safety standards for cribs. If you own a recalled product, stop using it immediately and contact the manufacturer for a refund. The safest sleep surface for a baby is always a firm, flat mattress with a fitted sheet.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Young babies are at the highest risk because they lack the strength and coordination to reposition themselves if their face becomes pressed against soft fabric. Products that have been recalled or associated with infant deaths include: Boppy Newborn Lounger (recalled 2021), Fisher-Price Rock \'n Play Sleeper (recalled 2019, linked to over 100 deaths), Kids2 rocking sleepers (recalled 2019), and various inclined sleepers. Check the CPSC website (cpsc.gov) to see if any of your baby products have been recalled. Never use a product that has been recalled, even with supervision.',
    },
    {
      ageRange: '4-8 months',
      context:
        'As babies become more mobile, the risk profile changes but does not decrease. A baby who can roll may roll off a pillow or become wedged against the side. Some recalled products, like the Rock \'n Play, were popular because babies seemed to sleep well in them, which led to continued use despite recall notices. The incline of these products was found to increase the risk of positional asphyxia (where the baby\'s airway is blocked by the position of their head and neck). If you have a recalled product, stop using it regardless of how well your baby sleeps in it. The CPSC maintains a list of alternatives.',
    },
    {
      ageRange: '8-12 months',
      context:
        'While some parents transition away from loungers and nursing pillows by this age, the products may still be in the home and accessible. Ensure recalled products are destroyed or returned to the manufacturer so they cannot be accidentally used by another caregiver or found by the mobile baby. Register new baby products with the manufacturer so you will be notified directly in case of a recall. The CPSC\'s recall website and app allow you to search for recalled products and sign up for alerts. Share recall information with grandparents, babysitters, and other caregivers.',
    },
  ],
  whenNormal: [
    'You have checked your baby products against the CPSC recall list and none are recalled.',
    'You use nursing pillows only for supervised feeding and never for sleep.',
    'Your baby sleeps on a firm, flat surface with no soft bedding or pillows.',
  ],
  whenToMention: [
    'You are unsure whether a baby product you own has been recalled and want help checking.',
    'You are struggling to transition your baby to a safe sleep surface after using a lounger or inclined sleeper.',
    'You want to discuss safe sleep guidelines and approved sleep products.',
  ],
  whenToActNow: [
    'You realize your baby has been sleeping on a recalled product - stop use immediately and contact the manufacturer.',
    'You find your baby in a dangerous sleep position on a lounger, pillow, or inclined surface - move them to a safe surface immediately.',
    'Your baby shows signs of breathing difficulty or appears to have been in a compromised position on any sleep surface.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nursing-pillow-sleep-environment-danger',
    'baby-sleeping-face-down',
    'baby-only-sleeps-being-held',
  ],
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Boppy Newborn Lounger Recall.',
      url: 'https://www.cpsc.gov/Recalls/2021/The-Boppy-Company-Recalls-Over-3-Million-Original-Newborn-Loungers-Infant-Suffocation-Risk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Recommendations for Reducing Infant Deaths. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CPSC',
      citation:
        'CPSC. Infant Sleep Products Safety Standard (Final Rule), 2022.',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2022/CPSC-Approves-Major-New-Federal-Safety-Standard-for-Infant-Sleep-Products',
    },
  ],
};

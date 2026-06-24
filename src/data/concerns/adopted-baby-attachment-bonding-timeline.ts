import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'adopted-baby-attachment-bonding-timeline',
  title: 'Bonding and Attachment Timeline for Adopted Babies',
  category: 'behavior',
  searchTerms: [
    'adopted baby bonding timeline',
    'how long to bond with adopted baby',
    'adopted baby not attaching',
    'attachment after adoption',
    'adopted infant bonding tips',
    'foster baby attachment',
    'adoption bonding concerns',
    'adopted newborn bonding',
    'when will adopted baby attach to me',
    'adopted baby prefers someone else',
  ],
  quickAnswer:
    'Bonding with an adopted baby is a real and achievable process, but it may follow a different timeline than biological bonding. Many adoptive parents feel a strong connection quickly, while for others it develops gradually over weeks or months. Consistent, responsive caregiving is the single most important factor in building secure attachment, regardless of how your family was formed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns adopted at birth can form secure attachments just as strongly as biological children. Skin-to-skin contact, responsive feeding, and consistent caregiving help build the foundation. Your baby is learning to associate your voice, smell, and touch with safety and comfort. It is completely normal if bonding does not feel instant - many biological parents also experience a gradual deepening of connection over the first weeks.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies adopted during this period may need extra time to adjust to new caregivers, especially if they experienced institutional care or multiple placements. You may notice your baby initially seems withdrawn or, conversely, overly friendly with everyone. Both responses are normal stress reactions. Continue providing consistent, warm, and predictable care. Most babies begin showing clear attachment behaviors - preferring you, seeking comfort from you - within several weeks to months of placement.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers adopted at this age have already formed some attachment patterns and may grieve the loss of previous caregivers. They may show challenging behaviors such as food hoarding, sleep difficulties, or indiscriminate friendliness. These are adaptive behaviors, not rejection. Building trust takes time - typically 6 to 12 months of consistent caregiving before secure attachment behaviors become reliable. Working with a therapist experienced in adoption attachment can be very helpful.',
    },
  ],
  whenNormal: [
    'Your adopted baby takes a few weeks to several months before showing a clear preference for you over strangers.',
    'Your baby seems watchful or cautious in new situations - this is a healthy sign of developing attachment.',
    'You as a parent do not feel an instant overwhelming bond - attachment often builds gradually through daily caregiving routines.',
    'Your baby initially has some difficulty with sleep, feeding, or self-regulation during the transition period.',
  ],
  whenToMention: [
    'Your baby has been with you for more than 6 months and still does not show any preference for you over unfamiliar adults.',
    'Your child shows indiscriminate friendliness - going happily to any stranger without checking back with you.',
    'Your baby seems chronically withdrawn, avoids eye contact, and does not seek comfort when hurt or distressed.',
  ],
  whenToActNow: [
    'Your child shows no social engagement with anyone - no eye contact, no response to voices, no interest in interaction at any age.',
    'Your child is engaging in self-harming behaviors such as head-banging, severe hair-pulling, or biting themselves.',
    'Your child has experienced significant trauma and you are noticing severe developmental regression or dissociative behaviors.',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-engagement',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'attachment-concerns',
    'baby-daycare-separation-crying',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Palpalation and Bonding with Your Adopted Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/adoption-and-foster-care/Pages/Palpalation-and-Bonding.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Building Attachment with Your Adopted Child.',
      url: 'https://www.zerotothree.org/resource/building-attachment-with-your-adopted-child/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Attachment in Adopted Children: A Systematic Review. Child Development, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30345530/',
    },
  ],
};

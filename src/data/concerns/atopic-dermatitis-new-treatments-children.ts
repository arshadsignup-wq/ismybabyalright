import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'atopic-dermatitis-new-treatments-children',
  title: 'New Treatments for Atopic Dermatitis (Eczema) in Children',
  category: 'skin',
  searchTerms: [
    'new eczema treatment baby',
    'atopic dermatitis treatment children',
    'dupixent for kids eczema',
    'biologic therapy eczema child',
    'severe eczema baby treatment options',
    'new cream for baby eczema',
    'JAK inhibitor eczema child',
    'eczema not responding to steroid cream baby',
    'latest eczema treatment infant',
    'crisaborole baby eczema',
  ],
  quickAnswer:
    'Treatment for atopic dermatitis in children has advanced significantly in recent years. While moisturizers and topical steroids remain first-line treatments, newer options include non-steroidal topical medications (like crisaborole), biologic therapies (like dupilumab, approved for children 6 months and older), and JAK inhibitors. Most children\'s eczema is well-managed with basic skin care and mild topical treatments, but these newer options provide hope for moderate-to-severe cases.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Eczema often first appears in infancy, typically on the cheeks, scalp, and outer limbs. First-line treatment at this age is frequent moisturizing with fragrance-free emollients and short courses of low-potency topical steroids for flares. Bathing practices matter - short lukewarm baths followed immediately by moisturizer (soak and seal). Crisaborole (Eucrisa), a non-steroidal anti-inflammatory, is FDA-approved for ages 3 months and older. Identifying and avoiding triggers like harsh soaps or certain fabrics is also important.',
    },
    {
      ageRange: '6-24 months',
      context:
        'If eczema is moderate to severe and not adequately controlled with topical therapies, dupilumab (Dupixent) is now FDA-approved for children as young as 6 months with moderate-to-severe atopic dermatitis. This biologic is given as an injection and works by targeting specific immune pathways involved in eczema. It has shown significant improvement in skin clearance and itch reduction in clinical trials. Your dermatologist or allergist can help determine if this option is appropriate for your child.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Toddlers with persistent eczema have several treatment options. Topical calcineurin inhibitors (tacrolimus and pimecrolimus) can be used for sensitive areas like the face and skin folds where steroid use should be minimized. For more severe cases, JAK inhibitors (topical ruxolitinib is approved for ages 2+) offer another non-steroidal option. Wet wrap therapy, dilute bleach baths, and allergy testing to identify triggers can also be part of a comprehensive management plan.',
    },
  ],
  whenNormal: [
    'Your baby has mild eczema patches that respond well to regular moisturizing and occasional low-potency steroid cream.',
    'Eczema flares coincide with identifiable triggers like dry weather, certain foods, or illness, and resolve with treatment.',
    'Your child\'s eczema is mostly controlled but requires consistent daily skin care routines.',
  ],
  whenToMention: [
    'Your baby\'s eczema is not responding to over-the-counter moisturizers and low-potency topical steroids.',
    'Eczema is affecting your child\'s sleep, mood, or quality of life despite current treatment.',
    'You are using topical steroids frequently (more than 2 weeks continuously) and the eczema keeps returning.',
  ],
  whenToActNow: [
    'Your baby\'s eczema patches are oozing, crusting yellow, or show signs of infection (spreading redness, warmth, pus).',
    'Your baby develops sudden widespread blistering skin lesions that could indicate eczema herpeticum (a serious viral infection of eczematous skin).',
    'Your child is in severe distress from itching, has open wounds from scratching, or is refusing to eat or sleep due to skin discomfort.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'allergy-neurodivergence-link-children',
    'hives',
    'rash-after-antibiotics',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Atopic Dermatitis: Management and Treatment Updates. Pediatrics, 2023.',
      url: 'https://publications.aap.org/pediatrics/article/153/1/e2023065102/196419',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Dupilumab in Children Aged 6 Months to 5 Years with Atopic Dermatitis. NEJM, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36260794/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
  ],
};

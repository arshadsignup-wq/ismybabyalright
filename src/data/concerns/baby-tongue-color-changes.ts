import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tongue-color-changes',
  title: "Baby's Tongue Looks an Unusual Color",
  category: 'physical',
  searchTerms: [
    'baby tongue color',
    'baby tongue red',
    'baby tongue yellow',
    'baby geographic tongue',
    'baby tongue has patches',
    'baby tongue map-like pattern',
    'baby tongue smooth patches',
    'baby tongue coating',
    'baby tongue looks weird',
    'baby bright red tongue',
    'strawberry tongue baby',
  ],
  quickAnswer:
    'Baby tongues can show various color patterns that look unusual but are usually harmless. A white coating is often milk residue or thrush. Geographic tongue (smooth, red patches with white borders that shift location) affects about 1-3% of children and is completely benign. A bright red "strawberry tongue" can occur with scarlet fever or Kawasaki disease. Yellow coating may relate to mild dehydration or digestion. Most tongue color variations in babies are harmless.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The most common tongue concern at this age is white patches, which are usually either milk residue (wipes off easily) or oral thrush (thick white patches that do not wipe off and leave red spots underneath). A healthy baby tongue should be pink. Yellow or brownish coating can occur with mild dehydration or after certain medications. Geographic tongue (irregular smooth patches that shift around) can appear at any age and is harmless.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solid foods, temporary tongue discoloration from food dyes and colored foods is common. Berries, beets, and carrots can temporarily stain the tongue. Geographic tongue may become more noticeable during teething or illness. A bright red tongue with raised bumps ("strawberry tongue") during a fever should be evaluated for scarlet fever or Kawasaki disease.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may develop a coated tongue with illness, especially when mouth breathing with a cold. Geographic tongue continues to be the most common benign tongue variation. Some toddlers get a condition called "black hairy tongue" from antibiotic use or bismuth-containing medications - it looks alarming but is harmless and resolves on its own. Any painful tongue sores or blisters should be evaluated.',
    },
  ],
  whenNormal: [
    'White milk residue on the tongue that easily wipes away',
    'Geographic tongue (smooth patches with white borders that change position over days)',
    'Temporary food staining from colored foods',
    'A slightly coated tongue during illness that clears when the child recovers',
  ],
  whenToMention: [
    'White patches on the tongue that do not wipe off (possible thrush)',
    'Geographic tongue that seems to bother your child or is accompanied by mouth pain',
    'A persistently coated tongue with bad breath',
    'Any tongue changes that concern you at a well-child visit',
  ],
  whenToActNow: [
    'A bright red, bumpy "strawberry tongue" with high fever (could indicate scarlet fever or Kawasaki disease)',
    'A very swollen tongue that interferes with breathing or feeding',
    'Painful blisters or ulcers on the tongue with fever and refusal to eat',
    'A very dry, cracked tongue with signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['thrush', 'baby-white-tongue', 'scarlet-fever-baby', 'kawasaki-disease-signs'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Oral Health. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Geographic Tongue. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK554399/',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Mouth and Teeth Conditions.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
  ],
};

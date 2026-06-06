import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cellulitis-spreading-redness',
  title: 'Cellulitis (Spreading Skin Infection) in Baby',
  category: 'skin',
  searchTerms: ['baby cellulitis', 'baby spreading redness skin', 'baby skin infection spreading', 'infant cellulitis', 'baby red swollen warm skin', 'baby skin infection red streak', 'toddler cellulitis', 'baby skin infection getting bigger', 'cellulitis baby treatment', 'baby infected skin warm'],
  quickAnswer: 'Cellulitis is a bacterial skin infection that causes a spreading area of redness, warmth, swelling, and pain. It occurs when bacteria enter through a break in the skin. Cellulitis in babies always requires antibiotic treatment and should be evaluated by a pediatrician promptly. If it spreads rapidly or is accompanied by fever, seek urgent care.',
  byAge: [
    { ageRange: '0-3 months', context: 'Cellulitis in newborns is a medical urgency. Young infants with immature immune systems can become seriously ill from skin infections. Any area of spreading redness with warmth and swelling in a baby under 3 months should be evaluated immediately, especially if accompanied by fever.' },
    { ageRange: '3-6 months', context: 'Cellulitis may develop around scratches, insect bites, or eczema patches where the skin barrier is broken. The affected area will be red, warm, swollen, and tender to touch. Drawing a line around the edge of the redness with a pen can help you and your doctor track whether it is spreading.' },
    { ageRange: '6-12 months', context: 'As babies crawl and explore, skin injuries become more common, providing entry points for bacteria. Periorbital cellulitis (around the eye) is a particular concern in this age group and can occur after insect bites or sinus infections. Any redness or swelling around the eye needs same-day evaluation.' },
    { ageRange: '12-24 months', context: 'Toddlers frequently get minor skin injuries that can become infected. Cellulitis can develop from bug bites, cuts, or eczema patches. Watch for redness that expands beyond the immediate injury site, increasing warmth, and swelling. Prompt antibiotic treatment usually resolves cellulitis effectively.' },
  ],
  whenNormal: ['A small area of redness immediately around a fresh scratch or bug bite that is not spreading is likely normal inflammation, not cellulitis'],
  whenToMention: ['An area of redness, warmth, and swelling is expanding beyond the initial injury site', 'A red area feels warm and painful to touch and is getting bigger over hours', 'An insect bite site develops increasing redness and swelling beyond the immediate area'],
  whenToActNow: ['Any suspected cellulitis in a baby under 3 months old', 'Rapidly spreading redness with red streaks heading toward the body, fever, or the child appearing unwell', 'Redness and swelling around the eye, which could be periorbital or orbital cellulitis', 'Your baby has cellulitis and is not improving after 48 hours on antibiotics'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cellulitis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cellulitis.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Cellulitis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549770/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Group A Streptococcal Infections.', url: 'https://www.cdc.gov/group-a-strep/index.html' },
  ],
  relatedConcernSlugs: ['baby-skin-infection-staph', 'baby-skin-abscess-boil', 'baby-mrsa-skin-infection', 'impetigo-baby'],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-stomach-bug-recovery',
  title: 'Toddler Stomach Bug Recovery - How Long Does It Last?',
  category: 'digestive',
  searchTerms: ['toddler stomach bug recovery','toddler stomach virus how long','baby gastroenteritis recovery','toddler vomiting and diarrhea duration','stomach flu toddler','rotavirus recovery time','norovirus toddler','toddler diarrhea after stomach bug','how long does stomach bug last baby','toddler post-gastroenteritis syndrome','toddler stomach bug won\'t eat','when to worry stomach bug toddler'],
  quickAnswer: 'Most stomach bugs (viral gastroenteritis) in toddlers last 3-7 days. Vomiting typically resolves within 1-2 days, while diarrhea can persist for 5-14 days. The most important thing is preventing dehydration - offer small, frequent sips of fluids (breast milk, formula, water, or electrolyte solutions like Pedialyte). It is normal for appetite to be reduced during and for 1-2 weeks after a stomach bug. Post-infectious diarrhea (loose stools for up to 4 weeks after the illness) is common and usually resolves on its own.',
  byAge: [
    { ageRange: '0-6 months', context: 'Stomach bugs are less common in young babies, especially breastfed babies who receive protective antibodies. If your baby under 6 months has vomiting or diarrhea, contact your pediatrician - young babies dehydrate quickly. Continue breastfeeding or formula feeding through the illness. Do not switch to a different formula or dilute formula unless your doctor advises it. Signs of dehydration to watch for: fewer than 6 wet diapers per day, dry mouth, no tears, sunken fontanelle.' },
    { ageRange: '6-12 months', context: 'Common stomach viruses at this age include rotavirus (if not yet vaccinated) and norovirus. Offer breast milk, formula, or small amounts of Pedialyte frequently. You can continue solids if your baby wants them - the BRAT diet (bananas, rice, applesauce, toast) is no longer specifically recommended, but bland foods are easier on the stomach. Avoid fruit juice during illness. If vomiting is severe, wait 1-2 hours then offer tiny sips (1 teaspoon every 5 minutes) to avoid triggering more vomiting.' },
    { ageRange: '12-24 months', context: 'Toddlers are most commonly hit by norovirus and rotavirus. Vomiting usually stops within 24-48 hours, but diarrhea can last 1-2 weeks. After the vomiting phase, offer their regular diet. Dairy may temporarily worsen diarrhea because the virus can damage the lactose-digesting enzyme in the gut - if diarrhea is persistent, a brief period of reduced dairy may help. Push fluids: water, diluted juice, Pedialyte, or Pedialyte popsicles. Full appetite may not return for 1-2 weeks.' },
    { ageRange: '2-3 years', context: 'Older toddlers can tell you when they feel nauseous and can usually drink more cooperatively. Post-gastroenteritis syndrome (persistent loose stools and poor appetite for 2-4 weeks after the acute illness) is common and resolves on its own. If diarrhea persists beyond 4 weeks, your pediatrician should evaluate for other causes. Probiotics may slightly shorten the duration of diarrhea. Hand washing is the best prevention - stomach viruses spread easily in households and daycare.' },
  ],
  whenNormal: ['Vomiting lasts 1-2 days and diarrhea lasts up to 2 weeks','Your child has reduced appetite but is drinking fluids and having wet diapers','Loose stools persist for 2-3 weeks after the acute illness but are gradually improving','Your child seems tired but is alert and interactive between episodes'],
  whenToMention: ['Diarrhea persists beyond 2-3 weeks after the acute illness','Your child is not regaining their appetite after 2 weeks of being well','You see blood or mucus in the stool','Your child has had recurrent stomach bugs (more than 3-4 per year)'],
  whenToActNow: ['Signs of dehydration: no wet diaper in 6+ hours, no tears, very dry mouth, sunken eyes, lethargy','Vomiting that persists more than 24 hours and your child cannot keep any fluids down','Blood in vomit or stool','Your child is lethargic, confused, or difficult to wake','Severe abdominal pain that is worsening'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vomiting-no-fever','toddler-chronic-diarrhea','baby-not-eating-after-illness'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Treating Vomiting. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Norovirus: Facts for Healthcare Providers.', url: 'https://www.cdc.gov/norovirus/hcp/clinical-overview/index.html' },
    { org: 'WHO', citation: 'World Health Organization. Diarrhoeal Disease. Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease' },
  ],
};

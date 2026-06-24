import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vaccine-side-effects-baby',
  title: 'Vaccine Side Effects in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'vaccine side effects baby',
    'baby fever after vaccination',
    'baby fussy after shots',
    'vaccine reaction baby',
    'baby leg swollen after vaccine',
    'baby not eating after vaccination',
    'baby sleeping more after shots',
    'vaccine side effects normal',
    'baby rash after vaccine',
    'how long do vaccine side effects last baby',
  ],
  quickAnswer:
    'Mild vaccine side effects are very common, expected, and a sign that your baby\'s immune system is building protection. The most common side effects include fussiness, mild fever (under 101 F), soreness or swelling at the injection site, and increased sleepiness. These typically resolve within 24-48 hours. Serious vaccine reactions are extremely rare. The benefits of vaccination far outweigh the risks, protecting your child from potentially life-threatening diseases.',
  byAge: [
    {
      ageRange: '0-6 months (2, 4, 6 month vaccines)',
      context:
        'The 2-month, 4-month, and 6-month vaccine visits typically include several vaccines (DTaP, IPV, Hib, PCV13, rotavirus, and sometimes hepatitis B). Common side effects include: fussiness for 24-48 hours, mild fever (treat with infant acetaminophen if over 2 months per your pediatrician\'s dosing guidance — do not use ibuprofen before 6 months), redness or swelling at injection sites, and sleeping more than usual. Your baby may feed less for a day or two. These are all normal responses and do not require medical attention unless they are severe or persistent.',
    },
    {
      ageRange: '6-12 months (6, 9, 12 month vaccines)',
      context:
        'The 6-month and 12-month visits include additional vaccines. The MMR and varicella vaccines given at 12 months can occasionally cause a mild rash or low-grade fever 7-12 days after vaccination (not immediately). This delayed reaction is normal and means the immune system is responding. Injection site reactions may include a firm, painless lump that can persist for several weeks — this is harmless. Apply a cool, damp cloth to sore injection sites and offer extra comfort and fluids.',
    },
    {
      ageRange: '12-24 months (15, 18 month vaccines)',
      context:
        'Toddlers may be more distressed during and after vaccinations because they are more aware and may remember the experience. Common side effects remain the same: brief fussiness, mild fever, and injection site soreness. The DTaP booster can occasionally cause significant thigh swelling, which looks alarming but is a harmless immune response that resolves in a few days. You can give ibuprofen or acetaminophen at age-appropriate doses to manage discomfort. If your toddler seems unusually distressed, contact your pediatrician.',
    },
    {
      ageRange: '2-4 years (preschool vaccines)',
      context:
        'Preschool-age children receive booster vaccines (DTaP, IPV, MMR, varicella) before starting kindergarten. At this age, preparation helps: explain in simple terms what will happen, allow your child to sit on your lap, and use distraction techniques. Side effects are similar to earlier vaccines. A large, red, swollen area around the injection site can occur with DTaP boosters and may take several days to resolve. This is a local reaction, not an infection, and does not mean your child is allergic to the vaccine.',
    },
  ],
  whenNormal: [
    'Your baby is fussy, sleepy, or eating less for 24-48 hours after vaccination',
    'Your baby has a mild fever under 101 F that responds to acetaminophen or ibuprofen',
    'The injection site is red, slightly swollen, or has a small firm lump for a few days',
    'Your baby develops a mild rash 7-12 days after MMR or varicella vaccination',
  ],
  whenToMention: [
    'Your baby has a fever over 104 F after vaccination, or a fever that lasts more than 3 days',
    'The injection site becomes increasingly red, hot, or painful over several days (rather than improving)',
    'Your baby is crying inconsolably for more than 3 hours after vaccination',
  ],
  whenToActNow: [
    'Your baby shows signs of a severe allergic reaction (anaphylaxis) within minutes to hours: difficulty breathing, facial swelling, hives covering the body, or going limp — call 911 immediately',
    'Your baby has a seizure after vaccination — while febrile seizures are usually benign, a seizure should always be evaluated',
    'Your baby is extremely lethargic, unresponsive, or has a weak cry that is very different from normal after vaccination',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'persistent-fever-baby',
    'febrile-seizure',
    'hives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: The Facts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Safety-The-Facts.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Possible Side Effects from Vaccines.',
      url: 'https://www.cdc.gov/vaccines/vac-gen/side-effects.htm',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Vaccine Side Effects and Adverse Events.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK236287/',
    },
  ],
};

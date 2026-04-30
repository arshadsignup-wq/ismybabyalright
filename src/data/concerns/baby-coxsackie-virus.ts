import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-coxsackie-virus',
  title: 'Coxsackie Virus (Hand, Foot, and Mouth Disease) in Baby',
  category: 'medical',
  searchTerms: ['coxsackie virus baby', 'baby coxsackie', 'toddler coxsackie', 'coxsackie virus symptoms baby', 'baby coxsackie treatment', 'coxsackie virus daycare', 'baby mouth sores coxsackie', 'toddler coxsackie rash', 'coxsackie virus in infants', 'baby coxsackie blisters'],
  quickAnswer: 'Coxsackie virus is the most common cause of hand, foot, and mouth disease (HFMD) in children. It causes fever, painful mouth sores (small ulcers on the tongue, gums, and inside of cheeks), and a blister-like rash on the hands, feet, and sometimes buttocks. It is extremely common in children under 5 and spreads easily in daycare settings. There is no specific treatment - it is a viral illness that resolves on its own within 7-10 days. The main concern is ensuring your child stays hydrated, as the mouth sores can make eating and drinking painful.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies with coxsackie virus often present with fever, irritability, drooling (from mouth sores), and refusal to feed. The rash may appear as small blisters on the palms, soles, and buttocks. Babies are at higher risk for dehydration because the mouth sores make feeding painful. Offer small, frequent feeds of breast milk, formula, or an electrolyte solution. Cold liquids and popsicles (for babies eating solids) can help soothe the pain. Avoid acidic or salty foods. The illness is most contagious in the first week, especially while the child has a fever.' },
    { ageRange: '1-3 years', context: 'Hand, foot, and mouth disease is very common in toddlers, especially those in daycare. After a 3-5 day incubation period, the illness starts with fever, sore throat, and reduced appetite, followed by mouth sores and the characteristic rash. The rash may also appear on the knees, elbows, and buttocks. Treatment is supportive: acetaminophen or ibuprofen for pain and fever, cold fluids and popsicles for mouth soreness, and avoiding spicy or acidic foods. Blisters are not typically itchy. Peeling of finger and toenails (onychomadesis) can occur 4-8 weeks later and is harmless. Children can return to daycare after the fever resolves, though they remain mildly contagious for weeks through stool.' },
  ],
  whenNormal: ['Fever lasting 2-3 days', 'Mouth sores that are painful but improving over 5-7 days', 'A blister-like rash on hands, feet, and/or buttocks', 'Reduced appetite for a few days due to mouth soreness', 'Nail peeling 4-8 weeks after the illness (harmless)'],
  whenToMention: ['Your child is not drinking enough fluids due to mouth sore pain', 'The fever lasts more than 3 days', 'You want to confirm the diagnosis', 'Your child has had HFMD symptoms for more than 10 days without improvement'],
  whenToActNow: ['Signs of dehydration: no wet diaper for 6+ hours, no tears when crying, dry mouth, sunken eyes', 'High fever above 104 degrees F (40 degrees C)', 'Your child is lethargic, not just tired', 'A newborn (under 1 month) with symptoms of HFMD', 'Severe headache with stiff neck and fever (rare complication - viral meningitis)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hand-foot-mouth', 'baby-hand-foot-mouth-contagious-period', 'herpetic-gingivostomatitis-baby', 'baby-mouth-sores'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hand, Foot, and Mouth Disease.', url: 'https://www.cdc.gov/hand-foot-mouth/' },
    { org: 'NIH', citation: 'National Library of Medicine. Coxsackievirus. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK534228/' },
  ],
};

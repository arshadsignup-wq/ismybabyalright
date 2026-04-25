import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'kawasaki-disease-signs',
  title: 'Signs of Kawasaki Disease',
  category: 'medical',
  searchTerms: [
    'kawasaki disease baby',
    'kawasaki disease symptoms',
    'high fever 5 days baby',
    'strawberry tongue baby',
    'kawasaki disease rash',
    'red eyes and fever baby',
    'peeling skin hands feet baby',
    'prolonged fever toddler',
    'kawasaki disease treatment',
    'kawasaki disease heart',
  ],
  quickAnswer:
    'Kawasaki disease is a rare illness that causes inflammation of blood vessels, most commonly in children under 5. Key signs include fever lasting 5+ days, rash, red eyes, swollen red lips or tongue, swollen hands/feet, and later peeling skin. It requires urgent medical treatment to prevent heart complications, so contact your pediatrician if your child has unexplained high fever for several days.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Kawasaki disease is less common in babies under 1 year but can occur. Infants may have fever for 5+ days, extreme irritability, red eyes without discharge, swollen red lips, rash (often in the diaper area), and swollen hands or feet. Babies with Kawasaki disease are often very fussy and difficult to console. If your baby has unexplained high fever for more than 3-4 days, contact your pediatrician.',
    },
    {
      ageRange: '1-2 years',
      context:
        'This is a common age for Kawasaki disease. Your toddler may have high fever (often 104°F or higher) that doesn\'t respond well to fever reducers and lasts at least 5 days. Other signs develop over several days: bloodshot eyes, bright red cracked lips, "strawberry tongue," rash on the body, and red swollen hands and feet. About 1-2 weeks after fever starts, skin may peel from fingers and toes.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Kawasaki disease is most common in this age group, especially in children of Asian or Pacific Islander descent. The illness has distinct phases: fever phase (5+ days) with rash, red eyes, mouth changes, and swollen extremities, followed by peeling skin phase. Some children also have joint pain, vomiting, or diarrhea. Prompt treatment with IV immunoglobulin is important to reduce heart complication risk.',
    },
    {
      ageRange: '5-8 years',
      context:
        'Kawasaki disease is less common but still possible in older children. Symptoms are the same as in younger children. Because it\'s rarer at this age, diagnosis may be delayed. If your child has prolonged high fever and develops any combination of red eyes, mouth changes, rash, or swollen hands/feet, mention Kawasaki disease to your doctor.',
    },
    {
      ageRange: '8 years+',
      context:
        'Kawasaki disease is rare in children over 8 but has been reported. Any child with unexplained fever lasting 5+ days should be evaluated. In older children, other causes of prolonged fever are more likely, but Kawasaki disease should be considered if classic features develop.',
    },
  ],
  whenNormal: [
    'Your child has a fever for 2-3 days with typical cold or flu symptoms',
    'Your child\'s eyes are red due to an obvious eye infection (pink eye with discharge)',
    'Your child has a viral rash that appears briefly and fades',
    'Your child\'s fever improves with fever reducer and they seem relatively well',
  ],
  whenToMention: [
    'Your child has had a fever for 3-4 days with no clear source',
    'Your child has a rash and red eyes but fever has only been present 2-3 days',
    'You\'re worried about Kawasaki disease and want your pediatrician to evaluate',
    'Your child had Kawasaki disease in the past and you want to know about follow-up care',
  ],
  whenToActNow: [
    'Your child has had a high fever (over 101°F/38.3°C) for 5 or more days',
    'Your child has fever plus multiple signs: red eyes, red/cracked lips, strawberry tongue, rash, or swollen red hands/feet',
    'Your child seems very unwell, is extremely irritable, or refuses to eat or drink',
    'Your child was treated for Kawasaki disease and develops new symptoms like chest pain or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Kawasaki Disease. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Kawasaki-Disease.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Kawasaki Disease. CDC, 2023.',
      url: 'https://www.cdc.gov/kawasaki/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recognizing Kawasaki Disease. Pediatrics, 2017.',
      url: 'https://publications.aap.org/pediatrics/article/140/3/e20171771/38358/Diagnosis-Treatment-and-Long-Term-Management-of',
    },
  ],
};

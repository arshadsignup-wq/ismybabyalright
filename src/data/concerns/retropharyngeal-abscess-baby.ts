import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'retropharyngeal-abscess-baby',
  title: 'Retropharyngeal Abscess (Deep Neck Infection)',
  category: 'medical',
  searchTerms: [
    'retropharyngeal abscess baby',
    'deep neck infection child',
    'baby stiff neck fever drooling',
    'baby refusing to eat stiff neck',
    'retropharyngeal abscess toddler',
    'baby neck swelling infection',
    'baby holding neck stiff',
    'peritonsillar abscess child',
    'deep neck space infection toddler',
    'baby neck abscess emergency',
  ],
  quickAnswer:
    'A retropharyngeal abscess is a serious deep neck infection involving a collection of pus in the space behind the throat (pharynx). It is most common in children under age 6, typically following an upper respiratory infection or pharyngitis. Symptoms include high fever, neck stiffness or refusal to move the neck, drooling, difficulty swallowing, refusal to eat, a muffled voice, and sometimes noisy breathing. This is a medical emergency that requires prompt hospital evaluation, IV antibiotics, and often surgical drainage. With timely treatment, most children recover fully.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Retropharyngeal abscesses are uncommon in very young infants but can occur. Symptoms in this age group may be nonspecific and include fever, irritability, poor feeding, drooling, and stiff or extended neck posture. Because babies cannot describe their symptoms, a high fever combined with refusal to feed and unusual neck positioning should prompt medical evaluation. Retropharyngeal lymph nodes are proportionally larger in young children, which is why this infection is more common in the pediatric age group.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the peak age for retropharyngeal abscesses. The typical scenario is a toddler who has had a cold or sore throat that seems to worsen rather than improve, developing high fever, neck stiffness (especially refusal to extend or turn the neck), drooling, difficulty swallowing, and a muffled or changed voice. Your child may refuse to eat or drink and appear very uncomfortable. Diagnosis involves a CT scan of the neck with contrast. Treatment requires hospitalization for IV antibiotics, and if a drainable abscess has formed, surgical drainage is performed under general anesthesia.',
    },
    {
      ageRange: '3-6 years',
      context:
        'Children in this age group can sometimes describe throat pain, difficulty swallowing, or neck pain, which may help with earlier detection. Retropharyngeal abscesses can develop rapidly, sometimes within 24-48 hours of symptom onset. Complications, while uncommon with prompt treatment, can include airway obstruction, spread of infection to the chest (mediastinitis), or sepsis. If your child has a sore throat or cold that takes a sudden turn for the worse with high fever and neck stiffness, seek emergency evaluation.',
    },
    {
      ageRange: '6+ years',
      context:
        'Retropharyngeal abscesses become less common after age 6 because the retropharyngeal lymph nodes naturally atrophy. In older children and adolescents, similar deep neck infections may present as peritonsillar abscesses or parapharyngeal abscesses. Symptoms and treatment principles are similar. With appropriate antibiotic treatment and surgical drainage when needed, the prognosis is excellent and recurrence is uncommon.',
    },
  ],
  whenNormal: [
    'Your child has a cold with mild sore throat, low-grade fever, and is still drinking fluids and moving their neck normally',
    'Your child had a sore throat that is improving day by day with supportive care',
    'Mild neck stiffness that resolves quickly and is associated with sleeping in an awkward position rather than infection',
  ],
  whenToMention: [
    'Your child has a sore throat that seems unusually severe or is worsening after 2-3 days rather than improving',
    'Your child has neck stiffness or reluctance to move their neck along with a fever',
    'Your child is drooling more than usual or having difficulty swallowing during what seemed like a routine cold',
  ],
  whenToActNow: [
    'Your child has high fever with neck stiffness, drooling, difficulty swallowing, and refusal to eat or drink -- go to the emergency room immediately',
    'Your child has noisy breathing, stridor, or appears to be struggling to breathe along with a neck infection -- call 911',
    'Your child appears very ill, lethargic, or is unable to open their mouth or swallow their own saliva',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['choanal-atresia', 'baby-stridor-noisy-breathing', 'hoarse-voice-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Retropharyngeal Abscess. Red Book: Report of the Committee on Infectious Diseases.',
      url: 'https://redbook.solutions.aap.org/',
    },
    {
      org: 'AAO-HNS',
      citation:
        'American Academy of Otolaryngology-Head and Neck Surgery. Deep Neck Infections.',
      url: 'https://www.enthealth.org/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Retropharyngeal Abscess. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK441873/',
    },
  ],
};

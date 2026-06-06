import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-herpes-exposure',
  title: 'Herpes Simplex in Newborns (Neonatal Herpes)',
  category: 'medical',
  searchTerms: ['neonatal herpes', 'newborn herpes simplex', 'baby herpes exposure', 'HSV newborn', 'herpes virus baby', 'newborn herpes prevention', 'cold sore baby risk', 'herpes blisters newborn', 'neonatal HSV infection', 'baby herpes symptoms'],
  quickAnswer:
    'Neonatal herpes is a rare but serious infection caused by the herpes simplex virus (HSV), most often transmitted during delivery. It can also be transmitted after birth through contact with cold sores or herpes lesions. Early recognition and treatment with antiviral medication (acyclovir) are critical. Prevention includes cesarean delivery if active genital lesions are present and avoiding contact between cold sores and the baby.',
  byAge: [
    { ageRange: '0-1 month', context: 'Neonatal herpes most commonly presents in the first 2-4 weeks of life. It can appear as skin vesicles (small blisters), eye infection, mouth sores, or in severe cases, can affect the brain (encephalitis) or multiple organs (disseminated disease). Risk is highest when the mother has a primary (new) genital herpes infection near delivery. Any newborn with blisters, vesicles, or signs of illness should be urgently evaluated. Treatment with intravenous acyclovir is started immediately when herpes is suspected. After birth, anyone with an active cold sore should not kiss the baby and should practice strict hand hygiene.' },
    { ageRange: '1-3 months', context: 'Herpes infection can still occur through contact with active lesions. If your baby was treated for neonatal herpes, they will typically receive oral suppressive acyclovir therapy for 6 months to prevent recurrence. Continue to protect your baby from exposure to cold sores.' },
    { ageRange: '3-6 months', context: 'If treated early, many babies with neonatal herpes recover well. Babies who had skin, eye, or mouth disease have the best outcomes. Those who had brain or disseminated disease may need developmental follow-up. Continue antiviral prophylaxis as prescribed.' },
    { ageRange: '6-12 months', context: 'Ongoing monitoring continues for babies who had neonatal herpes. Developmental assessments may be recommended for those who had CNS involvement. The risk of herpes transmission from cold sores and skin contact continues to require vigilance.' },
  ],
  whenNormal: ['Baby has no blisters, vesicles, or concerning symptoms despite known herpes exposure, and monitoring period has passed'],
  whenToMention: ['Your baby was exposed to someone with an active cold sore or herpes lesion', 'You have a history of genital herpes and want to discuss risk and prevention', 'You notice any unusual skin lesions on your newborn'],
  whenToActNow: ['Any blisters, vesicles, or clusters of sores on your newborn\'s skin, mouth, or eyes require immediate emergency evaluation', 'Baby becomes lethargic, refuses to feed, develops a fever, or has seizures, which could indicate disseminated or CNS herpes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Neonatal Herpes Simplex Virus Infection. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/150/2/e2022058952/188584/Neonatal-Herpes-Simplex-Virus-Infection' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Genital Herpes - Detailed Fact Sheet.', url: 'https://www.cdc.gov/std/herpes/stdfact-herpes-detailed.htm' },
  ],
  relatedConcernSlugs: ['newborn-infection-signs-sepsis', 'newborn-conjunctivitis-sticky-eye'],
};

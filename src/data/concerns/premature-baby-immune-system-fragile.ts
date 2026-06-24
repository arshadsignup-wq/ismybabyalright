import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-baby-immune-system-fragile',
  title: 'Premature Baby Immune System: Protecting Your Preemie',
  category: 'medical',
  searchTerms: [
    'premature baby immune system',
    'preemie immune system weak',
    'protecting premature baby from germs',
    'preemie sick easily',
    'premature baby RSV risk',
    'preemie visitors restrictions',
    'premature baby infection risk',
    'when can preemie be around people',
    'premature baby vaccines schedule',
    'premature baby cold dangerous',
  ],
  quickAnswer:
    'Premature babies have less mature immune systems than full-term infants because they missed out on maternal antibodies that transfer most actively during the third trimester of pregnancy. This makes them more susceptible to infections, particularly respiratory illnesses like RSV and influenza. Protective measures include limiting visitors, practicing strict hand hygiene, keeping up with vaccinations on the chronological (not adjusted) age schedule, and considering RSV immunization with nirsevimab.',
  byAge: [
    {
      ageRange: '0-3 months (chronological age)',
      context:
        'The first few months after NICU discharge are the highest-risk period for your preemie. Limit visitors, ask anyone who holds the baby to wash hands thoroughly, and avoid crowded indoor spaces. Keep your baby away from anyone who is sick, even with mild cold symptoms. Breastmilk provides important immune protection and should be continued if possible. Your baby should receive vaccines on their chronological age schedule (not adjusted age), as recommended by the AAP. Ask your pediatrician about nirsevimab (Beyfortus) for RSV prevention.',
    },
    {
      ageRange: '3-6 months (chronological age)',
      context:
        'Your preemie\'s immune system is maturing but remains more vulnerable than a full-term infant of the same age. Continue protective measures, especially during respiratory virus season (fall through spring). If your baby was born before 29 weeks, they may qualify for palivizumab (Synagis) injections during RSV season. Avoid smoke exposure, which significantly increases respiratory infection risk. Childcare settings may need to wait until your baby is older and more immunologically mature, especially if born very early.',
    },
    {
      ageRange: '6-12 months (chronological age)',
      context:
        'By six months chronological age, many preemies have developed more robust immune responses, particularly if they have been receiving vaccines on schedule. However, late preterm babies (born at 34-36 weeks) still have a higher hospitalization rate for respiratory infections compared to full-term babies during their first year. Continue good hand hygiene practices, avoid secondhand smoke, and ensure flu vaccines for all household members. Your baby should receive their first influenza vaccine at six months of age.',
    },
    {
      ageRange: '12+ months (chronological age)',
      context:
        'By their first birthday, most preemies have immune function approaching that of full-term children, though some born very early may have lingering vulnerabilities. Continue following the standard vaccine schedule. Your pediatrician may recommend additional testing or specialist referral if your baby has frequent or severe infections. Most preemies "catch up" immunologically by age two, and the extra precautions of the first year can gradually be relaxed based on your pediatrician\'s guidance.',
    },
  ],
  whenNormal: [
    'Your preemie catches a mild cold with runny nose and slight cough that resolves in a week',
    'Mild fever after vaccinations, which shows the immune system is responding appropriately',
    'Needing extra vigilance about hand hygiene and visitor health during the first winter',
  ],
  whenToMention: [
    'Your preemie has more than 6-8 ear infections in a year or recurrent respiratory infections',
    'Cold symptoms are not improving after a week or seem to be worsening',
    'Your baby has a fever and you are unsure whether to seek care',
    'You have questions about RSV prevention or the vaccine schedule for premature babies',
  ],
  whenToActNow: [
    'Your preemie under 3 months has a fever of 100.4 degrees Fahrenheit (38 degrees Celsius) or higher - this requires immediate medical evaluation',
    'Your baby has difficulty breathing, fast breathing, flaring nostrils, or chest retractions',
    'Your baby is lethargic, difficult to wake, or refusing to eat',
    'Your baby\'s skin appears pale, mottled, or bluish',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'premature-baby-feeding-difficulties-home',
    'rsv-prevention-nirsevimab-infant',
    'preterm-birth-long-term-health-effects',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Immunizations for Preterm Infants. Pediatrics, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Immunizations-for-Preemies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Preterm Birth: Infant Care. CDC, 2024.',
      url: 'https://www.cdc.gov/reproductive-health/features/premature-birth.html',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Health Issues in Preemies. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/baby/common-health-issues-in-premature-babies.aspx',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'catching-up-on-missed-vaccines',
  title: 'Catching Up on Missed Vaccines',
  category: 'medical',
  searchTerms: [
    'missed vaccine dose baby',
    'catch up vaccine schedule',
    'baby behind on shots',
    'late vaccination baby',
    'skipped vaccine what to do',
    'restart vaccine series baby',
    'how to catch up on immunizations',
    'toddler missed vaccines',
  ],
  quickAnswer:
    'If your baby or toddler has missed one or more vaccine doses, it is almost never too late to catch up. You do not need to restart a vaccine series from the beginning -- your child picks up right where they left off. Your pediatrician can use the CDC catch-up schedule to create a safe, efficient plan to bring your child up to date as quickly as possible.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If the hepatitis B birth dose or the 2-month vaccines were missed, your pediatrician will administer them at the next visit. There is no need to restart the series. The priority is to begin protection as soon as possible, especially for pertussis (whooping cough), which is most dangerous in the first few months of life.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies who are a month or two behind can usually catch up with combination vaccines that cover multiple diseases in a single shot, minimizing the number of injections. Your pediatrician may give additional vaccines at a single visit to help close the gap. Multiple vaccines given at the same time have been extensively studied and are safe.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby missed several rounds of vaccines, the catch-up schedule may involve receiving more vaccines at each visit than the standard schedule typically requires. This is safe and helps your child gain protection faster. Your pediatrician will prioritize the vaccines that protect against the most dangerous diseases for your child\'s age.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who are significantly behind can still catch up effectively. Some vaccines that normally require multiple doses in infancy may need fewer doses when started later because the older immune system responds more robustly. Your pediatrician will use the CDC catch-up schedule to determine exactly which doses are still needed and the minimum intervals between them.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Children entering preschool or daycare often need to be up to date on vaccines. Even if your child has missed many doses, a catch-up plan can usually bring them current within a few months. Schools and childcare facilities may require documentation of vaccination, so catching up also ensures your child can attend without delays.',
    },
  ],
  whenNormal: [
    'Your baby missed a single vaccine dose due to a scheduling conflict or mild illness and you plan to reschedule',
    'Your pediatrician recommends giving extra vaccines at the next visit to catch up, which is standard and safe',
    'Your child received some but not all recommended vaccines and you want to complete the series',
    'You recently moved or changed pediatricians and want to ensure your child is up to date',
  ],
  whenToMention: [
    'Your child has missed multiple vaccine doses and you need help creating a catch-up plan',
    'You are unsure which vaccines your child has received and need to review their immunization records',
    'Your child is entering daycare or school and needs to be up to date quickly',
  ],
  whenToActNow: [
    'Your unvaccinated or partially vaccinated child has been exposed to measles, whooping cough, or another vaccine-preventable disease -- seek guidance immediately as post-exposure vaccines or treatments may help',
    'Your unvaccinated child develops symptoms of a serious illness such as persistent high fever, difficulty breathing, a barking cough, or a rash with fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Catch-Up Immunization Schedule for Persons Aged 4 Months Through 18 Years.',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/catchup.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When Can My Child Be Vaccinated If They Missed a Dose? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Getting-Vaccinated-Isnt-Just-for-Babies.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Missed Vaccinations: When and How to Catch Up.',
      url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination',
    },
  ],
};

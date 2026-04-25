import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'meningitis-signs-baby',
  title: 'Signs of Meningitis in Babies',
  category: 'medical',
  searchTerms: [
    'baby meningitis symptoms',
    'meningitis in babies',
    'meningitis signs baby',
    'baby stiff neck',
    'baby bulging fontanelle',
    'meningitis rash baby',
    'meningitis emergency',
    'how to check for meningitis baby',
    'meningitis fever baby',
    'bacterial meningitis baby',
  ],
  quickAnswer:
    'Meningitis is a rare but serious infection of the membranes around the brain and spinal cord. Symptoms in babies include high fever, extreme irritability, bulging soft spot, stiff neck or body, unusual sleepiness, or a rash that doesn\'t fade when pressed. If you suspect meningitis, go to the emergency department immediately - early treatment is critical.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Meningitis in newborns is a medical emergency. Signs may be subtle: fever or low temperature, poor feeding, weak cry, extreme sleepiness or irritability, stiff or floppy body, or a bulging soft spot. Any fever in a baby under 3 months (100.4°F/38°C or higher) requires immediate medical evaluation. Don\'t wait to see if it improves - go to the emergency department or call 911.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies this age may show high fever, extreme fussiness or inconsolable crying, refusing to eat, vomiting, bulging fontanelle, or unusual sleepiness. They may arch their back or have a stiff neck (though this is harder to detect in babies than older children). A rash that looks like tiny red or purple dots and doesn\'t fade when pressed can indicate bacterial meningitis - this is an emergency.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Look for high fever combined with extreme irritability, especially if your baby doesn\'t want to be held or touched. Other signs include a bulging soft spot, stiff neck or back, sensitivity to light, vomiting, or seizure. The "glass test" for meningitis rash: press a clear glass against the rash - if it doesn\'t fade, seek emergency care immediately.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with meningitis may have high fever, severe headache (they may hold their head or cry more when moved), stiff neck, vomiting, sensitivity to light, or confusion. They may seem extremely unwell very quickly. The fontanelle is usually closed by this age, so you can\'t check for bulging. Trust your instinct - if your child seems dangerously ill, go to the emergency department.',
    },
    {
      ageRange: '2 years+',
      context:
        'Older children may be able to tell you their head or neck hurts. Classic signs include high fever, severe headache, stiff neck (unable to touch chin to chest), vomiting, confusion, drowsiness, or a non-blanching rash. Meningitis can progress rapidly - if multiple symptoms are present, seek emergency care immediately rather than waiting for an appointment.',
    },
  ],
  whenNormal: [
    'Your baby has a fever and typical cold symptoms (runny nose, cough) but is still interactive and feeding',
    'Your baby is fussy with a fever but calms down when held and given fever reducer',
    'Your baby\'s soft spot looks normal (flat when calm and upright)',
    'Your baby is moving their neck normally and doesn\'t seem bothered by gentle movement',
  ],
  whenToMention: [
    'Your baby had a high fever and you want reassurance that meningitis was ruled out',
    'Your baby has been exposed to someone with meningitis',
    'You\'re unsure how to check for signs of meningitis and want your pediatrician to demonstrate',
  ],
  whenToActNow: [
    'Your baby has a bulging soft spot, especially with fever or vomiting',
    'Your baby has a high fever and is extremely irritable, lethargic, or difficult to wake',
    'Your baby has a stiff neck or body, or arches their back repeatedly',
    'Your baby has a rash with tiny red or purple dots that don\'t fade when you press on them',
    'Your baby has a seizure',
    'Your baby under 3 months has any fever (100.4°F/38°C or higher)',
    'Your instinct tells you your baby is dangerously ill',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Meningitis. CDC, 2024.',
      url: 'https://www.cdc.gov/meningitis/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Meningitis. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Meningitis.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Meningitis. WHO Fact Sheet, 2023.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis',
    },
  ],
};

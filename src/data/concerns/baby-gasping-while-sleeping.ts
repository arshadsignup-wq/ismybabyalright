import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-gasping-while-sleeping',
  title: 'My Baby Gasps While Sleeping',
  category: 'sleep',
  searchTerms: [
    'baby gasping in sleep',
    'baby gasps for air while sleeping',
    'newborn gasping at night',
    'baby catching breath in sleep',
    'baby sleep apnea gasping',
    'baby choking sound while sleeping',
    'baby gasping and waking up',
    'infant gasping during sleep',
    'baby irregular breathing sleep gasping',
    'baby stops breathing then gasps',
  ],
  quickAnswer:
    'Occasional gasping or irregular breathing during sleep can be normal in young babies, especially newborns, whose breathing patterns are naturally irregular. However, frequent gasping, pauses in breathing longer than 20 seconds, gasping accompanied by color changes (blue or pale), or gasping that causes your baby to wake distressed may indicate obstructive sleep apnea, laryngomalacia, or other airway issues that need medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have immature respiratory control centers in the brain, leading to periodic breathing — a normal pattern of rapid breaths followed by brief pauses of up to 10 seconds. This can sometimes include what sounds like a small gasp when breathing resumes. Periodic breathing occurs in up to 78% of newborns and typically resolves by 3-6 months. However, true apnea (pauses longer than 20 seconds) or apnea with color changes, bradycardia (slow heart rate), or limpness is a medical emergency. Laryngomalacia (a floppy larynx) is the most common cause of noisy breathing in infants and can cause gasping sounds, especially during sleep.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Breathing patterns become more regular at this age, and periodic breathing should be decreasing. If your baby continues to gasp frequently during sleep, it may warrant investigation. Gastroesophageal reflux (GER) can cause gasping when stomach acid irritates the airway during sleep. Nasal congestion from colds or allergies can also cause gasping sounds. Ensure your baby sleeps on their back on a firm, flat surface without soft bedding, which is critical for safe sleep and reducing the risk of suffocation-related gasping.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, healthy babies should have fairly regular breathing patterns during sleep. Persistent gasping, snoring, or noisy breathing during sleep may indicate obstructive sleep apnea, enlarged adenoids or tonsils, or other airway abnormalities. If your baby consistently gasps, pauses in breathing, or makes choking sounds during sleep, a sleep study (polysomnography) may be recommended. Obstructive sleep apnea affects about 1-5% of children and can impact sleep quality, growth, and development if untreated.',
    },
  ],
  whenNormal: [
    'Your newborn has occasional irregular breathing patterns with brief pauses (under 10 seconds) followed by slightly deeper breaths — this is normal periodic breathing.',
    'Your baby occasionally makes a gasping or sighing sound during active (REM) sleep but maintains normal color and does not wake distressed.',
    'Your baby has a stuffy nose from a cold and makes occasional gasping sounds that resolve when congestion clears.',
  ],
  whenToMention: [
    'Your baby gasps during sleep most nights and it seems to be getting more frequent or louder.',
    'Gasping is accompanied by regular snoring, mouth breathing, or restless sleep.',
    'Your baby seems excessively sleepy during the day despite seemingly adequate sleep time, which could suggest disrupted sleep from breathing issues.',
  ],
  whenToActNow: [
    'Your baby stops breathing for more than 20 seconds, turns blue or pale, or becomes limp — call 911 immediately and begin infant CPR if your baby does not resume breathing.',
    'Your baby has repeated episodes of gasping followed by choking or gagging that cause significant distress or difficulty resuming normal breathing — seek emergency evaluation.',
    'Your baby gasps and becomes very stiff or has jerking movements during sleep, which could indicate seizure activity — seek emergency care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'baby-sleeping-mouth-open', 'baby-screaming-in-sleep'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Infant Sleep Apnea',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Obstructive-Sleep-Apnea.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Periodic Breathing in Infants',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30252771/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Laryngomalacia: Symptoms and Causes',
      url: 'https://www.mayoclinic.org/diseases-conditions/laryngomalacia/symptoms-causes/syc-20532882',
    },
  ],
};

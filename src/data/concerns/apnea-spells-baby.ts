import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'apnea-spells-baby',
  title: 'My Baby Stops Breathing Briefly (Apnea)',
  category: 'medical',
  searchTerms: [
    'baby stops breathing',
    'baby pauses in breathing',
    'baby apnea',
    'baby not breathing for seconds',
    'newborn breathing stops',
    'baby periodic breathing',
    'baby gasps for air',
    'infant apnea',
    'baby breathing irregularly',
    'baby breath holding sleep',
  ],
  quickAnswer:
    'Brief pauses in breathing lasting under 10 seconds are very common in newborns and are called periodic breathing. This is a normal pattern where the baby breathes rapidly, then pauses briefly, then resumes. However, true apnea (pauses lasting 20 seconds or longer, or shorter pauses accompanied by color changes or heart rate drops) is a medical concern that should be evaluated promptly.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns often have irregular breathing patterns, including periodic breathing where they alternate between rapid breaths and brief pauses of 5-10 seconds. This is normal and results from the immature brainstem respiratory center. It is most noticeable during sleep. Premature babies are at higher risk for true apnea of prematurity, where pauses exceed 20 seconds or are accompanied by bradycardia (slowed heart rate) or desaturation (oxygen drops). If your newborn has pauses that seem prolonged or is turning blue, pale, or limp, seek immediate medical attention.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Periodic breathing typically decreases by 3-6 months as the baby\'s respiratory control matures. Apnea events in previously healthy infants at this age are called apparent life-threatening events (ALTEs) or brief resolved unexplained events (BRUEs). These episodes, where the baby may stop breathing, turn blue, go limp, or choke, need medical evaluation to determine the cause, which can include reflux, infection, or rarely, seizures or metabolic conditions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, periodic breathing is uncommon. True apnea episodes are rare and usually have an identifiable cause such as respiratory infection (RSV, bronchiolitis), seizures, or obstructive sleep apnea from enlarged adenoids or tonsils. Breath-holding spells may begin around this age, typically triggered by crying, pain, or frustration. While frightening, breath-holding spells are involuntary and generally benign, with the child resuming breathing on their own.',
    },
  ],
  whenNormal: [
    'Brief pauses in breathing lasting under 10 seconds in a newborn, followed by normal breathing, with no color change or distress (periodic breathing)',
    'Occasional irregular breathing patterns during sleep in a baby under 6 months who is otherwise healthy and growing well',
    'A brief breath-holding spell during crying in an older infant that resolves spontaneously within seconds',
  ],
  whenToMention: [
    'You frequently observe breathing pauses that seem to last longer than 10 seconds',
    'Your baby has had one or more episodes of turning pale or blue briefly, even if they recovered quickly on their own',
    'You feel the need to stimulate your baby to restart breathing, even if they responded quickly',
  ],
  whenToActNow: [
    'Your baby stops breathing for 20 seconds or more, turns blue or gray, becomes limp, or does not resume breathing on their own  -  call 911 immediately and begin infant CPR if the baby is not breathing',
    'Your baby has repeated apnea episodes, an apnea spell accompanied by fever, vomiting, or unusual drowsiness, or an episode that required stimulation or resuscitation to resolve',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Tieder JS, et al. Brief Resolved Unexplained Events (Formerly Apparent Life-Threatening Events) and Evaluation of Lower-Risk Infants. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/5/e20160590/81425/Brief-Resolved-Unexplained-Events-Formerly',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Periodic Breathing and Apnea in Newborns.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Apnea-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Apnea of Prematurity. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537354/',
    },
  ],
};

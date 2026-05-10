import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'teething-pain-relief-safe-methods',
  title: 'Safe Teething Pain Relief Methods',
  category: 'medical',
  searchTerms: [
    'teething pain relief baby',
    'how to soothe teething baby',
    'safe teething remedies',
    'teething tablets safe',
    'teething gel for babies',
    'baby tylenol for teething',
    'frozen teething ring safe',
    'natural teething remedies',
    'amber teething necklace safety',
    'benzocaine baby teething',
  ],
  quickAnswer:
    'Safe teething pain relief includes chilled (not frozen) teething rings, gentle gum massage with a clean finger, and age-appropriate doses of acetaminophen or ibuprofen (ibuprofen only for babies 6 months and older). The FDA warns against using benzocaine gels, homeopathic teething tablets, and lidocaine products for infants. Amber teething necklaces are a choking and strangulation hazard and have no proven benefit.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teething is uncommon at this age, but if it occurs, safe options are limited. Gently rub the baby\'s gums with a clean, cool, wet washcloth. Chilled teething rings made of solid rubber can be offered. Avoid pain medications at this age unless specifically advised by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when many babies begin teething. Safe options include chilled (not frozen) teething rings, gum massage with a clean finger, and a cold wet washcloth to gnaw on. Acetaminophen (Tylenol) can be used as directed by your pediatrician for significant discomfort. Ibuprofen should not be used until 6 months of age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both acetaminophen and ibuprofen (Motrin, Advil) can now be used for teething pain, dosed by weight per your pediatrician\'s guidance. Chilled teething toys, cold washcloths, and gum massage remain effective. Mesh feeder bags with chilled fruit can soothe gums. Avoid teething gels with benzocaine (Orajel) as the FDA has warned against their use in children under 2.',
    },
    {
      ageRange: '12 months+',
      context:
        'Molar eruption can be particularly uncomfortable. Continue with safe methods: chilled foods, cold washcloths, teething toys, and weight-appropriate doses of acetaminophen or ibuprofen. Frozen bagels or cold fruits in a mesh feeder can help. Never use products containing benzocaine, lidocaine, or homeopathic teething tablets.',
    },
  ],
  whenNormal: [
    'Your baby is fussy, drooling more, and wanting to chew on things during teething',
    'Teething discomfort lasts a few days around the time each tooth erupts',
    'Your baby is soothed by chilled teething rings, gum massage, or an appropriate dose of pain reliever',
    'Mild gum swelling and redness at the eruption site',
  ],
  whenToMention: [
    'Teething discomfort seems unusually severe or prolonged, lasting more than a few days per tooth',
    'Your baby refuses to eat or drink due to apparent mouth pain',
    'You are unsure about the correct dose of acetaminophen or ibuprofen for your baby\'s weight',
  ],
  whenToActNow: [
    'Your baby has a fever over 101 degrees F (38.3 degrees C), which is not caused by teething and suggests an illness that needs medical evaluation',
    'You suspect your baby has ingested a teething product containing benzocaine or a homeopathic teething remedy and is showing symptoms like seizures, difficulty breathing, or unusual drowsiness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Pain Relief Tips for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/How-to-Help-Teething-Symptoms-without-Medications.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Oral Health Care for Infants, Children, and Adolescents.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/',
    },
    {
      org: 'NIH',
      citation:
        'U.S. Food and Drug Administration. Safely Soothing Teething Pain and Sensory Needs in Babies and Older Children.',
      url: 'https://www.fda.gov/consumers/consumer-updates/safely-soothing-teething-pain-and-sensory-needs-babies-and-older-children',
    },
  ],
};

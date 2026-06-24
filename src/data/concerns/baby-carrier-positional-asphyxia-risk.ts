import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-carrier-positional-asphyxia-risk',
  title: 'Baby Carrier Safety and Positional Asphyxia Risk',
  category: 'physical',
  searchTerms: [
    'baby carrier suffocation risk',
    'baby carrier positional asphyxia',
    'safe baby wearing',
    'sling carrier danger baby',
    'baby carrier chin to chest',
    'baby wrap safety newborn',
    'TICKS rule baby carrier',
    'bag style sling danger',
    'baby carrier breathing safety',
    'safe baby carrier position',
    'newborn carrier safety tips',
  ],
  quickAnswer:
    'Baby carriers are generally safe when used correctly, but improper positioning can create a risk of positional asphyxia. The key safety rules are: keep the baby\'s airway clear (visible face at all times), ensure the chin is not pressed against the chest, position the baby high and snug against your body, and use the TICKS guidelines - Tight, In view, Close enough to kiss, Keep chin off chest, and Supported back. Bag-style slings have been associated with the highest risk and are not recommended.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Young babies are at the greatest risk for positional asphyxia in carriers because they lack the muscle strength to reposition their head if their airway becomes compromised. Use a structured carrier that keeps your baby upright and snug against your chest. The baby\'s face should always be visible - you should be able to see their nose and mouth at all times. Avoid bag-style or pouch slings that allow the baby to curl into a C-shape with chin pressed to chest. Check on your baby frequently and ensure they are breathing normally.',
    },
    {
      ageRange: '4-12 months',
      context:
        'As babies develop better head and neck control, the risk decreases but safety practices remain important. Ensure your baby is positioned with their legs in a spread-squat position (M-shape), which supports healthy hip development. The carrier should be snug enough that the baby does not slump, and the baby\'s head should be close enough for you to kiss the top of it. Forward-facing carrying is not recommended before 6 months and should only be done in carriers specifically designed for it, with good head and neck support.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in carriers are at much lower risk of positional asphyxia due to their stronger muscles and better airway control. Back carriers become an option around 6-12 months when the child has good head control. Ensure any back carrier has a proper harness system and that the child is securely buckled. Continue to check on your toddler regularly, especially if they fall asleep in the carrier. Follow weight limits specified by the carrier manufacturer.',
    },
  ],
  whenNormal: [
    'Your baby is positioned upright in the carrier with their face visible and airway clear at all times.',
    'Your baby\'s chin is off their chest and their face is not pressed against the fabric or your body.',
    'Your baby is content, breathing normally, and you can easily monitor them while wearing the carrier.',
  ],
  whenToMention: [
    'You are unsure about the correct positioning for your baby in a specific carrier type.',
    'Your baby seems to slump or curl forward in the carrier despite adjustments.',
    'Your baby consistently falls asleep with their head in a position that concerns you.',
  ],
  whenToActNow: [
    'Your baby is unresponsive, limp, or has difficulty breathing while in a carrier - remove them immediately and call 911.',
    'Your baby\'s face was covered by fabric or pressed against your body and they appear blue, pale, or are not breathing normally.',
    'Your baby has fallen from a carrier due to a buckle failure or improper use.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-car-seat-sleep-danger',
    'baby-co-sleeper-bassinet-safety',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Carriers and Slings: Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Baby-Carriers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Consumer Product Safety Commission. Infant Deaths in Slings. CPSC Safety Alert.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Slings',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Safety: Preventing Suffocation.',
      url: 'https://www.cdc.gov/child-safety/about/index.html',
    },
  ],
};

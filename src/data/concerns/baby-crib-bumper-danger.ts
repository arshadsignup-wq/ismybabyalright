import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-crib-bumper-danger',
  title: 'Are Crib Bumpers Dangerous for My Baby?',
  category: 'sleep',
  searchTerms: [
    'crib bumper danger',
    'crib bumper safe baby',
    'crib bumper suffocation risk',
    'mesh crib bumper safe',
    'crib bumper ban',
    'baby stuck in crib slats',
    'crib bumper SIDS risk',
    'padded crib bumper danger',
    'crib bumper alternative',
    'are crib liners safe',
  ],
  quickAnswer:
    'Crib bumpers are dangerous and are now banned for sale in the United States under the Safe Sleep for Babies Act of 2022. Studies have documented hundreds of infant deaths from suffocation, strangulation, and entrapment related to crib bumpers, including padded, mesh, and vertical-slat styles. The AAP, CPSC, and NIH all recommend against using any type of crib bumper. Modern cribs are designed with slat spacing that prevents infant head entrapment, making bumpers unnecessary.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Young babies cannot move away from objects pressing against their face, making crib bumpers particularly dangerous at this age. Even mesh bumpers can pose a risk if the fabric detaches or if a baby presses their face firmly against it. The safest crib is a bare crib with only a firm mattress covered by a fitted sheet. Babies at this age do not move around enough to bump their heads against crib slats. The risk of suffocation from bumpers far exceeds any theoretical risk from contact with crib slats.',
    },
    {
      ageRange: '4-12 months',
      context:
        'As babies become more mobile - rolling, scooting, and pulling up - the risks of crib bumpers increase. Babies can use bumpers to climb, leading to falls, or can become entangled in ties or fabric. Bumper ties can pose a strangulation risk. It is normal for active babies to bump against crib slats; this does not cause injury. If your baby occasionally gets a limb stuck between slats, they will learn to navigate this quickly. Using a sleep sack can help keep limbs more contained if this is a concern.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers who are active climbers may use crib bumpers as a foothold to climb out of the crib, increasing fall risk. When your toddler starts attempting to climb out of the crib, it is time to transition to a toddler bed. No form of crib padding or bumper should be used at any age. If you have received crib bumpers as a gift or have them from an older child, the safest action is to dispose of them.',
    },
  ],
  whenNormal: [
    'Your baby\'s crib has only a firm mattress and a fitted sheet - this is the safest setup.',
    'Your baby occasionally gets an arm or leg through the crib slats - this is common and not dangerous.',
    'Your baby moves around the crib during sleep and bumps against the sides gently.',
  ],
  whenToMention: [
    'You are unsure about which crib accessories are safe to use.',
    'You received crib bumpers as a gift and are being pressured to use them.',
    'Your baby frequently gets limbs stuck in crib slats and seems distressed.',
  ],
  whenToActNow: [
    'You find your baby with their face pressed against a bumper or any soft object in the crib.',
    'Your baby is trapped, entangled, or wrapped in crib bumper ties or fabric.',
    'Your baby is unresponsive or has difficulty breathing in the crib for any reason - remove the obstruction and call 911.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-crib-mattress-firmness',
    'baby-co-sleeper-bassinet-safety',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Crib Bumpers Are Unsafe for Any Infant. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Crib-Bumpers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Deaths and Injuries from Crib Bumpers. Journal of Pediatrics, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27639358/',
    },
    {
      org: 'NIH',
      citation:
        'Consumer Product Safety Commission. Safe Sleep for Babies Act, 2022.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
  ],
};

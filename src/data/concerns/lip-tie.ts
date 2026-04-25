import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lip-tie',
  title: 'Baby Lip Tie',
  category: 'medical',
  searchTerms: [
    'baby lip tie',
    'upper lip tie baby',
    'lip tie breastfeeding problems',
    'lip tie vs normal frenulum',
    'baby can\'t flange upper lip',
    'lip tie causing gas',
    'baby lip tie treatment',
    'lip tie and bottle feeding',
    'lip tie and tongue tie together',
    'baby upper lip curls in when feeding',
  ],
  quickAnswer:
    'A lip tie occurs when the tissue connecting the upper lip to the upper gum (the labial frenulum) is unusually thick or tight, which may limit lip movement. Nearly all babies have a visible upper lip frenulum, and true lip tie causing functional feeding problems is much less common than many online sources suggest. Treatment is rarely necessary unless there are clear feeding difficulties.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If a lip tie is causing feeding issues, it typically shows up early as difficulty achieving a deep latch during breastfeeding, inability to flange (curl outward) the upper lip, or excessive air intake leading to gassiness. However, many latch difficulties have other causes, so a thorough breastfeeding assessment with a lactation consultant is important before attributing problems to a lip tie.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, many babies have adapted their feeding technique regardless of a lip tie. If breastfeeding is going well and your baby is gaining weight, a visible lip tie does not need treatment. Some providers may recommend releasing a lip tie along with a tongue tie if both are contributing to persistent feeding difficulties.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solids, a lip tie typically does not cause problems. The frenulum naturally thins and recedes as the face grows. Cup drinking and spoon feeding are generally unaffected. A lip tie is very unlikely to need intervention at this age for feeding purposes.',
    },
    {
      ageRange: '12 months+',
      context:
        'The upper labial frenulum often recedes on its own during toddlerhood. In some children, a thick frenulum persists and may eventually contribute to a gap between the upper front teeth (diastema), but this is a cosmetic consideration that is typically assessed much later, around age 7-8 when permanent teeth are coming in.',
    },
  ],
  whenNormal: [
    'Your baby has a visible frenulum under the upper lip, as this is a normal anatomical structure that almost everyone has',
    'Your baby can breastfeed or bottle-feed effectively and is gaining weight well, even with a visible lip tie',
    'The upper lip flanges out adequately during feeding and your baby achieves a comfortable latch',
    'Your baby sometimes takes in a bit of air during feeding, which is normal for all babies regardless of lip tie',
  ],
  whenToMention: [
    'Your baby cannot flange their upper lip outward at all during breastfeeding, resulting in a shallow latch',
    'You are experiencing persistent breastfeeding pain despite working with a lactation consultant on positioning and latch',
    'Your baby is excessively gassy or fussy after feeds and you suspect poor lip seal as a contributing factor',
  ],
  whenToActNow: [
    'Your baby is not gaining adequate weight and lip tie in combination with tongue tie is suspected as a contributing factor',
    'Your newborn is unable to feed effectively by any method and lip restriction appears to be contributing',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Tongue-Tie in Babies (includes information on lip tie).',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Tongue-Tie-in-Babies.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/3/e827/31785/Breastfeeding-and-the-Use-of-Human-Milk',
    },
  ],
};

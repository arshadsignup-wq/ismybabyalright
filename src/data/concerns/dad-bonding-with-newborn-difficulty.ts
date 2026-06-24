import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dad-bonding-with-newborn-difficulty',
  title: 'Dads Having Difficulty Bonding with Their Newborn',
  category: 'maternal',
  searchTerms: [
    'dad not bonding with baby',
    'father bonding difficulty newborn',
    'dad doesn\'t feel connected to baby',
    'new dad feeling disconnected',
    'dad struggling to bond',
    'father newborn relationship',
    'dad paternal bonding',
    'when do dads bond with baby',
    'dad postpartum depression',
    'dad feeling left out with baby',
    'father-infant attachment',
  ],
  quickAnswer:
    'Many fathers experience difficulty bonding with their newborn, and this is more common than most people realize. Unlike the birth parent who has had months of physical connection during pregnancy, fathers often need time and direct caregiving experiences to develop their bond. Research shows that paternal attachment frequently develops more gradually and deepens significantly once babies become more interactive. Paternal postpartum depression affects approximately 8-10% of new fathers and can interfere with bonding.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'The early newborn period can be especially challenging for fathers. Newborns often prefer the birthing parent (particularly if breastfed), and fathers may feel helpless, excluded, or unsure of their role. This is normal. Active participation in caregiving -- changing diapers, bathing, soothing, skin-to-skin contact, and talking to the baby -- helps fathers develop confidence and connection. Skin-to-skin time has been shown to increase paternal oxytocin levels and promote bonding. Allow yourself time; instant bonding is a myth for many parents of all genders.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'As babies begin to smile socially and become more responsive, many fathers find bonding becomes easier. If you are still feeling disconnected, detached, or ambivalent about your baby, consider whether other factors may be at play. Paternal postpartum depression and anxiety are real conditions that affect bonding and can manifest as irritability, withdrawal, anger, overwork, or substance use. These conditions are treatable, and seeking help is a sign of strength, not weakness.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Fathers often report that bonding deepens significantly during this period as babies become more interactive, playful, and responsive. If bonding difficulties persist despite efforts to engage, relationship stress, unresolved trauma, or mental health conditions should be explored. Couple counseling can help address relationship dynamics that may be affecting the father-baby connection. Research consistently shows that father involvement in early care has lasting positive effects on child development.',
    },
  ],
  whenNormal: [
    'You feel unsure about your role as a new father but are willing to try different caregiving activities.',
    'You are not feeling an instant overwhelming love but are growing more connected over time.',
    'You feel anxious about handling the baby but are gaining confidence with practice.',
  ],
  whenToMention: [
    'You have persistent feelings of disconnection from your baby after several weeks of active caregiving.',
    'You are experiencing symptoms of depression: persistent sadness, irritability, loss of interest, difficulty sleeping even when the baby is asleep, or feeling hopeless.',
    'Relationship stress with your partner is affecting your ability to be present with the baby.',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby.',
    'You are using alcohol or other substances to cope with the stress of new fatherhood.',
    'You feel intense rage or anger toward the baby or fear you might lose control.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['dad-sleep-deprivation-safety-risk', 'paternal-postpartum-depression', 'attachment-concerns'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dads Can Get Postpartum Depression, Too. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/Depression-and-Anxiety-During-Pregnancy-and-After-Birth-FAQs.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Paternal Postnatal Depression: A Review of Current Evidence. Journal of Affective Disorders.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20006842/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Essentials for Parenting: Building Positive Relationships. CDC.',
      url: 'https://www.cdc.gov/parents/essentials/index.html',
    },
  ],
};

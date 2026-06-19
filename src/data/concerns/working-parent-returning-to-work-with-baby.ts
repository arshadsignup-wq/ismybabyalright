import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'working-parent-returning-to-work-with-baby',
  title: 'Returning to Work After Having a Baby',
  category: 'maternal',
  searchTerms: [
    'returning to work after baby',
    'going back to work after maternity leave',
    'working mom guilt leaving baby',
    'how to prepare baby for daycare',
    'transitioning baby to childcare',
    'pumping at work breastfeeding',
    'emotional returning to work after baby',
    'how to cope with going back to work',
    'baby adjustment to daycare working parent',
    'work life balance new baby',
  ],
  quickAnswer:
    'Returning to work after having a baby is one of the most emotionally challenging transitions in early parenthood. Research from the AAP and APA shows that babies thrive in quality childcare settings and that the parent-child bond remains strong regardless of work status. Practical preparation includes: establishing a reliable childcare arrangement 1-2 weeks before your return date (trial runs help both you and baby adjust), building a pumping/feeding plan if breastfeeding (federal law under the PUMP Act requires employers to provide time and space for pumping for up to one year), preparing a transition schedule (starting with shorter days if possible), and having backup care plans for sick days. Emotionally, it is completely normal to feel grief, guilt, anxiety, and relief simultaneously. Studies show that most parents and babies adjust well within 2-4 weeks of consistent routine.',
  byAge: [
    {
      ageRange: '6-12 weeks (common US return)',
      context:
        'Many US parents return to work at 6-12 weeks, when the baby is still very young. At this age, babies adapt relatively easily to new caregivers because they haven\'t yet developed stranger anxiety (which typically emerges around 6-8 months). If breastfeeding, begin introducing a bottle 2-3 weeks before your return to allow baby to practice. Build a freezer stash of pumped milk if possible. The emotional difficulty for the parent is often greater than the baby\'s adjustment at this stage.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Returning at this age means your baby is more interactive and socially engaging, which can make separation feel harder. However, babies this age benefit from the social stimulation of a daycare environment. Establish a consistent drop-off routine — a brief, confident goodbye is easier for baby than a prolonged, emotional departure. Many parents find the first week the hardest, after which both parent and baby settle into the new routine.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If returning during this period, you may encounter separation anxiety (peaks around 8-10 months). This is developmentally normal and not caused by your return to work. Strategies include: practicing short separations beforehand, having a consistent goodbye ritual, and trusting that most babies calm within minutes of the parent leaving. If breastfeeding, you may be transitioning to fewer pumping sessions at work as baby eats more solids.',
    },
    {
      ageRange: '12+ months',
      context:
        'Parents returning after a longer leave may find their toddler initially resistant to the new routine. Separation protests can be intense at this age but are a sign of healthy attachment, not harm. Toddlers benefit from daycare\'s structured activities and peer socialization. Your relationship with your child is built on the quality of your time together, not the quantity of hours. Research consistently shows that children of working parents develop equally well as children of stay-at-home parents when in quality care.',
    },
  ],
  whenNormal: [
    'Crying at drop-off (you, the baby, or both) — this is extremely common and usually resolves within the first few weeks',
    'Feeling guilty about leaving your baby — this is universal and does not mean you are making the wrong choice',
    'Baby being clingy at pickup — this is a sign they missed you and feel safe expressing it',
    'Difficulty concentrating at work initially as you adjust to the new routine',
    'Feeling a mix of grief and relief about returning to work — both feelings are valid',
  ],
  whenToMention: [
    'Persistent sadness, crying, or inability to function at work or home lasting more than 2-3 weeks after returning',
    'Baby consistently refusing to eat or sleep at childcare after a reasonable adjustment period (2-3 weeks)',
    'Difficulty maintaining milk supply despite adequate pumping schedule — a lactation consultant can help',
    'Feeling disconnected from your baby during evenings and weekends',
  ],
  whenToActNow: [
    'You are experiencing symptoms of postpartum depression or anxiety that are worsening with the transition — contact your OB/midwife or call Postpartum Support International (1-800-944-4773)',
    'Your baby shows signs of distress that don\'t resolve after 3-4 weeks of consistent attendance (refusing all bottles, persistent weight loss)',
    'You have concerns about the safety or quality of your childcare arrangement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'separation-anxiety',
    'breastfeeding-supply-after-return-work',
    'formula-feeding-guilt',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Quality Matters in Early Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Why-Quality-Matters-in-Early-Child-Care.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Work, Stress, and Health: Balancing Work and Family.',
      url: 'https://www.apa.org/topics/healthy-workplaces/work-life-balance',
    },
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Returning to Work After Baby.',
      url: 'https://www.postpartum.net/get-help/',
    },
  ],
};

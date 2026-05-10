import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'postpartum-depression-in-partners',
  title: 'Postpartum Depression in Partners and Fathers',
  category: 'behavior',
  searchTerms: [
    'dad postpartum depression',
    'partner depression after baby',
    'father postnatal depression',
    'paternal postpartum depression',
    'husband depressed after baby',
    'partner withdrawing after birth',
    'new dad anxiety',
    'non-birthing parent depression',
  ],
  quickAnswer:
    'Postpartum depression does not only affect birth mothers. Research shows that roughly 1 in 10 new fathers and a similar proportion of non-birthing partners experience depression in the first year after a baby arrives. Your feelings are real, valid, and treatable — seeking help is a sign of strength, not weakness.',
  byAge: [
    {
      ageRange: 'Pregnancy',
      context:
        'Partners can begin experiencing anxiety and mood changes during pregnancy itself. Worries about finances, changing roles, and the health of the pregnant partner are common. If these worries become persistent and interfere with daily functioning, they may be early signs of perinatal mood difficulties.',
    },
    {
      ageRange: '0-3 months postpartum',
      context:
        'The first three months bring sleep deprivation, a dramatic shift in the household dynamic, and the pressure to support a recovering partner while adapting to a new identity as a parent. Partners may feel shut out of the mother-baby bond, helpless, irritable, or emotionally numb. These feelings are common but should not be dismissed.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Paternal and partner depression often peaks between three and six months postpartum, sometimes later than maternal depression. Symptoms may look different than in mothers — more irritability, anger, increased work hours to avoid home, reckless behavior, or substance use rather than classic sadness. Recognising these patterns is the first step toward getting support.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Untreated partner depression at this stage can affect the parent-child relationship and the couple relationship. If you are still struggling with persistent low mood, withdrawal, or irritability many months after your baby arrived, effective treatments are available and it is never too late to seek help.',
    },
  ],
  whenNormal: [
    'Feeling temporarily overwhelmed during the first weeks — adjusting to a new baby is hard for everyone',
    'Occasional sadness or anxiety that comes and goes and does not stop you from functioning',
    'Feeling a learning curve with baby care — not every parent feels instant confidence',
    'Brief periods of feeling disconnected that resolve as you spend more time caring for your baby',
  ],
  whenToMention: [
    'Persistent low mood, irritability, or emotional numbness lasting more than two weeks',
    'Withdrawing from your partner, baby, or activities you used to enjoy',
    'Difficulty sleeping even when the baby is sleeping, or sleeping excessively to avoid responsibilities',
  ],
  whenToActNow: [
    'Thoughts of harming yourself or your baby — call the 988 Suicide and Crisis Lifeline (call or text 988) or go to your nearest emergency room immediately',
    'Using alcohol or substances to cope in a way that feels out of control — reach out to a healthcare provider or call the SAMHSA helpline at 1-800-662-4357',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-burnout-signs',
    'relationship-strain-after-baby',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Depression and Anxiety Around Pregnancy Also Affect Dads. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/dads-can-get-postpartum-depression-too.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Paternal Postnatal Depression.',
      url: 'https://www.postpartum.net/learn-more/paternal-postnatal-depression/',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-fertility-return-breastfeeding',
  title: 'Return of Fertility While Breastfeeding',
  category: 'maternal',
  searchTerms: [
    'fertility return breastfeeding',
    'can I get pregnant while breastfeeding',
    'ovulation while breastfeeding',
    'breastfeeding as birth control',
    'lactational amenorrhea method',
    'LAM birth control breastfeeding',
    'when does fertility return after baby',
    'pregnant while nursing',
    'birth control while breastfeeding',
    'breastfeeding and ovulation signs',
  ],
  quickAnswer:
    'Exclusive breastfeeding can delay the return of fertility, but it is not a reliable form of contraception for most people. The Lactational Amenorrhea Method (LAM) is only about 98% effective when all three criteria are met: your baby is under six months old, you are exclusively breastfeeding on demand (day and night), and your period has not returned. Once any of these criteria change, you can ovulate before your first postpartum period, meaning pregnancy is possible before you realize fertility has returned.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'Fertility can theoretically return as early as three weeks after delivery, though this is uncommon for those who are breastfeeding. ACOG recommends discussing contraception before discharge from the hospital or at the postpartum visit. If you want to prevent pregnancy, it is important to have a plan in place. Many contraceptive options are safe during breastfeeding, including progestin-only pills, IUDs, and implants. Combined hormonal contraceptives are generally avoided in the first few weeks postpartum due to blood clot risk.',
    },
    {
      ageRange: '6 weeks to 6 months postpartum',
      context:
        'If you are exclusively breastfeeding on demand without supplementing, using pacifiers minimally, and your period has not returned, the Lactational Amenorrhea Method offers about 98% protection against pregnancy. However, the effectiveness drops significantly once your baby begins sleeping longer stretches at night, starts solids, or you begin pumping instead of direct breastfeeding. Many providers recommend a backup method for maximum protection. Progestin-only options like the mini-pill, hormonal IUD, or implant are compatible with breastfeeding.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Once your baby is over six months old, LAM is no longer considered reliable regardless of breastfeeding patterns. Many people notice their period returning between six and twelve months postpartum, often around the time solid foods are introduced and nursing frequency decreases. However, ovulation typically occurs before your first postpartum period, so you can become pregnant before any menstrual signs appear. If you do not want another pregnancy soon, reliable contraception is important at this stage.',
    },
    {
      ageRange: '12+ months postpartum',
      context:
        'Most breastfeeding parents have had their period return by this point, though some who nurse very frequently may not menstruate until they wean completely. If you are planning another pregnancy, know that it is possible to conceive while still breastfeeding. If you want to avoid pregnancy, ensure you have an effective contraceptive method in place. Discuss family planning with your provider, as inter-pregnancy interval affects both maternal and infant health outcomes.',
    },
  ],
  whenNormal: [
    'Your period has not returned while you are exclusively breastfeeding in the first six months',
    'Your cycles are irregular for the first few months after they return',
    'You notice changes in fertility signs (cervical mucus, ovulation pain) as breastfeeding decreases',
  ],
  whenToMention: [
    'You want to discuss contraceptive options compatible with breastfeeding',
    'You suspect you may be pregnant while breastfeeding',
    'Your periods have returned but are extremely heavy, prolonged, or painful',
    'You are planning another pregnancy and want to discuss optimal timing',
  ],
  whenToActNow: [
    'You have a positive pregnancy test and are experiencing severe abdominal pain or vaginal bleeding, which could indicate ectopic pregnancy',
    'You experience sudden heavy vaginal bleeding that soaks more than one pad per hour',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-menstruation-return-irregular',
    'postpartum-period-breastfeeding-return',
    'postpartum-sex-readiness-signs',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Birth Control. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/postpartum-birth-control',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. The Lactational Amenorrhea Method (LAM). WHO Family Planning Handbook, 2018.',
      url: 'https://www.who.int/publications/i/item/9780999203705',
    },
    {
      org: 'NIH',
      citation:
        'Van der Wijden C, Manion C. Lactational Amenorrhoea Method for Family Planning. Cochrane Database of Systematic Reviews, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26457821/',
    },
  ],
};

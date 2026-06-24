import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-birth-control-options',
  title: 'Postpartum Birth Control Options',
  category: 'maternal',
  searchTerms: [
    'birth control after baby',
    'postpartum contraception options',
    'IUD after delivery',
    'birth control while breastfeeding',
    'when can I get pregnant again after baby',
    'postpartum birth control safe breastfeeding',
    'mini pill breastfeeding',
    'postpartum IUD placement',
    'nexplanon after delivery',
    'birth control after c-section',
    'how soon can you get pregnant after giving birth',
    'LAM breastfeeding birth control',
  ],
  quickAnswer:
    'Ovulation can return as early as 3 weeks postpartum in non-breastfeeding women, making postpartum contraception an important consideration even before your first period returns. Breastfeeding alone is not reliable birth control unless very specific criteria are met (exclusive breastfeeding, baby under 6 months, no return of periods). Safe options during breastfeeding include progestin-only methods (mini-pill, Depo-Provera, hormonal IUD, implant), copper IUD, and barrier methods. Combined estrogen-progestin methods are generally avoided in the first 4-6 weeks postpartum due to blood clot risk and potential effects on milk supply.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'Some methods can be started immediately after delivery: copper IUD and hormonal IUD can be placed within 10 minutes of placental delivery (immediate postplacental insertion) or at the 6-week visit, and the contraceptive implant (Nexplanon) can be placed before hospital discharge. ACOG recommends discussing and ideally initiating contraception before discharge, as up to 40% of women do not attend the 6-week postpartum visit. If breastfeeding exclusively, the Lactational Amenorrhea Method (LAM) can be up to 98% effective if all three criteria are met: exclusively breastfeeding, no return of menses, and baby is under 6 months old.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'The 6-week postpartum visit is a common time to start or change contraception. Options include: progestin-only pill ("mini-pill"), hormonal IUD (Mirena, Kyleena, Liletta), copper IUD (Paragard), implant (Nexplanon), Depo-Provera injection, and barrier methods (condoms, diaphragm). Combined hormonal contraceptives (regular birth control pill, patch, ring) are generally safe to start at 4-6 weeks postpartum for non-breastfeeding women, or after 6 weeks for breastfeeding women, though some providers prefer to wait until 6 months if breastfeeding to avoid any potential milk supply impact.',
    },
    {
      ageRange: 'Baby 6 months and beyond',
      context:
        'Once breastfeeding is well-established (typically by 6 months), all contraceptive methods are considered safe. If you are using LAM, its effectiveness drops significantly after 6 months or when any of the three criteria are no longer met (supplemental feeding started, periods returned). The WHO recommends at least 18-24 months between delivery and the next pregnancy for optimal maternal and infant outcomes. Discuss your family planning goals with your provider to choose the method that best fits your lifestyle, medical history, and reproductive plans.',
    },
  ],
  whenNormal: [
    'You are using a postpartum contraceptive method and it is working well with no significant side effects.',
    'You have discussed birth control options with your provider and made an informed choice.',
    'Your periods have not returned while exclusively breastfeeding and you are within 6 months postpartum.',
  ],
  whenToMention: [
    'You want to discuss which birth control option is best for your situation.',
    'You are experiencing side effects from your current method (irregular bleeding, mood changes, decreased milk supply).',
    'You are unsure if you are adequately protected from pregnancy.',
    'You want to plan for another pregnancy and need to discuss timing and preconception health.',
  ],
  whenToActNow: [
    'You have had unprotected sex postpartum and are concerned about an unintended pregnancy - emergency contraception is available and safe while breastfeeding.',
    'You have signs of a blood clot (leg pain, swelling, redness, or sudden shortness of breath) while using hormonal contraception.',
    'You think you may be pregnant again and want confirmation and guidance.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-body-recovery-timeline',
    'postpartum-bleeding-how-long',
    'losing-baby-weight-safely',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG Committee Opinion No. 670: Immediate Postpartum Long-Acting Reversible Contraception, 2016.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2016/08/immediate-postpartum-long-acting-reversible-contraception',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Medical Eligibility Criteria for Contraceptive Use, 5th Edition, 2015.',
      url: 'https://www.who.int/publications/i/item/9789241549158',
    },
    {
      org: 'CDC',
      citation:
        'CDC. U.S. Medical Eligibility Criteria for Contraceptive Use.',
      url: 'https://www.cdc.gov/reproductivehealth/contraception/mmwr/mec/summary.html',
    },
  ],
};

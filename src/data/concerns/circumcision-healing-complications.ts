import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'circumcision-healing-complications',
  title: 'Circumcision Healing Complications',
  category: 'medical',
  searchTerms: [
    'circumcision healing problems',
    'circumcision infection signs baby',
    'newborn circumcision not healing',
    'circumcision bleeding won\'t stop',
    'yellow crust on circumcision',
    'circumcision red swollen baby',
    'baby circumcision care after',
    'circumcision looks infected',
    'plastibell ring not falling off',
  ],
  quickAnswer:
    'After circumcision, it is normal for the area to appear red, swollen, and to develop a yellowish crust or film as it heals over 7-10 days. This yellowish tissue is normal healing granulation, not pus. Complications such as significant bleeding, spreading redness, pus, or fever are uncommon but require prompt medical attention.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Immediately after circumcision, the area will be red and possibly swollen. There may be a petroleum jelly gauze dressing over the site. A few drops of blood on the diaper are normal. Apply petroleum jelly with each diaper change to prevent the raw area from sticking to the diaper. If a Plastibell device was used, a plastic ring will be visible and should not be pulled off. Gently clean the area with warm water during diaper changes. Avoid submerging in a bath.',
    },
    {
      ageRange: '2-5 days',
      context:
        'During this period, a yellowish-white film or crust typically forms over the circumcision site. This is normal granulation tissue and is part of the healing process. It should not be removed. Some swelling is expected and will gradually decrease. The baby may be fussy during diaper changes. Continue applying petroleum jelly to protect the area. If a Plastibell was used, it usually falls off on its own between 5-8 days.',
    },
    {
      ageRange: '5-10 days',
      context:
        'By one week, healing should be well underway. The yellow crust should be resolving, and redness and swelling should be decreasing. The Plastibell ring, if used, should fall off by around day 7-8. If it has not fallen off by day 10, contact your pediatrician. The glans may still appear somewhat red or pink, which is normal. Avoid pushing back any skin that may appear to be covering the glans, as adhesions can form during healing.',
    },
    {
      ageRange: '2-4 weeks',
      context:
        'The circumcision should be mostly or fully healed by 2-3 weeks. The skin may still look slightly different in color from surrounding tissue, which is normal. If you notice that skin appears to be re-adhering to the glans (penile adhesion), gently retract it during bath time as shown by your pediatrician. Any persistent redness, swelling, or discharge at this point should be evaluated.',
    },
  ],
  whenNormal: [
    'A yellowish-white film or crust on the healing circumcision site during the first week',
    'Mild swelling and redness around the circumcision area that gradually improves',
    'A few drops of blood on the diaper in the first 24-48 hours',
    'Slight fussiness during diaper changes in the first few days',
  ],
  whenToMention: [
    'You are unsure whether the yellowish discharge is normal healing tissue or signs of infection',
    'The Plastibell ring has not fallen off after 10 days',
    'You notice skin beginning to re-adhere to the glans or an uneven cosmetic result',
  ],
  whenToActNow: [
    'There is active bleeding that does not stop after 10 minutes of gentle pressure, blood soaks the diaper, or bleeding restarts repeatedly, as this may require medical intervention to control',
    'The circumcision site has spreading redness, is draining thick yellow or green pus, feels warm, or the baby develops a fever, as these are signs of infection that require prompt treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Circumcision Aftercare. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/decisions-to-make/Pages/Circumcision-Aftercare.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Circumcision (Male). Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/tests-procedures/circumcision/about/pac-20393550',
    },
  ],
};

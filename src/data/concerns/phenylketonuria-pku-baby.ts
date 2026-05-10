import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'phenylketonuria-pku-baby',
  title: 'Phenylketonuria (PKU) in Babies',
  category: 'medical',
  searchTerms: [
    'PKU baby',
    'phenylketonuria signs baby',
    'newborn screening PKU',
    'baby musty odor',
    'PKU diet baby',
    'baby phenylalanine high',
    'PKU newborn test positive',
    'phenylketonuria infant symptoms',
  ],
  quickAnswer:
    'Phenylketonuria (PKU) is a rare inherited metabolic disorder where the body cannot break down the amino acid phenylalanine, which is found in most protein-containing foods. It affects about 1 in 10,000 to 15,000 newborns. PKU is detected through the newborn screening test, and with early dietary treatment started within the first weeks of life, children with PKU develop normally.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns with PKU appear healthy at birth. The condition is almost always caught through the routine newborn screening (heel prick test) before symptoms appear. If detected, a special low-phenylalanine formula is started immediately. Without treatment, phenylalanine accumulates in the blood and brain, eventually causing irreversible intellectual disability. Early and consistent treatment prevents this entirely.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies on a properly managed PKU diet grow and develop normally. Blood phenylalanine levels are monitored frequently — typically weekly at this age — to keep them in the safe range. Untreated babies may begin to show lighter skin and hair than family members, a musty body odor, irritability, and developmental delays.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins solid foods, dietary management becomes more involved. A metabolic dietitian will guide you on which foods are safe and in what quantities. Your baby will continue on special low-protein formula as their primary protein source. With adherence to the diet, your baby should meet all developmental milestones on schedule.',
    },
    {
      ageRange: '12 months+',
      context:
        'PKU is a lifelong condition requiring dietary management. As your child grows, they will learn to participate in their dietary management. The PKU diet restricts high-protein foods like meat, dairy, eggs, and nuts, but with modern medical formulas and low-protein specialty foods, children can enjoy a varied and satisfying diet. Some patients may benefit from the medication sapropterin (Kuvan).',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for PKU',
    'Your baby is on PKU treatment and phenylalanine levels are in the target range',
    'Your baby is meeting developmental milestones on schedule while on the PKU diet',
    'Your treated baby has normal growth patterns and is alert and interactive',
  ],
  whenToMention: [
    'You received an abnormal or borderline PKU result on your baby\'s newborn screen — follow up promptly for confirmatory testing',
    'Your baby on PKU treatment has phenylalanine levels that are consistently above the target range',
    'You are struggling to maintain the PKU diet and need additional support from a metabolic team',
  ],
  whenToActNow: [
    'Your newborn screening indicates a positive PKU result and you have not yet been contacted by a metabolic specialist — call your pediatrician immediately to ensure prompt treatment',
    'Your baby with PKU is vomiting, refusing formula, or is unable to keep down the special formula for more than 24 hours — metabolic crisis can occur during illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Phenylketonuria. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/phenylketonuria/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. PKU (Phenylketonuria) in Your Baby. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/find-support/topics/planning-baby/newborn-screening-tests-your-baby',
    },
  ],
};

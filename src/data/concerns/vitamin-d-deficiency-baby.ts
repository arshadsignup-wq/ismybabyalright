import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vitamin-d-deficiency-baby',
  title: 'Vitamin D Deficiency in Babies',
  category: 'feeding',
  searchTerms: [
    'vitamin D deficiency baby',
    'baby vitamin D drops',
    'breastfed baby vitamin D',
    'rickets in babies',
    'how much vitamin D does baby need',
    'signs of low vitamin D infant',
    'vitamin D supplement newborn',
    'baby bones soft vitamin D',
  ],
  quickAnswer:
    'Vitamin D is essential for calcium absorption and healthy bone development. Breast milk alone does not provide adequate vitamin D, so the AAP recommends all breastfed and partially breastfed infants receive 400 IU of vitamin D daily beginning within the first few days of life. Formula-fed babies who drink less than 32 ounces per day also need supplementation. Severe deficiency can lead to rickets, a condition causing soft and weak bones.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have limited vitamin D stores, especially if the mother was deficient during pregnancy. The AAP recommends starting 400 IU of vitamin D drops daily within the first few days of life for all breastfed or partially breastfed infants. Formula-fed infants who consistently consume at least 32 ounces of vitamin D-fortified formula daily do not need additional supplementation. Liquid vitamin D drops designed for infants are widely available.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue daily vitamin D supplementation of 400 IU for breastfed babies. Signs of deficiency at this age are rare but can include poor growth, delayed motor milestones, or unusually soft skull bones (craniotabes). Babies with darker skin tones or those who live in northern latitudes with limited sun exposure may be at higher risk. Never rely on sun exposure alone for infant vitamin D, as direct sunlight is not recommended for babies under 6 months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As complementary foods are introduced, some vitamin D can come from dietary sources like fortified cereals, egg yolks, and fatty fish. However, it is difficult for infants to get enough vitamin D from food alone. Continue supplementation of 400 IU daily unless your pediatrician advises otherwise. Babies who spend most of their time indoors or wear sunscreen consistently remain at higher risk for deficiency.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers need 600 IU of vitamin D daily. Vitamin D-fortified whole milk (introduced at 12 months) provides about 100 IU per 8-ounce serving, contributing to but rarely meeting the full daily requirement. Fortified foods, fatty fish, and egg yolks can supplement intake. Many pediatricians recommend continuing a vitamin D supplement, especially for picky eaters or children with limited outdoor time. Your pediatrician can check a 25-hydroxyvitamin D blood level if deficiency is suspected.',
    },
  ],
  whenNormal: [
    'Your breastfed baby is receiving 400 IU of vitamin D supplementation daily and growing well',
    'Your formula-fed baby is drinking at least 32 ounces of vitamin D-fortified formula daily',
    'Your toddler drinks fortified milk and eats a varied diet that includes vitamin D-containing foods',
    'Your baby is meeting motor milestones and has no bone abnormalities',
  ],
  whenToMention: [
    'Your baby seems to have unusually soft or flexible skull bones',
    'Your baby or toddler is falling behind on growth curves or motor milestones despite adequate calories',
    'Your child has very limited dietary intake of vitamin D-fortified foods and does not take a supplement',
  ],
  whenToActNow: [
    'Your baby or toddler has visible bowing of the legs, bone pain, or fractures from minimal trauma, which could indicate rickets',
    'Your baby has seizures or muscle spasms, which can occur with severe vitamin D and calcium deficiency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Wagner CL, Greer FR; Section on Breastfeeding and Committee on Nutrition. Prevention of Rickets and Vitamin D Deficiency in Infants, Children, and Adolescents. Pediatrics. 2008;122(5):1142-1152.',
      url: 'https://publications.aap.org/pediatrics/article/122/5/1142/72897/Prevention-of-Rickets-and-Vitamin-D-Deficiency-in',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Vitamin D Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vitamin D. Nutrition for Infants and Toddlers.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/vitamin-d.html',
    },
  ],
};

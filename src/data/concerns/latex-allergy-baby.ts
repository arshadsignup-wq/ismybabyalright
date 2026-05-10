import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'latex-allergy-baby',
  title: 'Latex Allergy in Babies',
  category: 'medical',
  searchTerms: [
    'latex allergy baby',
    'baby allergic to latex',
    'latex allergy symptoms infant',
    'baby rash from rubber',
    'latex allergy pacifier',
    'baby allergic to balloons',
    'latex allergy and banana allergy baby',
    'natural rubber allergy infant',
  ],
  quickAnswer:
    'Latex allergy in babies is uncommon but can occur, especially in children who have had multiple surgeries or medical procedures involving latex exposure (such as babies with spina bifida). Symptoms range from skin rash and hives at the contact site to potentially severe anaphylactic reactions. Some natural rubber latex proteins cross-react with certain foods like banana, avocado, kiwi, and chestnut.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Latex allergy in newborns is rare but babies who require frequent medical procedures or surgeries from birth (such as those with spina bifida or urological conditions) are at higher risk due to repeated latex exposure. If your baby has had multiple surgeries, ask your medical team about using latex-free products. Natural rubber latex pacifiers and bottle nipples can also be a source of exposure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby develops a rash, hives, or redness specifically where latex products touch their skin (such as from rubber-soled socks, pacifiers, or during medical exams with latex gloves), mention this to your pediatrician. Sensitization develops over time with repeated exposure, so a baby who tolerated latex initially may develop an allergy later.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, they may encounter more latex-containing products including rubber toys, rubber bands, and balloons. Watch for skin reactions (redness, hives, itching) at contact points. Babies with known latex allergy should have all medical encounters documented as latex-free. Also be aware of latex-fruit cross-reactivity when introducing banana, avocado, and kiwi.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers encounter latex through balloons, rubber toys, and arts-and-crafts supplies. If your child has a confirmed latex allergy, alert daycare providers and caregivers. Carry a medical alert bracelet and an epinephrine auto-injector if prescribed. An allergist can provide comprehensive testing and guidance on avoidance strategies and cross-reactive foods.',
    },
  ],
  whenNormal: [
    'Baby has a brief redness from a tight elastic waistband that resolves when removed',
    'Baby has general skin irritation or contact dermatitis from any material, not specific to latex',
    'Baby drools on rubber toys without any rash or reaction',
    'Baby tolerates banana, avocado, and kiwi without any symptoms',
  ],
  whenToMention: [
    'Baby consistently develops a rash or hives specifically where latex products contact skin',
    'Baby has had multiple surgeries and you want to discuss latex allergy risk',
    'Baby has a rash after exposure to rubber products and also reacts to banana, avocado, or kiwi',
  ],
  whenToActNow: [
    'Baby develops widespread hives, facial swelling, or difficulty breathing after latex contact -- call 911',
    'Baby shows signs of anaphylaxis (wheezing, swelling, vomiting, lethargy) after exposure to latex products',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Latex Allergy. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/latex-allergy/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Latex Allergy. Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/latex-allergy/symptoms-causes/syc-20374287',
    },
  ],
};

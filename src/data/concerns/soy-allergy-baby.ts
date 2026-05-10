import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'soy-allergy-baby',
  title: 'Soy Allergy in Babies',
  category: 'feeding',
  searchTerms: [
    'soy allergy baby',
    'baby allergic to soy formula',
    'soy allergy symptoms infant',
    'soy intolerance baby',
    'baby reacting to soy',
    'soy allergy and milk allergy baby',
    'soy in baby food allergy',
    'soy formula allergy signs',
  ],
  quickAnswer:
    'Soy allergy is one of the more common food allergies in infants and young children. It can cause hives, vomiting, diarrhea, eczema flares, and in rare cases, anaphylaxis. About 10-14% of babies with cow\'s milk protein allergy are also allergic to soy. Soy allergy is typically outgrown by age 3-5. Soy is found in many processed foods, so reading labels carefully is essential for managing this allergy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Soy allergy may present when a baby is switched from breast milk to soy-based formula or when soy proteins pass through breast milk. Symptoms include vomiting, diarrhea, blood in stool, eczema, and excessive fussiness. Because many babies with cow\'s milk allergy also react to soy, soy formula is generally not recommended as a first-line alternative for CMPA. An extensively hydrolyzed formula is preferred.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has been diagnosed with both milk and soy allergies, an extensively hydrolyzed or amino acid-based formula is necessary. If you are breastfeeding, your pediatrician may recommend eliminating both dairy and soy from your diet. Be aware that soy lecithin and soybean oil are generally tolerated by soy-allergic babies because they contain minimal protein.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, be vigilant about soy in baby foods and snacks. Soy is found in many products including bread, cereals, crackers, and sauces. Read ingredient labels for soy, soy protein, soy flour, textured vegetable protein, and other soy derivatives. Edamame, tofu, tempeh, and miso are obvious soy sources to avoid. Always introduce new foods one at a time to track reactions.',
    },
    {
      ageRange: '12 months+',
      context:
        'Many children outgrow soy allergy between ages 3-5. Your allergist may recommend periodic testing and a supervised oral food challenge to determine if your child has developed tolerance. Until then, continue strict soy avoidance and ensure all caregivers understand how to read food labels and recognize allergic reactions. A medical alert bracelet may be appropriate if reactions have been severe.',
    },
  ],
  whenNormal: [
    'Baby has mild gas or loose stools when trying soy products for the first time but no rash or vomiting',
    'Baby tolerates soy sauce or soy lecithin without symptoms (these contain minimal soy protein)',
    'Baby has temporary digestive upset during a stomach virus, not related to soy exposure',
    'Baby dislikes the taste of soy-based foods but has no allergic symptoms',
  ],
  whenToMention: [
    'Baby develops hives, vomiting, or worsening eczema consistently after soy-containing foods',
    'Baby has blood or mucus in stool while on soy formula',
    'Baby has a known milk allergy and you want to discuss whether soy is safe to introduce',
  ],
  whenToActNow: [
    'Baby develops facial swelling, widespread hives, or difficulty breathing after eating soy -- call 911',
    'Baby has severe vomiting with lethargy or pallor hours after eating soy (possible FPIES reaction) -- seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Soy Allergy. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/soy/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Soy Formula: Is It Safe for My Baby? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Soy-Formula-Safety.aspx',
    },
  ],
};

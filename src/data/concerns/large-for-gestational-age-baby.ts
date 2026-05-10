import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'large-for-gestational-age-baby',
  title: 'Large for Gestational Age Baby',
  category: 'physical',
  searchTerms: [
    'large for gestational age baby',
    'LGA baby',
    'baby born very large',
    'macrosomia baby',
    'big baby at birth',
    'baby born over 9 pounds',
    'large birth weight baby concerns',
    'gestational diabetes large baby',
  ],
  quickAnswer:
    'A baby who is large for gestational age (LGA) weighs above the 90th percentile for their gestational age at birth, typically over 8 pounds 13 ounces (4,000 grams) at full term. The most common causes are maternal gestational diabetes, genetics (large parents), excessive maternal weight gain during pregnancy, and post-date delivery. While many LGA babies are perfectly healthy, they may face certain short-term risks including birth injuries, low blood sugar after birth, and jaundice. Most LGA babies gradually adjust to a growth trajectory that matches their genetic potential within the first 1-2 years.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'LGA babies, especially those born to mothers with gestational diabetes, are monitored closely after birth for hypoglycemia (low blood sugar), which can occur in the first 24-48 hours as the baby adjusts to life outside the womb. They may also be at higher risk for jaundice, birth injuries (such as clavicle fracture or brachial plexus injury from delivery), and polycythemia (high red blood cell count). Once these immediate concerns are addressed, most LGA babies transition well. Their growth in the first months may appear to "slow down" as they adjust toward their genetic curve.',
    },
    {
      ageRange: '3-6 months',
      context:
        'LGA babies whose mothers had gestational diabetes often show growth deceleration during this period  -  they were large at birth due to excess insulin and glucose exposure in the womb, not because of genetic programming for a large body size. This downward adjustment is normal and expected. Babies who are LGA due to genetic factors (large parents) may continue growing along higher percentiles, which is also normal. Your pediatrician will track the growth trajectory to ensure it is stabilizing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most LGA babies have settled into a growth pattern that reflects their true genetic potential. A baby who was 95th percentile at birth may now be tracking at the 50th or 60th percentile  -  this is normal "regression to the mean," not failure to thrive. Feeding should be responsive and on demand. There is no need to restrict a baby\'s diet because they were large at birth. If your baby continues to grow along very high percentiles and both parents are average size, your pediatrician may monitor more closely.',
    },
    {
      ageRange: '12 months+',
      context:
        'By the toddler years, birth size matters much less  -  the child\'s growth is now primarily driven by genetics, nutrition, and overall health. If your LGA baby had a mother with gestational diabetes, monitoring for the child\'s own metabolic health in later childhood may be discussed. Establishing healthy eating habits and regular physical activity from toddlerhood is beneficial for all children but particularly relevant when there is a family tendency toward larger body size or diabetes.',
    },
  ],
  whenNormal: [
    'Your LGA baby is growing along a consistent percentile after the initial adjustment period  -  whether that is a high or moderate percentile, consistency is key.',
    'Your LGA baby dropped from a very high birth percentile to a moderate percentile in the first 6-12 months  -  this natural correction is normal and expected.',
    'Both parents are taller or larger and your baby continues to track at higher percentiles  -  they are following their genetic potential.',
    'Your LGA baby passed the newborn blood sugar screening and has been feeding and growing well since.',
  ],
  whenToMention: [
    'Your LGA baby is continuing to gain weight very rapidly and is becoming increasingly disproportionate (weight much higher than length percentile).',
    'Your LGA baby had a birth injury (such as a clavicle fracture or arm weakness) and you have questions about healing and follow-up.',
    'You had gestational diabetes and want to discuss your child\'s future metabolic risk and preventive strategies.',
  ],
  whenToActNow: [
    'Your newborn LGA baby is jittery, lethargic, feeding poorly, or having episodes of color change in the first days of life  -  these could indicate low blood sugar or other metabolic issues requiring urgent evaluation.',
    'Your LGA baby is not moving one arm normally after birth  -  this could indicate a brachial plexus injury or clavicle fracture that needs assessment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Large for Gestational Age (LGA). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/default.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fetal Macrosomia.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fetal-macrosomia/symptoms-causes/syc-20372579',
    },
  ],
};

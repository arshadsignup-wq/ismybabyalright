import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'short-stature-baby',
  title: 'My Baby Seems Short for Their Age',
  category: 'medical',
  searchTerms: [
    'baby short for age',
    'baby not growing tall enough',
    'baby length below average',
    'baby height percentile low',
    'baby growth faltering',
    'failure to thrive baby',
    'baby short stature',
    'baby growth hormone deficiency',
    'baby not gaining height',
    'small baby for age',
  ],
  quickAnswer:
    'Babies grow at different rates, and size is strongly influenced by genetics. A baby who is consistently on a lower percentile but following their growth curve is usually perfectly healthy. However, if your baby\'s length is falling off their growth curve or is significantly below expected, your pediatrician may want to evaluate for nutritional, hormonal, or other medical causes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Birth length is influenced by the in-utero environment, and many babies undergo a period of \'catch-up\' or \'catch-down\' growth in the first 6 months as they shift toward their genetically determined growth trajectory. A baby born large to small parents may slow down in growth, while a baby born small to tall parents may grow more quickly. Premature babies should have their measurements plotted on adjusted-age growth charts. Length at this age is less reliably measured and can vary based on technique.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, most babies have settled onto their genetic growth curve. If your baby is consistently around the 5th-10th percentile but parallel to the curve and feeding well, this is likely their normal pattern. However, length that is falling off the curve or is significantly below the 3rd percentile warrants investigation. Your pediatrician may consider nutritional assessment, thyroid function testing, and evaluation for other conditions. Adequate nutrition, especially protein and calories, is essential for linear growth.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers\' growth rate naturally slows compared to infancy. Some children experience constitutional growth delay, where they are shorter than peers initially but eventually catch up, often with a later puberty. This is a normal variant and often runs in families. Disproportionate short stature (where limbs are short relative to the trunk or vice versa) may suggest a skeletal dysplasia and warrants evaluation by a specialist.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Height at age 2 begins to correlate more strongly with adult height. If your child is consistently well below the growth curve, your pediatrician may calculate a mid-parental height (target height based on parents) and may order blood tests including thyroid function, growth hormone levels, and bone age X-ray. Growth hormone deficiency, while uncommon, is treatable if diagnosed. Celiac disease is another underrecognized cause of poor growth that can be screened with a blood test.',
    },
  ],
  whenNormal: [
    'Your baby is on a lower percentile (3rd-10th) but following the curve consistently and both parents are shorter than average',
    'Your baby was born premature and their corrected-age measurements are tracking appropriately',
    'Your baby recently shifted from a higher to lower percentile in the first 6 months as they found their genetic growth channel',
    'Your baby is growing steadily, eating well, and meeting developmental milestones',
  ],
  whenToMention: [
    'Your baby\'s length has crossed downward across two or more percentile lines on the growth chart',
    'Your baby\'s growth rate seems to have slowed or stalled compared to previous visits',
    'Your child is significantly shorter than expected based on both parents\' heights',
  ],
  whenToActNow: [
    'Your baby has stopped gaining length and weight together, is losing weight, or has signs of malnutrition such as thin arms and legs with a distended belly',
    'Your child has disproportionate body segments (very short limbs relative to trunk), which could indicate a skeletal condition requiring specialist evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Tracking Your Child\'s Growth.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glandular/Pages/Growth-Charts.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Palczewska I, Niedzwiedzka Z. Somatic Development Indices in Children and Youth of Warsaw. Pediatrics, Endocrine Society Guidelines for Growth Hormone Deficiency.',
      url: 'https://publications.aap.org/pediatrics',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Growth Hormone Deficiency in Children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/growth-hormone-deficiency/symptoms-causes/syc-20372502',
    },
  ],
};

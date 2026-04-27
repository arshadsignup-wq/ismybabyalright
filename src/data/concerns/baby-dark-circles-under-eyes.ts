import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dark-circles-under-eyes',
  title: 'Dark Circles Under Baby\'s Eyes',
  category: 'skin',
  searchTerms: ['baby dark circles under eyes','toddler dark circles under eyes','baby looks tired dark eyes','baby dark eye circles allergies','baby periorbital darkening','baby puffy eyes dark circles','dark under eyes baby sick','baby dark circles iron deficiency','toddler allergic shiners','baby blue under eyes','baby looks exhausted dark circles','dark circles baby normal'],
  quickAnswer: 'Dark circles under a baby\'s or toddler\'s eyes are usually caused by thin skin allowing blood vessels to show through, nasal congestion (called "allergic shiners"), or genetics. The under-eye skin is the thinnest on the body, and in fair-skinned babies, the bluish-purple blood vessels are often visible. Nasal congestion from colds, allergies, or enlarged adenoids causes blood to pool in the veins around the eyes, creating darker shadows. Dark circles alone are rarely a sign of serious illness.',
  byAge: [
    { ageRange: '0-6 months', context: 'Newborns and young babies often have visible veins under their thin under-eye skin, giving a dark or blue appearance. This is especially noticeable in fair-skinned babies and is simply a characteristic of thin skin - not a sign of tiredness or illness. If your baby has nasal congestion from a cold, the dark circles may temporarily worsen as congestion impedes blood flow in the area. Dehydration can also make the under-eye area appear sunken and darker, so ensure adequate feeding.' },
    { ageRange: '6-12 months', context: 'As babies become more social and you see their face more during wakeful periods, dark circles may become more noticeable. If dark circles appear alongside persistent nasal congestion, mouth breathing, and snoring, your baby may have enlarged adenoids or allergies that are causing the congestion. Dark circles from allergies are called "allergic shiners" and are caused by congestion in the nasal and sinus veins that affects the under-eye area.' },
    { ageRange: '12-24 months', context: 'Toddlers with seasonal or environmental allergies often develop persistent dark circles. Other allergy signs include: rubbing the nose upward (allergic salute), chronic clear runny nose, sneezing, and itchy eyes. If your toddler has dark circles with no other symptoms and is eating, sleeping, and growing well, it is likely genetic or related to their skin type. Iron deficiency anemia can cause pallor that makes dark circles more prominent, but dark circles alone do not indicate anemia.' },
    { ageRange: '2-3 years', context: 'If your child has chronic dark circles along with snoring, mouth breathing, and restless sleep, their adenoids may be enlarged and affecting both breathing and sleep quality. This is worth mentioning to your pediatrician. Dark circles that come and go with cold and allergy season are typical allergic shiners. If your child is otherwise healthy, active, and growing well, persistent dark circles are most likely a cosmetic feature rather than a medical concern.' },
  ],
  whenNormal: ['Your baby has always had slight dark circles and is fair-skinned - this is likely thin skin and visible veins','Dark circles appear during colds and resolve when congestion clears','A family member also has naturally prominent dark circles - genetics play a strong role','Your child is eating, sleeping, and developing normally despite the dark circles'],
  whenToMention: ['Dark circles are accompanied by chronic nasal congestion, mouth breathing, or snoring','Your child looks persistently pale alongside the dark circles - iron levels may be worth checking','Dark circles appeared suddenly and are accompanied by swelling, puffiness, or changes in urination','Your child seems excessively tired or fatigued along with worsening dark circles'],
  whenToActNow: ['Sudden puffiness and dark circles around both eyes along with decreased urination or swollen legs could indicate a kidney issue','Your child has dark circles with extreme pallor, lethargy, and bruising easily - needs blood work evaluation','Swelling around one eye that is getting worse, red, or warm - could indicate infection'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rash-wont-go-away','baby-cold-when-to-worry','baby-sneezing-a-lot'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Allergies in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Allergic Rhinitis. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/000813.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Anemia in Children and Teens. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Anemia-and-Your-Child.aspx' },
  ],
};

import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cold-hands-and-feet',
  title: 'Baby Always Has Cold Hands and Feet',
  category: 'medical',
  searchTerms: ['baby cold hands and feet','baby hands always cold','baby feet cold','newborn cold hands','baby cold extremities','baby purple hands','baby circulation hands','why are my baby\'s hands always cold','baby cold hands but body warm','baby cold feet at night','baby hands turn blue cold','acrocyanosis baby'],
  quickAnswer: 'Cold hands and feet in babies are almost always normal, especially in newborns. Babies have an immature circulatory system that prioritizes sending blood to vital organs (brain, heart, lungs) over extremities. This means their hands and feet can feel cool and even look bluish or mottled while their core body remains warm. This is called acrocyanosis and is completely normal in the first few months. As your baby\'s circulation matures, this improves. Check your baby\'s warmth by feeling their chest or back, not their hands or feet.',
  byAge: [
    { ageRange: '0-3 months', context: 'Cold hands and feet are extremely common in newborns. Acrocyanosis - a bluish or purple tinge to the hands and feet - is normal in the first 48-72 hours and can recur when the baby is cold or during feeding. It is caused by the immature circulatory system directing blood centrally. As long as your baby\'s lips, tongue, and chest are pink and warm, cold hands and feet are not concerning. To check temperature, feel the chest or back of the neck rather than the extremities.' },
    { ageRange: '3-6 months', context: 'Cold hands and feet begin improving as circulation matures but may persist, especially in cooler environments. Babies are not yet very efficient at regulating their own temperature. Dress your baby in one more layer than what you are comfortable wearing. Socks, mittens, and footed sleepers help. If your baby\'s hands turn blue or mottled only when cold and return to pink when warmed, this is normal vasomotor response.' },
    { ageRange: '6-12 months', context: 'By this age, most babies have improved circulation and cold hands and feet are less noticeable. If your baby\'s hands and feet are consistently very cold despite being in a warm environment, and especially if combined with feeding difficulties, poor weight gain, or unusual fatigue, mention it to your pediatrician. Rarely, persistently cold extremities can be associated with heart conditions, but these typically have other symptoms as well.' },
    { ageRange: '12-36 months', context: 'Toddlers may have cold hands and feet when they run around barefoot on cold floors or in cool weather - this is expected. Some children naturally have cooler extremities than others. If your toddler\'s hands or feet frequently turn white, blue, or red in response to cold and this is painful, mention it to your doctor as it could (very rarely in young children) indicate a circulatory condition.' },
  ],
  whenNormal: ['Your newborn\'s hands and feet are cool or slightly bluish but their chest and lips are pink and warm','Cold extremities improve when you warm them with socks, mittens, or skin-to-skin contact','Your baby is feeding well, alert, and gaining weight normally despite cool hands and feet','Cold hands and feet are more noticeable after a bath, during a diaper change, or in a cooler room'],
  whenToMention: ['Your baby\'s hands and feet are persistently cold despite a warm environment and adequate clothing','Cold hands and feet are accompanied by mottling that does not improve with warming','Your baby seems unusually lethargic or feeds poorly alongside cold extremities'],
  whenToActNow: ['Your baby\'s lips, tongue, or core body (not just hands and feet) are blue or gray - this suggests central cyanosis and needs emergency evaluation','Your baby is difficult to rouse, has weak cry, or is not feeding and has cold extremities - these could indicate serious illness','Your newborn\'s entire body feels cold despite bundling and the room being warm'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['cyanosis-baby','low-temperature-baby','pallor-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Acrocyanosis in Neonates. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/001587.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dressing Your Newborn. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Dressing-Your-Newborn.aspx' },
  ],
};

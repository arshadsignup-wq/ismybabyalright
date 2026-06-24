import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'magnet-ingestion-danger-baby',
  title: 'Magnet Ingestion Danger in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'baby swallowed magnet',
    'toddler ate magnet',
    'magnet ingestion danger child',
    'rare earth magnet swallowed baby',
    'Buckyballs child swallowed',
    'magnetic toy danger baby',
    'child swallowed two magnets',
    'magnet ingestion symptoms',
    'refrigerator magnet swallowed baby',
    'high powered magnet danger child',
  ],
  quickAnswer:
    'Magnet ingestion is a true pediatric emergency, especially when two or more magnets (or a magnet and a metal object) are swallowed. Multiple magnets can attract each other through intestinal walls, causing pressure necrosis, perforation, bowel obstruction, fistula formation, sepsis, and death. Emergency rooms report a 75% increase in magnet ingestion cases in recent years, largely due to high-powered rare-earth magnets in toys and household items. A single small magnet will usually pass harmlessly, but multiple magnets require urgent surgical evaluation.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies are at risk primarily from magnets that fall off refrigerator doors, magnetic toys belonging to older siblings, and small magnetic components of household items. Even a small rare-earth magnet (such as those in magnetic building sets or jewelry clasps) is incredibly powerful relative to its size. Baby-proof your home by keeping all magnetic products out of reach. If you suspect your baby swallowed any magnet, go to the emergency room immediately. Do not wait for symptoms, as the damage from multiple magnets can be rapid and initially silent.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are at peak risk because they explore everything by mouthing it and are increasingly mobile. High-powered magnetic building sets, magnetic dart boards, magnetic jewelry, and fridge magnets are all potential hazards. Symptoms of magnet ingestion may be delayed and can mimic a stomach virus: vomiting, abdominal pain, decreased appetite, and irritability. By the time symptoms appear, significant internal damage may have already occurred. X-rays are essential for diagnosis, as multiple magnets lined up may look like a single object on imaging.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers may intentionally put magnets in their mouths, nose, or ears. Nasal and ear magnet insertions are also dangerous and require medical removal. At this age, children may swallow magnets without a parent witnessing it, making diagnosis more challenging. Any child with unexplained abdominal symptoms (vomiting, pain, refusal to eat) and potential access to small magnets should be evaluated with abdominal X-ray. Prevention is key: the CPSC has recalled multiple high-powered magnet sets, and these products should not be in homes with young children.',
    },
  ],
  whenNormal: [
    'Your child swallowed a single weak refrigerator magnet and your doctor has confirmed with X-ray that only one magnet is present - they will likely monitor for safe passage.',
    'You have removed all accessible small magnets from your home and are following age-appropriate safety practices.',
  ],
  whenToMention: [
    'You are unsure whether your child swallowed a magnet or how many magnets may be missing from a set.',
    'Your child has unexplained vomiting, abdominal pain, or decreased appetite and has access to magnetic toys.',
  ],
  whenToActNow: [
    'Your child has swallowed or may have swallowed two or more magnets, or a magnet and a metal object - this is a surgical emergency. Go to the emergency room immediately.',
    'Your child has swallowed any high-powered rare-earth magnet (such as from Buckyballs or magnetic building sets) - these are far more dangerous than ordinary magnets.',
    'Your child is showing signs of bowel obstruction or perforation after potential magnet ingestion: severe abdominal pain, vomiting, fever, bloody stools, or abdominal distension.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-swallowed-object',
    'baby-choking-on-food',
    'baby-eating-non-food-pica',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Magnet Ingestion in Children: A Growing Hazard. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/6/e2022059498/190079/Magnet-Ingestion-in-Children',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. High-Powered Magnet Sets Pose Ingestion Hazard.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Magnets',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Magnet Ingestion in Children: An Increasing Surgical Emergency. Journal of Pediatric Surgery, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33712284/',
    },
  ],
};

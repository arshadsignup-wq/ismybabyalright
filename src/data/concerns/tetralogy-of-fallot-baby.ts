import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tetralogy-of-fallot-baby',
  title: 'Tetralogy of Fallot in Babies',
  category: 'medical',
  searchTerms: [
    'tetralogy of fallot baby',
    'TOF baby signs',
    'baby blue spells',
    'tet spells baby',
    'baby turns blue when crying',
    'tetralogy of fallot surgery baby',
    'baby cyanotic heart defect',
    'baby heart defect four problems',
  ],
  quickAnswer:
    'Tetralogy of Fallot (TOF) is the most common cyanotic (blue) congenital heart defect, affecting about 1 in 2,500 babies. It involves four heart abnormalities that together reduce blood flow to the lungs and cause oxygen-poor blood to flow to the body. Most babies undergo complete surgical repair between 3-6 months of age, and the long-term outlook after repair is excellent, with most children leading active, normal lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'TOF is often diagnosed prenatally or shortly after birth through a heart murmur, low oxygen levels on pulse oximetry, or visible cyanosis (blue coloring). Some babies have a "pink" form with adequate oxygen levels at first. Before surgical repair, babies may experience "tet spells" — sudden episodes where they turn very blue, become limp, and breathe rapidly, often triggered by crying, feeding, or bowel movements. Learning to manage tet spells (holding baby in knee-to-chest position) is important while awaiting surgery.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Complete surgical repair is typically performed between 3-6 months of age. The surgery corrects the four structural defects, improving blood flow to the lungs and oxygen delivery to the body. Some babies may need an earlier palliative procedure (BT shunt) if they are too small or too cyanotic for complete repair. After successful surgery, oxygen levels improve dramatically and tet spells resolve.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After surgical repair, most babies show dramatic improvement — improved feeding, weight gain, increased energy, and better color. Follow-up echocardiograms monitor the repair. Some degree of pulmonary valve leaking (regurgitation) is expected after repair and is usually well tolerated. Developmental catch-up is common after successful surgery. Your baby should be able to be active and feed normally.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most children with repaired TOF lead normal, active lives. Lifelong cardiac follow-up is necessary, as some patients eventually need a pulmonary valve replacement (often in their teens or twenties). Exercise capacity is typically normal or near-normal. Developmental follow-up is recommended for all children who had open-heart surgery, as there is a slightly increased risk of learning differences.',
    },
  ],
  whenNormal: [
    'Your baby had a successful TOF repair and is feeding well, gaining weight, and active',
    'Your baby has mild pulmonary valve regurgitation after repair — this is expected and typically well tolerated',
    'Your baby is meeting developmental milestones after surgery',
    'Your baby\'s oxygen levels are consistently above 95% after repair',
  ],
  whenToMention: [
    'Your baby has been diagnosed with TOF and has not yet had surgical repair — discuss the surgical timeline with your cardiologist',
    'Your baby has had a tet spell — your care team should know, even if the baby recovered',
    'Your baby after TOF repair seems to be tiring easily, gaining weight slowly, or has new breathing difficulties',
  ],
  whenToActNow: [
    'Your baby is having a tet spell that does not resolve with the knee-to-chest position within a few minutes — call 911',
    'Your baby is deeply blue, limp, or unresponsive — this is a life-threatening emergency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Tetralogy of Fallot. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/tetralogyoffallot.html',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Tetralogy of Fallot. NHLBI, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/tetralogy-fallot',
    },
  ],
};

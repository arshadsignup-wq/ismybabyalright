import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'imperforate-anus-baby',
  title: 'My Baby Has an Imperforate Anus (Anorectal Malformation)',
  category: 'medical',
  searchTerms: [
    'baby imperforate anus',
    'anorectal malformation baby',
    'baby no anal opening',
    'baby not passing meconium',
    'imperforate anus surgery',
    'imperforate anus treatment',
    'imperforate anus VACTERL',
    'anorectal malformation colostomy',
    'baby anal atresia',
    'imperforate anus outcomes',
  ],
  quickAnswer:
    'Imperforate anus (anorectal malformation) is a birth defect where the baby does not have a normal anal opening. The condition ranges from a simple membrane covering the anus to complex malformations where the rectum does not connect to the anus at all. It is detected on the newborn exam, often when the baby fails to pass meconium (first stool) within 24-48 hours. Low-type malformations can be repaired with a single surgery. High-type malformations typically require a staged approach, starting with a temporary colostomy. Imperforate anus can be part of the VACTERL association, so babies are evaluated for other anomalies.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Imperforate anus is typically diagnosed during the initial newborn physical exam when no normal anal opening is visible, or when the baby fails to pass meconium within the first 24-48 hours. Sometimes a fistula (abnormal connection) to the perineum, urethra, or vagina is present. Diagnostic imaging (ultrasound, X-ray, or MRI) helps determine the type and location of the malformation. Your baby will be evaluated for associated anomalies, particularly those in the VACTERL association (vertebral, cardiac, tracheoesophageal, renal, and limb defects).',
    },
    {
      ageRange: '2-7 days',
      context:
        'Treatment depends on the type of malformation. Low-type (where the rectum ends close to the skin surface): a single surgery (anoplasty or posterior sagittal anorectoplasty) can create a functional anal opening. High-type (where the rectum ends far from the skin surface): a colostomy is typically created first to divert stool, allowing time for the baby to grow before definitive repair. Associated anomalies, especially cardiac and renal defects, are addressed concurrently.',
    },
    {
      ageRange: '1-6 months',
      context:
        'If a colostomy was placed, your baby will have stool draining into a bag on the abdomen. Colostomy care is taught before discharge. Definitive repair (posterior sagittal anorectoplasty, or PSARP) is typically planned around 3-6 months of age, once the baby has grown. Before surgery, a distal colostogram (contrast study) is performed to map the anatomy. This period involves regular follow-up with pediatric surgery and any other specialists managing associated conditions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After definitive repair, your baby begins a program of anal dilations to keep the new anal opening from narrowing (stricture). Dilations are performed by parents at home and gradually increased in size over weeks to months. This process is essential for a good outcome. Once the new anus is functioning well and dilations are complete, the colostomy is closed (usually 2-3 months after the pull-through procedure). Bowel function continues to improve over time.',
    },
    {
      ageRange: '1 year+',
      context:
        'Long-term bowel function varies depending on the complexity of the malformation and the quality of the sphincter muscles. Many children with low malformations achieve normal bowel control. Those with high or complex malformations may need a bowel management program to achieve social continence. Constipation is common and may require ongoing management. With appropriate support, most children achieve a good quality of life. Follow-up with pediatric surgery continues through childhood and may extend into adolescence.',
    },
  ],
  whenNormal: [
    'Your baby has been diagnosed and is being managed by a pediatric surgery team',
    'Your baby had successful surgical repair and is healing well',
    'You are performing anal dilations as instructed and the size is progressing appropriately',
    'Colostomy care is going smoothly and your baby is gaining weight',
    'Your child is on a bowel management program and achieving social continence',
  ],
  whenToMention: [
    'Your baby has difficulty with dilations or you are unsure about the technique',
    'Your child is having constipation or soiling that is not improving with current management',
    'You have questions about colostomy care or upcoming surgeries',
    'You are concerned about your baby\'s growth or development',
  ],
  whenToActNow: [
    'Your newborn has not passed meconium within 48 hours of birth',
    'Your baby has abdominal distension with vomiting (signs of obstruction)',
    'You notice signs of infection at the surgical site or colostomy: redness, swelling, fever, or foul-smelling drainage',
    'The colostomy is not draining, looks dark or discolored, or protrudes significantly more than usual (prolapse)',
    'Your baby has persistent vomiting and a distended belly after repair surgery',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-meconium-not-passing', 'vacterl-association'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Anorectal Malformations. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/about/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Imperforate Anus. MedlinePlus Medical Encyclopedia, 2024.',
      url: 'https://medlineplus.gov/ency/article/001147.htm',
    },
    {
      org: "Children's Hospital",
      citation:
        "Nationwide Children's Hospital. Anorectal Malformations (Imperforate Anus).",
      url: 'https://www.nationwidechildrens.org/conditions/anorectal-malformation',
    },
  ],
};

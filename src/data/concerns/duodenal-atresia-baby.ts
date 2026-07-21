import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'duodenal-atresia-baby',
  title: 'My Baby Has Duodenal Atresia',
  category: 'medical',
  searchTerms: [
    'baby duodenal atresia',
    'duodenal atresia double bubble',
    'duodenal atresia surgery',
    'newborn bilious vomiting',
    'baby intestinal blockage',
    'duodenal atresia Down syndrome',
    'duodenal atresia prenatal diagnosis',
    'baby blocked intestine',
    'duodenal atresia treatment',
    'duodenal atresia outcomes',
  ],
  quickAnswer:
    'Duodenal atresia is a condition where the first part of the small intestine (duodenum) is completely blocked or not formed properly, preventing food from passing from the stomach into the intestines. It is often detected prenatally on ultrasound with the characteristic "double bubble" sign (two fluid-filled areas representing the stomach and dilated duodenum). Babies typically present with bilious (green) vomiting within hours of birth. About 30% of babies with duodenal atresia also have Down syndrome. Surgery to reconnect the two ends of the duodenum (duodenoduodenostomy) is performed shortly after birth, and outcomes are excellent.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Duodenal atresia is often suspected on prenatal ultrasound when the "double bubble" sign is seen - two fluid-filled areas in the fetal abdomen representing the stomach and the dilated proximal duodenum. Polyhydramnios (excess amniotic fluid) is common because the baby cannot swallow and absorb amniotic fluid normally. Because of the association with Down syndrome in about 30% of cases, genetic testing (amniocentesis) is typically offered. Delivery should be planned at a center with NICU and pediatric surgery.',
    },
    {
      ageRange: '0-48 hours',
      context:
        'Babies with duodenal atresia typically develop bilious (green) vomiting within the first 24-48 hours of life because stomach contents cannot pass into the blocked intestine. An X-ray showing the "double bubble" sign confirms the diagnosis. A nasogastric tube is placed to decompress the stomach, and IV fluids are started. Surgery (duodenoduodenostomy) is performed once the baby is stable, usually within the first few days of life. The surgeon creates a connection between the two ends of the duodenum to bypass the blockage.',
    },
    {
      ageRange: '3-14 days',
      context:
        'After surgery, the duodenum takes time to begin functioning. Your baby will receive nutrition intravenously (TPN) while bowel function recovers. Feedings are started gradually through the nasogastric tube or by mouth as the bowel starts working. It may take one to two weeks before your baby tolerates full feeds. The surgical team will monitor for complications such as anastomotic leak, though this is uncommon.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Most babies are feeding well and growing normally by this time. If your baby also has Down syndrome, early intervention services and additional monitoring (including cardiac evaluation, thyroid function, and hearing screening) will be coordinated. Some babies may have temporary gastroesophageal reflux or feeding difficulties that improve with time. Regular follow-up with your pediatrician and pediatric surgeon ensures proper recovery.',
    },
    {
      ageRange: '3 months+',
      context:
        'Long-term outcomes after duodenal atresia repair are excellent. The vast majority of children eat, grow, and develop normally. Rarely, some may develop bowel obstruction from adhesions (scar tissue) later in life. Children with associated Down syndrome will have their own developmental trajectory and will benefit from early intervention programs and ongoing pediatric support. Regular pediatric follow-up continues as with all children.',
    },
  ],
  whenNormal: [
    'Duodenal atresia was diagnosed prenatally and you are being followed by a specialist team',
    'Your baby had successful surgery and is gradually tolerating feeds in the NICU',
    'Your baby is feeding well and gaining weight after discharge',
    'Your baby is being evaluated and supported for any associated conditions such as Down syndrome',
  ],
  whenToMention: [
    'Your baby is having feeding difficulties or is not gaining weight as expected',
    'You notice your baby is spitting up frequently or seems uncomfortable after feeds',
    'You have questions about associated conditions or follow-up care',
    'You are concerned about your baby\'s growth or development',
  ],
  whenToActNow: [
    'Your baby has bilious (green) vomiting at any time, especially in the newborn period',
    'Your baby develops a distended abdomen with vomiting and stops passing stool',
    'Your baby has signs of dehydration: fewer wet diapers, dry mouth, sunken soft spot, lethargy',
    'Your baby has fever or signs of infection at the surgical site',
    'Your newborn is not feeding and is vomiting all feeds within the first 24-48 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vomiting-bile', 'down-syndrome-baby-development', 'newborn-projectile-vomiting-early'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Duodenal Atresia. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/about/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Duodenal Atresia. MedlinePlus Medical Encyclopedia, 2024.',
      url: 'https://medlineplus.gov/ency/article/001131.htm',
    },
    {
      org: "Children's Hospital",
      citation:
        "Boston Children's Hospital. Duodenal Atresia: Symptoms, Diagnosis, and Treatment.",
      url: 'https://www.childrenshospital.org/conditions/duodenal-atresia',
    },
  ],
};

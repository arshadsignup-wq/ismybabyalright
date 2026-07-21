import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'amniotic-band-syndrome-baby',
  title: 'My Baby Has Amniotic Band Syndrome',
  category: 'medical',
  searchTerms: [
    'baby amniotic band syndrome',
    'amniotic band constriction ring',
    'baby missing fingers toes',
    'baby constriction ring limb',
    'amniotic band syndrome surgery',
    'amniotic band syndrome causes',
    'baby limb constriction band',
    'amniotic band syndrome prenatal',
    'amniotic band syndrome treatment',
    'amniotic band syndrome recurrence',
  ],
  quickAnswer:
    'Amniotic band syndrome occurs when fibrous strands from the inner lining of the amniotic sac (amnion) rupture and become entangled around parts of the developing baby, most commonly fingers, toes, and limbs. The severity varies widely - from mild constriction rings around fingers to limb amputation or, rarely, involvement of the head or trunk. It is not genetic and is considered a random event, meaning it is very unlikely to recur in future pregnancies. Treatment depends on severity and may include surgical release of bands causing vascular compromise or reconstructive surgery.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Amniotic band syndrome may be detected on prenatal ultrasound. Findings can include constriction rings on limbs, swelling of a limb or digit beyond a constriction, absent digits, or clubfoot. In rare severe cases, bands may affect the face or trunk. If bands are constricting a limb and threatening blood flow, fetal surgery to release the bands may be considered at specialized centers. In most cases, postnatal treatment is planned. Parents should be reassured that this is not an inherited condition and is not caused by anything they did during pregnancy.',
    },
    {
      ageRange: '0-1 month',
      context:
        'At birth, the effects of amniotic bands are assessed. Constriction rings may range from superficial skin grooves to deep bands causing lymphedema (swelling) or vascular compromise (compromised blood flow) in the affected limb or digit. If a band is actively threatening blood flow to a limb or digit, urgent surgical release (Z-plasty or band excision) is performed. For shallow rings or stable conditions, surgery can be planned electively. Your baby will be evaluated by a pediatric plastic surgeon or orthopedic surgeon.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Elective surgical release of constriction rings is often performed during this period. For missing digits or limb amputations, no immediate surgical intervention is needed - babies adapt remarkably well. Occupational therapy may begin to support fine motor development if hands are affected. If clubfoot is present as part of the syndrome, treatment follows standard clubfoot protocols (Ponseti method with serial casting). Each baby\'s treatment plan is individualized based on which structures are affected.',
    },
    {
      ageRange: '1-3 years',
      context:
        'As your child grows, functional assessment guides further treatment decisions. Children with missing digits or partial limb deficiencies often develop impressive compensatory skills and may benefit from occupational therapy to optimize hand function. Prosthetics may be introduced for limb deficiencies if they enhance function, though many children prefer to function without them. Surgical revisions may be done to improve cosmetic appearance or function of constriction ring sites.',
    },
    {
      ageRange: '3 years+',
      context:
        'Long-term outcomes depend on the severity of involvement. Most children with amniotic band syndrome have normal intelligence and achieve excellent functional outcomes. Children adapt to their unique anatomy from the start and often have fewer limitations than parents expect. Peer support groups can be helpful for families. Additional reconstructive surgeries may be offered as the child grows. Psychological support is available if needed as children become more aware of differences, though many children adjust very well.',
    },
  ],
  whenNormal: [
    'Your baby has constriction rings that are superficial, with good blood flow and no swelling beyond the rings',
    'Surgical release was performed and the limb or digit is healing well with good circulation',
    'Your baby is adapting well to any missing digits or limb differences and is meeting developmental milestones',
    'You have been reassured that this is not genetic and is unlikely to recur in future pregnancies',
  ],
  whenToMention: [
    'You notice swelling in a limb or digit beyond a constriction ring',
    'You have questions about surgical options, timing, or what to expect',
    'You want to discuss occupational therapy, prosthetics, or adaptive strategies for your child',
    'You are concerned about your child\'s functional development or emotional adjustment',
  ],
  whenToActNow: [
    'A limb or digit beyond a constriction ring becomes blue, cold, pale, or very swollen - this indicates compromised blood flow and requires urgent surgical evaluation',
    'Your baby has increasing swelling, color change, or loss of movement in a digit or limb that was previously stable',
    'Signs of infection develop at a constriction ring site or after surgery: redness, warmth, swelling, drainage, or fever',
    'A constriction ring appears to be getting tighter as your baby grows, causing new swelling or color change',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['limb-deficiency-baby', 'clubfoot-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Amniotic Band Syndrome. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/5866/amniotic-band-syndrome',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Upper and Lower Limb Reduction Defects. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-limb-defects.html',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Amniotic Band Syndrome.",
      url: 'https://www.chop.edu/conditions-diseases/amniotic-band-syndrome',
    },
  ],
};

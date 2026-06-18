import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vascular-malformations-baby',
  title: 'My Baby Has a Vascular Malformation (Port-Wine Stain or Deeper)',
  category: 'skin',
  searchTerms: [
    'vascular malformation baby',
    'port wine stain baby',
    'capillary malformation baby',
    'venous malformation infant',
    'lymphatic malformation baby',
    'port wine stain face Sturge-Weber',
    'vascular birthmark baby',
    'AVM baby',
    'port wine stain laser treatment baby',
    'vascular malformation vs hemangioma',
  ],
  quickAnswer:
    'Vascular malformations are structural abnormalities of blood vessels or lymph vessels that are present at birth (though some become apparent later). Unlike hemangiomas, which grow rapidly and then shrink, vascular malformations grow proportionally with the child and do not go away on their own. They are classified by the type of vessel involved: capillary (port-wine stains), venous, lymphatic, or arteriovenous. Most are benign and manageable, but the approach depends on the type, location, and whether associated conditions are present (such as Sturge-Weber syndrome with facial port-wine stains).',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Vascular malformations are present at birth, though some are more obvious than others. A port-wine stain appears as a flat, pink to reddish-purple patch that does not blanch easily. Venous or lymphatic malformations may appear as soft, compressible masses or swelling. Your pediatrician may refer you to a vascular anomalies specialist. If a port-wine stain involves the forehead or upper eyelid, screening for Sturge-Weber syndrome (involving the brain and eyes) is recommended.',
    },
    {
      ageRange: '6-12 months',
      context:
        'For capillary malformations (port-wine stains), pulsed dye laser (PDL) treatment can begin in infancy and is more effective when started early. Multiple sessions are needed. The goal is to lighten the stain, though complete clearance is uncommon. For lymphatic malformations, treatment depends on size and location — options include sclerotherapy (injection treatment) and surgical reduction. Your vascular anomalies team will develop a plan tailored to your baby.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Vascular malformations grow proportionally with the child. Port-wine stains may gradually deepen in color and develop a more pebbled texture over years if untreated. Ongoing laser treatments help maintain lighter color. Venous malformations may cause pain, particularly during physical activity or when the affected area is dependent (hanging down). Compression garments can help. Lymphatic malformations may fluctuate in size, especially during infections.',
    },
    {
      ageRange: '5 years+',
      context:
        'Long-term management of vascular malformations is a marathon, not a sprint. Most are managed rather than cured. Regular follow-up with a vascular anomalies team is important. New treatments continue to emerge, including targeted medications (such as sirolimus for complex lymphatic and venous malformations). Emotional support for children living with visible vascular malformations is an important part of care.',
    },
  ],
  whenNormal: [
    'Your baby has a port-wine stain that has been evaluated and you have a treatment plan with a vascular specialist',
    'Your baby\'s vascular malformation is stable and not causing functional problems',
    'Laser treatments are lightening a port-wine stain gradually over multiple sessions',
  ],
  whenToMention: [
    'A port-wine stain on the face involves the forehead or eyelid area and has not been evaluated for Sturge-Weber syndrome',
    'A venous or lymphatic malformation seems to be growing disproportionately or causing pain',
    'The malformation is affecting function (vision, breathing, swallowing, limb movement)',
    'You want to discuss treatment options or are concerned about the cosmetic impact',
  ],
  whenToActNow: [
    'A vascular malformation is bleeding heavily and the bleeding does not stop with pressure — seek emergency care',
    'A lymphatic or venous malformation becomes suddenly swollen, red, and painful — this may indicate infection (cellulitis) and needs immediate medical treatment',
    'Your baby has a facial port-wine stain and develops seizures — this could indicate Sturge-Weber syndrome and requires urgent neurologic evaluation',
    'A vascular malformation near the airway is causing difficulty breathing — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'kasabach-merritt-phenomenon',
    'nevus-sebaceous',
    'epidermal-nevus',
  ],
  sources: [
    {
      org: 'ISSVA',
      citation:
        'International Society for the Study of Vascular Anomalies. Classification of Vascular Anomalies.',
      url: 'https://www.issva.org/classification',
    },
    {
      org: 'Boston Children\'s',
      citation:
        'Boston Children\'s Hospital. Vascular Anomalies Center.',
      url: 'https://www.childrenshospital.org/programs/vascular-anomalies-center',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Vascular Malformations. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519546/',
    },
  ],
};

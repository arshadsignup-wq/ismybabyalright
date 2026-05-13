import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'er-vs-urgent-care-vs-wait',
  title: 'ER vs. Urgent Care vs. Wait It Out',
  category: 'medical',
  searchTerms: [
    'baby ER or urgent care',
    'should I take baby to emergency room',
    'urgent care for baby',
    'when to go to ER baby',
    'baby sick wait or go to doctor',
    'toddler emergency room vs urgent care',
    'is this an emergency baby',
    'baby needs emergency care signs',
  ],
  quickAnswer:
    'Choosing between the emergency room, urgent care, or waiting for your pediatrician depends on the severity and urgency of the symptoms. The ER is for life-threatening or potentially serious situations, urgent care is for issues that need same-day attention but are not emergencies, and your pediatrician\'s office is best for concerns that can wait until the next available appointment. When in doubt, calling your pediatrician\'s after-hours line first can help you decide.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'For babies under 3 months, the threshold for emergency care is much lower. Any fever of 100.4\u00b0F (38\u00b0C) or higher, difficulty breathing, refusal to feed, or extreme lethargy should go directly to the ER  -  not urgent care. Young infants can deteriorate quickly, and the ER has the resources for rapid blood work, IV fluids, and monitoring that urgent care typically does not.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Urgent care can be appropriate for non-emergency issues like mild ear infections, low-grade fevers with cold symptoms, or minor injuries when your pediatrician is unavailable. Go to the ER for high fevers above 104\u00b0F (40\u00b0C) not responding to medication, signs of dehydration, breathing difficulties, seizures, or after a significant fall or head injury. If your baby has a mild illness and is feeding and urinating normally, it is usually safe to call your pediatrician and wait.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are more resilient but also more injury-prone. Urgent care is suitable for minor cuts needing stitches, possible ear infections, mild croup, or rashes without fever. The ER is necessary for suspected broken bones, large lacerations, difficulty breathing, allergic reactions with swelling, suspected poisoning, or head injuries with vomiting or altered consciousness.',
    },
    {
      ageRange: '24-36 months',
      context:
        'At this age, common urgent-care-level situations include strep throat, urinary tract infections, and minor sprains. ER visits are warranted for severe allergic reactions, trouble breathing, injuries from falls off furniture or playground equipment with loss of consciousness, and any suspected ingestion of a toxic substance or foreign object like a button battery.',
    },
  ],
  whenNormal: [
    'Your child has mild cold or flu symptoms but is eating, drinking, and playing  -  monitor at home and call your pediatrician during office hours',
    'A minor scrape, bruise, or bump that does not involve the head and does not seem to cause significant pain',
    'A low-grade fever in a child over 3 months who is acting well and staying hydrated',
  ],
  whenToMention: [
    'Symptoms are worsening over 24-48 hours despite home care  -  schedule a same-day or next-day appointment with your pediatrician',
    'Your child has repeated vomiting or diarrhea but is still taking some fluids  -  contact your pediatrician for guidance on whether to be seen',
    'You are unsure whether urgent care or the ER is appropriate  -  call your pediatrician\'s nurse line first',
    'A fever that has lasted more than 3 days with no clear cause',
  ],
  whenToActNow: [
    'Go to the ER immediately for difficulty breathing, a seizure, unresponsiveness, blue or gray skin, suspected meningitis (stiff neck, bulging soft spot, non-blanching rash), severe allergic reaction (swelling of face/throat, difficulty breathing), or any fever in a baby under 3 months',
    'Seek emergency care for suspected poisoning or ingestion of a button battery, magnet, or sharp object  -  bring the container or product if possible',
    'Go to the ER for a head injury followed by vomiting, confusion, unequal pupils, or loss of consciousness  -  even briefly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emergency Room, Urgent Care, or Pediatrician: Where Should You Go? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/When-to-Call-Emergency-Medical-Services-EMS.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Deciding When to Go to the Emergency Department. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Is-it-an-Emergency.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Emergency Warning Signs in Children.',
      url: 'https://www.cdc.gov/flu/highrisk/children-warning-signs.html',
    },
  ],
};

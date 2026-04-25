import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fpies-food-protein',
  title: 'FPIES: Food Protein-Induced Enterocolitis',
  category: 'feeding',
  searchTerms: [
    'FPIES symptoms',
    'food protein induced enterocolitis',
    'baby vomiting hours after eating',
    'delayed food allergy',
    'baby vomiting after solids',
    'FPIES reaction what to do',
    'non IgE food allergy',
    'baby pale and lethargic after eating',
    'severe vomiting in baby',
    'FPIES trigger foods',
  ],
  quickAnswer:
    'FPIES (Food Protein-Induced Enterocolitis Syndrome) is a rare, serious food allergy that causes delayed vomiting and diarrhea, typically 2-4 hours after eating a trigger food. Unlike typical food allergies, it does not cause hives or immediate reactions, and standard allergy tests are usually negative. Common triggers include rice, oats, dairy, and soy. If your baby has severe vomiting episodes that seem connected to specific foods, contact your pediatrician for evaluation.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'FPIES can occur in exclusively breastfed or formula-fed infants, though it is rare. In formula-fed babies, cow\'s milk or soy formula are the most common triggers. Symptoms include severe vomiting, lethargy, and sometimes bloody diarrhea several hours after feeding. Babies may appear very ill and can become dehydrated quickly. FPIES in young infants is considered a medical emergency and requires immediate evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'FPIES is most commonly diagnosed when solid foods are introduced, particularly rice, oats, and other grains. The first reaction often occurs when a food is given for the second or third time (not the first exposure). Parents describe their baby as seeming fine after eating, then becoming suddenly ill 2-4 hours later with profuse vomiting, pallor, and lethargy. Because reactions are delayed, it can be hard to identify the trigger food without careful tracking.',
    },
    {
      ageRange: '12-18 months',
      context:
        'If FPIES is diagnosed in infancy, your allergist will guide you on which foods to avoid and when to attempt reintroduction. Most children with FPIES to grains will outgrow it by age 3-5, but dairy and soy FPIES may persist longer. Keep an emergency action plan on hand and avoid trigger foods completely until your doctor recommends a supervised oral food challenge in a medical setting.',
    },
    {
      ageRange: '18 months+',
      context:
        'Some children are diagnosed with FPIES as toddlers if they had mild reactions that were initially missed. By this age, solid food FPIES to grains often resolves, but new triggers can occasionally emerge. Continue working with an allergist to monitor for resolution and safely reintroduce foods. Never attempt a home food challenge with a known FPIES trigger - reactions can be severe and require IV fluids.',
    },
  ],
  whenNormal: [
    'Your baby spits up or vomits once after a meal but is otherwise active and happy',
    'Your baby has loose stools for a day or two due to teething or a mild virus',
    'Your baby gags and vomits immediately while eating (this is a protective reflex, not FPIES)',
  ],
  whenToMention: [
    'Your baby has had repeated episodes of vomiting 2-4 hours after eating, especially if it happens with the same food',
    'Your baby seems very tired, pale, or "floppy" after vomiting episodes',
    'You notice a pattern of diarrhea (sometimes with mucus or blood) following certain foods by several hours',
    'Standard allergy testing was negative but your baby clearly reacts to certain foods',
  ],
  whenToActNow: [
    'Your baby has profuse vomiting (more than 3-4 times in an hour) and is becoming lethargic, pale, or unresponsive',
    'Your baby has signs of dehydration: no tears when crying, no wet diapers for 6+ hours, sunken soft spot, dry lips',
    'Your baby has bloody diarrhea along with severe vomiting',
    'Your baby\'s lips or skin are turning blue or gray, or they are having trouble breathing (call 911)',
  ],
  relatedMilestones: [
    'feeding',
    'digestive-health',
    'starting-solids',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAAAI',
      citation:
        'American Academy of Allergy, Asthma & Immunology. Food Protein-Induced Enterocolitis Syndrome (FPIES). 2024.',
      url: 'https://www.aaaai.org/conditions-treatments/related-conditions/fpies',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. FPIES: Symptoms, Diagnosis, and Management.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/fpies/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Non-IgE-Mediated Food Allergies in Children. Journal of Allergy and Clinical Immunology, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
  ],
};

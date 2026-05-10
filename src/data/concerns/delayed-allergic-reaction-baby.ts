import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-allergic-reaction-baby',
  title: 'Delayed Allergic Reaction in Babies',
  category: 'medical',
  searchTerms: [
    'delayed allergic reaction baby',
    'baby allergic reaction hours later',
    'non-IgE allergy baby',
    'baby reaction to food next day',
    'delayed food allergy symptoms infant',
    'baby eczema flare after eating',
    'baby vomiting hours after food',
    'slow allergic reaction baby',
  ],
  quickAnswer:
    'Delayed allergic reactions in babies occur hours to days after exposure to an allergen, unlike immediate reactions that happen within minutes. These non-IgE mediated reactions can cause vomiting, diarrhea, eczema flares, blood in stool, and irritability. They are harder to identify because of the time gap between eating and symptoms, and standard allergy skin tests may not detect them.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        "Delayed reactions in young infants are most commonly triggered by cow's milk protein passing through breast milk or in formula. Symptoms can include worsening eczema, blood-streaked stools, persistent colic-like fussiness, and reflux that doesn't improve with standard treatment. These symptoms may appear 2-72 hours after exposure, making it difficult to connect them to a specific feeding.",
    },
    {
      ageRange: '3-6 months',
      context:
        "As babies approach solid food introduction, delayed reactions to proteins in breast milk or formula may continue. Chronic symptoms like persistent eczema, loose stools, poor weight gain, or ongoing fussiness may indicate a delayed allergy. An elimination diet supervised by your pediatrician is often the best diagnostic tool at this age.",
    },
    {
      ageRange: '6-12 months',
      context:
        "With the introduction of solids, new delayed reactions may emerge. Common triggers include cow's milk, soy, egg, and wheat. Symptoms like eczema flares 24-48 hours after eating, vomiting several hours after a meal, or diarrhea the next day can indicate delayed allergies. Keep a food diary to help identify patterns and share it with your pediatrician.",
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with delayed food allergies may show chronic symptoms like persistent eczema, recurring loose stools, or poor growth. Some conditions like FPIES (Food Protein-Induced Enterocolitis Syndrome) cause profuse vomiting 2-4 hours after eating a trigger food. An allergist experienced in non-IgE mediated allergies can help with diagnosis and management.',
    },
  ],
  whenNormal: [
    'Baby has mild fussiness after trying a new food that resolves within an hour',
    'Baby develops a small rash around the mouth from acidic foods like tomatoes or citrus',
    'Baby has one episode of loose stool after a new food but tolerates it fine on repeated exposure',
    'Baby has temporary eczema during a viral illness that resolves on its own',
  ],
  whenToMention: [
    'Baby repeatedly develops eczema flares or rashes 1-2 days after eating certain foods',
    'Baby has recurring vomiting or diarrhea that seems related to specific foods',
    'Baby has persistent symptoms like blood in stool, poor weight gain, or chronic eczema despite treatment',
  ],
  whenToActNow: [
    'Baby has profuse repeated vomiting 2-4 hours after eating that leads to lethargy or pallor',
    'Baby becomes pale, floppy, or unresponsive after eating -- call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIAID',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
  ],
};

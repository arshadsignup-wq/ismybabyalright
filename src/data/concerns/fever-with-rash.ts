import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fever-with-rash',
  title: 'My Baby Has a Fever and a Rash',
  category: 'medical',
  searchTerms: [
    'baby fever and rash',
    'baby rash after fever',
    'roseola baby',
    'baby red spots with fever',
    'baby rash with temperature',
    'baby hives with fever',
    'viral rash baby',
    'baby spotted rash fever',
    'hand foot mouth baby',
    'baby fever rash when to worry',
  ],
  quickAnswer:
    'The combination of fever and rash in a baby is very common and is usually caused by a viral infection such as roseola, hand-foot-and-mouth disease, or other viral exanthems. A rash that appears after a fever breaks (as in roseola) is typically benign. However, certain fever-rash combinations, particularly non-blanching purple spots (petechiae or purpura), require immediate medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any combination of fever and rash in a baby under 3 months should be evaluated by a doctor the same day. While viral rashes can occur at this age, the immature immune system means serious infections (including herpes simplex, group B strep, or bacterial meningitis) must be ruled out. A widespread rash with small blisters in a newborn could indicate neonatal herpes, which is a medical emergency.',
    },
    {
      ageRange: '3-12 months',
      context:
        'This is the classic age for roseola (HHV-6), which causes 3-5 days of high fever followed by a pink, flat rash that appears on the trunk as the fever breaks. The rash is actually a reassuring sign that the illness is resolving. Hand-foot-and-mouth disease (Coxsackievirus) causes fever with painful mouth sores and blistering spots on the hands, feet, and buttocks. Viral exanthems (nonspecific viral rashes) are also very common and usually resolve on their own within a few days.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers frequently develop fever-rash combinations from viral illnesses. Common ones include fifth disease (slapped cheek rash), roseola, hand-foot-and-mouth, and nonspecific viral exanthems. Allergic reactions to medications (especially antibiotics) can also cause rashes that may coincide with fever from the underlying illness being treated. If your child develops a rash while on antibiotics, contact your pediatrician to determine if it is an allergic reaction or a viral rash.',
    },
    {
      ageRange: '2-3 years',
      context:
        'In addition to the common viral causes, chickenpox (if unvaccinated) can cause fever followed by itchy blisters that appear in crops. Scarlet fever (from group A strep) causes a fine, sandpaper-like rash with fever and sore throat and requires antibiotic treatment. Kawasaki disease, while uncommon, presents with 5 or more days of fever along with rash, red eyes, swollen lips, and peeling fingers, and requires urgent treatment to prevent heart complications.',
    },
  ],
  whenNormal: [
    'A pink, flat rash appearing on the trunk as the fever breaks (classic roseola pattern)',
    'A mild viral rash with low-grade fever where the child is eating, drinking, and playing normally',
    'Small blisters on hands, feet, and mouth with moderate fever consistent with hand-foot-and-mouth disease',
    'The rash blanches (turns white) when you press on it and your child looks well between fever spikes',
  ],
  whenToMention: [
    'The rash is widespread, very itchy, or blistering and you are unsure of the cause',
    'Your child has fever and rash along with joint pain, swollen lymph nodes, or mouth sores that prevent eating',
    'The rash appeared after starting a new medication, as this could indicate a drug allergy',
  ],
  whenToActNow: [
    'Your child has a rash that does not blanch when you press on it (petechiae or purpura  -  small purple or red spots that stay visible under pressure), which can indicate meningococcemia or other serious bloodstream infection  -  seek emergency care immediately',
    'Your child has had 5 or more days of fever with rash, red bloodshot eyes, cracked red lips, swollen hands or feet, or peeling skin on the fingers, as this may be Kawasaki disease requiring urgent treatment to prevent heart damage',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Rashes and Skin Conditions in Newborns and Babies.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Rashes-and-Skin-Conditions.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Hand, Foot, and Mouth Disease.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Roseola: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/roseola/symptoms-causes/syc-20377283',
    },
  ],
};

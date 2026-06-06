import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-inhaler-spacer-use',
  title: 'How Do I Use an Inhaler with Spacer for My Baby?',
  category: 'medical',
  searchTerms: [
    'inhaler spacer baby how to use',
    'baby inhaler with mask',
    'metered dose inhaler baby',
    'MDI spacer infant',
    'inhaler technique baby',
    'spacer device baby',
    'baby puffer with chamber',
    'aerochamber baby use',
    'inhaler vs nebulizer baby',
    'spacer mask baby tips',
  ],
  quickAnswer:
    'An inhaler with spacer (also called a holding chamber) with an attached mask is an effective way to deliver asthma medication to babies and young children. The spacer holds the medication in a chamber, allowing your baby to breathe it in over several breaths. This method is as effective as a nebulizer but much faster (seconds vs minutes). Proper technique is important for the medicine to work.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this young can use an inhaler with spacer and infant mask. Choose a spacer with a small infant mask (like AeroChamber with infant mask). Shake the inhaler, attach to spacer, place the mask firmly over nose and mouth, press the inhaler once, and hold in place for 6 slow breaths (about 10-15 seconds). The one-way valve in the spacer allows medicine to flow to the baby during inhalation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your baby may resist the mask. Try holding them in your lap facing away from you with one arm securing them. Place the mask gently but firmly over nose and mouth to create a seal. A crying baby actually takes deeper breaths, which can help deliver the medication. Count 6 breaths after pressing the inhaler, then remove. If 2 puffs are prescribed, wait 30 seconds between puffs.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The technique remains the same. Ensure you are using the correct mask size - it should cover the nose and mouth without covering the eyes. Replace the spacer and mask every 6-12 months as they can crack or the valve can become sticky. Prime new inhalers with 4 test sprays into the air before first use.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many toddlers tolerate the spacer with mask well once it becomes part of a routine. Some families find it helpful to let the toddler decorate the spacer with stickers. An inhaler with spacer is far more portable than a nebulizer, making it ideal for daycare, travel, and on-the-go use.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Some older toddlers may begin to use a spacer with mouthpiece instead of mask, though most still need the mask until age 4-5. Continue to supervise all treatments. Clean the spacer monthly by soaking in warm soapy water, rinsing, and air drying (do not towel dry, which creates static that traps medication).',
    },
  ],
  whenNormal: [
    'Your baby fusses during administration but breathes better afterward',
    'The spacer makes a clicking sound with each breath, indicating the valve is working correctly',
    'Your baby has mild jitteriness after albuterol inhaler use, which resolves quickly',
  ],
  whenToMention: [
    'You are unsure about proper technique and want a demonstration from your pediatrician or pharmacist',
    'Your baby is not improving with inhaler treatments and you wonder if the technique is correct',
    'You need guidance on when to use the rescue inhaler versus when to seek medical care',
  ],
  whenToActNow: [
    'Your baby\'s breathing does not improve or worsens despite using the inhaler as prescribed',
    'Your baby is using the rescue inhaler more than every 4 hours, or you are using it daily for more than 2 days without an established action plan from your doctor',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-nebulizer-treatment-concerns',
    'baby-asthma-action-plan',
    'baby-wheezing-recurrent',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Using a Metered-Dose Inhaler with a Spacer. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Metered-Dose-Inhalers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. How to Use an Inhaler with Spacer.',
      url: 'https://www.nhlbi.nih.gov/health/asthma/inhalers',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Childhood asthma treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/childhood-asthma/diagnosis-treatment/drc-20351513',
    },
  ],
};

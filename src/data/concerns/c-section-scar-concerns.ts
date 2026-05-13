import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'c-section-scar-concerns',
  title: 'C-Section Scar: Numbness, Appearance, and Healing',
  category: 'maternal',
  searchTerms: [
    'c section scar healing',
    'c section scar numb',
    'cesarean scar appearance',
    'c section scar red and raised',
    'c section scar pain months later',
    'c section scar itchy',
    'numbness around c section incision',
    'c section keloid scar',
    'c section scar not healing',
  ],
  quickAnswer:
    'C-section scar healing is a gradual process that unfolds over many months. Numbness around the incision site is extremely common and occurs because small sensory nerves are cut during surgery. The scar itself typically evolves from red and raised to flat and pale over 6 to 18 months. While most scars heal well with basic care, some women experience complications like infection, keloid formation, or persistent pain that benefit from medical attention.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'In the first two weeks, your incision is in the initial healing phase. The wound may be closed with staples, sutures, or surgical glue. Keep the area clean and dry, and follow your surgeon\'s specific instructions for wound care. Some swelling, redness, and mild discomfort around the incision is normal. Numbness in the area around and below the scar is very common and is caused by nerve disruption during surgery. Avoid lifting anything heavier than your baby.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'The outer skin typically heals within two to three weeks, but the deeper tissue layers continue to repair for much longer. The scar may appear red, pink, or purple and may feel slightly raised or bumpy. Itching along the incision line is common as the wound heals and nerves begin to regenerate. Avoid submerging the incision in water (baths, pools) until your provider confirms it is fully closed. Gently patting the area dry after showering is recommended.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'By this point, the incision should be well closed and most activity restrictions are lifted at your postpartum visit. The scar may still be pink or red. Numbness may persist, and you may notice tingling or prickling sensations as nerves slowly regenerate, which is a positive sign. Once the wound is fully healed, gentle scar massage with clean hands can help soften the tissue, reduce adhesions, and improve flexibility. Use light pressure and massage along and across the scar for a few minutes daily.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'The scar continues to mature and typically becomes less red and slightly flatter. Some numbness may persist, and this is normal. Scar massage remains beneficial during this period. If your scar is becoming thickened, raised, or growing beyond the original incision line, mention it to your provider, as early intervention for keloid or hypertrophic scarring is more effective. Silicone scar sheets or gel may be recommended to flatten and soften the scar.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'By 12 to 18 months, most c-section scars have reached their final appearance, becoming a thin, flat, pale line in most cases. Some numbness around the scar may be permanent for some women, particularly directly above the scar, and this is a normal outcome of nerve disruption. If you experience persistent pain, pulling sensations, or the scar feels tethered to deeper tissue, a physical therapist specializing in scar mobilization can help release adhesions.',
    },
  ],
  whenNormal: [
    'Numbness or reduced sensation in the skin around and below the scar, which may be permanent in some areas',
    'Itching along the scar line as it heals, which is a sign of nerve regeneration',
    'The scar appearing red, pink, or raised in the first few months before gradually flattening and fading',
    'Occasional mild twinges or pulling sensations at the scar site during movement or stretching',
  ],
  whenToMention: [
    'The scar is becoming thicker, more raised, or wider over time rather than flattening',
    'You experience persistent pain at the scar site beyond three to four months postpartum',
    'The scar feels tightly adhered to deeper tissue and you notice pulling or restriction with movement',
    'You have significant emotional distress about the appearance of your scar',
  ],
  whenToActNow: [
    'The incision area becomes red, hot, swollen, and increasingly painful, or you notice pus or foul-smelling drainage, which suggests infection',
    'You develop a fever along with worsening symptoms at the incision site',
    'The wound opens or separates after it had previously closed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Cesarean Birth. ACOG FAQ, 2023.',
      url: 'https://www.acog.org/womens-health/faqs/cesarean-birth',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cesarean Section - Discharge. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/patientinstructions/000624.htm',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
  ],
};

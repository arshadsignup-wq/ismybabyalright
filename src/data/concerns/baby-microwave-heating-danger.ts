import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-microwave-heating-danger',
  title: 'Dangers of Microwaving Baby Food and Bottles',
  category: 'feeding',
  searchTerms: [
    'microwave baby food safe',
    'microwave baby bottle danger',
    'hot spots microwave baby food',
    'heating breast milk microwave',
    'microwave formula bottle risk',
    'baby burned from microwave food',
    'is microwaving baby food safe',
    'microwave baby puree safety',
    'warm baby bottle microwave',
    'microwave destroy nutrients baby food',
  ],
  quickAnswer:
    'The AAP and CDC advise against heating breast milk and infant formula in a microwave because microwaves heat unevenly, creating hot spots that can severely burn a baby\'s mouth and throat even when the bottle feels cool to the touch. Microwaving can also damage protective nutrients in breast milk. For solid baby foods, microwaving is acceptable if you stir thoroughly and test the temperature carefully before serving, but warming in a saucepan or using hot water is safer.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'During the bottle-feeding stage, never microwave breast milk or formula. Instead, warm bottles by placing them in a bowl of warm (not boiling) water for a few minutes, running them under warm tap water, or using a bottle warmer. Breast milk heated in a microwave loses some of its beneficial antibodies and immune properties. Microwaved bottles have been documented to cause scald burns in infants — the liquid can be dangerously hot in the center while the outside of the bottle feels lukewarm. Always test the temperature by shaking the bottle and dropping a few drops on the inside of your wrist before feeding.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start eating purees and solid foods, microwaving food is acceptable with proper precautions. Always stir microwaved food thoroughly to eliminate hot spots, let it sit for 30 seconds after heating, and test the temperature on the inside of your wrist before offering. Glass or ceramic containers are preferred over plastic for microwaving, as some plastics can leach chemicals when heated. Never heat baby food in the jar it came in — transfer it to a microwave-safe dish. Be especially careful with foods that heat unevenly, like thick purees, cheese, and meat-based foods.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue taking precautions when microwaving food for toddlers. Foods with varying textures (like pasta with sauce, or casseroles) heat very unevenly in the microwave. Cut open or mash microwaved foods and let them cool to check for hidden hot spots before serving. Teach your toddler not to touch the microwave or hot food. Some foods that are common burn risks include microwaved cheese (which becomes extremely hot), heated jelly or jam, microwaved hot dogs, and anything with a skin or casing that can trap steam. When in doubt, heat food on the stove or in the oven for more even warming.',
    },
  ],
  whenNormal: [
    'You use safe warming methods for bottles — warm water bath, bottle warmer, or warm running water.',
    'You microwave solid baby foods but stir thoroughly, let them rest, and test temperature before serving.',
    'You always test food and liquid temperature on the inside of your wrist before offering to your baby.',
  ],
  whenToMention: [
    'You want guidance on safe food warming methods for daycare or travel situations.',
    'You are unsure which containers are microwave-safe for baby food.',
    'You have concerns about nutrient loss from microwaving baby food.',
  ],
  whenToActNow: [
    'Your baby has been burned by hot food or formula from the microwave — for minor burns, run cool (not cold) water over the area for 10-20 minutes. For burns inside the mouth, burns with blistering, or large areas affected, seek emergency medical care.',
    'Your baby has swallowed extremely hot liquid and is crying in pain, drooling excessively, refusing to eat, or has visible burns in or around the mouth — seek emergency care.',
    'Your baby has a burn that is white or charred, covers a large area, or is on the face, hands, feet, or genitals — call 911 or go to the emergency room immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-formula-preparation-safety', 'baby-food-preparation-hygiene', 'baby-formula-storage-guidelines'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Warming Bottles and Baby Food',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Proper Storage and Preparation of Breast Milk',
      url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Microwave Ovens and Food Safety',
      url: 'https://www.fda.gov/radiation-emitting-products/resources-you-radiation-emitting-products/microwave-oven-radiation',
    },
  ],
};

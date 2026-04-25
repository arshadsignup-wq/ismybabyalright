import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'low-temperature-baby',
  title: 'My Baby\'s Temperature Is Too Low',
  category: 'medical',
  searchTerms: [
    'baby low temperature',
    'baby hypothermia',
    'baby cold to touch',
    'baby temperature below 97',
    'newborn low body temperature',
    'baby temperature too low',
    'baby cold hands and feet temperature',
    'baby not staying warm',
    'baby temperature 96',
    'what is too cold for a baby',
  ],
  quickAnswer:
    'A normal body temperature for a baby is between 97.5\u00b0F and 99.5\u00b0F (36.4\u00b0C to 37.5\u00b0C) when taken rectally. Cool hands and feet are normal in babies due to immature circulation. However, a core body temperature below 97\u00b0F (36.1\u00b0C) is considered hypothermia and can be a sign of illness, especially in newborns where it may be more significant than fever as a warning sign of infection.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns are particularly vulnerable to hypothermia because they have a large body surface area relative to their weight, limited fat stores, and an immature ability to regulate temperature. Low temperature in a newborn can be caused by a cold environment, but it can also be an important sign of serious infection (sepsis), metabolic problems, or other illness. In fact, newborns with sepsis may present with low temperature rather than fever. If your newborn\'s rectal temperature is below 97\u00b0F (36.1\u00b0C) despite being appropriately dressed and in a warm environment, contact your pediatrician immediately.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By 1-2 months, babies have improved temperature regulation but are still more susceptible to environmental cooling than older infants. A persistently low temperature in a young infant, especially if accompanied by poor feeding, lethargy, or mottled skin, is a concerning sign that warrants medical evaluation. Premature infants remain at higher risk for temperature instability for longer. Skin-to-skin contact (kangaroo care) is an effective way to warm a slightly cool baby.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Older infants have better thermoregulation, and true hypothermia from normal indoor exposure is uncommon. Cool hands and feet remain normal at any age and do not indicate the baby is cold  -  feel the chest or back of the neck to assess core temperature. If your baby feels cool to the touch on the trunk and a rectal temperature is below 97\u00b0F, ensure the room is warm enough (68-72\u00b0F for sleeping), add a layer of clothing, and recheck. If the temperature does not normalize, or the baby seems unwell, call your doctor.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers regulate their temperature well and are unlikely to become hypothermic indoors. Low readings on thermometers are more often due to improper technique (axillary or temporal readings can run lower than rectal). If you get an unexpectedly low reading, retake the temperature rectally or with an ear thermometer for accuracy. True hypothermia in a toddler is most likely from environmental exposure (cold weather) or could indicate a serious illness requiring evaluation.',
    },
  ],
  whenNormal: [
    'Cool hands and feet with a warm trunk  -  this is normal immature circulation, not hypothermia',
    'A slightly low reading on a forehead or armpit thermometer that reads normally when checked rectally',
    'A mildly cool baby who warms up quickly after adding a layer of clothing or holding skin-to-skin',
    'Temperature within 97.5\u00b0F-99.5\u00b0F (36.4\u00b0C-37.5\u00b0C) rectally',
  ],
  whenToMention: [
    'Your baby consistently feels cool to the touch on the trunk and temperatures are persistently at the lower end of normal despite appropriate clothing',
    'You are using a thermometer and repeatedly getting readings below 97.5\u00b0F (36.4\u00b0C) rectally',
    'Your baby seems less active or feeds less well when their temperature is on the low side',
  ],
  whenToActNow: [
    'A newborn under 1 month has a rectal temperature below 97\u00b0F (36.1\u00b0C) despite being properly dressed and in a warm room  -  this can indicate serious infection or illness and requires immediate medical evaluation',
    'Any baby has a low temperature along with poor feeding, lethargy, mottled or blue skin, weak cry, or floppy muscle tone  -  these are signs of a potentially serious condition requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. How to Take a Child\'s Temperature.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Thermal Protection of the Newborn: A Practical Guide.',
      url: 'https://www.who.int/publications/i/item/WHO_RHT_MSM_97.2',
    },
    {
      org: 'AAP',
      citation:
        'Polin RA, Committee on Fetus and Newborn. Management of Neonates with Suspected or Proven Early-Onset Bacterial Sepsis. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/5/1006/31708/Management-of-Neonates-With-Suspected-or-Proven',
    },
  ],
};

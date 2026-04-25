import type { PoopColor, PoopTexture, PoopByAge } from "./types";

export const poopColors: PoopColor[] = [
  {
    color: "Yellow (mustard)",
    hexCode: "#D4A017",
    title: "Mustard Yellow",
    description:
      "The classic breastfed baby poop. Mustard-yellow with a seedy, cottage-cheese-like texture. This is the gold standard (literally) for healthy breastfed stools.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Breast milk digestion  -  the most common color for exclusively breastfed babies",
      "Bilirubin breakdown products give it the characteristic yellow hue",
    ],
    whenToWorry:
      "Mustard yellow is completely normal and expected. No action needed unless accompanied by other symptoms like fever, blood, or refusal to feed.",
  },
  {
    color: "Yellow-Green",
    hexCode: "#9AAF57",
    title: "Yellow-Green (Transitional)",
    description:
      "A mix of yellow and green that often appears during the transition from meconium to mature breast milk stools, or when switching between breast milk and formula.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Transitional stool in the first week of life as meconium clears",
      "Mixed feeding (breast milk and formula)",
      "Normal variation in gut bacteria",
    ],
    whenToWorry:
      "Yellow-green is normal, especially in the first 1-2 weeks. If it persists beyond 2 weeks with excessive fussiness, mention it at your next pediatrician visit.",
  },
  {
    color: "Green",
    hexCode: "#4A7C3F",
    title: "Green",
    description:
      "Green poop is usually normal and more common than parents expect. It can range from army green to lime green. Often caused by what baby (or breastfeeding mom) is eating.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Foremilk/hindmilk imbalance  -  baby getting more watery foremilk and less fatty hindmilk",
      "Iron-fortified formula",
      "Iron supplements",
      "Introduction of green vegetables (peas, spinach, green beans)",
      "Food passing through the gut quickly (bile doesn't fully break down)",
      "Mom eating lots of green vegetables or foods with green dye",
    ],
    whenToWorry:
      "Green poop alone is rarely a concern. If it's consistently bright green, very watery, and baby is fussy or gassy, try adjusting breastfeeding technique to ensure baby empties one breast before switching. See your pediatrician if accompanied by mucus, blood, or poor weight gain.",
  },
  {
    color: "Brown",
    hexCode: "#8B6914",
    title: "Brown",
    description:
      "Tan to brown poop is the norm for formula-fed babies and babies eating solid foods. The shade can range from light tan to dark brown depending on diet.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Formula digestion  -  formula-fed babies tend to have browner, firmer stools",
      "Solid food introduction  -  stools become more brown and formed as diet diversifies",
      "Normal bile breakdown",
    ],
    whenToWorry:
      "Brown is completely normal. No action needed. Very dark brown (but not black) is also fine.",
  },
  {
    color: "Orange",
    hexCode: "#E8881F",
    title: "Orange",
    description:
      "Orange-tinted poop is normal and usually diet-related. It can look alarming but is almost always harmless.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Carrots, sweet potatoes, squash, or other orange foods in baby's diet",
      "Beta-carotene from mom's diet passing through breast milk",
      "Certain medications or supplements",
      "Normal pigment variation in formula-fed stools",
    ],
    whenToWorry:
      "Orange poop is normal. No medical concern. The color should change as diet varies.",
  },
  {
    color: "Red",
    hexCode: "#CC3333",
    title: "Red or Blood-Streaked",
    description:
      "Red poop can be alarming but has both harmless and serious causes. It's important to evaluate the context  -  is it streaks on the surface, mixed throughout, or the entire stool?",
    isNormal: false,
    isUrgent: false,
    causes: [
      "Red foods: beets, tomatoes, red Jell-O, red fruit juice, cranberries",
      "Swallowed maternal blood during delivery (newborns) or from cracked nipples during breastfeeding",
      "Small anal fissure (tear) from hard stools  -  most common cause of blood streaks",
      "Milk protein allergy or intolerance (often with mucus)",
      "Bacterial infection",
      "Intussusception (rare but serious  -  \"currant jelly\" appearance)",
    ],
    whenToWorry:
      "If you can't trace it to red foods, contact your pediatrician. Seek immediate care if: large amounts of blood, \"currant jelly\" stool (dark red/maroon and jelly-like), baby is in pain or lethargic, or blood is accompanied by fever or vomiting.",
  },
  {
    color: "Black",
    hexCode: "#1A1A1A",
    title: "Black (Meconium or Tarry)",
    description:
      "Black, tarry stool is normal ONLY in the first 2-3 days of life (meconium). After the newborn period, black stool can indicate digested blood in the upper GI tract and requires prompt evaluation.",
    isNormal: false,
    isUrgent: true,
    causes: [
      "Meconium  -  the thick, sticky, black-green first stools (normal, days 1-3)",
      "Iron supplements can darken stool significantly (usually dark green-black, not true tar-black)",
      "Digested blood from higher in the GI tract (upper GI bleeding)",
      "Swallowed blood from cracked nipples during breastfeeding (newborns)",
    ],
    whenToWorry:
      "Meconium in the first 2-3 days is normal and expected. After that: if stools are true black and tarry (sticky like tar), call your pediatrician right away. If baby is on iron supplements and stools are dark green-black, that's likely the iron  -  but confirm with your doctor.",
  },
  {
    color: "White / Pale / Clay",
    hexCode: "#E8E0D0",
    title: "White, Pale, or Clay-Colored",
    description:
      "White, chalky, or very pale clay-colored stool is the one color that always requires immediate medical attention. It suggests bile is not reaching the intestines, which can indicate a serious liver or biliary condition.",
    isNormal: false,
    isUrgent: true,
    causes: [
      "Biliary atresia  -  a rare but serious condition where bile ducts are blocked or absent",
      "Other liver conditions affecting bile production or flow",
      "Gallbladder problems (very rare in infants)",
    ],
    whenToWorry:
      "Call your pediatrician immediately or go to the ER. White or clay-colored stool can be a sign of biliary atresia, which requires early surgical intervention (ideally before 60 days of age) for the best outcomes. Do not wait for the next scheduled appointment.",
  },
  {
    color: "Dark Green",
    hexCode: "#2E5930",
    title: "Dark Green",
    description:
      "Dark green poop is very common and almost always normal. It's frequently seen with iron-fortified formula, iron supplements, or when stool moves through the intestines at a moderate pace.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Iron-fortified formula  -  the most common cause",
      "Iron supplements or iron-containing vitamins",
      "Green vegetables in baby's or mom's diet",
      "Normal bile pigment variation  -  bile starts green and turns brown as it's processed",
      "Transitional stool in newborns (between meconium and mature stool)",
    ],
    whenToWorry:
      "Dark green is normal, especially with iron-fortified formula. No action needed unless accompanied by diarrhea, blood, or mucus.",
  },
  {
    color: "Tan / Beige",
    hexCode: "#C8B58C",
    title: "Tan or Beige",
    description:
      "Tan or sandy-beige poop is a common and normal color for formula-fed babies. It's typically paste-like in consistency and has a more formed appearance than breastfed stools.",
    isNormal: true,
    isUrgent: false,
    causes: [
      "Formula digestion  -  this is one of the most typical formula-fed stool colors",
      "Mixed feeding with some formula",
      "Normal variation as baby's gut matures",
    ],
    whenToWorry:
      "Tan is perfectly normal for formula-fed babies. Only be concerned if it becomes very pale, white, or chalky  -  that's a different situation (see White/Pale above).",
  },
];

export const poopTextures: PoopTexture[] = [
  {
    name: "Seedy / Cottage Cheese",
    description:
      "Small seed-like curds or granules mixed into a loose, runny stool. Often described as looking like grainy mustard or cottage cheese. The \"seeds\" are undigested milk fat  -  completely normal.",
    isNormal: true,
    commonAges: "Newborn through 6 months (breastfed babies)",
    causes: [
      "Normal breast milk digestion  -  the fat in breast milk doesn't fully break down",
      "Healthy gut bacteria processing breast milk",
    ],
  },
  {
    name: "Paste-like / Peanut Butter",
    description:
      "Thick, smooth, and paste-like in consistency, similar to peanut butter or hummus. More formed than breastfed stools but not solid. This is the typical texture for formula-fed baby poop.",
    isNormal: true,
    commonAges: "Newborn through 6 months (formula-fed babies)",
    causes: [
      "Formula digestion  -  formula is processed differently than breast milk",
      "More complete fat absorption compared to breast milk",
    ],
  },
  {
    name: "Formed / Soft Log",
    description:
      "Soft, formed stools that hold their shape. Similar to adult stool but softer. This becomes the norm once baby is eating a variety of solid foods.",
    isNormal: true,
    commonAges: "6+ months (after solid food introduction)",
    causes: [
      "Solid food introduction  -  increased fiber and bulk",
      "Maturing digestive system",
      "More diverse gut microbiome",
    ],
  },
  {
    name: "Watery / Liquid",
    description:
      "Very loose, watery stool that may soak into the diaper leaving mainly a stain. It can be hard to distinguish from urine in very young babies. Occasional watery stools may be normal, but frequent ones warrant attention.",
    isNormal: false,
    commonAges: "Any age",
    causes: [
      "Diarrhea from viral or bacterial infection (most common cause)",
      "Food intolerance or allergy (especially cow's milk protein)",
      "Teething (some babies have looser stools while teething)",
      "Too much fruit juice",
      "Antibiotics disrupting gut flora",
    ],
  },
  {
    name: "Mucusy / Slimy",
    description:
      "Stool with visible strings, streaks, or blobs of mucus  -  slimy, glistening, jelly-like material mixed in. A small amount of mucus can be normal, but large amounts need evaluation.",
    isNormal: false,
    commonAges: "Any age",
    causes: [
      "Excess drool being swallowed (especially during teething)",
      "Mild viral infection or cold (swallowed nasal mucus)",
      "Cow's milk protein allergy or intolerance  -  one of the hallmark signs",
      "Bacterial infection",
      "Inflammatory condition",
    ],
  },
  {
    name: "Hard Pellets / Pebbles",
    description:
      "Small, hard, round pellets that look like rabbit droppings or small pebbles. Baby may strain, grunt, or cry while passing them. This is a sign of constipation.",
    isNormal: false,
    commonAges: "Usually after solid food introduction (6+ months)",
    causes: [
      "Constipation  -  stool has been in the colon too long, losing water",
      "Not enough fluids",
      "Too many binding foods (rice cereal, bananas, applesauce)",
      "Formula transition or new formula",
      "Introduction of cow's milk",
    ],
  },
  {
    name: "Foamy / Frothy",
    description:
      "Light, airy stool with visible bubbles or a frothy, mousse-like appearance. May look fizzy or have a greenish tint. Usually harmless but can indicate a feeding imbalance.",
    isNormal: false,
    commonAges: "First 6 months (primarily breastfed babies)",
    causes: [
      "Foremilk/hindmilk imbalance  -  too much watery foremilk, not enough fatty hindmilk",
      "Lactose overload from very frequent short feeds",
      "Viral gastroenteritis",
      "Food sensitivity",
    ],
  },
  {
    name: "Chunky / Food Pieces",
    description:
      "Stool with visible, recognizable pieces of undigested food  -  you might see bits of corn, blueberry skins, peas, or other foods baby ate. This is very normal and expected when baby starts solids.",
    isNormal: true,
    commonAges: "6-18 months (during early solid food introduction)",
    causes: [
      "Baby's digestive system is still maturing  -  it can't break down all fiber and skins yet",
      "Baby not chewing food thoroughly (normal  -  they're learning)",
      "High-fiber foods passing through intact",
    ],
  },
];

export const poopByAge: PoopByAge[] = [
  {
    ageRange: "Newborn (0-5 days)",
    normalColors: ["Black-green (meconium)", "Dark green (transitional)", "Yellow-green"],
    normalFrequency:
      "Day 1: at least 1 stool. Days 2-3: 1-2 stools. Days 4-5: 3-4+ stools. Frequency increases rapidly as feeding establishes.",
    normalTexture:
      "Day 1-2: thick, sticky, tar-like meconium. Day 3-4: transitional (looser, greenish). Day 5+: seedy yellow (breastfed) or paste-like tan (formula-fed).",
    notes:
      "Meconium should pass within the first 24-48 hours. If your baby hasn't had a stool by 24 hours, let the hospital staff know. The transition from meconium to normal stool is a key sign that baby is feeding well. Meconium stool is odorless.",
  },
  {
    ageRange: "1-6 weeks",
    normalColors: ["Mustard yellow (breastfed)", "Tan, brown, or yellow-green (formula-fed)"],
    normalFrequency:
      "Breastfed: 3-12+ stools per day is normal  -  some babies poop after every feeding. Formula-fed: 1-4 stools per day. If your breastfed baby suddenly goes from frequent stools to none, see the 6-week note below.",
    normalTexture:
      "Breastfed: loose, seedy, runny (this is NOT diarrhea  -  it's normal). Formula-fed: thicker, paste-like, more formed.",
    notes:
      "Breastfed babies often poop very frequently at this age  -  it's a sign of good milk intake. Formula-fed stools are typically bulkier and smellier. Both are normal. Important: frequent stooling in breastfed babies is a reassuring sign of adequate milk supply.",
  },
  {
    ageRange: "6 weeks - 6 months",
    normalColors: ["Yellow, yellow-green (breastfed)", "Tan, brown, green (formula-fed)"],
    normalFrequency:
      "Breastfed: can range widely  -  some babies poop several times a day, others go up to 7-10 days between stools. Both can be normal if baby is comfortable, gaining weight, and stools are soft when they come. Formula-fed: typically 1-2 times per day.",
    normalTexture:
      "Breastfed: still soft and seedy, though may become less seedy over time. Formula-fed: paste-like, soft but formed.",
    notes:
      "Around 6 weeks, many breastfed babies suddenly shift from pooping frequently to going several days without a stool. This is normal and happens because mature breast milk is so well-absorbed there's little waste. As long as baby is happy and the stool is soft (not hard pellets), this is fine.",
  },
  {
    ageRange: "6-12 months",
    normalColors: ["Brown, tan, green, yellow", "May reflect food colors (orange from carrots, dark from blueberries)"],
    normalFrequency:
      "Typically 1-3 stools per day, though some babies still go every other day. Frequency often increases right after starting solids, then settles.",
    normalTexture:
      "Becoming thicker, more formed, and more like adult stool. You'll see recognizable food pieces  -  this is normal. Stools become smellier as solid food intake increases.",
    notes:
      "This is when poop gets more interesting (and smellier). You'll start to see food pass through  -  corn, blueberry skins, peas  -  this is completely normal. It takes time for baby's digestive system to learn to break everything down. If stools become hard pellets, increase water and high-fiber foods (prunes, pears, peas).",
  },
  {
    ageRange: "12+ months",
    normalColors: ["Brown (most common)", "May vary with diet"],
    normalFrequency:
      "1-2 stools per day is typical, but anywhere from 2 per day to every other day is normal as long as they're soft and passed without straining.",
    normalTexture:
      "Formed, soft logs  -  similar to adult stool but softer. Should not be hard, dry, or pellet-like. Some food pieces may still be visible, which is normal.",
    notes:
      "By this age, stools should be looking more like adult poop  -  formed, brown, and regular. If your toddler is straining, withholding, or producing hard pellets, constipation may be developing. Increase fluids, fiber (fruits, vegetables, whole grains), and physical activity. Avoid excessive dairy, which can be binding.",
  },
];

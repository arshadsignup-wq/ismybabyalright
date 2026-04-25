export interface GrowthSpurt {
  id: string;
  age: string;
  ageWeeks?: number;
  ageMonths?: number;
  duration: string;
  signs: string[];
  tips: string[];
  description: string;
}

export const growthSpurts: GrowthSpurt[] = [
  {
    id: "1-2-weeks",
    age: "1-2 Weeks",
    ageWeeks: 1,
    duration: "1-2 days",
    signs: [
      "Wanting to feed almost constantly (cluster feeding)",
      "Fussiness and irritability, especially in the evening",
      "Shorter, more restless sleep cycles",
      "Seeming hungrier than usual even after a full feed",
    ],
    tips: [
      "Feed on demand  -  your baby is signaling your body to increase milk supply",
      "This is not a sign that you are not producing enough milk",
      "Rest when your baby rests; your body is also recovering from birth",
      "Skin-to-skin contact helps regulate your baby and supports feeding",
    ],
    description:
      "The first growth spurt typically happens around 7-10 days of life, right as your baby is regaining birth weight. Babies commonly lose up to 7-10% of their birth weight in the first few days and then begin gaining it back. This spurt helps them get back to and surpass their birth weight by around 2 weeks of age.",
  },
  {
    id: "3-weeks",
    age: "3 Weeks",
    ageWeeks: 3,
    duration: "2-3 days",
    signs: [
      "Increased feeding frequency  -  may want to nurse every 1-1.5 hours",
      "More fussiness and difficulty settling",
      "Wanting to be held constantly",
      "Shorter naps or more nighttime waking",
    ],
    tips: [
      "Cluster feeding is normal and temporary  -  it is building your milk supply",
      "If bottle feeding, offer an extra ounce or an additional feeding",
      "Babywearing can help soothe your baby while keeping your hands free",
      "Accept help from others so you can rest during this demanding phase",
    ],
    description:
      "At around 3 weeks, babies go through another rapid growth phase. They may gain about 1 ounce (30 grams) per day during this period. This spurt often coincides with increased alertness as your baby becomes more aware of their surroundings. The constant feeding can be exhausting, but it typically resolves within a few days.",
  },
  {
    id: "6-weeks",
    age: "6 Weeks",
    ageWeeks: 6,
    duration: "2-3 days",
    signs: [
      "Pronounced increase in appetite and feeding sessions",
      "Peak fussiness  -  this is often the fussiest period of infancy",
      "Disrupted sleep patterns that had just started to become more predictable",
      "Clinginess and needing more physical comfort",
      "May seem unsatisfied after feeds that previously seemed adequate",
    ],
    tips: [
      "This spurt often overlaps with the peak of colic/fussiness (typically worst at 6-8 weeks)",
      "Keep offering feeds  -  your supply adjusts within 24-48 hours",
      "Evening fussiness is common and is not necessarily a sign of insufficient milk",
      "Take turns with your partner for soothing  -  this phase is temporary",
      "Talk to your pediatrician if fussiness is severe or your baby seems in pain",
    ],
    description:
      "The 6-week growth spurt is one of the most noticeable because it often coincides with peak fussiness in infancy. Babies may feed 12 or more times in 24 hours. This is also the age when your baby starts producing social smiles, so you may see increased alertness alongside the fussiness. Many parents feel most overwhelmed during this spurt, but it typically passes within 2-3 days.",
  },
  {
    id: "3-months",
    age: "3 Months",
    ageMonths: 3,
    duration: "3-7 days",
    signs: [
      "Sudden increase in hunger after a more predictable feeding schedule",
      "More nighttime waking after previously longer stretches",
      "Increased fussiness or crankiness during the day",
      "May seem distracted during feeds  -  looking around instead of eating",
      "Changes in nap length or patterns",
    ],
    tips: [
      "Feed in a quiet, dimly lit room if your baby is getting easily distracted",
      "This is often when breastfed babies start feeding more efficiently (shorter feeds, not less milk)",
      "Growth rate may slow slightly after this spurt  -  this is normal",
      "Offer feeds before baby gets overtired; tired babies feed less effectively",
    ],
    description:
      "Around 3 months, babies go through a significant growth spurt that may be the most disruptive yet. By this age, most babies have nearly doubled their birth weight. This spurt can also coincide with a developmental leap  -  your baby is becoming more socially engaged, discovering their hands, and developing better head control. Some parents mistake the increased waking for a sleep regression, but it is typically driven by hunger and growth.",
  },
  {
    id: "4-months",
    age: "4 Months",
    ageMonths: 4,
    duration: "3-7 days (may overlap with sleep regression)",
    signs: [
      "Increased appetite and more frequent feeds",
      "Significant disruption to sleep (this overlaps with the 4-month sleep regression)",
      "Irritability and fussiness that seems disproportionate",
      "May start showing increased interest in watching you eat",
      "Rapid weight gain during this period",
    ],
    tips: [
      "This growth spurt often overlaps with the 4-month sleep regression, making it doubly challenging",
      "Do not start solids just because your baby seems hungrier  -  AAP recommends waiting until about 6 months",
      "Interest in your food is a developmental milestone, not necessarily hunger for solids",
      "Sleep disruptions from the regression are a permanent change in sleep cycles  -  not just the spurt",
      "Share nighttime duties if possible; this is one of the toughest phases",
    ],
    description:
      "The 4-month growth spurt is notorious because it frequently overlaps with the 4-month sleep regression. While the growth spurt itself lasts a few days, the sleep changes from the regression represent a permanent maturation of sleep cycles. During this time, babies are also developing rapidly  -  rolling, reaching for objects, and becoming much more interactive. Many parents find this the most difficult spurt, but the growth and development that comes with it is remarkable.",
  },
  {
    id: "6-months",
    age: "6 Months",
    ageMonths: 6,
    duration: "3-5 days",
    signs: [
      "Increased hunger  -  may want more frequent breastfeeds or larger bottles",
      "Waking at night after having slept through or mostly through",
      "Fussiness and clinginess, possibly with increased separation anxiety",
      "Rapid physical growth  -  may outgrow clothes noticeably",
      "Increased drooling (which may also coincide with teething)",
    ],
    tips: [
      "This is around when many babies are ready to start solid foods (discuss with your pediatrician)",
      "Starting solids does not replace breast milk or formula  -  food is complementary at this stage",
      "If your baby is eating solids, do not reduce milk feeds to compensate for the growth spurt",
      "Teething may coincide with this spurt  -  offer a chilled teething ring for relief",
      "Separation anxiety is developmentally normal and a sign of healthy attachment",
    ],
    description:
      "By 6 months, most babies have approximately tripled their birth weight. This growth spurt often coincides with the introduction of solid foods, teething, and the emergence of separation anxiety. Babies at this age are also becoming mobile  -  sitting up independently, possibly starting to crawl  -  which increases their caloric needs. The combination of physical growth, new feeding patterns, and developmental leaps can make this a busy and sometimes overwhelming period.",
  },
  {
    id: "9-months",
    age: "9 Months",
    ageMonths: 9,
    duration: "3-5 days",
    signs: [
      "Increased appetite for both milk and solid foods",
      "Disrupted sleep  -  may coincide with the 8-10 month sleep regression",
      "Clinginess and separation anxiety (often peaks around 9 months)",
      "Possible regression in sleep skills that had been established",
      "Very active and energetic during the day but extra fussy",
    ],
    tips: [
      "Ensure solid food portions are age-appropriate  -  your baby's stomach is about the size of their fist",
      "Continue offering breast milk or formula as the primary nutrition source until 12 months",
      "Practice separation in small doses during the day to help with nighttime anxiety",
      "Ensure enough daytime calories so nighttime waking is less likely to be hunger-driven",
      "This spurt often coincides with crawling, pulling up, and cruising  -  your baby needs extra energy for these activities",
    ],
    description:
      "The 9-month growth spurt is the last major growth spurt of the first year. It frequently overlaps with the 8-10 month sleep regression and peak separation anxiety. Babies at this age are incredibly active  -  crawling, pulling to stand, cruising, and exploring everything. This increased activity combined with growth creates a significant caloric demand. After this spurt, growth typically slows somewhat, and most babies gain weight more gradually during the second year of life.",
  },
];

export const generalTips: string[] = [
  "Growth spurts are temporary  -  most last 2-7 days. The increased fussiness and feeding will pass.",
  "Feed on demand during growth spurts. Breast milk supply adjusts within 24-48 hours to meet increased demand. If formula feeding, offer extra ounces or an additional bottle.",
  "Weight gain is not perfectly linear. Babies grow in spurts and plateaus, and this is completely normal. Your pediatrician tracks growth over time, not day-to-day.",
  "Not all fussy days are growth spurts. Illness, teething, developmental leaps, and overstimulation can all cause similar symptoms. When in doubt, check with your pediatrician.",
  "Growth spurts can be exhausting for parents. Accept help, lower your expectations for housework, and prioritize rest. This is a sprint, not a marathon.",
  "Every baby is different. Your baby may not hit these growth spurts at the exact ages listed  -  these are averages, and variation of 1-2 weeks is completely normal.",
];

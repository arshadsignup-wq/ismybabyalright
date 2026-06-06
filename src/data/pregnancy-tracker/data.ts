/**
 * Pregnancy week-by-week data (weeks 4-40).
 * Sources: ACOG, Mayo Clinic, Cleveland Clinic, March of Dimes.
 */

export interface PregnancyWeek {
  week: number;
  trimester: 1 | 2 | 3;
  babySize: string;
  babySizeCm: number;
  babyWeightG: number;
  babyDevelopment: string[];
  motherChanges: string[];
  tips: string[];
  warningSign?: string;
}

export const PREGNANCY_WEEKS: PregnancyWeek[] = [
  {
    week: 4,
    trimester: 1,
    babySize: "Poppy seed",
    babySizeCm: 0.1,
    babyWeightG: 0.04,
    babyDevelopment: [
      "The embryo implants into the uterine wall",
      "Two layers of cells form — the epiblast and hypoblast — which will develop into all organs",
      "The amniotic sac and yolk sac begin to form",
      "The placenta starts developing to provide nutrients",
    ],
    motherChanges: [
      "You may notice a missed period",
      "Some women experience light implantation bleeding or spotting",
      "Early fatigue and breast tenderness may begin",
    ],
    tips: [
      "Take a home pregnancy test if you haven't already",
      "Start or continue taking prenatal vitamins with folic acid (400-800 mcg daily)",
      "Schedule your first prenatal appointment",
    ],
    warningSign:
      "Heavy bleeding or severe cramping could indicate an ectopic pregnancy — seek medical attention immediately.",
  },
  {
    week: 5,
    trimester: 1,
    babySize: "Sesame seed",
    babySizeCm: 0.2,
    babyWeightG: 0.1,
    babyDevelopment: [
      "The neural tube (which becomes the brain and spinal cord) begins to form",
      "The heart starts as a simple tube and begins to beat",
      "Arm and leg buds start to appear",
      "Three germ layers (ectoderm, mesoderm, endoderm) differentiate",
    ],
    motherChanges: [
      "Morning sickness may begin — nausea can occur at any time of day",
      "Increased urination as hormones affect the kidneys",
      "Heightened sense of smell",
    ],
    tips: [
      "Eat small, frequent meals to help manage nausea",
      "Stay hydrated — aim for 8-10 glasses of water daily",
      "Avoid alcohol, smoking, and raw or undercooked foods",
    ],
  },
  {
    week: 6,
    trimester: 1,
    babySize: "Lentil",
    babySizeCm: 0.4,
    babyWeightG: 0.2,
    babyDevelopment: [
      "Facial features begin forming — dark spots for eyes, small openings for nostrils",
      "The heart beats about 110 times per minute",
      "Tiny buds that will become arms and legs grow longer",
      "The jaw, cheeks, and chin start to take shape",
    ],
    motherChanges: [
      "Nausea and vomiting may intensify",
      "Mood swings due to rising hCG and progesterone",
      "Breast tenderness and slight swelling",
    ],
    tips: [
      "Ginger tea or ginger candies can help with nausea",
      "Get plenty of rest — your body is working hard",
      "Consider telling a close friend or partner for emotional support",
    ],
  },
  {
    week: 7,
    trimester: 1,
    babySize: "Blueberry",
    babySizeCm: 1.0,
    babyWeightG: 0.5,
    babyDevelopment: [
      "The brain is growing rapidly — about 100 new brain cells form every minute",
      "Arm buds develop paddle-like hands",
      "Both hemispheres of the brain are forming",
      "The appendix and pancreas begin developing",
    ],
    motherChanges: [
      "Food aversions and cravings may start",
      "Excess saliva production (ptyalism) is common",
      "Mild cramping as the uterus begins to expand",
    ],
    tips: [
      "Eat whatever you can keep down — nutrition balance can come later",
      "Start researching prenatal care providers if you haven't chosen one",
      "Keep crackers by your bedside for morning nausea",
    ],
  },
  {
    week: 8,
    trimester: 1,
    babySize: "Raspberry",
    babySizeCm: 1.6,
    babyWeightG: 1.0,
    babyDevelopment: [
      "Fingers and toes begin to form, though still webbed",
      "The baby starts making small, involuntary movements",
      "The upper lip and nose have formed",
      "Eyelids are forming and nearly cover the eyes",
    ],
    motherChanges: [
      "Morning sickness may peak around this time",
      "Your uterus is now about the size of a large orange",
      "Increased blood volume — about 50% more by end of pregnancy",
    ],
    tips: [
      "Your first ultrasound may happen around now — you can confirm the heartbeat",
      "Wear a supportive bra as breasts grow",
      "Avoid hot tubs and saunas (temperatures above 101F / 38.3C)",
    ],
    warningSign:
      "If you have severe nausea and vomiting preventing you from keeping anything down, contact your provider — this may be hyperemesis gravidarum.",
  },
  {
    week: 9,
    trimester: 1,
    babySize: "Green olive",
    babySizeCm: 2.3,
    babyWeightG: 2.0,
    babyDevelopment: [
      "The embryo is now officially called a fetus",
      "All essential organs have begun forming",
      "Tiny muscles begin to develop — baby can flex",
      "The tail at the bottom of the spinal cord has disappeared",
    ],
    motherChanges: [
      "Waistline may start thickening even before showing",
      "Emotional ups and downs continue",
      "Constipation may develop due to progesterone slowing digestion",
    ],
    tips: [
      "Eat high-fiber foods and drink water to combat constipation",
      "Continue moderate exercise unless your provider advises otherwise",
      "Start thinking about genetic screening options",
    ],
  },
  {
    week: 10,
    trimester: 1,
    babySize: "Prune",
    babySizeCm: 3.1,
    babyWeightG: 4.0,
    babyDevelopment: [
      "All vital organs are formed and beginning to function together",
      "Tiny fingernails and toenails start to develop",
      "Baby can swallow fluid and kick — though you won't feel it yet",
      "Tooth buds form beneath the gums",
    ],
    motherChanges: [
      "Visible veins may appear on your breasts and abdomen",
      "Slight weight gain (1-3 lbs so far is typical)",
      "Round ligament pain may cause occasional sharp twinges",
    ],
    tips: [
      "Discuss first-trimester screening (NIPT or nuchal translucency) with your provider",
      "Invest in comfortable, stretchy clothing",
      "Consider starting a pregnancy journal",
    ],
  },
  {
    week: 11,
    trimester: 1,
    babySize: "Fig",
    babySizeCm: 4.1,
    babyWeightG: 7.0,
    babyDevelopment: [
      "The head makes up about half of the body length",
      "Hair follicles begin to form on the skin",
      "The diaphragm is developing — baby may start hiccupping",
      "External genitalia start to differentiate (though too early to see on ultrasound)",
    ],
    motherChanges: [
      "Nausea may slowly begin to improve for some women",
      "Bloating and gas are common",
      "Skin changes — you may notice a 'pregnancy glow' or acne",
    ],
    tips: [
      "Stay active with gentle exercises like walking or swimming",
      "Use sunscreen — pregnancy hormones can cause dark patches (melasma)",
      "Start planning how and when to share your news",
    ],
  },
  {
    week: 12,
    trimester: 1,
    babySize: "Lime",
    babySizeCm: 5.4,
    babyWeightG: 14.0,
    babyDevelopment: [
      "The baby's reflexes are developing — fingers will curl if palm is touched",
      "Kidneys begin producing urine",
      "The skeletal system is hardening from cartilage to bone",
      "The pituitary gland starts producing hormones",
    ],
    motherChanges: [
      "Risk of miscarriage drops significantly after this week",
      "The uterus rises out of the pelvis — your provider can feel it above the pubic bone",
      "Heartburn may begin as the growing uterus pushes on the stomach",
    ],
    tips: [
      "Many parents choose to announce their pregnancy after this milestone",
      "Ask about the nuchal translucency ultrasound if not yet done",
      "Begin researching birthing classes in your area",
    ],
    warningSign:
      "The risk of miscarriage decreases significantly after week 12, but report any heavy bleeding or tissue passing to your provider immediately.",
  },
  {
    week: 13,
    trimester: 2,
    babySize: "Peach",
    babySizeCm: 7.4,
    babyWeightG: 23.0,
    babyDevelopment: [
      "Vocal cords are forming in the larynx",
      "The intestines, which developed in the umbilical cord, move into the abdomen",
      "Fingerprints are forming on tiny fingertips",
      "The baby can put a thumb in the mouth (though not purposefully sucking yet)",
    ],
    motherChanges: [
      "Energy levels often improve — the second trimester is called the 'honeymoon phase'",
      "Morning sickness typically begins to ease",
      "A small baby bump may become visible",
    ],
    tips: [
      "Celebrate entering the second trimester!",
      "Start sleeping on your side if comfortable — left side is ideal for blood flow",
      "Increase caloric intake by about 300 calories per day",
    ],
  },
  {
    week: 14,
    trimester: 2,
    babySize: "Lemon",
    babySizeCm: 8.7,
    babyWeightG: 43.0,
    babyDevelopment: [
      "The roof of the mouth (palate) has formed completely",
      "Baby starts making facial expressions — squinting, frowning, grimacing",
      "The liver begins producing bile",
      "Lanugo (fine, downy hair) begins covering the body for warmth",
    ],
    motherChanges: [
      "Appetite may return or increase",
      "The 'pregnancy glow' — increased blood flow makes skin appear radiant",
      "Nasal congestion from increased blood volume",
    ],
    tips: [
      "Eat iron-rich foods (lean meat, spinach, beans) to support increased blood volume",
      "Start doing Kegel exercises to strengthen pelvic floor muscles",
      "Begin moisturizing your belly to help with stretching skin",
    ],
  },
  {
    week: 15,
    trimester: 2,
    babySize: "Apple",
    babySizeCm: 10.1,
    babyWeightG: 70.0,
    babyDevelopment: [
      "The skeletal system continues to harden — calcium is being stored",
      "Baby can sense light through closed eyelids",
      "Legs are now longer than the arms",
      "The three tiny bones of the middle ear begin to form",
    ],
    motherChanges: [
      "You may feel occasional nosebleeds or gum bleeding due to increased blood flow",
      "Growing belly may start to affect your balance",
      "Some women begin to feel faint flutters (quickening), especially second-time moms",
    ],
    tips: [
      "Make sure you're getting 1000 mg of calcium daily",
      "Discuss any upcoming travel plans with your provider",
      "Consider maternity clothes shopping — your regular clothes may be getting tight",
    ],
  },
  {
    week: 16,
    trimester: 2,
    babySize: "Avocado",
    babySizeCm: 11.6,
    babyWeightG: 100.0,
    babyDevelopment: [
      "The musculoskeletal system is maturing — baby is moving limbs purposefully",
      "Eyes can make slow movements (though eyelids are still sealed)",
      "The circulatory system is now fully functioning",
      "Toenails begin to grow",
    ],
    motherChanges: [
      "The 'pregnancy glow' continues — your hair may look thicker and shinier",
      "Backaches may begin as your center of gravity shifts",
      "Some women feel the baby's first movements (quickening) this week",
    ],
    tips: [
      "Schedule your mid-pregnancy anatomy scan (usually done at 18-22 weeks)",
      "Sleep with a pillow between your knees for back support",
      "Stay active — prenatal yoga is excellent for this stage",
    ],
  },
  {
    week: 17,
    trimester: 2,
    babySize: "Pear",
    babySizeCm: 13.0,
    babyWeightG: 140.0,
    babyDevelopment: [
      "Fat stores begin to develop under the skin (brown fat for warmth)",
      "The umbilical cord grows stronger and thicker",
      "Baby can hear sounds — your heartbeat and digestive system are audible",
      "Sweat glands start to develop",
    ],
    motherChanges: [
      "Increased vaginal discharge (leukorrhea) is normal",
      "Your center of gravity is shifting — be careful on stairs",
      "You may notice stretch marks beginning to form",
    ],
    tips: [
      "Talk and sing to your baby — they can hear you now",
      "Drink plenty of water to help prevent urinary tract infections",
      "Consider a prenatal massage for back and hip relief",
    ],
  },
  {
    week: 18,
    trimester: 2,
    babySize: "Bell pepper",
    babySizeCm: 14.2,
    babyWeightG: 190.0,
    babyDevelopment: [
      "Myelin (a protective coating) begins forming around the nerves",
      "If female, the uterus and fallopian tubes are in place",
      "Baby yawns, hiccups, and sucks — all practice for life outside the womb",
      "Ears move to their final position on the sides of the head",
    ],
    motherChanges: [
      "Your cardiovascular system undergoes major changes — blood pressure may dip",
      "Feeling dizzy when standing up quickly is common",
      "Most women can feel distinct baby movements by now",
    ],
    tips: [
      "Rise slowly from sitting or lying positions to prevent dizziness",
      "The anatomy scan is coming up — prepare your questions for the sonographer",
      "Eat omega-3 rich foods (salmon, walnuts) for baby's brain development",
    ],
  },
  {
    week: 19,
    trimester: 2,
    babySize: "Mango",
    babySizeCm: 15.3,
    babyWeightG: 240.0,
    babyDevelopment: [
      "Vernix caseosa (a waxy coating) forms to protect baby's skin from amniotic fluid",
      "Sensory brain areas for taste, smell, sight, touch, and hearing are developing",
      "Baby's movements become more coordinated",
      "Arms and legs are in correct proportion to the rest of the body",
    ],
    motherChanges: [
      "Round ligament pain may cause sharp pains in the lower abdomen",
      "Leg cramps, especially at night, may begin",
      "Your belly button may begin to flatten or push outward",
    ],
    tips: [
      "Stretch your calves before bed to help prevent leg cramps",
      "Take warm (not hot) baths for relaxation and pain relief",
      "Start thinking about your birth plan preferences",
    ],
  },
  {
    week: 20,
    trimester: 2,
    babySize: "Banana",
    babySizeCm: 25.6,
    babyWeightG: 300.0,
    babyDevelopment: [
      "You're halfway there! Baby is measured from head to toe (not crown to rump) now",
      "The anatomy scan can reveal the sex of the baby if desired",
      "Baby swallows more amniotic fluid — practicing for digestion",
      "Taste buds are functional — baby can taste what you eat through amniotic fluid",
    ],
    motherChanges: [
      "The top of the uterus (fundus) reaches the level of the belly button",
      "You may gain about 1 pound per week from here on",
      "Shortness of breath may start as the uterus pushes upward",
    ],
    tips: [
      "Congratulations on reaching the halfway point!",
      "The anatomy scan (18-22 weeks) checks baby's organs, growth, and placenta position",
      "Consider signing up for a childbirth education class",
    ],
    warningSign:
      "Report any sudden, severe headaches or changes in vision to your provider — these can be early signs of preeclampsia.",
  },
  {
    week: 21,
    trimester: 2,
    babySize: "Carrot",
    babySizeCm: 26.7,
    babyWeightG: 360.0,
    babyDevelopment: [
      "Baby's movements are strong enough for your partner to feel from outside",
      "Eyebrows and eyelashes are visible",
      "The bone marrow begins producing blood cells (taking over from the liver and spleen)",
      "Baby establishes more regular sleep-wake cycles",
    ],
    motherChanges: [
      "Increased appetite as baby grows rapidly",
      "Varicose veins may appear in the legs",
      "Braxton Hicks contractions (practice contractions) may begin — they should be painless",
    ],
    tips: [
      "Elevate your legs when resting to help with varicose veins",
      "Continue moderate exercise — it helps with energy and sleep",
      "Start researching pediatricians in your area",
    ],
  },
  {
    week: 22,
    trimester: 2,
    babySize: "Papaya",
    babySizeCm: 27.8,
    babyWeightG: 430.0,
    babyDevelopment: [
      "The inner ear is fully developed — baby has a sense of balance",
      "Fingernails have grown to the tips of the fingers",
      "Lips are becoming more distinct",
      "The pancreas is developing steadily to produce hormones",
    ],
    motherChanges: [
      "Stretch marks may become more noticeable on belly, breasts, and thighs",
      "Swelling in ankles and feet (edema) may start",
      "Increased oil production can cause acne",
    ],
    tips: [
      "Wear comfortable, supportive shoes to help with swelling",
      "Keep your skin moisturized with cocoa butter or vitamin E oil",
      "Stay well-hydrated — paradoxically, drinking more water helps reduce swelling",
    ],
  },
  {
    week: 23,
    trimester: 2,
    babySize: "Grapefruit",
    babySizeCm: 28.9,
    babyWeightG: 500.0,
    babyDevelopment: [
      "Baby responds to sounds — may startle at loud noises",
      "Rapid eye movement (REM) begins — baby may be dreaming",
      "Blood vessels in the lungs are developing for breathing",
      "The skin is wrinkled and translucent but will fill out with fat",
    ],
    motherChanges: [
      "You may feel rhythmic jolts — those are baby hiccups!",
      "Linea nigra (a dark line down the center of the abdomen) may appear",
      "Mild swelling in hands and face is normal",
    ],
    tips: [
      "Play music for your baby — they can hear and respond",
      "Talk to your employer about maternity leave planning",
      "Consider taking a hospital tour",
    ],
    warningSign:
      "Baby reaches viability around 23-24 weeks. Report any signs of preterm labor (regular contractions, fluid leaking, pelvic pressure) immediately.",
  },
  {
    week: 24,
    trimester: 2,
    babySize: "Ear of corn",
    babySizeCm: 30.0,
    babyWeightG: 600.0,
    babyDevelopment: [
      "Lungs are developing 'branches' of the respiratory tree and surfactant production begins",
      "Baby is considered viable — could survive outside the womb with intensive medical care",
      "The inner ear is fully developed, giving baby a sense of whether they are right-side up or upside down",
      "Skin is becoming less translucent as pigment develops",
    ],
    motherChanges: [
      "Glucose screening test (gestational diabetes) is typically done between 24-28 weeks",
      "You may notice your belly 'jumping' when baby has hiccups",
      "Backaches may intensify as your belly grows",
    ],
    tips: [
      "Schedule your glucose tolerance test if your provider recommends it",
      "Practice good posture — stand tall with shoulders back to ease back pain",
      "Consider a pregnancy support belt for lower back relief",
    ],
    warningSign:
      "Your provider will screen for gestational diabetes around now. Symptoms like excessive thirst and frequent urination should be reported.",
  },
  {
    week: 25,
    trimester: 2,
    babySize: "Cauliflower",
    babySizeCm: 34.6,
    babyWeightG: 660.0,
    babyDevelopment: [
      "Baby begins to gain more fat, filling out wrinkled skin",
      "Nostrils begin to open — baby practices 'breathing' amniotic fluid",
      "The startle reflex (Moro reflex) develops",
      "Hair begins to show its color and texture",
    ],
    motherChanges: [
      "Hemorrhoids may develop due to increased pelvic pressure",
      "Trouble sleeping is common — it's hard to find a comfortable position",
      "Carpal tunnel syndrome symptoms may appear in the hands and wrists",
    ],
    tips: [
      "Use a pregnancy pillow for better sleep support",
      "Eat high-fiber foods and stay hydrated to prevent hemorrhoids",
      "Wrist stretches can help with carpal tunnel symptoms",
    ],
  },
  {
    week: 26,
    trimester: 2,
    babySize: "Zucchini",
    babySizeCm: 35.6,
    babyWeightG: 760.0,
    babyDevelopment: [
      "Eyes begin to open for the first time",
      "Baby can distinguish between light and dark",
      "The immune system is absorbing antibodies from you",
      "Brain wave activity increases — neural connections are forming rapidly",
    ],
    motherChanges: [
      "Blood pressure may start to rise slightly as it normalizes from the mid-pregnancy dip",
      "Braxton Hicks contractions may become more frequent",
      "You may feel baby respond to your partner's voice or touch",
    ],
    tips: [
      "Start preparing the nursery or sleeping area",
      "Research your hospital's policies on birth plans and visitors",
      "Continue prenatal vitamins — baby is building iron stores from your supply",
    ],
  },
  {
    week: 27,
    trimester: 2,
    babySize: "Head of lettuce",
    babySizeCm: 36.6,
    babyWeightG: 875.0,
    babyDevelopment: [
      "Baby can open and close eyes and has regular sleep-wake cycles",
      "The lungs, while not mature, could function with medical support if born now",
      "Baby may suck their thumb regularly",
      "The brain is very active — trillions of neural connections are forming",
    ],
    motherChanges: [
      "Third trimester begins next week — you're entering the home stretch",
      "Leg cramps and restless legs may disrupt sleep",
      "Shortness of breath becomes more noticeable",
    ],
    tips: [
      "Consider a Tdap vaccine (recommended between 27-36 weeks) to protect baby from whooping cough",
      "Finalize your birth plan and discuss it with your provider",
      "Start packing a hospital bag — it's never too early!",
    ],
  },
  {
    week: 28,
    trimester: 3,
    babySize: "Eggplant",
    babySizeCm: 37.6,
    babyWeightG: 1005.0,
    babyDevelopment: [
      "Baby can blink and has developed eyelashes",
      "REM sleep is well established — baby dreams!",
      "The brain adds billions of neurons",
      "Baby may be in a head-down position, though there's still room to flip",
    ],
    motherChanges: [
      "Welcome to the third trimester! Prenatal visits increase to every 2 weeks",
      "Fatigue returns as baby's energy demands increase",
      "Shortness of breath and heartburn may intensify",
    ],
    tips: [
      "Begin daily kick counts — you should feel 10 movements in 2 hours",
      "If Rh-negative, you'll receive a RhoGAM shot around this time",
      "Rest when you can — your body is working harder than ever",
    ],
    warningSign:
      "Start monitoring baby's movements daily. Report any significant decrease in movement to your provider immediately.",
  },
  {
    week: 29,
    trimester: 3,
    babySize: "Butternut squash",
    babySizeCm: 38.6,
    babyWeightG: 1150.0,
    babyDevelopment: [
      "Baby's bones are fully formed but still soft and pliable",
      "The adrenal glands produce androgen-like hormones that stimulate milk production",
      "Baby continues to put on weight — gaining about half a pound per week",
      "Muscles and lungs continue maturing rapidly",
    ],
    motherChanges: [
      "Frequent urination increases as baby presses on the bladder",
      "You may notice colostrum (early milk) leaking from your breasts",
      "Difficulty sleeping — try sleeping propped up with pillows",
    ],
    tips: [
      "Sign up for a breastfeeding class if planning to nurse",
      "Stay active with gentle walks and stretching",
      "Discuss cord blood banking options with your partner",
    ],
  },
  {
    week: 30,
    trimester: 3,
    babySize: "Cabbage",
    babySizeCm: 39.9,
    babyWeightG: 1320.0,
    babyDevelopment: [
      "Baby's red blood cell production shifts entirely to the bone marrow",
      "Lanugo (fine body hair) begins to disappear",
      "Baby can grasp firmly with their hands",
      "The brain grows rapidly — it can now control body temperature",
    ],
    motherChanges: [
      "Feeling clumsy is normal — your center of gravity has shifted significantly",
      "Mood swings may return due to hormonal changes and anxiety about birth",
      "Heartburn peaks for many women around this time",
    ],
    tips: [
      "Eat smaller, more frequent meals to help with heartburn",
      "Practice breathing techniques for labor",
      "Make sure your car seat is installed and inspected",
    ],
  },
  {
    week: 31,
    trimester: 3,
    babySize: "Coconut",
    babySizeCm: 41.1,
    babyWeightG: 1500.0,
    babyDevelopment: [
      "All five senses are now functional",
      "Baby processes information, tracks light, and can perceive signals from all five senses",
      "The brain is developing at an astonishing rate — making trillions of connections",
      "Baby can turn head from side to side",
    ],
    motherChanges: [
      "Braxton Hicks contractions may be more frequent and noticeable",
      "Back pain intensifies — the hormone relaxin loosens joints and ligaments",
      "Mild swelling in feet and ankles is normal, especially in the evening",
    ],
    tips: [
      "Review the signs of preterm labor with your provider",
      "Prepare your birth plan and share it with your delivery team",
      "Elevate your feet when sitting to reduce swelling",
    ],
  },
  {
    week: 32,
    trimester: 3,
    babySize: "Jicama",
    babySizeCm: 42.4,
    babyWeightG: 1700.0,
    babyDevelopment: [
      "Baby practices breathing movements with fully formed (but immature) lungs",
      "Toenails are now visible",
      "Baby develops distinct periods of sleep and wakefulness",
      "Skin is becoming smooth and less wrinkled as fat accumulates",
    ],
    motherChanges: [
      "Difficulty catching your breath as the uterus pushes up toward the ribcage",
      "Frequent Braxton Hicks contractions — practice for the real thing",
      "Leaking urine when laughing, sneezing, or coughing (stress incontinence)",
    ],
    tips: [
      "Continue Kegel exercises to strengthen pelvic floor muscles",
      "Pack your hospital bag — include clothes for you and baby, toiletries, and documents",
      "Discuss pain management options for labor with your provider",
    ],
    warningSign:
      "Report any gush of fluid from the vagina — this could indicate premature rupture of membranes (water breaking early).",
  },
  {
    week: 33,
    trimester: 3,
    babySize: "Pineapple",
    babySizeCm: 43.7,
    babyWeightG: 1920.0,
    babyDevelopment: [
      "Baby's immune system gets a boost from maternal antibodies crossing the placenta",
      "Bones continue to harden, except for the skull (it remains soft for delivery)",
      "Baby can detect light and dark and the pupils can constrict and dilate",
      "Coordination improves — baby can suck and swallow in sync",
    ],
    motherChanges: [
      "Insomnia is common — anxiety, discomfort, and frequent bathroom trips disrupt sleep",
      "Your belly button may be fully 'outie' by now",
      "Lower back and hip pain may be significant",
    ],
    tips: [
      "Try relaxation techniques like meditation or prenatal yoga for better sleep",
      "Prepare freezer meals for after baby arrives",
      "Discuss who will be in the delivery room with you",
    ],
  },
  {
    week: 34,
    trimester: 3,
    babySize: "Cantaloupe",
    babySizeCm: 45.0,
    babyWeightG: 2150.0,
    babyDevelopment: [
      "Vernix caseosa (the waxy coating) thickens to prepare for delivery",
      "The central nervous system and lungs are maturing",
      "Most boys' testes descend into the scrotum",
      "Baby can hear and recognize your voice and may calm to familiar sounds",
    ],
    motherChanges: [
      "Fatigue may feel overwhelming — growing a human is exhausting",
      "Pelvic pressure increases as baby drops lower",
      "Blurred vision is common due to fluid retention — mention it to your provider",
    ],
    tips: [
      "Finalize your postpartum support plan — who will help after birth?",
      "Review signs of labor: regular contractions, water breaking, bloody show",
      "Pre-register at the hospital or birth center",
    ],
  },
  {
    week: 35,
    trimester: 3,
    babySize: "Honeydew melon",
    babySizeCm: 46.2,
    babyWeightG: 2380.0,
    babyDevelopment: [
      "Baby is running out of room — movements feel more like rolls and stretches than kicks",
      "Kidneys are fully developed and the liver can process waste",
      "Fat accumulation accelerates — baby gains about 0.5 lbs per week",
      "Most babies settle into a head-down position",
    ],
    motherChanges: [
      "Frequent urination intensifies as baby presses harder on the bladder",
      "Braxton Hicks may be strong enough to be mistaken for real labor",
      "Difficulty breathing eases slightly if baby drops into the pelvis ('lightening')",
    ],
    tips: [
      "Learn the difference between Braxton Hicks and real labor contractions",
      "Install the car seat and have it inspected at a local fire station",
      "Get the Tdap vaccine if you haven't already (recommended 27-36 weeks)",
    ],
    warningSign:
      "If you experience regular contractions (every 5 minutes for 1 hour), fluid leaking, or vaginal bleeding, call your provider — this could be preterm labor.",
  },
  {
    week: 36,
    trimester: 3,
    babySize: "Romaine lettuce",
    babySizeCm: 47.4,
    babyWeightG: 2620.0,
    babyDevelopment: [
      "Baby sheds most of the lanugo and vernix into the amniotic fluid",
      "Baby swallows the shed lanugo and vernix — this becomes meconium (first stool)",
      "The circulatory and immune systems are essentially ready for birth",
      "Baby is gaining about an ounce per day",
    ],
    motherChanges: [
      "Prenatal visits are now weekly",
      "'Lightning crotch' — sharp, shooting pain in the pelvis as baby drops",
      "Nesting instinct may kick in — a burst of energy to prepare the home",
    ],
    tips: [
      "Attend weekly prenatal appointments — your provider will check baby's position",
      "Wash baby clothes, blankets, and crib sheets in gentle detergent",
      "Know your route to the hospital and have a backup plan",
    ],
  },
  {
    week: 37,
    trimester: 3,
    babySize: "Swiss chard bunch",
    babySizeCm: 48.6,
    babyWeightG: 2860.0,
    babyDevelopment: [
      "Baby is considered 'early term' — lungs and brain are still maturing",
      "Baby practices breathing, sucking, gripping, and blinking",
      "Fat continues to accumulate — baby looks plumper and less wrinkled",
      "Head circumference and abdomen circumference are about the same",
    ],
    motherChanges: [
      "Cervical checks may begin — your provider looks for dilation and effacement",
      "Mucus plug may begin to loosen (bloody show)",
      "Increased pelvic pressure and discomfort as baby drops lower",
    ],
    tips: [
      "Rest as much as possible — labor requires significant energy",
      "Review your birth plan one final time with your provider",
      "Stock up on postpartum essentials: pads, comfortable underwear, nursing supplies",
    ],
  },
  {
    week: 38,
    trimester: 3,
    babySize: "Winter melon",
    babySizeCm: 49.8,
    babyWeightG: 3080.0,
    babyDevelopment: [
      "All organs are fully mature and functional",
      "The brain and nervous system continue refining connections",
      "Baby produces surfactant to keep lung air sacs open after birth",
      "Toenails have reached the tips of the toes",
    ],
    motherChanges: [
      "Cervix may begin to soften, thin (efface), and dilate",
      "Increased vaginal discharge or mucus plug loss",
      "Braxton Hicks contractions may become stronger and more frequent",
    ],
    tips: [
      "Stay close to home and keep your phone charged",
      "Continue kick counts — any decrease warrants a call to your provider",
      "Get as much sleep as you can — you'll need the reserves",
    ],
  },
  {
    week: 39,
    trimester: 3,
    babySize: "Watermelon",
    babySizeCm: 50.7,
    babyWeightG: 3290.0,
    babyDevelopment: [
      "Baby is considered 'full term' and ready for life outside the womb",
      "The chest is more prominent as breast tissue develops (in both sexes)",
      "Baby adds a layer of fat to help regulate temperature after birth",
      "Placental antibodies flood baby's blood, providing immunity for the first months",
    ],
    motherChanges: [
      "You may lose the mucus plug in one piece or gradually",
      "Contractions may become more regular — is it time?",
      "Extreme fatigue mixed with bursts of nesting energy",
    ],
    tips: [
      "Know the 5-1-1 rule: go to the hospital when contractions are 5 minutes apart, lasting 1 minute, for at least 1 hour",
      "Stay hydrated and eat lightly — you'll need energy for labor",
      "Try to stay calm and trust your body — you're ready for this",
    ],
    warningSign:
      "Go to the hospital immediately if: water breaks, you have heavy vaginal bleeding, you feel reduced fetal movement, or you have a severe headache with vision changes.",
  },
  {
    week: 40,
    trimester: 3,
    babySize: "Jackfruit",
    babySizeCm: 51.2,
    babyWeightG: 3460.0,
    babyDevelopment: [
      "Baby is fully developed and ready to meet you!",
      "The skull bones are not yet fused — they overlap during birth to fit through the birth canal",
      "Baby has about 300 bones (adults have 206 — many fuse together as baby grows)",
      "Lungs will produce a surge of surfactant as labor begins, preparing for the first breath",
    ],
    motherChanges: [
      "Your due date is here! Only 5% of babies arrive on their due date",
      "Your provider will discuss plans if you go past your due date",
      "Cervix dilation, effacement, and baby's position (station) are closely monitored",
    ],
    tips: [
      "Try natural labor-encouraging methods: walking, nipple stimulation, bouncing on a birth ball",
      "Stay in touch with your provider about post-date monitoring plans",
      "Trust the process — most babies arrive within 2 weeks of the due date",
    ],
    warningSign:
      "If you go past 41 weeks, your provider will discuss induction. After 42 weeks, risks of placental insufficiency and other complications increase. Follow your provider's recommendations.",
  },
];

/** Helper to get trimester label */
export function getTrimesterLabel(trimester: 1 | 2 | 3): string {
  switch (trimester) {
    case 1:
      return "First Trimester";
    case 2:
      return "Second Trimester";
    case 3:
      return "Third Trimester";
  }
}

/** Helper to get trimester color class */
export function getTrimesterColor(trimester: 1 | 2 | 3): string {
  switch (trimester) {
    case 1:
      return "bg-green-500";
    case 2:
      return "bg-blue-500";
    case 3:
      return "bg-purple-500";
  }
}

/** Helper to get trimester text color class */
export function getTrimesterTextColor(trimester: 1 | 2 | 3): string {
  switch (trimester) {
    case 1:
      return "text-green-600 dark:text-green-400";
    case 2:
      return "text-blue-600 dark:text-blue-400";
    case 3:
      return "text-purple-600 dark:text-purple-400";
  }
}

/** Calculate current pregnancy week from due date */
export function getCurrentWeekFromDueDate(dueDate: Date): number {
  const now = new Date();
  const diffMs = dueDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const currentWeek = 40 - Math.floor(diffDays / 7);
  return Math.max(4, Math.min(40, currentWeek));
}

/** Calculate current pregnancy week from LMP date */
export function getCurrentWeekFromLMP(lmpDate: Date): number {
  const now = new Date();
  const diffMs = now.getTime() - lmpDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const currentWeek = Math.floor(diffDays / 7);
  return Math.max(4, Math.min(40, currentWeek));
}

/** Calculate due date from LMP */
export function getDueDateFromLMP(lmpDate: Date): Date {
  const due = new Date(lmpDate);
  due.setDate(due.getDate() + 280);
  return due;
}

/** Calculate days remaining until due date */
export function getDaysRemaining(dueDate: Date): number {
  const now = new Date();
  const diffMs = dueDate.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

/** Format weight in g or kg */
export function formatWeight(grams: number): string {
  if (grams >= 1000) {
    return `${(grams / 1000).toFixed(1)} kg (${(grams / 453.592).toFixed(1)} lbs)`;
  }
  return `${grams} g (${(grams / 28.3495).toFixed(1)} oz)`;
}

/** Format size in cm */
export function formatSize(cm: number): string {
  if (cm < 1) {
    return `${(cm * 10).toFixed(0)} mm`;
  }
  return `${cm.toFixed(1)} cm (${(cm / 2.54).toFixed(1)} in)`;
}

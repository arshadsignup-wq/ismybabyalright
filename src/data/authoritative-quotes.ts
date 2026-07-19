interface AuthoritativeQuoteData {
  quote: string;
  source: string;
  sourceUrl?: string;
  organization: string;
  topics: string[];
}

const quotes: AuthoritativeQuoteData[] = [
  // FEVER
  {
    quote: "Fever itself is not an illness — rather, it is a sign or symptom that the body is fighting an infection. Fever stimulates certain defenses, such as the white blood cells, which attack and destroy invading bacteria.",
    source: "Fever and Your Child",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Child.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["fever", "persistent-fever-baby", "fever-in-babies", "medical"],
  },
  {
    quote: "If your baby is younger than 3 months old and has a rectal temperature of 100.4\u00B0F (38\u00B0C) or higher, call your baby's health care provider right away.",
    source: "Fever in a Newborn",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Child.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["fever", "newborn-fever", "persistent-fever-baby"],
  },
  // SLEEP
  {
    quote: "To reduce the risk of sleep-related infant deaths, the AAP recommends that infants sleep on their backs, on a firm, flat surface, without any soft bedding.",
    source: "Safe Sleep Recommendations",
    sourceUrl: "https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["sleep", "safe-sleep", "sids", "crib-vs-bassinet", "sleep-safety"],
  },
  {
    quote: "Room-sharing without bed-sharing is recommended for at least the first 6 months.",
    source: "SIDS and Other Sleep-Related Infant Deaths",
    sourceUrl: "https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["sleep", "room-sharing", "sids", "safe-sleep"],
  },
  // BREASTFEEDING
  {
    quote: "The AAP recommends exclusive breastfeeding for approximately 6 months after birth. Furthermore, the AAP supports continued breastfeeding, along with appropriate complementary foods introduced at about 6 months, for 2 years or beyond.",
    source: "Breastfeeding and the Use of Human Milk",
    sourceUrl: "https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["breastfeeding", "breastfeeding-vs-formula", "feeding", "breast-milk"],
  },
  {
    quote: "WHO recommends exclusive breastfeeding for the first 6 months of life, followed by continued breastfeeding with appropriate complementary foods for up to 2 years and beyond.",
    source: "Infant and Young Child Feeding",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding",
    organization: "World Health Organization (WHO)",
    topics: ["breastfeeding", "breastfeeding-vs-formula", "feeding", "weaning"],
  },
  // VACCINES
  {
    quote: "Vaccines are among the most successful and cost-effective public health tools available for preventing disease and death.",
    source: "Immunization Schedule",
    sourceUrl: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["vaccines", "immunization", "vaccination"],
  },
  {
    quote: "Children should receive all recommended doses of vaccines on time for the best protection.",
    source: "Childhood Immunization Schedule",
    sourceUrl: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["vaccines", "immunization", "vaccine-schedule"],
  },
  // SCREEN TIME
  {
    quote: "For children younger than 18 months, avoid use of screen media other than video chatting.",
    source: "Media and Young Minds",
    sourceUrl: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["screen-time", "screen-time-babies", "media-use"],
  },
  {
    quote: "For children 2 to 5 years, limit screen use to 1 hour per day of high-quality programs. Parents should co-view media with children to help them understand what they are seeing.",
    source: "Media and Young Minds",
    sourceUrl: "https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["screen-time", "toddler-screen-time", "media-use"],
  },
  // CAR SEATS
  {
    quote: "The AAP recommends that all infants and toddlers ride in a rear-facing car safety seat as long as possible, until they reach the maximum weight or height allowed by the seat's manufacturer.",
    source: "Car Seats: Information for Families",
    sourceUrl: "https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["car-seat", "car-seat-safety", "rear-facing", "rear-facing-vs-forward-facing"],
  },
  // MILESTONES
  {
    quote: "Skills such as taking a first step, smiling for the first time, and waving 'bye-bye' are called developmental milestones. Children reach milestones in how they play, learn, speak, act, and move.",
    source: "CDC's Developmental Milestones",
    sourceUrl: "https://www.cdc.gov/ncbddd/actearly/milestones/index.html",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["milestones", "development", "developmental-milestones"],
  },
  {
    quote: "If you are concerned about your child's development, don't wait. Acting early can make a real difference.",
    source: "Learn the Signs. Act Early.",
    sourceUrl: "https://www.cdc.gov/ncbddd/actearly/index.html",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["milestones", "developmental-delay", "early-intervention", "development"],
  },
  // FEEDING / SOLIDS
  {
    quote: "The AAP recommends introducing allergenic foods along with other complementary foods to infants at around 6 months. Delaying the introduction of allergenic foods does not prevent food allergy.",
    source: "Starting Solid Foods",
    sourceUrl: "https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["feeding", "solids", "allergens", "food-allergens", "food-allergy", "purees-vs-baby-led-weaning"],
  },
  {
    quote: "Whole cow's milk can be introduced at 12 months of age as part of a balanced, diversified diet.",
    source: "Why Formula Instead of Cow's Milk?",
    sourceUrl: "https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Why-Formula-Instead-of-Cows-Milk.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["cow-milk", "cow-milk-vs-formula", "feeding", "toddler-nutrition"],
  },
  // SKIN
  {
    quote: "Eczema is very common in babies and children. About 1 in 10 children will develop eczema, typically starting in the first few months of life.",
    source: "Eczema in Babies and Children",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["eczema", "eczema-vs-baby-acne", "skin", "baby-skin", "atopic-dermatitis"],
  },
  {
    quote: "Newborn acne usually clears up on its own within a few weeks to months. It does not need treatment.",
    source: "Baby Acne",
    sourceUrl: "https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["baby-acne", "eczema-vs-baby-acne", "skin", "newborn-skin"],
  },
  // TUMMY TIME
  {
    quote: "Supervised tummy time is recommended daily from the time the baby comes home from the hospital to help prevent flat head syndrome and to strengthen neck and shoulder muscles.",
    source: "Back to Sleep, Tummy to Play",
    sourceUrl: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["tummy-time", "flat-head", "physical"],
  },
  // POSTPARTUM
  {
    quote: "About 1 in 8 women experience symptoms of postpartum depression. If you have symptoms of depression that last longer than 2 weeks, tell your health care provider.",
    source: "Depression During and After Pregnancy",
    sourceUrl: "https://www.cdc.gov/reproductivehealth/depression/index.htm",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["postpartum", "postpartum-depression", "maternal", "mental-health"],
  },
  // PREGNANCY
  {
    quote: "ACOG recommends that pregnant women get at least 150 minutes of moderate-intensity aerobic activity per week during pregnancy and the postpartum period.",
    source: "Physical Activity and Exercise During Pregnancy and the Postpartum Period",
    sourceUrl: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period",
    organization: "American College of Obstetricians and Gynecologists (ACOG)",
    topics: ["pregnancy", "exercise-during-pregnancy", "prenatal"],
  },
  {
    quote: "Taking 400 micrograms of folic acid daily before and during early pregnancy can help prevent birth defects of the baby's brain and spine.",
    source: "Folic Acid",
    sourceUrl: "https://www.cdc.gov/ncbddd/folicacid/about.html",
    organization: "Centers for Disease Control and Prevention (CDC)",
    topics: ["pregnancy", "prenatal-vitamins", "folic-acid"],
  },
  // CHOKING / SAFETY
  {
    quote: "Among children, those under age 5 are at greatest risk for choking injury and death. Foods, coins, and toys are the items most commonly aspirated by children.",
    source: "Prevention of Choking Among Children",
    sourceUrl: "https://publications.aap.org/pediatrics/article/125/3/601/72694/Prevention-of-Choking-Among-Children",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["choking", "safety", "food-safety", "baby-proofing"],
  },
  // TEETHING
  {
    quote: "Teething does not cause high fevers. If your child has a fever higher than 100.4\u00B0F, look for other causes of the illness.",
    source: "Teething: 4 to 7 Months",
    sourceUrl: "https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["teething", "teething-fever", "baby-teething-fever-myth"],
  },
  // MEDICINE / DOSING
  {
    quote: "Do not give aspirin to anyone younger than 19 years of age. It has been linked to Reye syndrome, a rare but potentially life-threatening condition.",
    source: "Medication Safety Tips",
    sourceUrl: "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Medication-Safety-Tips.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["medicine", "medicine-dosage", "aspirin", "reye-syndrome", "tylenol-vs-motrin"],
  },
  {
    quote: "Ibuprofen is not recommended for infants under 6 months of age. For babies 3-6 months old, acetaminophen is the preferred pain reliever and fever reducer.",
    source: "Ibuprofen Dosage Table for Fever and Pain",
    sourceUrl: "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Ibuprofen-for-Fever-and-Pain.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["medicine-dosage", "ibuprofen", "motrin", "tylenol-vs-motrin", "fever"],
  },
  // GROWTH
  {
    quote: "Growth charts are used to compare your child's growth with that of other children of the same age and sex. They can help determine whether your child is growing as expected.",
    source: "WHO Growth Standards",
    sourceUrl: "https://www.who.int/tools/child-growth-standards",
    organization: "World Health Organization (WHO)",
    topics: ["growth", "growth-chart", "percentile", "weight-for-length"],
  },
  // VOMITING / GI
  {
    quote: "The biggest concern with vomiting is dehydration. Young children can become dehydrated quickly, so it's important to replace fluids. Offer small amounts of an oral rehydration solution frequently.",
    source: "Vomiting in Children",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["vomiting", "dehydration", "stomach-bug", "digestive"],
  },
  // RASH
  {
    quote: "Many rashes in infants and young children are not serious and can be managed at home. However, a rash that spreads quickly, is accompanied by fever, or appears as purple or blood-colored spots needs immediate medical attention.",
    source: "Rashes in Children",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["rash", "skin-rash", "baby-rash", "skin"],
  },
  // BREATHING
  {
    quote: "If your child is breathing very fast, has blue lips or fingernails, or is working hard to breathe \u2014 with the skin pulling in around the ribs or neck \u2014 seek emergency care immediately.",
    source: "Breathing Problems",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/default.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["breathing", "breathing-difficulty", "respiratory", "croup", "wheezing"],
  },
  // DIARRHEA
  {
    quote: "If your child has diarrhea, it's important to give enough fluids to prevent dehydration. Continue to feed your child a normal diet, including formula or breast milk.",
    source: "Diarrhea in Children",
    sourceUrl: "https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx",
    organization: "American Academy of Pediatrics (AAP)",
    topics: ["diarrhea", "dehydration", "stomach-bug", "digestive"],
  },
];

export function getQuotesForTopic(slug: string): AuthoritativeQuoteData[] {
  return quotes.filter((q) => q.topics.includes(slug));
}

export type { AuthoritativeQuoteData };

export interface SkinCondition {
  id: string;
  name: string;
  commonAges: string;
  description: string;
  appearance: string;
  causes: string[];
  treatments: string[];
  whenToWorry: string[];
  relatedConcernSlug?: string;
}

export const skinConditions: SkinCondition[] = [
  {
    id: "cradle-cap",
    name: "Cradle Cap (Seborrheic Dermatitis)",
    commonAges: "2 weeks to 12 months (most common 2-6 months)",
    description:
      "Cradle cap is a very common, harmless skin condition that causes thick, yellowish, scaly or crusty patches on a baby's scalp. It is not caused by poor hygiene or allergies, and it does not bother your baby  -  it looks worse than it is. Most cases resolve on their own by 6-12 months of age.",
    appearance:
      "Thick, yellowish or brownish greasy-looking scales or crusts on the scalp. May also appear behind the ears, on the eyebrows, or around the nose. The skin underneath may look slightly red. Unlike eczema, cradle cap is not usually itchy.",
    causes: [
      "Overactive sebaceous (oil) glands, likely stimulated by maternal hormones still in the baby's system",
      "A type of yeast (Malassezia) that lives naturally on the skin may play a role",
      "Not caused by allergies, poor hygiene, or bacterial infection",
    ],
    treatments: [
      "Gently massage baby oil, coconut oil, or mineral oil into the scalp, let sit for 15-20 minutes, then brush with a soft baby brush to loosen scales",
      "Wash with a gentle baby shampoo and use a fine-tooth comb or soft brush after bathing",
      "Do not pick or scratch at the scales  -  this can cause irritation or infection",
      "For stubborn cases, your pediatrician may recommend a medicated shampoo (such as ketoconazole) or a low-potency hydrocortisone cream",
      "Improvement is usually seen within a few weeks of regular gentle treatment",
    ],
    whenToWorry: [
      "Scales spread to the face, neck, or diaper area (may indicate seborrheic dermatitis beyond the scalp)",
      "Skin looks red, swollen, or weepy underneath the scales (possible infection)",
      "Baby seems itchy or uncomfortable  -  cradle cap should not cause distress",
      "Condition persists beyond 12 months or worsens despite treatment",
    ],
    relatedConcernSlug: "cradle-cap",
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    commonAges: "2-6 months onward (can persist into childhood)",
    description:
      "Eczema is a chronic inflammatory skin condition affecting up to 20% of infants. It causes dry, itchy, red patches that may come and go in flares. While there is no cure, it can be effectively managed. Babies with eczema are at higher risk for food allergies and asthma (the 'atopic triad'), so early management and discussion with your pediatrician is important.",
    appearance:
      "Red, dry, rough, or scaly patches of skin. In infants, it commonly appears on the cheeks, forehead, and outer surfaces of the arms and legs. In older babies and toddlers, it often moves to the creases of elbows and knees. During flares, skin may weep, crust, or become thickened from scratching. On darker skin tones, eczema may appear as darker brown, purple, or grayish patches rather than red.",
    causes: [
      "Genetic predisposition  -  common in families with a history of eczema, asthma, or hay fever",
      "A weakened skin barrier that allows moisture to escape and irritants to enter",
      "Environmental triggers: dry air, harsh soaps, fragrances, wool, overheating, pet dander",
      "Food triggers in some babies (most commonly cow's milk, eggs, peanuts  -  but food is NOT a trigger for all eczema)",
      "Stress, illness, or teething can trigger flares in some babies",
    ],
    treatments: [
      "Moisturize liberally and frequently  -  apply a thick, fragrance-free cream or ointment (not lotion) at least twice daily and immediately after baths",
      "Use lukewarm (not hot) water for baths, keep baths short (5-10 minutes), and use a gentle, fragrance-free cleanser",
      "'Soak and seal': bathe, pat skin damp (do not rub dry), and immediately apply moisturizer to lock in hydration",
      "Dress baby in soft, breathable fabrics (cotton); avoid wool and synthetic materials against the skin",
      "For flares, your pediatrician may prescribe a low-potency topical corticosteroid  -  use as directed; these are safe when used appropriately",
      "Keep baby's nails short and consider cotton mittens at night to prevent scratching",
    ],
    whenToWorry: [
      "Eczema becomes weepy, oozy, or develops yellow crusting (signs of secondary bacterial infection)",
      "Baby has fever along with a worsening eczema flare",
      "Tiny, grouped blisters appear on eczema patches (possible eczema herpeticum  -  seek urgent care)",
      "Eczema is not responding to treatment or significantly interferes with sleep and daily life",
      "You suspect a specific food is triggering flares (do not eliminate foods without pediatrician guidance)",
    ],
    relatedConcernSlug: "eczema",
  },
  {
    id: "baby-acne",
    name: "Baby Acne (Neonatal Acne)",
    commonAges: "2-4 weeks (may last until 3-4 months)",
    description:
      "Baby acne appears as small red or white bumps on a newborn's face, most commonly on the cheeks, nose, and forehead. It affects roughly 20% of newborns. Despite its appearance, baby acne is harmless, does not bother the baby, and resolves on its own without treatment. It does not cause scarring and is not related to acne in adolescence.",
    appearance:
      "Small red bumps or pimples, sometimes with tiny white centers, primarily on the cheeks, nose, chin, and forehead. May temporarily worsen when the baby is warm, fussy, or after spit-up contact. Unlike eczema, baby acne does not cause dry or scaly skin and is not itchy.",
    causes: [
      "Maternal hormones still circulating in the baby's system after birth",
      "Yeast (Malassezia) that naturally colonizes the skin may play a role",
      "Not caused by poor hygiene, formula, breastfeeding, or anything the parent is eating",
    ],
    treatments: [
      "No treatment is usually needed  -  baby acne resolves on its own within a few weeks to months",
      "Gently wash your baby's face daily with warm water and a mild baby cleanser",
      "Do not use adult acne products, lotions, or oily creams on baby acne",
      "Do not squeeze, pick, or scrub the bumps  -  this can irritate the skin or cause infection",
      "If acne is severe or persists past 4 months, your pediatrician may prescribe a gentle medicated cream",
    ],
    whenToWorry: [
      "Acne appears after 6 weeks of age and is getting worse (this may be infantile acne, which can need treatment)",
      "Bumps are filled with pus, look infected, or are spreading rapidly",
      "Acne is accompanied by other symptoms like poor feeding or unusual irritability",
      "Skin bumps persist or worsen beyond 6 months of age",
    ],
    relatedConcernSlug: "baby-acne",
  },
  {
    id: "diaper-rash",
    name: "Diaper Rash (Irritant Contact Dermatitis)",
    commonAges: "4-15 months (peak 9-12 months)",
    description:
      "Diaper rash is one of the most common skin conditions in infants, affecting most babies at some point. It presents as red, irritated skin in the diaper area. Most cases are caused by prolonged contact with wet or soiled diapers and respond well to simple home care. However, persistent or severe diaper rash may have an underlying cause like yeast infection or allergy.",
    appearance:
      "Red, inflamed skin in areas covered by the diaper  -  buttocks, thighs, and genitals. Mild cases show slight redness; moderate cases have raised red patches with small bumps. In severe cases, the skin may be bright red, raw, or have open sores. Skin folds are typically spared in simple irritant diaper rash (unlike yeast diaper rash, which affects the folds).",
    causes: [
      "Prolonged contact with urine or stool (enzymes in stool are particularly irritating)",
      "Friction from the diaper rubbing against skin",
      "Introduction of new foods changing stool composition (common when starting solids)",
      "Antibiotic use (disrupts normal skin flora, may lead to secondary yeast infection)",
      "Sensitivity to diaper brand, wipes, or creams",
      "Diarrhea  -  frequent loose stools are especially irritating to skin",
    ],
    treatments: [
      "Change diapers frequently  -  every 1-2 hours and immediately after a bowel movement",
      "Allow air-drying time: let your baby go diaper-free on a waterproof pad for short periods throughout the day",
      "Apply a thick barrier cream with zinc oxide (such as Desitin or Boudreaux's Butt Paste) at every diaper change",
      "Use warm water and a soft cloth instead of wipes during a flare, or use fragrance-free wipes",
      "Gently pat (do not rub) the area dry before applying cream",
      "If the rash persists beyond 3 days despite treatment, see your pediatrician  -  it may be a yeast infection requiring antifungal cream",
    ],
    whenToWorry: [
      "Rash does not improve after 3 days of diligent home treatment",
      "Rash has bright red satellite dots around the edges (classic sign of yeast infection)",
      "Rash is in the skin folds and creases (suggests yeast rather than simple irritant dermatitis)",
      "Baby has fever or the rash has blisters, pus, or open sores",
      "Rash spreads beyond the diaper area",
    ],
    relatedConcernSlug: "diaper-rash",
  },
  {
    id: "heat-rash",
    name: "Heat Rash (Miliaria)",
    commonAges: "Any age, most common in first year",
    description:
      "Heat rash occurs when sweat ducts become blocked and sweat gets trapped under the skin. It is very common in babies because their sweat glands are not fully developed. Heat rash is harmless and resolves quickly once the baby is cooled down. It is most common in hot, humid weather or when babies are overdressed.",
    appearance:
      "Tiny, clear or red bumps or blisters, often in clusters. Commonly appears on areas prone to sweating: neck, chest, back, armpits, elbow creases, and diaper area. Miliaria crystallina (mildest form) shows clear, tiny blisters. Miliaria rubra (prickly heat) shows small red bumps that may be slightly itchy. The rash typically appears in areas where clothing is tight or skin folds trap heat.",
    causes: [
      "Overdressing or overbundling, especially in warm weather",
      "Hot, humid environments",
      "Immature sweat glands that are easily blocked",
      "Tight or non-breathable clothing",
      "Fever (increased body temperature can trigger heat rash even in cool environments)",
    ],
    treatments: [
      "Cool the baby down  -  move to a cooler environment or use a fan for air circulation",
      "Remove excess clothing layers; dress in loose, breathable cotton",
      "A lukewarm bath can help cool the skin and unclog pores",
      "Pat skin dry gently  -  do not rub",
      "Avoid applying lotions, creams, or powders to the affected area (these can further block pores)",
      "Calamine lotion can be used for itchy heat rash, but check with your pediatrician first",
    ],
    whenToWorry: [
      "Rash does not improve within 2-3 days of cooling measures",
      "Baby develops a fever along with the rash",
      "Bumps become filled with pus or look infected (signs of secondary bacterial infection)",
      "Baby seems excessively uncomfortable, lethargic, or is not feeding well",
    ],
    relatedConcernSlug: "heat-rash",
  },
  {
    id: "hives",
    name: "Hives (Urticaria)",
    commonAges: "Any age (more common after 6 months when new foods and allergens are introduced)",
    description:
      "Hives are raised, itchy welts on the skin that can appear suddenly and may change shape, size, and location within hours. In babies, hives are most commonly triggered by viral infections, but can also result from food allergies, medication reactions, or insect stings. Most cases are mild and resolve on their own or with antihistamines, but hives can occasionally indicate a serious allergic reaction requiring urgent care.",
    appearance:
      "Raised, red or pink welts (wheals) of varying sizes, from small dots to large patches. They have well-defined edges and may have a pale center. Hives are characteristically migratory  -  they may disappear from one area and reappear in another within hours. A key feature is the 'blanch test': pressing on a hive causes it to turn white briefly. On darker skin tones, hives may appear skin-colored or slightly darker rather than red.",
    causes: [
      "Viral infections (the most common cause in young children  -  even a common cold can trigger hives)",
      "Food allergies (most commonly cow's milk, eggs, peanuts, tree nuts, soy, wheat, fish, shellfish)",
      "Medication reactions (antibiotics such as amoxicillin are a common trigger)",
      "Insect bites or stings",
      "Contact with irritants (detergent, pet dander, pollen)",
      "Temperature changes (heat or cold exposure)",
    ],
    treatments: [
      "Remove the trigger if identifiable (discontinue a new food, change detergent, etc.)",
      "An age-appropriate antihistamine (like cetirizine or diphenhydramine) can be given  -  always confirm dosing with your pediatrician",
      "Apply cool, damp cloths to itchy areas for relief",
      "Dress baby in loose, soft clothing to minimize irritation",
      "A lukewarm oatmeal bath can soothe itchy skin",
      "Most cases of hives resolve within 24-48 hours",
    ],
    whenToWorry: [
      "SEEK IMMEDIATE EMERGENCY CARE if hives are accompanied by difficulty breathing, swelling of the lips/tongue/throat, wheezing, vomiting, or limpness (signs of anaphylaxis)",
      "Hives occur repeatedly after eating a specific food (your pediatrician should evaluate for food allergy)",
      "Hives last more than 6 weeks (chronic urticaria  -  needs medical evaluation)",
      "Baby has hives with fever, joint swelling, or appears unwell",
    ],
    relatedConcernSlug: "hives",
  },
  {
    id: "dry-peeling-skin",
    name: "Dry or Peeling Skin",
    commonAges: "Newborn period (first 2-4 weeks); also common in dry/cold weather at any age",
    description:
      "Peeling, flaking skin in newborns is extremely common and completely normal, especially in babies born past their due date. In the womb, your baby was protected by vernix caseosa (a waxy coating), and once exposed to air, the outer layer of skin naturally dries and peels. This process requires no treatment and resolves on its own. Dry skin in older babies is also common, particularly during winter months.",
    appearance:
      "In newborns: peeling, flaking skin that may look dry or cracked, most noticeable on the hands, feet, and ankles. The skin underneath is soft and healthy. In post-date babies, peeling may be more extensive. In older babies: dry, rough patches that may appear anywhere on the body, often worse on cheeks, arms, and legs during cold or dry weather.",
    causes: [
      "Normal transition from the fluid environment of the womb to air (in newborns)",
      "Post-date birth (babies born after 40 weeks often have more pronounced peeling)",
      "Low humidity and cold weather (in older babies)",
      "Overbathing or using harsh soaps that strip natural skin oils",
      "Underlying eczema (if dry skin is persistent, itchy, and in characteristic locations)",
    ],
    treatments: [
      "For newborn peeling: no treatment needed  -  it will resolve naturally within 2-3 weeks",
      "Do not pull or peel off flaking skin  -  let it come off on its own",
      "For older babies with dry skin: apply a thick, fragrance-free moisturizer (cream or ointment, not lotion) after baths",
      "Limit baths to every other day or every 2-3 days; use lukewarm water and gentle, fragrance-free cleansers",
      "Use a humidifier in your baby's room during dry winter months",
      "Avoid products with fragrances, dyes, or alcohol, which can worsen dryness",
    ],
    whenToWorry: [
      "Dry skin is persistently red, itchy, or inflamed (may be eczema  -  see your pediatrician)",
      "Skin cracks are deep or bleeding",
      "Peeling is accompanied by redness, swelling, or fever",
      "Newborn skin peeling has not resolved by 4-6 weeks of age",
    ],
    relatedConcernSlug: "dry-skin",
  },
  {
    id: "birthmarks",
    name: "Birthmarks",
    commonAges: "Present at birth or appearing within the first few weeks of life",
    description:
      "Birthmarks are colored spots or areas on the skin that are present at birth or develop shortly after. They are very common  -  most babies have at least one. The vast majority of birthmarks are harmless and many fade on their own over time. There are two main types: vascular (caused by blood vessels) and pigmented (caused by clusters of pigment cells).",
    appearance:
      "Salmon patches (stork bites/angel kisses): flat, pink or red patches on the eyelids, forehead, or back of the neck  -  present in up to 80% of newborns. Mongolian spots: flat, blue-gray patches on the lower back and buttocks, most common in babies with darker skin tones. Hemangiomas (strawberry marks): bright red, raised bumps that appear in the first few weeks, grow for several months, then slowly shrink over years. Port-wine stains: flat, pink, red, or purple patches that do not fade and grow proportionally with the child. Cafe-au-lait spots: flat, light brown patches of various sizes.",
    causes: [
      "Vascular birthmarks (salmon patches, hemangiomas, port-wine stains) are caused by extra blood vessels clustered near the skin surface",
      "Pigmented birthmarks (Mongolian spots, cafe-au-lait spots, moles) are caused by clusters of pigment-producing cells (melanocytes)",
      "Birthmarks are not caused by anything the parent did or did not do during pregnancy",
      "Most birthmarks occur randomly and are not inherited",
    ],
    treatments: [
      "Salmon patches: no treatment needed  -  most fade by age 1-2 (neck patches may persist)",
      "Mongolian spots: no treatment needed  -  most fade by school age",
      "Hemangiomas: most resolve on their own by age 5-10; monitoring is usually sufficient. Hemangiomas near the eyes, nose, mouth, or diaper area may need treatment with propranolol (a beta-blocker)",
      "Port-wine stains: do not fade and may darken over time. Pulsed dye laser treatment may be offered for cosmetic reasons",
      "Cafe-au-lait spots: no treatment needed, but report them to your pediatrician",
    ],
    whenToWorry: [
      "A hemangioma is growing rapidly, is near the eye/nose/mouth/ear, or is ulcerating (open sore)",
      "Your baby has 6 or more cafe-au-lait spots (may be associated with neurofibromatosis  -  your pediatrician should evaluate)",
      "A port-wine stain is on the forehead or near the eye (may be associated with Sturge-Weber syndrome)",
      "Any birthmark changes color, shape, or texture unexpectedly, or begins to bleed",
      "A large or unusual mole is present at birth (congenital melanocytic nevus)",
    ],
    relatedConcernSlug: "birthmarks",
  },
  {
    id: "ringworm",
    name: "Ringworm (Tinea Corporis)",
    commonAges: "More common in toddlers (12 months and older), but can occur at any age",
    description:
      "Despite its name, ringworm is not caused by a worm  -  it is a fungal infection of the skin. It is caused by dermatophytes, fungi that live on the dead outer layer of skin. Ringworm is mildly contagious and can be spread through direct skin contact, contaminated objects (towels, clothing), or contact with pets (especially cats and dogs). It is easily treated with antifungal medications.",
    appearance:
      "A round or oval, scaly patch with a raised, red, ring-shaped border and clearer skin in the center  -  giving it the characteristic 'ring' appearance. The border may be bumpy or blistered. The patch slowly expands outward while the center clears. On the scalp (tinea capitis), it may cause scaly patches with hair loss. It can appear anywhere on the body and may be itchy.",
    causes: [
      "Dermatophyte fungi (Trichophyton, Microsporum, Epidermophyton species)",
      "Direct contact with an infected person, animal (especially cats, dogs, and guinea pigs), or contaminated object",
      "Warm, moist environments promote fungal growth",
      "Sharing towels, clothing, or bedding with an infected person",
    ],
    treatments: [
      "Over-the-counter antifungal cream (clotrimazole, miconazole, or terbinafine) applied twice daily for 2-4 weeks",
      "Continue treatment for at least 1 week after the rash has visually cleared to prevent recurrence",
      "Scalp ringworm requires prescription oral antifungal medication (topical treatment alone is not effective for scalp involvement)",
      "Wash towels, clothing, and bedding in hot water; do not share personal items until the infection has cleared",
      "If you suspect a pet is the source, have the pet evaluated by a veterinarian",
    ],
    whenToWorry: [
      "Rash does not improve after 2 weeks of antifungal treatment",
      "Ringworm is on the scalp (requires prescription oral medication, not just topical cream)",
      "Rash is spreading rapidly or new rings are appearing despite treatment",
      "The area becomes swollen, warm, painful, or oozes pus (possible secondary bacterial infection)",
      "Baby develops a fever or seems systemically unwell",
    ],
    relatedConcernSlug: "fungal-rash",
  },
  {
    id: "hand-foot-mouth",
    name: "Hand, Foot, and Mouth Disease (HFMD)",
    commonAges: "6 months to 5 years (peak in toddlers)",
    description:
      "Hand, foot, and mouth disease is a common viral illness caused by coxsackievirus (most often A16) or enterovirus 71. It is highly contagious and spreads through saliva, nasal secretions, blister fluid, and stool. Outbreaks are most common in summer and early fall. While uncomfortable, HFMD is almost always mild and resolves on its own within 7-10 days. There is no vaccine or specific antiviral treatment.",
    appearance:
      "Starts with a fever, reduced appetite, sore throat, and general malaise for 1-2 days. Then small, red spots develop that become blisters or ulcers: in the mouth (tongue, gums, inside cheeks  -  painful), on the palms of the hands and soles of the feet (small, flat or raised red spots or blisters), and sometimes on the buttocks, knees, and elbows. Mouth sores can be very painful and may cause drooling and reluctance to eat or drink.",
    causes: [
      "Coxsackievirus A16 (most common cause)",
      "Enterovirus 71 (less common but can be more severe)",
      "Spread through direct contact with nasal or throat secretions, saliva, fluid from blisters, or stool",
      "Incubation period is 3-6 days",
      "Most contagious during the first week of illness, but virus can shed in stool for weeks",
    ],
    treatments: [
      "There is no specific treatment  -  HFMD must run its course (typically 7-10 days)",
      "Manage pain and fever with age-appropriate doses of acetaminophen (Tylenol) or ibuprofen (Motrin/Advil, for babies 6 months and older)",
      "Encourage cold fluids  -  cold milk, ice pops, smoothies, and cold water can soothe mouth sores",
      "Avoid acidic, salty, or spicy foods that will sting mouth sores",
      "Watch for dehydration: ensure adequate wet diapers (at least 4-6 per day); offer small, frequent sips",
      "Fingernail and toenail peeling may occur 3-6 weeks after illness  -  this is normal and harmless",
    ],
    whenToWorry: [
      "Baby is not drinking enough fluids  -  signs of dehydration include fewer than 4 wet diapers in 24 hours, no tears when crying, dry mouth, sunken fontanelle",
      "Fever lasts more than 3 days or is higher than 102.2F (39C) in a baby under 3 months",
      "Baby is extremely lethargic, difficult to arouse, or inconsolable",
      "Symptoms worsen after the first few days instead of improving",
      "Baby develops a stiff neck, severe headache, or unusual irritability (rare but possible signs of viral meningitis)",
    ],
    relatedConcernSlug: "hand-foot-mouth",
  },
];

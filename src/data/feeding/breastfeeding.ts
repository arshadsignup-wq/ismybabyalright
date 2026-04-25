/* ==========================================================================
   Breastfeeding Topics  -  Evidence-Based Guidance
   Sources: AAP, WHO, La Leche League International, Academy of Breastfeeding
   Medicine (ABM), CDC
   ========================================================================== */

export interface BreastfeedingTopic {
  id: string;
  title: string;
  description: string;
  signs: string[];
  solutions: string[];
  whenToGetHelp: string[];
}

export const breastfeedingTopics: BreastfeedingTopic[] = [
  {
    id: "latch-issues",
    title: "Latch Issues",
    description:
      "A good latch is the foundation of comfortable, effective breastfeeding. Most latch problems are fixable with positioning adjustments and practice. A deep latch means your baby takes in a large mouthful of breast, not just the nipple.",
    signs: [
      "Painful nursing that doesn't improve after the first 30 seconds",
      "Baby's lips are tucked inward rather than flanged outward",
      "Clicking or smacking sounds during feeding",
      "Baby slips off the breast repeatedly",
      "Nipple comes out flattened, creased, or misshapen after feeding",
      "Baby seems frustrated at the breast  -  pulling away, arching back, or crying",
      "Baby is not gaining weight adequately despite frequent feeding",
    ],
    solutions: [
      "Aim your nipple toward baby's nose, not their mouth  -  they'll tilt their head back and open wide",
      "Wait for a wide-open mouth (like a yawn) before bringing baby to the breast",
      "Bring baby to the breast, not breast to baby  -  support their neck and shoulders, not the back of their head",
      "Try the asymmetric latch: more areola visible above baby's top lip than below the bottom lip",
      "Try different positions  -  cradle hold, cross-cradle, football hold, or laid-back/reclined nursing",
      "If latch is painful, break suction by inserting a clean finger into the corner of baby's mouth and try again",
      "Skin-to-skin contact before feeding can help baby self-attach more naturally",
      "Check for tongue-tie or lip-tie  -  a common, treatable cause of persistent latch problems",
    ],
    whenToGetHelp: [
      "Pain persists beyond the first week despite trying different positions",
      "Baby is not producing enough wet and dirty diapers (fewer than 6 wet diapers per day after day 4)",
      "Nipples are cracked, bleeding, or blistered",
      "Baby falls asleep at the breast within 1-2 minutes every feeding without adequate intake",
      "Weight gain is below expected (less than 5-7 oz per week in the first 3 months)",
    ],
  },
  {
    id: "low-supply",
    title: "Low Milk Supply",
    description:
      "True low supply is less common than perceived low supply. Most mothers produce enough milk  -  but cluster feeding, growth spurts, and a fussy baby can make you feel otherwise. The best predictor of adequate supply is baby's output (wet and dirty diapers) and weight gain, not how full your breasts feel.",
    signs: [
      "Baby is not gaining weight adequately (less than 5-7 oz/week in the first 3 months)",
      "Fewer than 6 wet diapers per day after day 4 of life",
      "Fewer than 3-4 stools per day in the first month (some variation is normal after 6 weeks)",
      "Baby seems unsatisfied after most feedings and doesn't have calm, content periods",
      "Baby is lethargic, difficult to wake for feeds, or has a weak cry",
      "Dark or concentrated urine (should be pale yellow or clear)",
    ],
    solutions: [
      "Feed frequently  -  at least 8-12 times in 24 hours in the early weeks; milk production is supply-and-demand",
      "Ensure effective milk removal: a good latch and baby actively swallowing (listen for soft 'kuh' sounds)",
      "Offer both breasts at every feeding",
      "Avoid unnecessary supplementation, pacifiers, and strict schedules in the early weeks",
      "Add pumping sessions after or between feeds to signal your body to produce more",
      "Power pump: pump 20 min, rest 10, pump 10, rest 10, pump 10  -  once daily for several days",
      "Stay hydrated (drink to thirst  -  about 128 oz/day) and eat enough calories (approximately 500 extra calories/day while breastfeeding)",
      "Skin-to-skin contact stimulates hormones that support milk production",
      "Some mothers find galactagogues (oats, fenugreek, brewer's yeast) helpful, though evidence is limited  -  discuss with your provider",
    ],
    whenToGetHelp: [
      "Baby has lost more than 7-10% of birth weight and hasn't regained it by 2 weeks",
      "Baby is not back to birth weight by 10-14 days old",
      "Fewer than 6 wet diapers daily after day 5",
      "You have a history of breast surgery, hormonal conditions (PCOS, thyroid), or insufficient glandular tissue",
      "You're not seeing improvement after a week of increased feeding frequency",
    ],
  },
  {
    id: "oversupply",
    title: "Oversupply (Overproduction)",
    description:
      "Oversupply means producing significantly more milk than your baby needs. While it sounds like a good problem to have, it can cause fast letdown, choking, gas, green frothy stools, and fussiness in your baby, and recurrent engorgement or plugged ducts for you.",
    signs: [
      "Breasts feel constantly full and uncomfortable even right after feeding",
      "Milk sprays forcefully when baby unlatches or during letdown",
      "Baby coughs, chokes, gulps, or pulls off the breast during letdown",
      "Baby has explosive, green, frothy stools",
      "Excessive gas, fussiness, or colicky behavior in baby",
      "Recurrent clogged ducts or mastitis",
      "Baby gains weight very rapidly (more than 2 lbs per week)",
    ],
    solutions: [
      "Try block feeding: nurse from only one breast per feeding session (or per 3-hour block) to signal the other breast to slow down",
      "Avoid pumping beyond what's necessary  -  extra pumping increases supply further",
      "If you must relieve pressure, hand-express just enough for comfort (1-2 minutes), don't fully empty",
      "Nurse in a reclined or laid-back position so baby is above the breast  -  gravity helps slow the flow",
      "Let baby unlatch during forceful letdown, catch the spray in a towel, then re-latch when flow slows",
      "Avoid breast compressions during feeding if oversupply is an issue",
      "Use a Haakaa or milk collector on the non-nursing side to relieve pressure passively",
      "Cold compresses or chilled cabbage leaves after feeding can help reduce swelling and signal slower production",
    ],
    whenToGetHelp: [
      "Block feeding hasn't reduced supply after several days",
      "You're getting recurrent clogged ducts or mastitis",
      "Baby is extremely gassy, colicky, or has persistent green stools",
      "You're in significant pain or discomfort that's affecting your mental health",
      "You suspect a foremilk/hindmilk imbalance is causing baby's symptoms",
    ],
  },
  {
    id: "engorgement",
    title: "Engorgement",
    description:
      "Engorgement is the painful swelling that happens when breasts become overly full with milk, blood, and lymph fluid. It's most common in the first week postpartum when your milk transitions from colostrum to mature milk (day 2-5), but can happen anytime you go too long between feedings or pumping sessions.",
    signs: [
      "Breasts feel hard, tight, and warm to the touch",
      "Breast skin looks shiny or stretched",
      "Pain ranges from uncomfortable to severe",
      "Nipples may flatten due to swelling, making it harder for baby to latch",
      "Low-grade fever (under 100.4F/38C) is possible",
      "Swelling may extend into the armpit area",
    ],
    solutions: [
      "Feed frequently  -  every 1.5-3 hours, even if you have to wake baby",
      "Before feeding, apply warm compresses for 2-3 minutes or take a warm shower to help milk flow",
      "Reverse pressure softening: gently press around the areola for 1-2 minutes before latching to move fluid back and soften the nipple area",
      "Hand-express a small amount before latching to soften the areola so baby can latch more easily",
      "After feeding, apply cold compresses (or bags of frozen peas wrapped in a cloth) for 15-20 minutes to reduce swelling",
      "Chilled, clean cabbage leaves inside your bra can provide relief (replace when wilted)",
      "Wear a supportive (not tight) nursing bra  -  avoid underwire",
      "Gentle breast massage from the chest wall toward the nipple during feeding to help drainage",
      "Take ibuprofen if needed  -  it's safe while breastfeeding and helps with both pain and inflammation",
    ],
    whenToGetHelp: [
      "Fever above 100.4F (38C) or flu-like symptoms  -  this may indicate mastitis",
      "Engorgement doesn't improve within 24-48 hours despite frequent feeding",
      "Baby cannot latch at all due to severe swelling",
      "You notice red streaks, a hard lump, or a warm red area on the breast",
      "Pain is severe enough that you're considering stopping breastfeeding",
    ],
  },
  {
    id: "mastitis",
    title: "Mastitis",
    description:
      "Mastitis is inflammation of breast tissue that may or may not involve bacterial infection. It typically develops when milk stasis (milk sitting in the breast too long) leads to inflammation. It can progress quickly, so early treatment is important. The current evidence-based approach emphasizes gentle management  -  aggressive massage or excessive pumping can worsen inflammation.",
    signs: [
      "Red, warm, swollen area on one breast  -  often wedge-shaped",
      "Flu-like symptoms: fever (100.4F/38C or higher), chills, body aches, fatigue",
      "Breast pain or tenderness, especially in one area",
      "Hard, painful lump in the breast",
      "The breast may feel hot to the touch compared to the other side",
      "Symptoms often come on suddenly and escalate quickly",
    ],
    solutions: [
      "Continue breastfeeding or pumping  -  it's safe for baby and essential for recovery (the milk is not harmful to your baby)",
      "Feed from the affected breast first when baby is most hungry",
      "Apply warm compresses before feeding and cold compresses after feeding",
      "Gentle lymphatic drainage: light stroking from the nipple toward the armpit (avoid deep tissue massage, which can worsen inflammation)",
      "Take ibuprofen for pain and inflammation  -  it's safe while breastfeeding",
      "Rest as much as possible  -  treat this like being sick, because you are",
      "Wear loose clothing and avoid pressure on the affected area",
      "Stay hydrated",
      "Lecithin supplements (sunflower lecithin, 1200mg 3-4x daily) may help prevent recurrence",
      "If not improving within 24 hours, or worsening, contact your healthcare provider  -  antibiotics may be needed",
    ],
    whenToGetHelp: [
      "Symptoms don't improve within 12-24 hours of conservative treatment",
      "Fever above 101F (38.3C) or symptoms are worsening",
      "You see pus or blood in your milk",
      "You notice a fluctuant (soft, fluid-filled) mass  -  could indicate an abscess",
      "You've had recurrent mastitis (2+ episodes)  -  underlying causes should be investigated",
      "Red streaks extending from the affected area",
      "You feel confused, extremely fatigued, or your heart is racing  -  signs of sepsis, which is a medical emergency",
    ],
  },
  {
    id: "clogged-ducts",
    title: "Clogged Ducts",
    description:
      "A clogged (or plugged) duct occurs when milk flow is obstructed in one area of the breast, creating a tender lump. Recent research suggests these are often caused by inflammation (not literally a 'plug') and are best treated gently. Untreated clogs can progress to mastitis, so address them early.",
    signs: [
      "A firm, tender lump in the breast that may be pea-sized or larger",
      "Pain or tenderness localized to one spot",
      "The area may feel warm and look slightly red",
      "Milk flow may seem slower or reduced from the affected breast",
      "A small white dot on the nipple (milk bleb/blister) sometimes accompanies a clog",
      "No fever or flu-like symptoms (if present, it may have progressed to mastitis)",
    ],
    solutions: [
      "Keep nursing or pumping frequently  -  do not skip feedings on the affected side",
      "Apply warm compresses before feeding to help milk flow (limit to 2-3 minutes to avoid increasing inflammation)",
      "Gentle massage: use light, sweeping strokes from behind the lump toward the nipple during feeding",
      "Avoid aggressive massage, vigorous pumping, or using vibrating devices directly on the lump  -  the current evidence suggests this can worsen inflammation and delay healing",
      "Try different nursing positions to drain from different angles  -  dangle feeding (nursing on all fours, baby beneath you) can use gravity to help",
      "After feeding, apply ice or cold compresses for 10-15 minutes to reduce inflammation",
      "Take ibuprofen (anti-inflammatory and pain relief)",
      "Lecithin supplements (sunflower lecithin, 1200mg 3-4x daily) can help prevent recurrence",
      "For a milk bleb: apply olive oil-soaked cotton to the nipple before feeding; if persistent, your provider can open it with a sterile needle",
    ],
    whenToGetHelp: [
      "The lump hasn't resolved within 48 hours despite consistent treatment",
      "You develop a fever, chills, or flu-like symptoms (may be progressing to mastitis)",
      "The area becomes increasingly red, swollen, or painful",
      "You get recurrent clogs (2+ per month)  -  this may indicate an underlying issue",
      "You have a persistent milk bleb that won't resolve on its own",
    ],
  },
  {
    id: "nipple-pain",
    title: "Nipple Pain & Damage",
    description:
      "Some nipple tenderness in the first week of breastfeeding is common as your body adjusts, but persistent or severe pain is not normal and usually signals a problem that can be fixed. Pain is the most common reason mothers stop breastfeeding earlier than planned  -  so addressing it early matters.",
    signs: [
      "Pain during latch that doesn't improve after 30 seconds",
      "Cracked, bleeding, or blistered nipples",
      "Nipple comes out of baby's mouth misshapen (flattened, creased, or white/blanched)",
      "Burning or shooting pain during or between feedings (may indicate thrush)",
      "Scabbing or crusting on the nipple",
      "Pain that worsens over the first few days rather than improving",
      "Blanching (white discoloration) of the nipple after feeding, followed by color changes  -  may indicate vasospasm",
    ],
    solutions: [
      "Check the latch first  -  a shallow latch is the most common cause of nipple pain (see Latch Issues)",
      "Apply expressed breast milk to nipples after feeding and let air-dry  -  breast milk has antibacterial properties",
      "Use medical-grade purified lanolin or organic nipple balm after feedings (not before  -  baby needs to smell your skin)",
      "Hydrogel pads between feedings can promote healing and provide soothing relief",
      "Vary nursing positions to change the pressure point on the nipple",
      "If you suspect thrush (burning pain, shiny or pink nipples, white patches in baby's mouth), see your provider for antifungal treatment for both you and baby",
      "For vasospasm: keep nipples warm immediately after feeding, avoid cold air on nipples, and apply dry heat; your provider may recommend a supplement or medication if severe",
      "A nipple shield (used under guidance of a lactation consultant) can allow continued nursing while nipples heal",
      "Evaluate for tongue-tie in baby  -  a common cause of persistent nipple trauma",
    ],
    whenToGetHelp: [
      "Pain is severe enough that you dread or avoid feeding",
      "Cracks or wounds aren't healing after 3-5 days of treatment",
      "You suspect thrush (burning, shooting pain, shiny nipples)",
      "You notice signs of infection: increased redness, pus, warmth, or fever",
      "Nipple blanching or vasospasm is persistent",
      "You've been told baby has a tongue-tie or lip-tie and want an evaluation",
    ],
  },
  {
    id: "cluster-feeding",
    title: "Cluster Feeding",
    description:
      "Cluster feeding is when your baby feeds very frequently  -  sometimes every 30-60 minutes  -  over a period of several hours, usually in the evening. It's completely normal behavior, especially in the first 3-4 months. It does not mean your supply is low. Cluster feeding helps build your supply, comforts your baby, and often occurs during growth spurts and developmental leaps.",
    signs: [
      "Baby wants to feed every 30-60 minutes for a stretch of 2-5 hours, usually in the evening",
      "Baby seems fussy or unsettled between these frequent feeds",
      "Baby may not settle easily even after feeding",
      "Often occurs around 2-3 weeks, 6 weeks, 3 months, and 6 months (common growth spurt times)",
      "Baby is gaining weight well, having plenty of wet and dirty diapers, and seems content at other times of day",
      "Baby may be extra sleepy the next day after a big cluster feeding session",
    ],
    solutions: [
      "Recognize that this is normal  -  your supply is almost certainly fine if baby has adequate output and weight gain",
      "Set up a comfortable nursing station for the evening: water, snacks, remote, phone charger, pillows",
      "Accept that cluster feeding evenings are temporary  -  they usually peak around 3-6 weeks and ease up by 3-4 months",
      "Let your partner or support person handle everything else during cluster feeding: dinner, older kids, household tasks",
      "Alternate breasts frequently during cluster feeds",
      "Babywearing can help  -  some babies will nurse in a carrier",
      "If you need a short break, let someone else hold baby for 10-15 minutes  -  skin-to-skin with a partner can help soothe",
      "Avoid comparing to formula-fed babies' schedules  -  breastmilk digests faster, so more frequent feeding is biologically normal",
    ],
    whenToGetHelp: [
      "Baby is feeding frequently around the clock (not just in the evening) AND is not gaining weight",
      "Cluster feeding continues past 4 months without any pattern emerging",
      "You notice fewer than 6 wet diapers per day or baby seems dehydrated",
      "You feel overwhelmed, touched-out, or depressed  -  your mental health matters too",
      "Baby seems to be in pain during feeds (arching, screaming, refusing the breast) rather than just fussy",
    ],
  },
];

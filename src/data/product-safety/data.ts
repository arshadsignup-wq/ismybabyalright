/**
 * Product safety recalls data for baby and child products.
 * Sources: CPSC, FDA, NHTSA, AAP, Safe Kids Worldwide.
 */

export interface RecallCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  commonIssues: string[];
  safetyTips: string[];
  checkUrl: string;
}

export interface SafetyResource {
  name: string;
  description: string;
  url: string;
  phone?: string;
}

export interface HowToStep {
  step: number;
  title: string;
  description: string;
}

export const RECALL_CATEGORIES: RecallCategory[] = [
  {
    id: "cribs",
    name: "Cribs & Crib Mattresses",
    emoji: "🛏️",
    description:
      "Cribs are one of the most recalled baby products. Federal safety standards were updated in 2011 to ban drop-side cribs, but older or secondhand cribs may still be in use.",
    commonIssues: [
      "Drop-side rail detachment causing entrapment and suffocation",
      "Slats spaced too far apart (more than 2-3/8 inches), allowing head entrapment",
      "Mattress support hardware failure causing the mattress to collapse",
      "Splintering or cracking wood creating sharp edges",
      "Decorative cutouts that can trap a baby's head or limbs",
      "Mattresses that are too soft, too small, or do not fit snugly in the crib frame",
    ],
    safetyTips: [
      "Only use cribs manufactured after June 2011 that meet current CPSC standards (16 CFR 1219/1220)",
      "Check that the mattress fits snugly with no more than two fingers of space between mattress and crib side",
      "Never use drop-side cribs, even if they appear functional",
      "Inspect hardware monthly for loose bolts, broken slats, or cracked wood",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=crib",
  },
  {
    id: "car-seats",
    name: "Car Seats",
    emoji: "🚗",
    description:
      "Car seat recalls happen frequently and can involve harness defects, base cracks, or labeling errors. Because car seats are your child's primary protection in a crash, acting on recalls immediately is critical.",
    commonIssues: [
      "Harness buckle not latching or releasing properly",
      "Defective LATCH connectors that fail to secure the seat to the vehicle",
      "Cracking or breaking of the plastic seat shell",
      "Carry handle failure on infant car seats",
      "Incorrect labels causing improper installation (wrong weight or height limits)",
      "Chest clip breaking or not holding position",
    ],
    safetyTips: [
      "Register your car seat with the manufacturer immediately after purchase to receive recall alerts",
      "Never use a car seat past its expiration date (typically 6-10 years from manufacture date)",
      "Never use a car seat that has been in a moderate or severe crash",
      "Get a free car seat inspection at a local NHTSA-certified inspection station",
    ],
    checkUrl: "https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#recalls",
  },
  {
    id: "strollers",
    name: "Strollers",
    emoji: "👶",
    description:
      "Stroller recalls often involve folding mechanisms, wheel detachment, or entrapment hazards. Both full-size and umbrella strollers have been subject to major recalls over the years.",
    commonIssues: [
      "Folding hinges that can amputate or lacerate fingers",
      "Wheels detaching unexpectedly, causing the stroller to tip over",
      "Faulty locking mechanisms that allow the stroller to fold while a child is inside",
      "Handlebar or frame breakage during normal use",
      "Strangulation risk from straps or harness components",
      "Parking brake failure on inclines",
    ],
    safetyTips: [
      "Always engage the parking brake when stopped, even on flat surfaces",
      "Check folding hinges before each use and keep fingers away from moving parts",
      "Use the harness every time, even for short trips",
      "Inspect wheels and axles regularly for signs of looseness or wear",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=stroller",
  },
  {
    id: "high-chairs",
    name: "High Chairs",
    emoji: "🪑",
    description:
      "High chair recalls frequently involve stability issues, harness failures, and trays that can detach unexpectedly. Falls from high chairs send thousands of children to the ER each year.",
    commonIssues: [
      "Tipping over due to unstable base or design flaw",
      "Restraint straps breaking or detaching from the frame",
      "Tray locking mechanism failing, allowing the child to slide out",
      "Leg spreaders or crossbars breaking",
      "Screws or small parts loosening and creating a choking hazard",
      "Folding high chairs collapsing with the child seated",
    ],
    safetyTips: [
      "Always use the 3-point or 5-point harness, not just the tray, to restrain the child",
      "Place the high chair on a flat surface, away from tables, counters, and walls that the child can push off of",
      "Check all hardware before each use and tighten any loose screws",
      "Never leave a child unattended in a high chair",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=high+chair",
  },
  {
    id: "toys",
    name: "Toys",
    emoji: "🧸",
    description:
      "Toys are the most frequently recalled baby and child product category. Hazards range from small parts and choking risks to lead paint, magnets, and button battery ingestion.",
    commonIssues: [
      "Small parts that break off and become choking hazards",
      "Lead paint or other toxic substances exceeding federal limits",
      "High-powered magnets that cause serious internal injuries if swallowed",
      "Button batteries in toys that can be accessed without a tool",
      "Sharp edges or points from poor manufacturing",
      "Projectile toys that can cause eye injuries",
      "Excessive noise levels causing hearing damage",
    ],
    safetyTips: [
      "Follow age recommendations on packaging and avoid toys with small parts for children under 3",
      "Use a toilet paper tube as a choke test: if a toy or piece fits through the tube, it is a choking hazard",
      "Regularly inspect toys for broken parts, loose batteries, or peeling paint",
      "Avoid toys with high-powered magnets for children under 14",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=toy",
  },
  {
    id: "baby-monitors",
    name: "Baby Monitors",
    emoji: "📹",
    description:
      "Baby monitor recalls typically involve electrical hazards, overheating batteries, and strangulation risks from long cords. Video monitors with long power cables are a particular concern.",
    commonIssues: [
      "Electrical cord strangulation when cords are within reach of the crib",
      "Overheating or swelling lithium-ion batteries in camera units",
      "Electrical shock from exposed wiring or faulty adapters",
      "Camera units falling from mounts and striking children",
      "Fire hazard from defective charging systems",
    ],
    safetyTips: [
      "Keep monitor cords at least 3 feet away from the crib, out of the child's reach",
      "Mount camera units securely to the wall rather than placing them on furniture edges",
      "Use only the power adapter that came with the monitor",
      "Inspect cords regularly for fraying or damage",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=baby+monitor",
  },
  {
    id: "clothing",
    name: "Baby & Children's Clothing",
    emoji: "👕",
    description:
      "Clothing recalls involve drawstrings that pose strangulation hazards, flammability failures, lead or chemical contamination, and choking risks from buttons and snaps.",
    commonIssues: [
      "Drawstrings on hoods and necks creating strangulation hazards",
      "Failing to meet federal flammability standards for sleepwear",
      "Lead content exceeding the 100 ppm limit in fabric, zippers, or snaps",
      "Buttons, bows, or decorations detaching and becoming choking hazards",
      "Zipper failures that create sharp exposed metal edges",
    ],
    safetyTips: [
      "Remove or shorten drawstrings on all children's outerwear and hoods",
      "Choose snug-fitting sleepwear or clothes labeled flame-resistant for pajamas",
      "Regularly check that snaps, buttons, and decorations are securely attached",
      "Avoid secondhand children's clothing from unknown sources that may not meet current safety standards",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=children+clothing",
  },
  {
    id: "bottles-feeding",
    name: "Bottles & Feeding Products",
    emoji: "🍼",
    description:
      "Feeding product recalls can involve contamination, BPA concerns, choking hazards from bottle parts, and sippy cup components that break off. Formula recalls fall under FDA jurisdiction.",
    commonIssues: [
      "Bottle nipples or sippy cup valves that break apart and create choking hazards",
      "Contaminated infant formula (bacterial contamination such as Cronobacter or Salmonella)",
      "Plastic bottles or containers containing banned chemicals",
      "Breast pump components with mold growth due to design flaws",
      "Baby food pouches with caps that pose choking risks",
      "High levels of heavy metals (lead, arsenic, mercury) found in baby food products",
    ],
    safetyTips: [
      "Inspect bottle nipples before each use for tears, cracks, or pieces that could break off",
      "Follow FDA safety alerts for infant formula recalls at fda.gov/safety/recalls",
      "Replace bottle nipples every 2-3 months or sooner if they show signs of wear",
      "Use BPA-free bottles and check for the recycling code 7, which may indicate BPA content",
    ],
    checkUrl: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts",
  },
  {
    id: "play-yards-bassinets",
    name: "Play Yards & Bassinets",
    emoji: "🏒",
    description:
      "Play yards (portable cribs) and bassinets have been linked to infant deaths from suffocation and entrapment. CPSC issued updated mandatory standards for bassinets in 2014 and play yards in 2013.",
    commonIssues: [
      "Mattress pads or added bedding creating suffocation risk",
      "Side rail collapse or mesh tearing, trapping the infant between the mattress and side",
      "Center hubs in older play yards that can create a dangerous V-shape if not fully locked",
      "Bassinet stand instability causing tipping",
      "Inclined sleeper accessories exceeding safe sleep angle (now banned above 10 degrees)",
      "Changing table attachments that detach or collapse",
    ],
    safetyTips: [
      "Only use the mattress pad provided by the manufacturer; never add extra padding or blankets",
      "Check that all sides are fully locked and upright before placing baby inside",
      "Stop using a bassinet once the baby can roll over or push up on hands and knees (typically around 4-5 months)",
      "Never use inclined sleeper attachments; the CPSC banned inclined sleepers with angles above 10 degrees in 2022",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=play+yard+bassinet",
  },
  {
    id: "swings-bouncers",
    name: "Swings & Bouncers",
    emoji: "🎠",
    description:
      "Infant swings, bouncers, and rockers have been recalled for fall hazards, restraint failures, and positional asphyxia risk. The Fisher-Price Rock 'n Play recall in 2019 linked to over 30 infant deaths prompted sweeping new regulations.",
    commonIssues: [
      "Inclined position causing positional asphyxia (infant's head falls forward, blocking airway)",
      "Restraint buckle or harness failure allowing infants to fall out",
      "Seat peg breaking, causing the seat to detach from the frame",
      "Motorized swing mechanisms failing and causing the seat to collapse",
      "Support legs or frames folding unexpectedly",
      "Excessive bouncer vibrations loosening structural bolts over time",
    ],
    safetyTips: [
      "Never let a baby sleep in a swing, bouncer, or rocker; move the baby to a firm, flat sleep surface",
      "Always use the harness and never leave a child unattended in a swing or bouncer",
      "Place swings and bouncers on the floor, never on tables, counters, or elevated surfaces",
      "Stop using the product once the baby reaches the manufacturer's weight limit or can sit up unassisted",
    ],
    checkUrl: "https://www.cpsc.gov/Recalls?query=infant+swing+bouncer",
  },
];

export const SAFETY_RESOURCES: SafetyResource[] = [
  {
    name: "U.S. Consumer Product Safety Commission (CPSC)",
    description:
      "The primary federal agency responsible for protecting the public from unreasonable risks of injury from consumer products. Search their database for all baby and child product recalls.",
    url: "https://www.cpsc.gov/Recalls",
    phone: "1-800-638-2772",
  },
  {
    name: "U.S. Food & Drug Administration (FDA)",
    description:
      "Oversees safety recalls for infant formula, baby food, breast pumps, and other products regulated as food or medical devices.",
    url: "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts",
    phone: "1-888-463-6332",
  },
  {
    name: "National Highway Traffic Safety Administration (NHTSA)",
    description:
      "Manages all car seat and booster seat recalls. You can search by make, model, and year, and sign up for email alerts for your specific car seat.",
    url: "https://www.nhtsa.gov/recalls",
    phone: "1-888-327-4236",
  },
  {
    name: "Safe Kids Worldwide",
    description:
      "A global nonprofit focused on preventing childhood injuries. Offers product safety guides, car seat inspection station locators, and free safety events in local communities.",
    url: "https://www.safekids.org",
  },
  {
    name: "Kids In Danger",
    description:
      "A nonprofit that tracks children's product recalls and advocates for stronger safety regulations. Publishes annual reports on recall effectiveness and compliance.",
    url: "https://www.kidsindanger.org",
  },
  {
    name: "CPSC SaferProducts.gov",
    description:
      "A public database where parents can report unsafe products and search for safety complaints filed by other consumers. Reports are forwarded to manufacturers and the CPSC.",
    url: "https://www.saferproducts.gov",
  },
];

export const HOW_TO_CHECK_STEPS: HowToStep[] = [
  {
    step: 1,
    title: "Find your product's model number and manufacture date",
    description:
      "Look for a label or sticker on the product with the manufacturer name, model number, and date of manufacture. On cribs, this is usually on the headboard or mattress support. On car seats, it is on the bottom or back of the seat. On strollers, check the frame near the folding mechanism. Write down or photograph this information.",
  },
  {
    step: 2,
    title: "Search the CPSC recall database",
    description:
      "Visit cpsc.gov/Recalls and enter the product name, brand, or model number in the search bar. For car seats specifically, use nhtsa.gov/recalls instead. For infant formula and baby food, check fda.gov/safety/recalls. Review the results carefully, as the same brand may have multiple recalls for different model numbers.",
  },
  {
    step: 3,
    title: "Register the product with the manufacturer",
    description:
      "Most baby products include a registration card in the box or offer online registration on the manufacturer's website. Registering ensures you receive direct notification by email or mail if a recall is issued. Under federal law (Consumer Product Safety Improvement Act), manufacturers are required to offer free product registration.",
  },
  {
    step: 4,
    title: "Sign up for recall alerts",
    description:
      "Subscribe to email alerts from the CPSC at cpsc.gov/Newsroom/Subscribe. You can also follow @ABORRECALL on Twitter/X and download the CPSC Recall app. For car seats, create an account at nhtsa.gov to get email alerts. These services are free and send notifications as soon as new recalls are announced.",
  },
  {
    step: 5,
    title: "Act on any recall immediately",
    description:
      "If your product has been recalled, stop using it right away. Follow the specific instructions in the recall notice, which may include returning the product for a refund, receiving a free repair kit, or getting a replacement. Never attempt to fix a recalled product yourself. Contact the manufacturer directly using the phone number or website listed in the recall notice.",
  },
];

/**
 * Baby budget planner data — realistic first-year cost estimates.
 * Sources: USDA Cost of Raising a Child, BabyCenter annual survey, NerdWallet 2024 data.
 * Low = budget-conscious / secondhand, Mid = moderate new, High = premium brands.
 * All figures are monthly costs in USD unless noted otherwise.
 */

export interface BudgetItem {
  id: string;
  name: string;
  lowEstimate: number;
  midEstimate: number;
  highEstimate: number;
  notes: string;
  isOptional: boolean;
  alternativeTip?: string;
}

export interface BudgetCategory {
  id: string;
  name: string;
  emoji: string;
  subcategories: BudgetItem[];
}

export type BudgetLevel = "low" | "mid" | "high";
export type FeedingMethod = "breastfeeding" | "formula" | "combo";

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    id: "feeding",
    name: "Feeding",
    emoji: "\uD83C\uDF7C",
    subcategories: [
      {
        id: "formula",
        name: "Formula",
        lowEstimate: 80,
        midEstimate: 150,
        highEstimate: 300,
        notes: "Store brand vs. name brand vs. specialty/organic formula. Specialty formulas (hypoallergenic, etc.) can exceed $400/mo.",
        isOptional: false,
        alternativeTip: "Store-brand formula meets the same FDA standards as name brands and costs 50% less.",
      },
      {
        id: "bottles",
        name: "Bottles & Nipples",
        lowEstimate: 5,
        midEstimate: 10,
        highEstimate: 20,
        notes: "Amortized monthly cost. Budget: basic set ~$15. Premium: anti-colic bottles ~$60 set.",
        isOptional: false,
        alternativeTip: "Start with a small set; babies can be picky about nipple shapes.",
      },
      {
        id: "nursing-supplies",
        name: "Nursing Supplies",
        lowEstimate: 10,
        midEstimate: 30,
        highEstimate: 60,
        notes: "Breast pump (often covered by insurance), nursing pads, storage bags, nursing bras, nipple cream.",
        isOptional: false,
        alternativeTip: "Check with your insurance; most plans cover a breast pump at no cost under the ACA.",
      },
      {
        id: "high-chair",
        name: "High Chair",
        lowEstimate: 3,
        midEstimate: 8,
        highEstimate: 25,
        notes: "Amortized over 12 months. Budget: clip-on seat ~$35. Mid: standard chair ~$100. Premium: Stokke-style ~$300.",
        isOptional: false,
        alternativeTip: "A clip-on travel high chair works well and saves space.",
      },
      {
        id: "bibs",
        name: "Bibs & Burp Cloths",
        lowEstimate: 2,
        midEstimate: 5,
        highEstimate: 10,
        notes: "Monthly replacement/addition cost. Silicone bibs last longer than cloth.",
        isOptional: false,
        alternativeTip: "Silicone bibs are easy to clean and replace cloth bibs over time.",
      },
      {
        id: "baby-food",
        name: "Baby Food & Solids",
        lowEstimate: 20,
        midEstimate: 50,
        highEstimate: 100,
        notes: "Starts around 6 months. Homemade purees vs. store-bought pouches vs. organic delivery services.",
        isOptional: false,
        alternativeTip: "Making your own purees with a basic blender costs a fraction of store-bought pouches.",
      },
    ],
  },
  {
    id: "diapering",
    name: "Diapering",
    emoji: "\uD83E\uDDF7",
    subcategories: [
      {
        id: "diapers",
        name: "Diapers",
        lowEstimate: 40,
        midEstimate: 70,
        highEstimate: 110,
        notes: "Newborns use 10-12/day, older babies 6-8/day. Store brand vs. name brand vs. eco-friendly.",
        isOptional: false,
        alternativeTip: "Cloth diapers cost $300-500 upfront but save $1,000+ over the diaper years.",
      },
      {
        id: "wipes",
        name: "Wipes",
        lowEstimate: 10,
        midEstimate: 20,
        highEstimate: 35,
        notes: "Bulk store-brand wipes vs. premium sensitive-skin vs. eco-friendly wipes.",
        isOptional: false,
        alternativeTip: "Buy in bulk from warehouse stores for significant per-wipe savings.",
      },
      {
        id: "diaper-cream",
        name: "Diaper Cream & Ointment",
        lowEstimate: 3,
        midEstimate: 8,
        highEstimate: 15,
        notes: "Zinc oxide cream for prevention, prescription options for severe rash.",
        isOptional: false,
        alternativeTip: "Generic zinc oxide works just as well as brand-name creams.",
      },
      {
        id: "diaper-bag",
        name: "Diaper Bag",
        lowEstimate: 2,
        midEstimate: 5,
        highEstimate: 15,
        notes: "Amortized over 12 months. Budget: $20 basic backpack. Premium: $150+ designer bag.",
        isOptional: false,
        alternativeTip: "Any backpack with compartments works; you don't need a dedicated diaper bag.",
      },
      {
        id: "changing-pad",
        name: "Changing Pad & Covers",
        lowEstimate: 2,
        midEstimate: 4,
        highEstimate: 8,
        notes: "Amortized over 12 months. Contoured pad plus washable covers.",
        isOptional: false,
        alternativeTip: "A waterproof mat on any flat surface works as a changing station.",
      },
    ],
  },
  {
    id: "clothing",
    name: "Clothing",
    emoji: "\uD83D\uDC55",
    subcategories: [
      {
        id: "onesies",
        name: "Onesies & Bodysuits",
        lowEstimate: 10,
        midEstimate: 25,
        highEstimate: 50,
        notes: "Babies outgrow sizes quickly; budget for new sizes every 2-3 months.",
        isOptional: false,
        alternativeTip: "Thrift stores and Facebook Buy Nothing groups are goldmines for baby clothes.",
      },
      {
        id: "sleepers",
        name: "Sleepwear & Sleep Sacks",
        lowEstimate: 5,
        midEstimate: 15,
        highEstimate: 35,
        notes: "Footed sleepers, sleep sacks/wearable blankets. Replace as baby grows.",
        isOptional: false,
        alternativeTip: "Sleep sacks replace loose blankets (safer) and double as pajamas.",
      },
      {
        id: "outerwear",
        name: "Outerwear & Seasonal",
        lowEstimate: 5,
        midEstimate: 12,
        highEstimate: 30,
        notes: "Jacket, hat, mittens, sun hat. Varies significantly by climate.",
        isOptional: false,
        alternativeTip: "Borrow seasonal outerwear from friends; babies wear it for such a short time.",
      },
      {
        id: "shoes",
        name: "Shoes & Socks",
        lowEstimate: 3,
        midEstimate: 8,
        highEstimate: 20,
        notes: "Pre-walkers don't need shoes. Soft-sole shoes for new walkers (around 9-12 months).",
        isOptional: true,
        alternativeTip: "Barefoot is best for development; save shoe money until they're actually walking outside.",
      },
      {
        id: "accessories",
        name: "Accessories (Hats, Headbands)",
        lowEstimate: 2,
        midEstimate: 5,
        highEstimate: 15,
        notes: "Sun hats, winter hats, bows/headbands. Mostly optional beyond sun protection.",
        isOptional: true,
        alternativeTip: "One good sun hat is all you really need; skip the fashion accessories.",
      },
    ],
  },
  {
    id: "gear",
    name: "Gear & Equipment",
    emoji: "\uD83D\uDE97",
    subcategories: [
      {
        id: "stroller",
        name: "Stroller",
        lowEstimate: 8,
        midEstimate: 25,
        highEstimate: 75,
        notes: "Amortized over 12 months. Budget: umbrella stroller ~$50-100. Mid: full-size ~$250-300. Premium: UPPAbaby/Bugaboo ~$800-1,000.",
        isOptional: false,
        alternativeTip: "A quality used stroller is often half the price and works just as well.",
      },
      {
        id: "car-seat",
        name: "Car Seat",
        lowEstimate: 8,
        midEstimate: 17,
        highEstimate: 40,
        notes: "Amortized over 12 months. Always buy new (never used). Infant seat ~$100-200. Premium convertible ~$350-500.",
        isOptional: false,
        alternativeTip: "Buy a convertible car seat from the start to avoid buying twice.",
      },
      {
        id: "carrier",
        name: "Baby Carrier / Wrap",
        lowEstimate: 3,
        midEstimate: 8,
        highEstimate: 20,
        notes: "Amortized over 12 months. Budget: ring sling or wrap ~$30. Premium: structured carrier ~$180-250.",
        isOptional: true,
        alternativeTip: "A simple stretchy wrap ($25) works great for newborns and small infants.",
      },
      {
        id: "swing",
        name: "Swing / Rocker",
        lowEstimate: 5,
        midEstimate: 12,
        highEstimate: 25,
        notes: "Amortized over 12 months. Some babies love them, some don't. Use period: ~3-9 months.",
        isOptional: true,
        alternativeTip: "Borrow or buy used; you won't know if your baby likes it until you try.",
      },
      {
        id: "bouncer",
        name: "Bouncer Seat",
        lowEstimate: 3,
        midEstimate: 7,
        highEstimate: 17,
        notes: "Amortized over 12 months. Simple bouncer ~$30. Premium: BabyBjorn ~$200.",
        isOptional: true,
        alternativeTip: "A simple manual bouncer is often preferred over expensive electronic ones.",
      },
      {
        id: "play-mat",
        name: "Play Mat / Activity Gym",
        lowEstimate: 3,
        midEstimate: 6,
        highEstimate: 15,
        notes: "Amortized over 12 months. Basic padded mat ~$25. Premium activity gym ~$150-180.",
        isOptional: false,
        alternativeTip: "A clean blanket on the floor works for tummy time and free play.",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    emoji: "\uD83C\uDFE5",
    subcategories: [
      {
        id: "insurance-copays",
        name: "Insurance Premiums & Copays",
        lowEstimate: 50,
        midEstimate: 150,
        highEstimate: 300,
        notes: "Adding baby to your plan plus well-child visit copays. Varies enormously by plan.",
        isOptional: false,
        alternativeTip: "Compare adding baby to each parent's plan; one may be significantly cheaper.",
      },
      {
        id: "vitamins",
        name: "Vitamins & Supplements",
        lowEstimate: 5,
        midEstimate: 10,
        highEstimate: 20,
        notes: "Vitamin D drops recommended for breastfed babies. Iron supplements if needed.",
        isOptional: false,
        alternativeTip: "Generic vitamin D drops are identical to name brands at a fraction of the cost.",
      },
      {
        id: "thermometer",
        name: "Thermometer & Health Tools",
        lowEstimate: 1,
        midEstimate: 3,
        highEstimate: 8,
        notes: "Amortized over 12 months. Rectal thermometer ($8), nasal aspirator ($5-30), humidifier ($20-60).",
        isOptional: false,
        alternativeTip: "A basic digital rectal thermometer is the most accurate and costs under $10.",
      },
      {
        id: "first-aid",
        name: "First Aid & Medicine Cabinet",
        lowEstimate: 3,
        midEstimate: 7,
        highEstimate: 15,
        notes: "Infant Tylenol/Motrin, saline drops, gas drops, teething gel, first aid kit.",
        isOptional: false,
        alternativeTip: "Build your kit gradually; buy medications only as needed to avoid expiration.",
      },
    ],
  },
  {
    id: "childcare",
    name: "Childcare",
    emoji: "\uD83D\uDC76",
    subcategories: [
      {
        id: "daycare",
        name: "Daycare / Child Care Center",
        lowEstimate: 800,
        midEstimate: 1200,
        highEstimate: 2000,
        notes: "Full-time center-based care. Costs vary dramatically by region ($600 rural to $2,500+ metro).",
        isOptional: true,
        alternativeTip: "Look into employer childcare benefits, dependent care FSA, and state subsidy programs.",
      },
      {
        id: "babysitter",
        name: "Babysitter (Occasional)",
        lowEstimate: 40,
        midEstimate: 80,
        highEstimate: 160,
        notes: "2-4 evenings per month at $15-25/hr. Important for parent well-being.",
        isOptional: true,
        alternativeTip: "Swap babysitting with other parent friends for free date nights.",
      },
      {
        id: "nanny-share",
        name: "Nanny Share",
        lowEstimate: 800,
        midEstimate: 1400,
        highEstimate: 2200,
        notes: "Splitting a nanny with another family. More personal than daycare, more affordable than a solo nanny.",
        isOptional: true,
        alternativeTip: "Nanny share Facebook groups in your area can help you find compatible families.",
      },
    ],
  },
  {
    id: "nursery",
    name: "Nursery",
    emoji: "\uD83D\uDECF\uFE0F",
    subcategories: [
      {
        id: "crib",
        name: "Crib",
        lowEstimate: 8,
        midEstimate: 17,
        highEstimate: 42,
        notes: "Amortized over 12 months. Budget: basic IKEA crib ~$100. Mid: convertible ~$200. Premium: ~$500.",
        isOptional: false,
        alternativeTip: "A convertible crib that becomes a toddler bed gives you years of use.",
      },
      {
        id: "mattress",
        name: "Crib Mattress",
        lowEstimate: 4,
        midEstimate: 8,
        highEstimate: 20,
        notes: "Amortized over 12 months. Always buy new for safety. Firm, flat surface required.",
        isOptional: false,
        alternativeTip: "A firm, flat mattress that fits snugly is all that's needed; skip the fancy features.",
      },
      {
        id: "bedding",
        name: "Sheets & Mattress Protectors",
        lowEstimate: 2,
        midEstimate: 5,
        highEstimate: 12,
        notes: "2-3 fitted sheets and a waterproof mattress protector. No loose blankets, bumpers, or pillows (AAP safe sleep guidelines).",
        isOptional: false,
        alternativeTip: "You only need 2-3 fitted sheets; skip crib bedding sets with unnecessary items.",
      },
      {
        id: "dresser",
        name: "Dresser / Storage",
        lowEstimate: 4,
        midEstimate: 12,
        highEstimate: 33,
        notes: "Amortized over 12 months. Budget: small organizer ~$50. Mid: dresser ~$150. Premium: ~$400. Always anchor to wall.",
        isOptional: true,
        alternativeTip: "A closet organizer system is often cheaper and more space-efficient than a dresser.",
      },
      {
        id: "monitor",
        name: "Baby Monitor",
        lowEstimate: 3,
        midEstimate: 8,
        highEstimate: 25,
        notes: "Amortized over 12 months. Audio-only ~$30. Video ~$80-100. Smart/WiFi ~$200-300.",
        isOptional: true,
        alternativeTip: "An audio monitor is sufficient for small homes; video is nice but not essential.",
      },
      {
        id: "nightlight",
        name: "Nightlight",
        lowEstimate: 1,
        midEstimate: 2,
        highEstimate: 5,
        notes: "Amortized over 12 months. Simple plug-in ~$5. Color-changing smart light ~$30-60.",
        isOptional: true,
        alternativeTip: "A dim red or amber nightlight is best; blue/white light can disrupt sleep.",
      },
      {
        id: "decor",
        name: "Nursery Decor",
        lowEstimate: 3,
        midEstimate: 15,
        highEstimate: 50,
        notes: "Amortized over 12 months. Entirely optional and cosmetic. Baby doesn't care about aesthetics.",
        isOptional: true,
        alternativeTip: "DIY wall art and hand-me-down decor look great and cost almost nothing.",
      },
    ],
  },
  {
    id: "safety",
    name: "Safety",
    emoji: "\uD83D\uDD12",
    subcategories: [
      {
        id: "baby-proofing-kit",
        name: "Baby Proofing Kit",
        lowEstimate: 2,
        midEstimate: 5,
        highEstimate: 12,
        notes: "Amortized over 12 months. Comprehensive kit with outlet covers, corner guards, and drawer locks. Start around 4-6 months.",
        isOptional: false,
        alternativeTip: "Start with outlet covers and cabinet locks; add more as baby becomes mobile.",
      },
      {
        id: "gates",
        name: "Safety Gates",
        lowEstimate: 4,
        midEstimate: 8,
        highEstimate: 17,
        notes: "Amortized over 12 months. Pressure-mount for doorways (~$25-40), hardware-mount for stairs (~$50-80). Need 2-3 typically.",
        isOptional: false,
        alternativeTip: "Hardware-mounted gates at the top of stairs are essential; pressure-mount works elsewhere.",
      },
      {
        id: "outlet-covers",
        name: "Outlet Covers & Plugs",
        lowEstimate: 1,
        midEstimate: 2,
        highEstimate: 4,
        notes: "Amortized over 12 months. Sliding plate covers ($3-5 each) are safer than removable plugs.",
        isOptional: false,
        alternativeTip: "Sliding outlet covers can't be removed by toddlers, unlike pop-in plugs.",
      },
      {
        id: "cabinet-locks",
        name: "Cabinet & Drawer Locks",
        lowEstimate: 1,
        midEstimate: 3,
        highEstimate: 7,
        notes: "Amortized over 12 months. Adhesive locks, magnetic locks, or spring-loaded latches. ~10-15 needed.",
        isOptional: false,
        alternativeTip: "Magnetic locks are invisible and toddler-proof; worth the slightly higher cost.",
      },
    ],
  },
];

export const savingsTips: { title: string; description: string }[] = [
  {
    title: "Buy secondhand (except car seats)",
    description:
      "Baby gear, clothes, and toys are used briefly and often in great condition. Thrift stores, Facebook Marketplace, and Buy Nothing groups save 50-80%. Never buy used car seats due to safety concerns.",
  },
  {
    title: "Accept hand-me-downs graciously",
    description:
      "Friends and family with older kids are usually thrilled to pass along clothes, toys, and gear. Most baby items are barely used before being outgrown.",
  },
  {
    title: "Use store-brand formula and diapers",
    description:
      "Store-brand formula meets the same FDA nutritional standards as name brands. Store-brand diapers (Costco Kirkland, Target Up&Up) perform comparably at 30-50% less cost.",
  },
  {
    title: "Breastfeed if possible",
    description:
      "Breastfeeding saves $1,200-3,600 per year in formula costs. Your insurance likely covers a breast pump. La Leche League offers free breastfeeding support.",
  },
  {
    title: "Make your own baby food",
    description:
      "A basic blender or food processor and fresh produce makes baby food at a fraction of the cost of pouches. Batch-cook and freeze in ice cube trays.",
  },
  {
    title: "Create a baby registry strategically",
    description:
      "Register for big-ticket items (car seat, stroller, crib) and everyday essentials (diapers, wipes). Most registries offer a completion discount of 10-15% on remaining items.",
  },
  {
    title: "Use your Dependent Care FSA",
    description:
      "If your employer offers a Dependent Care FSA, you can save up to $5,000 pre-tax for childcare expenses. That's $1,000-1,500 in tax savings depending on your bracket.",
  },
  {
    title: "Skip the nursery Pinterest board",
    description:
      "Babies don't need a designer nursery. A safe crib, firm mattress, and fitted sheet are all that's required. Redirect decor money toward essentials.",
  },
  {
    title: "Buy ahead during sales",
    description:
      "Stock up on diapers and wipes during Amazon Prime Day, Black Friday, and Target Circle sales. Buy the next size up in clothes during end-of-season clearance.",
  },
  {
    title: "Join parent groups and swap events",
    description:
      "Local parent groups host clothing swaps, toy exchanges, and gear sales. You'll also get invaluable advice and emotional support from other parents.",
  },
];

/**
 * Returns the monthly cost for a single item at the given budget level.
 */
export function getItemCost(item: BudgetItem, level: BudgetLevel): number {
  if (level === "low") return item.lowEstimate;
  if (level === "high") return item.highEstimate;
  return item.midEstimate;
}

/**
 * Adjusts feeding category costs based on the feeding method.
 * - Breastfeeding: formula cost set to 0, nursing supplies remain.
 * - Formula: nursing supplies set to 0, formula remains.
 * - Combo: formula cost halved, nursing supplies remain.
 */
export function adjustForFeedingMethod(
  item: BudgetItem,
  feedingMethod: FeedingMethod,
  level: BudgetLevel
): number {
  const baseCost = getItemCost(item, level);

  if (item.id === "formula") {
    if (feedingMethod === "breastfeeding") return 0;
    if (feedingMethod === "combo") return Math.round(baseCost * 0.5);
    return baseCost;
  }

  if (item.id === "nursing-supplies") {
    if (feedingMethod === "formula") return 0;
    return baseCost;
  }

  return baseCost;
}

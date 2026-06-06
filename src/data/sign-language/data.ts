export interface BabySign {
  word: string;
  description: string;
  category: "essentials" | "food" | "feelings" | "animals" | "activities";
  ageRange: string;
  tip?: string;
}

export interface SignLanguageFAQ {
  question: string;
  answer: string;
}

export interface TeachingTip {
  title: string;
  description: string;
}

export interface SignCategory {
  id: BabySign["category"];
  label: string;
  emoji: string;
}

export const categories: SignCategory[] = [
  { id: "essentials", label: "Essentials", emoji: "\u2B50" },
  { id: "food", label: "Food & Drink", emoji: "\uD83C\uDF4E" },
  { id: "feelings", label: "Feelings", emoji: "\uD83D\uDC9B" },
  { id: "animals", label: "Animals", emoji: "\uD83D\uDC3E" },
  { id: "activities", label: "Activities", emoji: "\uD83C\uDFB5" },
];

export const signs: BabySign[] = [
  // ── Essentials ──
  {
    word: "More",
    description:
      "Bring all your fingertips together on each hand to form two pinched shapes, then tap them together in front of your chest. Repeat the tapping motion two or three times.",
    category: "essentials",
    ageRange: "6-8 months",
    tip: "This is often the first sign babies learn. Use it at every meal and during play when your baby wants to continue an activity.",
  },
  {
    word: "All Done",
    description:
      "Hold both hands up in front of you with palms facing outward, then twist them back and forth at the wrist, as if waving goodbye with both hands at the same time.",
    category: "essentials",
    ageRange: "6-8 months",
    tip: "Pair this sign with mealtime routines. When your baby pushes food away or turns their head, model the sign and say 'all done' out loud.",
  },
  {
    word: "Milk",
    description:
      "Extend your hand in front of you and open and close your fist repeatedly, as if you are squeezing a cow's udder. The motion should be gentle and rhythmic.",
    category: "essentials",
    ageRange: "6-8 months",
    tip: "Use this sign right before and during nursing or bottle feeding so your baby connects the sign to the experience.",
  },
  {
    word: "Eat",
    description:
      "Bring your fingertips together into a pinched shape and tap them against your lips several times, as if you are putting food into your mouth.",
    category: "essentials",
    ageRange: "6-8 months",
  },
  {
    word: "Drink",
    description:
      "Cup your hand as if holding an imaginary cup, then tilt it toward your mouth as if taking a sip. Repeat the tipping motion a couple of times.",
    category: "essentials",
    ageRange: "6-9 months",
  },
  {
    word: "Help",
    description:
      "Make a fist with one hand and place it on top of the open palm of your other hand. Raise both hands together upward, as if the open hand is lifting the fist.",
    category: "essentials",
    ageRange: "8-10 months",
    tip: "This is a valuable sign for reducing frustration. When your baby struggles with a toy or task, model the sign before stepping in.",
  },
  {
    word: "Please",
    description:
      "Place your open hand flat against your chest and rub it in a circular motion. Keep the movement slow and gentle.",
    category: "essentials",
    ageRange: "10-12 months",
    tip: "Introduce this sign once your baby has a few other signs mastered. It teaches early manners in a natural, pressure-free way.",
  },

  // ── Food ──
  {
    word: "Water",
    description:
      "Make a W shape by holding up your three middle fingers (index, middle, and ring finger) and tap them against your chin two or three times.",
    category: "food",
    ageRange: "8-10 months",
  },
  {
    word: "Banana",
    description:
      "Point your index finger upward on one hand to represent the banana, then use your other hand to make a peeling motion down the length of the finger, as if peeling a real banana.",
    category: "food",
    ageRange: "8-10 months",
    tip: "This sign is easy for babies to learn because the peeling motion is fun and memorable. Use it whenever you offer banana slices.",
  },
  {
    word: "Cracker",
    description:
      "Make a fist with one hand and tap it against the elbow of your other arm, as if you are cracking something. Repeat two or three times.",
    category: "food",
    ageRange: "8-10 months",
  },
  {
    word: "Cheese",
    description:
      "Press both palms together flat, then twist them back and forth against each other as if pressing cheese in a cheese press.",
    category: "food",
    ageRange: "9-12 months",
  },
  {
    word: "Apple",
    description:
      "Make a fist with your hand and press the knuckle of your index finger against your cheek. Twist your fist back and forth as if twisting the stem of an apple.",
    category: "food",
    ageRange: "9-12 months",
  },
  // ── Feelings ──
  {
    word: "Happy",
    description:
      "Place your open hand flat against your chest and brush it upward and outward in a circular motion, as if joy is bubbling up from your heart. Repeat two times with a smile.",
    category: "feelings",
    ageRange: "8-10 months",
    tip: "Always pair this sign with a big, genuine smile. Your facial expression is just as important as the hand movement.",
  },
  {
    word: "Sad",
    description:
      "Hold both open hands in front of your face with fingers spread, then drag them downward slowly, like tears falling down your cheeks. Make a sad facial expression as you sign.",
    category: "feelings",
    ageRange: "8-10 months",
    tip: "Label your baby's emotions with this sign: 'You look sad. Are you sad?' This builds emotional vocabulary early.",
  },
  {
    word: "Hurt",
    description:
      "Point both index fingers toward each other and twist them back and forth in opposite directions in front of your body, as if something is twisting painfully.",
    category: "feelings",
    ageRange: "9-12 months",
    tip: "This is one of the most important signs for safety. A baby who can tell you they hurt can help you locate the source of pain.",
  },
  {
    word: "Tired",
    description:
      "Hold both hands open with fingers spread in front of your chest, palms facing your body. Let both hands slowly drop and droop downward, while also drooping your shoulders and head slightly.",
    category: "feelings",
    ageRange: "9-12 months",
  },
  {
    word: "Scared",
    description:
      "Hold both fists in front of your chest and quickly open them while pulling your hands apart, as if something startled you. Widen your eyes and make a surprised expression.",
    category: "feelings",
    ageRange: "10-12 months",
  },
  {
    word: "Love",
    description:
      "Cross both arms over your chest in a self-hug, hands resting on opposite shoulders. Squeeze gently, as if hugging yourself or someone you love.",
    category: "feelings",
    ageRange: "8-10 months",
    tip: "Use this sign freely and often. Signing 'I love you' before naps and bedtime creates a comforting ritual.",
  },

  // ── Animals ──
  {
    word: "Dog",
    description:
      "Pat your thigh with your open hand a couple of times, as if calling a dog to come, then snap your fingers once. Babies often just do the patting motion.",
    category: "animals",
    ageRange: "8-10 months",
    tip: "If you have a pet dog, this sign comes naturally. Point to the dog, sign 'dog,' and say the word. Real-life context is the best teacher.",
  },
  {
    word: "Cat",
    description:
      "Pinch your thumb and index finger together near the side of your cheek and draw them outward, as if tracing a cat's whisker. Repeat on one or both sides.",
    category: "animals",
    ageRange: "8-10 months",
  },
  {
    word: "Bird",
    description:
      "Hold your index finger and thumb together near your mouth and open and close them like a bird's beak pecking or chirping. Keep the motion small and quick.",
    category: "animals",
    ageRange: "8-10 months",
    tip: "Use this sign when you hear birds singing outside or see them at the park. Signing in real-world contexts helps babies connect signs to meaning.",
  },
  {
    word: "Fish",
    description:
      "Hold one hand flat in front of you with fingers together, palm facing sideways. Wiggle the hand side to side, imitating a fish swimming through water.",
    category: "animals",
    ageRange: "9-12 months",
  },
  {
    word: "Bear",
    description:
      "Cross both arms over your chest and make scratching or clawing motions with your fingers against your shoulders, like a bear scratching itself.",
    category: "animals",
    ageRange: "10-12 months",
  },
  {
    word: "Bunny",
    description:
      "Hold up two fingers (index and middle) behind your head like bunny ears, then bend and straighten them together a few times, imitating a rabbit's ears twitching.",
    category: "animals",
    ageRange: "10-12 months",
    tip: "This is a fun sign that babies enjoy making. Use it with stuffed animals, picture books, or when you spot a rabbit outside.",
  },

  // ── Activities ──
  {
    word: "Play",
    description:
      "Extend your thumb and pinky finger on both hands (hang-loose shape) and twist both wrists back and forth at the same time, with a playful expression.",
    category: "activities",
    ageRange: "8-10 months",
  },
  {
    word: "Book",
    description:
      "Place both palms together in front of you as if praying, then open them outward like a book opening, keeping the pinky edges together as the spine.",
    category: "activities",
    ageRange: "8-10 months",
    tip: "Sign this before reading time. Babies who sign 'book' when they want to be read to are showing early literacy interest.",
  },
  {
    word: "Bath",
    description:
      "Make two fists and rub them up and down on your chest in a scrubbing motion, as if washing yourself in the tub.",
    category: "activities",
    ageRange: "8-10 months",
  },
  {
    word: "Sleep",
    description:
      "Hold one open hand in front of your face with fingers spread, then slowly draw the fingers together as you bring your hand downward, closing your eyes at the same time.",
    category: "activities",
    ageRange: "8-10 months",
    tip: "Use this sign as part of your bedtime routine. Signing 'sleep' along with other cues like dimming lights helps baby anticipate rest time.",
  },
  {
    word: "Outside",
    description:
      "Hold one hand open with fingers together in front of you like a door, then pull it outward toward you in a grasping motion, as if reaching outside through a doorway. Repeat twice.",
    category: "activities",
    ageRange: "9-12 months",
  },
  {
    word: "Music",
    description:
      "Hold one arm out horizontally in front of you and wave your other hand back and forth above it, as if conducting an orchestra or keeping time to music.",
    category: "activities",
    ageRange: "9-12 months",
    tip: "Babies respond naturally to music. Sign this when you start singing or turn on a song, and your baby will soon request music on their own.",
  },
];

export const teachingTips: TeachingTip[] = [
  {
    title: "Start with 3-5 signs",
    description:
      "Begin with the most motivating signs for your baby. 'More,' 'all done,' and 'milk' are great starters because they connect to things your baby already wants. Once your baby uses these consistently, add new signs one or two at a time.",
  },
  {
    title: "Say the word while you sign",
    description:
      "Always pair the sign with the spoken word. Baby sign language is a bridge to verbal communication, not a replacement. Speaking and signing together gives your baby two pathways to understand and eventually express the same concept.",
  },
  {
    title: "Use signs in context",
    description:
      "Sign 'milk' when you are about to nurse or prepare a bottle. Sign 'dog' when you see a dog. Context is what makes a sign meaningful to your baby. Avoid drilling signs out of context like flashcards  -  real-life moments are the best classroom.",
  },
  {
    title: "Be patient and consistent",
    description:
      "Most babies need to see a sign dozens of times before they use it themselves. The typical timeline is 2-3 months of consistent modeling before your baby signs back. Keep signing even when it feels like nothing is happening  -  your baby is absorbing more than you realize.",
  },
  {
    title: "Watch for approximations",
    description:
      "Your baby's first signs will not look perfect. A baby signing 'more' might just clap their hands together loosely instead of tapping fingertips. These approximations count as real communication. Respond enthusiastically to show your baby that signing works.",
  },
  {
    title: "Get the whole family involved",
    description:
      "Babies learn faster when everyone around them uses the same signs. Teach your partner, grandparents, siblings, and daycare providers the signs you are using. Consistency across caregivers accelerates learning.",
  },
];

export const faqs: SignLanguageFAQ[] = [
  {
    question: "Will signing delay my baby's speech?",
    answer:
      "No. Research consistently shows that baby sign language does not delay speech development. In fact, studies by Dr. Linda Acredolo and Dr. Susan Goodwyn found that signing babies actually spoke sooner than non-signing babies and had larger vocabularies by age 2. Signing gives babies an early communication tool while their vocal cords and mouth muscles are still developing. Once they can say words, they naturally drop the signs.",
  },
  {
    question: "When should I start teaching my baby sign language?",
    answer:
      "Most experts recommend starting around 6 to 8 months, when babies begin to develop the fine motor control needed to imitate hand movements. However, you can start modeling signs even earlier  -  around 4 to 5 months  -  knowing that your baby will not sign back for several weeks or months. There is no such thing as starting too early, since you are simply adding signs to your normal talking.",
  },
  {
    question: "How long until my baby signs back?",
    answer:
      "After you begin consistently modeling signs, most babies start signing back within 2 to 3 months. Babies who start learning at 6 months typically produce their first sign between 8 and 10 months. Some babies pick it up faster, others take longer  -  this is normal. The key is consistent repetition in meaningful contexts.",
  },
  {
    question: "Do I need to learn formal ASL to sign with my baby?",
    answer:
      "No. While baby sign language borrows many signs from American Sign Language (ASL), you do not need to become fluent in ASL. Learning 20 to 30 basic signs is enough to give your baby a meaningful communication toolkit. That said, using real ASL signs is recommended over making up your own, because ASL signs are standardized and your baby may encounter them with other people.",
  },
  {
    question: "What if my baby uses the wrong sign or an approximation?",
    answer:
      "Approximations are completely normal and expected. A baby's fine motor skills are still developing, so their signs will look rough at first. If your baby claps loosely when trying to sign 'more,' that counts. Respond as if they signed perfectly  -  this positive reinforcement encourages them to keep communicating. Over time their signs will become more precise.",
  },
  {
    question: "Can signing reduce tantrums?",
    answer:
      "Yes. Many tantrums in babies and toddlers stem from frustration at not being able to express what they want. Signing gives pre-verbal babies a way to communicate needs like 'more,' 'help,' 'hurt,' and 'all done' before they can say these words. Parents commonly report that signing reduces the frequency and intensity of frustration-related meltdowns.",
  },
];

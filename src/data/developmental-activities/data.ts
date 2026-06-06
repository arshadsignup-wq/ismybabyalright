export type DevelopmentDomain = 'motor' | 'cognitive' | 'language' | 'social' | 'sensory';

export interface Activity {
  id: string;
  title: string;
  description: string;
  ageRange: { min: number; max: number }; // months
  domain: DevelopmentDomain;
  materials: string[];
  duration: string;
  tip?: string;
  safetyNote?: string;
}

export interface AgeGroup {
  id: string;
  label: string;
  min: number;
  max: number;
  description: string;
}

export interface DomainInfo {
  id: DevelopmentDomain;
  label: string;
  emoji: string;
  description: string;
}

export const AGE_GROUPS: AgeGroup[] = [
  {
    id: '0-3',
    label: '0-3 months',
    min: 0,
    max: 3,
    description: 'Newborns are building foundational reflexes, learning to focus their eyes, and beginning to recognize voices and faces.',
  },
  {
    id: '4-6',
    label: '4-6 months',
    min: 4,
    max: 6,
    description: 'Babies are reaching for objects, rolling over, babbling, and becoming more socially engaged with smiles and laughter.',
  },
  {
    id: '7-9',
    label: '7-9 months',
    min: 7,
    max: 9,
    description: 'Babies are sitting independently, starting to crawl, exploring cause and effect, and understanding simple words.',
  },
  {
    id: '10-12',
    label: '10-12 months',
    min: 10,
    max: 12,
    description: 'Babies are pulling to stand, cruising along furniture, pointing, waving, and saying their first words.',
  },
  {
    id: '13-18',
    label: '13-18 months',
    min: 13,
    max: 18,
    description: 'Toddlers are walking independently, stacking blocks, using simple words, and beginning to engage in pretend play.',
  },
  {
    id: '19-24',
    label: '19-24 months',
    min: 19,
    max: 24,
    description: 'Toddlers are running, climbing, combining two words, sorting shapes, and starting to play alongside other children.',
  },
  {
    id: '25-36',
    label: '25-36 months',
    min: 25,
    max: 36,
    description: 'Children are jumping, pedaling, speaking in sentences, engaging in imaginative play, and learning to take turns.',
  },
];

export const DOMAINS: DomainInfo[] = [
  {
    id: 'motor',
    label: 'Motor',
    emoji: '\u{1F3C3}',
    description: 'Gross and fine motor skills including crawling, walking, grasping, and hand-eye coordination.',
  },
  {
    id: 'cognitive',
    label: 'Cognitive',
    emoji: '\u{1F9E0}',
    description: 'Problem-solving, cause and effect understanding, memory, and logical thinking.',
  },
  {
    id: 'language',
    label: 'Language',
    emoji: '\u{1F4AC}',
    description: 'Babbling, first words, vocabulary growth, and communication skills.',
  },
  {
    id: 'social',
    label: 'Social',
    emoji: '\u{1F91D}',
    description: 'Interaction with caregivers and peers, empathy, cooperation, and emotional regulation.',
  },
  {
    id: 'sensory',
    label: 'Sensory',
    emoji: '\u{1F44B}',
    description: 'Texture exploration, sound awareness, visual tracking, and multi-sensory experiences.',
  },
];

export const ACTIVITIES: Activity[] = [
  // ─── 0-3 months ──────────────────────────────────────────────
  {
    id: 'tummy-time-basics',
    title: 'Tummy Time on Your Chest',
    description:
      'Lay your baby on your chest while you recline at a 45-degree angle. Make eye contact, talk softly, and gently stroke their back. This helps build neck and shoulder strength while providing comforting skin-to-skin contact.',
    ageRange: { min: 0, max: 3 },
    domain: 'motor',
    materials: ['Comfortable reclining surface', 'Blanket'],
    duration: '3-5 minutes, 2-3 times per day',
    tip: 'Start with just 1-2 minutes if your baby fusses and gradually increase as they build strength.',
    safetyNote: 'Always supervise tummy time. Never leave baby unattended on any elevated surface.',
  },
  {
    id: 'high-contrast-cards',
    title: 'High-Contrast Card Gazing',
    description:
      'Hold black-and-white patterned cards or images about 8-12 inches from your baby\'s face. Slowly move them side to side to encourage visual tracking. Newborns see high-contrast patterns most clearly.',
    ageRange: { min: 0, max: 3 },
    domain: 'sensory',
    materials: ['Black and white patterned cards or printed images'],
    duration: '2-5 minutes',
    tip: 'Try stripes, bullseyes, and simple face patterns. Babies are naturally drawn to face-like shapes.',
  },
  {
    id: 'narrate-your-day',
    title: 'Narrate Your Day',
    description:
      'Talk to your baby as you go through daily routines — describe what you are doing during diaper changes, feeding, and bathing. Use a warm, melodic tone. This builds the foundation for language even before baby can respond.',
    ageRange: { min: 0, max: 3 },
    domain: 'language',
    materials: ['None'],
    duration: 'Throughout the day',
    tip: 'Pause after speaking as if waiting for a response. This teaches the rhythm of conversation.',
  },
  {
    id: 'gentle-bicycle-legs',
    title: 'Gentle Bicycle Legs',
    description:
      'Lay your baby on their back and gently move their legs in a cycling motion. This helps relieve gas, strengthens leg muscles, and introduces your baby to movement patterns they will use later for crawling and walking.',
    ageRange: { min: 0, max: 3 },
    domain: 'motor',
    materials: ['Soft mat or blanket'],
    duration: '2-3 minutes',
    tip: 'Sing a song while cycling their legs to make it a multi-sensory experience.',
    safetyNote: 'Use gentle movements only. Never force legs into a position that causes resistance.',
  },
  {
    id: 'face-to-face-mirroring',
    title: 'Face-to-Face Mirroring',
    description:
      'Hold your face close to your baby\'s (about 8-12 inches) and make exaggerated facial expressions — wide smiles, raised eyebrows, open mouth. Wait for your baby to try to mimic you. This is one of the earliest forms of social learning.',
    ageRange: { min: 0, max: 3 },
    domain: 'social',
    materials: ['None'],
    duration: '3-5 minutes',
    tip: 'Babies as young as a few days old can imitate tongue protrusion. Try sticking out your tongue slowly.',
  },
  {
    id: 'rattle-tracking',
    title: 'Rattle Tracking',
    description:
      'Shake a soft rattle gently to one side of your baby\'s head, then slowly move it across their field of vision. This encourages auditory localization (turning toward sound) and visual tracking across the midline.',
    ageRange: { min: 0, max: 3 },
    domain: 'sensory',
    materials: ['Soft rattle or small shaker'],
    duration: '2-4 minutes',
    tip: 'Use rattles with different sounds to see which ones capture your baby\'s attention most.',
    safetyNote: 'Keep the sound gentle. Loud or sudden noises can startle and distress a newborn.',
  },
  {
    id: 'singing-lullabies',
    title: 'Singing Lullabies and Simple Songs',
    description:
      'Sing to your baby during calm moments, feedings, or before sleep. The melody, rhythm, and repetition in songs help babies learn the patterns of language. Your voice is the most soothing sound to your baby.',
    ageRange: { min: 0, max: 3 },
    domain: 'language',
    materials: ['None'],
    duration: '5-10 minutes',
    tip: 'It does not matter if you think you cannot sing. Your baby prefers your voice over any recorded music.',
  },
  {
    id: 'object-cause-effect',
    title: 'Grasping Finger Play',
    description:
      'Place your finger or a small, soft toy in your baby\'s palm to activate the palmar grasp reflex. As they grip, gently pull away slightly so they feel the resistance. This builds early understanding of holding and releasing objects.',
    ageRange: { min: 0, max: 3 },
    domain: 'cognitive',
    materials: ['Your finger', 'Small soft rattle or ring toy'],
    duration: '2-5 minutes',
    tip: 'Try different textures — fabric, smooth plastic, rubber — to introduce varied tactile input.',
  },
  {
    id: 'gentle-massage',
    title: 'Infant Massage',
    description:
      'Using gentle, slow strokes, massage your baby\'s legs, arms, back, and tummy. Use a small amount of baby-safe oil or lotion. This promotes body awareness, relaxation, bonding, and can help with digestion and sleep.',
    ageRange: { min: 0, max: 3 },
    domain: 'social',
    materials: ['Baby-safe oil or lotion (optional)', 'Soft towel'],
    duration: '5-10 minutes',
    tip: 'Follow your baby\'s cues. If they turn away, arch their back, or cry, take a break and try again later.',
  },

  // ─── 4-6 months ──────────────────────────────────────────────
  {
    id: 'reaching-for-toys',
    title: 'Reaching for Dangling Toys',
    description:
      'Hold a colorful toy just within arm\'s reach above your baby while they lie on their back or sit supported. Encourage them to reach and bat at the toy. This develops hand-eye coordination and the concept of intentional movement.',
    ageRange: { min: 4, max: 6 },
    domain: 'motor',
    materials: ['Colorful lightweight toy', 'Play gym or your hands'],
    duration: '5-10 minutes',
    tip: 'Alternate holding the toy on different sides to encourage reaching with both hands.',
  },
  {
    id: 'peekaboo-basic',
    title: 'Peekaboo with a Cloth',
    description:
      'Cover your face with a light cloth, then pull it away saying "Peekaboo!" with an exaggerated happy expression. This classic game teaches object permanence — the understanding that things still exist even when out of sight.',
    ageRange: { min: 4, max: 6 },
    domain: 'cognitive',
    materials: ['Light scarf, burp cloth, or small blanket'],
    duration: '5-10 minutes',
    tip: 'Once your baby starts pulling the cloth away themselves, let them take the lead in the game.',
  },
  {
    id: 'babbling-conversations',
    title: 'Babbling Conversations',
    description:
      'When your baby babbles (ba-ba, da-da, ga-ga), respond as if they said something meaningful. Repeat their sounds back, then add real words. This back-and-forth "serve and return" interaction is critical for language development.',
    ageRange: { min: 4, max: 6 },
    domain: 'language',
    materials: ['None'],
    duration: '5-10 minutes throughout the day',
    tip: 'Research shows that responsive conversational turns matter more than the total number of words a baby hears.',
  },
  {
    id: 'texture-mat',
    title: 'Texture Exploration Mat',
    description:
      'Create a simple sensory experience by placing different fabric squares (silk, terry cloth, fleece, burlap) on the floor for your baby to touch and feel during tummy time or supported sitting. Name each texture as they explore.',
    ageRange: { min: 4, max: 6 },
    domain: 'sensory',
    materials: ['Fabric scraps of different textures', 'Tape or safe mat to attach them to'],
    duration: '5-10 minutes',
    tip: 'Guide their hands gently across each surface and describe what they feel — "smooth," "bumpy," "soft."',
    safetyNote: 'Ensure fabric pieces are securely attached and cannot be pulled loose and mouthed as a choking hazard.',
  },
  {
    id: 'supported-sitting-play',
    title: 'Supported Sitting with Toys',
    description:
      'Prop your baby up with pillows or sit them between your legs and place toys in front of them. This strengthens core muscles needed for independent sitting while giving them a new perspective on the world.',
    ageRange: { min: 4, max: 6 },
    domain: 'motor',
    materials: ['Pillows or Boppy', 'Age-appropriate toys'],
    duration: '5-15 minutes',
    tip: 'Place toys slightly out of reach to encourage leaning and stretching, which builds balance.',
    safetyNote: 'Stay within arm\'s reach at all times as babies can topple sideways without warning.',
  },
  {
    id: 'mirror-play',
    title: 'Mirror Play',
    description:
      'Hold an unbreakable mirror in front of your baby or sit them in front of a wall mirror. Point to their reflection, say their name, and make faces together. Babies are fascinated by faces and this supports self-awareness development.',
    ageRange: { min: 4, max: 6 },
    domain: 'social',
    materials: ['Unbreakable baby-safe mirror'],
    duration: '5-10 minutes',
    tip: 'Tap the mirror and say "Who is that?" to encourage social engagement with their reflection.',
  },
  {
    id: 'cause-effect-squeaky',
    title: 'Squeeze and Squeak Toys',
    description:
      'Give your baby a soft squeaky toy and help them squeeze it. When they realize that their action produces a sound, they are learning cause and effect — one of the foundational concepts of cognitive development.',
    ageRange: { min: 4, max: 6 },
    domain: 'cognitive',
    materials: ['Soft squeaky toy'],
    duration: '5-10 minutes',
    tip: 'Show excitement when the toy squeaks to reinforce that their action caused the result.',
  },
  {
    id: 'roll-over-encouragement',
    title: 'Rolling Over Practice',
    description:
      'Place an enticing toy to the side of your baby during tummy time to motivate them to reach and roll over. Gently guide their hip to show them the rolling motion. Celebrate each attempt with enthusiasm.',
    ageRange: { min: 4, max: 6 },
    domain: 'motor',
    materials: ['Favorite toy', 'Soft play mat'],
    duration: '5-10 minutes',
    tip: 'Practice both directions — many babies learn to roll one way before the other.',
    safetyNote: 'Always practice on the floor, never on an elevated surface like a bed or changing table.',
  },
  {
    id: 'reading-board-books',
    title: 'Reading Board Books Together',
    description:
      'Sit your baby on your lap and read simple board books with bold images. Point to pictures, name objects, and use different voices for characters. Even at this age, babies absorb vocabulary, rhythm, and the joy of shared reading.',
    ageRange: { min: 4, max: 6 },
    domain: 'language',
    materials: ['Board books with large, simple images'],
    duration: '5-10 minutes',
    tip: 'Let your baby touch and mouth the book. Board books are designed to withstand exploration.',
  },

  // ─── 7-9 months ──────────────────────────────────────────────
  {
    id: 'container-play',
    title: 'Fill and Dump Containers',
    description:
      'Give your baby a container and a few small objects (large enough not to be a choking hazard). Show them how to put objects in and dump them out. This repetitive play builds fine motor skills and teaches spatial concepts like "in" and "out."',
    ageRange: { min: 7, max: 9 },
    domain: 'cognitive',
    materials: ['Plastic container or bowl', 'Large wooden blocks or big balls'],
    duration: '10-15 minutes',
    tip: 'Narrate the actions: "In goes the block! Out come the blocks!" to pair language with the concept.',
    safetyNote: 'All objects should pass the toilet-paper-roll test — if it fits through the roll, it is too small.',
  },
  {
    id: 'crawling-obstacle-course',
    title: 'Crawling Obstacle Course',
    description:
      'Create a simple course using pillows, cushions, and tunnels made from cardboard boxes for your baby to crawl over, under, and around. This builds gross motor skills, spatial awareness, and problem-solving.',
    ageRange: { min: 7, max: 9 },
    domain: 'motor',
    materials: ['Couch cushions', 'Pillows', 'Large cardboard box (optional)'],
    duration: '10-20 minutes',
    tip: 'Place a favorite toy at the end of the course as motivation to keep moving forward.',
    safetyNote: 'Keep the course on a carpeted floor and stay close to prevent falls.',
  },
  {
    id: 'clapping-games',
    title: 'Clapping and Rhythm Games',
    description:
      'Sing songs with clapping patterns like "Pat-a-Cake" or "If You\'re Happy and You Know It." Help your baby clap along by gently guiding their hands. This develops rhythm awareness, hand coordination, and social imitation.',
    ageRange: { min: 7, max: 9 },
    domain: 'social',
    materials: ['None'],
    duration: '5-10 minutes',
    tip: 'Exaggerate your clapping motions and facial expressions to keep your baby engaged.',
  },
  {
    id: 'water-play-splashing',
    title: 'Water Splashing Exploration',
    description:
      'Place a shallow tray of warm water on a towel and let your baby splash and pat the water. Add a few floating toys or cups for pouring. Water play provides rich sensory input and introduces concepts like cause and effect.',
    ageRange: { min: 7, max: 9 },
    domain: 'sensory',
    materials: ['Shallow tray or baking pan', 'Warm water', 'Floating toys', 'Towels'],
    duration: '10-15 minutes',
    tip: 'Describe what the water feels like — "wet," "warm," "splashy" — to build descriptive vocabulary.',
    safetyNote: 'Never leave a baby unattended near any amount of water. Keep water level under 1 inch.',
  },
  {
    id: 'wave-bye-bye',
    title: 'Wave and Gesture Practice',
    description:
      'Teach your baby to wave bye-bye, shake their head, and clap by modeling the gestures yourself. Pair each gesture with the words. Gestures are a critical bridge between pre-verbal communication and first words.',
    ageRange: { min: 7, max: 9 },
    domain: 'language',
    materials: ['None'],
    duration: '5 minutes, many times throughout the day',
    tip: 'Use gestures in context — wave when someone actually leaves, clap when something good happens.',
  },
  {
    id: 'pincer-grasp-practice',
    title: 'Puffs and Pincer Grasp Practice',
    description:
      'Place a few dissolvable baby puffs or small soft foods on a high chair tray and let your baby practice picking them up with their thumb and forefinger. The pincer grasp is a key fine motor milestone that enables self-feeding.',
    ageRange: { min: 7, max: 9 },
    domain: 'motor',
    materials: ['Dissolvable baby puffs or small pieces of soft fruit'],
    duration: '10 minutes during snack time',
    tip: 'Start with larger pieces and gradually offer smaller ones as their grip improves.',
    safetyNote: 'Always stay with your baby during feeding. Offer only age-appropriate, dissolvable foods.',
  },
  {
    id: 'object-permanence-game',
    title: 'Object Permanence Hide and Seek',
    description:
      'Hide a toy partially under a blanket and encourage your baby to find it. Gradually hide it completely as they get better at the game. This reinforces that objects continue to exist when hidden — a major cognitive leap.',
    ageRange: { min: 7, max: 9 },
    domain: 'cognitive',
    materials: ['Small toy', 'Light blanket or cloth'],
    duration: '5-10 minutes',
    tip: 'Show excitement when they find the toy to reinforce the reward of discovery.',
  },
  {
    id: 'musical-shakers',
    title: 'Homemade Musical Shakers',
    description:
      'Fill small sealed containers with rice, dried pasta, or beans to create shakers with different sounds. Let your baby shake them, listen, and compare the sounds. This develops auditory discrimination and rhythm.',
    ageRange: { min: 7, max: 9 },
    domain: 'sensory',
    materials: ['Small plastic containers with secure lids', 'Rice, pasta, or dried beans'],
    duration: '5-10 minutes',
    tip: 'Shake in patterns (fast-fast-slow) and see if your baby tries to copy the rhythm.',
    safetyNote: 'Seal containers securely with tape. Small items inside are choking hazards if the lid comes off.',
  },
  {
    id: 'social-games-7m',
    title: 'Interactive Peekaboo Variations',
    description:
      'Play peekaboo around furniture corners, from behind books, or by covering baby\'s face instead of yours. Add suspense by waiting a few seconds before revealing. This builds anticipation, trust, and joyful social connection.',
    ageRange: { min: 7, max: 9 },
    domain: 'social',
    materials: ['Lightweight scarf or cloth'],
    duration: '5-10 minutes',
    tip: 'Let your baby initiate the game by covering their own face or hiding behind objects.',
  },

  // ─── 10-12 months ─────────────────────────────────────────────
  {
    id: 'stacking-blocks',
    title: 'Stacking and Knocking Down Blocks',
    description:
      'Show your baby how to stack 2-3 blocks and then let them knock the tower down. Rebuild and repeat. Stacking teaches spatial reasoning and fine motor control, while knocking down teaches cause and effect — and is tremendous fun.',
    ageRange: { min: 10, max: 12 },
    domain: 'cognitive',
    materials: ['Soft blocks or small cardboard boxes'],
    duration: '10-15 minutes',
    tip: 'Count aloud as you stack: "One, two, three — crash!" This naturally introduces counting.',
  },
  {
    id: 'cruising-practice',
    title: 'Furniture Cruising Course',
    description:
      'Arrange stable furniture pieces close together so your baby can pull up and "cruise" (walk while holding on) from one piece to the next. Place enticing toys along the route to motivate lateral stepping.',
    ageRange: { min: 10, max: 12 },
    domain: 'motor',
    materials: ['Stable, low furniture', 'Motivating toys'],
    duration: '10-20 minutes',
    tip: 'Make sure furniture is stable and will not tip. Bare feet provide better grip than socks.',
    safetyNote: 'Remove any items that could fall or have sharp edges. Pad hard corners with corner guards.',
  },
  {
    id: 'first-words-naming',
    title: 'Naming Everything Game',
    description:
      'Point to objects around your home and name them clearly: "That is a cup. Cup." Repeat key words multiple times. Babies at this age are absorbing vocabulary rapidly and may start saying their first words soon.',
    ageRange: { min: 10, max: 12 },
    domain: 'language',
    materials: ['Everyday household objects'],
    duration: '5-10 minutes throughout the day',
    tip: 'Focus on words that are meaningful to your baby — "mama," "dada," "ball," "dog," "more," "milk."',
  },
  {
    id: 'shape-sorter-intro',
    title: 'Simple Shape Sorter',
    description:
      'Introduce a shape sorter with just 2-3 shapes. Guide your baby\'s hand to match the circle to the round hole first (easiest). This teaches shape recognition, spatial reasoning, and persistence through trial and error.',
    ageRange: { min: 10, max: 12 },
    domain: 'cognitive',
    materials: ['Shape sorter toy (or a container with a hole cut in the lid)'],
    duration: '10-15 minutes',
    tip: 'Start with just the circle shape and add more shapes as your baby masters each one.',
  },
  {
    id: 'push-toy-walking',
    title: 'Push Toy Walking',
    description:
      'Offer a stable push toy or weighted laundry basket for your baby to hold onto and push while taking steps. This builds leg strength, balance, and confidence for independent walking.',
    ageRange: { min: 10, max: 12 },
    domain: 'motor',
    materials: ['Push walker toy or weighted laundry basket'],
    duration: '10-15 minutes',
    tip: 'Walk behind your baby with your hands ready to catch them if they lose balance.',
    safetyNote: 'Avoid baby walkers with wheels that let babies move too fast. Push toys where the baby controls speed are much safer.',
  },
  {
    id: 'sharing-food-social',
    title: 'Sharing Food Practice',
    description:
      'During meals, offer your baby a piece of food and ask them to share one with you. Say "Thank you!" when they hand you something. This teaches early concepts of sharing, generosity, and social reciprocity.',
    ageRange: { min: 10, max: 12 },
    domain: 'social',
    materials: ['Small pieces of age-appropriate food'],
    duration: '5-10 minutes during meals',
    tip: 'Always give the food back or offer a new piece. At this age, sharing is about the gesture, not giving up food.',
  },
  {
    id: 'sensory-bin-10m',
    title: 'Sensory Bin Exploration',
    description:
      'Fill a shallow bin with large pasta shapes, scoops, and cups. Let your baby scoop, pour, and feel the textures. This engages multiple senses simultaneously and builds fine motor skills like scooping and pouring.',
    ageRange: { min: 10, max: 12 },
    domain: 'sensory',
    materials: ['Shallow bin', 'Large pasta shapes', 'Cups and scoops'],
    duration: '10-15 minutes',
    tip: 'Try different fillings over time: oatmeal, shredded paper, or water for varied experiences.',
    safetyNote: 'Supervise closely to prevent eating non-food items. Choose large pasta shapes that are not choking hazards.',
  },
  {
    id: 'point-and-label-books',
    title: 'Point and Label Picture Books',
    description:
      'Read simple picture books and pause on each page to point and name objects. Ask "Where is the dog?" and wait for your baby to point. This develops receptive language (understanding words before speaking them).',
    ageRange: { min: 10, max: 12 },
    domain: 'language',
    materials: ['Board books with clear, labeled images'],
    duration: '5-10 minutes',
    tip: 'Celebrate pointing with enthusiasm. Pointing is a major communication milestone showing intentional communication.',
  },
  {
    id: 'nesting-cups',
    title: 'Nesting and Stacking Cups',
    description:
      'Give your baby a set of nesting cups to stack, nest inside each other, or use for pouring and scooping. This open-ended toy teaches size relationships, sequencing, and hand-eye coordination.',
    ageRange: { min: 10, max: 12 },
    domain: 'cognitive',
    materials: ['Set of nesting/stacking cups'],
    duration: '10-15 minutes',
    tip: 'Show different ways to use the cups — stack them, nest them, pour water through them in the bath.',
  },

  // ─── 13-18 months ─────────────────────────────────────────────
  {
    id: 'ball-rolling-game',
    title: 'Roll the Ball Back and Forth',
    description:
      'Sit facing your toddler and roll a ball back and forth. This simple game teaches turn-taking, hand-eye coordination, and social reciprocity. It is one of the earliest cooperative games toddlers can play.',
    ageRange: { min: 13, max: 18 },
    domain: 'social',
    materials: ['Soft medium-sized ball'],
    duration: '10-15 minutes',
    tip: 'Say "Your turn!" and "My turn!" to reinforce the concept of taking turns.',
  },
  {
    id: 'scribbling-crayons',
    title: 'First Scribbles with Crayons',
    description:
      'Tape a large piece of paper to the table or floor and offer your toddler thick, non-toxic crayons. Let them scribble freely. This develops the fine motor grip they will eventually use for writing and drawing.',
    ageRange: { min: 13, max: 18 },
    domain: 'motor',
    materials: ['Large paper', 'Thick non-toxic crayons', 'Tape'],
    duration: '10-15 minutes',
    tip: 'Do not worry about making recognizable pictures. The act of making marks is the developmental milestone.',
    safetyNote: 'Use only non-toxic, washable crayons. Supervise to prevent eating crayons.',
  },
  {
    id: 'body-parts-game',
    title: 'Where Is Your Nose? Body Parts Game',
    description:
      'Ask your toddler "Where is your nose?" and gently touch their nose, then your own. Repeat with eyes, ears, mouth, tummy, and toes. This builds vocabulary, body awareness, and the ability to follow simple instructions.',
    ageRange: { min: 13, max: 18 },
    domain: 'language',
    materials: ['None'],
    duration: '5-10 minutes',
    tip: 'Start with 2-3 body parts and add more as they master each one. Use a mirror for extra engagement.',
  },
  {
    id: 'simple-puzzles',
    title: 'Knob Puzzles',
    description:
      'Introduce simple wooden puzzles with large knobs and 3-5 pieces. Show your toddler how to remove a piece and fit it back in. Puzzles develop problem-solving, shape recognition, and fine motor skills.',
    ageRange: { min: 13, max: 18 },
    domain: 'cognitive',
    materials: ['Simple knob puzzle with 3-5 pieces'],
    duration: '10-15 minutes',
    tip: 'Start by removing one piece and handing it to your toddler to replace. Gradually increase the challenge.',
  },
  {
    id: 'climbing-stairs-supervised',
    title: 'Supervised Stair Climbing',
    description:
      'With you right behind them, let your toddler practice crawling up a few stairs and sliding back down on their tummy. This builds leg strength, coordination, and confidence with height changes.',
    ageRange: { min: 13, max: 18 },
    domain: 'motor',
    materials: ['Stairs with carpet or non-slip surface'],
    duration: '5-10 minutes',
    tip: 'Teach them to go down feet-first on their tummy before practicing going up.',
    safetyNote: 'Always stay directly behind your toddler on stairs. Keep baby gates in place for unsupervised times.',
  },
  {
    id: 'pretend-phone-call',
    title: 'Pretend Phone Conversations',
    description:
      'Give your toddler a toy phone or old (turned off) phone and pretend to call them. Say "Ring ring! Hello! How are you?" and wait for them to babble or say words back. Pretend play with language boosts communication skills.',
    ageRange: { min: 13, max: 18 },
    domain: 'language',
    materials: ['Toy phone or old phone'],
    duration: '5-10 minutes',
    tip: 'Model both sides of the conversation at first, then let them take over their part.',
  },
  {
    id: 'sand-play',
    title: 'Sand or Cornmeal Scooping',
    description:
      'Fill a bin with clean play sand or cornmeal and provide cups, spoons, and small containers. Let your toddler scoop, pour, and sift. This sensory-rich activity builds fine motor strength and introduces volume concepts.',
    ageRange: { min: 13, max: 18 },
    domain: 'sensory',
    materials: ['Bin', 'Play sand or cornmeal', 'Cups, spoons, small containers'],
    duration: '15-20 minutes',
    tip: 'Bury small toys in the sand and let your toddler dig them out for a treasure hunt experience.',
    safetyNote: 'Supervise closely to prevent eating sand or cornmeal.',
  },
  {
    id: 'stacking-tower-tall',
    title: 'Build a Tall Tower Together',
    description:
      'Work together to stack blocks as high as possible. Take turns adding blocks and cheer when the tower grows. When it falls, say "Uh oh! Let us build it again!" This teaches cooperation, persistence, and spatial reasoning.',
    ageRange: { min: 13, max: 18 },
    domain: 'cognitive',
    materials: ['Blocks of various sizes'],
    duration: '10-15 minutes',
    tip: 'At this age, toddlers can typically stack 2-4 blocks. Do not worry about how tall the tower gets.',
  },
  {
    id: 'dance-party',
    title: 'Dance Party',
    description:
      'Put on music with a clear beat and dance with your toddler. Hold their hands, sway, bounce, and spin gently. Dancing develops balance, rhythm, body awareness, and is an excellent way to share joy together.',
    ageRange: { min: 13, max: 18 },
    domain: 'social',
    materials: ['Music player or phone with speakers'],
    duration: '10-15 minutes',
    tip: 'Try different genres — children often enjoy music with strong rhythms and repetitive lyrics.',
  },

  // ─── 19-24 months ─────────────────────────────────────────────
  {
    id: 'sorting-colors',
    title: 'Color Sorting Game',
    description:
      'Gather objects of 2-3 colors and set out matching colored bowls or containers. Help your toddler sort objects by color. This develops categorization skills, color recognition, and following multi-step instructions.',
    ageRange: { min: 19, max: 24 },
    domain: 'cognitive',
    materials: ['Colored objects (blocks, pompoms, socks)', 'Matching colored bowls'],
    duration: '10-15 minutes',
    tip: 'Start with just 2 colors and add a third once your child masters sorting two.',
  },
  {
    id: 'kicking-ball',
    title: 'Kick the Ball',
    description:
      'Place a large, soft ball on the ground and show your toddler how to kick it. Take turns kicking it back and forth. Kicking requires balance, coordination, and the ability to stand on one foot momentarily.',
    ageRange: { min: 19, max: 24 },
    domain: 'motor',
    materials: ['Large soft ball'],
    duration: '10-15 minutes',
    tip: 'Start with a stationary ball and progress to kicking a slowly rolling ball.',
    safetyNote: 'Play in a soft area in case of falls. Toddlers often tumble when learning to kick.',
  },
  {
    id: 'two-word-phrases',
    title: 'Two-Word Phrase Expansion',
    description:
      'When your toddler says a single word like "milk," expand it to a two-word phrase: "More milk?" or "Milk please." This models how to combine words without correcting or pressuring them. It naturally teaches sentence building.',
    ageRange: { min: 19, max: 24 },
    domain: 'language',
    materials: ['None'],
    duration: 'Throughout the day',
    tip: 'Add just one word to whatever your toddler says. If they say "car," say "Big car!" or "Car go!"',
  },
  {
    id: 'pretend-cooking',
    title: 'Pretend Cooking Play',
    description:
      'Set up a play kitchen area with pots, spoons, and play food (or real but safe items like empty containers). Let your toddler stir, pour, and "cook." Pretend play develops imagination, language, and social understanding.',
    ageRange: { min: 19, max: 24 },
    domain: 'social',
    materials: ['Pots', 'Wooden spoons', 'Play food or empty containers'],
    duration: '15-20 minutes',
    tip: 'Sit down and "eat" what they prepare. Ask them "What did you make?" to encourage verbal description.',
  },
  {
    id: 'playdough-squeezing',
    title: 'Playdough Squeezing and Rolling',
    description:
      'Give your toddler a ball of playdough and show them how to squeeze, pinch, poke, roll, and flatten it. This strengthens the small muscles in their hands and fingers that are needed for later writing skills.',
    ageRange: { min: 19, max: 24 },
    domain: 'sensory',
    materials: ['Non-toxic playdough (store-bought or homemade)', 'Rolling pin (optional)', 'Cookie cutters (optional)'],
    duration: '15-20 minutes',
    tip: 'Make homemade playdough with your child: 1 cup flour, 1/2 cup salt, 1 tbsp oil, 1/2 cup water, food coloring.',
    safetyNote: 'Use non-toxic playdough only. Supervise to prevent eating. Homemade dough is safest.',
  },
  {
    id: 'running-and-stopping',
    title: 'Red Light, Green Light',
    description:
      'Play a simplified version: say "Go!" and run together, then "Stop!" and freeze. This game teaches body control, impulse regulation, and listening skills — all critical for toddler development.',
    ageRange: { min: 19, max: 24 },
    domain: 'motor',
    materials: ['Open space indoors or outdoors'],
    duration: '10-15 minutes',
    tip: 'Make it silly by freezing in funny poses. Laughter makes the learning stick.',
  },
  {
    id: 'simple-matching',
    title: 'Simple Matching Game',
    description:
      'Lay out 3-4 pairs of matching objects (two spoons, two socks, two blocks) and ask your toddler to find the ones that "go together." This develops visual discrimination and early classification skills.',
    ageRange: { min: 19, max: 24 },
    domain: 'cognitive',
    materials: ['Pairs of matching household objects'],
    duration: '10 minutes',
    tip: 'Start with very different objects and gradually use more similar-looking pairs to increase the challenge.',
  },
  {
    id: 'action-songs',
    title: 'Action Songs with Movements',
    description:
      'Sing songs like "Head, Shoulders, Knees, and Toes," "Itsy Bitsy Spider," or "Wheels on the Bus" with the corresponding hand and body movements. This connects language with physical action and builds memory.',
    ageRange: { min: 19, max: 24 },
    domain: 'language',
    materials: ['None'],
    duration: '5-10 minutes',
    tip: 'Slow the songs down so your toddler can follow along with both the words and the movements.',
  },
  {
    id: 'painting-with-water',
    title: 'Painting with Water',
    description:
      'Give your toddler a wide paintbrush and a cup of water. Let them "paint" on the sidewalk, a fence, or dark-colored paper. They get the sensory experience of painting without the mess, and marks magically disappear as they dry.',
    ageRange: { min: 19, max: 24 },
    domain: 'sensory',
    materials: ['Wide paintbrush', 'Cup of water'],
    duration: '10-20 minutes',
    tip: 'This activity is perfect for outdoor play. Talk about how the marks appear and then disappear.',
  },

  // ─── 25-36 months ─────────────────────────────────────────────
  {
    id: 'scissors-practice',
    title: 'Snipping with Safety Scissors',
    description:
      'Give your child safety scissors and strips of paper to snip. Start with single cuts across narrow strips before progressing to cutting along lines. Scissor skills develop hand strength, bilateral coordination, and focus.',
    ageRange: { min: 25, max: 36 },
    domain: 'motor',
    materials: ['Safety scissors', 'Strips of paper or card stock'],
    duration: '10-15 minutes',
    tip: 'Hold the paper strip taut for them at first. Cutting playdough with scissors is an easier starting point.',
    safetyNote: 'Use only blunt-tip safety scissors designed for toddlers. Supervise all cutting activities.',
  },
  {
    id: 'counting-stairs',
    title: 'Counting Steps on Stairs',
    description:
      'Count aloud as you walk up and down stairs together. "One, two, three, four, five — we are at the top!" This pairs physical activity with early math concepts and makes a daily routine into a learning opportunity.',
    ageRange: { min: 25, max: 36 },
    domain: 'cognitive',
    materials: ['Stairs'],
    duration: '2-5 minutes each time you use stairs',
    tip: 'Eventually pause and let your child fill in the next number. They will start to anticipate the counting pattern.',
  },
  {
    id: 'storytelling-pictures',
    title: 'Make Up Stories from Pictures',
    description:
      'Show your child a picture from a book or magazine and ask "What do you think is happening?" Help them create a simple story. This develops narrative skills, imagination, vocabulary, and the ability to sequence events.',
    ageRange: { min: 25, max: 36 },
    domain: 'language',
    materials: ['Picture books or magazines with clear images'],
    duration: '10-15 minutes',
    tip: 'Ask open-ended questions: "What happens next?" or "How does the dog feel?" to encourage elaboration.',
  },
  {
    id: 'cooperative-building',
    title: 'Cooperative Building Projects',
    description:
      'Build a structure together using blocks, boxes, or cushions. Take turns adding pieces and discuss what you are building — a castle, a house, a bridge. This teaches cooperation, planning, and spatial reasoning.',
    ageRange: { min: 25, max: 36 },
    domain: 'social',
    materials: ['Blocks', 'Cardboard boxes', 'Cushions'],
    duration: '15-20 minutes',
    tip: 'Let your child take the lead on what to build. Follow their ideas even if the result is unconventional.',
  },
  {
    id: 'sensory-walk',
    title: 'Barefoot Sensory Walk',
    description:
      'Create a path of different textures — grass, sand, smooth stones, a wet towel, bubble wrap, carpet squares — and walk along it barefoot together. Describe each sensation. This develops tactile awareness and descriptive language.',
    ageRange: { min: 25, max: 36 },
    domain: 'sensory',
    materials: ['Various textured surfaces (towels, bubble wrap, carpet samples, grass, sand)'],
    duration: '10-15 minutes',
    tip: 'Set this up outdoors for even more variety. Add warm and cool surfaces for temperature exploration.',
    safetyNote: 'Check all surfaces for sharp objects or splinters before walking barefoot.',
  },
  {
    id: 'jumping-games',
    title: 'Jumping Practice and Games',
    description:
      'Practice jumping with both feet off the ground — jump over a line on the floor, jump off a low step, jump into hula hoops or taped circles. Jumping with both feet requires significant coordination and leg strength.',
    ageRange: { min: 25, max: 36 },
    domain: 'motor',
    materials: ['Tape or chalk for floor markings', 'Low step (optional)'],
    duration: '10-15 minutes',
    tip: 'Hold both hands at first to help with balance. Celebrate every attempt, not just the successful jumps.',
    safetyNote: 'Practice on soft surfaces. Ensure the landing area is clear of toys and obstacles.',
  },
  {
    id: 'pattern-making',
    title: 'Simple Pattern Making',
    description:
      'Create simple patterns with objects — red block, blue block, red block, blue block — and ask your child to continue the pattern. This introduces early math concepts of sequencing and prediction.',
    ageRange: { min: 25, max: 36 },
    domain: 'cognitive',
    materials: ['Colored blocks, beads, or buttons', 'Or use snacks like cheerios and blueberries'],
    duration: '10 minutes',
    tip: 'Start with AB patterns (two alternating items) before trying ABC or AAB patterns.',
  },
  {
    id: 'emotional-vocabulary',
    title: 'Feelings and Emotions Talk',
    description:
      'Use pictures of faces or your own expressions to name emotions: happy, sad, angry, scared, surprised. Ask your child how a character in a book feels and why. Emotional vocabulary helps children manage their own big feelings.',
    ageRange: { min: 25, max: 36 },
    domain: 'social',
    materials: ['Books about feelings', 'Emotion cards or face pictures (optional)'],
    duration: '10-15 minutes',
    tip: 'Label your own emotions throughout the day: "I feel frustrated because the lid will not open." This normalizes talking about feelings.',
  },
  {
    id: 'pouring-practice',
    title: 'Pouring Practice with Cups',
    description:
      'Give your child two small pitchers or cups and a tray. Let them practice pouring water, rice, or dry beans from one to the other. Pouring develops wrist control, focus, and the ability to do practical life tasks independently.',
    ageRange: { min: 25, max: 36 },
    domain: 'motor',
    materials: ['Small pitchers or cups', 'Tray', 'Water, rice, or dry beans'],
    duration: '10-15 minutes',
    tip: 'Start with dry materials like rice before moving to water. Use a tray to contain spills.',
  },
  {
    id: 'rhyming-games',
    title: 'Rhyming Word Games',
    description:
      'Say a word and ask your child to think of words that rhyme — "cat, hat, bat, sat." Or read rhyming books and pause before the rhyming word to let them fill it in. Rhyming awareness is a strong predictor of later reading success.',
    ageRange: { min: 25, max: 36 },
    domain: 'language',
    materials: ['Rhyming picture books (Dr. Seuss is excellent)'],
    duration: '10 minutes',
    tip: 'Accept nonsense words that rhyme. "Cat, hat, zat!" The sound awareness is what matters, not real words.',
  },
  {
    id: 'nature-collection',
    title: 'Nature Collection Walk',
    description:
      'Take a walk outdoors and collect interesting natural items — leaves, sticks, rocks, pine cones, flowers. Back home, sort, compare, and talk about what you found. This combines sensory exploration, language, and early science.',
    ageRange: { min: 25, max: 36 },
    domain: 'sensory',
    materials: ['Bag or basket for collecting', 'Nature items found outdoors'],
    duration: '20-30 minutes',
    tip: 'Ask "What does it feel like? What does it smell like? Is it heavy or light?" to build descriptive vocabulary.',
    safetyNote: 'Teach your child not to put natural items in their mouth. Wash hands after handling outdoor materials.',
  },
  {
    id: 'imaginative-roleplay',
    title: 'Imaginative Role Play',
    description:
      'Set up simple pretend play scenarios — doctor visit, grocery store, firefighter rescue. Provide basic props and let your child lead the story. Imaginative play develops language, empathy, problem-solving, and social skills simultaneously.',
    ageRange: { min: 25, max: 36 },
    domain: 'cognitive',
    materials: ['Dress-up clothes or hats', 'Simple props (toy stethoscope, empty food boxes, play phone)'],
    duration: '15-30 minutes',
    tip: 'Follow your child\'s narrative. Ask questions about what is happening to extend the play without taking over.',
  },
];

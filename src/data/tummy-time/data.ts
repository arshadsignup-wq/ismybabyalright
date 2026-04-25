export interface TummyTimeByAge {
  ageRange: string;
  dailyGoal: string;
  sessionLength: string;
  positions: string[];
  tips: string[];
  whatToExpect: string;
}

export interface TummyTimeTroubleshooting {
  problem: string;
  solutions: string[];
}

export const tummyTimeByAge: TummyTimeByAge[] = [
  {
    ageRange: "Newborn (0-2 weeks)",
    dailyGoal: "3-5 minutes total, spread throughout the day",
    sessionLength: "1-2 minutes at a time",
    positions: [
      "Chest-to-chest on your body while you recline  -  this counts as tummy time",
      "Across your lap while you gently pat or rub their back",
      "On a firm, flat surface with a thin rolled towel under their chest for slight support",
    ],
    tips: [
      "Start on your chest  -  skin-to-skin is perfect first tummy time",
      "Try after diaper changes when baby is already undressed and alert",
      "Keep sessions very short  -  even 30 seconds counts",
      "Stop immediately if baby falls asleep (safe sleep = on their back)",
    ],
    whatToExpect:
      "Baby will likely turn their head to one side and may not lift it at all. Legs will be tucked under. This is completely normal  -  they are building foundational neck strength just by being in this position.",
  },
  {
    ageRange: "2 weeks - 1 month",
    dailyGoal: "10-15 minutes total, spread across the day",
    sessionLength: "1-3 minutes per session",
    positions: [
      "Chest-to-chest while you recline at a 30-45 degree angle",
      "Across your lap (belly down on your thighs)",
      "On a play mat or blanket on the floor",
      "Carried in a football hold (face-down along your forearm)",
    ],
    tips: [
      "Get down on the floor face-to-face  -  your face is the best motivator",
      "Use a high-contrast black-and-white card or book at eye level",
      "Try tummy time when baby is most alert (usually after a nap, not right after a feed)",
      "3-5 short sessions per day is better than one long one",
    ],
    whatToExpect:
      "Baby may briefly lift and turn their head. Movements will be jerky. They may fuss after 1-2 minutes  -  that is their limit right now, and it is normal. Gradually they will tolerate longer sessions.",
  },
  {
    ageRange: "1-2 months",
    dailyGoal: "15-30 minutes total per day",
    sessionLength: "3-5 minutes per session",
    positions: [
      "On a play mat or blanket on the floor",
      "Propped on a nursing pillow (Boppy) for slight elevation",
      "On your chest while you talk and make eye contact",
      "Across your lap with gentle bouncing of your knees",
    ],
    tips: [
      "Place a small, unbreakable mirror in front of baby  -  they love looking at faces, even their own",
      "Sing or talk to them from different angles to encourage head turning",
      "If baby has a head-turning preference, place interesting things on the less-preferred side",
      "Roll up a small receiving blanket under their chest if they struggle with flat surface",
    ],
    whatToExpect:
      "Baby can lift their head to about 45 degrees briefly. They may push up slightly on forearms. Head control is still wobbly. You may notice them starting to track your face or a toy while on their tummy.",
  },
  {
    ageRange: "2-3 months",
    dailyGoal: "30-60 minutes total per day",
    sessionLength: "5-10 minutes per session",
    positions: [
      "On the floor with toys arranged in a semi-circle for reaching",
      "Propped on forearms with elbows under shoulders (help position them)",
      "On your chest while you recline, now with more interaction",
      "Over a rolled towel or small exercise ball (with support) for variety",
    ],
    tips: [
      "Place toys just out of reach to encourage early reaching and pivoting",
      "Use crinkly toys, rattles, or anything that makes sound at eye level",
      "Tummy time on different surfaces (play mat, blanket on grass) adds sensory variety",
      "This is a great age to start a regular tummy time routine  -  same times each day",
    ],
    whatToExpect:
      "Baby can lift head to 45-90 degrees and hold it steadier. Forearm propping becomes more consistent. They start bearing weight on their arms. You may see early attempts to push up and some purposeful reaching toward toys.",
  },
  {
    ageRange: "3-4 months",
    dailyGoal: "60-90 minutes total per day",
    sessionLength: "10-15 minutes per session",
    positions: [
      "On the floor with toys spread around to encourage pivoting and reaching",
      "Propped up on hands (some babies start this)  -  place something interesting ahead",
      "On different textured surfaces for sensory exploration",
      "Side-lying play (an alternative that still builds core strength)",
    ],
    tips: [
      "Encourage weight shifting by placing toys to the side, not just in front",
      "Let baby practice mini push-ups  -  they are building the muscles for rolling",
      "Place baby on tummy near a sibling or pet (supervised) for motivation",
      "If baby starts trying to roll, give them space and cheer them on",
    ],
    whatToExpect:
      "Baby holds head at 90 degrees with good control. They push up on extended arms (or are close to it). Reaching for toys with one hand while supporting with the other. Some babies begin rolling from tummy to back around this time  -  this is a milestone.",
  },
  {
    ageRange: "4-6 months",
    dailyGoal: "60-90+ minutes total per day (many babies choose to play on their tummy)",
    sessionLength: "15-20+ minutes per session",
    positions: [
      "On the floor with freedom to pivot 360 degrees and reach in all directions",
      "On hands with extended arms (full push-up position)",
      "Airplane/Superman pose  -  arms and legs lifted off the ground simultaneously",
      "On a slightly elevated surface like a firm wedge for different perspective",
    ],
    tips: [
      "At this stage, many babies enjoy tummy time  -  let them play freely",
      "Place toys in a full circle to encourage pivoting and eventually crawling motion",
      "Let baby spend time on the floor outside of tummy time too  -  floor play builds all motor skills",
      "If baby rolls to back, they may roll right back to tummy  -  they are practicing",
    ],
    whatToExpect:
      "Baby has strong head and chest control. They pivot in circles on their belly, reaching for toys. They may rock on hands and knees (pre-crawling). Rolling both directions is common. Some babies begin army crawling or creeping. Tummy time is becoming just regular play time on the floor.",
  },
];

export const troubleshooting: TummyTimeTroubleshooting[] = [
  {
    problem: "Baby hates tummy time and screams",
    solutions: [
      "Start on your chest  -  it does not feel like tummy time to them, but it works the same muscles",
      "Keep sessions extremely short (even 30 seconds) and gradually increase",
      "Get face-to-face on the floor so baby can see you  -  your face is the best motivator",
      "Try different times of day  -  after a nap when baby is rested and alert works best",
      "Use a rolled towel or nursing pillow under the chest for slight elevation and comfort",
      "Some fussing is expected and okay  -  crying hard is your cue to stop and try again later",
    ],
  },
  {
    problem: "Baby falls asleep during tummy time",
    solutions: [
      "Try tummy time when baby is most alert (right after a nap, not during a drowsy window)",
      "If baby falls asleep, gently roll them onto their back  -  safe sleep is always on the back",
      "Never leave a sleeping baby on their tummy unsupervised",
      "Engage baby with sounds, toys, and your voice to keep them stimulated",
      "Falling asleep occasionally means baby is comfortable  -  just reposition them safely",
    ],
  },
  {
    problem: "Baby spits up during tummy time",
    solutions: [
      "Wait at least 20-30 minutes after feeding before tummy time",
      "Try shorter sessions if spit-up is frequent",
      "Keep baby slightly elevated with a rolled towel or nursing pillow under their chest",
      "Some spit-up during tummy time is normal  -  the pressure on the belly can push milk up",
      "Have a burp cloth handy underneath baby's head",
      "If spit-up is forceful, excessive, or baby seems in pain, talk to your pediatrician about reflux",
    ],
  },
  {
    problem: "Baby cries immediately when placed on tummy",
    solutions: [
      "Start with chest-to-chest on your body instead of on the floor",
      "Try the football hold (carrying face-down along your forearm) as a gentler introduction",
      "Lay down on the floor face-to-face and talk, sing, or make silly sounds",
      "Use a high-contrast toy or picture at eye level as a distraction",
      "Gradually transition from your chest to a flat surface over days or weeks  -  no rush",
      "Even a few seconds of tolerating tummy time builds strength  -  short wins add up",
    ],
  },
  {
    problem: "Baby with reflux  -  tummy time seems impossible",
    solutions: [
      "Always wait at least 30 minutes after feeding  -  longer if your doctor recommends it",
      "Use an inclined surface (your chest while reclining, or a nursing pillow) rather than flat floor",
      "Across-the-lap tummy time with gentle back pats can be more comfortable for reflux babies",
      "Keep sessions very short (1-2 minutes) and do more sessions per day instead of longer ones",
      "Talk to your pediatrician  -  they may recommend specific positioning or timing",
      "Reflux improves significantly by 4-6 months for most babies, and tummy time gets easier then",
    ],
  },
  {
    problem: "Baby has a flat spot (positional plagiocephaly)",
    solutions: [
      "Tummy time is one of the best treatments  -  it takes pressure off the flat area",
      "Increase tummy time gradually to help reshape the head while skull bones are still soft",
      "During tummy time, position toys to encourage baby to turn their head toward the non-flat side",
      "Alternate which direction baby's head faces during sleep (reposition after they fall asleep)",
      "Hold baby upright (in a carrier or arms) when awake to reduce time on the back of the head",
      "Discuss with your pediatrician  -  severe cases may need a helmet, but most resolve with positioning",
    ],
  },
];

export const benefits: string[] = [
  "Strengthens neck, shoulder, arm, and core muscles needed for rolling, sitting, crawling, and walking",
  "Prevents flat spots on the back of the head (positional plagiocephaly) by reducing time on the back",
  "Develops visual tracking skills as baby learns to follow objects and faces while prone",
  "Builds hand-eye coordination through reaching and grasping during floor play",
  "Promotes sensory development through exposure to different textures, perspectives, and body awareness",
  "Supports healthy motor milestone progression  -  babies who get regular tummy time tend to reach motor milestones on schedule",
  "Helps with digestion and can reduce gas discomfort by applying gentle pressure to the abdomen",
  "Encourages early weight-bearing through the arms, which builds the foundation for fine motor skills like writing",
];

export interface QuizQuestion {
  id: number;
  scenario: string;
  options: {
    text: string;
    style: "responsive" | "structured" | "gentle" | "instinctive";
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    scenario:
      "Your toddler throws food on the floor during dinner for the third time in a row.",
    options: [
      {
        text: "I watch their cues closely. Maybe they're full, overstimulated, or exploring cause and effect. I calmly remove the plate and try again later.",
        style: "responsive",
      },
      {
        text: "We have a clear rule: food stays on the table. I remind them of the rule calmly, and if it happens again, mealtime is over.",
        style: "structured",
      },
      {
        text: "I get down to their level and say, 'I see you're throwing your food. That tells me you might be all done. Can you show me the sign for all done?'",
        style: "gentle",
      },
      {
        text: "Eh, toddlers throw food. I'll wipe it up and not make a big deal about it. They'll grow out of it when they're ready.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 2,
    scenario:
      "Your baby wakes up crying at 2am for the third time tonight.",
    options: [
      {
        text: "I go to them right away every time. They need to know I'm here. I check if they're hungry, wet, or just need comfort.",
        style: "responsive",
      },
      {
        text: "I follow our sleep training plan. I wait the agreed-upon interval before going in, and keep the interaction brief and soothing.",
        style: "structured",
      },
      {
        text: "I go to them, hold them, and softly say, 'I know this is hard. You're safe. I'm right here.' I stay as long as they need.",
        style: "gentle",
      },
      {
        text: "I listen for a minute to see if it's a real cry or just fussing. If they seem okay, I give them a chance to settle. If not, I go in.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 3,
    scenario:
      "Your toddler hits another child at the playground.",
    options: [
      {
        text: "I immediately step in to comfort the other child and check on my toddler. I look for what triggered it - were they frustrated or overwhelmed?",
        style: "responsive",
      },
      {
        text: "I calmly but firmly say, 'We don't hit. Hitting hurts.' I have them sit with me for a brief break, then we practice gentle touches.",
        style: "structured",
      },
      {
        text: "I kneel down and say, 'You hit your friend and that hurt them. You seem really frustrated. Let's find a way to tell them what you need with words.'",
        style: "gentle",
      },
      {
        text: "I separate them, make sure the other child is okay, and redirect my toddler to a different activity. Kids this age are still learning - they'll figure it out.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 4,
    scenario:
      "Your baby refuses to nap even though they're clearly exhausted - rubbing their eyes, yawning, fussy.",
    options: [
      {
        text: "I tune into what might be different today. New tooth coming? Growth spurt? I adjust my approach - maybe they need more rocking or a different environment.",
        style: "responsive",
      },
      {
        text: "I stick with our nap routine because consistency helps them wind down. Dim lights, white noise, sleep sack - same sequence every time.",
        style: "structured",
      },
      {
        text: "I hold them close and say softly, 'I know you're tired and fighting sleep is so hard. I'm going to help your body relax.' I match their energy and slowly bring it down.",
        style: "gentle",
      },
      {
        text: "If the nap isn't happening after a reasonable try, I let it go. We'll do a quiet activity instead and catch the next sleep window.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 5,
    scenario:
      "Your toddler has a full meltdown in the grocery store because you won't buy a toy.",
    options: [
      {
        text: "I crouch down, stay calm, and offer comfort. I know they can't regulate big emotions yet, so I become their anchor until the storm passes.",
        style: "responsive",
      },
      {
        text: "I calmly acknowledge their feelings but hold the boundary: 'I know you want that, but we're not buying toys today. You can be upset, and that's okay.'",
        style: "structured",
      },
      {
        text: "I sit right there in the aisle with them and narrate: 'You really wanted that toy and hearing no feels so disappointing. It's okay to feel sad about it.'",
        style: "gentle",
      },
      {
        text: "I stay calm and don't give in, but I also don't lecture. I might scoop them up, finish the trip quickly, and talk about it later when they're calm.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 6,
    scenario:
      "Your child doesn't want to share their favorite toy with a visiting friend.",
    options: [
      {
        text: "I watch the situation first. Sharing is hard at this age. I might suggest they pick a few toys to put away before the friend arrives next time.",
        style: "responsive",
      },
      {
        text: "Before the playdate, we set expectations: 'Your friend is coming. Let's pick three toys to share and put your special one away.' Clear plan, fewer surprises.",
        style: "structured",
      },
      {
        text: "I validate both kids' feelings: 'You love that toy and don't want to share it right now. And your friend wants a turn. Let's figure this out together.'",
        style: "gentle",
      },
      {
        text: "I let them work it out for a bit before stepping in. Kids learn social skills through some trial and error. I'll redirect if it gets heated.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 7,
    scenario:
      "Your baby clings to you and cries when a relative wants to hold them.",
    options: [
      {
        text: "I keep holding my baby and let the relative interact while baby stays in my arms. When baby seems comfortable, I might offer a gentle transition.",
        style: "responsive",
      },
      {
        text: "I explain to the relative that baby needs a warm-up period. I suggest they sit nearby, talk softly, and let baby come to them on their own schedule.",
        style: "structured",
      },
      {
        text: "I say to my baby, 'You feel safer with me right now, and that's okay. Grandma is going to stay close and when you're ready, you can go to her.'",
        style: "gentle",
      },
      {
        text: "I trust my gut - if baby isn't feeling it, I'm not going to force it. I give a quick 'they're going through a clingy phase' and move on.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 8,
    scenario:
      'Your toddler says "no" to everything you suggest - food, clothes, activities, everything.',
    options: [
      {
        text: "I recognize this is about autonomy, not defiance. I offer two acceptable choices so they feel in control: 'Do you want the blue shirt or the red shirt?'",
        style: "responsive",
      },
      {
        text: "I keep our routine but build in choices where possible. Some things aren't negotiable (car seat, brushing teeth), but I let them pick between options for other things.",
        style: "structured",
      },
      {
        text: "I name it: 'You want to decide for yourself! That's a big feeling. Let's find some things you CAN say yes to.' I make it playful.",
        style: "gentle",
      },
      {
        text: "I don't take it personally. The 'no' phase is normal. I stay easygoing, pick my battles, and sometimes just go with their choice when it doesn't really matter.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 9,
    scenario:
      "Bedtime has become a 45-minute negotiation every single night. More water, one more book, leave the door open, check for monsters.",
    options: [
      {
        text: "I think about what might be driving this. Are they anxious? Overtired? Getting enough connection time during the day? I adjust based on what I notice.",
        style: "responsive",
      },
      {
        text: "I create a clear, predictable bedtime chart: bath, pajamas, two books, one song, goodnight. We review it together so expectations are set.",
        style: "structured",
      },
      {
        text: "I acknowledge their feelings first: 'It's hard to stop playing and go to sleep. You wish you could stay up with us.' Then I gently hold the boundary while staying warm.",
        style: "gentle",
      },
      {
        text: "I keep it simple and low-key. Some nights will be harder than others. I do what works tonight and don't stress about perfecting a system.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 10,
    scenario:
      "Your child is afraid of the dark and won't fall asleep alone in their room.",
    options: [
      {
        text: "I take the fear seriously and make changes - a nightlight, a comfort object, or sitting nearby until they feel safe. I gradually move further away over time.",
        style: "responsive",
      },
      {
        text: "I set up a 'brave plan' together: a special nightlight, a monster-spray bottle, and a step-by-step process for bedtime that they help create.",
        style: "structured",
      },
      {
        text: "I sit with them and say, 'The dark feels scary to you and that's a real feeling. Let's talk about what would help you feel safer.' I listen without dismissing.",
        style: "gentle",
      },
      {
        text: "I add a nightlight and keep it chill. If they need me to sit with them for a while, that's fine. This phase will pass.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 11,
    scenario:
      "Your toddler keeps grabbing things they shouldn't - your phone, glasses off your face, items on low shelves.",
    options: [
      {
        text: "I pay attention to what they're drawn to and why. Are they exploring textures? Cause and effect? I redirect to similar safe items that satisfy the same curiosity.",
        style: "responsive",
      },
      {
        text: "I childproof what I can and set clear, consistent limits for the rest: 'That's not for touching. Here's what you can touch.' Same response each time.",
        style: "structured",
      },
      {
        text: "I explain why in simple terms: 'That could break and I want to keep you safe. I know it looks really interesting though! Let's find something you CAN explore.'",
        style: "gentle",
      },
      {
        text: "I move the most tempting stuff out of reach and don't sweat the rest too much. They're curious, that's healthy. I redirect when needed.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 12,
    scenario:
      "Your baby gets upset and starts crying every time you leave the room, even for a moment.",
    options: [
      {
        text: "I respond to their distress quickly and consistently. I might narrate when I leave: 'I'm going to the kitchen, I'll be right back.' I peek around the corner to reassure them.",
        style: "responsive",
      },
      {
        text: "I practice brief separations during calm moments - stepping away for a few seconds, then returning with a smile. I slowly build up the time.",
        style: "structured",
      },
      {
        text: "I acknowledge their feelings: 'You get worried when I leave. That makes sense - you love being near me. I always come back.' I keep reassuring them.",
        style: "gentle",
      },
      {
        text: "Separation anxiety is a normal phase. I try not to sneak away and I always say a quick bye, but I know they'll be fine and adjust on their own timeline.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 13,
    scenario:
      "Your child refuses to eat vegetables - pushes them away, makes faces, and says they're yucky.",
    options: [
      {
        text: "I keep offering vegetables without pressure, watching for which ones they're more open to. I notice they eat better when they help prepare the food, so I involve them more.",
        style: "responsive",
      },
      {
        text: "I follow the division of responsibility - I decide what's served, they decide how much to eat. Veggies appear at every meal, no short-order cooking, no bribing.",
        style: "structured",
      },
      {
        text: "I say, 'You don't like how that tastes right now, and that's okay. Your taste buds are still learning. It'll be here if you want to try it.' Zero pressure.",
        style: "gentle",
      },
      {
        text: "I don't force it. I mix veggies into things they like when I can, keep offering them casually, and figure their palate will expand over time.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 14,
    scenario:
      "Your toddler bites another child during a playdate.",
    options: [
      {
        text: "I intervene immediately and tend to the other child first. Then I look at what happened right before the bite - my toddler was probably frustrated or overstimulated. I help them process it.",
        style: "responsive",
      },
      {
        text: "I address it right away: 'No biting. Biting hurts.' I check on the other child, briefly remove my toddler from the situation, and then help them rejoin when they're calm.",
        style: "structured",
      },
      {
        text: "After comforting the other child, I turn to my toddler: 'You bit your friend because you wanted that toy. Biting hurts. Next time, can you say MY TURN? Let's practice.'",
        style: "gentle",
      },
      {
        text: "I handle it in the moment - comfort the other child, separate mine. I know biting at this age is a communication thing, not a character flaw. I keep playdates short for now.",
        style: "instinctive",
      },
    ],
  },
  {
    id: 15,
    scenario:
      "Your child has a full tantrum in the checkout line because they can't have candy.",
    options: [
      {
        text: "I stay calm and present. I know they're overwhelmed by all the tempting stuff at kid-eye level. I hold them or crouch down, ride it out, and don't give in or get angry.",
        style: "responsive",
      },
      {
        text: "I hold the limit kindly but firmly. We talked about this before coming to the store. I might say, 'I know this is hard. We said no candy today, and I'm going to stick with that.'",
        style: "structured",
      },
      {
        text: "I get on their level: 'Oh, you really, really want that candy and it's so hard to hear no. Your body is showing me how upset you are, and I get it. I'm right here.'",
        style: "gentle",
      },
      {
        text: "I stay cool, don't make a scene or give in. I might distract them with something else, or just calmly finish checkout. Everyone's been there - no shame in a public tantrum.",
        style: "instinctive",
      },
    ],
  },
];

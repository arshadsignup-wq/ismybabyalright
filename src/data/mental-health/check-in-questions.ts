import type { CheckInQuestion } from "./types";

export const checkInQuestions: CheckInQuestion[] = [
  {
    id: "sleep",
    text: "Are you getting at least one stretch of 3+ hours of sleep?",
    positiveAnswer: "Good  -  even small blocks of sleep make a big difference for mental health.",
    concernAnswer: "Chronic sleep deprivation affects everything. Can your partner, a family member, or a friend take a shift so you can sleep?",
  },
  {
    id: "eating",
    text: "Have you eaten a real meal today?",
    positiveAnswer: "Taking care of yourself is taking care of your baby.",
    concernAnswer: "You can't pour from an empty cup. Even a protein bar or a handful of nuts counts. Set a phone alarm if you keep forgetting.",
  },
  {
    id: "feelings",
    text: "Do you feel like yourself most of the time?",
    positiveAnswer: "That's a good sign. Keep checking in with yourself.",
    concernAnswer: "It's okay to not feel like yourself right now  -  this is a massive life transition. But if this feeling persists for more than 2 weeks, talk to your doctor.",
  },
  {
    id: "joy",
    text: "Have you felt moments of joy or connection with your baby?",
    positiveAnswer: "Those moments matter. Even brief ones count.",
    concernAnswer: "If bonding feels hard, that's more common than you think. It doesn't mean you're a bad parent. Talk to your doctor  -  this is very treatable.",
  },
  {
    id: "anxiety",
    text: "Are you able to rest without constant worry?",
    positiveAnswer: "Some worry is normal. Being able to rest means it's at a manageable level.",
    concernAnswer: "Constant, uncontrollable worry can be a sign of postpartum anxiety. This is different from normal new-parent worry and very treatable.",
  },
  {
    id: "support",
    text: "Do you have at least one person you can be honest with about how you're feeling?",
    positiveAnswer: "Having support is protective. Keep that connection strong.",
    concernAnswer: "Isolation makes everything harder. PSI Warmline (1-800-944-4773) has trained volunteers who understand. You can also text HOME to 741741.",
  },
  {
    id: "scary-thoughts",
    text: "Are you having scary, unwanted thoughts about your baby being harmed?",
    positiveAnswer: "That's reassuring. Some fleeting worry is normal, but persistent intrusive thoughts deserve attention.",
    concernAnswer: "Intrusive thoughts are very common (up to 91% of new parents) and don't mean you're dangerous. But if they're constant or distressing, talk to your doctor about postpartum OCD screening.",
  },
  {
    id: "coping",
    text: "Are you coping without substances (alcohol, medications not prescribed to you)?",
    positiveAnswer: "Healthy coping is important, especially during this intense period.",
    concernAnswer: "Using substances to cope is a sign you need more support  -  not a sign of weakness. Talk to your doctor confidentially.",
  },
];

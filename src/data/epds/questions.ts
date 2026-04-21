export interface EPDSQuestion {
  id: number;
  question: string;
  options: { label: string; score: number }[];
}

/**
 * Edinburgh Postnatal Depression Scale (EPDS)
 *
 * Cox, J.L., Holden, J.M., & Sagovsky, R. (1987).
 * Detection of postnatal depression: Development of the 10-item
 * Edinburgh Postnatal Depression Scale.
 * British Journal of Psychiatry, 150, 782-786.
 *
 * This is a publicly available, validated screening instrument.
 * It is NOT a diagnostic tool — a high score indicates the need
 * for further clinical assessment, not a diagnosis.
 *
 * Scoring notes:
 *   Questions 1, 2, and 4 are scored 0-1-2-3 (first option = 0).
 *   Questions 3, 5, 6, 7, 8, 9, and 10 are reverse-scored 3-2-1-0
 *   (first option = 3).
 *   Total score range: 0 – 30.
 */
export const epdsQuestions: EPDSQuestion[] = [
  {
    id: 1,
    question: "I have been able to laugh and see the funny side of things",
    options: [
      { label: "As much as I always could", score: 0 },
      { label: "Not quite so much now", score: 1 },
      { label: "Definitely not so much now", score: 2 },
      { label: "Not at all", score: 3 },
    ],
  },
  {
    id: 2,
    question: "I have looked forward with enjoyment to things",
    options: [
      { label: "As much as I ever did", score: 0 },
      { label: "Rather less than I used to", score: 1 },
      { label: "Definitely less than I used to", score: 2 },
      { label: "Hardly at all", score: 3 },
    ],
  },
  {
    id: 3,
    question:
      "I have blamed myself unnecessarily when things went wrong",
    options: [
      { label: "Yes, most of the time", score: 3 },
      { label: "Yes, some of the time", score: 2 },
      { label: "Not very often", score: 1 },
      { label: "No, never", score: 0 },
    ],
  },
  {
    id: 4,
    question: "I have been anxious or worried for no good reason",
    options: [
      { label: "No, not at all", score: 0 },
      { label: "Hardly ever", score: 1 },
      { label: "Yes, sometimes", score: 2 },
      { label: "Yes, very often", score: 3 },
    ],
  },
  {
    id: 5,
    question: "I have felt scared or panicky for no very good reason",
    options: [
      { label: "Yes, quite a lot", score: 3 },
      { label: "Yes, sometimes", score: 2 },
      { label: "No, not much", score: 1 },
      { label: "No, not at all", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Things have been getting on top of me",
    options: [
      {
        label: "Yes, most of the time I haven't been able to cope at all",
        score: 3,
      },
      {
        label: "Yes, sometimes I haven't been coping as well as usual",
        score: 2,
      },
      { label: "No, most of the time I have coped quite well", score: 1 },
      { label: "No, I have been coping as well as ever", score: 0 },
    ],
  },
  {
    id: 7,
    question:
      "I have been so unhappy that I have had difficulty sleeping",
    options: [
      { label: "Yes, most of the time", score: 3 },
      { label: "Yes, sometimes", score: 2 },
      { label: "Not very often", score: 1 },
      { label: "No, not at all", score: 0 },
    ],
  },
  {
    id: 8,
    question: "I have felt sad or miserable",
    options: [
      { label: "Yes, most of the time", score: 3 },
      { label: "Yes, quite often", score: 2 },
      { label: "Not very often", score: 1 },
      { label: "No, not at all", score: 0 },
    ],
  },
  {
    id: 9,
    question: "I have been so unhappy that I have been crying",
    options: [
      { label: "Yes, most of the time", score: 3 },
      { label: "Yes, quite often", score: 2 },
      { label: "Only occasionally", score: 1 },
      { label: "No, never", score: 0 },
    ],
  },
  {
    id: 10,
    question: "The thought of harming myself has occurred to me",
    options: [
      { label: "Yes, quite often", score: 3 },
      { label: "Sometimes", score: 2 },
      { label: "Hardly ever", score: 1 },
      { label: "Never", score: 0 },
    ],
  },
];

export const epdsScoring = {
  low: {
    max: 8,
    message:
      "Your responses suggest you are coping well. Continue to take care of yourself and reach out if things change.",
  },
  moderate: {
    min: 9,
    max: 12,
    message:
      "Your responses suggest you may be experiencing some difficulty. Consider talking to your healthcare provider about how you're feeling.",
  },
  high: {
    min: 13,
    message:
      "Your responses suggest you may benefit from additional support. Please reach out to your healthcare provider soon \u2014 you deserve help, and effective treatments are available.",
  },
};

import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-bilingual-dominant-language', title: 'Bilingual Child - One Language Stronger', category: 'communication',
  searchTerms: ['bilingual child one language stronger', 'bilingual dominant language', 'bilingual toddler prefers one language', 'bilingual child refusing one language', 'heritage language weaker', 'home language weaker child', 'bilingual child only speaks English', 'bilingual child losing home language', 'language dominance bilingual', 'bilingual child unbalanced languages'],
  quickAnswer: 'It is very common and normal for bilingual children to have one language that is stronger than the other. Language dominance shifts based on exposure. If your child attends English-speaking childcare, English may become dominant even if a different language is spoken at home. This does not mean your child has a delay. To support the weaker language, increase meaningful exposure through conversation, books, media, and community. Children can maintain and strengthen a heritage language with consistent input.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies exposed to two languages are processing both from birth. There is no dominant language yet, though the baby may respond more to the language they hear most often. Continue speaking both languages.' },
    { ageRange: '12-24 months', context: 'First words may appear in whichever language the child hears most during daily routines. It is normal for early vocabulary to be unevenly distributed between the two languages.' },
    { ageRange: '2-3 years', context: 'As childcare or preschool begins, the community language often becomes stronger. The child may start responding in English even when spoken to in the home language. Consistent home language use by parents helps maintain balance.' },
    { ageRange: '3-4 years', context: 'Language dominance may shift clearly toward the school language. The child may resist using the home language. Gentle encouragement, engaging activities, and playmates who speak the home language can help.' },
    { ageRange: '4-6 years', context: 'With consistent support, children can maintain strong skills in both languages. Without deliberate exposure to the weaker language, it may fade. Creating opportunities for meaningful use of the heritage language is important.' },
  ],
  whenNormal: ['Your child has stronger skills in the language they hear most often', 'Your child prefers to speak the community language but understands the home language', 'Your child\'s combined vocabulary across both languages is age-appropriate', 'Your child\'s dominant language skills are on par with monolingual peers'],
  whenToMention: ['Your child\'s combined vocabulary across both languages seems low', 'Your child is struggling in both languages, not just one', 'You are concerned about completely losing the heritage language'],
  whenToActNow: ['Your child has significant delays in both languages combined', 'Your child is not communicating effectively in either language', 'Your child has lost words or skills in both languages'],
  relatedMilestones: ['language-development', 'vocabulary-growth', 'conversation-skills', 'first-words'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-bilingual-code-switching', 'toddler-trilingual-development', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Bilingualism.', url: 'https://www.asha.org/public/speech/development/Bilingual/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Learning More Than One Language.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/Learning-More-Than-One-Language.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. FAQ on Raising Bilingual Children.', url: 'https://www.zerotothree.org/resource/faq-raising-a-bilingual-child/' },
  ],
};

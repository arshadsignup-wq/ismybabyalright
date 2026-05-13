import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'immune-system-development-babies',
  title: 'How Your Baby\'s Immune System Develops',
  category: 'medical',
  searchTerms: [
    'baby immune system development',
    'when does baby immune system mature',
    'newborn immune system weak',
    'how to strengthen baby immune system',
    'baby immunity from mother',
    'maternal antibodies baby',
    'when does baby build own immunity',
    'breast milk immunity baby',
    'baby immune system first year',
  ],
  quickAnswer:
    'Babies are born with an immature immune system that develops and strengthens throughout childhood. They receive some protective antibodies from their mother during pregnancy and through breast milk, but these gradually fade over the first 6 to 12 months. Every cold and virus your baby catches is actually training their immune system, and by age 7-8, most children have a mature, robust immune defense.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns rely heavily on maternal antibodies (IgG) transferred through the placenta during the third trimester and secretory IgA in breast milk. These antibodies provide passive protection against infections the mother has encountered. However, this protection is incomplete and temporary, which is why any fever in this age group is taken so seriously  -  the baby\'s own immune system is still very limited in its ability to fight infections independently.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Maternal antibodies begin to decline significantly during this period, while the baby\'s own immune system is still ramping up. This creates a vulnerability window where babies become more susceptible to infections. Breast milk continues to provide some immune support through antibodies and other protective factors. Vaccinations given at 2 and 4 months are critically important for providing protection during this vulnerable period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most maternal antibodies have waned by 6-9 months, and babies are now relying primarily on their own developing immune systems. This coincides with increased hand-to-mouth activity and often the start of group care, leading to a noticeable increase in infections. Each infection stimulates immune memory, building a library of defenses. Continued breastfeeding still provides some ongoing immune support.',
    },
    {
      ageRange: '12-36 months',
      context:
        'The immune system is becoming more competent but is still immature compared to adults. Toddlers are actively building immune memory with every virus they encounter. By age 2-3, children who have been in group care settings may start getting sick less frequently as they have already been exposed to many common viruses. A complete vaccine schedule provides crucial protection against serious diseases while the immune system continues to mature.',
    },
  ],
  whenNormal: [
    'Your baby catches frequent but common viral illnesses (colds, mild stomach bugs) and recovers fully each time',
    'Your baby responds well to vaccines with minor side effects like low-grade fever or fussiness for 1-2 days',
    'Your baby\'s infections are typical for their age and childcare setting',
    'Your baby grows and develops normally despite occasional illnesses',
  ],
  whenToMention: [
    'Your baby seems to get sick more frequently or more severely than other children the same age in the same setting',
    'Infections take significantly longer to clear than expected, or mild infections frequently require antibiotics',
    'Your baby has had recurrent thrush (oral yeast infections) beyond the newborn period',
    'You have a family history of immune deficiency disorders and want to discuss screening',
  ],
  whenToActNow: [
    'Your baby develops an unusually serious or rare infection such as a deep tissue abscess, bone infection, or meningitis, especially if there is a family history of immune problems',
    'Your baby fails to thrive  -  poor weight gain, chronic diarrhea, and recurrent infections together may warrant urgent immune evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How the Immune System Works. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/How-the-Immune-System-Works.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Simon AK, Hollander GA, McMichael A. Evolution of the Immune System in Humans from Infancy to Old Age. Proceedings of the Royal Society B, 2015.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4707740/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding and Immunological Benefits of Breastfeeding.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};

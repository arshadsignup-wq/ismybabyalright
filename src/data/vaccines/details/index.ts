import type { VaccineDetail, VaccineDisease } from '../detail-types';

import { vaccine as hepatitisB } from './hepatitis-b';
import { vaccine as rotavirus } from './rotavirus';
import { vaccine as dtap } from './dtap';
import { vaccine as hib } from './hib';
import { vaccine as pcv15 } from './pcv15';
import { vaccine as ipv } from './ipv';
import { vaccine as influenza } from './influenza';
import { vaccine as mmr } from './mmr';
import { vaccine as varicella } from './varicella';
import { vaccine as covid19 } from './covid-19';
import { vaccine as hepatitisA } from './hepatitis-a';
import { vaccine as rsvNirsevimab } from './rsv-nirsevimab';
import { vaccine as vitaminK } from './vitamin-k';

export const allVaccineDetails: VaccineDetail[] = [
  hepatitisB, rotavirus, dtap, hib, pcv15, ipv, influenza, mmr, varicella,
  covid19, hepatitisA, rsvNirsevimab, vitaminK,
];

export function getVaccineDetailBySlug(slug: string): VaccineDetail | undefined {
  return allVaccineDetails.find((v) => v.slug === slug);
}

import { disease as measlesDisease } from './diseases/measles';
import { disease as whoopingCoughDisease } from './diseases/whooping-cough';
import { disease as rotavirusDisease } from './diseases/rotavirus-disease';
import { disease as chickenpoxDisease } from './diseases/chickenpox';
import { disease as hepatitisBDisease } from './diseases/hepatitis-b-disease';
import { disease as pneumococcalDisease } from './diseases/pneumococcal-disease';
import { disease as influenzaDisease } from './diseases/influenza-in-babies';
import { disease as polioDisease } from './diseases/polio';
import { disease as mumpsDisease } from './diseases/mumps';
import { disease as rubellaDisease } from './diseases/rubella';
import { disease as tetanusDisease } from './diseases/tetanus';
import { disease as diphtheriaDisease } from './diseases/diphtheria';
import { disease as hepatitisADisease } from './diseases/hepatitis-a-disease';
import { disease as rsvDisease } from './diseases/rsv-disease';
import { disease as meningitisDisease } from './diseases/meningitis';

export const allVaccineDiseases: VaccineDisease[] = [
  measlesDisease, whoopingCoughDisease, rotavirusDisease,
  chickenpoxDisease, hepatitisBDisease, pneumococcalDisease,
  influenzaDisease, polioDisease, mumpsDisease, rubellaDisease,
  tetanusDisease, diphtheriaDisease, hepatitisADisease,
  rsvDisease, meningitisDisease,
];

export function getVaccineDiseaseBySlug(slug: string): VaccineDisease | undefined {
  return allVaccineDiseases.find((d) => d.slug === slug);
}

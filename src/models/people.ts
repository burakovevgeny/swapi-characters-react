import { Homeworld, Gender } from '.';

interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Partial<Gender>;
  homeworld: string | Homeworld;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface PeopleResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: People[];
}

export type { People, PeopleResponse };

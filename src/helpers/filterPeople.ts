import { Gender, People } from '../models';

const filterPeople = (people: People[], filter: Gender, search?: string) => people.filter((character) => {
  if (search && !character.name.toLowerCase().trim().includes(search.toLocaleLowerCase().trim())) {
    return false;
  }
  if (filter === Gender.ALL) {
    return true;
  }
  return character.gender === filter;
});

export { filterPeople };

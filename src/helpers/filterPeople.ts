import { Gender, People } from '../models';

const filterPeople = (people: People[], filter: Gender, search?: string) => {
  return people.filter((character) => {
    if (search && !character.name.toLowerCase().includes(search.toLocaleLowerCase().trim())) {
      return false;
    }
    if (filter === Gender.ALL) {
      return true;
    }
    if (character.gender !== filter) {
      return false;
    }
    return true;
  });
};

export { filterPeople };

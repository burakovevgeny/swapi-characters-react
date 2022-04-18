import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/config';
import { Homeworld, PeopleResponse } from '../models';
import { getIdAndQuery } from '../helpers';

const getPeopleAction = createAction('getPeoplePeople');

const getPeople = async () => {
  const { results, count } = await api.get<any, PeopleResponse>('people');
  const people = results;
  const numberOfPagesLeft = Math.ceil((count - 1) / 10);
  const promises: Array<Promise<PeopleResponse>> = [];

  for (let i = 2; i <= numberOfPagesLeft; i += 1) {
    promises.push(
      api.get('people', {
        params: {
          page: i,
        },
      }),
    );
  }
  const resultPromisesPeople = await Promise.all(promises);
  return resultPromisesPeople.reduce((acc, data) => [...acc, ...data.results], people);
};

const getPeopleWithHomeworldAndImage = async () => {
  const people = await getPeople();
  const homeworlds = await Promise.all(people.map(({ homeworld }) => {
    const { id, query } = getIdAndQuery(homeworld as string);
    return api.get<any, Homeworld>(`${query}/${id}`);
  }));
  return people.map((character, index) => ({ ...character, homeworld: homeworlds[index] }));
};

const fetchPeople = createAsyncThunk(getPeopleAction.type, async () => getPeopleWithHomeworldAndImage());

export { fetchPeople, getPeopleAction };

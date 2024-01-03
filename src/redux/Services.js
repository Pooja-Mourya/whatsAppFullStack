
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => ``,
    }),
  }),
})
export const { useGetPokemonByNameQuery } = pokemonApi
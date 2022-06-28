import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const plants: QueryResolvers['plants'] = () => {
  return db.plant.findMany()
}

export const plant: QueryResolvers['plant'] = ({ id }) => {
  return db.plant.findUnique({
    where: { id },
  })
}

export const createPlant: MutationResolvers['createPlant'] = ({ input }) => {
  return db.plant.create({
    data: input,
  })
}

export const updatePlant: MutationResolvers['updatePlant'] = ({
  id,
  input,
}) => {
  return db.plant.update({
    data: input,
    where: { id },
  })
}

export const deletePlant: MutationResolvers['deletePlant'] = ({ id }) => {
  return db.plant.delete({
    where: { id },
  })
}

import * as fs from 'fs'

import type { PrismaClient } from '@prisma/client'
import { Plant } from '@prisma/client'

type PlantData = {
  name: string
  goodNeighbours: string[]
  badNeighbours: string[]
  notes: string
  isGeneralCompanion: boolean
}

export default async ({ db }: { db: PrismaClient }) => {
  const data = JSON.parse(fs.readFileSync('./api/data/plants.json').toString())
  await createPlants(db, data)
  await addRelationships(db, data)
}

const createPlants = async (db: PrismaClient, data: PlantData[]) => {
  for (const plant of data) {
    await db.plant.create({
      data: {
        name: plant.name,
        notes: plant.notes,
      },
    })
  }
}

const addRelationships = async (db: PrismaClient, data: PlantData[]) => {
  for (const plantData of data) {
    const plant = await db.plant.findFirst({
      where: { name: { contains: plantData.name } },
    })

    await addPositiveCompanions(db, plant, plantData)
    await addNegativeCompanions(db, plant, plantData)
  }
}

const addPositiveCompanions = async (
  db: PrismaClient,
  plant: Plant,
  plantData: PlantData
) => {
  for (const companionName of plantData.goodNeighbours) {
    const companion = await db.plant.findFirst({
      where: { name: { contains: companionName } },
    })
    if (companion?.id) {
      await db.plant.update({
        where: { id: plant.id },
        data: {
          positiveCompanions: { connect: { id: companion.id } },
        },
      })
    }
  }
}

const addNegativeCompanions = async (
  db: PrismaClient,
  plant: Plant,
  plantData: PlantData
) => {
  for (const companionName of plantData.badNeighbours) {
    const companion = await db.plant.findFirst({
      where: { name: { contains: companionName } },
    })
    if (companion?.id) {
      await db.plant.update({
        where: { id: plant.id },
        data: {
          negativeCompanions: { connect: { id: companion.id } },
        },
      })
    }
  }
}

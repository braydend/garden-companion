import { plants, plant, createPlant, updatePlant, deletePlant } from './plants'
import type { StandardScenario } from './plants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plants', () => {
  scenario('returns all plants', async (scenario: StandardScenario) => {
    const result = await plants()

    expect(result.length).toEqual(Object.keys(scenario.plant).length)
  })

  scenario('returns a single plant', async (scenario: StandardScenario) => {
    const result = await plant({ id: scenario.plant.one.id })

    expect(result).toEqual(scenario.plant.one)
  })

  scenario('creates a plant', async () => {
    const result = await createPlant({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a plant', async (scenario: StandardScenario) => {
    const original = await plant({ id: scenario.plant.one.id })
    const result = await updatePlant({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plant', async (scenario: StandardScenario) => {
    const original = await deletePlant({ id: scenario.plant.one.id })
    const result = await plant({ id: original.id })

    expect(result).toEqual(null)
  })
})

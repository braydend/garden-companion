import { sleep } from 'src/utils/sleep'

describe('sleep', () => {
  it('waits for provided timeout', async () => {
    const startTime = new Date()
    await sleep(500)
    const endTime = new Date()
    const difference = endTime.getTime() - startTime.getTime()
    expect(difference).toBeGreaterThan(500)
  })
})

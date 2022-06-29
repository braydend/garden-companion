import { ComponentProps } from 'react'

import { Plant } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import { Card, Heading } from 'src/components/atoms'

type Props = {
  variant: 'positive' | 'negative'
  plants: Pick<Plant, 'id' | 'name'>[]
}

const getVariantHeading = (variant: Props['variant']) => {
  switch (variant) {
    case 'negative':
      return 'Negative Companions'
    case 'positive':
      return 'Positive Companions'
  }
}

const getCardVariant = (
  variant: Props['variant']
): ComponentProps<typeof Card>['variant'] => {
  switch (variant) {
    case 'negative':
      return 'red'
    case 'positive':
      return 'green'
  }
}

const getEmptyMessageForVariant = (variant: Props['variant']) => {
  switch (variant) {
    case 'negative':
      return 'This plant has no negative companions'
    case 'positive':
      return 'This plant has no positive companions'
  }
}

export const CompanionCard: React.FC<Props> = ({ variant, plants }) => {
  const hasCompanions = plants.length > 0

  return (
    <Card variant={getCardVariant(variant)}>
      <Heading
        label={getVariantHeading(variant)}
        level={3}
        className={'pb-2'}
      />
      {hasCompanions ? (
        <ul>
          {plants.map(({ id, name }) => (
            <li key={id} className={'list-disc'}>
              <Link to={routes.plant({ id })} className={'hover:underline'}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>{getEmptyMessageForVariant(variant)}</span>
      )}
    </Card>
  )
}

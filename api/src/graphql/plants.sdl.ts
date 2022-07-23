export const schema = gql`
  type Plant {
    id: String!
    name: String!
    notes: String
    positiveCompanions: [Plant]!
    negativeCompanions: [Plant]!
    positiveCompanionsRelation: [Plant]!
    negativeCompanionsRelation: [Plant]!
  }

  type PlantPage {
    plants: [Plant!]!
    count: Int!
  }

  type Query {
    plantPage(page: Int, perPage: Int!): PlantPage
    plants: [Plant!]! @requireAuth
    plant(id: String!): Plant @requireAuth
  }

  input CreatePlantInput {
    name: String!
    notes: String
  }

  input UpdatePlantInput {
    name: String
    notes: String
  }

  type Mutation {
    createPlant(input: CreatePlantInput!): Plant! @requireAuth
    updatePlant(id: String!, input: UpdatePlantInput!): Plant! @requireAuth
    deletePlant(id: String!): Plant! @requireAuth
  }
`

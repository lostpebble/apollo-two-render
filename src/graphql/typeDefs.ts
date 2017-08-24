export const typeDefs = `
  type Link {
    id: ID! @isUnique
    url: String!
    description: String!
  }
  
  type TaskDetail {
    taskId: ID! @isUnique
    taskName: String!
  }
  
  type TaskProgress {
    id: ID! @isUnique
    taskId: String!
    totalStages: Int!
    currentStage: Int!
    stagePercent: Int!
    stageProgressMessage: String
  }
  
  type Subscription {
    taskProgress(taskId: String!): TaskProgress
  }
  
  type Query {
    hello: String!
    allLinks: [Link]
  }
  
  type Mutation {
    startTask(taskName: String!): TaskDetail
  }
`;

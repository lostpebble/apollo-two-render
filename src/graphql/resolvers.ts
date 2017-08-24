import {IResolvers} from "graphql-tools/dist/Interfaces";

export const resolvers: IResolvers = {
  Query: {
    hello: () => {
      return `Hello world`;
    },
    allLinks: () => {
      return [{
        id: "what",
        url: "dudewheresmycar.com",
        description: "Lekker bois.",
      }, {
        id: "numbertwo",
        url: "independence.com",
        description: "No man.",
      }];
    }
  },
  Mutation: {
    startTask: (root, { taskName }) => {
      const newTask = { id: taskName };
    }
  },
};

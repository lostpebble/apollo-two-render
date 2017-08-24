import {addMockFunctionsToSchema, makeExecutableSchema} from "graphql-tools";
import {typeDefs} from "./typeDefs";
import {resolvers} from "./resolvers";

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// addMockFunctionsToSchema({ schema: executableSchema });

export default executableSchema;

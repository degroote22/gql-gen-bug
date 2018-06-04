// import { importSchema } from "graphql-import";
const g = require("graphql-import");
const schema = g.importSchema("./schema.graphql");
module.exports = schema;

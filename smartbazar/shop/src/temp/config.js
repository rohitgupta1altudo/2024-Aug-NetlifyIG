/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};
config.sitecoreApiKey = process.env.SITECORE_API_KEY || "{9BFA902A-2E1F-402E-BE36-A1BE97F2A68D}",
config.sitecoreApiHost = process.env.SITECORE_API_HOST || "https://altudoheadless-sccontent.eastus.cloudapp.azure.com",
config.jssAppName = process.env.JSS_APP_NAME || "Altudo",
config.graphQLEndpointPath = process.env.GRAPH_QL_ENDPOINT_PATH || "/sitecore/api/graph/edge",
config.graphQLEndpoint = process.env.GRAPH_QL_ENDPOINT || `${config.sitecoreApiHost}${config.graphQLEndpointPath}`;
module.exports = config;
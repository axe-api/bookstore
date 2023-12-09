import { CacheStrategies, IVersionConfig, QueryFeature, allow } from "axe-api";

const config: IVersionConfig = {
  transaction: [],
  serializers: [],
  supportedLanguages: ["en"],
  defaultLanguage: "en",
  query: {
    limits: [allow(QueryFeature.All)],
    defaults: {
      perPage: 10,
      minPerPage: 5,
      maxPerPage: 100,
    },
  },
  cache: {
    enable: true,
    ttl: 60 * 60,
    invalidation: CacheStrategies.TagBased,
  },
};

export default config;

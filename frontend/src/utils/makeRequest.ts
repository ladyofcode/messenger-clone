import _ from "lodash";
import { requestOptions } from "../config";

async function makeRequest(
  endpoint: string,
  options: RequestInit = requestOptions,
) {
  const mergedOptions = _.merge(requestOptions, options);
  return fetch(endpoint, mergedOptions);
}

export { makeRequest };

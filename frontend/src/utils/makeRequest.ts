import _ from "lodash";
import { requestOptions } from "../config";
import { constants } from "../config/constants";

interface IResponse<T> {
  error: any;
  data: T | null;
}

async function makeRequest<T>(
  endpoint: string,
  options: RequestInit = requestOptions,
) {
  const _response: IResponse<T> = {
    error: null,
    data: null,
  };

  const mergedOptions = _.merge({}, requestOptions, options);

  try {
    const response = await fetch(constants.BASE_PATH + endpoint, mergedOptions);

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();

      if (data.error || data.statusCode === 401) {
        _response.error = data.error || data?.message;
      } else {
        _response.data = data;
      }
    }
  } catch (err) {
    _response.data = null;
    _response.error = err.message || "something broke, backend guyz...";
  }

  return _response;
}

export { makeRequest };

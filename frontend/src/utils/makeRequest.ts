import _ from "lodash";
import { requestOptions } from "../config";

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

  const mergedOptions = _.merge(requestOptions, options);
  try {
    const response = await fetch(endpoint, mergedOptions);

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application.json")) {
      _response.data = await response.json();
    }
  } catch (err) {
    _response.data = null;
    _response.error = err.message || "something broke, backend guyz...";
  }

  return _response;
}

export { makeRequest };

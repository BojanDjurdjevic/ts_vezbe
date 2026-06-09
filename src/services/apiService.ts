import axios from "axios";
import { config } from "../config/config";
import type { ApiParametersInterface } from "../interfaces/ApiParametersInterface";
import type { ApiResponseInterface } from "../interfaces/ApiResponseInterface";

export function buildUrl(params: ApiParametersInterface[]): string {
    let searchParams = ''

    params.forEach(param => {
        searchParams += `${param.key}=${param.value}&`
    })

    return config.apiUrl + "?" + searchParams + `apikey=${config.apiKey}`
}

export async function callApi(params: ApiParametersInterface[]): Promise<ApiResponseInterface> {
    const url = buildUrl(params)

    return await axios.get(url)
}
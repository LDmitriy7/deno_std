import env from "https://deno.land/x/parse_env@v0.0.3/mod.ts"

type AnyFunction = (...args: any[]) => any
type ResponseData = { ok: boolean; error?: string; result?: object }

function log(header: string, data?: object) {
  console.log(`${header}:`, data)
}

function exclude<T>(array: T[], value: T) {
  return array.filter((item) => item !== value)
}

function error(header: string, data?: object): never {
  console.error(`${header}:`, data)
  throw new Error(header)
}

function filterFalsy<T>(array: (T | undefined | null)[]): T[] {
  return array.filter((i) => i != null) as T[]
}

export { env, error, exclude, filterFalsy, log }
export type { AnyFunction, ResponseData }

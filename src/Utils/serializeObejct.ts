export function serializeObject(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

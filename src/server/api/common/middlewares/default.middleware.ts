export type DefaultMiddleWareArgs = {
  enabled?: boolean;
};
export type DefaultMiddleWareOptions = Record<string, DefaultMiddleWareArgs>;

export async function defaultMiddleware(args: DefaultMiddleWareArgs): Promise<void> {
  // TODO: Implement actual middleware logic

  if (args.enabled === false) return undefined;

  return undefined;
}

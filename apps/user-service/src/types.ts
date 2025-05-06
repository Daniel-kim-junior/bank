import { Brand } from "common-types";

export type UserId = Brand<string, "UserId">;
export type Email = Brand<string, "Email">;

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
export type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;
export type Brand<K, T> = K & { __brand: T };
export function asBranded<K, T>(value: K): Brand<K, T> {
    return value as Brand<K, T>;
  }
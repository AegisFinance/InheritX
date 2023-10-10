import { $query, $update, blob, nat32 } from "azle";

//CANISTER IDs
export let WILL_CANISTER_ID = "";

$query;
export function get_will_canister_id(): string {
  return WILL_CANISTER_ID;
}

$update;
export function set_will_canister_id(willCanisterId: string): string {
  WILL_CANISTER_ID = willCanisterId;
  return WILL_CANISTER_ID;
}

export function getSubAccountArray(subaccount: number): number[] {
  return Array(28)
    .fill(0)
    .concat(to32Bits(subaccount ? subaccount : 0));
}

export function to32Bits(number: number): number[] {
  let b = new ArrayBuffer(4);
  new DataView(b).setUint32(0, number);
  return Array.from(new Uint8Array(b));
}

export function getIdentifierBlob(identifier: nat32): blob {
  return Uint8Array.from(getSubAccountArray(identifier));
}

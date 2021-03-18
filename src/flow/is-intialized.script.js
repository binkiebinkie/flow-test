import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";

const isInitialized = async address => {
  if (address === null)
    throw new Error("isInitialized(address) -- address required");

  return fcl
    .send([
      fcl.script`
        import Profile from 0xProfile

        pub fun main(address: Address): Bool {
          return Profile.check(address)
        }
      `,
      fcl.args([fcl.arg(address, t.Address)])
    ])
    .then(fcl.decode);
};
export default isInitialized;

/***
 * Secrets-Parameter
 *
 * @example
 * /// Node, CommonJS Usage
 * const Main = async () => {
 *     const Type = await import("@cloud-technology/secrets-parameter");
 *
 *     const instance = new Type.Secret({
 *         organization: "IBM",
 *         environment: "Development",
 *         application: "Application",
 *         resource: "Secret-Token",
 *         provider: "SSM",
 *         identifier: "ID"
 *     });
 *
 *     console.log(instance);
 *     console.log(instance.string());
 *
 *     console.log(instance.string("Directory"));
 *     console.log(instance.string("Train-Case"));
 *     console.log(instance.string("Screaming-Train-Case"));
 *
 * }
 *
 * (async () => await Main())();
 *
 * @example
 * /// ECMA Usage
 * import { Secret } from "@cloud-technology/secrets-parameter";
 *
 * const instance = new Secret({
 *     organization: "IBM",
 *     environment: "Development",
 *     application: "Application",
 *     resource: "Secret-Token",
 *     provider: "SSM",
 *     identifier: "ID"
 * });
 *
 * console.log(instance);
 * console.log(instance.string());
 *
 * console.log(instance.string("Directory"));
 * console.log(instance.string("Train-Case"));
 * console.log(instance.string("Screaming-Train-Case"));
 *
 */

import { Secret } from "./src/index.js";

export { Secret };

export default { Secret };
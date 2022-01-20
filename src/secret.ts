import { Parameter } from "@cloud-technology/parameter";

class Secret extends Parameter {
    /***
     *
     * |       Key        |   Requirement  |                Description                |         Example(s)          |
     * |:----------------:|:--------------:|:-----------------------------------------:|:---------------------------:|
     * | **Organization** |   *Required*   |                    ...                    |            `IBM`            |
     * | **Environment**  |   *Required*   |       Network (L2) Seperated Alias        | `Development`, `Production` |
     * | **Application**  |   *Required*   | Stack, Functional Purpose, or Common-Name |  `Financial-Audit-Service`  |
     * |   **Provider**   |   *Optional*   |  Service(s) either Consumed or Provided   |     `S3`, `EC2`, `CFN`      |
     * |   **Resource**   |   *Required*   |          Descriptive Identifier           | `Log-Results`. `Artifacts`  |
     * |  **Identifier**  |   *Optional*   |        Additional, Optional String        |   `VPC-ID`, `Private-Key`   |
     *
     * @param {Options} options - Constructor parameters type
     *
     */

    constructor(options: Options = Parameter.default) {
        super(options);
    }
}

enum Type {
    /// Directory type
    Directory = "Directory",
    /// Screaming-Train-Case string
    Train = "Screaming-Train-Case",
    /// Train-Case string
    Dash = "Train-Case"
}

enum Properties {
    /*** Number of Properties used with Parameter.default Constructor */
    Default = 4,
    /*** Number of Properties used when Negating the Identifier property, but inclusion of Provider */
    Provider = 5,
    /*** Number of Properties used when Negating the Provider property, but inclusion of Identifier */
    Identifier = 5,
    /*** Number of Properties used with a Full Parameter constructor call */
    Parameter = 6
}

interface Options {
    /***
     * organization - Target Deliverable Maintainer
     *
     * @type {string}
     */
    organization: string;

    /***
     * environment - Network (L2) Seperated Alias
     *
     * @type {string}
     */
    environment: string;

    /***
     * application - Stack, Functional Purpose, or Common-Name
     *
     * @type {string}
     */
    application: string;

    /***
     * provider - Service(s) either Consumed or Provided
     *
     * @type {string}
     */
    resource: string;

    /***
     * resource - Descriptive Identifier
     *
     * @type {string}
     */
    provider: string | null;

    /***
     * identifier - Additional, Optional String
     *
     * @type {string}
     */
    identifier: string | null;
}

export { Secret };

export default Secret;

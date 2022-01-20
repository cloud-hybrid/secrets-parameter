import { Parameter } from "@cloud-technology/parameter";
import type { Options } from "@cloud-technology/parameter";

class Secret extends Parameter {
    constructor(options: Options = Parameter.default) {
        super(options);
    }
}

export { Secret, Parameter };

export default Secret;

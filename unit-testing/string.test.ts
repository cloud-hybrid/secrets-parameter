import Utility from "util";

import { Secret } from "..";

describe( "String Unit Test", () => {
    const secret = new Secret( {
        organization: "organization",
        environment: "environment",
        application: "application",
        resource: "resource",
        provider: "provider",
        identifier: "identifier"
    } );

    it( "Default", async () => {
        const $ = secret.string();
        console.log( "String" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Train-Case", async () => {
        const $ = secret.string( "Train-Case" );
        console.log( "Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Screaming-Train-Case", async () => {
        const $ = secret.string( "Screaming-Train-Case" );
        console.log( "Screaming-Train-Case" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );

    it( "Directory", async () => {
        const $ = secret.string("Directory");
        console.log( "Directory" + ":", Utility.inspect( $, { colors: true } ) );
        expect( $ ).toBeTruthy();
    } );
} );

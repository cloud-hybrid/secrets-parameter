export * from "./secret";
export default await import("./secret").then(
    ($) => {
        return $.Secret;
    }
);

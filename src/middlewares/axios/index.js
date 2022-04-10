import defaultClient from "./client/default";
import { multiClientMiddleware } from "redux-axios-middleware";

const client = {
    default: defaultClient
}

export default multiClientMiddleware(client, {
    returnRejectedPromiseOnError: true,
})
import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hallo, " + name + "."
        : "Du bist aber unhöflich.";

    /*
    context.bindings.bier = JSON.stringify({
        'id': 100,
        'name': 'Name it',
        'style': 'neipa'
    });
     */

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;

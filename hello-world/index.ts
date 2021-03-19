import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hallo, " + name + "."
        : "Du bist aber unhöflich.";



    context.bindings.bier = JSON.stringify({
        id: 2, //uuidv4(),
        value: '98989'
    });

    context.res = {
        body: 'done'
    };

    // context.done()
};

export default httpTrigger;
// func azure functionapp publish ccmsrkazuretf-dev-function-app

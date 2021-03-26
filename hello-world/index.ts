import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.bindings.Person = JSON.stringify(req.body);

    context.res = {
        body: 'Danke.'
    };
};

export default httpTrigger;
// func azure functionapp publish ccmsrkazuretf-dev-function-app

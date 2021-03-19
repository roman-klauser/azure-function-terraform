import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface Person {
    firstName: string;
    lastName: string;
}
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.bindings.bier = JSON.stringify(req.body);

    context.res = {
        body: 'done!!'
    };
};

export default httpTrigger;
// func azure functionapp publish ccmsrkazuretf-dev-function-app

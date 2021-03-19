import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');




    context.bindings.bier = JSON.stringify({
        id: "22",
        type: "whaat"
    });

    context.res = {
        body: 'done!'
    };

    // context.done()
};

export default httpTrigger;
// func azure functionapp publish ccmsrkazuretf-dev-function-app

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
/*
{
  "bindings": [
    {
      "type": "cosmosDBTrigger",
      "name": "documents",
      "direction": "in",
      "leaseCollectionName": "leases",
      "connectionStringSetting": "COSMOS_DB_CONNECTION_STRING",
      "databaseName": "ccmsrk-cosmos-sql-db",
      "collectionName": "people",
      "createLeaseCollectionIfNotExists": true
    },
    {
      "type": "eventGrid",
      "name": "outputEvent",
      "topicEndpointUri": "MyEventGridTopicUriSetting",
      "topicKeySetting": "MyEventGridTopicKeySetting",Å
      "direction": "out"
    }
  ]
}

module.exports = async function (context, documents) {
    context.log('PersonCreated: ', documents[0]);

    context.bindings.outputEvent = {
        id: 'message-id',
        subject: 'subject-name',
        dataVersion: '1.0',
        eventType: 'event-type',
        data: "event-data",
    };

    context.done()
}
* */

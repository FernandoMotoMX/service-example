import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export default class marketingCloudRest extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://mct3wtx8rtr3zf5swqr60mkz0sw0.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:C6DB6C1C-1764-42AB-8470-E5FF2B4A4C5F", context, {
      ...options,
      headers: {
        "X-VTEX-Use-Https": context.authToken
      }
    });
  }
  public async saveMCData(data:any, authKey:any): Promise<any> {
      return await this.http.post('/rows',data,{
          headers:{
              "Authorization":`Bearer ${authKey}`
          }
      })
  }
}

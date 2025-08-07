import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export default class marketingCloud extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://mct3wtx8rtr3zf5swqr60mkz0sw0.auth.marketingcloudapis.com/v2", context, {
      ...options,
      headers: {
        "X-VTEX-Use-Https": context.authToken
      }
    });
  }
  public async getToken(): Promise<any> {
      return await this.http.post('/token',{
        "grant_type": "client_credentials",
        "client_id": "e4fmiq6ou6jm4gn278pq9jj1",
        "client_secret": "EEwuEiMe98IN2mTciyJmkGZc"
    })
  }
}

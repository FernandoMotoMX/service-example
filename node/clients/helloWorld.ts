// node/clients/testClient.ts
import type { IOContext, InstanceOptions } from '@vtex/api'
import { ExternalClient } from '@vtex/api' // Or IOClient if you prefer

export default class HelloWorld extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://jsonplaceholder.typicode.com", context, {
      ...options
    });
  }

  public async getSomething(): Promise<any> {
    // Just a placeholder request
    return this.http.get('/posts/1', {
      headers: {
        "X-VTEX-Use-Https": this.context.authToken
      },
    })
  }
}

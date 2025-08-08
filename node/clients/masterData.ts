/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable no-return-await */
import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class masterData extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://comoto.vtexcommercestable.com.br/api', context, {
      ...options,
      headers: {
        'X-VTEX-Use-Https': context.authToken,
        'Access-Control-Allow-Origin': '*',
        'X-VTEX-API-AppKey': 'vtexappkey-comoto-UBCPNX',
        'X-VTEX-API-AppToken':
          'BAHKOGZIBAJHZTXAKFNBEBDGUATTDNXQCCSDKBFDTEMLXFBSSRJQAPAZWAPOMFFODTEWBTPIAJIAOSJPYBBMEGPNCTHJMQQNZYIEAERYBAQQGZKERZPLESJWDRUHMGWJ',
        'REST-Range': 'resources=0-100'
      },
    })
  }

  public async searchDocuments(
    acronym: string,
    field: string,
    value: string
  ): Promise<any> {
    return await this.http.get(
      `/dataentities/${acronym}/search?${field}=${value}`
    )
  }

  public async createNewDocument(acronym: string, body: any): Promise<any> {
    return await this.http.post(`/dataentities/${acronym}/documents`, body)
  }

  public async updateDocument(
    acronym: string,
    documentId: string,
    body: any
  ): Promise<any> {
    return await this.http.patch(
      `/dataentities/${acronym}/documents/${documentId}`,
      body
    )
  }

  public async getDocument(acronym: string, documentId: string): Promise<any> {
    return await this.http.get(
      `/dataentities/${acronym}/documents/${documentId}?_fields=_all`
    )
  }
}

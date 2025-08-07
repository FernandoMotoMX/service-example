// node/typings/clients.d.ts
import MyApiClient from '../clients/myApiClient'
import { IOClients } from '@vtex/api'

declare module 'vtex.api' {
  interface Clients extends IOClients {
    myApiClient: MyApiClient
  }
}

import { IOClients } from '@vtex/api'

import Status from './status'
import HelloWorld from './helloWorld'
import marketingCloud from './marketingCloud'
import marketingCloudRest from './marketingCloudRest'
import masterData from './masterData'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get helloWorld() {
    return this.getOrSet('helloWorld', HelloWorld)
  }
  public get marketingCloud(){
    return this.getOrSet("marketingCloud", marketingCloud)
  }
  public get marketingCloudRest(){
    return this.getOrSet("marketingCloudRest", marketingCloudRest)
  }
   public get masterData() {
    return this.getOrSet('masterData', masterData)
  }
}

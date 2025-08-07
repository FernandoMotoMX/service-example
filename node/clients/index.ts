import { IOClients } from '@vtex/api'

import Status from './status'
import HelloWorld from './helloWorld'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get helloWorld() {
    return this.getOrSet('helloWorld', HelloWorld)
  }
  
}

// node/middlewares/testMiddleware.ts
import { ServiceContext } from '@vtex/api'

export async function helloWorld(ctx: ServiceContext<any, any>, next: () => Promise<any>) {
  console.log('Test middleware triggered')

  const {
    vtex: { account, workspace },
    clients: {
      helloWorld: helloWorldClient
    }
  } = ctx

  try {
    const data = await helloWorldClient.getSomething()
    ctx.body = {
      data,
      message: 'HelloWorld',
      // json: statusResponse,
      account,
      workspace,
      time: new Date().toISOString(),
    }
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      message: 'Error while fetching data',
      details: error.message,
    }
  }

  await next() // Always call next() unless you’re terminating the flow here


  // const statusResponse = await helloWorldClient.getSomething()

  // console.info('Status response:', statusResponse)

  
  // ctx.set('Cache-Control', 'no-cache')
  // ctx.body = {
  //   message: 'HelloWorld',
  //   json: statusResponse,
  //   account,
  //   workspace,
  //   time: new Date().toISOString(),
  // }

  // await next()
}

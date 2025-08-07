import type { ServiceContext } from '@vtex/api'
// import type { Clients } from '@vtex.api'

export async function myApi(ctx: ServiceContext<any>, next: () => Promise<any>) {
  const {
    clients: { myApiClient },
  } = ctx

  try {
    const data = await myApiClient.getData()
    ctx.body = data
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      message: 'Error while fetching data',
      details: error.message,
    }
  }

  await next() // Always call next() unless you’re terminating the flow here
}

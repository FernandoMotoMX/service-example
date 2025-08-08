import { json } from 'co-body'

export async function createDocument(ctx: Context) {
  ctx.set('Access-Control-Allow-Origin', '*')
  const {
    vtex: {
      route: { params },
    },
    clients: { masterData },
  } = ctx

  const body = await json(ctx.req)

  console.log({ body })
  const { acronym } = params
  
  if(acronym){
    const clientResponse = await masterData.createNewDocument(
      acronym.toString(),
      body
    )

    ctx.status = 200
    ctx.response.body = clientResponse
  }else{
    ctx.status = 500
    ctx.body = {
      message: 'Error while fetching data on master data'
    }
  }
}

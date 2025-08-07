export async function marketingCloud(ctx: Context,  next: () => Promise<any>) {
  const {
    clients: { 
      marketingCloud,
      marketingCloudRest 
    },
  } = ctx;

  const { body } = ctx.state;
  let token:any

  if(body){
      
    const _date = new Date().toLocaleString('en-US',{
      hour12: false
    })

    const data = {
      items: [{
          EMAIL_ADDRESS:body.email,
          MOTO_DATE_LAST_UPDATED: _date,
          EMAIL_OPT_IN: "Y",
          PREF_LANGUAGE: "es",
          WEB_CAMPAIGN_NAME: body.campaign,
          BILL_TO_COUNTRY: body.codeCountry,
          DATA_SOURCE: "VTEX",
          FIRST_NAME: body.firstName,
          LAST_NAME: body.lastName ?? ''
      }]
    }
    
    if(!token || new Date().getTime()/1000 - token.fecha >= 1079){
      token = await marketingCloud.getToken()
      token.fecha = new Date().getTime()/1000
    }

    await marketingCloudRest.saveMCData(data,token.access_token)

    ctx.status = 200
    ctx.body = data
  }else{
      ctx.status = 400
      ctx.body = "no email provided"
  }

  await next()
}
  
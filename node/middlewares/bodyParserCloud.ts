import { json } from "co-body";

export async function bodyParserCloud(ctx: Context, next: () => Promise<any>) {
  const originControl =  false
 ctx.set("Access-Control-Allow-Origin", "*");
 if (originControl) {
    ctx.status = 403;
  } else {
    const body = await json(ctx.req);
    console.log(body,"body")
    ctx.state.body = body;
    await next();
  }
}
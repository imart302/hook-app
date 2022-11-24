

export async function getQuote(i: number = 1, controller: AbortController){

  const url = `https://breakingbadapi.com/api/quotes/${i}`;
  const resp = await fetch(url, {signal: controller.signal});  
  return resp;
}
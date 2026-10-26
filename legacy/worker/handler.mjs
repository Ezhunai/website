const json=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
export default {async fetch(request,env){const url=new URL(request.url);if(url.pathname==='/api/members'){
 if(request.method!=='POST')return json({error:'Method not allowed.'},405);
 if(request.headers.get('Origin')!==url.origin)return json({error:'Please submit the form from this website.'},403);
 if(Number(request.headers.get('Content-Length')||0)>4096)return json({error:'Form is too large.'},413);
 let data;try{const text=await request.text();if(text.length>4096)return json({error:'Form is too large.'},413);data=JSON.parse(text);}catch{return json({error:'Please check the form and try again.'},400);}
 if(!data||typeof data!=='object'||Array.isArray(data))return json({error:'Please check the form and try again.'},400);
 const name=typeof data.name==='string'?data.name.trim():'';
 if(name.length<2||name.length>100||data.consent!=='on')return json({error:'Please enter your name and agree to share it for community membership.'},400);
 if(!env.DB)return json({error:'Membership registration is temporarily unavailable. Please try again later.'},503);
 try{await env.DB.prepare('INSERT INTO members (id,name,email,phone,date_of_birth,consent_at,created_at) VALUES (?,?,?,?,?,?,?)').bind(crypto.randomUUID(),name,'','',null,new Date().toISOString(),new Date().toISOString()).run();return json({ok:true});}catch{return json({error:'Could not save your details. Please try again.'},503);}
 }
 if(request.method!=='GET'&&request.method!=='HEAD')return new Response('Method not allowed',{status:405});
 const key=url.pathname==='/'?'/index.html':url.pathname;const asset=assets[key];if(!asset)return new Response('Not found',{status:404});const bytes=Uint8Array.from(atob(asset[1]),c=>c.charCodeAt(0));return new Response(request.method==='HEAD'?null:bytes,{headers:{'Content-Type':asset[0],'Cache-Control':key==='/index.html'?'no-cache':'public, max-age=300','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'}});
}};

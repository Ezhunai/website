const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
function setNavigation(open){menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);}
menu.addEventListener('click',()=>setNavigation(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setNavigation(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setNavigation(false);menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('header'))setNavigation(false);});
window.matchMedia('(min-width: 821px)').addEventListener('change',event=>{if(event.matches)setNavigation(false);});
document.querySelector('#year').textContent=new Date().getFullYear();

// Reveal each core-belief step in order, then leave it readable.
const beliefFlow=document.querySelector('.belief-flow');if(beliefFlow&&'IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){beliefFlow.classList.add('reveal-ready');const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){beliefFlow.classList.add('is-revealed');observer.disconnect();}},{threshold:.2});observer.observe(beliefFlow);}

// Duplicate only decorative cards; assistive technology reads each card once.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.card-rail').forEach(rail=>{
 const track=rail.querySelector('.card-track');
 const copy=track.firstElementChild.cloneNode(true);
 copy.classList.add('card-duplicate');copy.setAttribute('aria-hidden','true');copy.setAttribute('inert','');track.appendChild(copy);
 rail.classList.add('is-ready');
 const button=document.querySelector(`[data-motion="${rail.id}"]`);
 const syncControl=()=>{if(button)button.hidden=reducedMotion.matches;};syncControl();reducedMotion.addEventListener('change',syncControl);
 button?.addEventListener('click',()=>{const paused=rail.classList.toggle('is-paused');button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Resume motion':'Pause motion';});
});

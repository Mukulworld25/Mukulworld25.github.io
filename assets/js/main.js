
async function loadProfile(){
  const res = await fetch('data/profile.json');
  const profile = await res.json();
  const skillsEl = document.getElementById('skills');
  profile.skills.forEach(s=>{
    const span=document.createElement('span');
    span.textContent=s;
    span.style.margin='6px 10px';
    span.style.padding='6px 10px';
    span.style.background='rgba(255,255,255,0.04)';
    span.style.borderRadius='999px';
    skillsEl.appendChild(span);
  });
  const timeline = document.getElementById('timeline');
  profile.experience.forEach(e=>{
    const div=document.createElement('div');
    div.innerHTML = `<strong>${e.role}</strong> — ${e.company} <div style="color:#9fb2c8">${e.start} — ${e.end}</div><p>${e.desc}</p>`;
    div.style.marginBottom='12px';
    timeline.appendChild(div);
  });
}
loadProfile();
window.addEventListener('resize', ()=>{const c=document.getElementById('particles');c.width=window.innerWidth;c.height=window.innerHeight;});


async function loadProfile(){
  const res = await fetch('data/profile.json');
  const profile = await res.json();
  const skillsEl = document.getElementById('skills');
  profile.skills.forEach(s=>{
    const b = document.createElement('div');
    b.className = 'skill';
    b.innerText = s;
    skillsEl.appendChild(b);
  });
  const timeline = document.getElementById('timeline');
  profile.experience.forEach(e=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<strong>${e.role}</strong> — ${e.company} <div>${e.start} — ${e.end}</div><p>${e.desc}</p>`;
    timeline.appendChild(card);
  });
  const certList = document.getElementById('cert-list');
  profile.certifications.forEach(c=>{
    const li = document.createElement('li');
    li.innerText = c;
    certList.appendChild(li);
  });
}
loadProfile();

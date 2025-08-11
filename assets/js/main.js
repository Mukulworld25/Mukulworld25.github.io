
// Load profile JSON and render dynamic parts
async function loadProfile(){
  const res = await fetch('data/profile.json');
  const profile = await res.json();

  // skills
  const skillsEl = document.getElementById('skills');
  profile.skills.forEach(s=>{
    const b = document.createElement('div');
    b.className = 'skill';
    b.innerText = s;
    b.title = s;
    skillsEl.appendChild(b);
  });

  // timeline
  const timeline = document.getElementById('timeline');
  profile.experience.forEach(e=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<strong>${e.role}</strong> — ${e.company} <div class="muted">${e.start} — ${e.end}</div><p>${e.desc}</p>`;
    timeline.appendChild(card);
  });

  // certs
  const certList = document.getElementById('cert-list');
  profile.certifications.forEach(c=>{
    const li = document.createElement('li');
    li.innerText = c;
    certList.appendChild(li);
  });
}

loadProfile();

// theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  themeBtn.innerText = document.body.classList.contains('light') ? '🌙' : '☀️';
});

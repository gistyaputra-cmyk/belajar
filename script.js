/* style.css - Attention Grabbing & Unique Theme */ *{ margin:0; padding:0; box-sizing:border-box; font-family:'Poppins', Arial, sans-serif; }

:root{ --bg-dark:#0b0f1a; --bg-light:#111827; --accent-1:#7c3aed; /* ungu / --accent-2:#06b6d4; / cyan / --accent-3:#facc15; / kuning */ --danger:#ef4444; --glass:rgba(255,255,255,0.12); }

body{ min-height:100vh; background: radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at bottom right, rgba(6,182,212,0.25), transparent 40%), linear-gradient(160deg, var(--bg-dark), var(--bg-light)); display:flex; justify-content:center; align-items:center; color:#f9fafb; }

.container{ width:min(420px,92vw); padding:30px; border-radius:20px; background:var(--glass); backdrop-filter:blur(14px); border:1px solid rgba(255,255,255,0.25); box-shadow:0 25px 50px rgba(0,0,0,0.6); animation:fadeUp 0.6s ease; }

@keyframes fadeUp{ from{opacity:0; transform:translateY(25px);} to{opacity:1; transform:translateY(0);} }

.container h1{ font-size:26px; font-weight:700; background:linear-gradient(90deg,var(--accent-1),var(--accent-2)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:8px; }

.container p{ font-size:14px; opacity:0.85; margin-bottom:20px; }

input{ width:100%; padding:14px; margin-bottom:16px; border-radius:14px; border:1px solid rgba(255,255,255,0.25); background:rgba(0,0,0,0.25); color:#fff; outline:none; transition:0.2s ease; }

input::placeholder{ color:rgba(255,255,255,0.55); }

input:focus{ border-color:var(--accent-2); box-shadow:0 0 0 2px rgba(6,182,212,0.35); }

button{ width:100%; padding:14px; border:none; border-radius:14px; font-weight:700; cursor:pointer; color:#020617; background:linear-gradient(135deg,var(--accent-3),var(--accent-2)); transition:transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease; }

button:hover{ transform:translateY(-2px) scale(1.01); box-shadow:0 18px 30px rgba(250,204,21,0.35); }

button:active{ transform:translateY(0); opacity:0.95; }

#error{ margin-top:10px; font-size:13px; color:#fecaca; }

.hidden{display:none;}

/* DASHBOARD */ header{ display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }

.logout{ width:auto; padding:8px 14px; font-size:13px; background:linear-gradient(135deg,#f87171,var(--danger)); color:#450a0a; }

.hero{ position:relative; overflow:hidden; border-radius:18px; padding:18px; margin-bottom:20px; background:linear-gradient(135deg,rgba(124,58,237,0.35),rgba(6,182,212,0.25)); }

.hero::after{ content:""; position:absolute; inset:0; background:linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent); }

.hero h2{ font-size:20px; margin-bottom:6px; }

.hero p{ font-size:14px; opacity:0.95; }

.products{ display:grid; gap:16px; }

.card{ padding:18px; border-radius:18px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.25); transition:0.2s ease; }

.card:hover{ transform:translateY(-4px) rotate(-0.3deg); box-shadow:0 20px 40px rgba(0,0,0,0.5); }

.card h3{ font-size:16px; margin-bottom:6px; color:var(--accent-3); }

.card p{ font-size:13px; opacity:0.9; }

.card button{ margin-top:12px; }

@media(min-width:640px){ .products{ grid-template-columns:repeat(2,1fr); } }

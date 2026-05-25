window.loginViewTemplate = `
<div id="loginScreen" class="login-screen d-flex justify-content-center align-items-center min-vh-100 px-3">
  <div class="card auth-card shadow-lg bg-dark border-secondary p-4" style="max-width: 540px;">
    <h2 class="h3 text-white mb-2">Login obrigatório</h2>
    <p class="text-white-50 mb-4">Entre ou registre-se para acessar o Bolão e salvar seus palpites.</p>
    <div class="mb-3">
      <label for="authEmail" class="form-label text-white">Email</label>
      <input id="authEmail" type="email" class="form-control form-control-dark text-white bg-secondary border-secondary" placeholder="seu@email.com" />
    </div>
    <div class="mb-3">
      <label for="authPassword" class="form-label text-white">Senha</label>
      <input id="authPassword" type="password" class="form-control form-control-dark text-white bg-secondary border-secondary" placeholder="Senha segura" />
    </div>
    <div class="d-flex flex-wrap gap-2 mb-3">
      <button class="btn btn-outline-light" id="signInButton" type="button">Entrar</button>
      <button class="btn btn-outline-light" id="signUpButton" type="button">Registrar</button>
    </div>
    <div id="authStatus" class="auth-status text-white">Você não está autenticado.</div>
  </div>
</div>
`;

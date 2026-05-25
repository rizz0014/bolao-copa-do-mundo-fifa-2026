window.appShellTemplate = `
<div class="app-shell container py-4 hidden" id="appShell">
  <header class="topbar d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 p-4 rounded-4 border border-secondary bg-dark bg-opacity-75 shadow">
    <div>
      <span class="brand d-block fw-bold">Bolão Copa 2026 ⚽</span>
      <p class="subtitle mb-0 text-secondary">Cronograma oficial, palpites e ranking da disputa entre Gé e Gui.</p>
    </div>
    <div class="d-flex flex-wrap align-items-center gap-2">
      <span class="hero-badge badge bg-warning text-dark">Copa do Mundo 2026</span>
      <button class="btn btn-outline-light" id="signOutButton" type="button" style="display:none;">Sair</button>
    </div>
  </header>
  ${window.navViewTemplate}
  <main class="content">
    ${window.calendarViewTemplate}
    ${window.participantsViewTemplate}
    ${window.predictionsViewTemplate}
    ${window.rankingViewTemplate}
  </main>
</div>
`;

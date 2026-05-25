window.predictionsViewTemplate = `
<section id="predictions" class="panel">
  <div class="panel-header">
    <div>
      <h2>Controle de palpites</h2>
      <p>Se você estiver autenticado, seu palpite será atribuído automaticamente ao usuário logado.</p>
    </div>
  </div>
  <form id="predictionForm" class="card form-card p-4 shadow-sm bg-dark border-secondary">
    <div class="mb-3" id="predictionParticipantField">
      <label class="form-label text-white">Participante</label>
      <select id="predictionParticipant" class="form-select form-select-dark text-white bg-secondary border-secondary" required></select>
    </div>
    <div id="predictionUserInfo" class="text-secondary mb-3 d-none"></div>
    <div class="mb-3">
      <label class="form-label text-white">Jogo</label>
      <select id="predictionMatch" class="form-select form-select-dark text-white bg-secondary border-secondary" required></select>
    </div>
    <div class="match-summary mb-3">
      <span class="text-secondary">Jogo escolhido:</span>
      <strong id="selectedMatchText" class="text-white">Selecione um jogo para ver mandante e visitante</strong>
    </div>
    <div class="row g-3 mb-3">
      <div class="col-12 col-md-6">
        <label class="form-label text-white">Gols do mandante</label>
        <input id="predictionHome" class="form-control form-control-dark text-white bg-secondary border-secondary" type="number" min="0" placeholder="Ex: 2" required />
      </div>
      <div class="col-12 col-md-6">
        <label class="form-label text-white">Gols do visitante</label>
        <input id="predictionAway" class="form-control form-control-dark text-white bg-secondary border-secondary" type="number" min="0" placeholder="Ex: 1" required />
      </div>
    </div>
    <div class="text-secondary mb-3">Use os campos acima para inserir o placar do mandante e do visitante conforme o jogo selecionado.</div>
    <button class="btn btn-primary" type="submit">Salvar palpite</button>
  </form>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Participante</th>
          <th>Jogo</th>
          <th>Previsão</th>
          <th>Resultado</th>
          <th>Pontos</th>
        </tr>
      </thead>
      <tbody id="predictionsTable"></tbody>
    </table>
  </div>
</section>
`;

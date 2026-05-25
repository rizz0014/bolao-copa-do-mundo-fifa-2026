window.rankingViewTemplate = `
<section id="ranking" class="panel">
  <div class="panel-header">
    <div>
      <h2>Classificação e ranking</h2>
      <p>Acertos e pontos atualizados automaticamente.</p>
    </div>
    <div class="share-actions d-flex flex-wrap gap-2">
      <button class="btn btn-outline-light" id="exportButton" type="button">Copiar dados do bolão</button>
      <button class="btn btn-outline-light" id="downloadButton" type="button">Baixar JSON</button>
      <button class="btn btn-outline-light" id="cloudSaveButton" type="button">Salvar na nuvem</button>
      <button class="btn btn-outline-light" id="cloudLoadButton" type="button">Carregar da nuvem</button>
      <label class="btn btn-outline-light" for="importFile">Importar bolão</label>
      <input id="importFile" type="file" accept="application/json" hidden />
    </div>
  </div>
  <div class="prize-banner">
    <span>🏆 Prêmio do Bolão</span>
    <p>Quem terminar em último paga o sorvete. Se houver empate na pontuação, será decidido no Jokenpô (melhor de 3).</p>
    <p><strong>Local a critério do vencedor.</strong></p>
  </div>
  <div class="scorecards" id="scoreCards"></div>
  <div class="table-responsive">
    <table class="table table-dark table-striped align-middle mb-0">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Participante</th>
          <th>Pontos</th>
          <th>Exatos</th>
          <th>Resultado certo</th>
        </tr>
      </thead>
      <tbody id="rankingTable"></tbody>
    </table>
  </div>
  <div class="bottom-note">
    <p>Recebe sorvete quem tiver menos pontos. <strong>Local a critério do vencedor.</strong></p>
  </div>
</section>
`;

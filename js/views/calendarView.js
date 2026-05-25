window.calendarViewTemplate = `
<section id="calendar" class="panel active">
  <div class="panel-header">
    <div>
      <h2>Calendário oficial</h2>
      <p>Veja os 104 jogos da Copa 2026 e registre os resultados reais.</p>
    </div>
    <div class="filters d-flex flex-wrap gap-3 align-items-center">
      <select id="stageFilter" class="form-select form-select-sm w-auto" aria-label="Filtrar por fase"></select>
      <input id="teamSearch" class="form-control form-control-sm w-auto flex-grow-1" type="search" placeholder="Buscar seleção" aria-label="Buscar seleção" />
      <div class="btn-group" role="group" aria-label="Selecionar fuso horário">
        <button type="button" class="btn btn-outline-light toggle-button timezone-toggle active" data-timezone="br">Brasil</button>
        <button type="button" class="btn btn-outline-light toggle-button timezone-toggle" data-timezone="ca">Canadá</button>
      </div>
      <div class="btn-group" role="group" aria-label="Selecionar visualização do calendário">
        <button type="button" class="btn btn-outline-light toggle-button view-toggle active" data-view="grid">Grade</button>
        <button type="button" class="btn btn-outline-light toggle-button view-toggle" data-view="list">Lista</button>
      </div>
    </div>
  </div>
  <div class="visual-calendar">
    <h3 class="section-title">Calendário</h3>
    <div id="calendarGrid" class="calendar-grid" aria-live="polite"></div>
  </div>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Jogo</th>
          <th>Data</th>
          <th>Fase</th>
          <th>Mandante</th>
          <th>Visitante</th>
          <th>Estádio</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody id="calendarTable"></tbody>
    </table>
  </div>
</section>
`;

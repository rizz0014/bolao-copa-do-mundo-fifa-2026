window.participantsViewTemplate = `
<section id="participants" class="panel">
  <div class="panel-header">
    <div>
      <h2>Participantes: Gé e Gui</h2>
      <p>Gé e Gui já estão cadastrados. Use este formulário apenas para ajustar apelidos ou corrigir detalhes.</p>
    </div>
  </div>
  <form id="participantForm" class="card form-card p-4 shadow-sm bg-dark border-secondary">
    <div class="mb-3">
      <label class="form-label text-white">Nome</label>
      <input id="participantName" class="form-control form-control-dark text-white bg-secondary border-secondary" required placeholder="Nome completo" />
    </div>
    <div class="mb-3">
      <label class="form-label text-white">Email</label>
      <input id="participantEmail" type="email" class="form-control form-control-dark text-white bg-secondary border-secondary" placeholder="opcional" />
    </div>
    <div class="mb-3">
      <label class="form-label text-white">Apelido</label>
      <input id="participantNickname" class="form-control form-control-dark text-white bg-secondary border-secondary" placeholder="Como será exibido" />
    </div>
    <button class="btn btn-primary" type="submit">Adicionar / Atualizar participante</button>
  </form>
  <div class="card table-card p-4 shadow-sm bg-dark border-secondary">
    <h3 class="h5 text-white">Participantes cadastrados</h3>
    <ul id="participantsList" class="list-group list-group-flush"></ul>
  </div>
</section>
`;

document.addEventListener("DOMContentLoaded", () => {
    if (typeof chargeOpsData === 'undefined') {
        document.getElementById('ia-content').innerHTML = "⚠️ Erro: Os dados simulados não foram encontrados. Execute o arquivo <code>charge_ops_core.py</code> no terminal primeiro.";
        return;
    }

    const data = chargeOpsData;
    
    // Injeta a IA
    document.getElementById('ia-content').innerHTML = `
        <strong>Score de Otimização da Rede:</strong> ${data.ia_insights.score_otimizacao}/100 <br>
        <strong>Recomendação Ativa:</strong> ${data.ia_insights.recomendacao}
    `;

    // Calcula os Totais
    let totalKwh = 0;
    let totalCost = 0;
    const tbody = document.querySelector('#sessions-table tbody');
    
    // Pegando as 15 sessões mais recentes para a visualização
    const sessoesRecentes = data.sessoes.slice(-15).reverse();

    sessoesRecentes.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${s.usuario}</strong></td>
            <td>${s.hora_inicio}h00</td>
            <td>${s.kwh.toFixed(2)} kWh</td>
            <td><span class="tag ${s.tipo_tarifa}">${s.tipo_tarifa}</span> (R$ ${s.valor_kwh})</td>
            <td>R$ ${s.custo_total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    // Atualiza os Cards
    const sumKwhAll = data.sessoes.reduce((acc, curr) => acc + curr.kwh, 0);
    const sumCostAll = data.sessoes.reduce((acc, curr) => acc + curr.custo_total, 0);
    
    document.getElementById('total-kwh').innerText = sumKwhAll.toFixed(1);
    document.getElementById('total-cost').innerText = 'R$ ' + sumCostAll.toFixed(2);
    document.getElementById('total-sessions').innerText = data.sessoes.length;
});

EV ChargeOps - Enterprise Challenge 2026

## Sobre o Projeto
O EV ChargeOps é um sistema de rateio inteligente e otimização por IA para carregadores de veículos elétricos (GoodWe HCA G2) em infraestruturas compartilhadas de condomínios e faculdades.

Nesta sprint, entregamos o protótipo funcional baseado na arquitetura aprovada na Sprint 01. O motor lógico implementa a tarifação justificada (*Time-of-Use*) e a Inteligência Artificial prediz a capacidade do sistema para sugerir janelas ideais de recarga.

## Estrutura e Tecnologias
- **Motor Lógico e IA:** `charge_ops_core.py` (Python 3). Centraliza as regras de rateio e aplica a lógica estrutural da IA analisando dados passados.
- **Protótipo / Interface:** `index.html`, `style.css`, `app.js` (Web Nativo). Lê a base exportada pelo motor lógico e constrói a visão do usuário/gestor.

## Como executar o protótipo (Evidências)
Para avaliar o funcionamento:
1. Abra o terminal na pasta do projeto e execute a lógica central em Python:
   ```bash
   python charge_ops_core.py
   ```
   *Este comando processará as sessões e calculará o algoritmo da IA, salvando o output no arquivo `dados_processados.js`.*
2. Em seguida, dê um clique duplo em `index.html` para abri-re no navegador. O dashboard consumirá a lógica gerada e exibirá as evidências dinâmicas e o rateio na interface.

## Decisões Técnicas
- **Formato Transacional:** O arquivo de saída Python não foi formatado como JSON puro para o MVP, mas sim exportado como uma variável JavaScript direta (`dados_processados.js`). *Justificativa:* Isso evita problemas locais de política CORS no navegador, permitindo que a banca teste o protótipo sem precisar subir um servidor Node ou Python HTTP.

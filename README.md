# GS_2024

## Versões:
- **V 1.0**: Lançamento Inicial.
- **V 2.0**: Menu de escolha de carregamento Rápido e Normal Adicionados, adicionado opções de pagamento.
- **V 2.1**: Ajustes na formatação do código, estética e documentação/manual.

## Manual

### Front-END
Quando o usuário conecta o carro na estação de carregamento, ele pode clicar em "Abastecer meu veículo". Depois disto, ele vai ter duas opções: recarga rápida ou normal. Após a escolha, vai aparecer uma tela de pagamento com três opções: Crédito, Débito ou Pix, além da opção de retornar ao menu de escolha caso o cliente tenha selecionado a opção errada. Após escolher a opção de pagamento, o usuário vai se deparar na tela de carregamento do carro, que mostra o nome do usuário, o modelo do carro, a barra de carregamento e a porcentagem carregada, e quanto tempo falta para a carga completa.

### Back-END
O código é formado por três partes:
- **assets**: Contém o CSS que dá a aparência da aplicação e o JavaScript que controla o monitoramento do abastecimento do carro, a porcentagem de abastecimento, quanto tempo vai levar, além de conectar com o servidor que armazena o nome e o modelo do carro do cliente.
- **publico**: Armazena as páginas HTML do projeto, desde a tela inicial, a tela de escolha de carregamento, de pagamento e a tela de carregamento em si.
- **server**: Armazena o código que monitora os servidores Node.js e a base de dados SQLite, onde ficam as informações do cliente, como o nome e o modelo do carro.

## Observação importante:
Sempre que for abrir o código, utilizar o comando no terminal `npm start`.
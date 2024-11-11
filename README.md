Painel de Controle com Sidebar para Unicuritiba
Este projeto implementa um painel de controle com uma sidebar personalizada para o Unicuritiba, com funcionalidades de navegação entre seções, destaque de item selecionado, e uma transição suave para cada seleção.

Estrutura do Projeto
index.html: Estrutura HTML principal.
style.css: Arquivo CSS para estilização.
script.js: Arquivo JavaScript para controle de navegação.
Imagens:
unicu.png: Logo do Unicuritiba para o topo da sidebar.
Ícones adicionais para cada item da sidebar (exemplo: dashboard-icon.png, consultas-icon.png, etc.).
Funcionalidades e Estilizações
1. Estrutura Básica do HTML
O arquivo index.html contém a estrutura principal do painel com a sidebar, o cabeçalho, e seções individuais para navegação. Cada item da sidebar representa uma seção do painel (Dashboard, Consultas, Prontuário, etc.).

2. Logo na Sidebar
A logo unicu.png foi adicionada ao topo da sidebar.
Para centralizar a logo e ajustá-la sem margens extras:
css

.logo {
    width: 150px;
    margin: 0;
}
3. Estilo da Sidebar
Cada item da sidebar é estilizado para ter uma transição suave de cor ao ser selecionado. O estilo de base para os itens é definido da seguinte forma:

css

.sidebar ul li a {
    display: flex;
    align-items: center;
    padding: 15px;
    color: #fff;
    text-decoration: none;
    font-weight: normal;
    transition: background-color 0.3s linear, color 0.3s linear;
    border-radius: 8px;
    margin: 5px 0;
}
4. Efeito de Seleção com Fundo Branco e Arredondamento à Esquerda
Quando um item da sidebar é selecionado, ele ganha um fundo branco com apenas os cantos esquerdo arredondados, e um espaçamento entre o fundo e a borda esquerda da sidebar.

css

.sidebar ul li a.selected {
    background-color: #ffffff;
    color: #1a1a5e;
    font-weight: bold;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-left: 10px;
    padding-left: 10px;
}
5. Ajuste do Tamanho dos Ícones na Sidebar
Para reduzir o tamanho dos ícones e alinhá-los ao texto:

css

.sidebar ul li a img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    filter: brightness(5); /* Mantém o ícone claro para itens não selecionados */
}
6. Transição Suave ao Selecionar um Item
Para adicionar uma transição suave entre a seleção de diferentes itens da sidebar, aplicamos a propriedade transition aos elementos .sidebar ul li a e .sidebar ul li a.selected.

7. JavaScript para Gerenciamento de Navegação e Estado Selecionado
O JavaScript controla a navegação e o estado selecionado na sidebar. Ele remove a classe selected de todos os links e aplica apenas ao item atualmente clicado. Também alterna a exibição das seções.

javascript

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remover a classe 'selected' de todos os links
            links.forEach(link => link.classList.remove('selected'));

            // Adicionar a classe 'selected' ao link clicado
            link.classList.add('selected');

            // Gerenciar a exibição das seções
            const target = document.querySelector(link.getAttribute('href'));
            sections.forEach(section => section.classList.remove('active'));
            target.classList.add('active');
        });
    });

    // Mostrar a primeira seção por padrão
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
8. Ajuste de Layout no Cabeçalho
No cabeçalho, adicionamos uma área de perfil à direita, com um ícone de notificação, a foto do usuário, e o nome. Para remover margens ou padding indesejados, usamos:

css

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
}
9. Como Executar o Projeto
Baixe ou clone este repositório.
Coloque as imagens no mesmo diretório dos arquivos.
Abra index.html em um navegador para visualizar o painel.
Estrutura de Arquivos
bash

/projeto
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilo CSS
├── script.js           # JavaScript para navegação
├── unicu.png           # Logo da sidebar
├── dashboard-icon.png  # Ícones de exemplo para cada item da sidebar
├── consultas-icon.png
└── ...                 # Outros ícones e recursos adicionais
Conclusão
Este projeto implementa um painel de controle simples e elegante com uma sidebar customizável. Ele inclui uma navegação com transição suave, um layout responsivo para o cabeçalho, e ícones alinhados conforme o design solicitado.
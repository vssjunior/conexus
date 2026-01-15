# Conexus & Cia - Site Comercial

![Conexus & Cia](https://img.shields.io/badge/Status-Ativo-green) ![GitHub Pages](https://img.shields.io/badge/Hospedagem-GitHub%20Pages-blue) ![HTML5](https://img.shields.io/badge/HTML5-orange) ![CSS3](https://img.shields.io/badge/CSS3-blue) ![JavaScript-yellow](https://img.shields.io/badge/JavaScript-yellow)

Repositório do site comercial **Conexus & Cia** - Soluções de T.I. para Redes de Computadores.

## 📋 Sobre

**Conexus & Cia** é uma empresa especializada em soluções de tecnologia da informação com foco em redes de computadores, localizada em Lavras, Minas Gerais.

### Informações da Empresa

- **Nome:** Conexus & Cia
- **Especialidade:** Soluções de T.I. e Redes de Computadores
- **Localização:** Lavras, MG - Brasil
- **Telefone:** (35) 99195-8111
- **Email:** contato@conexusecia.com.br
- **Website:** [www.conexusecia.com.br](https://www.conexusecia.com.br)
- **Facebook:** [facebook.com/conexusecia](https://facebook.com/conexusecia)

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e design
- **JavaScript** - Interatividade
- **GitHub Pages** - Hospedagem

### Arquitetura

O site utiliza **frameset** HTML (estrutura com 3 frames):
- **Header (20%)** - Menu de navegação e logo
- **Main Content (70%)** - Conteúdo principal dinâmico
- **Footer (10%)** - Informações de contato

## 📁 Estrutura do Projeto

```
conexus/
├── index.html                    # Arquivo principal (frameset)
├── cabecalho.html               # Header com menu
├── home.html                    # Página inicial
├── footer.html                  # Rodapé
├── servicos.html                # Página de serviços
├── servicos-conexus.html        # Detalhes dos serviços
├── fotos.html                   # Galeria de fotos
├── cadastro.html                # Formulário de cadastro
├── fale-conosco.html            # Formulário de contato
│
├── _css/                        # Estilos CSS
│   ├── estilo.css               # Principal
│   ├── fotos.css                # Galeria
│   ├── fotos-clientes.css       # Logos
│   ├── servicos.css             # Serviços
│   └── form.css                 # Formulários
│
├── _javascript/                 # Scripts JavaScript
│   └── funcoes.js               # Funções principais
│
├── _imagens/                    # Imagens e recursos
│
├── _fonts/                      # Fontes customizadas
│
├── docs/                        # 📚 Documentação do projeto
│   ├── README.md                # Índice da documentação
│   ├── DOCUMENTACAO.md          # Guia completo
│   ├── GUIA_RAPIDO.md           # Tarefas comuns
│   ├── DOCUMENTACAO_TECNICA.md  # Info técnica
│   └── MAPA_SITE.md             # Mapa de navegação
│
├── CNAME                        # Configuração de domínio
├── composer.json                # Dependências (PHP)
└── README.md                    # Este arquivo
```

## 🚀 Como Usar Localmente

### Opção 1: Abrir no Navegador Diretamente

1. Acesse a pasta do projeto
2. Clique em `index.html`
3. Abra com o navegador (Chrome, Firefox, Edge, etc.)

### Opção 2: Com Servidor Local (Recomendado)

**Python 3:**
```bash
cd conexus
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

## 📖 Documentação

Documentação completa disponível em `/docs`:

- **[docs/README.md](docs/README.md)** - Índice e guia de navegação
- **[docs/DOCUMENTACAO.md](docs/DOCUMENTACAO.md)** - Guia completo do projeto
- **[docs/GUIA_RAPIDO.md](docs/GUIA_RAPIDO.md)** - Tarefas comuns prontas para copiar-colar
- **[docs/DOCUMENTACAO_TECNICA.md](docs/DOCUMENTACAO_TECNICA.md)** - Informações técnicas para desenvolvedores
- **[docs/MAPA_SITE.md](docs/MAPA_SITE.md)** - Estrutura visual e mapa de navegação

## 🔧 Desenvolvimento

### Adicionar Nova Página

1. Copie `home.html` com novo nome
2. Atualize o conteúdo
3. Adicione o link no menu em `cabecalho.html`
4. Teste localmente

### Modificar Estilos

1. Edite o arquivo CSS apropriado em `_css/`
2. Teste as mudanças localmente
3. Commit e push

### Adicionar Imagens

1. Salve em `_imagens/`
2. Reference com: `src="./_imagens/arquivo.jpg"`
3. **IMPORTANTE:** Use `./` no início do caminho!

## ⚠️ Problemas Conhecidos e Resolvidos

### Problema: CSS não carregava em GitHub Pages ✅ RESOLVIDO

**Sintoma:** Erro 404 - Failed to load resource  
**Causa:** Caminhos relativos sem `./`  
**Solução:** Alterar `_css/` para `./_css/` em todos os arquivos  
**Status:** Resolvido em 14/01/2026

Veja mais em [docs/DOCUMENTACAO.md#problemas-conhecidos](docs/DOCUMENTACAO.md#-problemas-conhecidos-e-soluções)

## 📝 Commits Recentes

```
991fc45 - fix: Corrige caminhos de recursos com prefixo ./ para GitHub Pages
6f3b823 - docs: Adiciona documentação completa do projeto
```

## 🎯 Roadmap

- [x] Site funcional localmente
- [x] Deploy em GitHub Pages
- [x] Documentação completa
- [ ] Responsividade mobile
- [ ] Migração de frameset para HTML5 moderno
- [ ] SEO otimizado
- [ ] Formulários com backend

## 📞 Contato

- **Email:** contato@conexusecia.com.br
- **Telefone:** (35) 99195-8111
- **Facebook:** [conexusecia](https://facebook.com/conexusecia)

## 📄 Licença

Projeto proprietário - Conexus & Cia 2018-2026

---

## ✨ Mais Informações

Para dúvidas sobre **manutenção e desenvolvimento**, consulte a [documentação em `/docs`](docs/README.md).

**Última atualização:** 14 de janeiro de 2026

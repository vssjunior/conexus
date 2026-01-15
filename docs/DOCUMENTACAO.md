# Documentação - Site Conexus & Cia

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Tecnologia Utilizada](#tecnologia-utilizada)
4. [Problemas Conhecidos e Soluções](#problemas-conhecidos-e-soluções)
5. [Guia de Manutenção](#guia-de-manutenção)
6. [Padrões de Codificação](#padrões-de-codificação)

---

## 🎯 Visão Geral

**Projeto:** Conexus & Cia - Site Comercial  
**URL:** www.conexusecia.com.br  
**Tipo:** Site estático com HTML/CSS/JavaScript  
**Hospedagem:** GitHub Pages com domínio customizado (CNAME)  
**Linguagem do Site:** Português Brasileiro

### Informações da Empresa
- **Nome:** Conexus & Cia
- **Ramo:** Soluções de T.I. para Redes de Computadores
- **Localização:** Lavras, MG
- **Contato:** contato@conexusecia.com.br / (35) 99195-8111

---

## 📁 Estrutura do Projeto

```
conexus/
├── index.html                 # Arquivo principal (frameset)
├── cabecalho.html            # Header do site (menu + logo)
├── home.html                 # Página inicial (conteúdo principal)
├── footer.html               # Rodapé do site
├── servicos.html             # Página de serviços (mapa interativo)
├── servicos-conexus.html     # Detalhes dos serviços
├── fotos.html                # Galeria de fotos/clientes
├── cadastro.html             # Formulário de cadastro
├── fale-conosco.html         # Formulário de contato
│
├── _css/                     # Pasta de estilos CSS
│   ├── estilo.css            # CSS principal
│   ├── fotos.css             # Estilos da galeria
│   ├── fotos-clientes.css    # Estilos dos logos dos clientes
│   ├── servicos.css          # Estilos da página de serviços
│   └── form.css              # Estilos dos formulários
│
├── _javascript/              # Pasta de scripts JavaScript
│   └── funcoes.js            # Funções principais do site
│
├── _imagens/                 # Pasta de imagens
│   ├── conexus-*.jpg         # Imagens do site
│   ├── botao-*.png           # Botões de ação
│   └── [outras imagens]      # Fotos e recursos visuais
│
├── _fonts/                   # Pasta de fontes customizadas
│
├── consultorio/              # Pasta específica (finalidade desconhecida)
│
├── CNAME                     # Configuração de domínio customizado
├── composer.json             # Arquivo de dependências PHP (se aplicável)
├── README.md                 # Documentação do repositório
├── .DS_Store                 # Arquivo do macOS (sistema)
│
└── docs/                     # 📄 Documentação (ESTA PASTA)
    └── DOCUMENTACAO.md       # Este arquivo
```

---

## 🛠️ Tecnologia Utilizada

### Estrutura HTML
- **HTML5** com doctype moderno
- **Frameset** para dividir a página em 3 seções:
  - 20% - Header (cabecalho.html)
  - 70% - Conteúdo principal (home.html ou outras páginas)
  - 10% - Footer (footer.html)

### Estilo
- **CSS puro** (sem preprocessadores como SASS)
- Arquivos CSS organizados por seção/funcionalidade
- Estilos responsivos (aproximados)

### Interatividade
- **JavaScript vanilla** (sem frameworks)
- Funções auxiliares em `_javascript/funcoes.js`
- Navegação entre páginas via atributo `target="principal"` (frames)

### Hospedagem
- **GitHub Pages** (repositório público)
- **Domínio customizado** via CNAME (www.conexusecia.com.br)

---

## ⚠️ Problemas Conhecidos e Soluções

### Problema 1: CSS não carrega em produção (GitHub Pages)

**Descrição:** 
Localmente o site carregava normalmente, mas em produção no GitHub Pages recebia erro `404 - Failed to load resource`.

**Causa Raiz:**
- Uso de **frameset** com caminhos relativos absolutos (`_css/estilo.css`)
- Em ambientes de arquivo local (`file://`), caminhos relativos não funcionam corretamente com frames
- A tag `<base href="/">` quebrou o carregamento local

**Solução Implementada:**
Alterar todos os caminhos de recursos para usar caminhos **relativos com prefixo `./ `**:

```html
<!-- ❌ Antes (não funciona localmente) -->
<link rel="stylesheet" type="text/css" href="_css/estilo.css">
<script src="_javascript/funcoes.js"></script>
<img src="_imagens/foto.jpg">

<!-- ✅ Depois (funciona em ambos os ambientes) -->
<link rel="stylesheet" type="text/css" href="./_css/estilo.css">
<script src="./_javascript/funcoes.js"></script>
<img src="./_imagens/foto.jpg">
```

**Arquivos Alterados:**
- cabecalho.html
- home.html
- footer.html
- servicos.html
- fotos.html
- cadastro.html
- fale-conosco.html
- servicos-conexus.html

**Status:** ✅ Resolvido (Janeiro/2026)

---

## 📖 Guia de Manutenção

### Adicionar Novas Páginas

1. **Criar novo arquivo HTML** baseado em `home.html`
2. **Manter estrutura consistente:**
   - Head com charset e links de CSS
   - Estrutura de divs para layout
   - Scripts de JavaScript no final

3. **Adicionar link no menu:**
   - Editar `cabecalho.html`
   - Adicionar `<li>` com `<a href="nova-pagina.html" target="principal">`

4. **Exemplo:**
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Conexus & Cia - Nova Página</title>
        <link rel="stylesheet" type="text/css" href="./_css/estilo.css">
    </head>
    <body>
        <div id="interface">
            <section id="corpo">
                <!-- Conteúdo aqui -->
            </section>
            <aside id="lateral">
                <!-- Sidebar aqui -->
            </aside>
        </div>
    </body>
</html>
```

### Atualizar Estilos CSS

1. Localizar o arquivo CSS apropriado em `_css/`
2. Modificar apenas as classes/ids necessárias
3. Testar localmente antes de fazer commit
4. Fazer commit com mensagem descritiva

### Adicionar Imagens

1. Salvar imagens em `_imagens/`
2. **IMPORTANTE:** Usar prefixo `./` ao referenciar:
   ```html
   <img src="./_imagens/nova-foto.jpg" alt="Descrição">
   ```

### Testar Localmente

1. Abrir `index.html` diretamente no navegador
2. Verificar se todos os CSS e imagens carregam
3. Clicar em todos os links do menu
4. Testar formulários

### Deploy para GitHub Pages

1. Fazer commit das alterações:
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push origin main
   ```

2. Aguardar alguns minutos para GitHub Pages processar
3. Testar em www.conexusecia.com.br
4. Limpar cache do navegador se necessário (Ctrl+Shift+Delete)

---

## 🎨 Padrões de Codificação

### Caminhos de Recursos

**SEMPRE** usar o prefixo `./` para caminhos relativos:

```html
<!-- CSS -->
<link rel="stylesheet" type="text/css" href="./_css/estilo.css">

<!-- JavaScript -->
<script src="./_javascript/funcoes.js"></script>

<!-- Imagens -->
<img src="./_imagens/foto.jpg" alt="Descrição">

<!-- Navegação interna -->
<a href="servicos.html" target="principal">Serviços</a>
```

### Estrutura HTML Padrão

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Conexus & Cia - [Página]</title>
        <link rel="stylesheet" type="text/css" href="./_css/estilo.css">
        <!-- Adicione outros CSS específicos aqui -->
    </head>
    <body>
        <div id="interface">
            <section id="corpo">
                <!-- Conteúdo principal -->
            </section>
            <aside id="lateral">
                <!-- Sidebar/Conteúdo lateral -->
            </aside>
        </div>
        
        <script src="./_javascript/funcoes.js"></script>
    </body>
</html>
```

### Convenções de Nomenclatura

- **Classes CSS:** `classe-descritiva` (kebab-case)
- **IDs HTML:** `id-descritivo` (kebab-case)
- **Arquivos:** `nome-arquivo.html` (kebab-case)
- **Pastas:** `_nomepasta` (prefixo underscore)

### Comentários em HTML

```html
<!-- Descrição do que a seção faz -->
<section id="corpo">
    <!-- Conteúdo aqui -->
</section>
```

### Acessibilidade

- Sempre use `alt` em imagens
- Use `lang="pt-br"` em tags `<html>`
- Mantenha semântica HTML (use `<section>`, `<aside>`, `<article>`, etc.)

---

## 📱 Responsividade

O site foi desenvolvido originalmente para desktop com **frameset**, que é obsoleto em HTML5. 

**Limitações Atuais:**
- Não é mobile-friendly (frameset não se adapta bem)
- Melhor visualização em telas desktop (1024px+)

**Recomendação Futura:**
Migrar de frameset para layout CSS moderno (flexbox/grid) para melhor suporte mobile.

---

## 🔐 Informações de Contato

Para manutenção do site:
- **Email:** contato@conexusecia.com.br
- **Telefone:** (35) 99195-8111
- **Repositório GitHub:** [URL do repositório]
- **Domínio:** www.conexusecia.com.br

---

## 📝 Histórico de Alterações

| Data | Alteração | Responsável |
|------|-----------|-------------|
| 14/01/2026 | Adição de `./` aos caminhos de recursos para corrigir carregamento em GitHub Pages | Copilot |
| 14/01/2026 | Criação desta documentação | Copilot |

---

## 💡 Dicas Úteis

1. **Limpar cache do GitHub Pages:** Pode levar até 5 minutos para refletir mudanças
2. **Testar localmente:** Sempre abra `index.html` no navegador antes de fazer push
3. **Formulários:** Verificar se os scripts de envio estão funcionando (backend)
4. **Menu:** Mantém estrutura consistente em `cabecalho.html`
5. **Backup:** Fazer commits regulares ao fazer alterações importantes

---

**Última atualização:** 14 de janeiro de 2026

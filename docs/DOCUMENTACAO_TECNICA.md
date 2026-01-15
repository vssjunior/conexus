# Documentação Técnica - Informações para Desenvolvedores

## 🔧 Ambiente de Desenvolvimento

### Requisitos
- Editor de texto (VS Code, Sublime, Notepad++, etc.)
- Git (para versionamento)
- Navegador moderno (Chrome, Firefox, Edge)

### Não Requer
- Node.js
- Servidor web local (funciona com `file://`)
- Compiladores
- Dependências npm

---

## 📋 Arquitetura do Site

### Padrão de Layout - Frameset (Obsoleto)

```
┌─────────────────────────────────┐
│    cabecalho.html (20%)          │
│  Header + Menu de Navegação      │
├─────────────────────────────────┤
│                                  │
│    home.html (70%)               │
│    (ou outra página)             │
│    Conteúdo Principal            │
│    + Sidebar                     │
│                                  │
├─────────────────────────────────┤
│    footer.html (10%)             │
│    Rodapé                        │
└─────────────────────────────────┘
```

**index.html:**
```html
<frameset rows="20%, *, 10%">
    <frame src="cabecalho.html" name="cabecalho">
    <frame src="home.html" name="principal" id="principal">
    <frame src="footer.html" name="footer">
</frameset>
```

### Fluxo de Navegação

```
Usuario clica em "Serviços" em cabecalho.html
           ↓
<a href="servicos.html" target="principal">
           ↓
Frame "principal" recarrega com servicos.html
           ↓
cabecalho.html e footer.html permanecem visíveis
```

---

## 🎨 Estrutura CSS

### Hierarquia de Importação

```html
<!-- Arquivo base -->
<link rel="stylesheet" type="text/css" href="./_css/estilo.css">

<!-- CSS específico da página -->
<link rel="stylesheet" type="text/css" href="./_css/pagina.css">
<link rel="stylesheet" type="text/css" href="./_css/form.css">
```

### Seletores Comuns

```css
/* Estrutura principal */
#interface { ... }       /* Container principal */
#corpo { ... }          /* Área de conteúdo */
#lateral { ... }        /* Sidebar direita */
#cabecalho { ... }      /* Seção do header */
#rodape { ... }         /* Seção do footer */

/* Componentes */
#menu { ... }           /* Menu de navegação */
#fotos-clientes { ... } /* Galeria de logos */
```

### Breakpoints (Responsividade Atual)

**NOTA:** Site NÃO é responsivo. Desenvolvido para desktop 1024px+

Recomendação futura: Adicionar media queries
```css
@media (max-width: 768px) {
    /* Estilos mobile */
}
```

---

## 💻 JavaScript

### Arquivo Principal
**`_javascript/funcoes.js`** - Funções auxiliares do site

Possíveis funções (verificar no arquivo):
- Validação de formulários
- Efeitos interativos
- Manipulação de eventos

### Como Adicionar Nova Função

1. Abra `_javascript/funcoes.js`
2. Adicione sua função:
```javascript
function minhaFuncao() {
    // Código aqui
}
```

3. Use no HTML:
```html
<button onclick="minhaFuncao()">Clique aqui</button>
```

---

## 📊 Mapeamento de Páginas

| URL | Arquivo | Descrição | Target Frame |
|-----|---------|-----------|--------------|
| / | index.html | Frameset principal | - |
| /cabecalho.html | cabecalho.html | Menu + logo | cabecalho |
| /home.html | home.html | Página inicial | principal |
| /servicos.html | servicos.html | Serviços (mapa) | principal |
| /servicos-conexus.html | servicos-conexus.html | Detalhes | principal |
| /fotos.html | fotos.html | Galeria | principal |
| /cadastro.html | cadastro.html | Formulário | principal |
| /fale-conosco.html | fale-conosco.html | Contato | principal |
| /footer.html | footer.html | Rodapé | footer |

---

## 🔄 Fluxo de Compilação/Deploy

### Local (Desenvolvimento)

```
1. Editar arquivos HTML/CSS/JS
2. Abrir index.html no navegador
3. Testar todas as funcionalidades
4. Commit + Push para GitHub
```

### GitHub Pages (Produção)

```
1. Push para repositório
   ↓
2. GitHub Pages detecta mudanças
   ↓
3. Publica em www.conexusecia.com.br (via CNAME)
   ↓
4. Aguardar 2-5 minutos para propagação
   ↓
5. Verificar em produção
```

---

## 🔗 URLs e Domínios

### Configuração CNAME
**Arquivo:** `CNAME`  
**Conteúdo:** `www.conexusecia.com.br`

Isso faz GitHub Pages servir o site em domínio customizado em vez de `username.github.io`.

### URLs de Referência

| Ambiente | URL |
|----------|-----|
| Local | `file:///E:/git/conexus/index.html` |
| Produção | `www.conexusecia.com.br` |
| GitHub | `github.com/[usuario]/conexus` |

---

## 🐛 Debugging

### Console JavaScript
1. Abra DevTools (F12)
2. Vá para aba "Console"
3. Procure por erros (mensagens vermelhas)

### Inspector de Elementos
1. Clique em DevTools
2. Aba "Elements" ou "Inspector"
3. Inspeção de estilos CSS aplicados

### Problemas Comuns

#### Frameset quebrado
- Verificar se `target="principal"` está correto
- Verificar se o arquivo carregado existe

#### CSS não aplica
- Confirmar prefixo `./` no href
- Limpar cache (Ctrl+Shift+Delete)
- Verificar console para erros 404

#### Imagem não mostra
- Verificar se arquivo existe em `_imagens/`
- Confirmar prefixo `./` no src
- Verificar console para erro 404

---

## 📈 Performance

### Otimizações Atuais
- CSS minificado? Não (verificar)
- JavaScript minificado? Não (verificar)
- Imagens comprimidas? Possivelmente

### Recomendações
1. Comprimir imagens (usar TinyPNG, ImageOptim)
2. Minificar CSS e JS (ferramentas online)
3. Lazy loading para imagens
4. Cache-busting para CSS (adicionar versão: `estilo.css?v=1.0`)

---

## 🔐 Segurança

### Considerações

1. **Formulários:** Verificar se backend processa dados com segurança
2. **Validação:** Sempre validar no servidor, não apenas client-side
3. **HTTPS:** GitHub Pages fornece HTTPS automaticamente
4. **CSRF:** Se tem formulários, implementar proteção CSRF

### Recomendações

```html
<!-- Adicionar ao head se houver formulários -->
<meta name="csrf-token" content="...">
```

---

## 🚀 Futuros Melhoramentos

### Curto Prazo
- [ ] Substituir frameset por layout CSS (flexbox/grid)
- [ ] Adicionar viewport meta tag
- [ ] Implementar responsividade
- [ ] Minificar CSS/JS

### Médio Prazo
- [ ] Migrar para sistema de build (Webpack/Vite)
- [ ] Adicionar pré-processador CSS (SASS)
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar testes automatizados

### Longo Prazo
- [ ] Migrar para framework moderno (React/Vue)
- [ ] Implementar CMS (WordPress/Strapi)
- [ ] Adicionar e-commerce
- [ ] Integração com analytics

---

## 📚 Referências Úteis

### Documentação
- [MDN Web Docs](https://developer.mozilla.org/) - Referência HTML/CSS/JS
- [W3Schools](https://www.w3schools.com/) - Tutoriais
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Ferramentas Online
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)
- [Image Compressor](https://tinypng.com/)
- [CSS Minifier](https://cssminifier.com/)

---

## 🤝 Git Workflow

### Criar Branch para Novas Features
```bash
git checkout -b feature/nome-feature
# Fazer alterações
git commit -m "Descrição clara"
git push origin feature/nome-feature
# Criar Pull Request no GitHub
```

### Commits Convencionais
```
feat: Adiciona nova funcionalidade
fix: Corrige bug na página X
docs: Atualiza documentação
style: Formata código
refactor: Reorganiza estrutura
test: Adiciona testes
```

---

## 📝 Logs e Versionamento

### Versão Atual
- **v1.0** - Site original com frameset
- **v1.1** - Correção de caminhos (14/01/2026)

### Histórico
```bash
git log --oneline          # Ver histórico compactado
git log --graph --all      # Ver árvore de branches
git show <commit-hash>     # Ver detalhes de um commit
```

---

**Última atualização:** 14 de janeiro de 2026
**Desenvolvido para:** Manutenção futura do site Conexus & Cia

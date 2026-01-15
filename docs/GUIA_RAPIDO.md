# Guia Rápido - Tarefas Comuns

## 🚀 Operações Mais Frequentes

### 1. Adicionar Novo Item no Menu

**Arquivo:** `cabecalho.html`

Procure por:
```html
<ul type="disc">
    <li>
        <a href="home.html" target="principal" >Home</a>
    </li>
    <!-- Adicione aqui -->
</ul>
```

Adicione:
```html
<li>
    <a href="nova-pagina.html" target="principal" >Meu Novo Item</a>
</li>
```

---

### 2. Adicionar Imagem

**Passo 1:** Salve a imagem em `_imagens/`

**Passo 2:** Use no HTML:
```html
<img src="./_imagens/minha-foto.jpg" alt="Descrição da foto">
```

⚠️ **IMPORTANTE:** Nunca esqueça do `./` no início!

---

### 3. Modificar Texto do Rodapé

**Arquivo:** `footer.html`

Procure pela tag `<footer id="rodape">` e edite o texto.

---

### 4. Criar Nova Página

**Passo 1:** Copie `home.html` e renomeie para `minha-pagina.html`

**Passo 2:** Edite o `<title>` e o conteúdo

**Passo 3:** Adicione ao menu em `cabecalho.html` (veja item 1)

**Passo 4:** Teste localmente abrindo `index.html`

---

### 5. Enviar Alterações para GitHub

```bash
# No PowerShell na pasta do projeto
git add .
git commit -m "Descrição clara da alteração"
git push origin main
```

Aguarde 2-5 minutos e acesse www.conexusecia.com.br para ver as mudanças.

---

### 6. Verificar o Que Mudou

```bash
git status                  # Ver arquivos alterados
git diff arquivo.html       # Ver exatas mudanças no arquivo
```

---

## 🔍 Checklist Antes de Fazer Push

- [ ] Testei localmente (abri `index.html` no navegador)
- [ ] Todos os CSS carregam (cores aparecem corretamente)
- [ ] Todas as imagens aparecem
- [ ] Todos os links funcionam
- [ ] Formulários (se houver) funcionam
- [ ] Revisei o texto quanto a erros de digitação
- [ ] Mensagem de commit é clara

---

## ⚠️ Erros Comuns

### ❌ CSS não carrega
**Problema:** Utilizou `href="_css/estilo.css"`  
**Solução:** Mude para `href="./_css/estilo.css"`

### ❌ Imagem não aparece
**Problema:** Utilizou `src="_imagens/foto.jpg"`  
**Solução:** Mude para `src="./_imagens/foto.jpg"`

### ❌ Link não funciona
**Problema:** Faltou `target="principal"`  
**Solução:** Use `<a href="pagina.html" target="principal">`

### ❌ Mudanças não aparecem em produção
**Problema:** GitHub Pages demora para processar  
**Solução:** Aguarde 5 minutos e limpe cache (Ctrl+Shift+Delete)

---

## 📚 Referência Rápida

| Arquivo | Função |
|---------|--------|
| `index.html` | Arquivo principal (frameset) |
| `cabecalho.html` | Menu e logo do site |
| `home.html` | Página inicial |
| `footer.html` | Rodapé |
| `_css/estilo.css` | Estilos principais |
| `_javascript/funcoes.js` | Scripts JavaScript |
| `_imagens/` | Todas as imagens |

---

## 🎯 Estrutura de Uma Página Simples

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Conexus & Cia - Minha Página</title>
        <link rel="stylesheet" type="text/css" href="./_css/estilo.css">
    </head>
    <body>
        <div id="interface">
            <section id="corpo">
                <article>
                    <h1>Título da Página</h1>
                    <p>Conteúdo aqui...</p>
                    <img src="./_imagens/foto.jpg" alt="Descrição">
                </article>
            </section>
            
            <aside id="lateral">
                <h2>Sidebar</h2>
                <p>Conteúdo lateral...</p>
            </aside>
        </div>
        
        <script src="./_javascript/funcoes.js"></script>
    </body>
</html>
```

---

## 📞 Quando Chamar Um Desenvolvedor

- Problema com formulários (não salva dados)
- Erro JavaScript no console
- Necessidade de integração com API/banco de dados
- Migração para HTML5 moderno (remover frameset)
- Otimização de performance ou SEO

---

**Dúvidas?** Leia a `DOCUMENTACAO.md` completa.

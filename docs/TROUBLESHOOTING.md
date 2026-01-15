# Troubleshooting - Resolução de Problemas

## Erro: Failed to load resource 404 em CSS/JS em Produção

### Sintomas
- Site funciona localmente
- Em produção (www.conexusecia.com.br) mostra erro 404
- Console do DevTools mostra: `Failed to load resource: the server responded with a status of 404 ()`

### Verificação #1: Confirmar o Push

```bash
git status
# Deve mostrar: "Your branch is up to date with 'origin/master'"

git log --oneline
# Verifique se seus commits aparecem
```

Se o commit está local mas não no GitHub, faça:
```bash
git push origin master
```

### Verificação #2: Aguardar Processamento do GitHub Pages

GitHub Pages pode levar **2-5 minutos** para processar novos commits. Aguarde e tente:

1. **Limpar cache do navegador:**
   - Chrome: `Ctrl+Shift+Delete`
   - Firefox: `Ctrl+Shift+Delete`
   - Edge: `Ctrl+Shift+Delete`

2. **Recarregar completamente:**
   - Chrome: `Ctrl+F5` ou `Shift+F5`
   - Firefox: `Ctrl+Shift+R`

3. **Esperar 5 minutos inteiros** e tentar novamente

### Verificação #3: Verificar Status do GitHub Pages

1. Acesse: `github.com/seu-usuario/conexus`
2. Vá para **Settings → Pages**
3. Verifique se está marcado como "Published"
4. Verifique a branch correta (master/main)

### Verificação #4: Verificar Estrutura de Pastas

Os arquivos devem estar no **diretório raiz** do repositório:

```
conexus/
├── _css/          ✅ Correto
├── _javascript/   ✅ Correto
├── _imagens/      ✅ Correto
├── index.html     ✅ No raiz
├── cabecalho.html ✅ No raiz
└── ...
```

**NÃO faça isso:**
```
conexus/
└── site/          ❌ Errado (subpasta)
    ├── _css/
    ├── index.html
    ...
```

### Verificação #5: Verificar Caminhos nos Arquivos HTML

Todos os caminhos **DEVEM** ter `./` no início:

```html
<!-- ✅ CORRETO -->
<link rel="stylesheet" href="./_css/estilo.css">
<script src="./_javascript/funcoes.js"></script>
<img src="./_imagens/foto.jpg">

<!-- ❌ ERRADO -->
<link rel="stylesheet" href="_css/estilo.css">
<script src="_javascript/funcoes.js"></script>
<img src="_imagens/foto.jpg">
```

Para verificar automaticamente:
```bash
grep -r 'href="_css\|src="_javascript\|src="_imagens' *.html
```

Se encontrar algo, corrija com:
```powershell
# PowerShell
$files = Get-ChildItem *.html
foreach($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    $content = $content -replace 'href="_', 'href="./_'
    $content = $content -replace 'src="_', 'src="./_'
    Set-Content $file -Value $content -Encoding UTF8
}
```

### Verificação #6: Usar DevTools para Debugar

1. **Abra o DevTools (F12)**
2. **Aba "Console":**
   - Procure por erros vermelhos
   - Procure por avisos sobre CORS
   - Procure por 404 específicos

3. **Aba "Network":**
   - Recarregue a página (F5)
   - Procure por arquivos com status 404
   - Anote o caminho exato que está falhando

4. **Exemplo:**
   - Se vir: `GET _css/estilo.css 404`
   - Significa que está faltando o `./`
   - Corrija para: `./_css/estilo.css`

### Verificação #7: Verificar Caminho Base

Se ainda assim não funcionar, você pode adicionar uma tag `<base>` (cuidado com localhost!):

```html
<!-- APENAS em produção - NÃO use em localhost -->
<base href="/">
```

Mas **NÃO recomendado** pois quebra localhost.

---

## Erro: Página não carrega nada

### Possíveis causas:

1. **index.html não existe**
   - Verifique se está no raiz do repositório

2. **Frameset quebrado**
   - Verifique se os arquivos referenciados existem:
     - cabecalho.html
     - home.html
     - footer.html

3. **CORS (Cross-Origin)**
   - GitHub Pages deve estar habilitado
   - Verificar settings do repositório

---

## Erro: Menu não funciona / Links quebrados

### Verificar:

```html
<!-- ✅ Correto -->
<a href="servicos.html" target="principal">Serviços</a>

<!-- ❌ Errado -->
<a href="./servicos.html" target="principal">Serviços</a>
<!-- Links internos NÃO precisam de ./ -->
```

---

## Checklist de Resolução

- [ ] Fiz o `git push origin master`?
- [ ] Aguardei 5 minutos?
- [ ] Limpei o cache do navegador (Ctrl+Shift+Delete)?
- [ ] Recarreguei com Ctrl+F5?
- [ ] Verifiquei a aba "Network" no DevTools?
- [ ] Todos os .html têm `./` nos caminhos de recursos?
- [ ] As pastas `_css/`, `_javascript/`, `_imagens/` existem?
- [ ] Os arquivos estão no **raiz** do repositório (não em subpasta)?

---

## Se Nada Funcionar

Verifique o status do deploy:

1. Acesse: `github.com/seu-usuario/conexus`
2. Vá em **Actions** (abas no topo)
3. Procure por **Pages build and deployment**
4. Verifique se há erros no log

Ou envie um comando para verificar qual exatamente está dando 404:

```bash
git log --oneline -5  # Ver últimos commits
git status            # Ver status atual
```

---

**Data:** 14 de janeiro de 2026

# Mapa do Site - Conexus & Cia

## 🗺️ Estrutura Visual do Site

```
┌─────────────────────────────────────────────────────────┐
│                    CABECALHO.HTML                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │ CONEXUS & CIA                                      │  │
│  │ Soluções de T.I para aumentar a performance       │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Menu:                                              │ │
│  │  [Home] [Serviços] [Fotos] [Cadastro] [Contato]   │ │
│  └──────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  FRAME PRINCIPAL (HOME.HTML ou OUTRA PÁGINA)           │
│  ┌────────────────────────────────────────────────────┐ │
│  │                   CORPO                             │ │
│  │                                                     │ │
│  │  ┌──────────────┐      ┌────────────────────┐     │ │
│  │  │              │      │                    │     │ │
│  │  │   Conteúdo   │      │    Sidebar com     │     │ │
│  │  │   Principal  │      │  logos dos        │     │ │
│  │  │              │      │  clientes         │     │ │
│  │  │ - Quem somos │      │                    │     │ │
│  │  │ - Missão     │      │ - Logosofica      │     │ │
│  │  │ - Visão      │      │ - [Outros]        │     │ │
│  │  │ - Valores    │      │                    │     │ │
│  │  │              │      │                    │     │ │
│  │  └──────────────┘      └────────────────────┘     │ │
│  │                                                     │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  FOOTER.HTML                                            │
│  Copyright 2018 - Conexus & Cia                         │
│  Facebook | contato@conexusecia.com.br | (35)99195...  │
└─────────────────────────────────────────────────────────┘
```

---

## 📍 Páginas e Rotas

### Página Inicial
```
URL: www.conexusecia.com.br ou index.html
Arquivo: home.html (carregado no frame principal)
Conteúdo:
  - Quem somos (Missão, Visão, Valores)
  - Clientes (sidebar com logos)
  - Chamada para ação
```

### Serviços
```
URL: www.conexusecia.com.br/servicos.html
Arquivo: servicos.html (carregado no frame principal)
Conteúdo:
  - Mapa interativo com áreas de serviço
  - Link para servicos-conexus.html para detalhes
Áreas de Clique:
  - CFTV → Câmeras de vigilância
  - Cabeamento → Infraestrutura de rede
  - Elétrica → Serviços elétricos
  - Desktop → Manutenção
```

### Detalhes dos Serviços
```
URL: www.conexusecia.com.br/servicos-conexus.html
Arquivo: servicos-conexus.html
Conteúdo:
  - Descrição detalhada de cada serviço
  - Imagens ilustrativas
  - Informações técnicas
```

### Galeria de Fotos
```
URL: www.conexusecia.com.br/fotos.html
Arquivo: fotos.html
Conteúdo:
  - Galeria com fotos dos clientes
  - Logos e representações visuais
  - Organizado por cliente/período
```

### Cadastro
```
URL: www.conexusecia.com.br/cadastro.html
Arquivo: cadastro.html
Conteúdo:
  - Formulário de cadastro de clientes
  - Campos: nome, empresa, email, etc.
  - Botão de envio
  
CSS: form.css
JS: funcoes.js (para validação)
```

### Fale Conosco
```
URL: www.conexusecia.com.br/fale-conosco.html
Arquivo: fale-conosco.html
Conteúdo:
  - Formulário de contato
  - Campos: nome, email, mensagem
  - Botão de envio
  
CSS: form.css
JS: funcoes.js (para validação)
```

---

## 🔗 Fluxo de Navegação

```
HOME (index.html)
    ├── [Home] → home.html (mesmo)
    ├── [Serviços] → servicos.html
    │   └── [Clique na área] → servicos-conexus.html
    ├── [Fotos] → fotos.html
    ├── [Cadastro] → cadastro.html
    │   └── [Enviar] → (processa no servidor)
    └── [Fale Conosco] → fale-conosco.html
        └── [Enviar] → (processa no servidor)

CABECALHO (fixo em todos os frames)
├── Logo Conexus & Cia
├── Tagline
└── Menu Principal (sempre visível)

FOOTER (fixo em todos os frames)
├── Copyright
├── Link Facebook
├── Email
└── Telefone
```

---

## 📊 Árvore de Arquivos (Completa)

```
conexus/
│
├── index.html                          [Arquivo Principal - Frameset]
│
├── Arquivos HTML (Páginas)
├── cabecalho.html                      [Header + Menu]
├── home.html                           [Inicial]
├── footer.html                         [Rodapé]
├── servicos.html                       [Mapa de Serviços]
├── servicos-conexus.html               [Detalhes]
├── fotos.html                          [Galeria]
├── cadastro.html                       [Formulário]
├── fale-conosco.html                   [Contato]
│
├── _css/                               [ESTILOS]
│   ├── estilo.css                      [Principal - Base]
│   ├── fotos.css                       [Galeria]
│   ├── fotos-clientes.css              [Logos clientes]
│   ├── servicos.css                    [Serviços]
│   └── form.css                        [Formulários]
│
├── _javascript/                        [SCRIPTS]
│   └── funcoes.js                      [Funções JS]
│
├── _imagens/                           [IMAGENS]
│   ├── conexus-*.jpg                   [Imagens do site]
│   ├── botao-*.png                     [Botões]
│   ├── *.jpg/*.png                     [Outras imagens]
│   └── [organizado por seção]
│
├── _fonts/                             [FONTES]
│   └── [fontes customizadas]
│
├── consultorio/                        [ESPECIAL]
│   └── [conteúdo específico]
│
├── Configuração
├── CNAME                               [Domínio: www.conexusecia.com.br]
├── composer.json                       [Dependências]
├── README.md                           [Info repositório]
│
├── docs/                               [DOCUMENTAÇÃO]
│   ├── README.md                       [Índice da documentação]
│   ├── DOCUMENTACAO.md                 [Guia completo]
│   ├── GUIA_RAPIDO.md                  [Tarefas comuns]
│   ├── DOCUMENTACAO_TECNICA.md         [Info técnica]
│   └── MAPA_SITE.md                    [Este arquivo]
│
└── .git/                               [Controle de versão]
    └── [histórico de commits]
```

---

## 🎨 Elementos Reusáveis

### No Header (Cabecalho)
- Logo Conexus & Cia
- Menu de navegação (8 links)
- Tagline do negócio

### No Sidebar (Lateral)
- "Nossos Clientes"
- Logos/fotos dos clientes
- Organizado por período (2017-2018, etc)

### No Footer
- Copyright
- Link Facebook
- Email de contato
- Telefone/WhatsApp

---

## 🔄 Padrão de Cada Página

Todas as páginas seguem o padrão:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Conexus & Cia - [Nome Página]</title>
        <link rel="stylesheet" href="./_css/estilo.css">
        [+ CSS específico]
    </head>
    <body>
        <div id="interface">
            <section id="corpo">
                <!-- CONTEÚDO PRINCIPAL -->
            </section>
            <aside id="lateral">
                <!-- SIDEBAR -->
            </aside>
        </div>
        <script src="./_javascript/funcoes.js"></script>
    </body>
</html>
```

---

## 📈 Dados de Negócio Encontrados

### Missão
"Promover soluções de T.I. com enfoque na área de redes de computadores para empresas da cidade de Lavras, buscando inovações para superar as expectativas dos nossos clientes, garantindo respeito e ética."

### Visão
"Ser uma empresa reconhecida pela excelência em soluções na área de redes até o ano de 2020 na cidade de Lavras, com qualidade e respeito ao meio ambiente."

### Valores
1. Atuar sempre de maneira ética e coerente
2. Acreditar que você é capaz
3. Respeitar parceiros e colaboradores
4. Gerar valor para clientes, colaboradores e sociedade

### Serviços Principais
- **CFTV** - Câmeras de vigilância
- **Cabeamento Estruturado** - Infraestrutura de rede
- **Serviços Elétricos** - Suporte elétrico
- **Manutenção de Desktop** - Suporte técnico

### Contato
- Email: contato@conexusecia.com.br
- Telefone: (35) 99195-8111
- Facebook: facebook.com/conexusecia
- Localização: Lavras, MG

---

## 🎯 Seções Importantes

| Seção | Arquivo | CSS | Descrição |
|-------|---------|-----|-----------|
| Header | cabecalho.html | estilo.css | Menu + Logo |
| Conteúdo | home.html | estilo.css | Principal |
| Serviços | servicos.html | servicos.css | Mapa interativo |
| Galeria | fotos.html | fotos.css | Fotos/logos |
| Formulários | cadastro.html, fale-conosco.html | form.css | Entrada de dados |
| Sidebar | (em todas) | fotos-clientes.css | Logos clientes |
| Rodapé | footer.html | estilo.css | Links + contato |

---

**Mapa atualizado:** 14 de janeiro de 2026

# Juan Rodrigues — Portfólio

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-puro-1572B6?style=flat&logo=css&logoColor=white)
![i18n](https://img.shields.io/badge/Idiomas-PT%20%7C%20EN-2B4DFF?style=flat)

Portfólio pessoal de **Juan Rodrigues**, Analista de Sistemas com base em requisitos e QA e desenvolvedor JavaScript/TypeScript. O site apresenta trajetória profissional, formação, projetos e habilidades, em português e inglês, com tema claro e escuro.

Feito em React e CSS puro, sem biblioteca de componentes nem de animação: todos os efeitos foram escritos à mão.

🌐 **Acesse em produção:** [juanportfolio-phi.vercel.app](https://juanportfolio-phi.vercel.app/)

---

## 🚀 Destaques Técnicos

- **Conteúdo separado do código:** todos os textos, projetos e experiências ficam em um único arquivo (`src/data/content.js`). Atualizar o site não exige mexer em componentes.
- **Bilíngue (PT/EN):** troca de idioma instantânea, com detecção do idioma do navegador e preferência salva em `localStorage`.
- **Tema claro e escuro:** respeita a preferência do sistema, é aplicado antes da primeira pintura (sem "flash") e troca com uma animação em círculo a partir do botão, usando a View Transitions API.
- **Layout que muda de estrutura:** em telas largas o menu vira uma coluna lateral fixa, com barra de progresso vertical; em telas menores vira uma barra no topo com menu recolhível.
- **Cursor personalizado:** ponto e anel com atraso, que reagem a elementos clicáveis e invertem a cor conforme o fundo (`mix-blend-mode: difference`).
- **Micro-interações:** botões magnéticos, grade de pontos que acompanha o mouse, faixa de texto em movimento, terminal animado e entradas ao rolar com `IntersectionObserver`.
- **Menu com scroll spy:** o item da seção visível é destacado automaticamente.
- **Acessibilidade:** navegação por teclado com foco visível, link para pular ao conteúdo, HTML semântico e todas as animações desligadas para quem usa `prefers-reduced-motion`.

---

## 🗂️ Estrutura do Projeto

```
portfolio/
├── index.html                  # Fontes, metadados e script de tema inicial
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx                # Ponto de entrada
    ├── App.jsx                 # Monta as seções da página
    ├── index.css               # Todos os estilos (temas, layout, efeitos)
    ├── data/
    │   └── content.js          # Todo o conteúdo do site, em PT e EN
    ├── context/
    │   └── Preferences.jsx     # Tema e idioma, com persistência
    ├── hooks/
    │   └── useInteractions.js  # Entradas ao rolar, botões magnéticos, grade do topo
    └── components/
        ├── Header.jsx          # Menu (coluna lateral ou barra no topo)
        ├── Hero.jsx            # Topo com título e terminal
        ├── Marquee.jsx         # Faixa de texto em movimento
        ├── About.jsx
        ├── Journey.jsx         # Experiência, formação e cursos
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── SectionHeader.jsx
        ├── Cursor.jsx          # Cursor personalizado
        ├── ScrollProgress.jsx  # Barra de progresso de leitura
        └── Icons.jsx
```

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Interface | React 19 |
| Build | Vite 7 |
| Estilização | CSS puro, com variáveis para os temas |
| Tipografia | Bricolage Grotesque, Geist e Geist Mono (Google Fonts) |
| Animações | CSS, `IntersectionObserver`, `requestAnimationFrame` e View Transitions API |
| Persistência | `localStorage` (tema e idioma) |

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos
- Node.js 20+

### Instalação
```bash
git clone https://github.com/itjuanr/juanportfolio.git
cd juanportfolio
npm install
```

### Scripts
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção em dist/
npm run preview  # Serve o build localmente
```

---

## ✏️ Como Editar o Conteúdo

Abra `src/data/content.js`. Cada texto tem uma versão `pt` e uma `en`:

| Bloco | O que controla |
|-------|----------------|
| `profile` | Nome, contatos, frase do topo, texto do "Sobre" e terminal |
| `experience` | Experiências profissionais |
| `education` | Formação acadêmica |
| `courses` | Cursos e academias |
| `skills` | Habilidades, por categoria |
| `projects` | Projetos, com links para o site e o código |
| `translations` | Textos fixos da interface (menu, botões, títulos) |

Para trocar a cor de destaque, altere `--blue` e `--blue-text` no início de `src/index.css`.

---

## 📬 Contato

- **E-mail:** juanrodriguesdto@gmail.com
- **LinkedIn:** [linkedin.com/in/juan-r](https://www.linkedin.com/in/juan-r/)
- **GitHub:** [github.com/itjuanr](https://github.com/itjuanr)

---

**Desenvolvido com 💙 por Juan Rodrigues**

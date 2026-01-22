# dl-feedbacks

Um sistema de guestbook(registro digital para pessoas deixarem seus feedbacks) moderno e minimalista para coleta de feedbacks, podendo ser utilizada em divesas plataformas e comunidades. Este projeto foi desenvolvido focado em uma experiência de usuário limpa e um fluxo de dados eficiente utilizando as tecnologias mais recentes do ecossistema React.

---

## Tecnologias Utilizadas

O projeto utiliza uma stack moderna focada em performance e tipagem segura:

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Banco de Dados:** [SQLite](https://www.sqlite.org/) com [Prisma ORM](https://www.prisma.io/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Validação:** [Zod](https://zod.dev/)
* **Notificações:** [React-Toastify](https://fkhadra.github.io/react-toastify/)


## 📂 Estrutura de Pastas Principal

Para manter o projeto limpo, a lógica está organizada da seguinte forma:

* `src/app/api/`: Rotas de backend para manipulação dos feedbacks.
* `src/components/`: Componentes de interface (Formulário e Lista).
* `src/lib/`: Configurações de conexão com o banco de dados.
* `src/schemas/`: Esquemas de validação de dados com Zod.

## 🛠️ Como rodar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/danielluiz07/dl-feedbacks.git](https://github.com/danielluiz07/dl-feedbacks.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure o banco de dados:**
    Certifique-se de que o arquivo `.env` está apontando para o SQLite: `DATABASE_URL="file:./dev.db"`

4.  **Sincronize o Prisma:**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

---
Desenvolvido por **Daniel Luiz (Dois L)**.

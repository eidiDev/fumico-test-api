# TEST FUMI.CO 

Aplicação TODO feita em NestJs + PostgresSQL + TypeScript

Esta aplicação contém:

- CRUD de Usuários (Users)
- CRUD de lembretes (Reminders)
- Token JWT para requests Especificas
- Login JWT Token

### Ajustes e melhorias

- [x] Tarefa 1 - Ajuste no DTO do CreateUser - DTO createUser no parametro do endpoint Criar Usuário, e class Validator nos campos.
- [x] Tarefa 2 - Ajuste na entidade DefaultEntity -  Remoção do campo UUID, e transformando o ID em um type UUID
Ajuste no filter do controller Param pelo ID e não pelo o campo UUID(removido)
- [x] Tarefa 3 - Ajuste no DTO createReminders e updateReminders com class validator
- [x] Tarefa 4 - Delete do usuario com cascade nos reminders
- [x] Tarefa 5 - Filter e Persist Reminders por Usuário
- [x] Tarefa 6 - Filter e Persist Nos Usuários
- [ ] Tarefa 7 - Testes unitários
- [x] Tarefa 8 - Clean Migration Perdida
- [x] Tarefa 9 - Remoção da lógica de salvar token no banco de dados  



## Rotas

Usuários:
- {/users, POST}
- {/users, GET}
- {/users/:uuid, GET}
- {/users/:uuid, PATCH}
- {/users/:uuid, PUT}
- {/users/:uuid, DELETE}

Login:
- {/auth, POST}

Lembretes:
- {/reminders, POST}
- {/reminders, GET}
- {/reminders/:uuid, GET}
- {/reminders/:uuid, PATCH}
- {/reminders/:uuid, PUT}
- {/reminders/:uuid, DELETE}

<h3>Entidades, campos e funcionalidades </h3>

Usuario:
- id: number;
- name: string;
- is_active: boolean;
- email: string;
- password: string;
reminders: Array;

- OBS 1: Na entidade usuários contem campos tipo data que contem o momento da criação e de atualização (created_at e updated_at);
<b> Não é obrigatorio mandar estes campos. </b>
- OBS 2: É possivel criar lembretes a partir do usuário.

- Lembretes:
- title: string;
- description: string;
- user: Object;

- OBS: Na entidade lembretes, ela faz extends com a entidade a baixo(Default Entity).

DefaultEntity:
- id: number;
- uuid: string;
- is_active: boolean;
- created_at: date;
- updated_at: date

- OBS: Foi criado uma entidade com campos "default" para utilizar em outras entidadeds básicas, como a de lembretes.

Login:
Para realizar o login na aplicação, é necessário criar um usuário na rota de usuarios;
A aplicação irá criar a entidade, e sua senha ira ser criptografada;
No get de usuários não será possivel ver informações de senhas;
Após criado o usuário, fazer um POST na rota /auth;
O sistema irá validar o usuário, caso sucesso, ira retornar um JSON com seu respectivo TOKEN;

SOMENTE a rota de CRIAR USUÁRIOS({/users,POST}) não exige AUTH TOKEN na request, todas as outras rotas exigem AUTH bearer.

Relações:

Relação Um para muitos e muitos para um Com Usuário e Lembretes;
- UM lembrete pode ter UM usuário;
- UM usuário pode ter N lembretes;

## Aplicação no HEROKU:

https://fumico-test-lucas.herokuapp.com/

## Contato

Lucas Eidi - lucaseidikumagai@gmail.com

Project Link: [https://github.com/eidiDev/fumico-test-api](https://github.com/eidiDev/fumico-test-api)



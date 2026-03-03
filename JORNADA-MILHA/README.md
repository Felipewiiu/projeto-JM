# JornadaMilhas ✈️

Projeto desenvolvido para estudo de Angular, com foco em
componentização, reutilização de layout e boas práticas com templates.

------------------------------------------------------------------------

## 📦 Estrutura do Projeto

A aplicação é organizada separando responsabilidades:

-   **components/** → Componentes reutilizáveis e sem regra de negócio
    (ex: banner, card, container).
-   **views/** → Componentes com lógica de negócio e integração com
    serviços.
-   **shared/** → Componentes e recursos compartilhados em toda
    aplicação.

Essa organização facilita manutenção, escalabilidade e aplicação de boas
práticas.

------------------------------------------------------------------------

# 🧩 ng-content

## 🔹 O que é?

O `ng-content` é um recurso do Angular usado para **projeção de
conteúdo**.

Ele permite que um componente receba conteúdo HTML dentro de sua tag e
renderize esse conteúdo em um ponto específico do seu template.

É parecido com o conceito de `children` no React.

------------------------------------------------------------------------

## 🔹 Para que serve?

Ele serve para:

-   Criar componentes reutilizáveis
-   Permitir layouts flexíveis
-   Evitar duplicação de código
-   Criar containers genéricos

------------------------------------------------------------------------

## 🔹 Exemplo

### Componente Container

``` html
<div class="container">
  <ng-content></ng-content>
</div>
```

### Utilização

``` html
<app-container>
  <h1>Título</h1>
  <p>Conteúdo projetado dentro do container</p>
</app-container>
```

O conteúdo entre as tags `app-container` será inserido onde está o
`ng-content`.

------------------------------------------------------------------------

# 🎯 :host (Host Selector)

## 🔹 O que é?

O `:host` é um seletor especial do Angular usado dentro do arquivo
SCSS/CSS do componente.

Ele representa o **elemento raiz do próprio componente**.

------------------------------------------------------------------------

## 🔹 Para que serve?

Serve para estilizar o elemento do componente diretamente.

Exemplo:

``` scss
:host {
  display: block;
  margin: 0 auto;
  max-width: 1048px;
  width: 90%;
}
```

Aqui estamos estilizando o próprio `<app-container>`.

------------------------------------------------------------------------

# 🖥️ O que é display: block?

`display: block` faz com que o elemento:

-   Ocupe toda a largura disponível
-   Respeite margem e padding
-   Quebre linha automaticamente

É comum usar em componentes para garantir comportamento previsível no
layout.

# ControlValueAccessor



------------------------------------------------------------------------

# 📚 Conceitos Aprendidos

-   Componentização
-   Projeção de conteúdo
-   Encapsulamento de estilos
-   Organização de estrutura Angular
-   Boas práticas com HTML e SCSS

------------------------------------------------------------------------

# 🚀 Objetivo do Projeto

Consolidar conceitos fundamentais do Angular para construção de
aplicações modernas, reutilizáveis e organizadas.

------------------------------------------------------------------------

Desenvolvido para fins educacionais.




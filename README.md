# Catálogo de Endereços Rapidola

Catálogo web interativo para visualização de endereços organizados por Centro Comercial e Cidade Alta.

## 📋 Estrutura do Projeto

- `index.html` - Página principal do catálogo
- `styles.css` - Estilos customizados e responsivos
- `script.js` - Lógica de navegação e interatividade
- `data.js` - Dados do catálogo (preencher com informações dos PDFs)

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. Selecione entre "Centro Comercial" ou "Cidade Alta"
3. Escolha uma localização específica
4. Visualize os endereços disponíveis
5. Use a barra de busca para filtrar endereços

## 📝 Preenchendo os Dados dos PDFs

Para adicionar os dados reais dos PDFs, edite o arquivo `data.js`:

### Estrutura de Dados

```javascript
const catalogData = {
    "centro-comercial": [
        {
            id: 1,
            name: "Nome do Centro Comercial",
            addresses: [
                {
                    id: 1,
                    street: "Rua, Número",
                    neighborhood: "Bairro",
                    city: "Cidade",
                    state: "UF",
                    zipCode: "00000-000",
                    additionalInfo: "Informações adicionais (opcional)"
                }
            ]
        }
    ],
    "cidade-alta": [
        // Mesma estrutura acima
    ]
};
```

### Exemplo de Preenchimento

1. Abra os PDFs: `VALORES DE TAXA CENTRO COMERCIAL (1).pdf` e `VALORES DE TAXA CIDADE ALTA (1).pdf`
2. Para cada centro comercial/cidade alta listado:
   - Crie um objeto com `id`, `name` e `addresses`
   - Para cada endereço, adicione um objeto dentro de `addresses` com:
     - `id`: número único
     - `street`: rua e número
     - `neighborhood`: bairro
     - `city`: cidade
     - `state`: estado (sigla)
     - `zipCode`: CEP
     - `additionalInfo`: informações extras (opcional)

### Exemplo Completo

```javascript
{
    id: 1,
    name: "Shopping Center Natal",
    addresses: [
        {
            id: 1,
            street: "Av. Senador Salgado Filho, 1555",
            neighborhood: "Lagoa Nova",
            city: "Natal",
            state: "RN",
            zipCode: "59075-000",
            additionalInfo: "Loja 101 - 1º Piso"
        },
        {
            id: 2,
            street: "Av. Senador Salgado Filho, 1555",
            neighborhood: "Lagoa Nova",
            city: "Natal",
            state: "RN",
            zipCode: "59075-000",
            additionalInfo: "Loja 205 - 2º Piso"
        }
    ]
}
```

## 🎨 Recursos

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação intuitiva com breadcrumbs
- ✅ Busca de endereços em tempo real
- ✅ Interface moderna com Bootstrap 5
- ✅ Animações suaves
- ✅ Ícones Bootstrap Icons

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0
- Bootstrap Icons 1.10.0

## 📄 Licença

Este projeto foi criado para uso interno da Rapidola.


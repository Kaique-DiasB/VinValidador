# VIN/Chassi Validator

## Sobre o Projeto

Este projeto nasceu a partir de uma tarefa proposta pelo nosso famoso Henrique (ou para os não íntimos, Carlos Henrique). A ideia inicial era desenvolver um validador de Chassi/VIN (Vehicle Identification Number). No entanto, ao testar meu primeiro validador, percebi que alguns chassi reais não estavam passando na validação. 

Isso me levou a testar outras ferramentas online, como o [VIN Decoder da NHTSA](https://vpic.nhtsa.dot.gov/decoder/), onde constatei que o mesmo erro acontecia. Foi então que percebi que os VINs podem ser construídos de diferentes formas, dependendo da montadora e de normas específicas.

Diante disso, desenvolvi diferentes validadores para aprimorar a verificação:

### 🔹 Tipos de Validadores de VIN Implementados

1. **Validator Simple**: é a forma mais básica de validação, focando apenas em duas regras essenciais: verificar se o VIN tem exatamente 17 caracteres e se há repetições de mais de seis caracteres iguais após os três primeiros. Essa abordagem é ideal para validações rápidas, onde apenas o tamanho e a repetição de caracteres são críticos.

2. **Regex Vin Validator**: Valida o VIN utilizando expressões regulares para garantir que não há caracteres inválidos, espaços em branco, ou sequências repetidas de mais de seis caracteres após os três primeiros. Também verifica se os últimos quatro caracteres são numéricos.

3. **Regex Vin Validator Object**: Similar ao Regex Vin Validator, mas encapsula as expressões regulares em um objeto, permitindo uma validação mais modular e fácil de manter. Cada regra de validação é uma função separada dentro do objeto, o que facilita a adição ou remoção de regras no futuro.

4. **Vin Validator**: Validação baseada na ISO 3779, garantindo que o VIN segue os padrões internacionais para identificação de veículos.

5. **JS Vin Validator**: Versão aprimorada dos Regex que utiliza JavaScript para percorrer e validar as informações do VIN/Chassi, permitindo a aplicação de regras mais complexas.

6. **Decoder Vin**: O mais completo, puxando informações detalhadas sobre o chassi, incluindo WMI (World Manufacturer Identifier), VDS (Vehicle Descriptor Section) e VIS (Vehicle Identifier Section). Futuramente, será incrementado com mais funcionalidades.

**Diferença entre Regex e JavaScript Puro**: Enquanto os validadores baseados em regex são eficientes para validações rápidas e diretas, os validadores que utilizam JavaScript puro permitem uma lógica mais complexa e personalizada, como a validação de dígitos verificadores ou a aplicação de regras específicas de montadoras.

## 📌 Considerações Importantes

Acredito que a melhor forma de validação seja utilizando uma **API Oficial** ou regulamentada pelo **SENATRAN** (Sistema Nacional de Trânsito), garantindo conformidade com o **DETRAN** e respeitando a **Lei Geral de Proteção de Dados (LGPD)**.

## 🚀 Tecnologias Utilizadas

- **JavaScript** (JS puro)
- **HTML** e **CSS** para a interface
- **Expressões Regulares (Regex)**
- Futuramente, uma **V2** com **React** e **TypeScript** pode ser desenvolvida para melhorar a usabilidade e a manutenção do código.

## 📂 Estrutura do Projeto

```
├── .github
├── src
│   ├── validators
│   │   ├── simpleValidator.js
│   │   ├── vinValidator.js
│   │   ├── regexVinValidator.js
│   │   ├── regexVinValidatorObject.js
│   │   ├── jsVinValidator.js
│   │   ├── decoderVin.js
│   ├── tests
├── public
│   ├── index.html
│   ├── style.css
├── README.md
```

## 🔧 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kaique-DiasB/VinValidador
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd VinValidador
   ```
3. Abra o arquivo `index.html` no navegador para visualizar a interface.

## 📌 Contribuição

Fique à vontade para abrir **issues** e enviar **pull requests** para melhorias e novas funcionalidades.

## 📜 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


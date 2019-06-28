module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // Quando o prettier detectar um problema, para ele me retornar um erro no ESLint eu declaro:
    "prettier/prettier": "error",
    // Existe uma regra padrão no ESLint que diz que todo método de uma classe
    // precisa usar a palavra 'this', como não concordo, uso:
    "class-methods-use-this": "off",
    // Para permitir que eu receba um parâmetro e faça alteração (o ESLint não permite):
    "no-param-reassign": "off",
    // Por padrão o ESLint pede as variáveis sempre no formato 'minhaVariável'
    // para anular esse padrão:
    camelcase: "off",
    // No ESLint existe uma regra padrão que diz eu não posso declarar uma variável
    // que eu não vou utilizar, para anular esse padrão quando usar a variável 'next':
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};

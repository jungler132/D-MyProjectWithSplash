module.exports = {
  env: {
      browser: true,
      es6: true,
      node: true,
  },
  extends: [
  'eslint:recommended',
//   "plugin:@typescript-eslint/recommended",
  "plugin:react/recommended",
],
//   parser: '@typescript-eslint/parser',
  parserOptions: {
    //   ecmaFeatures: {
    //       jsx: true,
    //   },
      ecmaVersion: 11,
      sourceType: 'module',
  },
  settings: {
      "import/resolver": {
          "babel-plugin-root-import": {
              "rootPathSuffix": "app",
              "rootPathPrefix": "~"
          },
          "node": {
              "extensions": [
                  ".js",
                //   ".jsx",
                //   ".ts",
                //   ".tsx"
              ]
          }
      },
  },
  globals: {
      "ios": false,
      "android": false,
      "windowHeight": false,
      "windowWidth": false,
      "hairlineWidth": false,
      "DeviceInfo": false,
      "isIphoneX": false,
      "StatusBarHeight": false,
      "HeaderHeight": false,
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
//   plugins: ['react', "react-native", '@typescript-eslint'],
  plugins: ['react', "react-native", ],
  rules: {
      'no-console': "error",
      quotes: ['error', 'single'],
      'no-else-return': ['error', { allowElseIf: true }], // if else
      camelcase: ['error', { properties: 'always' }],
      'brace-style': ['error', '1tbs'], // скобки переносятся
      'comma-spacing': ['error', { before: false, after: true }], // отступы перед и после запятых
      'comma-style': ['error', 'last'], // перенос запятой
      'comma-dangle': ['error', 'always-multiline'], // последняя запятая !!!
      'key-spacing': ["error", { "afterColon": true, }], // пробел после двоеточие ключа в объекте, так же можно добавить beforeColon
      'arrow-spacing': ["error", {"before": true, "after": true} ], // () => {}    
      'arrow-body-style': ["error", "as-needed"], // редактирует () => {} по необходимости
      'no-trailing-spaces': "error", // пустые пробелы
      'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 1 }],  // удаляем пустые строки

      "no-param-reassign": [
          "error",
          {
              "props": false
          }
      ],
      "no-restricted-globals": "off",
      "no-unused-expressions": ["warn", { "allowShortCircuit": true, "allowTernary": false }],
      "prefer-destructuring": [
          "error",
          {
              "array": false,
              "object": true
          }
      ],
  
      "max-classes-per-file": "warn",
      "import/prefer-default-export": "off",
      "react/prefer-stateless-function": "error",
      "react/destructuring-assignment": "warn",
      "react/prop-types": "off",
    
      "space-infix-ops": "error",
      "object-curly-newline": "off", // Несовместимо с prettier
      "no-mixed-operators": "off", // Несовместимо с prettier
      "function-paren-newline": "off", // Несовместимо с prettier
      "no-plusplus": "off", // Несовместимо с prettier
      "space-before-function-paren": "off", // требовать или запрещать пробел перед открытием скобок функции
      "max-len": [
          "error",
          150,
          2,
          {
              "ignoreUrls": true
          }
      ], // укажите максимальную длину строки в вашей программе
      "semi": [
          "error",
          "always"
      ], // требует точки с запятой в конце операторов
      "semi-spacing": [
          "error",
          {
              "before": false,
              "after": false
          }
      ], // Этот параметр устанавливает интервал перед точкой с запятой и запрещает интервал после точки с запятой
      
      "no-compare-neg-zero": "error", // Запрещает сравнение с отрицательным нулем
      "no-cond-assign": "error", // запрещает неоднозначные оператор присваивания в тестовых условиях if, for, whileи do...while 
      "no-constant-condition": [
          "error",
          {
              "checkLoops": false
          }
      ], //Это правило запрещает использование константных выражений в условиях теста:if, for, while Или do...while, ?: тернарка
      "no-dupe-args": "error", // запрещает дублирование имен параметров в объявлениях функций или выражениях. Это не относится к функциям стрелок или методам класса
      "no-dupe-else-if": "error", // это правило запрещает дублирование условий в одной 
      "no-dupe-keys": "error", // запрещает дублирование ключей в литералах объекта
      "no-duplicate-case": "error", // запрещает дублирование тестовых выражений в case предложениях switch операторов
      "for-direction": "error", // не позволяет установить бесконечный цикл for
      "no-empty": "error", // запрещает пустые операторы блока. Это правило игнорирует операторы блока, которые содержат комментарий y
      "no-func-assign": "error", // запрещает переопределение ф-ций до их объявления
      "no-import-assign": "error", // предупреждает переопределения, приращения и убывания импортированных данных 
      "no-sparse-arrays": "error", // запрещает использование литералов разреженных массивов, имеющих «дыры», в которых перед запятыми не стоят элементы 
      "no-template-curly-in-string": "error", // предупреждение, когда обычная строка содержит то, что выглядит как заполнитель литерала шаблона (""->``) 
      "no-unexpected-multiline": "error", // запрещает вводить в заблуждение многострочные выражения 
      "no-unreachable": "error", // запрещает недостижимый код после return, throw, continue и break 
      "valid-typeof": "error", // требует, чтобы typeof выражения сравнивались только со строковыми литералами или другими typeof выражениями, и запрещает сравнение с любым другим значением (error is strign or nunber) 
      "use-isnan": "error", // запрещает сравнение с «NaN» через ===. Только isNaN
      "no-extra-boolean-cast": "error", // запрещает ненужные логические преобразования 
      //*** Best Practices ***//
      "array-callback-return": "error", // запрещает использование методов фильтрации массивов без return (from, every, filter, find, findIndex, map, reduce, reduceRight, some, sort). Если вы не хотите использовать возврат, используйте forEach 
      "default-case": [
          "error",
          {
              "commentPattern": "^skip\\sdefault"
          }
      ], // запрещает не указывать default регистр в switch заявлениях. Если указать комментарий // skip default, то default можно не прописывать 
      "curly": "error", // предупреждает, когда if, else, for, while, или do используются без фигурных скобок 
      "dot-notation": "error", // направлено на поддержание согласованности кода и улучшение читабельности кода путем поощрения использования стиля точечной нотации, когда это возможно 
      "no-alert": "error", //  будет предупреждать, когда он сталкивается c alert, prompt и confirm 
      "eqeqeq": [
          "error",
          "always"
      ], // устранение небезопасных операторов равенства 
      "no-empty-function": "error", // устранение пустых функций
      "no-eq-null": "error", // сравнения с null 
      "no-fallthrough": "error", // устраняет case без break 
      "no-floating-decimal": "error", // устранение плавающих десятичных точек и будет предупреждать всякий раз, когда числовое значение имеет десятичную точку, но отсутствует число до или после него 
      "no-global-assign": "error", // Это правило запрещает изменение глобальных переменных, которые только для чтения (Object, undefined, window, length, top, const a)
      "no-implicit-coercion": "error", // предназначено для обозначения более коротких и понятных обозначений для преобразования типов (Boolean, Number, String) 
      "no-magic-numbers": ["error", {"ignore": [0]}], //  сделать код более читабельным и упростить рефакторинг, гарантируя, что специальные числа объявляются как константы, чтобы сделать их смысл явным 
      "no-loop-func": "error", // запрещает любую функцию в цикле, которая содержит небезопасные ссылки (например, на измененные переменные из внешней области) 
      "no-implied-eval": "error", // устранение подразумеваемых eval()посредством использования setTimeout(), setInterval()или execScript(). Таким образом, он будет предупреждать, когда любая функция используется со строкой в ​​качестве первого аргумента.
      "no-implicit-globals": [
          "error",
          {
              "lexicalBindings": false
          }
      ], // запрещает повторное объявление глобальных переменных только для чтения и присвоение глобальным переменным только для чтения 
      "no-multi-spaces": "error", // запрещает множественные пробелы вокруг логических выражений, условных выражений, объявлений, элементов массива, свойств объекта, последовательностей и параметров функций 
      "no-multi-str": "error", // предотвращение использования многострочных строк
      "no-new": "error", // запрет вызовов конструктора с использованием new ключевого слова, которое не присваивает результирующий объект переменной 
      "no-new-wrappers": "error", // устранение использования String, Numberи Boolean с new оператором 
      "no-octal": "error", // запрещает определять number с ведущим нулём (071)
      "no-redeclare": "error", // устранение переменных, которые имеют несколько объявлений в одной и той же области видимости
      "no-self-assign": "error", //  устранение самостоятельных назначений (foo = foo)
      "no-self-compare": "error", // устранение сравнение переменной с ней же (х===х)
      "no-useless-return": "error", // направлено на то, чтобы сообщать о лишних return утверждениях 
      "no-void": "error", // исключение использования оператора void 
      "radix": "error", // предотвращение непреднамеренного преобразования строки в число 
      "require-await": "error", // предупреждает асинхронные функции, которые не имеют await выражения 
      "yoda": "error", // Если это значение по умолчанию "never", то сравнения никогда не должны соответствовать условиям Йоды 
      "block-scoped-var": "error", // запрещает снова определять var? в данной области видимости
      //*** Variables ***//
      "init-declarations": [
          "error",
          "always"
      ], // необходимо обеспечить инициализацию при объявлении
      "no-undef": "error", // Любая ссылка на необъявленную переменную вызывает предупреждение, если только переменная явно не упомянута в /*global ...*/комментарии или не указана в globals ключе в файле конфигурации 
      "no-undef-init": "error", // исключение объявлений переменных, которые инициализируются в undefined 
      "no-undefined": "error", // исключение использования undefined и, как таковое, генерирует предупреждение при каждом его использовании 
      "no-unused-vars": "error", // устранение неиспользуемых переменных, функций и параметров функции 
      "no-use-before-define": "off", // предупредит, когда встретит ссылку на идентификатор, который еще не был объявлен
      "no-shadow-restricted-names": "error", // запрещает определение NaN, Infinity, undefined...
      //*** Styling ***//
      "array-bracket-spacing": "error", // применять интервалы внутри скобок массива
      "block-spacing": "error", // запрещать или применять пробелы внутри однострочных блоков
      "camelcase": "error", // требовать camelCase
      "computed-property-spacing": "error", // требовать или запрещать заполнение внутри вычисляемых свойств
      "consistent-this": "error", // обеспечить согласованное именование при захвате текущего контекста выполнения
      "eol-last": "off", // применять новую строку в конце файла, без нескольких пустых строк
      "func-names": "error", // требовать, чтобы выражения функций имели имя
      "id-length": "error", // эта опция обеспечивает минимальную и максимальную длину идентификатора (имена переменных, имена свойств и т. д.)
      "id-match": "error", // требовать идентификаторы, чтобы соответствовать предоставленное регулярное выражение
      "id-blacklist": "error", // черный список определенных идентификаторов, чтобы предотвратить их использование
      "indent": [
          "error",
          4
      ], // укажите ширину табуляции или пробела для вашего кода
      "keyword-spacing": "off", // применять интервалы до и после ключевых слов
      "lines-around-comment": "error", // применять пустые строки вокруг комментариев
      "max-depth": "error", // указать максимальную глубину, на которую могут быть вложены блоки
      "max-nested-callbacks": "error", // указать максимальную глубину обратного вызова может быть вложенным
      "max-params": "off", // ограничивает количество параметров, которые могут быть использованы в объявлении функции
      "max-statements": "off", // указать максимально допустимое количество операторов в функции
      "new-cap": "error", // требуется заглавная буква для конструкторов
      "new-parens": "error", // запретить пропуск круглых скобок при вызове конструктора без аргументов
      "newline-after-var": "error", // требовать или запрещать пустой символ новой строки после объявления переменных
      "newline-per-chained-call": "error", // вводить новую строку после каждого вызова при объединении вызовов
      "no-array-constructor": "error", // запретить использование конструктора Array
      "no-bitwise": "error", // запретить использование побитовых операторов
      "no-continue": "error", // запретить использование оператора continue
      "no-inline-comments": "error", // запрещать комментарии в строке после кода
      "no-lonely-if": "error", // запретить if как единственный оператор в блоке else
      "no-mixed-spaces-and-tabs": "error", // запрещать смешанные пробелы и вкладки для отступа
      "no-negated-condition": "error", // запрещать отрицательные условия
      "no-nested-ternary": "error", // запретить вложенные троичные выражения
      "no-new-object": "error", // запретить использование конструктора Object
      "no-restricted-syntax": "error", // запретить использование определенного синтаксиса в коде
      "no-whitespace-before-property": "error", // запретить пустое пространство перед свойствами
      "no-spaced-func": "error", // запретить пространство между идентификатором функции и приложением
      "no-ternary": "warn", // запретить использование тернарных операторов
      "no-underscore-dangle": "error", // запретить висящие подчеркивания в идентификаторах
      "no-unneeded-ternary": "error", // запретить использование троичных операторов, когда существует более простая альтернатива
      "object-curly-spacing": "off", // требовать или запрещать заполнение внутри фигурных скобок
      "one-var": "off", // требовать или запрещать одно объявление переменной для функции
      "one-var-declaration-per-line": "error", // требовать или запрещать перевод строки вокруг объявлений переменных
      "operator-assignment": "error", // по возможности требовать оператора присваивания или полностью запрещать
      "operator-linebreak": "error", // принудительно размещать операторы до или после разрыва строки
      "padded-blocks": "off", // обеспечить заполнение внутри блоков
      "quote-props": "off", // требовать кавычки вокруг имен литеральных свойств объекта
      "require-jsdoc": "off", // Требовать комментарий JSDoc
      "sort-vars": "error", // сортировать переменные в пределах одного блока объявления
      "sort-imports": "off", // сортировать объявления импорта в модуле
      "space-before-blocks": "error", // требовать или запрещать пространство перед блоками
      "space-in-parens": "error", // требовать или запрещать пробелы в скобках
      "space-unary-ops": "error", // требовать или запрещать пробелы до / после унарных операторов
      "spaced-comment": "error", // требовать или запрещать пробел сразу после // или / * в комментарии
      "wrap-regex": "error", // требует, чтобы литералы регулярных выражений были заключены в скобки
      "constructor-super": "error", // проверять вызовы super () в конструкторах
      "generator-star-spacing": ["error", {"before": false, "after": true}], // обеспечить интервал вокруг * в функциях генератора 
      "no-class-assign": "error", // запретить изменение переменных объявлений класса
      "no-confusing-arrow": "error", // запретить функции стрелок, где их можно спутать со сравнениями
      "no-const-assign": "error", // запретить изменение переменных, объявленных с использованием 
      "no-dupe-class-members": "error", // запретить дублирование имени в классе
      "no-new-symbol": "error", // запретить использование нового оператора с объектом Symbol
      "no-this-before-super": "error", // запретить использование this / super перед вызовом super () в конструкторах
      "no-var": "error", // Требуется пусть или const вместо VAR
      "no-useless-constructor": "error", // запретить ненужный конструктор
      "object-shorthand": "error", // требуется сокращенный синтаксис метода и свойства для объектных литералов
      "prefer-arrow-callback": "error", // предложить использовать функции стрелок в качестве обратных вызовов
      "prefer-const": "error", // предложить использовать объявление const для переменных, которые никогда не изменяются после объявления
      "prefer-reflect": "off", // предложить использовать методы Reflect, где это применимо
      "prefer-rest-params": "error", // предложите использовать остальные параметры вместо аргументов
      "prefer-spread": "error", // предложите использовать оператор распространения вместо .apply ()
      "prefer-template": "error", // предложите использовать литералы шаблона вместо конкатенации строк
      "require-yield": "error", // запретить функции генератора, которые не имеют выхода
      "template-curly-spacing": "error", // применять интервал вокруг встроенных выражений шаблонных строк
      "yield-star-spacing": "error" // применять интервал вокруг выражений * in yield *
      
  },
};

/**
 * Prettier 配置文档
 * 官方配置参考: https://prettier.io/docs/en/options.html
 */

module.exports = {
    // 每行最大长度（默认80）
    printWidth: 100,

    // 缩进空格数（默认2）
    tabWidth: 4,

    // 使用制表符(tab)而不是空格缩进（默认false）
    useTabs: false,

    // 语句末尾是否添加分号（默认true）
    semi: true,

    // 使用单引号代替双引号（默认false）
    singleQuote: false,

    // 对象属性引号使用方式（可选"as-needed"|"consistent"|"preserve"）
    quoteProps: "as-needed",

    // JSX中使用单引号而不是双引号（默认false）
    jsxSingleQuote: false,

    // 多行数组/对象/参数列表等末尾添加逗号（可选"es5"|"none"|"all"）
    trailingComma: "es5",

    // 对象字面量中括号之间的空格（默认true）
    bracketSpacing: true,

    // 将多行JSX元素的 > 放在最后一行的末尾（默认false）
    jsxBracketSameLine: false,

    // 箭头函数参数是否总是使用括号（可选"avoid"|"always"）
    arrowParens: "avoid",

    // 格式化文件范围（默认0）
    rangeStart: 0,
    rangeEnd: Infinity,

    // 指定解析器（根据文件扩展名自动推断）
    parser: "babel",

    // 行尾换行符（可选"auto"|"lf"|"crlf"|"cr"）
    endOfLine: "auto",

    // 控制是否对引用代码中的引号进行转换（默认false）
    embeddedLanguageFormatting: "auto",
    // 添加 parser override（关键）
    overrides: [
        {
            files: "*.vue",
            options: {
                parser: "vue",
            },
        },
        {
            files: "*.html",
            options: {
                parser: "html",
            },
        },
        {
            files: "*.md",
            options: {
                parser: "markdown",
            },
        },
    ],
};

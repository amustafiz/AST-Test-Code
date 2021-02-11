const babelParser = require("@babel/parser");
const fs = require("fs");
const content = fs.readFileSync(__dirname + "/src/App.js", "utf8");
const ast = babelParser.parse(content, {
  sourceType: "module",
  plugins: ["jsx"],
});

// const initialAst = ast.program.body.filter(astNode => astNode.type === 'VariableDeclaration').declaration.declarations[0].init.body.body[0].argument;

// console.log(JSON.stringify(ast));
// console.log(JSON.stringify(initialAst));

const reduceAstNode = (oldNode, currentNode) => {
  let element = {};
  if (currentNode.type === "JSXElement") {
    element = {
      name: currentNode.openingElement.name.name,
      children: [],
    };
    oldNode.push(element);
  }
  if ("children" in currentNode) {
    currentNode.children.forEach((node) =>
      oldNode.length > 0
        ? reduceAstNode(element.children, node)
        : reduceAstNode(oldNode, node)
    );
  }
  return oldNode;
};

const getTree = (content) => {
  const rawAst = babelParser.parse(content, {
    sourceType: "module",
    plugins: ["jsx"],
  });
  const initialAst = rawAst.program.body.forEach(
    // (astNode) => astNode.type === 'ImportDeclaration'
    (astNode, i) => {
      if (astNode.type === 'FunctionDeclaration') {
        console.log(astNode.body.body[1].argument.children[1].loc);
      }
    }
  ); /*.declaration.declarations[0].init.body.body[0].argument;*/

  // return reduceAstNode([], initialAst);
};

const app = getTree(content);


console.log(app);
// console.log(JSON.stringify(ast));

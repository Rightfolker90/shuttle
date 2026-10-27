// Parse arithmetic only. No eval or generated code.
export function calculatePrompt(text){
 let expr=text.trim().toLowerCase().replace(/×/g,'*').replace(/÷/g,'/').replace(/(?<=\d)\s*x\s*(?=[\d(])/g,'*');
 expr=expr.replace(/^(?:ok(?:ay)?[,!]?\s*)?(?:(?:what(?:'s| is)?|calculate|compute|solve)\s*)?/,'').replace(/[?=.!]+$/,'').trim();
 if(!/^[\d\s.+\-*/()]+$/.test(expr)||!/[+*/-]/.test(expr))return null;
 const tokens=expr.match(/\d+(?:\.\d*)?|\.\d+|[()+*/-]/g)||[];let i=0;
 function atom(){if(tokens[i]==='+'){i++;return atom()}if(tokens[i]==='-'){i++;return -atom()}if(tokens[i]==='('){i++;const v=sum();if(tokens[i++]!==')')throw Error('Missing closing parenthesis');return v}const t=tokens[i++];if(!t||!/^\d|^\./.test(t))throw Error('Expected a number');return Number(t)}
 function product(){let v=atom();while(tokens[i]==='*'||tokens[i]==='/'){const op=tokens[i++],n=atom();if(op==='/'&&n===0)throw Error('Division by zero is undefined');v=op==='*'?v*n:v/n}return v}
 function sum(){let v=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],n=product();v=op==='+'?v+n:v-n}return v}
 try{const v=sum();if(i!==tokens.length)return null;if(!Number.isFinite(v))throw Error('Result is outside the supported range');return {expression:expr.replace(/\*/g,'×').replace(/\//g,'÷'),result:Number(v.toPrecision(14)).toString()}}catch(e){return {error:e.message}}
}

//////////////////////////////////////////////////////////////////////////////////////
// (?=) - positive lookahead
// (?!) - negative lookahead

// (?<=) - positive lookbehind
// (?<!) - negative lookbehind

// (?>) - atomic group
//////////////////////////////////////////////////////////////////////////////////////

// POSITIVE LOOKAHEAD

const positiveLookahead = "test pla testpla test";

// Obtem a sequência "test" que possua "pla" a frente.
// [test] pla [test]pla test
// [OUT]:
// [ 'test', 'test' ]
console.log(positiveLookahead.match(/test(?=\s?pla)/g));

//////////////////////////////////////////////////////////////////////////////////////

// NEGATIVE LOOKAHEAD

const negativeLookahead = "test nla testnla test";

// Obtem a sequência "test" que NÃO possua "nla" a frente.
// test nla testnla [test]
// [OUT]:
// [ 'test' ]
console.log(negativeLookahead.match(/test(?!\s?nla)/g));

//////////////////////////////////////////////////////////////////////////////////////

// POSITIVE LOOKBEHIND

const positiveLookbehind = "plb test plbtest test";

// Obtem a sequência "test" que possua "plb" atrás.
// plb [test] plb[test] test
// [OUT]:
// [ 'test', 'test' ]
console.log(positiveLookbehind.match(/(?<=plb\s?)test/g));

//////////////////////////////////////////////////////////////////////////////////////

// NEGATIVE LOOKBEHIND

const negativeLookbehind = "nlb test nlbtest test";

// Obtem a sequência "test" que NÃO possua "nlb" atrás.
// nlb test nlbtest [test]
// [OUT]:
// [ 'test' ]
console.log(negativeLookbehind.match(/(?<!nlb\s?)test/g));

//////////////////////////////////////////////////////////////////////////////////////
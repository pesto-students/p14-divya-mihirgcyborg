// will print :-
// *
// **
// ***
// ****
function drawTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*\n");
    }
  }
}
drawTriangle(4);

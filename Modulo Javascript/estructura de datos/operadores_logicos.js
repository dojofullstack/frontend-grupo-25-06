

// operadores logicos

// operador OR  se representa con los simbolos ||
// operador AND se representa con los simbolos &&
// operador Negacion se representa con el simbolo !




// operador OR  se representa con los simbolos ||
// siempre retorna true si al menos unos de ellos evalua true

let isUserVip = true;
let emailChecked = false;
let isAdmin = true

isUserVip || emailChecked;
emailChecked || isUserVip || isAdmin;




// operador AND se representa con los simbolos &&
// siempre retorna true solo si ambos evalua true
isUserVip && emailChecked;
isUserVip && emailChecked && isAdmin;




// operador Negacion se representa con el simbolo ! como prefijo

!isUserVip;
!emailChecked;



isUserVip || emailChecked && isAdmin;



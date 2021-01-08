let pecaXadrez= 'BISHOP';
pecaXadrez= pecaXadrez.toLowerCase();

switch (pecaXadrez){
    case 'bishop' :
        console.log('Diagonals');
        break;
    
    case 'pawns'
        console.log('1 to front or 1 diagonal when him attack');
        break;

    case 'queen'
        console.log('all directions');
        break;

    case 'king'
        console.log('1 for all directions');
        break;

    case 'rook'
        console.log('Vertical and horizontal');
        break;
    
    case 'knight'
        console.log('In a L format (2 moviments, then 1)');
        break;
    
}
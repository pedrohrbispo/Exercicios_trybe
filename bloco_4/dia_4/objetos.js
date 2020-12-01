let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log('Bem Vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log (info);

  for( let key in info){ 
    console.log(info[key]);
  }

  let info2 = {
      personagem : info.personagem + ' e Tio patinhas',
      origem : info.origem + 'Christmas on Bear Mountain, Dells Four Color Comics #178',
      nota : info.nota + 'O último MacPatinhas', 
      recorrente : 'Ambos recorrentes',
  }

  console.log(info2);
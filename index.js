//sistema de cadastro para evento
const NomeDoEvento = 'Desenvolvedor Expert'
const DataAtual = 'datadoevento'
const DataDoEvento = ''
const palestrante = 'Noel'
const IdadeDosparticipantes = 18
const listDeparticipantes = 93

//Data do Evento
if (DataAtual >= DataDoEvento) {
  console.log('cadastrar participante')
} else {
  console.log('Impossivel por Data invalida')
}

//Registro de participantes
const participante = 'Aldair, carlos, Julia'
var NomeDoParticipante = 'participante'

//verificar idade no registro
if (IdadeDosparticipantes >= 18) {
  console.log('Cadastro feito com sucesso')
} else {
  console.log('idade invalida por nao atender requisitos minimos')
}

if (listDeparticipantes <= 99) {
  console.log('permitir cadastro de participante')
} else {
  console.log('Impossivel cadatrar, evento sem vagas')
}
//fim de sistema

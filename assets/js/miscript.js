let estadistica = {
  radiologia: {
    hora: ['11:00', '11:30', '15:00', '15:30', '16:00'],
    especialista: ['IGNACIO SCHULZ', 'FEDERICO SUBERCASEAUX', 'FERNANDO WURTHZ', 'ANA MARIA GODOY', 'PATRICIA SUAZO'],
    paciente: ['FRANCISCA ROJAS', 'PAMELA ESTRADA', 'ARMANDO LUNA', 'MANUEL GODOY', 'RAMON ULLOA'],
    rut: ['9878782-1', '15345241-3', '16445345-9', '17666419-0', '14989389-K'],
    prevision: ['FONASA', 'ISAPRE', 'ISAPRE', 'FONASA', 'FONASA'],
  },

  traumatologia: {
    hora: ['08:00', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
    especialista: ['MARIA PAZ ALTUZARRA', 'RAUL ARAYA', 'MARIA ARRIAGADA', 'ALEJANDRO BADILLA', 'CECILIA BUDNIK', 'ARTURO CAVAGNARO', 'ANDRES KANACRI'],
    paciente: ['CECILIA MENDEZ', 'ANGÉLICA NAVAS', 'ANA KLAPP', 'FELIPE MARDONES', 'DIEGO MARRE', 'CECILIA MENDEZ', 'MARCIAL SUAZO'],
    rut: ['15554774-5', '15444147-9', '17879423-9', '1547423-6', '16554741-K', '9747535-8', '11254785-5'],
    prevision: ['FONASA', 'ISAPRE', 'ISAPRE', 'ISAPRE', 'FONASA', 'ISAPRE', 'ISAPRE'],
  },

  dental: {
    hora: ['08:30', '11:00', '11:30', '13:00', '13:30', '14:00'],
    especialista: ['ANDREA ZUÑIGA', 'MARIA PIA ZAÑARTU', 'SCARLETT WITTING', 'FRANCISCO VON TEUBER', 'EDUARDO VIÑUELA', 'RAQUEL VILLASECA'],
    paciente: ['MARCELA RETAMAL', 'ANGEL MUÑOZ', 'MARIO KAST', 'KARIN FERNANDEZ', 'HUGO SANCHEZ', 'ANA SEPULVEDA'],
    rut: ['11123425-6', '9878789-2', '7998789-5', '18887662-K', '17665461-4', '14441281-0'],
    prevision: ['ISAPRE', 'ISAPRE', 'FONASA', 'FONASA', 'FONASA', 'ISAPRE'],
  }
}

let ultRadiologia = (estadistica.radiologia.paciente.length) - 1
let ultTraumatologia = (estadistica.traumatologia.paciente.length) - 1
let ultDental = (estadistica.dental.paciente.length) - 1

let texto = `
  <tr>
    <th>Unidad:</th>
    <th>Hora:</th>
    <th>Especialista:</th>
    <th>Paciente:</th>
    <th>Rut:</th>
    <th>Previsión:</th>
  </tr>
`

for (i = 0; i < estadistica.radiologia.hora.length; i++) {
  texto += `
    <tr>
      <th>Radiología</th>
      <th>${estadistica.radiologia.hora[i]}</th>
      <th>${estadistica.radiologia.especialista[i]}</th>
      <th>${estadistica.radiologia.paciente[i]}</th>
      <th>${estadistica.radiologia.rut[i]}</th>
      <th>${estadistica.radiologia.prevision[i]}</th>
    </tr>
  `
}

for (i = 0; i < estadistica.traumatologia.hora.length; i++) {
  texto += `
    <tr>
      <th>Traumatología</th>
      <th>${estadistica.traumatologia.hora[i]}</th>
      <th>${estadistica.traumatologia.especialista[i]}</th>
      <th>${estadistica.traumatologia.paciente[i]}</th>
      <th>${estadistica.traumatologia.rut[i]}</th>
      <th>${estadistica.traumatologia.prevision[i]}</th>
    </tr>
  `
}

for (i = 0; i < estadistica.dental.hora.length; i++) {
  texto += `
    <tr>
      <th>Dental</th>
      <th>${estadistica.dental.hora[i]}</th>
      <th>${estadistica.dental.especialista[i]}</th>
      <th>${estadistica.dental.paciente[i]}</th>
      <th>${estadistica.dental.rut[i]}</th>
      <th>${estadistica.dental.prevision[i]}</th>
    </tr>
  `
}

document.write(`
  <hr>
  <h3>Radiología:</h3>
  <p>Primera atención: ${estadistica.radiologia.paciente[0]} - ${estadistica.radiologia.prevision[0]}</p>
  <p>Última atención: ${estadistica.radiologia.paciente[ultRadiologia]} - ${estadistica.radiologia.prevision[ultRadiologia]}</p>
  <hr>
  <h3>Traumatología:</h3>
  <p>Primera atención: ${estadistica.traumatologia.paciente[0]} - ${estadistica.traumatologia.prevision[0]}</p>
  <p>Última atención: ${estadistica.traumatologia.paciente[ultTraumatologia]} - ${estadistica.traumatologia.prevision[ultTraumatologia]}</p>
  <hr>
  <h3>Dental:</h3>
  <p>Primera atención: ${estadistica.dental.paciente[0]} - ${estadistica.dental.prevision[0]}</p>
  <p>Última atención: ${estadistica.dental.paciente[ultDental]} - ${estadistica.dental.prevision[ultDental]}</p>
  <hr>
  <h3>Listado de todas las consultas:</h3>
  <table id="miTabla">${texto}</table>
`)
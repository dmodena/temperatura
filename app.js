'use strict'

let converter = function (origem, destino, valor) {
  if (origem === 'c' && destino === 'f') return arredonda(valor * 1.8 + 32)
  else if (origem === 'c' && destino === 'k') return arredonda(valor + 273.15)
  else if (origem === 'f' && destino === 'c') return arredonda((valor - 32) / 1.8)
  else if (origem === 'f' && destino === 'k') return arredonda(converter('f', 'c', valor) + 273.15)
  else if (origem === 'k' && destino === 'c') return arredonda(valor - 273.15)
  else if (origem === 'k' && destino === 'f') return arredonda(converter('k', 'c', valor) * 1.8 + 32)
  else return arredonda(valor)
}

let arredonda = function (valor) { return Math.round(valor * 100) / 100 }

let temperaturas = [
  { indice: 'c', nome: 'Celsius', simbolo: '&deg; C' },
  { indice: 'f', nome: 'Fahrenheit', simbolo: '&deg; F' },
  { indice: 'k', nome: 'kelvin', simbolo: 'K' }
]

let limpatudo = function () {
  $('#seletorIn').empty()
  $('#seletorOut').empty()
  $('#simboloIn').empty()
  $('#simboloOut').empty()
  limpaResultado()
}

let limpaResultado = function () {
  $('#valorOut').val('')
}

let popular = function (indice) {
  limpatudo()
  let selecionado = temperaturas.find(function (el) { return el.indice === indice })
  $('#simboloIn').html(selecionado.simbolo)
  $('#seletorIn').html('<option value="' + selecionado.indice  + '">' + selecionado.nome + '</option>')
  let valorSimboloOut = temperaturas.find(function (el) { return el.indice !== indice })
  $('#simboloOut').html(valorSimboloOut.simbolo)
  let restante = temperaturas.filter(function (el) { return el.indice !== indice })
  restante.forEach(function (el) {
    $('#seletorIn').append('<option value="' + el.indice + '">' + el.nome + '</option>')
    $('#seletorOut').append('<option value="' + el.indice + '">' + el.nome + '</option>')
  })
}

popular('c')

$('#seletorIn').change(function () {
  if (!$(this).is(':empty')) {
    popular($('#seletorIn option:selected').val())
  }
})

$('#seletorOut').change(function () {
  if (!$(this).is(':empty')) {
    limpaResultado()
    let selecionado = temperaturas.find(function (el) { return el.indice === $('#seletorOut option:selected').val() })
    $('#simboloOut').html(selecionado.simbolo)
  }
})

$('#calcular').click(function () {
  if (!isNaN($('#valorIn').val())) {
    let origem = $('#seletorIn option:selected').val()
    let destino = $('#seletorOut option:selected').val()
    let valor = parseFloat($('#valorIn').val())
    let resultado = converter(origem, destino, valor)
    $('#valorOut').val(resultado)
  }
})

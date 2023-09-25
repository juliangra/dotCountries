const capitalize = (input: string) => {
  return input.substring(0, 1).toUpperCase() + input.substring(1)
}

const formatList = (input: string[]) => {
  let output = ''

  if (input.length > 1) {
    input.map((value, i) => {
      if (i == 0) {
        output += value
      } else {
        output += `${i < input.length - 1 ? ', ' : ' and '} ${value}`
      }
    })
  } else {
    output = input[0]
  }
  return output
}

const formatCapitals = (input: string[]) => {
  if (input == undefined) return 'No capital'

  return formatList(input)
}

export { capitalize, formatList, formatCapitals }

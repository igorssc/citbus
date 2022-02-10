export const formatPhone = (value: string) => {
  const mask = value.replace(/\D/g, '').replace(/^0/, '')
  if (mask.length > 10) {
    return mask.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
  } else if (mask.length > 5) {
    return mask.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
  } else if (mask.length > 2) {
    return mask.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
  } else if (mask.length >= 1) {
    return mask.replace(/^(\d*)/, '($1')
  } else {
    return mask.replace(/^(\d*)/, '')
  }
}

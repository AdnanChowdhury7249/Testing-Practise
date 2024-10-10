function capitalize(string) {
  let firstIndex = string.indexOf(string)

  if (typeof string !== "string" && string.length === 0) {
    return ""
  }

  return string.charAt(firstIndex).toUpperCase() + string.slice(firstIndex + 1)
}



module.exports = capitalize;

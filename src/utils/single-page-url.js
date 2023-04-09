module.exports = function singlePageUrl(URI, id) {
  const encodedItemTitle = encodeURIComponent(
    URI.normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/\s/g, '-')
      .replace(/"/g, '')
      .substring(0, 30)
  )

  const singlePressReleaseUrl = `${id}-${encodedItemTitle}`

  return singlePressReleaseUrl
}

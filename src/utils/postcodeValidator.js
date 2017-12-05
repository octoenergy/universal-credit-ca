module.exports = function(postcode) {
    // Validate postcode
    if (postcode) {
        postcode = postcode.replace(/ /g, '')
        const POSTCODE_REGEX = /^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[A-HJKMNPR-Y0-9]? *[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/;
        return postcode.match(POSTCODE_REGEX) !== null
    } else {
        return false
    }
}
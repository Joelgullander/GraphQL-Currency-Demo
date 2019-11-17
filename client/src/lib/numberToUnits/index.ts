const defaultOpts = ['k','m','b']; // could be an array of strings: [' m', ' Mo', ' Md']

/**
 * Returns a rounded value
 *
 * @param {Number} n Number to be rounded
 * @param {Number} precision Precision that the value should be rounded for
 * @returns {Number}
 */
const round = (n: number, precision: number) => {
    var prec = Math.pow(10, precision);
    return Math.round(n*prec)/prec;
}

/**
 * Formats sent in number/integer to match default or passed in abbreviations.
 *
 * @param {Number} n Number to be converted
 * @param {String[]} [abbrev=['k','m','b']]  End Location
 * @returns {String} "100m"
 */
const format = (n: number, abbrev: string[] = defaultOpts) => {
    var base = Math.floor(Math.log(Math.abs(n))/Math.log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n/Math.pow(1000,base),2)+suffix : ''+n;
}

export default format;

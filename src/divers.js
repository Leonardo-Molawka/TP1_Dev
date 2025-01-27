/**
 * @description Definie la variable pour le hash du premier bloc
 * @type {string}
 */
export const monSecret = "";

/**
 * @description Retourne un timestamp au format aaaammjj-hh:mm:ss
 * @return {string}
 */
export function getDate() {
    // A coder
    const d = new Date()
    return d.getFullYear() + "" + d.getMonth() + 1 + "" + d.getDate() + "-" + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds())
}
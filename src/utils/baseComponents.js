export function setPx(len, def) {
    let px = parseInt(len)
    if(px) {
        return px
    } else {
        return def !== undefined ? def : 'auto'
    }
}
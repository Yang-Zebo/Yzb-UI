export function setPx(len) {
    let px = parseInt(len)
    if(px) {
        return px + 'px'
    } else {
        return 'auto'
    }
}
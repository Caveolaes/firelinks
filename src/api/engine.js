let files = import.meta.glob('./*.js', { eager: true })
let module = {}
// for (let [key, value] of Object.entries(files)) {
//     await value().then(res => {
//         const moduleValue = res.default
//         Object.assign(module,moduleValue)
//     })
// }
export default module


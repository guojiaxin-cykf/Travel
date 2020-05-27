
let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e) {}

export default {
  //city的默认值优先会从LocalStorage中去取
  city: defaultCity
  // 如果使用了LocalStorage时，建议在外层包裹一层try,catch
  // 因为某些浏览器中，用户关闭了本地存储或者使用了隐身模式，浏览器运行这段代码时
  // 就会报错。
}

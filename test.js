const jsonp = function(url ,data ){
  return new Promise((resolve,reject)=>{
    //1初始化url，callbackname，data拼接
    let dataString = url.indexOf('?') === -1 ? '?':'&'
    let callbackName = `jsonpCB_${Date.now()}`
    url += `${dataString}callback=${callbackName}`
    if(data){
      for(k in data){
        url+=`&${k}=${data[k]}`
      }
    }
    //2创建script
    let script = document.createElement('script')
    script.url = url
    //3.window函数
    window[callbackName] = result =>{
      delete window[callbackName]
      document.removeChild(script)
      if(result){
        resolve(result)
      }else{
        reject('数据没有请求到')
      }
    }
    script.addEventListener('error',()=>{
      delete window[callbackName]
      document.removeChild(script)
      reject('加载失败')
    },false)
    //4script添加到dom中
    document.body.appendChild(script)
    
  })
}

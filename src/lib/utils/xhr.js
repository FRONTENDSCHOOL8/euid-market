

/* 

[readyState]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

// 비동기 통신을 해보자!  XMLHttpRequest

/* -------------------------------------------- */
/*                 XHR callback                 */
/* -------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  }
} ){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url)
  
  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange',()=>{
    
    const {readyState,status,response} = xhr // 객체의 구조분해할당

    if(readyState === 4){
      if(status >= 200 && status < 400){
        onSuccess(JSON.parse(response));
      }else{
        onFail( {message:'에러가 발생했습니다.'} )
      }
    }
  })
  xhr.send(JSON.stringify(body))
}


// xhr({
//   method:'POST',
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data){
//     console.log( data );
//   },
//   onFail({message}){
//     console.log( message );
//   },
//   body: {name:'tiger'}
// })




xhr.get = (url,onSuccess,onFail) => {
  xhr({
    url,
    onSuccess,
    onFail
  })
}

xhr.post = (url,body,onSuccess,onFail) => {
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.put = (url,body,onSuccess,onFail) => {
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail) => {
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (data)=>{
//     console.log( data );
//   },
//   (err)=>{
//     console.log( err );
//   }
// )





/* -------------------------------------------- */
/*                XHR Promise API               */
/* -------------------------------------------- */


const defaultOptions = {
  method: 'GET',
  url: '',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


export function xhrPromise(options){

  const {method,url,body,errorMessage,headers} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers,
    }
  }
  const xhr = new XMLHttpRequest();

  xhr.open(method,url)

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body))

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response))
        }else{
          reject({message:errorMessage})
        }
      }
    })
  })
}


// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users'
// })
// .then((res)=>{
//   console.log( res );
// })



xhrPromise.get = (url)=>{
  return xhrPromise({ url })
}

xhrPromise.post = (url,body) =>{
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}

xhrPromise.put = (url,body) =>{
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}

xhrPromise.delete = (url) =>{
  return xhrPromise({
    url,
    method:'DELETE'
  })
}












































import axios from 'axios';
// 使用回调函数实现(不推荐)
// export default function request(options,success,error){
// 	// 1,创建一个axios实例
// 	const instance = axios.create({
// 		baseURL:"http://59.110.165.195:8089",
//         timeout:5000,
//         headers:{"Content-type":"application/x-www-form-urlencoded"}
// 	})
// 	instance(options).then(res=>{
//       console.log(res);
//       success(res);
// 	}).catch(err=>{
//       console.log(err);
//       error(err)
// 	})
// } 

// 推荐使用ES6promise实现
function request(options){
	// 1,创建一个axios实例
	return new Promise((resolve,reject)=>{
		const instance = axios.create({
		baseURL:"http://59.110.165.195:8089",
        timeout:5000,
	    headers:{"Content-type":"application/x-www-form-urlencoded"}
		});
        // 配置请求拦截
        // 请求拦截配置
        instance.interceptors.request.use(config=>{
             // console.log("请求之前的拦截");
             // 会对请求最通用配置
             return config;
        },err=>{
        	// console.log("请求拦截失败",err);
        	return err;
        })
        // 响应拦截配置
        instance.interceptors.response.use(response=>{
             // console.log("响应之前的拦截");
             return response.data;
        },err=>{
        	// console.log("响应拦截失败",err);
        	if (err && err.response){
        		switch (err.response.status){
        			case 400:
        			err.message = "请求错误";
        			break;
        			case 500:
        			err.message = "服务器错误"
        			break;
        		}
        	}
        	return err;
        })

		instance(options).then(res=>{
	       resolve(res);
		}).catch(err=>{
	       reject(err);
		})
	})
} 
export{
    request
}
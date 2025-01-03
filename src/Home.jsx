
//   import { useNavigate } from 'react-router-dom';  
  
//   const Home = () => {  
// 	const navigate = useNavigate();  
// 	// console.info('navigate: ', navigate);
// 	console.info('navigate: ', navigate.state);
  
// 	const goToUserProfile = (userId) => {  
// 	  navigate(`/user/${userId}`, { state: { from: 'home' } }); // 带参数和状态导航  
// 	};  
  
// 	const handleBack = () => {  
// 	  navigate(-1); // 返回上一个页面  
// 	  console.log('navigate(-1): ', navigate(-1));
// 	};  
  
// 	return (  
// 	  <div>  
// 		<h1>Home Page</h1>  
// 		<button onClick={() => goToUserProfile(1)}>查看用户 1 的资料</button>  
// 		<button onClick={handleBack}>返回</button>  
// 	  </div>  
// 	);  
//   };  
  
//   export default Home;
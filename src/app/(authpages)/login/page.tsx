import LoginForm from "@/components/layouts/loginForm";

const Login = () => {
  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>Login</h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='space-y-8'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login;

import Head from 'next/head'
import { LockClosedIcon, EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { PasswordField } from "../components/PasswordField";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  async function handleSignIn(data: { email: string; password: string }) {
    await signIn(data);
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"  style={{ background: '#121637', color: '#FFFFFF' }}>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="shortcut icon" href="/logo.png" />


      </Head>

      <div className="max-w-sm w-full space-y-8">
        <div>
        <Image
            className="mx-auto"
            src={logo}
            alt="Workflow"
            width={120} // Defina a largura desejada da imagem
            height={120} // Defina a altura desejada da imagem
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-wite" >Faça login em sua conta
</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleSignIn)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                {...register('email')}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <PasswordField password={password} setPassword={setPassword} />

            </div>
          </div>

          <div className="flex items-center justify-between">
             {/*<div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-yellow-300 focus:ring-yellow-500 border-gray-300 rounded"
              />
               <label htmlFor="remember_me" className="ml-2 block text-sm text-yellow-900">
                Remember me
              </label>  
  </div>*/}

            <div className="text-sm">
              <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">
              Esqueceu sua senha? 
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-yellow-400" aria-hidden="true" />
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
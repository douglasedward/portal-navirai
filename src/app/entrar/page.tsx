"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react'

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Decorative */}
      <div className="bg-blue-700 md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="text-yellow-300 text-4xl font-bold mb-4">Portal Naviraí</div>
        <div className="text-white text-xl">Governo Digital ao seu alcance</div>
        <div className="mt-8">
          <svg className="w-64 h-64 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      </div>

      {/* Right side - Sign In Form */}
      <div className="bg-white md:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-8">Entrar no Portal Naviraí</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <Input 
                id="email" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="pl-10"
              />
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="mt-1 relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="pl-10 pr-10"
              />
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="text-gray-400" size={20} />
                ) : (
                  <EyeIcon className="text-gray-400" size={20} />
                )}
              </button>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full h-10 rounded-3xl bg-blue-600 hover:bg-blue-500 text-yellow-200 font-semibold">
              Entrar
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </div>
  )
}
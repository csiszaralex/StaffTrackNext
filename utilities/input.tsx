import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { Icon } from '@/components/icons';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, type,...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const isPassword = type === 'password';

  return (
    <div className='relative'>
      <label className='block text-sm font-medium text-gray-700 dark:text-white'>{label}</label>
      <div className='relative'>
      <input
        className={`w-full px-3 py-2 mt-1 border rounded-lg placeholder-gray-500 ring-blue-900 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
        type={isPassword && showPassword ? 'text' : type}
        {...props}
      />
      {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex mt-1 items-center text-gray-500 dark:text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <Icon name="eye" size={20} /> : <Icon name="eyeOff" size={20} />}
          </button>
      )}
      </div>
    </div>
  );
}

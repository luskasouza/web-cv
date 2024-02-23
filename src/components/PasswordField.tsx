import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { FC, useState } from "react";

interface Props {
  password: string;
  setPassword: (value: string) => void;
}

export const PasswordField: FC<Props> = ({
  password,
  setPassword,
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex items-center">
        <input
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
          placeholder="Senha"
        />
        <button
          className="relative ml-2 flex items-center" 
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
          ) : (
            <EyeSlashIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
          )}
        </button>
      </div>
    </>
  );
};

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-indigo-700 shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)]",
    secondary: "bg-brand-highlight text-dark-bg hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

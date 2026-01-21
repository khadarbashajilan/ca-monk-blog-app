import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'flex h-13 w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-3.5 text-base transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-4 focus-visible:ring-blue-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input };

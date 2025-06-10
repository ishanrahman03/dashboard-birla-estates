import React from 'react';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options?: SelectOption[];
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options = [],
  label,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative inline-block', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={clsx(
            "appearance-none block w-full px-3 py-2 text-sm",
            "bg-white dark:bg-gray-800",
            "border border-gray-300 dark:border-gray-600",
            "rounded-md shadow-sm",
            "text-gray-900 dark:text-gray-100",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "cursor-pointer",
            "pr-8" // Space for the chevron
          )}
          {...props}
        >
          {options?.map((option) => (
            <option 
              key={option.value} 
              value={option.value}
              className="py-2"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <ChevronDown 
            size={16} 
            className="text-gray-500 dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};
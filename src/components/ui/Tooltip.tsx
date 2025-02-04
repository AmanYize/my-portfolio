// Tooltip Component (src/components/ui/tooltip.tsx)

import React, { ReactNode } from "react";

// Tooltip Props
interface TooltipProps {
  children: ReactNode;
  className?: string;
}

// Tooltip Component
export const Tooltip = ({ children, className }: TooltipProps) => (
  <div className={`tooltip ${className}`}>{children}</div>
);

// TooltipContent Props
interface TooltipContentProps {
  children: ReactNode;
  className?: string;
}

// TooltipContent Component
export const TooltipContent = ({
  children,
  className,
}: TooltipContentProps) => (
  <div className={`tooltip-content ${className}`}>{children}</div>
);

// TooltipTrigger Props
interface TooltipTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const TooltipTrigger = ({ asChild, children }: TooltipTriggerProps) => {
  if (asChild) {
    return <>{children}</>; // Render children without wrapping, or in your custom way
  }

  return <div className="tooltip-trigger">{children}</div>; // Regular rendering logic
};

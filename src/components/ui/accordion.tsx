import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border mb-[10px] cursor-pointer lg:px-8 py-1 px-5 rounded-2xl duration-500 transition-colors',
      'bg-[#f4f4f4] border-[#F0F0F0]',
      '[&[data-state=open]]:bg-primary-color', // Change the background color when active
      '[&[data-state=open]]:py-1', // Change the background color when active
      '[&[data-state=open]]:lg:py-4', // Change the background color when active
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 text-left items-center justify-between py-2 lg:py-4 font-semibold duration-500 transition-all',
        ' md:text-[18px] lg:text-[20px]  font-gelasio leading-[20px] md:leading-[32px] tracking-[-0.22px]',
        '[&[data-state=open]]:text-white',
        '[&[data-state=open]>svg]:rotate-180', // Rotate the icon when active
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-300' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden transition-all duration-500',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'text-[14px] md:text-[15px] leading-[21px] text-[#efeeee]',
      className
    )}
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

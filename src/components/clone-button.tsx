'use client';

import { Check, Copy } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function CloneButton({ className, ...props }: React.ComponentProps<'div'>) {
  const [copied, setCopied] = React.useState(false);
  const cloneCommand = 'git clone git@github.com:aleksa-codes/next-start.git';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'group bg-card relative overflow-hidden rounded-lg border px-6 py-4 shadow-sm transition-all hover:shadow-md',
        className,
      )}
      {...props}
    >
      <div className='flex items-center justify-between gap-4'>
        <div className='min-w-0 flex-1'>
          <p className='text-muted-foreground mb-1.5 text-xs font-medium'>Get Started</p>
          <code className='block truncate font-mono text-sm'>{cloneCommand}</code>
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={handleCopy}
          className='shrink-0 cursor-pointer transition-colors'
          aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
        >
          {copied ? (
            <Check className='text-chart-2' />
          ) : (
            <Copy className='text-muted-foreground group-hover:text-foreground' />
          )}
        </Button>
      </div>
    </div>
  );
}

export { CloneButton };

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <div className='container flex flex-col items-center justify-center gap-6'>
        <h1 className='text-center text-4xl font-bold tracking-tight md:text-5xl'>next-start</h1>
        <p className='text-muted-foreground max-w-xl text-center text-lg'>
          A minimal and clean starter template with Next.js 15, Tailwind CSS, shadcn/ui, Prettier and React Compiler.
        </p>
        <div className='flex items-center gap-4'>
          <Button asChild>
            <a href='https://github.com/aleksa-codes/next-start' target='_blank' rel='noopener noreferrer'>
              <Github className='size-4' />
              <span>GitHub</span>
            </a>
          </Button>
        </div>
      </div>
      <footer className='absolute bottom-4'>
        <a
          href='https://github.com/aleksa-codes'
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted-foreground text-sm underline'
        >
          Made by aleksa.codes
        </a>
      </footer>
    </main>
  );
}

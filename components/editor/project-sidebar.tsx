'use client';

import { FolderOpen, Plus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function EmptyProjectsState({ label }: { label: string }) {
  return (
    <div className='flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-border-subtle bg-subtle/40 px-6 py-10 text-center'>
      <FolderOpen className='mb-4 h-8 w-8 text-copy-faint' />
      <p className='text-sm font-medium text-copy-primary'>
        No {label.toLowerCase()} yet
      </p>
      <p className='mt-2 text-sm text-copy-muted'>
        Projects will appear here once they are available.
      </p>
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        'fixed top-14 left-0 z-40 flex h-[calc(100dvh-3.5rem)] w-full max-w-sm flex-col border-r border-surface-border bg-surface/95 backdrop-blur-xl transition-transform duration-200 ease-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
      aria-hidden={!isOpen}>
      <div className='flex items-center justify-between border-b border-surface-border px-5 py-4'>
        <div>
          <h2 className='text-sm font-semibold text-copy-primary'>Projects</h2>
        </div>

        <Button
          variant='ghost'
          size='icon'
          onClick={onClose}
          aria-label='Close project sidebar'>
          <X className='h-5 w-5 text-copy-secondary' />
        </Button>
      </div>

      <Tabs
        defaultValue='my-projects'
        className='flex flex-1 flex-col px-5 py-5'>
        <TabsList className='w-full bg-subtle'>
          <TabsTrigger value='my-projects'>My Projects</TabsTrigger>
          <TabsTrigger value='shared'>Shared</TabsTrigger>
        </TabsList>

        <TabsContent value='my-projects' className='mt-5 flex flex-1'>
          <EmptyProjectsState label='My Projects' />
        </TabsContent>

        <TabsContent value='shared' className='mt-5 flex flex-1'>
          <EmptyProjectsState label='Shared Projects' />
        </TabsContent>
      </Tabs>

      <div className='border-t border-surface-border p-5'>
        <Button className='w-full justify-center gap-2'>
          <Plus className='h-4 w-4' />
          New Project
        </Button>
      </div>
    </aside>
  );
}

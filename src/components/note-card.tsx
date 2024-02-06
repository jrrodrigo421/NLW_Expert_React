export function NoteCard() {
  return (
    <div className='rounded-md bg-slate-800 p-5 space-y3 overflow-hidden relative'>
      <span className='text-sm font-medium text-slate-300'>
        há 2 dias
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores in optio voluptatem corrupti labore, cupiditate quibusdam placeat. Corporis a magnam earum tempora itaque! Minima ipsa itaque accusamus facere obcaecati culpa.

      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />

    </div>
  )

}
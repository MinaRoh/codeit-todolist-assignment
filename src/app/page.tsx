export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>16px 글자 (none)</div>
      <div className='font-bold'>16px bold 글자 (font-bold)</div>
      <div className='font-extrabold'>16px extrabold 글자 (font-extrabold)</div>
      <div className='font-bold text-lg'>18px bold 글자 text-lg (font-bold text-lg)</div>
      <div className='font-bold text-xl'>20px bold 글자 text-xl (font-bold text-xl)</div>
    </main>
  );
} 

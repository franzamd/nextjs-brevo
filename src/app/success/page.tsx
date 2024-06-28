import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-4xl'>Formulario enviado con exito! 🎉</h1>
      <Link href={'/'}>Volver a la pagina principal</Link>
    </div>
  );
};

export default SuccessPage;

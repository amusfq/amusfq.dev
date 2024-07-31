const NotFound = () => {
  return (
    <div className='h-full'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>Page Not Found</h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='flex flex-row space-x-4 divide-x divide-gray-600 text-white items-center justify-center h-full'>
        <h3 className='text-xl font-bold'>404</h3>
        <p className='pl-3 text-xl'>This page could not be found</p>
      </div>
    </div>
  )
}

export default NotFound;

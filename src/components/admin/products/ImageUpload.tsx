'use client'
import { getImagePath } from '@/helpers';
import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';

export default function ImageUpload({ image }: { image: string | undefined }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (image) {
      setImageUrl(image);
    }
  }, [image]);

  return (
    <CldUploadWidget
      uploadPreset="burgerdream"
      options={{
        maxFiles: 1,
      }}
      onSuccess={(results) => {
        if (results.event === 'success') {
          // @ts-ignore
          setImageUrl(results.info?.secure_url);
        }
      }}
    >
      {({ open }) => {
        return (
          <div className='space-y-2'>
            <label
              className="font-bold"
              htmlFor="categoryId"
            >Imagen del producto</label>
            <div
              className="flex items-center justify-center w-full h-36 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              onClick={() => open()}
            >
              {
                (imageUrl.length > 0)
                  ? <img className="object-cover rounded-t-lg h-32 md:rounded-none md:rounded-s-lg cursor-pointer" src={getImagePath(imageUrl)} alt='Imagen del producto' />
                  : (
                    <label className="flex flex-col items-center justify-center cursor-pointer">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        <p className="mb-2 text-sm">Agregar imagen</p>
                      </div>
                    </label>
                  )
              }
            </div>
            <input
              type="hidden"
              name="image"
              defaultValue={imageUrl}
            />
          </div>
        );
      }}
    </CldUploadWidget>
  )
}
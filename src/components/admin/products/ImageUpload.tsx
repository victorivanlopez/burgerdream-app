'use client'
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { CloudUpIcon } from '@/components/ui/icons';
import { getImagePath } from '@/helpers';

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
                        <CloudUpIcon />
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
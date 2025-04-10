import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const averageRating = 1; // 


  const fetchProductData = () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      console.log(item);
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className="min-h-screen px-6 sm:px-12 py-10 bg-gray-50 rounded-2xl mt-2 shadow-2x1 shadow-blue-300">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Thumbnails + Main Image */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 sm:overflow-y-auto overflow-x-auto max-h-[400px] sm:max-h-none">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border  border-blue-500 hover:border-gray-400 transition"
              />
            ))}
          </div>

          {/* Imagem principal */}
          <div className="flex-1">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-auto rounded-xl object-contain sm:max-h-[500px]  bg-white"
            />
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {productData.name}
            </h1>
            <div className='flex items-center gap-1 mt-2'>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  className='w-3'
                  src={index < Math.round(averageRating) ? assets.star_icon : assets.star_dull_icon}
                  alt=''
                />


              )

              )}
              <p className=''> ({averageRating})</p>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {productData.description}
            </p>
            <p className="text-2xl font-semibold text-green-600 mb-6">
              R$ {productData.price}
            </p>
            <p className="text-sm text-gray-400 italic mb-6">
                Produto 100% original
            </p>
            

            {/* Seção de tamanhos */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Tamanho:</h2>
              <div className="flex gap-3 flex-wrap">
                {(productData.sizes ?? ['P', 'M', 'G', 'GG']).map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border font-medium transition ${selectedSize === size
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botões */}
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all">
              Adicionar ao carrinho
            </button>
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition-all">
              Comprar agora
            </button>
          </div>
          
        </div>
        
      </div>
      {/** ------------------------------ Descrição E review */}
      <div className='mt-20'>
            <div className='flex'>
                <p className='border px-5 py-3 text-sm'> Descrição</p>
                <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>An e-commer website is an online platfgform tha facilitates the buying</p>
            </div>
        </div>
        {/** ------------------------------ display relate products */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0">Carregando...</div>
  );
};

export default Product;

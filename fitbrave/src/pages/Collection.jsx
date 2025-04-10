import React, { use, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext);
  
  const [showFilter, setShowFilter] = useState(false);
  const[filterProducts,setFilterProducts] = useState([]);
  const [sortType,setSortType] = useState('relevent')
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory]= useState([]);
  const toggleCategory = (e) => {
    
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item != e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))// Fechamento correto
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  };
  
  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length  > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))

    }
    setFilterProducts(productsCopy)
    
  }

  const sortProduct =  () =>{
    
    let fpCopy = filterProducts.slice();
    console.log(fpCopy)
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        
        break;
      case'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
      break;

      default:
        applyFilter();
        
      break;
    
    }
    
  }
 
  useEffect(()=>{
    applyFilter();
    
  },[category,subCategory,search,showSearch])
 useEffect(()=>{
  sortProduct()
 },[sortType])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Início da div de filtro */}
      <div className="w-full sm:w-1/3"> {/* Ajuste o tamanho para 1/3 da tela em sm */}
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filtro
          <img
            className={`h-3 transition-transform duration-300   ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Início da área do filtro com animação */}
        <div
          className={`border   border-gray-300 rounded-lg bg-gradient-to-l from-[#04BECD] via-[#3582D8] to-[#7A2DE7] pl-5 py-3 mt-6 overflow-hidden transition-all duration-500 ${
            showFilter ? "opacity-100 max-h-[1000px] scale-y-100 origin-top" : "opacity-0 max-h-0 scale-y-0   origin-bottom"
          }`}
        >
          <p className="mb-3 text-sm font-medium text-white"> CATEGORIAS</p>
          <div className="flex flex-col gap-2 text-sm font-extralight text-white">
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox" value="Men"  onChange={toggleCategory} /> Homem
            </label>
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox" value="Women"onChange={toggleCategory} /> Mulher
            </label>
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox" value="Kids" onChange={toggleCategory}/> Kids
            </label>
          </div>
        </div>
        {/* Fim da área do filtro com animação */}

        {/* Início da área de subcategorias */}
        <div
          className={`border border-gray-300 rounded-lg bg-gradient-to-l from-[#04BECD] via-[#3582D8] to-[#7A2DE7] pl-5 py-3 mt-6 overflow-hidden transition-all duration-500 ${
            showFilter ? "opacity-100 scale-y-100  origin-bottom" : "opacity-0 max-h-0 scale-y-0 origin-bottom "
          }`}
        >
          {/* Início da seção de tipos */}
          <p className="mb-3 text-sm font-medium text-white">TIPO</p>
          <div className="flex flex-col gap-2 text-sm font-extralight text-white">
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox"  value="Topwear"onChange={toggleSubCategory} /> Top wear
            </label>
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox" value="Bottomwear"onChange={toggleSubCategory} /> Bottom wear
            </label>
            <label className="flex items-center gap-2">
              <input className="w-3 accent-white" type="checkbox" value="Winterwear"onChange={toggleSubCategory} /> Winter wear
            </label>
          </div>
          {/* Fim da seção de tipos */}
        </div>
        {/* Fim da área de subcategorias */}
      </div>
      {/* Fim da div de filtro */}

      {/* Início da div de título da coleção */}
      <div className="w-full sm:w-2/3"> {/* Ajuste o tamanho para 2/3 da tela em sm */}
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'TODA'} text2={'COLEÇÃO'}/>
          <select className="border_2 border-gray-300 text-sm px-2"  onChange={(e)=> setSortType(e.target.value)}>
            <option  value="relavent">Organizado por : Relevancia</option>
            <option value="low-high" >Organizado por : Mais Baratos</option>
            <option value="high-low" >Organizado por : Mais Caros</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }

        </div>
      </div>
      {/* Fim da div de título da coleção */}
    </div>
  );
};

export default Collection;

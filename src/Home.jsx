import { useSelector } from "react-redux";
import "./App.css";
import ProductCard from "./Components/ProductCard";
// import { ProductsList } from './Store/ProductsList'// this way not use react redux
// import { store } from './Store/ReduxReducerProducts' // this way not use react redux

function Home() {
  // console.log(store.getState().products)
  // console.log(ProductsList)

  const ProductState = useSelector((state) => state.products);
  // console.log(ProductState)
  return (
    <>
      <div className="products-container">
        {ProductState.map(({ title, rating, price, image, id }) => {
          return (
            <ProductCard
              key={id}
              productId={id}
              title={title}
              rating={rating.rate}
              price={price}
              imageUrl={image}
            />
          );
        })}
      </div>

      {/* First way but not a proper because redux is not use */}

      {/* {ProductsList.map(({ title, rating, price, image,id })=> {
           return <ProductCard key={id} title={title} rating={rating.rate} price={price} imageUrl={image} />
      })} */}
      {/* Second way but not a proper because redux is not use */}

      {/* {store.getState().products.map(({ title, rating, price, image,id })=> {
           return <ProductCard key={id} title={title} rating={rating.rate} price={price} imageUrl={image} />
      })} */}
      {/* <ProductCard/> */}
    </>
  );
}

export default Home;

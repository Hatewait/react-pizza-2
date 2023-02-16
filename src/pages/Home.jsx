import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId, setPageCount } from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaItems } from '../redux/slices/pizzasSlice';
import { Link } from 'react-router-dom';

function Home() {
  const { pageCount: currentPage, categoryId, searchValue } = useSelector(selectFilter);
  //const { pageCount: currentPage, categoryId } = useSelector(state => state.filter);
  //const categoryId = useSelector(state => state.filter.categoryId); // вытащили из хранилища стор айдишник по дефолту - 0
  //const currentPage = useSelector(state => state.filter.pageCount);
  //const test = useSelector(state => state.filter)

  const { items, status } = useSelector(selectPizzaItems);
  const sortType = useSelector(state => state.filter.sort.sortProperty); // вытащили из хранилища стор айдишник по дефолту - 0
  const dispatch = useDispatch();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (num) => {
    dispatch(setPageCount(num))
  }

  const getPizzas = async () => {
   // setIsLoading(true); //loading started, wait while it ends
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue  ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({
      sortBy,
      order,
      category,
      search,
      currentPage,
    }))
    window.scrollTo(0, 0);
  }

  React.useEffect( () => {
      getPizzas();

  }, [categoryId, sortType, searchValue, currentPage]) // didMount - []

  const pizzas = items.map((obj) => <Link to={`/pizza/${obj.id}`} key={obj.id}><PizzaBlock {...obj} /></Link>);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          {/*<Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />*/}
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {
          status === 'error' ?
              <div>
                <h2>Ups, error</h2>
                <p>Here is something wrong</p>
              </div> : (
                  <div className="content__items">
                    {status === 'loading' ? skeletons : pizzas}
                  </div>
              )
        }
       {/* <div className="content__items">
          {status === 'loading' ? skeletons : pizzas}
        </div>
*/}
        <Pagination onChangePage={(number) => onChangePage(number)} />
      </div>
  )
}

export default Home;

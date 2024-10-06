import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map(item => item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section className='menu section'>
      <div className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <div className='flex flex-wrap gap-8 justify-center'>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </div>
    </section>
  </main>;
}

export default App;
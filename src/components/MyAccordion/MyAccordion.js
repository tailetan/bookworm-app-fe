import React, { Fragment, useState } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

function MyAccordion(props) {
  const [lists, setLists] = useState([
    {
      _id: 'id_category',
      item_names: [],
      list_name: 'Category',
      isOpen: false
    },
    {
      _id: 'id_author',
      item_names: [],
      list_name: 'Author',
      isOpen: false
    },
    {
      _id: 'id_rating_star',
      item_names: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
      list_name: 'Rating star',
      isOpen: false
    }
  ]);

  const [filters, setFilter] = useState({
    Category: '',
    Author: '',
    'Rating star': ''
  });

  const handleToggle = (index) => {
    let listsClone = [...lists];
    listsClone[0].item_names = [...props.categories];
    listsClone[1].item_names = [...props.authors];
    listsClone[index] = {
      ...listsClone[index],
      isOpen: !listsClone[index].isOpen
    };
    setLists(listsClone);
  };

  const handleFilter = async (item, name) => {
    let filtersClone = { ...filters };
    if (filtersClone[name] === item) {
      filtersClone[name] = '';
      await setFilter(filtersClone);
      props.handleFilter('', name);
    } else {
      filtersClone[name] = item;
      await setFilter(filtersClone);
      props.handleFilter(item, name);
    }
  };

  return (
    <Fragment>
      {lists.map((list, index) => (
        <Card id="accordion" className="mb-1" key={list._id}>
          <CardHeader onClick={() => handleToggle(index)}>
            <strong>{list.list_name}</strong>
          </CardHeader>
          <Collapse isOpen={list.isOpen}>
            <CardBody>
              <ul>
                {list.item_names.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleFilter(item, list.list_name)}
                    className={item === filters[list.list_name] ? 'active' : ''}>
                    {item}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Collapse>
        </Card>
      ))}
    </Fragment>
  );
}

export default MyAccordion;
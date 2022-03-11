import React, { Fragment, useState } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

function MyAccordion() {

    // const [isOpen, setIsOpen] = useState("");
    const [lists, setLists] = useState([
      {
        _id: "id_category",
        item_names: ["Category #1", "Category #2", "Category #3"],
        list_name: "Category",
        isOpen: false,
      },
      {
        _id: "id_author",
        item_names: ["Author #1", "Author #2", "Author #3", "Author #4"],
        list_name: "Author",
        isOpen: false,

      },
      {
        _id: "id_rating_star",
        item_names: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"],
        list_name: "Rating star",
        isOpen: false,

      }
    ]);
  
    const handleToggle = (index) => {
        let listsClone = [...lists];
        listsClone[index] = {...listsClone[index], isOpen: !listsClone[index].isOpen}
        setLists(listsClone);
    };


  return (
    <Fragment>
    {lists.map((list, index) => (
      <Card id='accordion' className='mb-1' key={list._id}>
        <CardHeader onClick={() => handleToggle(index)}>
          <strong>{list.list_name}</strong>
        </CardHeader>
        <Collapse isOpen={list.isOpen}>
          <CardBody>
            <ul>
              {list.item_names.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </CardBody>
        </Collapse>
      </Card>
    ))}
  </Fragment>
  )
}

export default MyAccordion
import React, { useState } from "react";
import CategoryPageFilterItem from "./CategoryPageFilterItem";
import { nanoid } from "nanoid";

const accordeonData = [
    {
        title: "Collapsible Group Item #1",
        name: "panel1",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor
    sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
    },
    {
        title: "Collapsible Group Item #2",
        name: "panel2",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor
    sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
    },
    {
        title: "Collapsible Group Item #3",
        name: "panel3",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget Lorem ipsum dolor
    sit amet, consectetur adipiscing elit Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.`
    }
]

const CategoryPageFilter = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const accorgionContent = accordeonData.map((item, i) => <CategoryPageFilterItem key={nanoid()} num={i} title={item.title} text={item.text} name={item.name} expanded={expanded} handleChange={handleChange}/>)

    return (
        <>
            {accorgionContent}
        </>
    )
}
export default CategoryPageFilter;
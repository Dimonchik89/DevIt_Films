import { useState } from "react";

export const useContains = () => {
    const [newArr, setNewwArr] = useState([]);

    const hashMap = (totalArr) => {
        let arr = [...totalArr];
        let newArr = [];
        arr?.forEach((item, i) => {
            let include = false;
            newArr.forEach((el, q) => {
                if(Object.keys(el)[0] === item.media_type) {
                    el[item.media_type].push(item);
                    include = true;
                }
            })
            if(!include) {
                newArr.push({[item.media_type]: [item]})
            }
        })
        setNewwArr(newArr);
    }

    const hashMapReturn = (totalArr) => {
        let arr = [...totalArr];
        let newArr = [];
        arr?.forEach((item, i) => {
            let include = false;
            newArr.forEach((el, q) => {
                if(Object.keys(el)[0] === item.media_type) {
                    el[item.media_type].push(item);
                    include = true;
                }
            })
            if(!include) {
                newArr.push({[item.media_type]: [item]})
            }
        })
        return newArr;
    }
    return {newArr, hashMap, hashMapReturn}
}
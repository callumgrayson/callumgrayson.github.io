import React, { useEffect, useState } from "react";

import { handleData, checkAnagrams, getXLengthWords } from "./createTree";
import Loader from "./Loader";
import "./v1.css";

const V1 = (props) => {
  const [listSize, setListSize] = useState("small");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [displayAnagrams, setDisplayAnagrams] = useState([]);

  const [searchNumber, setSearchNumber] = useState("");
  const [searchNumberInput, setSearchNumberInput] = useState("");
  const [displayLengthAnagrams, setDisplayLengthAnagrams] = useState([]);
  const [tree, setTree] = useState({});
  const [wordsArray, setWordsArray] = useState({});

  const [isFetching, setIsFetching] = useState(false);
  const [isSearchLet, setIsSearchLet] = useState(false);
  const [isSearchLen, setIsSearchLen] = useState(false);

  useEffect(() => {
    const getUrl = () => {
      switch (listSize) {
        case "small":
          return "https://gist.githubusercontent.com/callumgrayson/452618a6cccc79dcfd5bcada74169d8f/raw/e2afcae22e0da19acafe94818fd237da855bbc2c/corncob.txt";
        case "large":
          return "https://gist.githubusercontent.com/callumgrayson/caf0f4f67ecbbd13579441a59facfefc/raw/61c2ce99798596bcf2203b91801e64d4ba0545c8/words.txt";
        default:
          return "";
      }
    };

    const getData = async () => {
      let data = {};

      if (wordsArray && wordsArray.hasOwnProperty(listSize)) {
        return;
      }

      if (!localStorage.hasOwnProperty(listSize)) {
        const url = getUrl();
        setIsFetching(true);
        const res = await fetch(url);
        data = await res.text();
        // console.log('data', data);
        localStorage.setItem(listSize, data);
      } else {
        data = localStorage.getItem(listSize);
      }

      // console.log('data[listSize]', data[listSize]);
      // let start = Date.now();
      const [wTree, wArr] = await handleData(data);
      // console.log('wTree, wArr', wTree, wArr);
      // let end = Date.now();
      // let dur = end - start;
      // console.log("Array preparation duration", dur);

      // console.log('tree', tree);
      const newTree = { ...tree, [listSize]: wTree };
      const newArr = { ...wordsArray, [listSize]: wArr };
      setTree(newTree);
      setWordsArray(newArr);
      setIsFetching(false);
    };

    getData();
  }, [listSize, tree, wordsArray]);

  useEffect(() => {
    // console.log('tree', tree);
    const getAnagrams = async (inTerm) => {
      // let anags = await checkAnagrams(inTerm, tree[listSize]);
      setIsSearchLet(true);
      let anags = await checkAnagrams(inTerm, wordsArray[listSize]);
      if (searchTerm && !anags.length) {
        anags = ["There are no anagrams"];
      }
      setDisplayAnagrams(anags);
      setIsSearchLet(false);
    };

    if (searchTerm && wordsArray.hasOwnProperty(listSize))
      getAnagrams(searchTerm);
  }, [searchTerm, wordsArray, listSize]);

  useEffect(() => {
    // console.log('wordsArray', wordsArray);
    const getAnagrams = async (inLength) => {
      setIsSearchLen(true);
      let anags = await getXLengthWords(inLength, wordsArray[listSize]);
      if (searchNumber && !anags.length) {
        anags = [["There are no anagrams"]];
      }
      setDisplayLengthAnagrams(anags);
      setIsSearchLen(false);
    };

    if (searchNumber && wordsArray.hasOwnProperty(listSize))
      getAnagrams(searchNumber);
  }, [searchNumber, wordsArray, listSize]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const handleNumberChange = (e) => {
    setSearchNumberInput(e.target.value);
  };
  const handleLengthSubmit = (e) => {
    e.preventDefault();
    setSearchNumber(searchNumberInput);
  };

  const prepareLengthAnagrams = (list) => {
    if (list.length < 1) return [{ 0: [""] }];
    const outObj = {};
    list.forEach((el) => {
      const len = el.length;
      if (outObj.hasOwnProperty(len)) {
        outObj[len].push(el);
      } else {
        outObj[len] = [el];
      }
    });

    const descendingLengths = Object.keys(outObj).sort((a, b) => b - a);
    const outArr = descendingLengths.map((key) => {
      return { [key]: outObj[key] };
    });
    return outArr;
  };
  return (
    <div className="v1">
      <div>
        <span>Dictionary size: </span>
        <select
          value={listSize}
          onChange={(e) => {
            // console.log('e.target.value', e.target.value);
            setListSize(e.target.value);
          }}
        >
          <option value="small">Small (58k)</option>
          <option value="large">Large (230k)</option>
        </select>
        <Loader loading={isFetching} text="Loading" />
      </div>
      <div>
        <h3>Anagrams by letters</h3>
        <div className={`formBox${isFetching && " isFetching"}`}>
          {!isFetching && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                maxLength={29}
                placeholder="enter word/letters"
                required
              />
              <button onClick={handleSubmit}>Search</button>
            </form>
          )}
        </div>

        <div>
          {isSearchLet ? (
            <Loader loading={isSearchLet} text="Searching" />
          ) : (
            <ul>
              {displayAnagrams &&
                displayAnagrams.map((ana, i) => {
                  return <li key={`${i}${ana}`}>{ana}</li>;
                })}
            </ul>
          )}
        </div>
      </div>

      <div>
        <h3>Anagrams by length</h3>
        <div className={`formBox${isFetching && " isFetching"}`}>
          {!isFetching && (
            <form onSubmit={handleLengthSubmit}>
              <input
                type="number"
                min={2}
                max={29}
                value={searchNumberInput}
                onChange={handleNumberChange}
                placeholder="enter word length"
                required
                style={{ width: "173px" }}
              />
              <button onClick={handleLengthSubmit}>Search</button>
            </form>
          )}
        </div>
        <div>
          {isSearchLen ? (
            <Loader loading={isSearchLen} text="Searching" />
          ) : (
            displayLengthAnagrams.length > 0 &&
            prepareLengthAnagrams(displayLengthAnagrams).map((obj) => {
              let len = obj ? Object.keys(obj)[0] : 0;
              return (
                <div key={len}>
                  <h4>{len === "1" ? 0 : len} variations</h4>
                  <ul>
                    {obj[len].map((ana, i) => {
                      return Array.isArray(ana) && ana.length ? (
                        <li key={`${i}${ana[0]}`}>{ana.join(" - ")}</li>
                      ) : (
                        ana
                      );
                    })}
                  </ul>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default V1;

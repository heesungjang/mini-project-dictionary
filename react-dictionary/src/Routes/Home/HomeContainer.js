import React from "react";
import HomePresenter from "./HomePresenter";
import { useSelector } from "react-redux";

const HomeContainer = () => {
    const dictionaryList = useSelector((state) => state.dictionary.list);

    return <HomePresenter dictionaryList={dictionaryList} />;
};

export default HomeContainer;

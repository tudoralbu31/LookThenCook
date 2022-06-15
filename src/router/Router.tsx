import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account } from '../pages/Account/Account';
import { MainPage } from '../pages/MainPage/MainPage';
import { Search } from '../pages/Search/Search';
import { NavBar } from '../components/NavBar/NavBar';

export const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </BrowserRouter>
    )
}